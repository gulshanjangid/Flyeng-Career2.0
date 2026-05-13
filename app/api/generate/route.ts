// app/api/generate/route.ts
import { db } from '@/lib/db';
import { generateWebsite } from '@/lib/ai/generation-service';
export async function POST(req: Request) {
    try {
        const { prompt, projectId, model = 'llama-3.3-70b-versatile', currentCode } = await req.json();

        if (!prompt) return new Response('Prompt required', { status: 400 });

        // Mock User Auth for now (Replace with actual auth later)
        const userId = '00000000-0000-0000-0000-000000000000';
        // Ideally verify user here

        // Create or Get Project
        let project;
        try {
            if (projectId) {
                const res = await db.query('SELECT * FROM projects WHERE id = $1', [projectId]);
                project = res.rows[0];
            } else {
                const res = await db.query(
                    "INSERT INTO projects (user_id, name, description, mode) VALUES ($1, $2, $3, 'ai') RETURNING *",
                    [userId, 'Untitled Project', prompt.substring(0, 50)]
                );
                project = res.rows[0];
            }
        } catch (dbError) {
            console.warn("Database error (running in demo mode):", dbError);
            project = { id: 'demo-project-id', name: 'Demo Project' };
        }

        if (!project) project = { id: 'demo-project-id', name: 'Demo Project' };

        const encoder = new TextEncoder();
        const stream = new ReadableStream({
            async start(controller) {
                try {
                    let fullCode = '';
                    let tokenCount = 0;

                    // Stream generation using Unified Service
                    const upstreamStream = await generateWebsite(prompt, project.id, model, currentCode);

                    if (!upstreamStream) {
                        throw new Error("No response stream from AI service");
                    }

                    const reader = upstreamStream.getReader();
                    const decoder = new TextDecoder();

                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) break;

                        const chunk = decoder.decode(value, { stream: true });
                        fullCode += chunk;
                        tokenCount++;
                        // Detect File Payload Delimiter
                        if (fullCode.includes("/* |||FILES_START||| */")) {
                            // Don't emit the payload (or the delimiter) as tokens to the frontend
                            // The frontend just sees App.jsx until the end
                            const [visibleCode, payload] = fullCode.split("/* |||FILES_START||| */");

                            // Send the visible part only if we haven't already
                            // Actually, we've been sending chunks. We need to be careful not to send the delimiter.
                            // For simplicity, we just stop emitting tokens for the delimiter and payload part.
                            // But since `chunk` might contain part of the delimiter, it's tricky.
                            // Ideally, `fullCode` is the buffer.
                            // We can just emit `chunk` ONLY if we haven't hit the delimiter lock yet.
                        } else {
                            const data = JSON.stringify({
                                type: 'token',
                                content: chunk,
                                tokens: tokenCount,
                                progress: Math.min((tokenCount / 1000) * 100, 99)
                            });
                            controller.enqueue(encoder.encode(JSON.stringify({
                                type: 'token',
                                content: chunk,
                                tokens: tokenCount,
                                progress: Math.min((fullCode.length / 5000) * 100, 95)
                            }) + '\n'));
                        }
                    }

                    // --- NEW LOGIC: Multi-File Extraction ---
                    let finalFiles = {};
                    const delimiter = "/* |||FILES_START||| */";

                    if (fullCode.includes(delimiter)) {
                        const parts = fullCode.split(delimiter);
                        try {
                            // The second part is the JSON string of files
                            // It might be ' "{"App.jsx": ...}" ' or similar
                            // We need to trim potential newlines
                            const jsonPayload = parts[1].trim();
                            console.log("FC Agent: Extracting file payload...", jsonPayload.substring(0, 50));
                            finalFiles = JSON.parse(jsonPayload);
                        } catch (e) {
                            console.error("FC Agent Extract Failed:", e);
                            // Fallback to single file wrapping
                            finalFiles = { "App.jsx": parts[0] };
                        }
                    } else {
                        // Logic for legacy strings (if delimiter missing)
                        // ... Legacy code wrapping logic ...
                        finalFiles = {
                            "App.jsx": fullCode,
                            "styles.css": "@tailwind base; @tailwind components; @tailwind utilities;",
                            "index.html": "<div id='root'></div>"
                        };
                    }


                    controller.enqueue(encoder.encode(JSON.stringify({
                        type: 'complete',
                        projectId: project.id,
                        files: finalFiles
                    }) + '\n'));

                    controller.close();
                } catch (error) {
                    console.error("Stream Error", error);
                    controller.error(error);
                }
            }
        });

        return new Response(stream, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
            },
        });

    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
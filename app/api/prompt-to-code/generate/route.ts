import { PromptToCodeEngine } from '@/lib/prompt-to-code/generation-engine';
import { validateGeneratedCode } from '@/lib/prompt-to-code/code-validator';

export async function POST(request: Request) {
    const body = await request.json();
    const { brief, style, industry, tone, sections } = body;

    // Initialize engine lazily
    const engine = new PromptToCodeEngine(
        process.env.GROQ_API_KEY || 'YOUR_GROQ_API_KEY',
        process.env.GEMINI_API_KEY || 'dummy_key'
    );

    // Create readable stream for SSE
    const stream = new ReadableStream({
        async start(controller) {
            try {
                const result = await engine.generate({
                    brief,
                    style,
                    industry,
                    tone,
                    sections,
                });

                // Validate generated code (specifically the page.tsx content)
                // If files['app/page.tsx'] exists, validate it
                let validation = null;
                if (result.data.files && result.data.files['app/page.tsx']) {
                    validation = await validateGeneratedCode(result.data.files['app/page.tsx']);
                }

                // Send chunks to client
                controller.enqueue(
                    new TextEncoder().encode(
                        `data: ${JSON.stringify({
                            type: 'generated',
                            data: result.data,
                            validation,
                        })}\n\n`
                    )
                );

                // Send export options
                controller.enqueue(
                    new TextEncoder().encode(
                        `data: ${JSON.stringify({
                            type: 'options',
                            options: [
                                { label: 'Preview', value: 'preview' },
                                { label: 'Export Next.js', value: 'nextjs' },
                                { label: 'Deploy to Vercel', value: 'vercel' },
                            ],
                        })}\n\n`
                    )
                );

                controller.close();

            } catch (error: any) {
                console.error("Generation API Error:", error);
                controller.enqueue(
                    new TextEncoder().encode(
                        `data: ${JSON.stringify({
                            type: 'error',
                            message: error.message || "Unknown error occurred",
                        })}\n\n`
                    )
                );
                controller.close();
            }
        },
    });

    return new Response(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
        },
    });
}
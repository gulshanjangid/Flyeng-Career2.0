import { Groq } from "groq-sdk";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || 'YOUR_GROQ_API_KEY' });
        const { topic, difficulty, techStack } = await req.json();

        const prompt = `
            Act as a Senior Software Architect. Create a comprehensive technical blueprint for a unique software project based on:
            
            Topic: ${topic || "Any innovative idea"}
            Difficulty: ${difficulty || "Intermediate"}
            Preferred Tech: ${techStack || "Best fit for the job"}

            You MUST return a valid JSON object with this EXACT structure:
            {
                "overview": {
                    "title": "Project Name",
                    "tagline": "Catchy one-liner",
                    "description": "2-3 sentences explaining the core value proposition.",
                    "difficulty": "Beginner/Intermediate/Advanced",
                    "estimatedTime": "e.g. 3 weeks"
                },
                "features": ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
                "techStack": {
                    "frontend": "e.g. Next.js, Tailwind",
                    "backend": "e.g. Node.js, PostgreSQL",
                    "infrastructure": "e.g. Vercel, Supabase"
                },
                "schema": [
                    {
                        "table": "Users",
                        "columns": ["id (UUID)", "email (String)", "role (Enum)"],
                        "description": "Stores user authentication data."
                    }
                ],
                "endpoints": [
                    {
                        "method": "POST",
                        "path": "/api/auth/login",
                        "description": "Authenticates user and returns JWT."
                    }
                ],
                "userStories": [
                    "As a user, I want to sign up so that I can save my progress."
                ]
            }

            Ensure the idea is detailed, feasible, and uses modern best practices.
            Do not include any markdown formatting (like \`\`\`json), just the raw JSON string.
        `;

        const completion = await groq.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "llama-3.3-70b-versatile",
            temperature: 0.7,
            max_tokens: 4096,
        });

        const content = completion.choices[0]?.message?.content || "{}";

        // Robust JSON parsing
        let jsonStr = content.replace(/```json/g, '').replace(/```/g, '').trim();
        const data = JSON.parse(jsonStr);

        return NextResponse.json(data);

    } catch (error) {
        console.error("Error generating blueprint:", error);
        return NextResponse.json(
            { error: "Failed to generate blueprint" },
            { status: 500 }
        );
    }
}

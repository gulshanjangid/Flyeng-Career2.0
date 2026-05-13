import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
    try {
        const { prompt } = await req.json();

        if (!prompt) {
            return new Response('Prompt required', { status: 400 });
        }

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            // Move system prompt to configuration for better adherence
            systemInstruction: `
You are an expert AI Prompt Engineer for Web Design.
Your goal is to rewrite the user's raw idea into a highly detailed, professional prompt for an AI Website Builder.

Input: "${prompt}"

Rules for Rewrite:
1. **Specifics**: Add details about layout (Bento Grid, Hero, Features), Colors (Dark Mode, gradients), and Style (Glassmorphism, Minimalist).
2. **Tech Stack**: Enforce "React, Tailwind CSS, Lucide Icons, Framer Motion".
3. **Tone**: Make it sound professional and architectural.
4. **Length**: Keep it under 100 words, but very dense with keywords.

Output ONLY the rewritten prompt. No definitions.
`
        });

        const result = await model.generateContent(prompt);
        const enhancedPrompt = result.response.text().trim();

        return new Response(JSON.stringify({ enhancedPrompt }), {
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error: any) {
        console.error("Enhance Prompt Error:", error); // Log the actual error
        return new Response(JSON.stringify({ error: error.message || "Internal Server Error" }), { status: 500 });
    }
}

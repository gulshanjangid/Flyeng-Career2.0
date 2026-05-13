import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || "" });

export async function POST(req: NextRequest) {
    try {
        const { language, prompt, contextCode } = await req.json();

        if (!language || !prompt) {
            return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
        }

        const systemPrompt = `
        You are an expert AI coding assistant.
        Your task is to generate valid ${language} code based on the user's prompt.
        
        RULES:
        1. Return ONLY the code.
        2. Do NOT include markdown formatting (like a code block).
        3. Do NOT include explanations or preambles.
        4. If the user asks for a function, write just the function.
        5. DO NOT REPEAT THE CONTEXT CODE provided below. Only output the NEW code or the Modified code.
        
        CONTEXT (Current code in editor):
        ${contextCode ? contextCode.slice(0, 1000) + "..." : "Empty file"}
        `;

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: prompt }
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.1, // Low temp for code precision
            max_tokens: 1024,
            top_p: 1,
            stream: false
        });

        let generatedCode = completion.choices[0]?.message?.content || "";
        
        if (!generatedCode) {
             throw new Error("No response from AI");
        }

        // Clean up markdown if Llama adds it despite instructions
        generatedCode = generatedCode.replace(/```\w*\n?|```/g, "").trim();

        return NextResponse.json({ success: true, code: generatedCode });

    } catch (e: any) {
        console.error("Code Gen Error:", e);
        return NextResponse.json({ error: e.message || "AI Generation Failed" }, { status: 500 });
    }
}

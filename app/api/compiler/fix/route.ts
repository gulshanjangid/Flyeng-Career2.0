import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || "" });

export async function POST(req: NextRequest) {
    try {
        const { code, error, language } = await req.json();

        if (!code || !error) {
            return NextResponse.json({ error: "Missing code or error" }, { status: 400 });
        }

        const systemPrompt = `
        You are a Senior Software Engineer acting as an intelligent coding assistant.
        The user has written ${language} code that produced an execution error.
        
        YOUR GOAL:
        Analyze the provided CODE and ERROR to produce a verified FIX.
        
        ANALYSIS STEPS:
        1. Read the Error Message carefully.
        2. Trace the error back to the specific line(s) in the Code.
        3. Identify the root cause (Syntax, Logic, Missing Import, Version Mismatch, etc.).
        4. Apply the fix while PRESERVING the original logic and structure as much as possible.
        
        RULES:
        - Return FULLY CORRECTED code (ready to run).
        - Do NOT simply comment out the error; FIX it.
        - If input is required (e.g., input(), Scanner), ensure the code handles it gracefully or the explanation mentions it.
        - The explanation should be concise but educational (e.g., "Added missing import 'json' and fixed typo in variable name").
        
        RESPONSE JSON FORMAT (STRICT):
        {
            "fixedCode": "The complete, corrected source code string",
            "explanation": "A clear, 1-2 sentence explanation of the root cause and the solution."
        }
        `;

        const userPrompt = `
        CODE:
        ${code}
        
        ERROR:
        ${error}
        `;

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt }
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.1, // Precision is key for bug fixing
            response_format: { type: "json_object" } 
        });

        const content = completion.choices[0]?.message?.content || "{}";
        return NextResponse.json({ success: true, ...JSON.parse(content) });

    } catch (e: any) {
        console.error("Smart Fix Error:", e);
        return NextResponse.json({ error: e.message || "Smart Fix Failed" }, { status: 500 });
    }
}

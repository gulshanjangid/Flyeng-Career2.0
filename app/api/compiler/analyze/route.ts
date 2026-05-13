import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || "" });

export async function POST(req: NextRequest) {
    try {
        const { code, language } = await req.json();

        if (!code) {
            return NextResponse.json({ error: "Missing code" }, { status: 400 });
        }

        const systemPrompt = `
            You are a Principal Software Architect and Security Expert.
            Analyze the following ${language} code for production readiness, security, and performance.
            
            YOUR TASK:
            Provide a deep, critical analysis. Do not be vague.
            
            RETURN JSON OBJECT (STRICT):
            {
                "timeComplexity": "Big O (e.g., O(N log N))",
                "spaceComplexity": "Big O (e.g., O(N))",
                "patternAlgorithm": "Name of algorithm/pattern used (or 'Ad-hoc')",
                "qualityScore": 85, // Integer 0-100 based on clean code principles
                "securityLevel": "High/Medium/Low", 
                "bugs": [
                    { "type": "Critical", "text": "Description of fatal flaw" },
                    { "type": "Logic", "text": "Description of logical error" }
                ],
                "optimizations": [
                    "Specific actionable improvement"
                ],
                "securityIssues": [
                    "Vulnerability description (e.g. Injection, Buffer Overflow)"
                ]
            }
        `;

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: `Analyze this code:\n${code}` }
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.3,
            response_format: { type: "json_object" }
        });

        const content = completion.choices[0]?.message?.content || "{}";
        
        let analysisData;
        try {
            analysisData = JSON.parse(content);
        } catch (e) {
            console.error("JSON Parse Error:", e);
            analysisData = {
                timeComplexity: "Analysis Failed",
                spaceComplexity: "Unknown",
                qualityScore: 0,
                securityLevel: "Unknown",
                bugs: [{ type: "Error", text: "Could not parse AI response" }],
                optimizations: [],
                securityIssues: []
            };
        }

        return NextResponse.json({ analysis: analysisData });

    } catch (error: any) {
        console.error("Error analyzing code:", error);
        return NextResponse.json(
            { error: "Failed to analyze code" },
            { status: 500 }
        );
    }
}

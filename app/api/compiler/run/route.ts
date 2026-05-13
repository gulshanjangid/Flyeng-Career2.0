import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { code, language } = await req.json();

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { error: "API key not configured" },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const prompt = `
            Act as a high-precision code execution engine for ${language}.
            
            YOUR GOAL:
            Simulate the execution of the code with 100% accuracy and return ONLY the Standard Output (stdout).
            
            CRITICAL INSTRUCTION:
            To ensure accuracy, you MUST first think step-by-step in a "scratchpad" block.
            1. Trace variables, loops, and logic line-by-line.
            2. Verify math calculations (e.g., 153 is Armstrong because 1^3+5^3+3^3 = 153).
            3. AFTER the scratchpad, output the final result inside the delimiters.

            Example (Python):
            Input: 
            print("Calculation: " + str(5 * 5))
            Response:
            ___SCRATCHPAD___
            - 5 * 5 = 25
            - String concatenation: "Calculation: " + "25"
            - Result: "Calculation: 25"
            ___SCRATCHPAD_END___
            ___OUTPUT_START___
            Calculation: 25
            ___OUTPUT_END___

            Code to Execute:
            ${code}
        `;

        let text = "";

        // Strategy: Use gemini-1.5-flash for best speed/accuracy balance.
        // Fallback to gemma-3-1b-it if needed.
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const result = await model.generateContent(prompt);
            text = result.response.text().trim();
        } catch (primaryError: any) {
            console.warn("Primary model (gemini-pro) failed, switching to fallback (gemma-3-1b-it):", primaryError.message);
            try {
                const fallbackModel = genAI.getGenerativeModel({ model: "gemma-3-1b-it" });
                const result = await fallbackModel.generateContent(prompt);
                text = result.response.text().trim();
            } catch (fallbackError: any) {
                throw new Error(`All models failed. Primary: ${primaryError.message}. Fallback: ${fallbackError.message}`);
            }
        }

        // Extract content between output delimiters
        const match = text.match(/___OUTPUT_START___([\s\S]*)___OUTPUT_END___/);
        if (match) {
            text = match[1].trim();
        } else {
            // Fallback: try to find the output after the scratchpad if delimiters failed
            const split = text.split('___SCRATCHPAD_END___');
            if (split.length > 1) {
                text = split[1].replace(/___OUTPUT_START___|___OUTPUT_END___/g, '').trim();
            } else {
                // Last resort cleanup
                text = text.replace(/^```[\w]*\n/, '').replace(/\n```$/, '');
            }
        }

        return NextResponse.json({ output: text });

    } catch (error: any) {
        console.error("Error executing code:", error);
        return NextResponse.json(
            { error: `Execution Error: ${error.message || "Unknown error"}` },
            { status: 500 }
        );
    }
}

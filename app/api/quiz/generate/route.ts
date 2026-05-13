import Groq from "groq-sdk";
import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
    try {
        let apiKey = process.env.GROQ_API_KEY;

        // Fallback: Read .env.local manually if env var is missing
        if (!apiKey) {
            try {
                const envPath = path.join(process.cwd(), '.env.local');
                if (fs.existsSync(envPath)) {
                    const content = fs.readFileSync(envPath, 'utf8');
                    const match = content.match(/GROQ_API_KEY=(.*)/);
                    if (match && match[1]) {
                        apiKey = match[1].trim();
                        console.log("Loaded GROQ_API_KEY from .env.local manually");
                    }
                }
            } catch (e) {
                console.error("Failed to read .env.local manually:", e);
            }
        }

        console.log("API Key available:", !!apiKey);

        if (!apiKey) {
            return NextResponse.json(
                { error: "Groq API key not configured" },
                { status: 500 }
            );
        }

        const { topic, difficulty, count, tone, type, language } = await req.json();

        const groq = new Groq({
            apiKey: apiKey,
        });

        const prompt = `Generate a quiz about "${topic}".
    Difficulty: ${difficulty}
    Number of questions: ${count}
    Tone: ${tone || 'Neutral'}
    Question Type: ${type || 'Multiple Choice'}
    Language: ${language || 'English'}
    
    Return ONLY a valid JSON array of objects. No markdown formatting, no code blocks, no intro text.
    Each object should have:
    - question: string (in ${language || 'English'})
    - options: array of 4 strings (in ${language || 'English'})
    - correctIndex: number (0-3)
    - explanation: string (brief explanation of the correct answer in ${language || 'English'})
    
    Example format:
    [
      {
        "question": "What is 2+2?",
        "options": ["3", "4", "5", "6"],
        "correctIndex": 1,
        "explanation": "2 plus 2 equals 4."
      }
    ]`;

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a helpful AI that generates quizzes in strict JSON format."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            model: "llama-3.1-8b-instant",
            temperature: 0.5,
        });

        const text = completion.choices[0]?.message?.content || "";

        // Clean up the response if it contains markdown code blocks
        const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();

        try {
            const quizData = JSON.parse(cleanedText);
            return NextResponse.json({ questions: quizData });
        } catch (parseError) {
            console.error("JSON Parse Error:", parseError, "Text:", text);
            return NextResponse.json(
                { error: "Failed to parse generated quiz" },
                { status: 500 }
            );
        }

    } catch (error) {
        console.error("Quiz Generation Error:", error);
        return NextResponse.json(
            { error: "Failed to generate quiz" },
            { status: 500 }
        );
    }
}

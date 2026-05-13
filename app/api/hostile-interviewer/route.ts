import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || "" });

const getSystemPrompt = (persona: string, language: string, isFinalSubmission?: boolean) => {
    let base = "";
    if (persona === "startup") {
        base = `You are The Chaotic CTO, a fast-paced, highly caffeinated startup founder. You write ${language}. You want things shipped immediately. If it works, aggressively praise them! If it's too complex or over-engineered, playfully tease them for burning runway. Be energetic, informal, and impatient, but ultimately a mentor.`;
    } else if (persona === "purist") {
        base = `You are The Clean Code Zealot, an elite Senior Architect. You care deeply about DRY principles, perfect abstraction, and beautiful naming conventions. You will playfully roast them if they write sloppy or poorly formatted ${language} code, but you must always guide them gracefully on how to refactor it to perfection.`;
    } else if (persona === "anxious") {
        base = `You are The Anxious Junior developer who was accidentally assigned to interview the candidate. You write ${language}. You constantly second-guess everything they do. If they write good code, you still ask nervous 'what if' edge-case questions. If they make a mistake, you panic with them. Be highly human, hesitant, and constantly say "Umm..." or "I think...".`;
    } else if (persona === "hacker") {
        base = `You are The Rogue Hacker, an elite underground coder. You eat, sleep, and breathe ${language}. You despise corporate FAANG culture and standard 'best practices'. You love cryptic one-liners, bitwise operations, and raw, unrestricted performance. Talk like a cyberpunk elitist. Challenge them to make the code smaller, faster, or more clever.`;
    } else {
        base = `You are The Gatekeeper, a terrifyingly strict but ultimately fair Senior Tech Lead at a FAANG company. You obsess over Big O time and space complexity. You expect optimal ${language} code. You act as a tough, intimidating mentor who pushes them to their absolute limits to see them succeed.`;
    }

    if (isFinalSubmission) {
        return `${base}\nThe candidate has SUBMITTED their final ${language} code.\nProvide a final, decisive judgment of their code, approach, and execution.\nKeep your response under 4 sentences.\nYou MUST end your response with exactly:\n[VERDICT: HIRED] (if the code is good and working, or acceptable)\nOR\n[VERDICT: REJECTED] (if the code is flawed, incorrect, or missing entirely).\nMake your final words deeply memorable.`;
    }

    return `${base}
The candidate is trying to write ${language} code to solve a problem.
You will receive:
1. The problem description.
2. The user's current code.
3. The execution output logs (if they ran it).

Your objective is to review their code.
Keep your response under 3-4 sentences. Be punchy, strict, but ultimately MOTIVATING.
If they made a mistake, tease them lightly but ALWAYS provide a clear, helpful hint so they know how to fix it. DO NOT just demotivate them.`;
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { problem, code, logs, persona, language = "Javascript", isFinalSubmission = false } = body;

        if (!code) {
             return NextResponse.json({ error: "Code snippet is required" }, { status: 400 });
        }

        const SYSTEM_PROMPT = getSystemPrompt(persona, language, isFinalSubmission);

        const inputContext = `
        PROBLEM:
        ${problem.title}: ${problem.description}

        USER'S CURRENT CODE:
        \`\`\`
        ${code}
        \`\`\`

        EXECUTION LOGS:
        ${JSON.stringify(logs, null, 2)}
        `;

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", "content": SYSTEM_PROMPT },
                { role: "user", "content": inputContext }
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.9,
            max_tokens: 150,
        });

        const reply = completion.choices[0]?.message?.content || "I have no words for how terrible this is. The AI engine refused to process it.";

        return NextResponse.json({ reply });

    } catch (error: any) {
        console.error("Hostile Interviewer API Failed:", error);
        return NextResponse.json({ 
            reply: "Your code was so bad it crashed my internal server error. Try again."
        }, { status: 500 });
    }
}

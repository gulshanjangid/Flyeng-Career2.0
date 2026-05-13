import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || "" });

const PERSONA_PROMPTS: Record<string, string> = {
    "thought-leader": `You are a melodramatic, self-important Tech Bro LinkedIn Influencer. Transform the user's boring text into a massive, 4-5 paragraph inspirational post. Over-analyze the meaningless event, use line breaks excessively, talk about 'B2B SaaS', 'synergy', and 'grinding'. End with an absurd question like "Agree?" or "Thoughts?"`,
    
    "passive-aggressive": `You are a deeply annoyed, burnt-out HR manager pretending to be polite in a corporate email. Translate the user's text into an extremely polite but ruthlessly passive-aggressive professional email. Use phrases like "Per my last email", "Just bubbling this up", or "I'm sure you simply forgot."`,
    
    "gen-z": `You are a chronically online Brainrot TikToker. Translate the user's text into heavy Gen-Z slang. Seriously, use words like 'cooked', 'based', 'no cap', 'skibidi', 'rizz', 'main character energy', 'delulu', etc. Make it sound completely unhinged but somewhat coherent to a teenager.`,
    
    "hype-man": `You are the ultimate overly-energetic, screaming Hype Man. Take the user's incredibly tiny, insignificant action and hype it up as if they just cured a major disease or won the Super Bowl. Use ALL CAPS, tons of exclamation points, fire emojis, and make them feel like a living god among humans.`,
    
    "shakespearean": `You are William Shakespeare. Translate the user's mundane, modern complaint or text into a beautiful, dramatic 16th-century poetic monologue. Use iambic pentameter vibes, 'thy', 'thou', 'alas', and high drama.`,
    
    "doomer": `You are a deeply pessimistic, nihilistic Doomer who has lost all hope in society and technology. Translate the user's text into an expression of intense existential dread. Relate their minor inconvenience to the inevitable heat death of the universe or the collapse of late-stage capitalism.`,

    // NEW DEVELOPER / AUDIENCE FOCUSED PERSONAS
    "code-reviewer": `You are an incredibly elitist, passive-aggressive Senior 10x Developer doing a code review. Treat the user's text as if it were a terrible GitHub Pull Request. Nitpick it, ask if they 'even wrote tests for this', complain about their O(n^2) complexity, and act deeply disappointed in their fundamental understanding of computer science.`,

    "junior-panic": `You are a terrified Junior Developer who just pushed straight to the master branch on a Friday at 4:55 PM. Translate the user's text into pure panic, imposter syndrome, and sweating. Assume everything they did just broke production and they are begging StackOverflow for salvation.`,

    "yc-vc": `You are a completely out-of-touch, overly enthusiastic Silicon Valley Venture Capitalist (think Paul Graham meets a crypto bro). Translate the user's text into a pitch for a billion-dollar Web3 AI startup. Throw in buzzwords like 'TAM', 'Moat', 'LLM wrappers', 'Disrupting', and 'Unicorn trajectory'.`,

    "brogrammer": `You are a gym-addicted, highly caffeinated Brogrammer who only talks in lifting metaphors and LeetCode problems. Translate their text into a combination of gym bro culture, optimizing macros, grinding LeetCode hards, and drinking 6 scoops of pre-workout before writing C++.`
};

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { text, persona } = body;

        if (!text || text.length > 500) {
            return NextResponse.json({ error: "Text must be between 1 and 500 characters." }, { status: 400 });
        }

        const systemInstruction = PERSONA_PROMPTS[persona] || PERSONA_PROMPTS["thought-leader"];

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", "content": `${systemInstruction}\nReturn ONLY a JSON object with this exact structure, nothing else: { "translatedText": "your translation here", "emoji": "a single emoji perfectly capturing the vibe", "title": "A funny 2-4 word title for this translation" }` },
                { role: "user", "content": `Translate this: "${text}"` }
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.9,
            max_tokens: 1000,
            response_format: { type: "json_object" }
        });

        const rawContent = completion.choices[0]?.message?.content;
        
        if (!rawContent) {
           throw new Error("No content generated");
        }
        
        const parsedResponse = JSON.parse(rawContent);
        return NextResponse.json(parsedResponse);

    } catch (error: any) {
        console.error("VibeShift Failed:", error);
        return NextResponse.json({ 
            translatedText: "An error occurred in the space-time continuum. The VibeShift machine broke. Try again.",
            emoji: "💀",
            title: "System Failure"
        }, { status: 500 });
    }
}

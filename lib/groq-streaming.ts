import Groq from 'groq-sdk';

// Initialize Groq client
// Note: In client-side code, we should use a proxy or server action to protect the API Key
// For this v2 implementation, we'll assume this runs in valid context or use a proxy
// But the prompt implies using it directly or via server components. 
// Given the architecture ref image, "Next.js Backend" handles Groq.
// So this file might be used by Server Actions or API routes.

const getGroqClient = () => {
    return new Groq({
        apiKey: process.env.GROQ_API_KEY || 'YOUR_GROQ_API_KEY',
        dangerouslyAllowBrowser: true
    });
};

export async function streamGroqResponse(
    prompt: string,
    onChunk: (text: string) => void,
    onComplete: (fullText: string) => void
) {
    let fullResponse = '';

    const stream = await getGroqClient().chat.completions.create({
        model: 'llama-3.3-70b-versatile',
        messages: [
            {
                role: 'system',
                content: `You are a concise, friendly technical interviewer. 
        
IMPORTANT RULES:
1. Keep responses SHORT (1-2 sentences max)
2. Ask ONE question at a time
3. Be conversational, not academic
4. No code blocks or formatting
5. Respond in plain text only
6. Give feedback in real-time as candidate speaks`
            },
            {
                role: 'user',
                content: prompt
            }
        ],
        temperature: 0.7,
        max_tokens: 150, // Force concise responses
        stream: true
    });

    for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content || '';
        if (text) {
            fullResponse += text;
            onChunk(text); // Send each token as it arrives
        }
    }

    onComplete(fullResponse);
    return fullResponse;
}

// Quick question generator (30-60 seconds per question)
export async function generateQuickQuestion(
    role: string,
    level: string,
    round: number
): Promise<string> {
    const response = await getGroqClient().chat.completions.create({
        model: 'llama-3.3-70b-versatile',
        messages: [
            {
                role: 'system',
                content: `You are an interviewer. Generate ONE SHORT interview question (2-3 sentences max).

REQUIREMENTS:
- Keep it conversational
- No code blocks
- Plain text only
- One question
- Answerable in 1-2 minutes

Examples:
Good: "Tell me about a time you debugged a tricky issue. What was the problem?"
Bad: "Design a distributed system with microservices, containers, load balancing, auto-scaling, monitoring..."

Keep questions SHORT and CONVERSATIONAL.`
            },
            {
                role: 'user',
                content: `Generate ${round === 1 ? 'an easy' : round === 2 ? 'a medium' : 'a hard'} interview question for a ${level} ${role} candidate. One question only.`
            }
        ],
        temperature: 0.8,
        max_tokens: 100, // Force short questions
        stream: false
    });

    return response.choices[0]?.message?.content || '';
}

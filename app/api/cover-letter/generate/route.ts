import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

export async function POST(req: Request) {
    try {
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || 'YOUR_GROQ_API_KEY' });
        const { resumeText, jobDescription, companyName, jobTitle, tone } = await req.json();

        if (!resumeText || !jobDescription) {
            return NextResponse.json(
                { error: 'Resume text and job description are required' },
                { status: 400 }
            );
        }

        const prompt = `
        You are an expert career coach and professional writer. Your task is to write a compelling cover letter for a ${jobTitle || 'position'} at ${companyName || 'the company'}.
        
        TONE: ${tone}
        
        JOB DESCRIPTION:
        ${jobDescription}
        
        CANDIDATE'S RESUME/EXPERIENCE:
        ${resumeText}
        
        INSTRUCTIONS:
        1. Analyze the job description to identify key requirements and cultural values.
        2. Analyze the candidate's experience to find the strongest matching skills and achievements.
        3. Write a cover letter that bridges the gap between the candidate's experience and the job requirements.
        4. Use the specified tone.
        5. Keep it concise (under 400 words) but impactful.
        6. Do not include placeholders like "[Your Name]" or "[Date]" at the top; start directly with the salutation or a strong opening hook if appropriate for the tone.
        7. Focus on specific achievements, not generic statements.
        
        OUTPUT:
        Return ONLY the body of the cover letter. Do not include any conversational filler before or after.
        `;

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.7,
            max_tokens: 3000,
        });

        const content = completion.choices[0]?.message?.content || '';

        return NextResponse.json({ content });

    } catch (error) {
        console.error('Error generating cover letter:', error);
        return NextResponse.json(
            { error: 'Failed to generate cover letter' },
            { status: 500 }
        );
    }
}

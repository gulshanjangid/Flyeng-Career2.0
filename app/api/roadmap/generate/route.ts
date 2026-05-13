import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

export async function POST(req: Request) {
    try {
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || 'YOUR_GROQ_API_KEY' });
        const { goal } = await req.json();

        if (!goal) {
            return NextResponse.json(
                { error: 'Goal is required' },
                { status: 400 }
            );
        }

        const prompt = `
        You are an expert career architect. Create a comprehensive, structured career roadmap for becoming a "${goal}".
        
        CRITICAL INSTRUCTION: You MUST organize the roadmap into three distinct phases: Beginner, Intermediate, and Advanced.
        
        For EACH phase, provide 4-5 detailed milestones (make it extensive).
        
        ALSO PROVIDE:
        - A realistic "Daily Routine" for this role.
        - 5-7 key "Soft Skills".
        - 5 common "Interview Questions".
        - "Salary Range" (e.g., "$80k - $120k").
        - "Top Companies" hiring for this role.
        - "Tools" & Tech Stack used.
        - "Certifications" to aim for.
        
        For EACH Milestone, provide:
        - "Description": Detailed explanation.
        - "Why this matters": Contextual importance.
        - "Common Pitfalls": What to avoid.
        - "Real-world Application": How this skill is used in industry.
        - "Weekly Commitment": Estimated hours (e.g., "10-15 hours/week").
        - "Checklist": 5-6 specific, actionable sub-tasks.
        - "Resources": 3-4 high-quality resources.

        Structure the response exactly as this JSON object:
        {
            "role": "string",
            "summary": "string (motivating one-liner)",
            "estimatedTotalDuration": "string",
            "dailyRoutine": "string",
            "softSkills": ["string"],
            "interviewQuestions": ["string"],
            "salaryRange": "string",
            "topCompanies": ["string"],
            "tools": ["string"],
            "certifications": ["string"],
            "milestones": [
                {
                    "title": "string",
                    "description": "string",
                    "whyMatters": "string",
                    "commonPitfalls": "string",
                    "realWorldApplication": "string",
                    "weeklyCommitment": "string",
                    "duration": "string",
                    "difficulty": "Beginner" | "Intermediate" | "Advanced",
                    "skills": ["string"],
                    "resources": [{ "title": "string", "type": "Course" | "Video" | "Article" | "Book", "url": "string (optional)" }],
                    "projectIdea": "string",
                    "checklist": ["string"]
                }
            ]
        }
        
        Ensure the JSON is valid and strictly follows this schema. Do not include any markdown formatting or explanations outside the JSON.
        `;

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.5,
            max_tokens: 4096,
            response_format: { type: 'json_object' }
        });

        const content = completion.choices[0]?.message?.content || '{}';
        const roadmapData = JSON.parse(content);

        return NextResponse.json(roadmapData);

    } catch (error) {
        console.error('Error generating roadmap:', error);
        return NextResponse.json(
            { error: 'Failed to generate roadmap' },
            { status: 500 }
        );
    }
}

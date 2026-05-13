import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || "" });

export async function POST(req: NextRequest) {
    try {
        const { candidateName, role, totalScore, rounds, technicalScores, proctoringData } = await req.json();

        const systemPrompt = `
You are a Senior Hiring Manager synthesizing interview feedback to make a hire/no-hire decision.

INTERVIEW SUMMARY:
- Candidate Name: ${candidateName || "Candidate"}
- Role Applied: ${role}
- Total Score: ${totalScore}
- Rounds Completed: ${JSON.stringify(rounds)}
- Technical Assessment: ${JSON.stringify(technicalScores)}
- Proctoring: ${JSON.stringify(proctoringData)}

YOUR TASK: Synthesize all data and recommend hire/no-hire with clear justification.

OUTPUT FORMAT (STRICT JSON):
{
  "recommendedDecision": "HIRE" or "NO_HIRE" or "MAYBE",
  "confidence": 0.92,
  "overallScore": 7.8,
  "reasoning": {
    "technical": "Strong DSA fundamentals, optimized solutions, handles edge cases",
    "communication": "Clear explanation, asked clarifying questions, receptive to feedback",
    "culture": "Collaborative approach, humble, eager to learn",
    "redFlags": null
  },
  "strengths": [
    "Excellent problem-solving",
    "Clear communication",
    "Optimized for performance"
  ],
  "concerns": [
    "Limited system design experience"
  ],
  "recommendations": {
    "ifHired": "Pair with senior engineer for 2-3 months, focus on system design",
    "ifRejected": "Provide feedback, suggest practicing system design, welcome to re-apply in 6 months",
    "roleMatch": "Good fit for Junior Full Stack Engineer"
  },
  "comparisonData": {
    "percentile": 0.78, // Better than 78% of candidates
    "similarCandidates": ["Previous hire #1", "Previous hire #2"]
  },
  "startingSalaryRecommendation": "$80K-90K",
  "onboardingPlan": [
    "Week 1-2: Onboarding, codebase familiarization",
    "Week 3-4: First feature (guided)",
    "Month 2-3: Independent features with review",
    "Month 4+: Full autonomy"
  ]
}

IMPORTANT:
- Be objective but human
- Account for nervousness (first-time interview vs second)
- Consider growth potential, not just current state
- Return ONLY JSON
    `;

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: "Generate hiring recommendation." }
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.6,
            response_format: { type: "json_object" }
        });

        const content = completion.choices[0]?.message?.content || "{}";
        return NextResponse.json(JSON.parse(content));

    } catch (error: any) {
        console.error("Finalization Failed:", error);
        return NextResponse.json(
            { error: "Failed to finalize interview" },
            { status: 500 }
        );
    }
}

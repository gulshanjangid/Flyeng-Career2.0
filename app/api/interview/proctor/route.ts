import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || "" });

export async function POST(req: NextRequest) {
    try {
        const {
            duration,
            tabSwitches,
            screenShares,
            poseAnomalies,
            responseTime,
            copiedCode,
            voicesCount,
            audioQuality
        } = await req.json();

        const systemPrompt = `
You are an AI proctor analyzing candidate behavior during a technical interview.

PROCTORING DATA:
- Interview Duration: ${duration} seconds
- Number of Tab Switches: ${tabSwitches}
- Number of Screen Shares: ${screenShares}
- Pose Anomalies: ${JSON.stringify(poseAnomalies) || "None"}
- Response Time to Question: ${responseTime}s
- Copied Code Detected: ${copiedCode ? "YES" : "NO"}
- Multiple Voices Detected: ${voicesCount || 0}
- Audio Quality: ${audioQuality || "Good"}

YOUR TASK: Determine if interview was conducted fairly and flag any suspicious behavior.

OUTPUT FORMAT (STRICT JSON):
{
  "integrityScore": 0.95,
  "overallAssessment": "CLEAN" or "SUSPICIOUS" or "FLAGGED",
  "severityLevel": "NONE" or "LOW" or "MEDIUM" or "HIGH",
  "flaggedBehaviors": [
    {
      "behavior": "Looked away multiple times",
      "frequency": 3,
      "confidence": 0.65,
      "context": "Typical of note-taking, not cheating",
      "severity": "LOW"
    }
  ],
  "redFlags": null, // or list of serious concerns
  "recommendations": {
    "shouldReview": false,
    "requiresHumanReview": false,
    "suggestedAction": "ACCEPT" or "INVESTIGATE" or "REJECT"
  },
  "notes": "Candidate seemed engaged and honest. One minor flag: looked at paper once."
}

SCORING GUIDANCE:
- 0.90-1.00: Clean (no concerns)
- 0.70-0.89: Minor Issues (probably fine)
- 0.50-0.69: Suspicious (human review recommended)
- 0.00-0.49: High Risk (likely violation)

RED FLAGS (Serious):
- Multiple voices/people in background
- Screen recording running
- Code copy-pasted from web
- Multiple monitors detected
- Unauthorized materials visible

YELLOW FLAGS (Minor):
- Brief eye contact loss
- Phone in view
- Occasional paper notes
- Background noise

IMPORTANT:
- Be fair - not everyone maintains perfect eye contact
- Context matters - paper notes ≠ cheating
- Return ONLY JSON
    `;

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: "Analyze session integrity." }
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.2, // Low temperature for consistent rule enforcement
            response_format: { type: "json_object" }
        });

        const content = completion.choices[0]?.message?.content || "{}";
        return NextResponse.json(JSON.parse(content));

    } catch (error: any) {
        console.error("Proctoring Analysis Failed:", error);
        return NextResponse.json(
            { error: "Failed to analyze proctoring data" },
            { status: 500 }
        );
    }
}

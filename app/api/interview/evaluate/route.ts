import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || "" });

// Deep persona evaluation styles for all 15 interviewers
const PERSONA_EVAL: Record<string, string> = {
  sarah: `YOUR PERSONA: Sarah (HR Manager).
    - Tone: Warm, encouraging, empathetic.
    - Focus: Soft skills, culture fit, emotional intelligence, leadership potential.
    - Feedback Style: "Sandwich" method — always lead with a genuine compliment, deliver constructive critique, end with encouragement.
    - Alternative Approach: Reframe answers through a team dynamics perspective.
    - Spoken Transitions: "That's a great perspective." / "I appreciate your honesty there." / "Let's explore that further."`,
  alex: `YOUR PERSONA: Alex (Tech Lead).
    - Tone: Collaborative, practical, engineer-to-engineer.
    - Focus: Code quality, SOLID principles, clean architecture, real-world tradeoffs.
    - Feedback Style: Constructive, treats feedback like a code review — specific, actionable.
    - Alternative Approach: Suggest practical patterns and explain tradeoffs.
    - Spoken Transitions: "Interesting approach." / "I'd push back on that." / "That's solid engineering."`,
  marcus: `YOUR PERSONA: Marcus (Bar Raiser).
    - Tone: Strict, professional, no-nonsense. High standards.
    - Focus: Deep technical accuracy, edge cases, scalability, concurrency, failure modes.
    - Feedback Style: Direct and critical. Points out what breaks. Expects precision.
    - Alternative Approach: Challenge with counter-examples.
    - Spoken Transitions: "That's incomplete." / "Good, but where does this break?" / "Strong answer."`,
  atlas: `YOUR PERSONA: Atlas (System Architect).
    - Tone: Strategic, philosophical, Socratic.
    - Focus: System design, trade-offs, distributed systems, CAP theorem, database choices.
    - Feedback Style: Asks "Why?" after every decision. Focuses on architectural reasoning.
    - Alternative Approach: Suggest alternative architectures.
    - Spoken Transitions: "Why that choice?" / "Consider the tradeoffs here." / "Interesting architecture."`,
  emily: `YOUR PERSONA: Emily (Culture Fit Specialist).
    - Tone: Deeply empathetic, insightful, conversational.
    - Focus: Values alignment, team dynamics, psychological safety, self-awareness.
    - Feedback Style: Reflective — offers perspective shifts.
    - Alternative Approach: Offer different lenses.
    - Spoken Transitions: "That shows real self-awareness." / "How did that make you feel?" / "Interesting perspective."`,
  david: `YOUR PERSONA: David (SRE Lead).
    - Tone: Calm, methodical, detail-oriented.
    - Focus: Incident response, SLO/SLA design, observability, monitoring, reliability.
    - Feedback Style: Structured, procedure-focused.
    - Alternative Approach: Share incident response frameworks.
    - Spoken Transitions: "Walk me through the root cause." / "Good runbook thinking." / "What's the blast radius?"`,
  maya: `YOUR PERSONA: Maya (Creative Director).
    - Tone: Creative, expressive, passionate about design.
    - Focus: Design systems, component architecture, accessibility, UI/UX.
    - Feedback Style: Gets excited about good ideas.
    - Alternative Approach: Suggest creative enhancements.
    - Spoken Transitions: "Love that idea!" / "The UX here could be stronger." / "That's elegant."`,
  raj: `YOUR PERSONA: Raj (VP of Engineering).
    - Tone: Strategic, mentoring, warm yet demanding.
    - Focus: Engineering leadership, team scaling, tech strategy.
    - Feedback Style: Mentoring — draws from experience.
    - Alternative Approach: Share leadership frameworks.
    - Spoken Transitions: "That's solid leadership thinking." / "Think bigger here." / "Good strategic awareness."`,
  sofia: `YOUR PERSONA: Sofia (Product Lead).
    - Tone: Enthusiastic, data-driven, user-obsessed.
    - Focus: Product strategy, user research, metrics/KPIs.
    - Feedback Style: Asks "How would you measure that?"
    - Alternative Approach: Challenge with data.
    - Spoken Transitions: "Show me the data." / "Good product instinct." / "What's the north star metric?"`,
  chen: `YOUR PERSONA: Chen (Security Architect).
    - Tone: Calm, methodical, adversarial thinker.
    - Focus: Application security, threat modeling, auth systems.
    - Feedback Style: Plays devil's advocate.
    - Alternative Approach: Introduce attack vectors.
    - Spoken Transitions: "Now let me be the attacker." / "That's a secure approach." / "You're missing a vector."`,
  priya: `YOUR PERSONA: Priya (DSA Expert).
    - Tone: Precise, academic, respects rigor.
    - Focus: Algorithms, time complexity, optimal solutions.
    - Feedback Style: Push for optimal — "Can you do better?"
    - Spoken Transitions: "That's O(n²). Think harder." / "Clean solution." / "What's the lower bound?"`,
  leo: `YOUR PERSONA: Leo (Frontend Architect).
    - Tone: Passionate, performance-obsessed.
    - Focus: Bundle size, rendering, browser internals.
    - Feedback Style: Gets excited about optimizations.
    - Spoken Transitions: "That's a render-blocking issue." / "Smart optimization." / "Check the paint cycle."`,
  dev: `YOUR PERSONA: Dev (Startup CTO).
    - Tone: Direct, fast-paced, pragmatic.
    - Focus: Speed, ownership, 80/20 thinking.
    - Feedback Style: Values speed over perfection.
    - Spoken Transitions: "Ship it." / "Too over-engineered." / "That's the 80/20."`,
  arjun: `YOUR PERSONA: Arjun (DSA & Competitive Coding Expert).
    - Tone: Academic, precise, expects mathematical rigor.
    - Focus: DP, graphs, greedy, advanced data structures.
    - Feedback Style: Always pushes for the optimal. "Can you do better?"
    - Spoken Transitions: "That's brute force." / "Strong intuition." / "Prove the correctness."`,
  kavya: `YOUR PERSONA: Kavya (Cloud & DevOps Architect).
    - Tone: Practical, infrastructure-focused.
    - Focus: AWS/GCP, Kubernetes, CI/CD, Terraform.
    - Feedback Style: Evaluates cost, reliability, and scalability.
    - Spoken Transitions: "What's the blast radius?" / "Good infra thinking." / "That won't scale."`,
  vikram: `YOUR PERSONA: Vikram (Engineering Manager).
    - Tone: Strategic, diplomatic, people-focused.
    - Focus: Team scaling, sprint planning, stakeholder management.
    - Feedback Style: Tests leadership without authority.
    - Spoken Transitions: "How would your team react?" / "Good delegation." / "Think about the people impact."`,
  meera: `YOUR PERSONA: Meera (Full Stack Mentor).
    - Tone: Encouraging, mentoring, but expects depth.
    - Focus: Full-stack from DB to deployment.
    - Feedback Style: Builds confidence while testing depth.
    - Spoken Transitions: "Good foundation." / "Let's go deeper." / "You're on the right track."`,
  aditya: `YOUR PERSONA: Aditya (AI/ML Engineer).
    - Tone: Curious, theoretical, research-oriented.
    - Focus: Deep learning, attention mechanisms, MLOps.
    - Feedback Style: Always asks WHY, not just HOW.
    - Spoken Transitions: "Why does that work?" / "Interesting architecture choice." / "What's the loss function?"`,
  nina: `YOUR PERSONA: Nina (Data Science Lead).
    - Tone: Analytical, business-value focused.
    - Focus: Statistics, ML, A/B testing, model interpretability.
    - Feedback Style: Bridges theory with business impact.
    - Spoken Transitions: "What does this change for the business?" / "Good statistical thinking." / "Watch for bias."`,
  zara: `YOUR PERSONA: Zara (QA Lead).
    - Tone: Detail-oriented, thorough, quality-obsessed.
    - Focus: Test strategy, edge cases, automation.
    - Feedback Style: "What edge case did you miss?"
    - Spoken Transitions: "What about the edge case?" / "Good test coverage." / "Untested code is broken code."`,
};

export async function POST(req: NextRequest) {
  try {
    const { question, answer, timeTaken, approach, round, interviewType = "Technical", persona = "alex", dominantEmotion = "neutral", confidenceLevel = 50 } = await req.json();

    if (!question || !answer) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Get persona evaluation style
    const personaInstructions = PERSONA_EVAL[persona] || PERSONA_EVAL.alex;

    // SPECIAL HANDLING FOR INTRO ROUND (Round 0)
    if (round === 0) {
      const introPrompt = `
            ${personaInstructions}
            
            You represent a premium AI Interview System.
            The user has just introduced themselves.
            User's Intro: "${answer}"

            YOUR TASK:
            1. Extract the user's name if possible (or use "Candidate" if not found).
            2. Generate a SHORT, IMPRESSIVE response (max 2 sentences) that acknowledges them by name and makes a specific observation about their background. Use YOUR PERSONA'S tone.
            
            Example:
            "Great to meet you, Nikhil. Your full-stack experience with React and Node.js is exactly the kind of depth I want to explore today."

            OUTPUT JSON:
            {
               "name": "Extracted Name",
               "welcomeMessage": "Your generated message here",
               "confidenceScore": 10
            }
            `;

      const completion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: introPrompt },
          { role: "user", content: "Analyze this introduction." }
        ],
        model: "llama-3.3-70b-versatile",
        temperature: 0.6,
        response_format: { type: "json_object" }
      });

      const content = completion.choices[0]?.message?.content || "{}";
      return NextResponse.json(JSON.parse(content));
    }

    // DYNAMIC GUIDELINES BASED ON INTERVIEW TYPE
    let specificGuidelines = "";
    
    if (interviewType === 'Behavioral') {
        specificGuidelines = `
        FOCUS: STAR Method (Situation, Task, Action, Result).
        - Did they clearly describe the situation?
        - Did they explain THEIR specific action?
        - Did they share a quantifiable result?
        - SCORING: High score for clear STAR structure, emotional intelligence, and leadership.
        `;
    } else if (interviewType === 'System Design') {
        specificGuidelines = `
        FOCUS: Scalability, Trade-offs, and High-Level Architecture.
        - Did they clarify requirements first?
        - Did they discuss database choices (SQL vs NoSQL)?
        - Did they mention caching, load balancing, or sharding?
        - SCORING: High score for breadth of knowledge and ability to justify choices.
        `;
    } else if (interviewType === 'HR' || interviewType === 'Culture') {
        specificGuidelines = `
        FOCUS: Values, Team Dynamics, and Emotional Intelligence.
        - Do they show self-awareness and empathy?
        - Do they share credit and acknowledge others?
        - Do they demonstrate growth mindset?
        - SCORING: High score for authenticity, self-reflection, and constructive attitude.
        `;
    } else if (interviewType === 'Product') {
        specificGuidelines = `
        FOCUS: User Empathy, Metrics, and Prioritization.
        - Did they define the user persona?
        - Did they propose measurable success metrics?
        - Did they prioritize features with clear reasoning?
        - SCORING: High score for user-centric thinking and data-driven decisions.
        `;
    } else if (interviewType === 'Leadership') {
        specificGuidelines = `
        FOCUS: Strategic Thinking, Team Management, and Executive Presence.
        - Can they articulate a clear vision?
        - Do they demonstrate ability to influence without authority?
        - Do they show awareness of organizational dynamics?
        - SCORING: High score for strategic clarity, delegation ability, and communication.
        `;
    } else {
        // Technical (Default)
        specificGuidelines = `
        FOCUS: Correctness, Efficiency, and Edge Cases.
        - Is the logic correct?
        - What is the Time/Space complexity?
        - Did they handle edge cases?
        - SCORING: High score for optimal solution and clean code/logic.
        `;
    }

    // STANDARD EVALUATION (Rounds 1+)
    const systemPrompt = `
${personaInstructions}

Q: ${question}
A: ${answer}
Type: ${interviewType} | Emotion: ${dominantEmotion} | Confidence: ${confidenceLevel}%

${specificGuidelines}

Evaluate in your persona's voice. Use "you"/"your". Be specific to their answer. CRITICAL RULES FOR FEEDBACK:
1. ALWAYS address the candidate DIRECTLY using "you" / "your" (NEVER say "the candidate" or "they")
2. Be SPECIFIC — reference exact parts of their answer
3. Be STRICT and PROFESSIONAL — this is a real interview evaluation
4. If the candidate uses abusive language, insults the interviewer, or completely dismisses the interview (e.g., "I don't care", "Get out of here"), set "isUnprofessional" to true.
5. Point out EXACTLY what was weak and what needs improvement
6. When giving improvement areas, be direct: "You need to work on..." 
7. The confidenceScore MUST be a number from 0 to 10 (NOT a percentage)
8. NEVER use generic phrases repeatedly like "lacks depth" — each feedback must feel UNIQUE
9. The spokenFeedback MUST match the score — if score is 7+, positive. If score is 3-, concerned.

STRICT JSON OUTPUT:
{
  "overallAssessment": "1 sentence written feedback for report",
  "spokenFeedback": "Under 15 words, natural spoken response. Match tone to score. (If unprofessional: 'That language is unacceptable.')",
  "interviewerMood": "impressed|neutral|concerned|encouraging",
  "passedQuestion": true/false,
  "isUnprofessional": true/false,
  "confidenceScore": 0-10,
  "strengths": ["max 2 short points"],
  "areasForImprovement": ["max 2 short points"],
  "alternativeApproach": "1 sentence better approach"
}

Score: 9-10 exceptional (rare), 7-8 strong, 5-6 okay, 3-4 weak, 1-2 poor. Vague answers NEVER above 5. Return ONLY JSON.
    `;

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: "Evaluate this response." }
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.5,
    });

    let content = completion.choices[0]?.message?.content || "{}";

    // Robust cleaning: Find the first '{' and last '}'
    const jsonStart = content.indexOf('{');
    const jsonEnd = content.lastIndexOf('}');
    if (jsonStart !== -1 && jsonEnd !== -1) {
      content = content.substring(jsonStart, jsonEnd + 1);
    }

    return NextResponse.json(JSON.parse(content));

  } catch (error: any) {
    console.error("Evaluation Failed:", error);
    return NextResponse.json(
      { error: "Failed to evaluate answer" },
      { status: 500 }
    );
  }
}

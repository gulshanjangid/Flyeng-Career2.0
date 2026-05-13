
import { ResumeData } from "@/lib/types";
import { generateAIResponse, generateAIObject } from "@/lib/ai-helper";

export async function calculateATSLogic(resume: ResumeData, setDashboardData: any, setAtsScore: any, setShowAtsDashboard: any, toast: any) {
    try {
        // 1. HARD RULE PENALTIES (Strict Mode)
        let penaltyScore = 0;
        const penalties: string[] = [];
        const missingSections: string[] = [];
        const formattingIssues: string[] = [];

        // Check for empty or very short content
        if (!resume.personalInfo.fullName || resume.personalInfo.fullName.length < 3) {
            penaltyScore += 100; // Instant Fail
            penalties.push("CRITICAL: Resume is empty or missing name.");
            missingSections.push("Personal Info");
        }

        if (!resume.experience || resume.experience.length === 0) {
            penaltyScore += 40;
            penalties.push("CRITICAL: No Work Experience listed (-40 points). This is a major red flag.");
            missingSections.push("Experience");
        } else if (resume.experience.length === 1) {
            penaltyScore += 15;
            penalties.push("Weakness: Only 1 role listed (-15 points). Lack of history.");
        }

        // Detect short descriptions
        let shortDescCount = 0;
        resume.experience.forEach(exp => {
            if (!exp.desc || exp.desc.length < 50) shortDescCount++;
        });
        if (shortDescCount > 0) {
            penaltyScore += (shortDescCount * 5);
            formattingIssues.push(`Found ${shortDescCount} roles with very short descriptions. Expand them.`);
        }

        if (!resume.education || resume.education.length === 0) {
            penaltyScore += 25;
            penalties.push("CRITICAL: No Education listed (-25 points).");
            missingSections.push("Education");
        }

        if (!resume.skills || resume.skills.length < 5) {
            penaltyScore += 15;
            penalties.push("CRITICAL: Skills section is too sparse (-15 points). Aim for 10+ relevant skills.");
        }

        const maxPossibleScore = Math.max(0, 100 - penaltyScore);

        // Safe prompt construction
        const resumeContent = JSON.stringify(resume);

        const prompt = `Act as a RUTHLESS Senior Tech Recruiter & ATS Expert. You are auditing a resume for a high-salary role.
        
        Resume Content (Truncated for analysis):
        ${resumeContent.substring(0, 15000)}

        CONTEXT:
        - The user has ALREADY lost ${penaltyScore} points due to: ${penalties.join('; ')}.
        - MAX POSSIBLE SCORE: ${maxPossibleScore}.
        - IF the content looks like "Lorem Ipsum" or placeholder text -> SCORE = 0.
        
        Your Goal: Find every flaw. Be strict. Do not sugarcoat.

        Analyze and Return JSON:
        {
            "score": (0-100, strict),
            "impact_score": (0-100, how impressive are the achievements?),
            "radar_data": [
                 { "subject": "ATS", "A": (0-100), "fullMark": 100 },
                 { "subject": "Content", "A": (0-100), "fullMark": 100 },
                 { "subject": "Skills", "A": (0-100), "fullMark": 100 },
                 { "subject": "Impact", "A": (0-100), "fullMark": 100 },
                 { "subject": "Format", "A": (0-100), "fullMark": 100 }
            ],
            "archetype": (e.g. "The Specialist", "The Generalist", "The Rookie", "The Executive"),
            "recruiter_impression": (e.g. "Strong Hire", "Risky", "Discard"),
            "summary": (2 sentence brutal summary),
            "fatal_errors": [list of critical flaws],
            "weaknesses": [list of improvement areas],
            "strengths": [list of good points],
            "improvement_plan": [step-by-step fix list],
            "keywords_missing": [list of important keywords for this role that are missing],
            "formatting_issues": [list of inferred formatting issues e.g. "Too short"]
        }
        `;

        // Use 'as' instead of generic to avoid TSX confusion
        const result: any = await generateAIObject(
            prompt,
            `{ score: number, impact_score: number, radar_data: object[], archetype: string, recruiter_impression: string, summary: string, fatal_errors: string[], weaknesses: string[], strengths: string[], improvement_plan: string[], keywords_missing: string[], formatting_issues: string[] }`,
            { provider: 'groq', mode: 'ats' }
        );

        const finalFatalErrors = [...new Set([...penalties, ...(result.fatal_errors || [])])];
        const finalFormattingIssues = [...new Set([...formattingIssues, ...(result.formatting_issues || [])])];
        const finalScore = Math.min(result.score, maxPossibleScore);

        setDashboardData({
            score: finalScore,
            radarData: result.radar_data,
            archetype: result.archetype,
            recruiterImpression: result.recruiter_impression,
            summary: result.summary,
            fatalErrors: finalFatalErrors,
            weaknesses: result.weaknesses || [],
            strengths: result.strengths || [],
            improvementPlan: result.improvement_plan || [],
            keywordsMissing: result.keywords_missing || [],
            formattingIssues: finalFormattingIssues || [],
            impactScore: result.impact_score || 0
        });
        setAtsScore(finalScore);
        setShowAtsDashboard(true);
        toast.success(`Analysis Complete: Score ${finalScore}`);

    } catch (e) {
        console.error(e);
        toast.error("Analysis failed. Please try again.");
    }
}

export async function generateSummaryLogic(resume: ResumeData, setResume: any, toast: any) {
    try {
        const prompt = `Act as a senior executive resume writer. 
        
        INPUT DATA:
        - Target Job Title: "${resume.personalInfo.title}"
        - Skills Listed: "${resume.skills.map(s => s.name).join(', ')}"
        - Experience: "${resume.projects.map(p => p.name).join(', ')}"

        TASK: Write a professional summary (max 50 words).

        CRITICAL LOGIC:
        1. Check if the Skills match the Job Title. 
        2. IF mismatch (e.g. Title "Game Dev" but Skills "HTML/CSS"): Do NOT lie. Write "Aspiring [Title] with strong foundation in [Actual Skills]..." or "Bridging [Skill] background into [Title]..."
        3. IF match: Write a strong, evidence-based summary.
        4. BANNED WORDS: "Spearheaded", "Leveraging", "cutting-edge", "Results-driven", "Expert", "Seasoned".
        
        OUTPUT: A natural, 2-sentence professional bio. NO placeholder text.`;

        const content = await generateAIResponse(prompt, undefined, { provider: 'groq' });
        setResume((prev: any) => ({ ...prev, summary: content.replace(/"/g, '') }));
        toast.success("AI Summary Generated!");
    } catch (error) {
        toast.error("AI service is busy. Please try again.");
    }
}

export async function enhanceDescriptionLogic(resume: ResumeData, id: string, text: string, setResume: any, toast: any) {
    try {
        // Contextual Awareness
        const relevantSkills = resume.skills.map(s => s.name).join(', ');
        const jobTitle = resume.personalInfo.title;

        const prompt = `Rewrite this resume bullet point.
        
        Original Text: "${text}"
        
        CONTEXT: 
        - Role Title: ${jobTitle}
        - Candidate Skills: ${relevantSkills}
        
        INSTRUCTIONS:
        1. Use the Candidate Skills to INFER technical details if vague. (e.g. if text is "built api" and skills has "Python", say "Built Python API").
        2. Do NOT hallucinate skills not listed.
        3. Use Action Verbs. Add Metrics if possible (invent plausible relative metrics like "improved efficiency by 20%").
        4. BANNED WORDS: "Spearheaded", "Leveraging", "cutting-edge".
        5. Tone: Technical, precise.
        
        Output JUST the rewritten bullet point string.`;

        const content = await generateAIResponse(prompt, undefined, { provider: 'groq' });
        setResume((prev: any) => ({
            ...prev,
            experience: prev.experience.map((e: any) => e.id === id ? { ...e, desc: content.replace(/"/g, '') } : e)
        }));
        toast.success("Bullet point enhanced!");
    } catch (error) {
        toast.error("Could not enhance text.");
    }
}

export async function enhanceProjectDescriptionLogic(resume: ResumeData, id: string, text: string, setResume: any, toast: any) {
    try {
        const project = resume.projects.find(p => p.id === id);
        const techStack = project?.tech || "";
        const projectName = project?.name || "";

        const prompt = `Enhance this project description for a resume.
        
        Original Text: "${text}"
        
        CONTEXT:
        - Project Name: "${projectName}"
        - Tech Stack: "${techStack}"
        
        INSTRUCTIONS:
        1. Emphasize the technical implementation using the tech stack.
        2. Focus on the *problem solved* and *measurable impact* (e.g. "Reduced latency by 40%").
        3. Use strong action verbs (e.g. "Architected", "Deployed", "Optimized").
        4. Keep it concise (1-2 powerful sentences).
        5. Tone: Professional, impressive engineering.
        
        Output JUST the enhanced description string.`;

        const content = await generateAIResponse(prompt, undefined, { provider: 'groq' });
        setResume((prev: any) => ({
            ...prev,
            projects: prev.projects.map((p: any) => p.id === id ? { ...p, desc: content.replace(/"/g, '') } : p)
        }));
        toast.success("Project description enhanced!");
    } catch (error) {
        toast.error("Could not enhance project text.");
    }
}

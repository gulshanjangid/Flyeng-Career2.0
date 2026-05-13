// Force rebuild for Vercel
export async function generateAIResponse(prompt: string, systemInstruction?: string, config?: any): Promise<string> {
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messages: [
                    { role: 'system', content: systemInstruction || "You are a helpful AI assistant." },
                    { role: 'user', content: prompt }
                ],
                config: config // Pass config (provider, mode, etc.)
            })
        });

        const data = await response.json();
        if (data.error) throw new Error(data.error);
        return data.content;
    } catch (error) {
        console.error("AI Error:", error);
        throw error;
    }
}

export async function generateAIObject<T>(prompt: string, schema: string, config?: any): Promise<T> {
    const systemInstruction = `You are a JSON generator. You must output VALID JSON only. No markdown code blocks. No explanations. The output must match this schema: ${schema}`;

    const response = await generateAIResponse(prompt, systemInstruction, {
        responseMimeType: "application/json",
        ...config // Merge config
    });

    try {
        // 1. Try direct parse
        return JSON.parse(response) as T;
    } catch (e) {
        console.warn("Direct JSON parse failed, attempting cleanup...", e);

        try {
            // 2. Extract from Markdown code blocks
            const codeBlockMatch = response.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
            if (codeBlockMatch) {
                return JSON.parse(codeBlockMatch[1]) as T;
            }

            // 3. Find first '{' and last '}'
            const firstBrace = response.indexOf('{');
            const lastBrace = response.lastIndexOf('}');

            if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
                const jsonCandidate = response.substring(firstBrace, lastBrace + 1);
                return JSON.parse(jsonCandidate) as T;
            }

            throw new Error("No valid JSON found in response");
        } catch (finalError) {
            console.error("Final JSON parse error:", finalError);
            console.error("Raw Response:", response);
            throw finalError;
        }
    }
}

// Re-export or implement missing logic
export async function calculateATSLogic(
  resume: any, 
  setDashboardData: any, 
  setAtsScore: any, 
  setShowAtsDashboard: any, 
  toast: any
) {
  try {
    const prompt = `
    You are an expert Senior Technical Recruiter and ATS Specialist with 15+ years of experience at top tech companies.
    Analyze this resume strictly, honestly, and without bias. Do not inflate scores. Be realistic.
    
    Resume Data: ${JSON.stringify(resume).slice(0, 4500)}

    Evaluation Criteria:
    1. **Impact & Metrics**: usage of numbers/quantifiable results (e.g., "Increased revenue by 20%").
    2. **Keywords**: Match against modern industry standards.
    3. **Content Quality**: Action-oriented, no fluff, strong verbs.
    4. **Formatting**: Structure and readability.

    Output a valid JSON object with this exact schema:
    {
      "score": number, // 0-100. Be strict. <50 is poor, 50-70 average, 70-85 good, >85 excellent.
      "impactScore": number, // 0-100
      "categoryScores": {
          "impact": number,
          "content": number,
          "skills": number,
          "formatting": number
      },
      "radarData": [
          { "subject": "ATS", "A": number, "fullMark": 100 },
          { "subject": "Content", "A": number, "fullMark": 100 },
          { "subject": "Skills", "A": number, "fullMark": 100 },
          { "subject": "Impact", "A": number, "fullMark": 100 },
          { "subject": "Format", "A": number, "fullMark": 100 }
      ],
      "archetype": string, // e.g., "The Specialist", "The Leader", "The Generalist"
      "recruiterImpression": string, // Short professional impression
      "summary": string, // Detailed executive summary of the critique
      "strengths": string[],
      "weaknesses": string[],
      "fatalErrors": string[],
      "improvementPlan": string[], // 3-4 actionable steps
      "keywordsMissing": string[], // Critical missing technical/soft skills
      "bulletPointFeedback": [ // Pick 2-3 weak bullet points to improve
          { "original": string, "improved": string, "reason": string }
      ]
    }
    `;

    const data: any = await generateAIObject(prompt, "{ score: number, categoryScores: object, ... }");
    
    // Ensure data shape is correct (fallback defaults if AI misses something)
    const refinedData = {
        score: data.score || 0,
        impactScore: data.impactScore || data.categoryScores?.impact || 0,
        radarData: data.radarData || [],
        categoryScores: data.categoryScores || { impact: 0, content: 0, skills: 0, formatting: 0 },
        archetype: data.archetype || 'Candidate',
        recruiterImpression: data.recruiterImpression || 'No impression generated.',
        summary: data.summary || 'Analysis incomplete.',
        fatalErrors: data.fatalErrors || [],
        weaknesses: data.weaknesses || [],
        strengths: data.strengths || [],
        improvementPlan: data.improvementPlan || [],
        keywordsMissing: data.keywordsMissing || [],
        bulletPointFeedback: data.bulletPointFeedback || []
    };

    setAtsScore(refinedData.score);
    setDashboardData(refinedData);
    setShowAtsDashboard(true);
    toast.success(`Analysis Complete! Score: ${refinedData.score}`);
  } catch (error) {
    console.error("ATS Logic Error:", error);
    toast.error("Failed to analyze resume. Please try again.");
  }
}

export async function generateSummaryLogic(resume: any, setResume: any, toast: any) {
  try {
    const prompt = `
    Generate a professional summary for this resume.
    Details: ${JSON.stringify(resume.personalInfo)}
    Experience: ${JSON.stringify(resume.experience.slice(0, 2))}
    
    Output JSON: { "summary": "Skilled developer with..." }
    `;
    
    const data: any = await generateAIObject(prompt, "{ summary: string }");
    setResume((prev: any) => ({ ...prev, personalInfo: { ...prev.personalInfo, summary: data.summary } }));
    toast.success("Summary generated!");
  } catch (e) {
    console.error(e);
    toast.error("Failed to generate summary");
  }
}

export async function enhanceDescriptionLogic(resume: any, id: string, text: string, setResume: any, toast: any) {
   try {
    const prompt = `Enhance this job description bullet point to be more punchy and results-oriented: "${text}"`;
    const data: any = await generateAIObject(prompt, "{ enhancedText: string }");
    
    setResume((prev: any) => ({
      ...prev,
      experience: prev.experience.map((e: any) => e.id === id ? { ...e, desc: data.enhancedText } : e)
    }));
    toast.success("Enhanced description!");
  } catch (e) {
    toast.error("Failed to enhance");
  }
}

export async function enhanceProjectDescriptionLogic(resume: any, id: string, text: string, setResume: any, toast: any) {
   try {
    const prompt = `Enhance this project description bullet point to be more punchy and results-oriented: "${text}"`;
    const data: any = await generateAIObject(prompt, "{ enhancedText: string }");
    
    setResume((prev: any) => ({
      ...prev,
      projects: prev.projects.map((p: any) => p.id === id ? { ...p, desc: data.enhancedText } : p)
    }));
    toast.success("Enhanced description!");
  } catch (e) {
    toast.error("Failed to enhance");
  }
}

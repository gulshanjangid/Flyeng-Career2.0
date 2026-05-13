import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || "" });

const SYSTEM_PROMPT = `You are a brutal, elite Senior Principal Engineer at a FAANG company. 
You are performing a hyper-detailed code review and audit of a developer's GitHub profile. 
You absolutely despise tutorial-cloned projects, messy commit histories ('update readme', 'fixed bug'), hardcoded secrets, empty bios, and lack of original thought.
You must return a JSON response with exactly this structure:
{
  "score": 4.5, // 0-10 float. 0-2 = garbage, 3-5 = needs work, 6-8 = solid/average, 9-10 = world-class. Don't be afraid to give 5, 6, 7 for decent profiles.
  "profileOverview": {
     "rating": "A short 1-3 word rating (e.g. 'Ghost Town', 'Try Hard', 'Invisible')",
     "roast": "A brutal 2-3 sentence roast specifically about their bio, followers, following, and overall profile presence."
  },
  "repositoriesAudit": {
     "rating": "A short 1-3 word rating",
     "roast": "A brutal 3-4 sentence roast analyzing their pinned/recent repos, languages used, forks vs original code, and project quality."
  },
  "commitHistoryAnalysis": {
     "rating": "A short 1-3 word rating (e.g. 'Weekend Warrior', 'Commit-phobe')",
     "roast": "A brutal 2-3 sentence roast about how rarely they push code, their terrible commit messages, or inconsistent activity based on the repository update dates."
  },
  "strengths": [
    "One genuinely good thing (or a backhanded compliment if they suck)",
    "Another good thing"
  ],
  "weaknesses": [
    "A brutal, specific failure point",
    "Another glaring issue with their profile",
    "Area where they completely missed the mark"
  ],
  "fixes": [
    { "title": "Pin Actual Projects", "description": "Actionable advice to fix issue 1..." },
    { "title": "Clean Commit History", "description": "Actionable advice to fix issue 2..." },
    { "title": "Write real READMEs", "description": "Actionable advice to fix issue 3..." }
  ]
}
Be savage, elite, hyper-detailed, and brutally honest but give genuinely good senior-level advice in the fixes section. Do NOT return markdown formatting outside of the JSON block. Your entire response must be parseable by JSON.parse().`;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const githubUrl = body.url;

        if (!githubUrl || !githubUrl.includes("github.com/")) {
            return NextResponse.json({ error: "Valid GitHub URL is required" }, { status: 400 });
        }

        // Extract username
        const username = githubUrl.split("github.com/")[1]?.split("/")[0];
        
        if (!username) {
             return NextResponse.json({ error: "Could not parse username" }, { status: 400 });
        }

        // Fetch basic user stats
        const userRes = await fetch(`https://api.github.com/users/${username}`, {
             headers: process.env.GITHUB_TOKEN ? { Authorization: `token ${process.env.GITHUB_TOKEN}` } : {}
        });
        
        if (!userRes.ok) {
             throw new Error(`GitHub API Error: ${userRes.status}`);
        }
        
        const userData = await userRes.json();
        
        // Fetch repositories (up to 30)
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`, {
             headers: process.env.GITHUB_TOKEN ? { Authorization: `token ${process.env.GITHUB_TOKEN}` } : {}
        });
        
        let reposData = [];
        if (reposRes.ok) reposData = await reposRes.json();

        // Summarize the data for the AI to understand without blowing up the context window
        const repoSummary = reposData.map((repo: any) => ({
            name: repo.name,
            description: repo.description,
            language: repo.language,
            stars: repo.stargazers_count,
            fork: repo.fork,
            open_issues: repo.open_issues_count
        }));

        const analyzedData = {
           username: userData.login,
           public_repos: userData.public_repos,
           followers: userData.followers,
           following: userData.following,
           bio: userData.bio,
           company: userData.company,
           blog: userData.blog,
           recently_updated_repos: repoSummary
        };

        // Send to Groq for generation
        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", "content": SYSTEM_PROMPT },
                { role: "user", "content": `Here is the scraped GitHub profile data for "${username}":\n\n${JSON.stringify(analyzedData, null, 2)}\n\nRoast this profile now based on their repos, forks, and bio. Respond ONLY with the JSON object.`}
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.8,
            max_tokens: 1500,
            response_format: { type: "json_object" }
        });

        const rawContent = completion.choices[0]?.message?.content;
        
        if (!rawContent) {
           throw new Error("No content generated");
        }
        
        const parsedRoast = JSON.parse(rawContent);

        return NextResponse.json(parsedRoast);

    } catch (error: any) {
        console.error("GitHub Roast Failed:", error);
        return NextResponse.json({ 
            score: 0.0,
            roast: ["Bro's profile is so hidden or broken that the API rejected it. Did you delete your account out of shame?"],
            fixes: [
                { title: "Make it public", "description": "We couldn't reach the GitHub API or you got rate-limited." }
            ]
        }, { status: 500 });
    }
}


import { ResumeData } from "./types";

export const initialResumeState: ResumeData = {
    personalInfo: { fullName: "", title: "", email: "", phone: "", location: "", linkedin: "", website: "" },
    summary: "",
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    achievements: [],
    volunteer: []
};

export const placeholderData: ResumeData = {
    personalInfo: {
        fullName: "Nikhil Jangid",
        title: "Frontend Developer & Full-Stack Engineer",
        email: "nikhiljangid343@gmail.com",
        phone: "+91-8058803339",
        location: "Jaipur, Rajasthan",
        linkedin: "linkedin.com/in/nikhiljangid",
        website: "nikhiljangid.dev"
    },
    summary: "Final-year Computer Science Engineering student with hands-on experience in Frontend Development and full-stack web applications using React.js, Next.js, and MERN Stack. Experienced in AI API integration (OpenAI, Gemini) and building scalable, production-ready architectures. Strong problem-solving foundation with 500+ DSA problems solved across LeetCode, CodeChef, GeeksforGeeks, and Coding Ninjas.",
    experience: [
        { id: "1", title: "Frontend Developer Intern", company: "Celebal Technologies", startDate: "May 2026", endDate: "July 2026", desc: "• Built a Shipment Delivery Application using React.js, Tailwind CSS, and REST APIs, improving delivery tracking accuracy by 30%.\n• Optimized frontend performance, reducing page load time by 20% and enhancing user experience on mobile and desktop.\n• Collaborated in an Agile team of 6 developers, integrating frontend with backend microservices and managing Git version control." }
    ],
    education: [
        { id: "1", school: "Amity University, Rajasthan", degree: "B.Tech in Computer Science and Engineering", startDate: "2022", endDate: "2026" }
    ],
    skills: [
        { id: "1", name: "React.js" }, { id: "2", name: "Next.js" }, { id: "3", name: "TypeScript" },
        { id: "4", name: "Node.js" }, { id: "5", name: "MongoDB" }, { id: "6", name: "Tailwind CSS" },
        { id: "7", name: "C++" }, { id: "8", name: "JavaScript" }, { id: "9", name: "Git & GitHub" }
    ],
    projects: [
        { id: "1", name: "AI Resume Builder — ResumeRocket", tech: "Next.js, React, Tailwind, Gemini API", link: "github.com/nikhil/resumerocket", desc: "• Developed an AI-powered resume platform using Next.js and Gemini API, improving ATS compatibility by 30%.\n• Increased resume parsing success by 30% with dynamic templates and professional optimization strategies." },
        { id: "2", name: "NJ Careers Roadmap", tech: "Next.js, OpenAI API, Gemini API", link: "github.com/nikhil/njcareers", desc: "• Designed an all-in-one career platform featuring AI-driven roadmaps and interview simulators.\n• Supported 500+ users in career planning by integrating skill assessments and industry trend analysis." },
        { id: "3", name: "AI Code Analyzer", tech: "Next.js, React, OpenAI API", link: "github.com/nikhil/codeanalyzer", desc: "• Created a real-time code analysis tool offering suggestions and DSA visualizations.\n• Reduced code complexity by 15% for users through actionable optimization tips." }
    ],
    certifications: [
        { id: "1", name: "IBM SkillsBuild AI Certificate", issuer: "IBM", date: "2024" },
        { id: "2", name: "McKinsey Forward Program", issuer: "McKinsey & Company", date: "2024" },
        { id: "3", name: "Programming Using C++", issuer: "Infosys", date: "2024" }
    ],
    achievements: [
        { id: "1", title: "500+ DSA Problems Solved", desc: "LeetCode, GFG, CodeChef, Coding Ninjas — Top 10% rank in GFG contests." },
        { id: "2", title: "GFG 22-Week Challenge", desc: "Completed with 160+ days of consistent problem-solving." }
    ],
    volunteer: []
};

export const TIPS: Record<number, string> = {
    1: "Ensure your email is professional and your LinkedIn profile is up-to-date. Recruiters often check social profiles first.",
    2: "Your summary should be your 'Elevator Pitch'. Keep it under 3 sentences and focus on unique value, not just generic traits.",
    3: "Use the Google XYZ formula: 'Accomplished [X] as measured by [Y], by doing [Z]'. Quantify your impact wherever possible.",
    4: "List education in reverse chronological order. If you have 3+ years of work experience, you can move this below Experience.",
    5: "Group your skills logically (e.g., Languages, Frameworks, Tools). Focus on hard skills relevant to the target role.",
    6: "Link to live demos or GitHub repos. Projects show passion and practical ability, especially for junior roles."
};

export interface DashboardData {
    score: number;
    radarData: any[];
    categoryScores: {
        impact: number;
        content: number;
        skills: number;
        formatting: number;
    };
    archetype: string;
    recruiterImpression: string;
    summary: string;
    fatalErrors: string[];
    weaknesses: string[];
    strengths: string[];
    improvementPlan: string[];
    keywordsMissing: string[];
    formattingIssues: string[];
    impactScore: number;
    bulletPointFeedback: Array<{ original: string; improved: string; reason: string }>;
}

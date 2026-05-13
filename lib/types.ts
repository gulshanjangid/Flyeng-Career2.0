export interface ResumeData {
    personalInfo: { fullName: string; title: string; email: string; phone: string; location: string; linkedin: string; website: string; photo?: string; };
    summary: string;
    experience: Array<{ id: string; title: string; company: string; startDate: string; endDate: string; desc: string }>;
    education: Array<{ id: string; school: string; degree: string; startDate: string; endDate: string; gpa?: string }>;
    skills: Array<{ id: string; name: string }>;
    projects: Array<{ id: string; name: string; tech: string; link: string; desc: string }>;
    certifications: Array<{ id: string; name: string; issuer: string; date: string }>;
    achievements: Array<{ id: string; title: string; desc: string }>;
    volunteer: Array<{ id: string; role: string; organization: string; startDate: string; endDate: string; desc: string }>;
}

export interface ResumeTemplateProps {
    data: ResumeData;
    config: any; // ThemeConfig from resume-themes
    onSectionClick?: (section: string) => void;
    customColor?: string;
}

export interface ResumeAnalysisData {
    score: number;
    radarData: { subject: string; A: number; fullMark: number }[];
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

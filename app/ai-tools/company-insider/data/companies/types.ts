export type Role = {
    title: string;
    ctc: string;
    base: string;
    variable: string;
    rsus: string;
    deductions: string;
    inHand: string;
};

export type SyllabusSection = {
    subject: string;
    topics: string[];
};

export type ProcessStep = {
    step: string;
    description: string;
    duration: string;
    difficulty: string;
    topics: string[];
};

export type Overview = {
    about: string;
    headquarters: string;
    size: string;
    founded: string;
    website: string;
};

export type TechStack = {
    frontend: string[];
    backend: string[];
    infra: string[];
    data: string[];
};

export type Eligibility = {
    cgpa: string;
    backlogs: string;
    gap: string;
    notes: string;
};

export type Culture = {
    wlb: string;
    remote: string;
    vibe: string;
};

export type Reality = {
    good: string[];
    bad: string[];
};

export type CompanyData = {
    id: string;
    name: string;
    type: string;
    status: 'Active' | 'Inactive';
    logo: string;
    rating: number;
    aiVerdict: string;
    overview: Overview;
    roles: Role[];
    techStack: TechStack;
    process: ProcessStep[];
    syllabus?: SyllabusSection[];
    eligibility: Eligibility;
    culture: Culture;
    reality: Reality;
};

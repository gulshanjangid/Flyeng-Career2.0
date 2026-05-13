import { ResumeData } from "./types";
import nlp from "compromise";

/**
 * Enhanced Local Resume Parser (Final Polished Edition)
 * Features:
 * 1. Strict Top-Down Parsing
 * 2. Deep Block Parsing
 * 3. Smart Research Separation
 * 4. Tech Stack Extraction & Strict Title filters
 * 5. Full Coverage (Certs, Awards, Volunteer)
 * 6. WORD BOUNDARY Skill Matching (No 'Java' in 'JavaScript')
 * 7. TEXT POLISHER (Merges jagged lines)
 */

const SKILL_KEYWORDS = [
    "javascript", "typescript", "python", "java", "c++", "c#", "ruby", "php", "swift", "kotlin", "go", "rust",
    "react", "angular", "vue", "next.js", "node.js", "express", "django", "flask", "spring", "asp.net",
    "html", "css", "sass", "less", "tailwind", "bootstrap", "material ui",
    "sql", "mysql", "postgresql", "mongodb", "redis", "firebase", "supabase", "convex",
    "aws", "gcp", "azure", "docker", "kubernetes", "jenkins", "github actions", "circleci",
    "git", "linux", "unix", "bash", "shell", "powershell",
    "figma", "adobe xd", "photoshop", "illustrator",
    "agile", "scrum", "jira", "trello",
    "machine learning", "deep learning", "nlp", "tensorflow", "pytorch", "keras", "scikit-learn", "pandas", "numpy",
    "data analysis", "data visualization", "tableau", "power bi",
    "rest api", "graphql", "grpc", "websocket", "microservices", "serverless",
    "testing", "jest", "cypress", "selenium", "mocha", "chai",
    "seo", "performance optimization", "accessibility", "i18n"
];

const genId = () => Math.random().toString(36).substr(2, 9);
const SECTION_HEADERS_REGEX = /^(?:EXPERIENCE|WORK EXPERIENCE|EMPLOYMENT|WORK HISTORY|PROFESSIONAL EXPERIENCE|EDUCATION|ACADEMIC BACKGROUND|QUALIFICATIONS|PROJECTS|PERSONAL PROJECTS|ACADEMIC PROJECTS|SKILLS|TECHNICAL SKILLS|TECHNOLOGIES|TECH STACK|CERTIFICATIONS|ACHIEVEMENTS|LANGUAGES|INTERESTS|SUMMARY|PROFESSIONAL SUMMARY|OBJECTIVE|ABOUT ME|PROFILE|CONTACT|REFERENCES|RESEARCH & PUBLICATIONS|RESEARCH INTERESTS|PUBLICATIONS|AWARDS|HONORS|VOLUNTEER|COMMUNITY SERVICE)$/i;

const DATE_REGEX = /((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+\d{4}|(?:\d{1,2}\/\d{4})|\d{4}|Present|Current|Now)/i;

const isDateLine = (line: string): boolean => {
    if (!DATE_REGEX.test(line)) return false;
    const match = line.match(/\d{4}/);
    if (match) {
        const year = parseInt(match[0]);
        if (year < 1970 || year > 2030) return false;
    }
    return true;
};

// TEXT POLISHER: Merges lines that shouldn't be split
const cleanDescription = (lines: string[]): string => {
    if (!lines || lines.length === 0) return "";
    let cleaned = "";
    lines.forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed) return;

        // Bullet detection
        const isBullet = trimmed.startsWith("•") || trimmed.startsWith("-") || trimmed.startsWith("*");

        if (isBullet) {
            // Normalize bullet
            cleaned += (cleaned ? "\n" : "") + "• " + trimmed.replace(/^[•\-\*]\s*/, "");
        } else {
            // Heuristic: If previous line didn't end with a "stopper" (punctuation), merge this line
            // Stopper chars: . ! ? : ; 
            if (cleaned.length > 0 && !cleaned.match(/[.!?:;]$/) && !cleaned.endsWith("\n") && !trimmed.match(/^[A-Z]/)) {
                cleaned += " " + trimmed;
            } else {
                cleaned += (cleaned ? "\n" : "") + trimmed;
            }
        }
    });
    return cleaned;
};

export const parseResumeLocally = (text: string): ResumeData => {
    const cleanText = text.replace(/\r\n/g, "\n");
    const rawLines = cleanText.split(/\n/).map(l => l.trim()).filter(l => l.length > 0);

    const lines: string[] = [];
    rawLines.forEach(line => {
        if (line.length > 20 && (line.includes("•") || line.includes("|") || line.includes("   "))) {
            if (isDateLine(line)) {
                const parts = line.split(/[•|]|\s{3,}/).map(s => s.trim()).filter(s => s.length > 0);
                lines.push(...parts);
                return;
            }
        }
        lines.push(line);
    });

    // 1. Top-Down Header Detection
    let headerEndIndex = lines.length;
    for (let i = 0; i < lines.length; i++) {
        const simplified = lines[i].replace(/[:]/g, '').trim();
        if (SECTION_HEADERS_REGEX.test(simplified)) {
            if (i > 3) { headerEndIndex = i; break; }
        }
    }
    const personalLines = lines.slice(0, Math.min(headerEndIndex, 50));
    const fullText = lines.join("\n");

    // 2. Contact Info
    let email = "", phone = "", linkedin = "", website = "";
    const emailMatch = fullText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (emailMatch) email = emailMatch[0];

    const phoneMatch = fullText.match(/(?:(?:\+|0{0,2})91[\s-]?|[0]?)?[789]\d{9}|(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
    if (phoneMatch) phone = phoneMatch[0];

    const linkedinMatch = fullText.match(/(?:linkedin\.com\/in\/|www\.linkedin\.com\/in\/)([\w-]+)/i);
    if (linkedinMatch) linkedin = `linkedin.com/in/${linkedinMatch[1]}`;

    const urlPattern = /(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+\.(?:com|net|org|io|dev|app|me|site)(?:\/[^\s]*)?)/g;
    let m;
    while ((m = urlPattern.exec(fullText)) !== null) {
        const url = m[0];
        if (!url.includes("linkedin") && !url.includes("gmail") && !url.includes("yahoo") && !url.includes("google")) {
            website = url;
            break;
        }
    }

    // 3. Name & Location
    let fullName = "";
    let location = "";
    const NAME_BLACKLIST = ["Resume", "CV", "Curriculum Vitae", "Summary", "Profile", "Contact", "Page", "Of", "Career", "Objective", "Email", "Phone", "Address"];
    const LOCATION_BLACKLIST = ["Development", "Design", "Engineering", "Analysis", "Management", "Problem", "Solving", "Algorithm", "Logical", "Thinking", "Skills", "Ops", "Cloud", "University", "College", "School"];

    // Strategy 1: NLP
    try {
        const headerChunk = personalLines.join("\n").substring(0, 1000);
        const doc = nlp(headerChunk);
        const people = doc.people().out('array');
        for (const p of people) {
            const pLower = p.toLowerCase();
            if (NAME_BLACKLIST.some(b => pLower.includes(b.toLowerCase()))) continue;
            if (SKILL_KEYWORDS.some(s => pLower.includes(s))) continue;
            if (p.split(" ").length >= 2 && p.split(" ").length <= 4 && !p.includes("@")) {
                fullName = p;
                break;
            }
        }
    } catch (e) { }

    // Strategy 2: Heuristic
    if (!fullName) {
        for (const line of personalLines) {
            if (line.includes("@") || line.match(/\d/)) continue;
            const lower = line.toLowerCase();
            if (NAME_BLACKLIST.some(b => lower.includes(b.toLowerCase()))) continue;
            if (SKILL_KEYWORDS.some(s => lower.includes(s))) continue;
            const words = line.split(/\s+/);
            const isTitleCase = words.every(w => /^[A-Z]/.test(w) || w.length < 3);
            if (words.length >= 2 && words.length <= 4 && line.length < 40 && isTitleCase) {
                fullName = line; break;
            }
        }
    }
    // fallback 3
    if (!fullName && personalLines.length > 0) {
        for (const line of personalLines) {
            if (line.length > 3 && line.length < 30 && !line.includes("@") && !NAME_BLACKLIST.some(b => line.toLowerCase().includes(b.toLowerCase()))) {
                fullName = line; break;
            }
        }
    }

    // Location
    for (const line of personalLines) {
        if (location) break;
        const locRegex = /([A-Za-z\s]+),\s*([A-Za-z\s]+)/;
        const match = line.match(locRegex);
        if (match) {
            const p1 = match[1].trim();
            const full = match[0];
            const isBad = LOCATION_BLACKLIST.some(b => full.includes(b));
            if (!isBad && !SKILL_KEYWORDS.includes(p1.toLowerCase())) {
                if (p1.length > 2 && match[2].length > 1) location = full;
            }
        }
        if (!location && ["Jaipur", "Bangalore", "Mumbai", "Delhi", "Pune", "Hyderabad", "Remote", "Noida", "Gurgaon"].some(c => line.includes(c))) {
            if (line.length < 50) location = line;
        }
    }


    // 4. Section Parsing
    const extractSectionContent = (headerPatterns: RegExp[]): string[] => {
        let startIndex = -1;
        for (let i = 0; i < lines.length; i++) {
            const simple = lines[i].replace(/[:]/g, '').trim();
            if (headerPatterns.some(p => p.test(simple))) {
                startIndex = i + 1;
                break;
            }
        }
        if (startIndex === -1) return [];
        const content: string[] = [];
        for (let i = startIndex; i < lines.length; i++) {
            const simple = lines[i].replace(/[:]/g, '').trim();
            if (SECTION_HEADERS_REGEX.test(simple)) break;
            content.push(lines[i]);
        }
        return content;
    };

    // --- EXPERIENCE ---
    const expLines = extractSectionContent([/^EXPERIENCE$/i, /^WORK EXPERIENCE$/i, /^EMPLOYMENT$/i, /^PROFESSIONAL EXPERIENCE$/i]);
    const experience: any[] = [];
    let currExp: any = null;
    let expDesc: string[] = [];

    // Apply cleanDescription
    const saveExp = () => { if (currExp) { currExp.desc = cleanDescription(expDesc); experience.push(currExp); } currExp = null; expDesc = []; };

    for (let i = 0; i < expLines.length; i++) {
        const line = expLines[i];
        if (isDateLine(line)) {
            saveExp();
            currExp = { id: genId(), startDate: line, endDate: "", title: "", company: "", desc: "" };
            if (i > 0) {
                const prev = expLines[i - 1];
                if (i > 1) {
                    const prevPrev = expLines[i - 2];
                    if (prevPrev.length < 50 && prev.length < 50) {
                        currExp.company = prevPrev;
                        currExp.title = prev;
                    } else {
                        currExp.title = prev;
                    }
                } else {
                    currExp.title = prev;
                }
            }
        } else {
            if (currExp) expDesc.push(line);
        }
    }
    saveExp();


    // --- PROJECTS ---
    const projLines = extractSectionContent([/^PROJECTS$/i, /^PERSONAL PROJECTS$/i, /^ACADEMIC PROJECTS$/i, /^RESEARCH & PUBLICATIONS$/i, /^PUBLICATIONS$/i]);
    const projects: any[] = [];
    let currProj: any = null;
    let projDesc: string[] = [];

    const isBadTitle = (str: string) => {
        if (str.length < 3) return true;
        if (/^[a-z]/.test(str)) return true;
        if (str.trim().endsWith(".")) return true;
        const badStarts = ["Compati", "Analy", "Strate", "Enhance", "Implemen", "Develo", "Creat", "Design", "Perform", "Optimiz", "Increas", "Reduc", "Achiev", "Supported", "Built", "Used", "Utilized", "Link", "Project Link", "Tech Stack", "Technologies"];
        if (badStarts.some(b => str.startsWith(b))) return true;
        return false;
    };
    // Apply cleanDescription
    const saveProj = () => {
        if (currProj) {
            currProj.desc = cleanDescription(projDesc);
            if (currProj.name && currProj.name.length > 2) projects.push(currProj);
        }
        currProj = null;
        projDesc = [];
    };

    for (let i = 0; i < projLines.length; i++) {
        const line = projLines[i];
        const isBullet = line.trim().startsWith("•") || line.trim().startsWith("-") || line.trim().startsWith("*");
        const isLink = line.toLowerCase().includes("http");
        const isDate = isDateLine(line);

        if (line.match(/^(?:Tech Stack|Technologies|Stack|Tools)[:\s-]/i)) {
            if (currProj) {
                const stack = line.replace(/^(?:Tech Stack|Technologies|Stack|Tools)[:\s-]*/i, "").trim();
                currProj.tech = stack;
            }
            continue;
        }

        const isDescriptiony = (line.includes(" using ") || line.includes(" with ")) && line.length > 30;

        if (!isBullet && line.length > 3 && line.length < 55 && !isDate && !isLink && !isBadTitle(line) && !isDescriptiony) {
            saveProj();
            currProj = { id: genId(), name: line, tech: "", link: "", desc: "" };

            if (line.includes("|")) {
                const p = line.split("|");
                currProj.name = p[0].trim();
                currProj.tech = p[1].trim();
            } else if (line.includes(":")) {
                const p = line.split(":");
                if (p[1].trim().split(" ").length < 8) {
                    currProj.name = p[0].trim();
                    currProj.tech = p[1].trim();
                } else {
                    currProj.name = line.replace(":", "");
                }
            }
        } else if (currProj) {
            if (isLink) {
                const match = line.match(/https?:\/\/[^\s]+/);
                if (match) currProj.link = match[0];
            } else {
                projDesc.push(line);
            }
        }
    }
    saveProj();


    // --- EDUCATION ---
    const eduLines = extractSectionContent([/^EDUCATION$/i, /^ACADEMIC BACKGROUND$/i, /^QUALIFICATIONS$/i]);
    const education: any[] = [];
    let currEdu: any = null;
    const saveEdu = () => {
        if (currEdu) {
            const last = education[education.length - 1];
            if (!last || last.degree !== currEdu.degree) education.push(currEdu);
        }
        currEdu = null;
    };

    for (let i = 0; i < eduLines.length; i++) {
        const line = eduLines[i];
        const isDegree = /(?:B\.?Tech|M\.?Tech|B\.?S|M\.?S|Bachelor|Master|Diploma|High School|Grade|Class\s*XII)/i.test(line);
        const isDate = isDateLine(line);

        if (line.trim() === "Degree") continue;

        if (isDegree || isDate) {
            if (isDegree && !currEdu) {
                currEdu = { id: genId(), degree: line, school: "University/School", startDate: "", endDate: "" };
                if (i > 0 && !isDateLine(eduLines[i - 1])) currEdu.school = eduLines[i - 1];
                saveEdu();
            } else if (isDate && !currEdu) {
                currEdu = { id: genId(), degree: "Degree", school: i > 0 ? eduLines[i - 1] : "School", startDate: line, endDate: "" };
                saveEdu();
            } else if (isDate && currEdu) {
                if (!currEdu.startDate) currEdu.startDate = line;
                else currEdu.endDate = line;
            }
        }
    }
    saveEdu();

    // --- SKILLS ---
    const allText = lines.join("\n").toLowerCase();
    const skills = SKILL_KEYWORDS.filter(k => {
        // STRICT REGEX MATCH: Ensure full word match (prevent 'Java' matching 'Javascript')
        try {
            const escaped = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`\\b${escaped}\\b`, 'i');
            // C++ and C# exceptions because \b breaks on symbols
            if (k === "c++" || k === "c#") return allText.includes(k.toLowerCase());
            return regex.test(allText);
        } catch (e) {
            return allText.includes(k.toLowerCase());
        }
    }).slice(0, 30).map(s => {
        if (["html", "css", "sql", "aws", "gcp", "seo", "api", "ui", "ux"].includes(s)) return { id: genId(), name: s.toUpperCase() };
        return { id: genId(), name: s.charAt(0).toUpperCase() + s.slice(1) };
    });

    // --- CERTIFICATIONS ---
    const certLines = extractSectionContent([/^CERTIFICATIONS$/i, /^LICENSES$/i, /^COURSES$/i]);
    const certifications: any[] = [];
    certLines.forEach(line => {
        if (line.length > 5 && line.length < 100 && !isDateLine(line)) {
            const cert: any = { id: genId(), name: line, issuer: "Issuer", date: "" };
            const dateMatch = line.match(DATE_REGEX);
            if (dateMatch) {
                cert.date = dateMatch[0];
                cert.name = line.replace(dateMatch[0], "").trim();
            }
            if (cert.name.includes("-")) {
                const parts = cert.name.split("-");
                cert.name = parts[0].trim();
                cert.issuer = parts[1].trim();
            } else if (cert.name.includes("|")) {
                const parts = cert.name.split("|");
                cert.name = parts[0].trim();
                cert.issuer = parts[1].trim();
            }
            certifications.push(cert);
        }
    });

    // --- ACHIEVEMENTS ---
    const achLines = extractSectionContent([/^ACHIEVEMENTS$/i, /^AWARDS$/i, /^HONORS$/i]);
    const achievements: any[] = [];
    achLines.forEach(line => {
        if (line.length > 5 && !isDateLine(line)) {
            const clean = line.replace(/^[•\-\*]\s*/, "");
            const item: any = { id: genId(), title: clean, desc: "" };
            if (clean.includes(":") || clean.includes("-")) {
                const parts = clean.split(/[:\-]/);
                item.title = parts[0].trim();
                item.desc = parts[1].trim();
            }
            achievements.push(item);
        }
    });

    // --- VOLUNTEER ---
    const volLines = extractSectionContent([/^VOLUNTEER$/i, /^VOLUNTEERING$/i]);
    const volunteer: any[] = [];
    volLines.forEach(line => {
        if (line.length > 5 && !isDateLine(line)) {
            volunteer.push({ id: genId(), role: "Volunteer", organization: line.replace(/^[•\-\*]\s*/, ""), startDate: "", endDate: "", desc: "" });
        }
    });


    // --- SUMMARY ---
    const summaryLines = extractSectionContent([/^SUMMARY$/i, /^PROFESSIONAL SUMMARY$/i, /^PROFILE$/i, /^ABOUT ME$/i, /^RESEARCH INTERESTS$/i]);
    // Apply cleaner
    let summary = cleanDescription(summaryLines);
    if (!summary && personalLines.length > 0) {
        for (const line of personalLines) {
            if (line.length > 50 && !line.includes("@")) {
                summary = line;
                break;
            }
        }
    }

    return {
        personalInfo: {
            fullName: fullName || "Your Name",
            title: "Software Engineer",
            email,
            phone,
            location,
            linkedin,
            website
        },
        summary,
        experience,
        education,
        projects,
        skills,
        certifications,
        achievements,
        volunteer
    };
};
import React from 'react';
import { ResumeTemplateProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export const TemplateIvyLeague: React.FC<ResumeTemplateProps> = ({ data, config, onSectionClick }) => {

    const Section = ({ id, children, className }: { id: string, children: React.ReactNode, className?: string }) => (
        <section onClick={() => onSectionClick?.(id)} className={cn("relative group mb-5 break-inside-avoid", onSectionClick && "cursor-pointer", className)}>
            {onSectionClick && (
                <div className="absolute -right-4 top-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-[9px] px-2 py-0.5 rounded-full shadow-lg print:hidden uppercase tracking-widest font-bold">Edit</div>
            )}
            {children}
        </section>
    );

    // Helper to determine if we should show a section header
    const Header = ({ children }: { children: React.ReactNode }) => (
        <h2 className="text-[10pt] font-bold uppercase tracking-[0.15em] border-b border-gray-400 pb-1.5 mb-3 text-gray-900">{children}</h2>
    );

    return (
        <div className="font-serif text-gray-900 text-[10pt] leading-[1.4] max-w-[210mm] mx-auto min-h-[297mm]">
            {/* Elegant Header - Compact */}
            <header className="text-center pb-4 mb-6 border-b-2 border-gray-900 break-inside-avoid">
                <h1 className="text-3xl font-bold tracking-tight uppercase mb-2 text-black font-display">{data.personalInfo.fullName}</h1>
                <div className="text-[10pt] text-gray-700 flex flex-wrap justify-center gap-x-2 font-medium tracking-wide">
                    {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
                    {data.personalInfo.phone && <span>| {data.personalInfo.phone}</span>}
                    {data.personalInfo.email && <span>| <a href={`mailto:${data.personalInfo.email}`} className="hover:text-black hover:underline">{data.personalInfo.email}</a></span>}
                    <span className="block w-full sm:w-auto sm:inline">
                        {data.personalInfo.linkedin && <span>| <a href={`https://${data.personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-black hover:underline">LinkedIn</a></span>}
                        {data.personalInfo.website && <span>| <a href={`https://${data.personalInfo.website}`} target="_blank" rel="noreferrer" className="hover:text-black hover:underline">Portfolio</a></span>}
                        <span>| GitHub</span>
                    </span>
                </div>
            </header>

            {/* ORDER: EDUCATION -> EXPERIENCE -> PROJECTS -> SUMMARY -> ACHIEVEMENTS -> SKILLS */}

            {/* 1. Education */}
            {data.education.length > 0 && (
                <Section id="education">
                    <Header>Education</Header>
                    <div className="space-y-3">
                        {data.education.map((edu, i) => (
                            <article key={i} className="flex justify-between items-start break-inside-avoid">
                                <div className='flex-1'>
                                    <h3 className="font-bold text-[10.5pt] text-gray-900">{edu.school}</h3>
                                    <div className="text-gray-800 font-medium">{edu.degree}</div>
                                </div>
                                <div className="text-right shrink-0 min-w-[100px]">
                                    {edu.gpa?.includes('%') ? (
                                        <>
                                            <div className="text-gray-900 font-bold text-[10pt]">{edu.gpa}</div>
                                            <div className="text-gray-600 text-[9pt] italic">{edu.school.includes('Class') ? '' : 'Score'}</div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="text-gray-800 font-medium text-[10pt]">{edu.startDate && edu.endDate ? `${edu.startDate} – ${edu.endDate}` : ''}</div>
                                            <div className="text-gray-900 font-bold text-[10pt]">{edu.gpa}</div>
                                        </>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </Section>
            )}

            {/* 2. Experience */}
            {data.experience.length > 0 && (
                <Section id="experience">
                    <Header>Experience</Header>
                    <div className="space-y-4">
                        {data.experience.map((exp, i) => (
                            <article key={i} className="break-inside-avoid">
                                <div className="flex justify-between items-baseline mb-1">
                                    <div className="flex items-baseline gap-2">
                                        <h3 className="font-bold text-[10.5pt] text-gray-900">{exp.company}</h3>
                                        <span className="text-gray-600 text-[9pt]">| {exp.title}</span>
                                    </div>
                                    <span className="text-gray-800 font-semibold text-[10pt]">{exp.startDate} – {exp.endDate}</span>
                                </div>
                                <ul className="list-outside ml-4 space-y-1 text-gray-800 marker:text-gray-500 text-[10pt] leading-snug">
                                    {exp.desc.split('•').filter(Boolean).map((b, idx) => (
                                        <li key={idx} className="pl-1 text-justify">
                                            <span className="relative -left-1">•</span> {b.trim()}
                                        </li>
                                    ))}
                                    {!exp.desc.includes('•') && exp.desc && <li className="text-justify">{exp.desc}</li>}
                                </ul>
                            </article>
                        ))}
                    </div>
                </Section>
            )}

            {/* 3. Personal Projects */}
            {data.projects.length > 0 && (
                <Section id="projects">
                    <Header>Personal Projects</Header>
                    <div className="space-y-3">
                        {data.projects.map((p, i) => (
                            <article key={i} className="break-inside-avoid">
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <div className="flex items-baseline gap-2">
                                        <h3 className="font-bold text-[10.5pt] text-gray-900">{p.name}</h3>
                                    </div>
                                    {p.link && <span className="text-gray-700 font-medium text-[9pt] italic">{p.link.includes('http') || p.link.includes('Ongoing') ? p.link : p.link}</span>}
                                </div>
                                <p className="text-gray-800 text-justify leading-snug text-[10pt]">
                                    {p.desc}
                                </p>
                            </article>
                        ))}
                    </div>
                </Section>
            )}

            {/* 4. Professional Summary (User Requested Order: 4th) */}
            {data.summary && (
                <Section id="summary">
                    <Header>Professional Summary</Header>
                    <p className="text-gray-800 text-justify leading-snug text-[10pt]">{data.summary}</p>
                </Section>
            )}

            {/* 5. Achievements / Certifications */}
            {(data.achievements.length > 0 || data.certifications.length > 0) && (
                <Section id="achievements">
                    <Header>Achievements & Certifications</Header>
                    <ul className="list-outside ml-4 space-y-1 text-gray-800 text-[10pt] leading-snug">
                        {data.achievements.map(a => (
                            <li key={a.id} className="pl-1">
                                <span className="font-bold mr-1">•</span>
                                {a.desc}
                            </li>
                        ))}
                        {data.certifications.map(c => (
                            <li key={c.id} className="pl-1">
                                <span className="font-bold mr-1">•</span>
                                <span className="font-semibold text-gray-900">{c.name}</span>
                                {c.issuer && <span className="italic text-gray-600"> — {c.issuer}</span>}
                            </li>
                        ))}
                    </ul>
                </Section>
            )}

            {/* 6. Technical Skills & Interests */}
            {data.skills.length > 0 && (
                <Section id="skills">
                    <Header>Technical Skills & Interests</Header>
                    <div className="text-[10pt] text-gray-800 leading-snug">
                        <div className="grid grid-cols-[120px_1fr] gap-y-1.5">
                            <div className="font-bold text-gray-900">Languages:</div>
                            <div>C/C++ (Proficient), JavaScript, Python (Basics), Java (Basics), HTML5, CSS3</div>

                            <div className="font-bold text-gray-900">Libraries:</div>
                            <div>C++ STL, React.js, GSAP, Shery.js, Axios, Chart.js</div>

                            <div className="font-bold text-gray-900">Web Tools:</div>
                            <div>Node.js, VS Code, Git & GitHub, Postman, Chrome DevTools</div>

                            <div className="font-bold text-gray-900">Frameworks:</div>
                            <div>React.js, Express.js (Basics)</div>

                            <div className="font-bold text-gray-900">Databases:</div>
                            <div>MongoDB (NoSQL), Firebase, MySQL (Relational)</div>

                            <div className="font-bold text-gray-900">Interests:</div>
                            <div>Web Design and Development, Problem Solving, AI-Driven Web Applications</div>
                        </div>
                    </div>
                </Section>
            )}
        </div>
    );
};
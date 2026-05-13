import React from 'react';
import { ResumeTemplateProps } from '@/lib/types';
import { cn } from '@/lib/utils';

/**
 * WALL STREET - Executive Finance Resume (Student Optimized)
 * Order: Education -> Experience -> Projects -> Summary -> Skills
 * Style: Classic Serif, High Density, Investment Banking Standard
 */
export const TemplateWallStreet: React.FC<ResumeTemplateProps> = ({ data, config, onSectionClick, customColor }) => {
    const primaryColor = customColor || '#1e3a5f';

    const Section = ({ id, children, className }: { id: string, children: React.ReactNode, className?: string }) => (
        <div onClick={() => onSectionClick?.(id)} className={cn("relative group mb-3", onSectionClick && "cursor-pointer", className)}>
            {onSectionClick && (
                <div className="absolute right-1 top-0 opacity-0 group-hover:opacity-100 text-white text-[8px] px-1 py-0.5 rounded print:hidden" style={{ backgroundColor: primaryColor }}>Edit</div>
            )}
            {children}
        </div>
    );

    const Header = ({ title }: { title: string }) => (
        <h2 className="text-[10pt] font-sans font-bold uppercase mb-1.5 pb-0.5 border-b" style={{ color: primaryColor, borderColor: primaryColor }}>
            {title}
        </h2>
    );

    return (
        <div className="font-serif text-gray-900 text-[9.5pt] leading-[1.3] min-h-[297mm]">
            {/* Header - Centered & Classic */}
            <Section id="personal" className="text-center mb-4 pb-2 border-b-2">
                <h1 className="text-2xl font-bold uppercase tracking-tight mb-1 font-sans" style={{ color: primaryColor }}>
                    {data.personalInfo.fullName}
                </h1>
                <div className="flex flex-wrap justify-center gap-x-3 text-[9pt] text-gray-700 font-sans">
                    {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
                    {data.personalInfo.phone && <span>• {data.personalInfo.phone}</span>}
                    {data.personalInfo.email && <span className="lowercase">• {data.personalInfo.email}</span>}
                    {data.personalInfo.linkedin && <span>• LinkedIn</span>}
                    {data.personalInfo.website && <span>• Portfolio</span>}
                </div>
            </Section>

            {/* 1. Education (Critical for Finance/Consulting) */}
            {data.education.length > 0 && (
                <Section id="education">
                    <Header title="Education" />
                    <div className="space-y-1.5 ">
                        {data.education.map((edu, i) => (
                            <div key={i} className="flex justify-between items-start">
                                <div>
                                    <div className="font-bold text-[10pt]">{edu.school}</div>
                                    <div className="text-gray-800 italic">{edu.degree}</div>
                                </div>
                                <div className="text-right whitespace-nowrap">
                                    <div className="font-bold">{edu.startDate} – {edu.endDate}</div>
                                    <div className="text-gray-700 text-[9pt]">{edu.gpa && (edu.gpa.includes(':') ? edu.gpa : `GPA: ${edu.gpa}`)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            {/* 2. Professional Experience */}
            {data.experience.length > 0 && (
                <Section id="experience">
                    <Header title="Professional Experience" />
                    <div className="space-y-3">
                        {data.experience.map((exp, i) => (
                            <div key={i}>
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <div className="font-bold text-[10pt]">{exp.company}</div>
                                    <div className="font-bold text-gray-900">{exp.startDate} – {exp.endDate}</div>
                                </div>
                                <div className="text-gray-800 italic mb-0.5 font-semibold text-sans text-[9pt]">{exp.title}</div>
                                <ul className="list-disc ml-4 space-y-0.5 text-gray-800 marker:text-gray-500 text-justify">
                                    {exp.desc.split('•').filter(Boolean).map((b, idx) => (
                                        <li key={idx} className="pl-0.5">{b.trim()}</li>
                                    ))}
                                    {!exp.desc.includes('•') && exp.desc && <li>{exp.desc}</li>}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            {/* 3. Leadership & Projects (Finance likes 'Leadership' but 'Projects' matches user data) */}
            {data.projects.length > 0 && (
                <Section id="projects">
                    <Header title="Projects & Leadership" />
                    <div className="space-y-2">
                        {data.projects.slice(0, 4).map((p, i) => (
                            <div key={i}>
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <div className="font-bold text-[10pt]">{p.name}</div>
                                    {p.link && <div className="text-[8.5pt] italic text-gray-500">{p.link}</div>}
                                </div>
                                <p className="text-gray-800 text-justify leading-snug">
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            {/* 4. Professional Summary */}
            {data.summary && (
                <Section id="summary">
                    <Header title="Professional Profile" />
                    <p className="text-gray-800 text-justify leading-snug">
                        {data.summary}
                    </p>
                </Section>
            )}

            {/* 5. Skills & Interests */}
            {(data.skills.length > 0 || data.certifications.length > 0) && (
                <Section id="skills">
                    <Header title="Skills, Activities & Interests" />
                    <div className="flex flex-col gap-1 text-[9pt]">
                        {data.skills.length > 0 && (
                            <div className="grid grid-cols-[110px_1fr] gap-y-0.5">
                                <div className="font-bold text-gray-900">Languages:</div>
                                <div>C/C++ (Proficient), JavaScript, Python (Basics), Java (Basics)</div>

                                <div className="font-bold text-gray-900">Technical:</div>
                                <div>React.js, Next.js, Node.js, Express.js, MongoDB, SQL, AWS, Git</div>

                                <div className="font-bold text-gray-900">Interests:</div>
                                <div>Web Design, Problem Solving, AI Applications, Financial Tech</div>
                            </div>
                        )}
                        {data.certifications.length > 0 && (
                            <div className="grid grid-cols-[110px_1fr] gap-y-0.5 mt-1">
                                <div className="font-bold text-gray-900">Certifications:</div>
                                <div>
                                    {data.certifications.map(c => c.name).join(' • ')}
                                </div>
                            </div>
                        )}
                    </div>
                </Section>
            )}
        </div>
    );
};

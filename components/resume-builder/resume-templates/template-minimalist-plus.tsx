import React from 'react';
import { ResumeTemplateProps } from '@/lib/types';
import { cn } from '@/lib/utils';

/**
 * MINIMALIST PLUS - Ultra Clean Minimal Resume (Student Optimized)
 * Order: Education -> Experience -> Projects -> Summary -> Skills
 * Style: Clean Sans-Serif, One Page, High Density
 */
export const TemplateMinimalistPlus: React.FC<ResumeTemplateProps> = ({ data, config, onSectionClick }) => {

    const Section = ({ id, children, className }: { id: string, children: React.ReactNode, className?: string }) => (
        <div onClick={() => onSectionClick?.(id)} className={cn("relative group mb-4", onSectionClick && "cursor-pointer", className)}>
            {onSectionClick && (
                <div className="absolute right-1 top-0 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-[8px] px-1 py-0.5 rounded print:hidden">Edit</div>
            )}
            {children}
        </div>
    );

    const Header = ({ title }: { title: string }) => (
        <h2 className="text-[9pt] uppercase tracking-[0.2em] text-gray-400 mb-2 font-semibold">{title}</h2>
    );

    return (
        <div className="font-sans text-gray-800 text-[9pt] leading-relaxed min-h-[297mm]">
            {/* Minimal header */}
            <Section id="personal" className="mb-6">
                <h1 className="text-3xl font-light tracking-tight mb-2 text-gray-900">{data.personalInfo.fullName}</h1>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[9pt] text-gray-600 font-light">
                    {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
                    {data.personalInfo.phone && <><span className="text-gray-300">|</span><span>{data.personalInfo.phone}</span></>}
                    {data.personalInfo.email && <><span className="text-gray-300">|</span><span>{data.personalInfo.email}</span></>}
                    {data.personalInfo.linkedin && <><span className="text-gray-300">|</span><span>LinkedIn</span></>}
                    {data.personalInfo.website && <><span className="text-gray-300">|</span><span>Portfolio</span></>}
                </div>
            </Section>

            {/* 1. Education */}
            {data.education.length > 0 && (
                <Section id="education">
                    <Header title="Education" />
                    <div className="space-y-2">
                        {data.education.map((edu, i) => (
                            <div key={i} className="flex justify-between items-start">
                                <div>
                                    <div className="text-[10pt] font-medium text-gray-900">{edu.school}</div>
                                    <div className="text-gray-700">{edu.degree}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-gray-900 font-medium">{edu.startDate} – {edu.endDate}</div>
                                    <div className="text-gray-500 italic">{edu.gpa && (edu.gpa.includes(':') ? edu.gpa : `GPA: ${edu.gpa}`)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            {/* 2. Experience */}
            {data.experience.length > 0 && (
                <Section id="experience">
                    <Header title="Experience" />
                    <div className="space-y-3">
                        {data.experience.map((exp, i) => (
                            <div key={i}>
                                <div className="flex items-baseline justify-between mb-0.5">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[9.5pt] font-medium text-gray-900">{exp.company}</span>
                                        <span className="text-[9pt] text-gray-500 italic">{exp.title}</span>
                                    </div>
                                    <span className="text-[9pt] text-gray-400">{exp.startDate} – {exp.endDate}</span>
                                </div>
                                <ul className="text-[9pt] text-gray-600 space-y-0.5 text-justify">
                                    {exp.desc.split('•').filter(Boolean).map((b, i) => (
                                        <li key={i} className="pl-2 relative before:content-['·'] before:absolute before:left-0 before:font-bold before:text-gray-400">{b.trim()}</li>
                                    ))}
                                    {!exp.desc.includes('•') && exp.desc && <li>{exp.desc}</li>}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            {/* 3. Projects */}
            {data.projects.length > 0 && (
                <Section id="projects">
                    <Header title="Projects" />
                    <div className="space-y-2">
                        {data.projects.slice(0, 4).map((proj, i) => (
                            <div key={i}>
                                <div className="flex items-baseline justify-between mb-0.5">
                                    <span className="font-medium text-gray-900">{proj.name}</span>
                                    {proj.link && <span className="text-[8pt] text-gray-400 italic">{proj.link}</span>}
                                </div>
                                <p className="text-gray-600 text-justify leading-snug">{proj.desc}</p>
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            {/* 4. Summary */}
            {data.summary && (
                <Section id="summary">
                    <Header title="About" />
                    <p className="text-gray-600 leading-relaxed text-justify">{data.summary}</p>
                </Section>
            )}

            {/* 5. Skills & Certs */}
            <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-1 gap-2">
                {data.skills.length > 0 && (
                    <div>
                        <span className="text-[9pt] font-medium text-gray-900 mr-2">Skills:</span>
                        <span className="text-gray-600">{data.skills.map(s => s.name).join(' · ')}</span>
                    </div>
                )}
                {data.certifications.length > 0 && (
                    <div>
                        <span className="text-[9pt] font-medium text-gray-900 mr-2">Certifications:</span>
                        <span className="text-gray-600">{data.certifications.map(c => c.name).join(' · ')}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

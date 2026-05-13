import React from 'react';
import { ResumeTemplateProps } from '@/lib/types';
import { cn } from '@/lib/utils';

/**
 * REDLINE / EXECUTIVE LINE - Bold Accent Timeline Resume
 * ATS Score: Excellent | Timeline dots, red accents, sidebar
 * Best for: Sales, Marketing, Leadership, Dynamic roles
 */
export const TemplateRedline: React.FC<ResumeTemplateProps> = ({ data, config, onSectionClick, customColor }) => {
    const accentColor = customColor || '#dc2626';

    const Section = ({ id, children, className }: { id: string, children: React.ReactNode, className?: string }) => (
        <div onClick={() => onSectionClick?.(id)} className={cn("relative group", onSectionClick && "cursor-pointer", className)}>
            {onSectionClick && (
                <div className="absolute right-1 top-0 opacity-0 group-hover:opacity-100 text-white text-[8px] px-1 py-0.5 rounded print:hidden" style={{ backgroundColor: accentColor }}>Edit</div>
            )}
            {children}
        </div>
    );

    return (
        <div className="font-sans text-gray-800 text-sm leading-relaxed">
            {/* Header with accent underline */}
            <Section id="personal" className="mb-4">
                <h1 className="text-2xl font-black mb-0.5">{data.personalInfo.fullName}</h1>
                {data.personalInfo.title && (
                    <p className="text-base font-semibold mb-2" style={{ color: accentColor }}>{data.personalInfo.title}</p>
                )}
                <div className="w-full h-1 mb-2" style={{ backgroundColor: accentColor }}></div>
                <div className="flex flex-wrap gap-x-4 text-sm text-gray-600">
                    {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
                    {data.personalInfo.phone && <span>• {data.personalInfo.phone}</span>}
                    {data.personalInfo.location && <span>• {data.personalInfo.location}</span>}
                    {data.personalInfo.linkedin && <span>• {data.personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>}
                </div>
            </Section>

            {/* Two-column layout */}
            <div className="flex gap-5">
                {/* Main column */}
                <div className="flex-[2]">
                    {/* Summary */}
                    {data.summary && (
                        <Section id="summary" className="mb-4">
                            <h2 className="text-sm font-bold uppercase tracking-wider mb-1.5 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></span>
                                Professional Summary
                            </h2>
                            <p className="text-sm text-gray-600 leading-relaxed">{data.summary}</p>
                        </Section>
                    )}

                    {/* Experience with timeline */}
                    {data.experience.length > 0 && (
                        <Section id="experience" className="mb-4">
                            <h2 className="text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></span>
                                Career History
                            </h2>
                            <div className="relative">
                                {/* Timeline line */}
                                <div className="absolute left-1 top-2 bottom-2 w-0.5" style={{ backgroundColor: `${accentColor}30` }}></div>

                                {data.experience.map(exp => (
                                    <div key={exp.id} className="relative pl-5 mb-3">
                                        <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full border-2 bg-white" style={{ borderColor: accentColor }}></div>
                                        <div className="flex justify-between mb-0.5">
                                            <span className="font-bold">{exp.title}</span>
                                            <span className="text-sm font-semibold" style={{ color: accentColor }}>{exp.startDate} – {exp.endDate}</span>
                                        </div>
                                        <div className="text-sm text-gray-600 mb-1">{exp.company}</div>
                                        <ul className="text-sm text-gray-600 space-y-0.5 list-disc ml-4">
                                            {exp.desc.split('•').filter(Boolean).slice(0, 4).map((b, i) => <li key={i}>{b.trim()}</li>)}
                                            {!exp.desc.includes('•') && exp.desc && <li>{exp.desc}</li>}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    )}

                    {/* Projects */}
                    {data.projects.length > 0 && (
                        <div className="mb-3">
                            <h2 className="text-sm font-bold uppercase tracking-wider mb-1.5 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></span>
                                Key Projects
                            </h2>
                            {data.projects.slice(0, 2).map(proj => (
                                <div key={proj.id} className="mb-1 text-sm">
                                    <span className="font-semibold">{proj.name}</span>
                                    <span className="text-gray-500"> ({proj.tech})</span>
                                    <span className="text-gray-600"> — {proj.desc}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="flex-1 pl-4 border-l-2" style={{ borderColor: `${accentColor}30` }}>
                    {/* Skills with bars */}
                    {data.skills.length > 0 && (
                        <Section id="skills" className="mb-4">
                            <h2 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>Core Skills</h2>
                            <div className="space-y-1.5">
                                {data.skills.slice(0, 8).map(skill => (
                                    <div key={skill.id} className="flex items-center gap-2">
                                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="h-full rounded-full" style={{ width: '80%', backgroundColor: accentColor }}></div>
                                        </div>
                                        <span className="text-xs w-16 text-right truncate">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    )}

                    {/* Education */}
                    {data.education.length > 0 && (
                        <Section id="education" className="mb-4">
                            <h2 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>Education</h2>
                            {data.education.map(edu => (
                                <div key={edu.id} className="mb-2 text-sm">
                                    <div className="font-semibold">{edu.degree}</div>
                                    <div className="text-gray-500 text-xs">{edu.school}</div>
                                    <div className="text-gray-400 text-xs">{edu.endDate}</div>
                                </div>
                            ))}
                        </Section>
                    )}

                    {/* Certifications */}
                    {data.certifications && data.certifications.length > 0 && (
                        <div className="mb-3">
                            <h2 className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: accentColor }}>Certifications</h2>
                            {data.certifications.slice(0, 3).map(c => (
                                <div key={c.id} className="text-xs mb-0.5">• {c.name}</div>
                            ))}
                        </div>
                    )}

                    {/* Achievements */}
                    {data.achievements && data.achievements.length > 0 && (
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: accentColor }}>Achievements</h2>
                            {data.achievements.slice(0, 2).map(a => (
                                <div key={a.id} className="text-xs mb-0.5">🏆 {a.title}</div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

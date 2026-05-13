import React from 'react';
import { ResumeTemplateProps } from '@/lib/types';
import { cn } from '@/lib/utils';

/**
 * DESIGNER - Modern Creative Resume (Student Optimized)
 * Order: Education -> Experience -> Projects -> Summary
 * Style: Clean Sans-Serif, Left Accent Borders, Tag-based Skills
 */
export const TemplateDesigner: React.FC<ResumeTemplateProps> = ({ data, config, onSectionClick, customColor }) => {
    const accentColor = customColor || '#8b5cf6';

    const Section = ({ id, children, className }: { id: string, children: React.ReactNode, className?: string }) => (
        <div onClick={() => onSectionClick?.(id)} className={cn("relative group mb-5 pl-4 border-l-2", onSectionClick && "cursor-pointer", className)} style={{ borderColor: accentColor }}>
            {onSectionClick && (
                <div className="absolute right-1 top-0 opacity-0 group-hover:opacity-100 text-white text-[8px] px-1 py-0.5 rounded print:hidden" style={{ backgroundColor: accentColor }}>Edit</div>
            )}
            {children}
        </div>
    );

    const Header = ({ title }: { title: string }) => (
        <h2 className="text-[9pt] font-black uppercase tracking-widest mb-3" style={{ color: accentColor }}>{title}</h2>
    );

    return (
        <div className="font-sans text-gray-800 text-[9pt] leading-relaxed min-h-[297mm]">
            {/* Header - Modern Left Aligned */}
            <div className="mb-6 pl-4 border-l-4 py-1" style={{ borderColor: accentColor }}>
                <h1 className="text-3xl font-black tracking-tight leading-none mb-1 text-gray-900">{data.personalInfo.fullName}</h1>
                <p className="text-lg font-medium text-gray-500 mb-2">{data.personalInfo.title}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-[9pt] font-medium text-gray-600">
                    {[data.personalInfo.email, data.personalInfo.phone, data.personalInfo.location].filter(Boolean).map((item, i) => (
                        <span key={i} className="flex items-center gap-1.5">
                            {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-300"></span>}
                            {item}
                        </span>
                    ))}
                    {data.personalInfo.website && (
                        <span className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span className="text-indigo-600 font-bold">Portfolio</span>
                        </span>
                    )}
                </div>
            </div>

            {/* 1. Education */}
            {data.education.length > 0 && (
                <Section id="education">
                    <Header title="Education" />
                    <div className="space-y-3">
                        {data.education.map((edu, i) => (
                            <div key={i} className="flex justify-between items-start">
                                <div>
                                    <div className="text-sm font-bold text-gray-900">{edu.school}</div>
                                    <div className="text-gray-600 font-medium">{edu.degree}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs font-bold text-gray-900">{edu.startDate} – {edu.endDate}</div>
                                    <div className="text-xs text-gray-500 font-mono">{edu.gpa && (edu.gpa.includes(':') ? edu.gpa : `GPA: ${edu.gpa}`)}</div>
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
                    <div className="space-y-4">
                        {data.experience.map((exp, i) => (
                            <div key={i}>
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="text-[10pt] font-bold text-gray-900">{exp.company}</h3>
                                    <span className="text-[8pt] font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{exp.startDate} – {exp.endDate}</span>
                                </div>
                                <div className="text-xs font-bold mb-1.5" style={{ color: accentColor }}>{exp.title}</div>
                                <ul className="list-disc ml-4 space-y-1 text-gray-600 text-justify">
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

            {/* 3. Projects */}
            {data.projects.length > 0 && (
                <Section id="projects">
                    <Header title="Selected Projects" />
                    <div className="grid grid-cols-1 gap-3">
                        {data.projects.slice(0, 4).map((proj, i) => (
                            <div key={i} className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                <div className="flex justify-between items-center mb-1">
                                    <div className="font-bold text-gray-900">{proj.name}</div>
                                    {/* {proj.tech && <div className="text-[8px] uppercase tracking-wide font-bold text-gray-400">{proj.tech}</div>} */}
                                </div>
                                <p className="text-gray-600 text-justify leading-snug">{proj.desc}</p>
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            {/* 4. Contact & Summary */}
            <div className="grid grid-cols-2 gap-6">
                {data.summary && (
                    <Section id="summary">
                        <Header title="About" />
                        <p className="text-gray-600 text-justify leading-relaxed">{data.summary}</p>
                    </Section>
                )}

                {(data.skills.length > 0 || data.certifications.length > 0) && (
                    <Section id="skills">
                        <Header title="Skills" />
                        <div className="flex flex-wrap gap-1.5">
                            {data.skills.slice(0, 15).map(s => (
                                <span key={s.id} className="inline-block px-2 py-0.5 text-[8px] font-bold uppercase tracking-wide rounded-sm border bg-white" style={{ borderColor: accentColor, color: accentColor }}>
                                    {s.name}
                                </span>
                            ))}
                        </div>
                        {data.certifications.length > 0 && (
                            <div className="mt-3">
                                <div className="text-[8px] font-bold uppercase tracking-widest mb-1 text-gray-400">Awards</div>
                                {data.certifications.map(c => (
                                    <div key={c.id} className="text-xs truncate text-gray-700">• {c.name}</div>
                                ))}
                            </div>
                        )}
                    </Section>
                )}
            </div>
        </div>
    );
};
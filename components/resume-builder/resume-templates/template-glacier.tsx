import React from 'react';
import { ResumeTemplateProps } from '@/lib/types';
import { cn } from '@/lib/utils';

/**
 * GLACIER - Modern Header Block Resume (Student Optimized)
 * Order: Education -> Experience -> Projects -> Summary
 */
export const TemplateGlacier: React.FC<ResumeTemplateProps> = ({ data, config, onSectionClick, customColor }) => {
    const headerColor = customColor || '#2A9D8F';

    const Section = ({ id, children, className }: { id: string, children: React.ReactNode, className?: string }) => (
        <div onClick={() => onSectionClick?.(id)} className={cn("relative group mb-4", onSectionClick && "cursor-pointer", className)}>
            {onSectionClick && (
                <div className="absolute right-1 top-1 opacity-0 group-hover:opacity-100 text-white text-[8px] px-1 py-0.5 rounded print:hidden" style={{ backgroundColor: headerColor }}>Edit</div>
            )}
            {children}
        </div>
    );

    const Header = ({ title }: { title: string }) => (
        <h2 className="text-[9pt] font-bold uppercase tracking-wider mb-2 flex items-center gap-2" style={{ color: headerColor }}>
            <span className="w-6 h-0.5" style={{ backgroundColor: headerColor }}></span>
            {title}
        </h2>
    );

    return (
        <div className="font-sans text-gray-800 text-[9pt] leading-relaxed min-h-[297mm]">
            {/* Header Section */}
            <Section id="personal" className="mb-6">
                <div className="border-l-[6px] pl-4 py-2" style={{ borderColor: headerColor }}>
                    <h1 className="text-3xl font-bold mb-1 uppercase tracking-tight" style={{ color: headerColor }}>{data.personalInfo.fullName}</h1>
                    {data.personalInfo.title && (
                        <p className="text-base text-gray-600 mb-2 font-medium">{data.personalInfo.title}</p>
                    )}
                    <div className="flex flex-wrap gap-x-4 text-[9pt] text-gray-500 font-medium">
                        {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
                        {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
                        {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
                        {data.personalInfo.linkedin && <span>LinkedIn</span>}
                    </div>
                </div>
            </Section>

            {/* 1. Education */}
            {data.education.length > 0 && (
                <Section id="education">
                    <Header title="Education" />
                    <div className="space-y-2 pl-2">
                        {data.education.map((edu, i) => (
                            <div key={i} className="flex justify-between items-start">
                                <div>
                                    <div className="font-bold text-gray-900">{edu.school}</div>
                                    <div className="text-gray-600 italic">{edu.degree}</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-medium text-gray-900">{edu.startDate} – {edu.endDate}</div>
                                    <div className="text-gray-500 text-[8.5pt]">{edu.gpa && (edu.gpa.includes(':') ? edu.gpa : `GPA: ${edu.gpa}`)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            {/* 2. Experience */}
            {data.experience.length > 0 && (
                <Section id="experience">
                    <Header title="Work Experience" />
                    <div className="space-y-4 pl-2">
                        {data.experience.map((exp, i) => (
                            <div key={i} className="border-l-2 pl-3" style={{ borderColor: `${headerColor}30` }}>
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <div className="font-bold text-[9.5pt]" style={{ color: headerColor }}>{exp.company}</div>
                                    <div className="text-gray-500 text-[8.5pt] font-medium">{exp.startDate} – {exp.endDate}</div>
                                </div>
                                <div className="font-semibold text-gray-800 text-[9pt] mb-1">{exp.title}</div>
                                <ul className="text-[9pt] text-gray-600 space-y-0.5 list-disc ml-4 text-justify">
                                    {exp.desc.split('•').filter(Boolean).map((b, idx) => <li key={idx}>{b.trim()}</li>)}
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
                    <div className="space-y-2 pl-2">
                        {data.projects.slice(0, 4).map((proj, i) => (
                            <div key={i} className="mb-2">
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <span className="font-bold text-gray-900">{proj.name}</span>
                                    {proj.link && <span className="text-[8pt] text-gray-400 italic">{proj.link}</span>}
                                </div>
                                <p className="text-gray-600 text-justify leading-snug">{proj.desc}</p>
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            {/* 4. Professional Summary */}
            {data.summary && (
                <Section id="summary">
                    <Header title="Professional Summary" />
                    <p className="text-gray-600 leading-relaxed text-justify pl-2">{data.summary}</p>
                </Section>
            )}

            {/* 5. Skills */}
            {(data.skills.length > 0 || data.certifications.length > 0) && (
                <Section id="skills">
                    <Header title="Skills & Certifications" />
                    <div className="pl-2">
                        {data.skills.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-2">
                                {data.skills.map(s => (
                                    <span key={s.id} className="px-2 py-0.5 bg-gray-50 border border-gray-100 rounded text-[8.5pt] font-medium text-gray-700">
                                        {s.name}
                                    </span>
                                ))}
                            </div>
                        )}
                        {data.certifications.length > 0 && (
                            <div className="mt-2 text-[9pt] text-gray-600 italic">
                                {data.certifications.map(c => c.name).join(' • ')}
                            </div>
                        )}
                    </div>
                </Section>
            )}
        </div>
    );
};

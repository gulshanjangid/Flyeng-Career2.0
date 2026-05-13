import React from 'react';
import { ResumeTemplateProps } from '@/lib/types';
import { cn } from '@/lib/utils';

/**
 * ZURICH MODERN - Swiss Grid Style (Student Optimized)
 * Order: Education -> Experience -> Projects -> Summary
 * Style: Left Labels (Dates/Titles), Right Content
 */
export const TemplateZurich: React.FC<ResumeTemplateProps> = ({ data, config, onSectionClick }) => {

    const Section = ({ id, children, className }: { id: string, children: React.ReactNode, className?: string }) => (
        <div onClick={() => onSectionClick?.(id)} className={cn("relative group mb-5", onSectionClick && "cursor-pointer", className)}>
            {onSectionClick && (
                <div className="absolute right-1 top-0 opacity-0 group-hover:opacity-100 bg-black text-white text-[8px] px-1 py-0.5 rounded print:hidden">Edit</div>
            )}
            {children}
        </div>
    );

    // Swiss Grid: Left Label Column (90px), Right Content Column (Rest)
    const GridRow = ({ label, content }: { label: React.ReactNode, content: React.ReactNode }) => (
        <div className="grid grid-cols-[100px_1fr] gap-4 mb-4">
            <div className="text-[9pt] font-semibold text-gray-500 text-right pr-2 pt-0.5">{label}</div>
            <div>{content}</div>
        </div>
    );

    return (
        <div className="font-sans text-gray-900 text-[9pt] leading-relaxed min-h-[297mm]">
            {/* Swiss Header */}
            <Section id="personal" className="mb-8 border-b-4 border-black pb-4">
                <h1 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">{data.personalInfo.fullName}</h1>
                <div className="flex justify-between items-end">
                    <p className="text-lg font-bold text-gray-600">{data.personalInfo.title}</p>
                    <div className="text-right text-[9pt] font-medium text-gray-500">
                        {data.personalInfo.email} • {data.personalInfo.location}<br />
                        {data.personalInfo.phone} • LinkedIn
                    </div>
                </div>
            </Section>

            {/* 1. Education */}
            {data.education.length > 0 && (
                <Section id="education">
                    <h2 className="text-[10pt] font-black uppercase tracking-widest text-black mb-4 pl-[116px]">Education</h2>
                    {data.education.map((edu, i) => (
                        <GridRow
                            key={i}
                            label={
                                <div>
                                    <div>{edu.endDate}</div>
                                    <div className="font-normal text-gray-400">{edu.startDate}</div>
                                </div>
                            }
                            content={
                                <div>
                                    <div className="font-bold text-[10pt]">{edu.school}</div>
                                    <div className="text-gray-700">{edu.degree}</div>
                                    <div className="text-gray-500 font-mono text-[8.5pt] mt-0.5">{edu.gpa && (edu.gpa.includes(':') ? edu.gpa : `GPA: ${edu.gpa}`)}</div>
                                </div>
                            }
                        />
                    ))}
                </Section>
            )}

            {/* 2. Experience */}
            {data.experience.length > 0 && (
                <Section id="experience">
                    <h2 className="text-[10pt] font-black uppercase tracking-widest text-black mb-4 pl-[116px] border-t border-gray-100 pt-4">Experience</h2>
                    {data.experience.map((exp, i) => (
                        <GridRow
                            key={i}
                            label={
                                <div>
                                    <div className="text-black">{exp.endDate}</div>
                                    <div className="font-normal text-gray-400">{exp.startDate}</div>
                                </div>
                            }
                            content={
                                <div>
                                    <div className="font-bold text-[10pt]">{exp.company}</div>
                                    <div className="font-semibold text-gray-600 mb-1">{exp.title}</div>
                                    <ul className="text-justify list-disc ml-4 space-y-0.5 text-gray-700">
                                        {exp.desc.split('•').filter(Boolean).map((b, idx) => <li key={idx}>{b.trim()}</li>)}
                                        {!exp.desc.includes('•') && exp.desc && <li>{exp.desc}</li>}
                                    </ul>
                                </div>
                            }
                        />
                    ))}
                </Section>
            )}

            {/* 3. Projects */}
            {data.projects.length > 0 && (
                <Section id="projects">
                    <h2 className="text-[10pt] font-black uppercase tracking-widest text-black mb-4 pl-[116px] border-t border-gray-100 pt-4">Projects</h2>
                    {data.projects.slice(0, 3).map((proj, i) => (
                        <GridRow
                            key={i}
                            label={<div className="text-gray-400">Project {i + 1}</div>}
                            content={
                                <div>
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <span className="font-bold text-[9.5pt]">{proj.name}</span>
                                        {proj.link && <span className="text-[8pt] font-mono text-gray-400">{proj.link}</span>}
                                    </div>
                                    <p className="text-justify text-gray-700 leading-snug">{proj.desc}</p>
                                </div>
                            }
                        />
                    ))}
                </Section>
            )}

            {/* 4. Skills & Summary */}
            <Section id="skills">
                <h2 className="text-[10pt] font-black uppercase tracking-widest text-black mb-4 pl-[116px] border-t border-gray-100 pt-4">Profile</h2>
                {data.summary && (
                    <GridRow label="About" content={<p className="text-justify text-gray-600">{data.summary}</p>} />
                )}
                {data.skills.length > 0 && (
                    <GridRow
                        label="Skills"
                        content={
                            <div className="flex flex-wrap gap-1.5">
                                {data.skills.map(s => (
                                    <span key={s.id} className="text-[8.5pt] font-bold bg-gray-100 px-2 py-0.5 rounded-sm">{s.name}</span>
                                ))}
                            </div>
                        }
                    />
                )}
            </Section>
        </div>
    );
};

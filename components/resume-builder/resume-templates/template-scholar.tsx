import React from 'react';
import { ResumeTemplateProps } from '@/lib/types';
import { cn } from '@/lib/utils';

/**
 * SCHOLAR - Academic CV Style (Student Optimized)
 * Order: Education -> Experience -> Projects -> Summary
 * Style: Formal Serif, Clear Section Breaks
 */
export function TemplateScholar({ data, config, onSectionClick }: ResumeTemplateProps) {

    const Section = ({ id, children, className }: { id: string, children: React.ReactNode, className?: string }) => (
        <section onClick={() => onSectionClick?.(id)} className={cn("relative group mb-5 break-inside-avoid", onSectionClick && "cursor-pointer", className)}>
            {onSectionClick && (
                <div className="absolute -right-2 top-0 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[9px] px-2 py-0.5 rounded shadow-sm print:hidden">Edit</div>
            )}
            {children}
        </section>
    );

    const Header = ({ title }: { title: string }) => (
        <h2 className="text-[10pt] font-bold uppercase tracking-wider mb-2 border-b-2 border-gray-800 pb-1 text-gray-900">{title}</h2>
    );

    return (
        <div className="font-serif text-gray-900 text-[9.5pt] leading-[1.4] min-h-[297mm]">
            {/* Academic Header */}
            <header className="text-center mb-6 pb-4 border-b border-gray-300 break-inside-avoid">
                <h1 className="text-3xl font-bold tracking-tight mb-1 uppercase text-gray-900 font-display">{data.personalInfo.fullName}</h1>
                <p className="text-base text-gray-600 italic mb-2">{data.personalInfo.title}</p>
                <div className="flex justify-center flex-wrap gap-x-4 text-[9.5pt] text-gray-600 font-medium">
                    {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
                    {data.personalInfo.phone && <span>| {data.personalInfo.phone}</span>}
                    {data.personalInfo.location && <span>| {data.personalInfo.location}</span>}
                    {data.personalInfo.linkedin && <span>| LinkedIn</span>}
                </div>
            </header>

            {/* 1. Education FIRST */}
            {data.education.length > 0 && (
                <Section id="education">
                    <Header title="Education" />
                    <div className="space-y-3">
                        {data.education.map((edu, i) => (
                            <article key={i} className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-gray-900 text-[10.5pt]">{edu.school}</h3>
                                    <div className="text-gray-800 italic">{edu.degree}</div>
                                </div>
                                <div className="text-right shrink-0">
                                    <div className="font-medium text-gray-900">{edu.startDate} – {edu.endDate}</div>
                                    <div className="text-[9pt] text-gray-600 font-medium">{edu.gpa && (edu.gpa.includes(':') ? edu.gpa : `GPA: ${edu.gpa}`)}</div>
                                </div>
                            </article>
                        ))}
                    </div>
                </Section>
            )}

            {/* 2. Experience */}
            {data.experience.length > 0 && (
                <Section id="experience">
                    <Header title="Professional Experience" />
                    <div className="space-y-4">
                        {data.experience.map((exp, i) => (
                            <article key={i}>
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h3 className="font-bold text-gray-900 text-[10.5pt] tracking-tight">{exp.company}</h3>
                                    <span className="text-gray-900 font-medium text-[9pt]">{exp.startDate} – {exp.endDate}</span>
                                </div>
                                <div className="text-gray-800 font-semibold italic mb-1">{exp.title}</div>
                                <ul className="list-outside ml-4 space-y-0.5 text-gray-800 marker:text-gray-500 text-justify">
                                    {exp.desc.split('•').filter(Boolean).map((b, i) => (
                                        <li key={i} className="pl-1">{b.trim()}</li>
                                    ))}
                                    {!exp.desc.includes('•') && exp.desc && <li>{exp.desc}</li>}
                                </ul>
                            </article>
                        ))}
                    </div>
                </Section>
            )}

            {/* 3. Projects */}
            {data.projects.length > 0 && (
                <Section id="projects">
                    <Header title="Selected Projects" />
                    <div className="space-y-3">
                        {data.projects.slice(0, 4).map((proj, i) => (
                            <article key={i}>
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h3 className="font-bold text-gray-900 text-[10pt]">"{proj.name}"</h3>
                                    {proj.link && <span className="text-gray-500 italic text-[9pt]">{proj.link}</span>}
                                </div>
                                <p className="text-gray-800 leading-snug text-justify">
                                    {proj.desc}
                                </p>
                            </article>
                        ))}
                    </div>
                </Section>
            )}

            {/* 4. Skills & Awards */}
            {(data.skills.length > 0 || data.certifications.length > 0) && (
                <Section id="skills">
                    <Header title="Skills & Qualifications" />
                    <div className="space-y-2 text-[9.5pt]">
                        {data.skills.length > 0 && (
                            <div>
                                <span className="font-bold text-gray-900">Technical Skills: </span>
                                <span className="text-gray-800">{data.skills.map(s => s.name).join(' • ')}</span>
                            </div>
                        )}
                        {data.certifications.length > 0 && (
                            <div>
                                <span className="font-bold text-gray-900">Certifications: </span>
                                <span className="text-gray-800">{data.certifications.map(c => c.name).join(' • ')}</span>
                            </div>
                        )}
                        {data.achievements.length > 0 && (
                            <div>
                                <span className="font-bold text-gray-900">Achievements: </span>
                                <span className="text-gray-800">{data.achievements.map(a => a.desc).join(' • ')}</span>
                            </div>
                        )}
                    </div>
                </Section>
            )}

            {/* 5. Summary */}
            {data.summary && (
                <Section id="summary">
                    <Header title="Professional Summary" />
                    <p className="text-justify text-gray-800 leading-[1.5]">{data.summary}</p>
                </Section>
            )}
        </div>
    );
}
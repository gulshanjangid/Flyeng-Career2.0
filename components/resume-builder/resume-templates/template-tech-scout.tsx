import React from 'react';
import { ResumeTemplateProps } from '@/lib/types';
import { cn } from '@/lib/utils';

/**
 * TECH SCOUT - Modern Two-Column Tech Resume (Student Optimized)
 * Order: Education -> Experience -> Projects -> Summary
 * PRINT FIX: Sidebar forces Light BG + Dark Text for safety.
 */
export const TemplateTechScout: React.FC<ResumeTemplateProps> = ({ data, config, onSectionClick, customColor }) => {
    const accentColor = customColor || '#0ea5e9';

    const Section = ({ id, children, className }: { id: string, children: React.ReactNode, className?: string }) => (
        <div onClick={() => onSectionClick?.(id)} className={cn("relative group", onSectionClick && "cursor-pointer", className)}>
            {onSectionClick && (
                <div className="absolute right-1 top-1 opacity-0 group-hover:opacity-100 text-white text-[8px] px-1 py-0.5 rounded print:hidden" style={{ backgroundColor: accentColor }}>Edit</div>
            )}
            {children}
        </div>
    );

    const Header = ({ title }: { title: string }) => (
        <h2 className="text-[10pt] font-bold uppercase tracking-widest text-slate-500 mb-2 border-b border-slate-200 pb-1">{title}</h2>
    );

    return (
        <div className="font-sans text-gray-800 text-[10pt] leading-relaxed flex h-full -m-8 bg-white min-h-[297mm]">
            {/* LEFT SIDEBAR - Dark on Screen, Light on Print for Safety */}
            {/* print:bg-slate-50 print:text-black print:border-r */}
            <div className="w-[30%] bg-[#0f172a] text-white p-6 flex flex-col gap-6 shrink-0 print:bg-slate-50 print:text-black print:border-r print:border-slate-200">

                {/* Profile Photo Area (Initials) */}
                <div className="text-center mb-1">
                    <div className="w-16 h-16 rounded-full bg-white/10 mx-auto flex items-center justify-center text-xl font-bold border-2 border-white/20 print:bg-slate-200 print:text-black print:border-slate-300">
                        {data.personalInfo.fullName.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </div>
                </div>

                <Section id="personal" className="text-center">
                    <h1 className="text-xl font-bold mb-1 leading-tight tracking-wide print:text-black">{data.personalInfo.fullName}</h1>
                    {data.personalInfo.title && <p className="text-[11px] text-gray-400 font-medium tracking-wider uppercase mb-4 print:text-gray-600">{data.personalInfo.title}</p>}

                    <div className="space-y-2.5 text-[10px] text-gray-300 text-left mt-6 font-medium print:text-gray-700">
                        {data.personalInfo.email && <div className="flex items-center gap-2"><span className="opacity-50">✉</span> <span className="break-all">{data.personalInfo.email}</span></div>}
                        {data.personalInfo.phone && <div className="flex items-center gap-2"><span className="opacity-50">☏</span> <span>{data.personalInfo.phone}</span></div>}
                        {data.personalInfo.location && <div className="flex items-center gap-2"><span className="opacity-50">📍</span> <span>{data.personalInfo.location}</span></div>}
                        {data.personalInfo.linkedin && <div className="flex items-center gap-2"><span className="opacity-50">in</span> <span className="break-all">{data.personalInfo.linkedin.replace(/^https?:\/\//, '')}</span></div>}
                        {data.personalInfo.website && <div className="flex items-center gap-2"><span className="opacity-50">🌐</span> <span className="break-all">{data.personalInfo.website.replace(/^https?:\/\//, '')}</span></div>}
                    </div>
                </Section>

                {/* Skills - Modern Tags */}
                {data.skills.length > 0 && (
                    <Section id="skills">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 border-b border-gray-700 pb-1 print:text-gray-600 print:border-gray-300">Expertise</div>

                        <div className="flex flex-wrap gap-1.5">
                            {data.skills.map((skill, i) => (
                                <span key={skill.id} className="text-[9.5pt] px-2 py-0.5 bg-white/10 rounded-[2px] text-gray-200 border border-white/5 print:bg-white print:text-black print:border-slate-300">
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </Section>
                )}

                {/* Certifications in Sidebar */}
                {data.certifications.length > 0 && (
                    <Section id="certifications">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 border-b border-gray-700 pb-1 print:text-gray-600 print:border-gray-300">Certifications</div>
                        <div className="space-y-2.5">
                            {data.certifications.map(c => (
                                <div key={c.id} className="leading-tight text-gray-300 print:text-gray-800">
                                    <div className="font-semibold text-white text-[9.5pt] print:text-black">{c.name}</div>
                                    <div className="text-gray-500 text-[9pt] print:text-gray-600">{c.issuer}</div>
                                </div>
                            ))}
                        </div>
                    </Section>
                )}
            </div>

            {/* RIGHT MAIN CONTENT */}
            <div className="flex-1 p-8 text-slate-800 pt-10">

                {/* Education (Moved to Top for Student Focus) */}
                {data.education.length > 0 && (
                    <Section id="education" className="mb-6">
                        <Header title="Education" />
                        <div className="space-y-4">
                            {data.education.map(edu => (
                                <div key={edu.id} className="flex justify-between items-start">
                                    <div>
                                        <div className="font-bold text-slate-900 text-[10.5pt] leading-tight">{edu.school}</div>
                                        <div className="text-slate-600 font-medium text-[10pt]">{edu.degree}</div>
                                    </div>
                                    <div className="text-right whitespace-nowrap">
                                        <div className="text-[10pt] font-semibold text-slate-800">{edu.gpa && (edu.gpa.includes(':') ? edu.gpa : `GPA: ${edu.gpa}`)}</div>
                                        <div className="text-[9pt] text-slate-500">{edu.startDate} – {edu.endDate}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                )}

                {/* Experience */}
                {data.experience.length > 0 && (
                    <Section id="experience" className="mb-6">
                        <Header title="Professional Experience" />
                        <div className="space-y-5">
                            {data.experience.map(exp => (
                                <div key={exp.id} className="relative">
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="font-bold text-slate-900 text-[10.5pt]">{exp.company}</h3>
                                        <span className="text-[9pt] font-semibold text-slate-500">{exp.startDate} – {exp.endDate}</span>
                                    </div>
                                    <div className="text-[10pt] font-semibold text-sky-700 mb-1.5 leading-none">{exp.title}</div>
                                    <ul className="text-[10pt] text-slate-700 space-y-1 list-disc ml-3 marker:text-slate-400 leading-[1.4]">
                                        {exp.desc.split('•').filter(Boolean).map((b, i) => <li key={i} className="pl-0.5 text-justify">{b.trim()}</li>)}
                                        {!exp.desc.includes('•') && exp.desc && <li>{exp.desc}</li>}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </Section>
                )}

                {/* Projects */}
                {data.projects.length > 0 && (
                    <div className="mb-6">
                        <Header title="Selected Projects" />
                        <div className="space-y-4">
                            {data.projects.slice(0, 4).map(proj => (
                                <div key={proj.id} className="relative">
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <div className="flex items-center gap-2">
                                            <div className="text-[10.5pt] font-bold text-slate-900">{proj.name}</div>
                                        </div>
                                        {proj.link && <div className="text-[9pt] font-medium text-slate-400 italic">{proj.link}</div>}
                                    </div>
                                    <p className="text-[10pt] text-slate-600 leading-[1.4] text-justify">{proj.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Summary (Moved Low) */}
                {data.summary && (
                    <Section id="summary" className="mb-5">
                        <Header title="Professional Profile" />
                        <p className="text-[10pt] text-slate-700 leading-relaxed text-justify">{data.summary}</p>
                    </Section>
                )}

                {data.achievements.length > 0 && (
                    <Section id="achievements">
                        <Header title="Achievements" />
                        <ul className="text-[10pt] text-slate-700 space-y-1 list-disc ml-3">
                            {data.achievements.map(a => (
                                <li key={a.id}>{a.desc}</li>
                            ))}
                        </ul>
                    </Section>
                )}
            </div>
        </div>
    );
};

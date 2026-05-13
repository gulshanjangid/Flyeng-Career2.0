
"use client";

import { User, FileText, Briefcase, GraduationCap, Code, LayoutTemplate, Award, Trophy, Heart, Plus, Trash2, Camera, Target, Wand2, Loader2, Sparkles, XCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { ResumeData } from "@/lib/types";
import { TIPS } from "@/lib/resume-builder-constants";
import { toast } from "sonner";
import { RefObject } from 'react';

interface ResumeFormProps {
    currentStep: number;
    resume: ResumeData;
    setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
    fileInputRef: RefObject<HTMLInputElement>;
    updateInfo: (field: string, value: string) => void;
    generateSummary: () => void;
    isGenerating: boolean;
    loadingAI: string | null;
    addItem: (section: 'experience' | 'education' | 'skills' | 'projects' | 'certifications' | 'achievements' | 'volunteer') => void;
    updateItem: (section: string, id: string, field: string, value: string) => void;
    deleteItem: (section: string, id: string) => void;
    enhanceDescription: (id: string, text: string) => void;
    enhanceProjectDescription: (id: string, text: string) => void;
}

export const ResumeForm = ({
    currentStep,
    resume,
    setResume,
    fileInputRef,
    updateInfo,
    generateSummary,
    isGenerating,
    loadingAI,
    addItem,
    updateItem,
    deleteItem,
    enhanceDescription,
    enhanceProjectDescription
}: ResumeFormProps) => {

    return (
        <div className="max-w-2xl mx-auto space-y-8 pb-32">

            {/* Personal Info */}
            {currentStep === 1 && (
                <section className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2"><User className="w-5 h-5 text-cyan-400" /> Personal Details</h2>
                            <p className="text-slate-400 text-sm">Start with your basic contact information.</p>
                        </div>
                        <div className="relative">
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                ref={fileInputRef}
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                            setResume(prev => ({
                                                ...prev,
                                                personalInfo: { ...prev.personalInfo, photo: reader.result as string }
                                            }));
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }}
                            />
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => fileInputRef.current?.click()}
                                className="border-white/20 hover:bg-white/10 text-xs gap-2"
                            >
                                <Camera className="w-3 h-3" />
                                {resume.personalInfo.photo ? 'Change Photo' : 'Add Photo'}
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Full Name</label>
                                <input
                                    type="text"
                                    value={resume.personalInfo.fullName}
                                    onChange={(e) => updateInfo('fullName', e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all placeholder:text-slate-600"
                                    placeholder="e.g. Alex Chen"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                    <Target className="w-3 h-3 text-cyan-400" /> Target Role
                                </label>
                                <input
                                    type="text"
                                    value={resume.personalInfo.title}
                                    onChange={(e) => updateInfo('title', e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all placeholder:text-slate-600"
                                    placeholder="e.g. Senior Software Engineer"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    value={resume.personalInfo.email}
                                    onChange={(e) => updateInfo('email', e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all placeholder:text-slate-600"
                                    placeholder="alex@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Phone</label>
                                <input
                                    type="text"
                                    value={resume.personalInfo.phone}
                                    onChange={(e) => updateInfo('phone', e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all placeholder:text-slate-600"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs uppercase text-slate-500 font-bold">Location</label>
                                <Input value={resume.personalInfo.location} onChange={(e) => updateInfo('location', e.target.value)} className="bg-white/5 border-white/10 focus:border-cyan-500 h-11 transition-all" placeholder="City, Country" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase text-slate-500 font-bold">LinkedIn</label>
                                <Input value={resume.personalInfo.linkedin} onChange={(e) => updateInfo('linkedin', e.target.value)} className="bg-white/5 border-white/10 focus:border-cyan-500 h-11 transition-all" placeholder="linkedin.com/in/..." />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase text-slate-500 font-bold">Website / Portfolio</label>
                            <Input value={resume.personalInfo.website} onChange={(e) => updateInfo('website', e.target.value)} className="w-full bg-white/5 border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all" placeholder="portfolio.com" />
                        </div>
                    </div>
                </section>
            )}

            {/* Summary - Step 2 */}
            {currentStep === 2 && (
                <section className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2"><FileText className="w-5 h-5 text-purple-400" /> Professional Summary</h2>
                        <p className="text-slate-400 text-sm">Write a compelling summary to hook recruiters.</p>
                    </div>

                    <Card className="p-6 bg-white/5 border-white/10 relative overflow-hidden group">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                <Sparkles className="w-3 h-3 text-purple-400" /> AI-Powered Writer
                            </div>
                            <Button
                                size="sm"
                                onClick={generateSummary}
                                disabled={isGenerating}
                                className="h-8 text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 transition-all hover:scale-105"
                            >
                                {isGenerating && loadingAI === 'summary' ? <Loader2 className="w-3 h-3 animate-spin mr-2" /> : <Wand2 className="w-3 h-3 mr-2" />}
                                Auto-Generate Summary
                            </Button>
                        </div>

                        <div className="relative group/input">
                            <Textarea
                                value={resume.summary}
                                onChange={(e) => setResume({ ...resume, summary: e.target.value })}
                                className="min-h-[250px] bg-black/20 border-white/10 focus:border-purple-500/50 text-base leading-relaxed p-6 resize-none transition-all font-light placeholder:text-slate-700"
                                placeholder="e.g. Results-driven Senior Software Engineer with 5+ years of experience in building scalable web applications..."
                            />
                            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-slate-600 group-focus-within/input:text-purple-500/50 transition-colors">
                                {resume.summary.length} / 500 CHARS
                            </div>
                        </div>
                    </Card>
                </section>
            )}

            {/* Experience */}
            {currentStep === 3 && (
                <section className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2"><Briefcase className="w-5 h-5 text-blue-400" /> Experience</h2>
                            <p className="text-slate-400 text-sm">Your work history and key achievements.</p>
                        </div>
                        <div className="flex gap-2">
                            <Button size="sm" variant="ghost" onClick={() => setResume({ ...resume, experience: [] })} className="text-red-400 hover:text-red-300 hover:bg-red-900/20"><Trash2 className="w-4 h-4 mr-2" /> Clear All</Button>
                            <Button size="sm" onClick={() => addItem('experience')} className="bg-black hover:bg-zinc-900 text-white border border-white/20 shadow-lg hover:scale-105 transition-all"><Plus className="w-4 h-4 mr-2" /> Add Role</Button>
                        </div>
                    </div>

                    {resume.experience.map((exp, idx) => (
                        <Card key={exp.id} className="p-5 bg-white/5 border-white/10 hover:border-white/20 transition-all group relative overflow-hidden">
                            <button onClick={() => deleteItem('experience', exp.id)} className="absolute top-4 right-4 text-slate-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity z-10"><Trash2 className="w-4 h-4" /></button>
                            <div className="grid grid-cols-2 gap-4 mb-4 relative z-0">
                                <Input value={exp.title} onChange={e => updateItem('experience', exp.id, 'title', e.target.value)} className="bg-transparent border-none p-0 text-lg font-bold placeholder:text-slate-600 focus-visible:ring-0 focus:text-white transition-colors" placeholder="Job Title" />
                                <Input value={exp.company} onChange={e => updateItem('experience', exp.id, 'company', e.target.value)} className="bg-transparent border-none p-0 text-right text-cyan-400 placeholder:text-slate-600 focus-visible:ring-0" placeholder="Company" />
                                <div className="flex gap-2">
                                    <Input value={exp.startDate} onChange={e => updateItem('experience', exp.id, 'startDate', e.target.value)} className="bg-black/20 border-white/5 text-xs h-8" placeholder="Jan 2020" />
                                    <Input value={exp.endDate} onChange={e => updateItem('experience', exp.id, 'endDate', e.target.value)} className="bg-black/20 border-white/5 text-xs h-8" placeholder="Present" />
                                </div>
                            </div>
                            <div className="relative">
                                <Textarea
                                    value={exp.desc}
                                    onChange={e => updateItem('experience', exp.id, 'desc', e.target.value)}
                                    className="bg-black/20 border-white/5 text-sm min-h-[100px] pr-10 focus:border-cyan-500/50 transition-all font-mono"
                                    placeholder="• Achieved X..."
                                />
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="absolute top-2 right-2 w-6 h-6 text-yellow-500/50 hover:text-yellow-400 hover:bg-yellow-400/10"
                                    onClick={() => enhanceDescription(exp.id, exp.desc)}
                                    disabled={isGenerating}
                                >
                                    {isGenerating && loadingAI === `desc-${exp.id}` ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                                </Button>
                            </div>
                        </Card>
                    ))}
                    {resume.experience.length === 0 && <div className="text-center py-10 border-2 border-dashed border-white/10 rounded-xl text-slate-500">No experience yet.</div>}
                </section>
            )}

            {/* Education (Simplified) */}
            {currentStep === 4 && (
                <section className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                    <div className="flex justify-between items-end mb-4">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2"><GraduationCap className="w-5 h-5 text-orange-400" /> Education</h2>
                        <div className="flex gap-2">
                            <Button size="sm" variant="ghost" onClick={() => setResume({ ...resume, education: [] })} className="text-red-400 hover:text-red-300 hover:bg-red-900/20"><Trash2 className="w-4 h-4 mr-2" /> Clear All</Button>
                            <Button size="sm" onClick={() => addItem('education')} className="bg-black hover:bg-zinc-900 text-white border border-white/20 shadow-lg hover:scale-105 transition-all"><Plus className="w-4 h-4 mr-2" /> Add School</Button>
                        </div>
                    </div>
                    {resume.education.map((edu) => (
                        <Card key={edu.id} className="p-5 bg-white/5 border-white/10 relative group hover:border-white/20 transition-all">
                            <button onClick={() => deleteItem('education', edu.id)} className="absolute top-4 right-4 text-slate-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="w-4 h-4" /></button>
                            <div className="space-y-3">
                                <Input value={edu.school} onChange={e => updateItem('education', edu.id, 'school', e.target.value)} className="bg-transparent border-none p-0 text-lg font-bold focus-visible:ring-0" placeholder="University / School" />
                                <Input value={edu.degree} onChange={e => updateItem('education', edu.id, 'degree', e.target.value)} className="bg-transparent border-none p-0 text-slate-400 focus-visible:ring-0" placeholder="Degree / Major" />
                                <div className="flex gap-2 w-full">
                                    <Input value={edu.startDate} onChange={e => updateItem('education', edu.id, 'startDate', e.target.value)} className="bg-black/20 border-white/5 text-xs h-8 w-1/3" placeholder="Start Date" />
                                    <Input value={edu.endDate} onChange={e => updateItem('education', edu.id, 'endDate', e.target.value)} className="bg-black/20 border-white/5 text-xs h-8 w-1/3" placeholder="End Date" />
                                    <Input value={edu.gpa} onChange={e => updateItem('education', edu.id, 'gpa', e.target.value)} className="bg-black/20 border-white/5 text-xs h-8 w-1/3" placeholder="CGPA / Grade" />
                                </div>
                            </div>
                        </Card>
                    ))}
                </section>
            )}

            {/* Skills (Simplified) */}
            {currentStep === 5 && (
                <section className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                    <div className="flex justify-between items-end mb-4">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2"><Code className="w-5 h-5 text-green-400" /> Skills</h2>
                        <div className="flex gap-2">
                            <Button size="sm" variant="ghost" onClick={() => setResume({ ...resume, skills: [] })} className="text-red-400 hover:text-red-300 hover:bg-red-900/20"><Trash2 className="w-4 h-4 mr-2" /> Clear All</Button>
                            <Button size="sm" onClick={() => addItem('skills')} className="bg-black hover:bg-zinc-900 text-white border border-white/20 shadow-lg hover:scale-105 transition-all"><Plus className="w-4 h-4 mr-2" /> Add Skill</Button>
                        </div>
                    </div>

                    <div className="flex gap-2 mb-4">
                        <Select onValueChange={(val) => {
                            if (val) {
                                const id = Math.random().toString(36).substr(2, 9);
                                setResume(prev => ({ ...prev, skills: [...prev.skills, { id, name: val }] }));
                                toast.success(`Added ${val}`);
                            }
                        }}>
                            <SelectTrigger className="w-full bg-[#111] border-white/20 text-white focus:ring-2 focus:ring-cyan-500/50 shadow-inner h-11">
                                <SelectValue placeholder="Select a popular skill..." />
                            </SelectTrigger>
                            <SelectContent className="bg-[#111] border-white/20 text-white max-h-[300px]">
                                <SelectGroup>
                                    <SelectLabel className="text-cyan-400 font-bold">Languages</SelectLabel>
                                    <SelectItem value="Java">Java</SelectItem>
                                    <SelectItem value="Python">Python</SelectItem>
                                    <SelectItem value="C++">C++</SelectItem>
                                    <SelectItem value="JavaScript">JavaScript</SelectItem>
                                    <SelectItem value="TypeScript">TypeScript</SelectItem>
                                    <SelectItem value="Go">Go</SelectItem>
                                    <SelectItem value="Rust">Rust</SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel className="text-cyan-400 font-bold">Frontend</SelectLabel>
                                    <SelectItem value="React">React</SelectItem>
                                    <SelectItem value="Next.js">Next.js</SelectItem>
                                    <SelectItem value="Vue">Vue</SelectItem>
                                    <SelectItem value="Angular">Angular</SelectItem>
                                    <SelectItem value="Tailwind CSS">Tailwind CSS</SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel className="text-cyan-400 font-bold">Backend</SelectLabel>
                                    <SelectItem value="Node.js">Node.js</SelectItem>
                                    <SelectItem value="Django">Django</SelectItem>
                                    <SelectItem value="Spring Boot">Spring Boot</SelectItem>
                                    <SelectItem value="PostgreSQL">PostgreSQL</SelectItem>
                                    <SelectItem value="MongoDB">MongoDB</SelectItem>
                                    <SelectItem value="GraphQL">GraphQL</SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel className="text-cyan-400 font-bold">DevOps & Tools</SelectLabel>
                                    <SelectItem value="Docker">Docker</SelectItem>
                                    <SelectItem value="Kubernetes">Kubernetes</SelectItem>
                                    <SelectItem value="AWS">AWS</SelectItem>
                                    <SelectItem value="Git">Git</SelectItem>
                                    <SelectItem value="Jenkins">Jenkins</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Button size="sm" onClick={() => addItem('skills')} className="bg-white/10 hover:bg-white/20 ml-2 h-11 w-11 p-0"><Plus className="w-5 h-5" /></Button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {resume.skills.map((skill) => (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                key={skill.id}
                                className="group relative bg-white/5 border border-white/10 rounded-full px-3 py-1 flex items-center gap-2"
                            >
                                <input
                                    value={skill.name}
                                    onChange={e => updateItem('skills', skill.id, 'name', e.target.value)}
                                    className="bg-transparent border-none min-w-[3rem] w-auto max-w-[12rem] text-center text-sm focus:ring-0 p-0 text-slate-200 placeholder:text-slate-600"
                                    placeholder="Custom"
                                />
                                <button onClick={() => deleteItem('skills', skill.id)} className="text-slate-500 hover:text-red-400 transition-colors"><XCircle className="w-4 h-4" /></button>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects (Simplified) */}
            {currentStep === 6 && (
                <section className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                    <div className="flex justify-between items-end mb-4">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2"><LayoutTemplate className="w-5 h-5 text-pink-400" /> Projects</h2>
                        <div className="flex gap-2">
                            <Button size="sm" variant="ghost" onClick={() => setResume({ ...resume, projects: [] })} className="text-red-400 hover:text-red-300 hover:bg-red-900/20"><Trash2 className="w-4 h-4 mr-2" /> Clear All</Button>
                            <Button size="sm" onClick={() => addItem('projects')} className="bg-black hover:bg-zinc-900 text-white border border-white/20 shadow-lg hover:scale-105 transition-all"><Plus className="w-4 h-4 mr-2" /> Add Project</Button>
                        </div>
                    </div>
                    {resume.projects.map((proj) => (
                        <Card key={proj.id} className="p-5 bg-white/5 border-white/10 relative group space-y-3 hover:border-white/20 transition-all">
                            <button onClick={() => deleteItem('projects', proj.id)} className="absolute top-4 right-4 text-slate-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="w-4 h-4" /></button>
                            <Input value={proj.name} onChange={e => updateItem('projects', proj.id, 'name', e.target.value)} className="bg-transparent border-none p-0 text-lg font-bold focus-visible:ring-0" placeholder="Project Name" />
                            <Input value={proj.tech} onChange={e => updateItem('projects', proj.id, 'tech', e.target.value)} className="bg-transparent border-none p-0 text-cyan-400 text-sm focus-visible:ring-0" placeholder="Tech Stack (e.g. React, Node)" />
                            <Input value={proj.link} onChange={e => updateItem('projects', proj.id, 'link', e.target.value)} className="bg-transparent border-none p-0 text-blue-400 text-xs underline focus-visible:ring-0" placeholder="Project Link" />
                            <div className="relative">
                                <Textarea
                                    value={proj.desc}
                                    onChange={e => updateItem('projects', proj.id, 'desc', e.target.value)}
                                    className="bg-black/20 border-white/5 text-sm min-h-[100px] pr-10 focus:border-cyan-500/50 transition-all font-mono"
                                    placeholder="Describe your role and impact..."
                                />
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="absolute top-2 right-2 w-6 h-6 text-pink-500/50 hover:text-pink-400 hover:bg-pink-400/10"
                                    onClick={() => enhanceProjectDescription(proj.id, proj.desc)}
                                    disabled={isGenerating}
                                >
                                    {isGenerating && loadingAI === `proj-desc-${proj.id}` ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                                </Button>
                            </div>
                        </Card>
                    ))}
                </section>
            )}

            {/* Certifications */}
            {currentStep === 7 && (
                <section className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2"><Award className="w-5 h-5 text-cyan-400" /> Certifications</h2>
                        <div className="flex gap-2">
                            <Button size="sm" variant="ghost" onClick={() => setResume({ ...resume, certifications: [] })} className="text-red-400 hover:text-red-300 hover:bg-red-900/20"><Trash2 className="w-4 h-4 mr-2" /> Clear All</Button>
                            <Button size="sm" onClick={() => addItem('certifications')} className="bg-white/10 hover:bg-white/20 text-white"><Plus className="w-4 h-4 mr-2" /> Add</Button>
                        </div>
                    </div>
                    {resume.certifications?.map(cert => (
                        <Card key={cert.id} className="p-4 bg-[#111] border-white/10 relative group hover:border-white/20 transition-all">
                            <Button variant="ghost" size="icon" className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500 hover:text-red-400" onClick={() => deleteItem('certifications', cert.id)}><Trash2 className="w-4 h-4" /></Button>
                            <div className="grid grid-cols-1 gap-4">
                                <Input value={cert.name} onChange={e => updateItem('certifications', cert.id, 'name', e.target.value)} className="bg-black/20 border-white/5" placeholder="Certification Name" />
                                <div className="grid grid-cols-2 gap-4">
                                    <Input value={cert.issuer} onChange={e => updateItem('certifications', cert.id, 'issuer', e.target.value)} className="bg-black/20 border-white/5" placeholder="Issuer (e.g. AWS)" />
                                    <Input value={cert.date} onChange={e => updateItem('certifications', cert.id, 'date', e.target.value)} className="bg-black/20 border-white/5" placeholder="Date (e.g. 2023)" />
                                </div>
                            </div>
                        </Card>
                    ))}
                </section>
            )}

            {/* Achievements */}
            {currentStep === 8 && (
                <section className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2"><Trophy className="w-5 h-5 text-cyan-400" /> Achievements</h2>
                        <div className="flex gap-2">
                            <Button size="sm" variant="ghost" onClick={() => setResume({ ...resume, achievements: [] })} className="text-red-400 hover:text-red-300 hover:bg-red-900/20"><Trash2 className="w-4 h-4 mr-2" /> Clear All</Button>
                            <Button size="sm" onClick={() => addItem('achievements')} className="bg-white/10 hover:bg-white/20 text-white"><Plus className="w-4 h-4 mr-2" /> Add</Button>
                        </div>
                    </div>
                    {resume.achievements?.map(ach => (
                        <Card key={ach.id} className="p-4 bg-[#111] border-white/10 relative group hover:border-white/20 transition-all">
                            <Button variant="ghost" size="icon" className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500 hover:text-red-400" onClick={() => deleteItem('achievements', ach.id)}><Trash2 className="w-4 h-4" /></Button>
                            <div className="space-y-4">
                                <Input value={ach.title} onChange={e => updateItem('achievements', ach.id, 'title', e.target.value)} className="bg-black/20 border-white/5" placeholder="Title (e.g. Best Hackathon Project)" />
                                <Textarea value={ach.desc} onChange={e => updateItem('achievements', ach.id, 'desc', e.target.value)} className="bg-black/20 border-white/5 min-h-[80px]" placeholder="Description..." />
                            </div>
                        </Card>
                    ))}
                </section>
            )}

            {/* Volunteer */}
            {currentStep === 9 && (
                <section className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2"><Heart className="w-5 h-5 text-cyan-400" /> Volunteer</h2>
                        <div className="flex gap-2">
                            <Button size="sm" variant="ghost" onClick={() => setResume({ ...resume, volunteer: [] })} className="text-red-400 hover:text-red-300 hover:bg-red-900/20"><Trash2 className="w-4 h-4 mr-2" /> Clear All</Button>
                            <Button size="sm" onClick={() => addItem('volunteer')} className="bg-white/10 hover:bg-white/20 text-white"><Plus className="w-4 h-4 mr-2" /> Add</Button>
                        </div>
                    </div>
                    {resume.volunteer?.map(vol => (
                        <Card key={vol.id} className="p-4 bg-[#111] border-white/10 relative group hover:border-white/20 transition-all">
                            <Button variant="ghost" size="icon" className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500 hover:text-red-400" onClick={() => deleteItem('volunteer', vol.id)}><Trash2 className="w-4 h-4" /></Button>
                            <div className="grid grid-cols-1 gap-4">
                                <Input value={vol.role} onChange={e => updateItem('volunteer', vol.id, 'role', e.target.value)} className="bg-black/20 border-white/5" placeholder="Role (e.g. Mentor)" />
                                <Input value={vol.organization} onChange={e => updateItem('volunteer', vol.id, 'organization', e.target.value)} className="bg-black/20 border-white/5" placeholder="Organization" />
                                <div className="grid grid-cols-2 gap-4">
                                    <Input value={vol.startDate} onChange={e => updateItem('volunteer', vol.id, 'startDate', e.target.value)} className="bg-black/20 border-white/5" placeholder="Start Date" />
                                    <Input value={vol.endDate} onChange={e => updateItem('volunteer', vol.id, 'endDate', e.target.value)} className="bg-black/20 border-white/5" placeholder="End Date" />
                                </div>
                                <Textarea value={vol.desc} onChange={e => updateItem('volunteer', vol.id, 'desc', e.target.value)} className="bg-black/20 border-white/5 min-h-[80px]" placeholder="Description..." />
                            </div>
                        </Card>
                    ))}
                </section>
            )}

            {/* PRO TIP SECTION */}
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border border-cyan-500/20 flex gap-4">
                <div className="p-2 bg-cyan-500/10 rounded-lg h-fit">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-cyan-400 mb-1">Pro Tip</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                        {TIPS[currentStep] || "Keep your resume concise and tailored to the job description."}
                    </p>
                </div>
            </div>
        </div>
    );
};

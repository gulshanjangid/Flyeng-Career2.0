"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import {
    Rocket, FileText, ShieldCheck, Briefcase,
    ArrowRight, CheckCircle2, Star, Upload, Wand2,
    ChevronRight, Sparkles, Zap, Brain, Target, Users, Award, TrendingUp, Clock
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { useRef } from "react"

interface LandingPageProps {
    onGetStarted: () => void;
    onSelectTemplate?: (themeId: string) => void;
    onImportResume?: () => void;
}

export function ResumeLandingPage({ onGetStarted, onSelectTemplate, onImportResume }: LandingPageProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    const handleTemplateClick = (themeId: string) => {
        if (onSelectTemplate) {
            onSelectTemplate(themeId);
        } else {
            onGetStarted();
        }
    };

    return (
        <div ref={containerRef} className="min-h-screen bg-[#030303] text-white flex flex-col relative font-sans selection:bg-cyan-500/30 overflow-x-hidden">

            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-[-30%] left-[-10%] w-[60%] h-[60%] bg-blue-600/8 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/8 rounded-full blur-[150px]" />
                <div className="absolute top-[50%] left-[50%] w-[40%] h-[40%] bg-purple-600/5 rounded-full blur-[150px]" />

                {/* Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            {/* Header */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/80 backdrop-blur-xl border-b border-white/5">
                <SiteHeader />
            </div>

            <main className="flex-1 pt-20 relative z-10">

                {/* HERO SECTION */}
                <section className="relative pt-16 pb-20 lg:pt-32 lg:pb-40 overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                            {/* Left Content */}
                            <div className="flex-1 text-center lg:text-left max-w-2xl">

                                {/* Trust Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-sm mb-8 backdrop-blur-sm"
                                >
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-[#030303]" />
                                        ))}
                                    </div>
                                    <span className="text-slate-300">Join <span className="text-cyan-400 font-bold">50,000+</span> professionals</span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.05]"
                                >
                                    Build a Resume
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                                        That Gets Interviews
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
                                >
                                    AI-powered resume builder with <span className="text-white font-medium">ATS optimization</span>. Create professional resumes in minutes, not hours.
                                </motion.p>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                                >
                                    <Button
                                        onClick={() => onGetStarted()}
                                        className="h-14 px-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5"
                                    >
                                        <Wand2 className="mr-2 w-5 h-5" /> Create Resume Free
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() => onImportResume ? onImportResume() : onGetStarted()}
                                        className="h-14 px-8 rounded-xl border-white/20 hover:bg-white/5 text-white text-lg font-medium"
                                    >
                                        <Upload className="mr-2 w-5 h-5" /> Import Existing
                                    </Button>
                                </motion.div>

                                {/* Quick Stats */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-wrap justify-center lg:justify-start gap-6"
                                >
                                    {[
                                        { icon: Star, label: "4.9/5 Rating", color: "text-yellow-400" },
                                        { icon: TrendingUp, label: "3x More Interviews", color: "text-green-400" },
                                        { icon: Clock, label: "10 Min to Build", color: "text-cyan-400" },
                                    ].map((stat, i) => (
                                        <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                                            <stat.icon className={`w-4 h-4 ${stat.color}`} />
                                            <span>{stat.label}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Right Content - Resume Preview */}
                            <div className="flex-1 w-full relative h-[550px] hidden lg:block">
                                <motion.div
                                    style={{ y }}
                                    className="absolute top-0 left-10 w-[420px] h-[560px] bg-white rounded-xl shadow-2xl overflow-hidden transform perspective-1000 rotate-y-[-3deg] rotate-x-[2deg]"
                                >
                                    <div className="p-8 h-full bg-white relative z-10">
                                        {/* Header */}
                                        <div className="text-center mb-6 pb-4 border-b-2 border-gray-800">
                                            <div className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">NIKHIL JANGID</div>
                                            <div className="text-sm text-cyan-700 font-semibold tracking-wide uppercase">Frontend Developer & Full-Stack Engineer</div>
                                            <div className="text-[10px] text-gray-500 mt-2 font-medium">nikhiljangid343@gmail.com • Jaipur, Rajasthan • linkedin.com/in/nikhiljangid</div>
                                        </div>

                                        {/* Sections */}
                                        <div className="space-y-4">
                                            <div>
                                                <div className="text-[10px] font-bold text-gray-800 uppercase tracking-widest border-b border-gray-200 pb-1 mb-2 flex items-center gap-2">
                                                    <span className="w-1 h-1 rounded-full bg-cyan-600"></span> Professional Summary
                                                </div>
                                                <div className="text-[10px] text-gray-600 leading-relaxed font-medium">
                                                    Final-year Computer Science Engineering student with hands-on experience in Frontend Development and full-stack web applications using React.js, Next.js, and MERN Stack. 500+ DSA problems solved.
                                                </div>
                                            </div>

                                            <div>
                                                <div className="text-[10px] font-bold text-gray-800 uppercase tracking-widest border-b border-gray-200 pb-1 mb-2 flex items-center gap-2">
                                                    <span className="w-1 h-1 rounded-full bg-cyan-600"></span> Experience
                                                </div>
                                                <div className="space-y-2">
                                                    <div>
                                                        <div className="flex justify-between text-[10px]">
                                                            <span className="font-bold text-gray-800">Celebal Technologies</span>
                                                            <span className="text-gray-500 font-mono">May '25 - July '25</span>
                                                        </div>
                                                        <div className="text-[10px] text-cyan-700 italic mb-0.5">Frontend Developer Intern</div>
                                                        <p className="text-[9px] text-gray-500 leading-snug">• Built Shipment Delivery App with React.js & Tailwind, boosting tracking accuracy by 30%.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="text-[10px] font-bold text-gray-800 uppercase tracking-widest border-b border-gray-200 pb-1 mb-2 flex items-center gap-2">
                                                    <span className="w-1 h-1 rounded-full bg-cyan-600"></span> Projects
                                                </div>
                                                <div className="space-y-2">
                                                    <div>
                                                        <div className="flex justify-between text-[10px]">
                                                            <span className="font-bold text-gray-800">AI Resume Builder</span>
                                                            <span className="text-gray-400 text-[9px] border border-gray-200 px-1 rounded">Next.js</span>
                                                        </div>
                                                        <p className="text-[9px] text-gray-500 leading-snug mt-0.5">AI-powered platform using Gemini API, improving ATS compatibility by 30%.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ATS Score Badge */}
                                    <motion.div
                                        animate={{ y: [0, -5, 0], scale: [1, 1.05, 1] }}
                                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                        className="absolute top-6 right-6 bg-gradient-to-r from-emerald-500 to-green-600 px-3 py-1.5 rounded-full shadow-lg shadow-emerald-500/20 z-20"
                                    >
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                                            <span className="text-white text-xs font-bold tracking-wide">ATS: 98%</span>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Floating Elements */}
                                <motion.div
                                    animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute bottom-20 right-0 bg-[#111] border border-white/10 rounded-xl p-4 shadow-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                                            <Brain className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-medium text-slate-500 uppercase">AI Enhancement</div>
                                            <div className="text-sm font-bold text-white">+40% Impact</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SOCIAL PROOF LOGOS */}
                <section className="py-16 border-y border-white/5 bg-black/30">
                    <div className="container mx-auto px-6">
                        <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-8">Trusted by professionals from</p>
                        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
                            {['Google', 'Meta', 'Amazon', 'Microsoft', 'Apple', 'Netflix'].map(company => (
                                <div key={company} className="text-xl font-bold text-white">{company}</div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
                                Build in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">3 Simple Steps</span>
                            </h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">No design skills needed. Our AI does the heavy lifting.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                { step: "01", title: "Enter Your Info", desc: "Fill in your experience, skills, and education. Our AI suggests improvements as you type.", icon: FileText, color: "cyan" },
                                { step: "02", title: "Choose Template", desc: "Select from 9 ATS-optimized professional templates designed by recruiters.", icon: Target, color: "purple" },
                                { step: "03", title: "Download & Apply", desc: "Export as PDF and start applying. Your resume is optimized for ATS systems.", icon: Zap, color: "green" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group"
                                >
                                    <div className="text-6xl font-black text-white/5 absolute top-4 right-4">{item.step}</div>
                                    <div className={`w-14 h-14 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center mb-6`}>
                                        <item.icon className={`w-7 h-7 text-${item.color}-400`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FEATURES GRID */}
                <section className="py-24 bg-black/40 border-y border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
                                Everything You Need
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                { icon: Brain, title: "AI Writing Assistant", desc: "Generate impactful bullet points with one click", color: "purple" },
                                { icon: ShieldCheck, title: "ATS Guaranteed", desc: "100% compatible with all major ATS systems", color: "teal" },
                                { icon: Rocket, title: "Instant Export", desc: "Download as PDF in perfect formatting", color: "orange" },
                                { icon: Briefcase, title: "Industry Templates", desc: "Designs validated by top recruiters", color: "blue" },
                                { icon: Award, title: "Real-Time Scoring", desc: "See your ATS score update live as you edit", color: "yellow" },
                                { icon: Users, title: "Expert Reviewed", desc: "Templates based on 10,000+ successful resumes", color: "pink" },
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all group"
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/10 border border-${feature.color}-500/20 flex items-center justify-center mb-4`}>
                                        <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
                                    <p className="text-slate-500 text-sm">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TEMPLATE SHOWCASE */}
                <section className="py-24 relative bg-[#050505]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(5,5,5,1))] z-0" />
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-20"
                        >
                            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                                Pro Resume <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Design Studio</span>
                            </h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                                Choose from 9 ATS-optimized architectures. Switch anytime.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                { id: 'ivy-league', name: 'Ivy League', badge: 'Academic', accent: 'border-t-amber-700', type: 'classic' },
                                { id: 'tech-scout', name: 'Tech Scout', badge: 'Engineering', accent: 'border-t-blue-500', type: 'modern' },
                                { id: 'wall-street', name: 'Wall Street', badge: 'Finance', accent: 'border-t-slate-800', type: 'serious' },
                                { id: 'designer', name: 'Creative', badge: 'Design', accent: 'border-t-pink-500', type: 'creative' },
                                { id: 'minimalist-plus', name: 'Minimalist', badge: 'Clean', accent: 'border-t-gray-400', type: 'minimal' },
                                { id: 'glacier', name: 'Performer', badge: 'Sales', accent: 'border-t-emerald-500', type: 'cool' },
                                { id: 'scholar', name: 'Scholar', badge: 'Research', accent: 'border-t-indigo-500', type: 'sidebar' },
                                { id: 'zurich', name: 'Zurich', badge: 'International', accent: 'border-t-red-500', type: 'swiss' },
                                { id: 'modern', name: 'Modern', badge: 'Startup', accent: 'border-t-cyan-400', type: 'split' },
                            ].map((template, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
                                    className="group relative bg-[#0A0A0A] rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-[0_20px_50px_-12px_rgba(6,182,212,0.2)] border border-white/5 hover:border-cyan-500/30 transition-all duration-500"
                                    onClick={() => handleTemplateClick(template.id)}
                                >
                                    {/* Poster Aspect Ratio */}
                                    <div className="aspect-[1/1.4] relative p-6 flex flex-col items-center">

                                        {/* Cinematic Lighting Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none" />

                                        {/* Paper/Document Simulation */}
                                        <div className="w-full h-full bg-white relative shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700 z-10 overflow-hidden box-border">
                                            {/* Top Accent Bar based on template color */}
                                            <div className={`w-full h-1 ${template.accent.replace('border-t-', 'bg-')} opacity-80`} />
                                            <div className="p-4 h-full flex flex-col">

                                                {/* TEMPLATE VISUALIZATIONS */}
                                                {template.id === 'ivy-league' && (
                                                    <div className="flex flex-col h-full font-serif font-medium text-[8px] text-gray-800">
                                                        <div className="text-center border-b-2 border-gray-800 pb-2 mb-2">
                                                            <div className="text-sm font-bold tracking-widest uppercase text-black">ALEX RIVERA</div>
                                                            <div className="text-[6px] text-gray-400 mt-1 uppercase tracking-wider">NEW YORK • FINANCE • MBA</div>
                                                        </div>
                                                        <div className="space-y-3 opacity-60">
                                                            <div><div className="bg-gray-800 h-1.5 w-1/3 mb-1"></div><div className="bg-gray-300 h-1 w-full"></div></div>
                                                            <div><div className="bg-gray-300 h-1 w-full"></div><div className="bg-gray-300 h-1 w-5/6"></div></div>
                                                        </div>
                                                    </div>
                                                )}

                                                {template.id === 'tech-scout' && (
                                                    <div className="flex flex-col h-full font-sans text-[8px]">
                                                        <div className="flex justify-between items-center border-b-2 border-blue-500 pb-2 mb-2">
                                                            <div className="font-bold text-lg text-blue-600">AR</div>
                                                            <div className="text-right"><div className="bg-gray-800 h-2 w-16 mb-1 ml-auto"></div><div className="bg-gray-400 h-1 w-10 ml-auto"></div></div>
                                                        </div>
                                                        <div className="flex-1 space-y-2 opacity-70">
                                                            <div className="bg-blue-50 p-1 rounded-sm"><div className="bg-blue-200 h-1.5 w-1/3 mb-1"></div><div className="bg-gray-300 h-1 w-full"></div></div>
                                                        </div>
                                                    </div>
                                                )}

                                                {template.id === 'wall-street' && (
                                                    <div className="flex flex-col h-full font-serif text-[8px]">
                                                        <div className="flex justify-between border-b border-gray-900 pb-2 mb-2">
                                                            <div className="font-bold text-gray-900 text-xs">A. RIVERA</div>
                                                            <div className="text-xs text-gray-500">2026</div>
                                                        </div>
                                                        <div className="grid grid-cols-1 gap-1 opacity-70">
                                                            <div className="bg-gray-50 p-1 mb-1 border-l-2 border-gray-800"><div className="bg-gray-800 h-1 w-20 mb-1"></div><div className="bg-gray-300 h-0.5 w-full"></div></div>
                                                        </div>
                                                    </div>
                                                )}

                                                {template.id === 'designer' && (
                                                    <div className="flex h-full font-sans text-[8px]">
                                                        <div className="w-1/3 bg-pink-50 h-full p-2 space-y-2 -my-4 -ml-4 py-6">
                                                            <div className="w-8 h-8 rounded-full bg-pink-200 mb-2 mx-auto"></div>
                                                            <div className="bg-pink-100 h-1 w-full"></div>
                                                        </div>
                                                        <div className="flex-1 p-2 space-y-2">
                                                            <div className="text-xl font-black text-pink-500 leading-none mb-2">HEY.</div>
                                                            <div className="bg-gray-800 h-1 w-2/3"></div>
                                                            <div className="bg-gray-200 h-1 w-full"></div>
                                                        </div>
                                                    </div>
                                                )}

                                                {template.id === 'minimalist-plus' && (
                                                    <div className="flex flex-col h-full font-sans text-[8px] items-center pt-4">
                                                        <div className="text-xl font-thin tracking-[0.2em] text-gray-800 mb-4 uppercase">Rivera</div>
                                                        <div className="w-8 h-0.5 bg-gray-800 mb-4"></div>
                                                        <div className="w-full px-4 space-y-2 text-center opacity-60">
                                                            <div className="bg-gray-200 h-1 w-full mx-auto"></div>
                                                            <div className="bg-gray-200 h-1 w-5/6 mx-auto"></div>
                                                        </div>
                                                    </div>
                                                )}

                                                {template.id === 'glacier' && (
                                                    <div className="flex flex-col h-full font-sans text-[8px]">
                                                        <div className="bg-emerald-600 h-16 w-full -mt-4 -mx-4 mb-4 p-4 flex items-end">
                                                            <div className="text-white font-bold text-lg tracking-tight">Alex.</div>
                                                        </div>
                                                        <div className="px-1 space-y-2 opacity-70">
                                                            <div className="flex gap-2"><div className="w-1/4 bg-gray-100 h-6"></div><div className="flex-1 bg-gray-50 h-6"></div></div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Generic Fallback for others */}
                                                {!['ivy-league', 'tech-scout', 'wall-street', 'designer', 'minimalist-plus', 'glacier'].includes(template.id) && (
                                                    <div className="space-y-3 pt-4 opacity-50">
                                                        <div className="h-3 w-1/2 bg-gray-800 rounded-sm mb-2" />
                                                        <div className="h-1 w-full bg-gray-200 rounded-sm" />
                                                        <div className="h-1 w-3/4 bg-gray-200 rounded-sm" />
                                                        <div className="h-16 bg-gray-50 rounded-sm w-full mt-2 border border-gray-100" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Hover Overlay Action */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
                                            <div className="bg-black/80 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] border border-cyan-500/20">
                                                Select Template
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer Info */}
                                    <div className="p-5 bg-gradient-to-b from-[#111] to-[#0A0A0A] border-t border-white/5 flex justify-between items-center relative z-20">
                                        <div>
                                            <div className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">{template.name}</div>
                                            <div className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mt-1">{template.badge}</div>
                                        </div>
                                        <div className={`w-3 h-3 rounded-full ${template.accent.replace('border-t-', 'bg-')} shadow-[0_0_10px_currentColor] opacity-70 group-hover:opacity-100`}></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 blur-3xl" />
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                            Ready to Land Your Dream Job?
                        </h2>
                        <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto">
                            Join thousands of professionals who've used our AI resume builder to get more interviews.
                        </p>
                        <Button
                            onClick={() => onGetStarted()}
                            className="h-16 px-12 rounded-xl bg-white text-black text-lg font-bold hover:bg-cyan-50 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                        >
                            <Sparkles className="mr-2 w-5 h-5" /> Build Your Resume Now — It's Free
                        </Button>
                        <p className="text-slate-500 text-sm mt-6">No credit card required • Export unlimited PDFs</p>
                    </div>
                </section>

            </main>

            <EnhancedFooter />
        </div>
    )
}
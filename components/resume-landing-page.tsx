"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowRight, CheckCircle2, FileText, Sparkles, BarChart3, Zap, Brain, ShieldCheck, MousePointer2, Upload, Wand2, Download, Star, Award, TrendingUp } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import Link from "next/link"
import { useRef } from "react"

interface LandingPageProps {
    onGetStarted: () => void;
}

export function ResumeLandingPage({ onGetStarted }: LandingPageProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    return (
        <div ref={containerRef} className="min-h-screen bg-[#050505] text-white flex flex-col relative overflow-x-hidden selection:bg-cyan-500/30 font-sans">

            {/* Optimized Background - Reduced Blur Radius & Count */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[80px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/5 rounded-full blur-[80px]" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.1]" />
            </div>

            {/* Header */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-sm border-b border-white/5">
                <SiteHeader />
            </div>

            <main className="flex-1 relative z-10 flex flex-col pt-16">

                {/* Hero Section - Reduced Padding */}
                <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="mb-8"
                            >
                                <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-bold flex items-center gap-2 mx-auto w-fit shadow-[0_0_20px_rgba(6,182,212,0.2)] backdrop-blur-md hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-shadow cursor-default">
                                    <Sparkles className="w-4 h-4 text-yellow-300" />
                                    <span className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">v2.0 Now Live: Multi-Model AI Engine</span>
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[1.1]"
                            >
                                Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">Resume</span> <br />
                                That Gets You Hired.
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-xl md:text-2xl text-slate-400 max-w-3xl mb-12 leading-relaxed"
                            >
                                Stop struggling with Word templates. Our <strong>AI-powered builder</strong> analyzes job descriptions, optimizes keywords, and formats your resume to beat the ATS—in seconds.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                            >
                                <Button
                                    onClick={onGetStarted}
                                    className="h-16 px-10 rounded-full bg-white text-black text-lg font-bold hover:bg-cyan-50 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
                                >
                                    Build My Resume Free <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button
                                    onClick={onGetStarted}
                                    variant="outline"
                                    className="h-16 px-10 rounded-full border-white/20 text-white hover:bg-white/10 text-lg font-medium backdrop-blur-sm hover:border-white/40 transition-all"
                                >
                                    <Upload className="mr-2 w-5 h-5" /> Analyze Existing
                                </Button>
                            </motion.div>

                            {/* Trust Badges */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                                className="mt-12 flex items-center justify-center gap-8 text-slate-500 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                            >
                                <div className="flex items-center gap-2"><Star className="w-4 h-4" /> 4.9/5 Rating</div>
                                <div className="flex items-center gap-2"><Award className="w-4 h-4" /> #1 AI Tool</div>
                                <div className="flex items-center gap-2"><TrendingUp className="w-4 h-4" /> 90% Success</div>
                            </motion.div>
                        </div>

                        {/* Floating UI Mockup */}
                        <motion.div
                            style={{ y, opacity, scale }}
                            className="mt-20 relative mx-auto max-w-6xl perspective-1000"
                        >
                            <div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl p-4 shadow-2xl transform rotate-x-12 hover:rotate-x-0 transition-transform duration-700 ease-out group ring-1 ring-white/5">
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 rounded-2xl pointer-events-none" />

                                {/* Mockup Header */}
                                <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 mb-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                    </div>
                                    <div className="ml-4 h-6 w-64 bg-white/5 rounded-full flex items-center px-3 text-[10px] text-slate-600 font-mono">
                                        resume-builder.flyeng.com
                                    </div>
                                </div>

                                {/* Mockup Content */}
                                <div className="grid grid-cols-12 gap-6 h-[400px] md:h-[600px] overflow-hidden">
                                    {/* Sidebar */}
                                    <div className="col-span-3 border-r border-white/10 p-4 space-y-4 hidden md:block bg-black/20">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="h-12 w-full bg-white/5 rounded-xl animate-pulse flex items-center px-3 gap-3" style={{ animationDelay: `${i * 150}ms` }}>
                                                <div className="w-6 h-6 rounded-full bg-white/10" />
                                                <div className="w-20 h-3 bg-white/10 rounded" />
                                            </div>
                                        ))}
                                        <div className="mt-8 p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                                                <div className="w-[85%] h-full bg-cyan-500" />
                                            </div>
                                            <div className="text-xs text-cyan-400 font-bold text-center">ATS Score: 85</div>
                                        </div>
                                    </div>
                                    {/* Main Editor */}
                                    <div className="col-span-12 md:col-span-9 p-8 space-y-8 bg-white rounded-xl shadow-inner overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 pointer-events-none" />
                                        <div className="relative z-10 space-y-8 opacity-80">
                                            <div className="h-16 w-3/4 bg-slate-900 rounded-lg mb-8" />
                                            <div className="space-y-4">
                                                <div className="h-4 w-full bg-slate-200 rounded" />
                                                <div className="h-4 w-full bg-slate-200 rounded" />
                                                <div className="h-4 w-5/6 bg-slate-200 rounded" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="h-40 bg-slate-100 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest">
                                                    Experience
                                                </div>
                                                <div className="h-40 bg-slate-100 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest">
                                                    Education
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1, type: "spring", stiffness: 200 }}
                                    className="absolute -right-8 top-20 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-2xl shadow-[0_10px_40px_rgba(16,185,129,0.4)] flex items-center gap-3 backdrop-blur-md border border-white/20"
                                >
                                    <div className="bg-white/20 p-2 rounded-full">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-medium opacity-90 uppercase tracking-wider">ATS Score</div>
                                        <div className="text-3xl font-black">98<span className="text-lg opacity-80 font-medium">/100</span></div>
                                    </div>
                                </motion.div>

                                {/* AI Badge */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                                    className="absolute -left-8 bottom-40 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-2xl shadow-[0_10px_40px_rgba(124,58,237,0.4)] flex items-center gap-3 backdrop-blur-md border border-white/20"
                                >
                                    <div className="bg-white/20 p-2 rounded-full">
                                        <Sparkles className="w-6 h-6 text-yellow-300" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-medium opacity-90 uppercase tracking-wider">AI Optimization</div>
                                        <div className="text-lg font-bold">Summary Generated</div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-32 relative border-t border-white/10 bg-black/40 backdrop-blur-sm">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Three Steps to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Hired</span></h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Our intelligent workflow guides you from blank page to interview-ready resume in minutes.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                            {/* Connecting Line */}
                            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent hidden md:block -translate-y-1/2" />

                            {[
                                { icon: Upload, title: "1. Upload or Start Fresh", desc: "Import your existing resume (PDF/Docx) or start with our industry-standard templates." },
                                { icon: Wand2, title: "2. AI Optimization", desc: "Our Gemini-powered engine rewrites your bullets, fixes grammar, and injects ATS keywords." },
                                { icon: Download, title: "3. Export & Apply", desc: "Download a perfectly formatted PDF that passes ATS filters and impresses recruiters." }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="relative bg-[#0A0A0A] border border-white/10 p-8 rounded-3xl hover:border-cyan-500/50 transition-all duration-300 group z-10 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:-translate-y-2"
                                >
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform mx-auto border border-white/5 group-hover:border-cyan-500/30">
                                        <step.icon className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 text-center">{step.title}</h3>
                                    <p className="text-slate-400 text-center leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="container mx-auto px-6 py-32 relative">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Top Candidates Choose Us</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Zap, title: "Instant Analysis", desc: "Get a detailed score and actionable feedback in under 5 seconds using our optimized AI pipeline." },
                            { icon: ShieldCheck, title: "ATS Proof", desc: "Beat the bots with keyword targeting and formatting checks guaranteed to pass standard ATS systems." },
                            { icon: Brain, title: "Dual-Engine AI", desc: "Powered by Google Gemini with robust Open Source fallbacks to ensure 100% uptime and accuracy." },
                            { icon: MousePointer2, title: "Drag & Drop Builder", desc: "Intuitive interface lets you rearrange sections and customize layouts with zero coding." },
                            { icon: BarChart3, title: "Real-time Scoring", desc: "Watch your resume score improve in real-time as you make edits and add keywords." },
                            { icon: FileText, title: "Smart Templates", desc: "Choose from dozens of recruiter-approved templates designed for every industry." },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all hover:border-cyan-500/30 group hover:shadow-lg"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors border border-white/5">
                                    <feature.icon className="w-7 h-7 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </main>
            <EnhancedFooter />
        </div>
    )
}

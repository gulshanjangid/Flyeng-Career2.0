"use client"

import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion, AnimatePresence } from "framer-motion"
import { TrendingUp, Globe, Briefcase, Search, BarChart3, Target, ArrowRight, DollarSign, Activity, Map, Zap, Database, Server, Code, Cpu, Layers, Terminal, Sparkles, CheckCircle, Users, Shield, Lock, Star, MousePointer2, X, Play } from 'lucide-react'
import Link from "next/link"
import { useRef, useState } from "react"

// --- Components ---

// Live Ticker Component (Midnight Blue) - Optimized
const LiveTicker = () => {
    const tickerItems = [
        { label: "AI Engineer", value: "+12.5%", trend: "up" },
        { label: "Data Scientist", value: "₹24 LPA", trend: "neutral" },
        { label: "Remote Roles", value: "35%", trend: "up" },
        { label: "Cybersecurity", value: "+8.2%", trend: "up" },
        { label: "React Devs", value: "Stable", trend: "neutral" },
        { label: "Blockchain", value: "-2.1%", trend: "down" },
        { label: "Cloud Arch", value: "+15%", trend: "up" },
    ]

    const shouldReduceMotion = useReducedMotion()

    return (
        <div className="w-full bg-[#030014] border-y border-indigo-500/10 overflow-hidden py-3 relative z-20">
            <motion.div
                className="flex gap-16 whitespace-nowrap will-change-transform transform-gpu backface-hidden"
                animate={shouldReduceMotion ? {} : { x: [0, -1000] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }} // Slower for smoothness
            >
                {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-medium tracking-wider font-mono">
                        <span className="text-slate-500 uppercase">{item.label}</span>
                        <span className={item.trend === 'up' ? 'text-emerald-400' : item.trend === 'down' ? 'text-rose-400' : 'text-slate-300'}>
                            {item.value}
                        </span>
                        {item.trend === 'up' && <TrendingUp className="w-3 h-3 text-emerald-400" />}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

// Digital Horizon Grid Component - Optimized
const DigitalHorizon = () => {
    const shouldReduceMotion = useReducedMotion()

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Moving Grid Floor */}
            <div className="absolute inset-0 perspective-[1000px]">
                <motion.div
                    className="absolute inset-[-100%] w-[300%] h-[300%] bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:50px_50px] will-change-transform transform-gpu"
                    style={{
                        transform: "rotateX(60deg) translateZ(-200px)",
                        transformOrigin: "center top"
                    }}
                    animate={shouldReduceMotion ? {} : { y: [0, 50] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Horizon Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#020617] via-[#020617]/80 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-500/10 to-transparent blur-3xl" />
        </div>
    )
}

// Floating Data Shard Component - Optimized & Lifted
const DataShard = ({ delay, x, y, title, value, trend }: { delay: number, x: string, y: string, title: string, value: string, trend: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.8, ease: "easeOut" }}
        className="absolute hidden lg:block z-20"
        style={{ top: y, left: x }}
    >
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }} // Slower float
            className="bg-[#0f172a]/80 backdrop-blur-md border border-indigo-500/20 p-4 rounded-sm shadow-xl shadow-indigo-500/10 w-48 will-change-transform transform-gpu"
        >
            <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">{title}</span>
                <Activity className="w-3 h-3 text-indigo-400" />
            </div>
            <div className="flex items-end justify-between">
                <span className="text-xl font-bold text-white">{value}</span>
                <span className={`text-xs ${trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>{trend === 'up' ? '▲' : '▼'}</span>
            </div>
            {/* Scanline - Reduced Opacity */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-10 animate-scan pointer-events-none" />
        </motion.div>
    </motion.div>
)

export default function JobMarketLandingPage() {
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

    // Mouse Parallax - Optimized with Spring
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 30, damping: 30 }); // Smoother spring
    const springY = useSpring(mouseY, { stiffness: 30, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth - 0.5);
        mouseY.set(clientY / innerHeight - 0.5);
    };

    const scrollToDemo = () => {
        const element = document.getElementById('intelligence-modules');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen bg-[#030014] text-slate-300 overflow-hidden flex flex-col font-sans selection:bg-indigo-500/30"
        >
            <SiteHeader />

            {/* Live Ticker */}
            <div className="pt-20">
                <LiveTicker />
            </div>

            {/* Digital Horizon Background */}
            <DigitalHorizon />

            <main className="flex-1 relative z-10">
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-20 lg:py-32 relative min-h-[80vh] flex flex-col justify-center">

                    {/* Floating Shards - Lifted Positions */}
                    <DataShard delay={0.2} x="10%" y="15%" title="Bangalore Demand" value="+22%" trend="up" />
                    <DataShard delay={0.5} x="75%" y="10%" title="Avg. Tenure" value="1.8 Yrs" trend="down" />
                    <DataShard delay={0.8} x="80%" y="45%" title="Remote Roles" value="18%" trend="up" />

                    <div className="flex flex-col items-center text-center relative z-20 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8 backdrop-blur-md"
                        >
                            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                            <span className="text-xs text-indigo-200 font-medium tracking-[0.2em] uppercase">System Online • v4.0.1</span>
                        </motion.div>

                        <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight text-white relative">
                            <span className="relative inline-block">
                                <span className="absolute -inset-2 bg-indigo-500/20 blur-xl rounded-full opacity-50" />
                                <span className="relative">Decode</span>
                            </span>{" "}
                            The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 animate-gradient-x">
                                Talent Matrix
                            </span>
                        </h1>

                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                            Advanced market reconnaissance. Access real-time salary tiers, interview intelligence, and skill gap analysis for the Indian ecosystem.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md mx-auto">
                            <Link href="/ai-tools/job-market/app" className="w-full">
                                <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white h-14 text-lg font-semibold rounded-sm shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all hover:scale-[1.02] border border-indigo-400/20 group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                    <span className="flex items-center justify-center gap-3">
                                        Initiate Scan <MousePointer2 className="w-5 h-5" />
                                    </span>
                                </Button>
                            </Link>
                            <Button
                                variant="outline"
                                onClick={scrollToDemo}
                                className="w-full h-14 bg-cyan-500 hover:bg-cyan-400 text-black border-none text-lg rounded-sm backdrop-blur-sm group shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 font-bold"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <Play className="w-5 h-5 fill-black" />
                                    View Live Demo
                                </span>
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-60">
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-400 bg-[#0f172a]/50 px-4 py-2 rounded-full border border-white/5">
                                <Shield className="w-4 h-4 text-indigo-400" /> Verified Sources
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-400 bg-[#0f172a]/50 px-4 py-2 rounded-full border border-white/5">
                                <Users className="w-4 h-4 text-indigo-400" /> 50k+ Analysts
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-400 bg-[#0f172a]/50 px-4 py-2 rounded-full border border-white/5">
                                <Lock className="w-4 h-4 text-indigo-400" /> Enterprise Grade
                            </div>
                        </div>
                    </div>
                </section>

                {/* Data Sources Section */}
                <section className="py-20 border-y border-indigo-500/10 bg-[#0f172a]/50 relative z-10">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-xs font-medium text-slate-500 mb-8 uppercase tracking-[0.2em]">Trusted By Analysts At</p>
                        <div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                            {['LinkedIn', 'Indeed', 'Glassdoor', 'GitHub', 'Stack Overflow', 'AngelList'].map((source) => (
                                <span key={source} className="text-xl font-semibold text-white cursor-default hover:text-indigo-400 transition-colors">
                                    {source}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bento Grid Features */}
                <section id="intelligence-modules" className="container mx-auto px-4 py-32 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-white mb-6">Intelligence Modules</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Comprehensive tools designed to accelerate your career trajectory.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Large Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-2 bg-[#0f172a] border border-indigo-500/10 p-10 rounded-sm shadow-sm relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-indigo-500/10 rounded-sm flex items-center justify-center mb-6 text-indigo-400">
                                    <Globe className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-4">Global Heatmaps</h3>
                                <p className="text-slate-400 max-w-md text-lg leading-relaxed">Visualize hiring intensity across 150+ countries. Identify remote work hubs and relocation opportunities with precision.</p>
                            </div>
                            {/* Decorative Map Graphic */}
                            <div className="absolute right-[-20px] bottom-[-40px] opacity-5 rotate-12 scale-150 group-hover:opacity-10 transition-opacity duration-500">
                                <Map className="w-80 h-80 text-white" />
                            </div>
                        </motion.div>

                        {/* Tall Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:row-span-2 bg-[#0f172a] border border-indigo-500/10 p-10 rounded-sm shadow-sm relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-14 h-14 bg-cyan-500/10 rounded-sm flex items-center justify-center mb-6 text-cyan-400">
                                <TrendingUp className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Salary Velocity</h3>
                            <p className="text-slate-400 mb-10 text-lg">Track compensation trends in real-time. Know exactly what you&apos;re worth.</p>

                            {/* Mock Chart */}
                            <div className="h-64 flex items-end justify-between gap-2 opacity-50 group-hover:opacity-80 transition-opacity duration-500">
                                {[40, 65, 50, 80, 75, 90, 85, 100].map((h, i) => (
                                    <div key={i} className="w-full bg-cyan-500/30 rounded-t-sm relative overflow-hidden" style={{ height: `${h}%` }}>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Standard Card 1 */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-[#0f172a] border border-indigo-500/10 p-10 rounded-sm shadow-sm relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-14 h-14 bg-indigo-500/10 rounded-sm flex items-center justify-center mb-6 text-indigo-400">
                                <Target className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Skill Gap Analysis</h3>
                            <p className="text-slate-400 text-sm">Compare your stack against top performers.</p>
                        </motion.div>

                        {/* Standard Card 2 */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-[#0f172a] border border-indigo-500/10 p-10 rounded-sm shadow-sm relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-14 h-14 bg-blue-500/10 rounded-sm flex items-center justify-center mb-6 text-blue-400">
                                <Zap className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Instant Insights</h3>
                            <p className="text-slate-400 text-sm">AI-powered summaries of complex market data.</p>
                        </motion.div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-32 relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-bold text-white mb-6">Methodology</h2>
                            <p className="text-slate-400 text-lg">From raw data to actionable strategy.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
                            {/* Connecting Line */}
                            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

                            {[
                                { icon: Database, title: "Data Aggregation", desc: "We scan millions of job postings, salary reports, and hiring trends daily." },
                                { icon: Cpu, title: "Simulation Engine", desc: "Our proprietary engine models market dynamics to predict future trends." },
                                { icon: BarChart3, title: "Strategic Output", desc: "You receive a personalized dashboard with actionable career insights." }
                            ].map((step, i) => (
                                <div key={i} className="text-center relative">
                                    <div className="w-24 h-24 bg-[#0f172a] border border-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm relative z-10">
                                        <step.icon className="w-10 h-10 text-indigo-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <EnhancedFooter />
        </div>
    )
}

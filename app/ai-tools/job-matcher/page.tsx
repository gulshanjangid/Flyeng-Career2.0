"use client"

import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { Briefcase, MapPin, DollarSign, Zap, Globe, Cpu, Search, TrendingUp, Shield, Activity, Layers, Radio, Brain } from 'lucide-react'
import Link from "next/link"
import { useState, useEffect } from "react"

export default function JobMatcherPage() {
    const { scrollY } = useScroll();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Optimized animations (reduced complexity)
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="relative min-h-screen bg-[#030014] text-white overflow-hidden flex flex-col font-sans selection:bg-cyan-500/30">
            <SiteHeader />

            {/* Optimized Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.02]" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#030014] via-[#0a0a2e]/50 to-[#030014]" />
                
                {/* CSS-based pulsing orbs for better performance */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s' }} />
            </div>

            <main className="flex-1 pt-32 pb-20 relative z-10">
                {/* Hero Section */}
                <section className="container mx-auto px-4 mb-24 md:mb-32 text-center relative">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8 backdrop-blur-md">
                            <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                            <span className="text-xs font-bold tracking-widest text-cyan-300 uppercase">Live Global Network Active</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight font-heading tracking-tight">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">Quantum</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">Job Matcher</span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-200/60 mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                            Bypass the noise. Our AI scans <span className="text-cyan-400 font-bold">millions of live data points</span> from LinkedIn, Indeed, and Glassdoor to find your perfect role in milliseconds.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
                            <Link href="/ai-tools/job-matcher/app" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto group relative px-8 py-6 md:px-10 md:py-8 text-lg rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold shadow-[0_0_40px_rgba(8,145,178,0.4)] transition-all hover:scale-105 overflow-hidden border border-cyan-400/50">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        <Cpu className="w-6 h-6" />
                                        Initialize Scan
                                    </span>
                                </Button>
                            </Link>
                            <div className="flex items-center gap-4 text-xs md:text-sm text-blue-300/60">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#030014] bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-[10px] md:text-xs font-bold text-white">
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <span>10k+ Matches Today</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Live Feed Ticker - Framer Motion for Ultra Smooth Loop */}
                    <div className="mt-16 md:mt-24 relative max-w-5xl mx-auto overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#030014] via-transparent to-[#030014] z-10 pointer-events-none" />
                        <div className="flex border-y border-white/5 bg-white/5 backdrop-blur-sm relative overflow-hidden">
                            <motion.div 
                                className="flex gap-12 py-4 whitespace-nowrap"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            >
                                {/* Duplicated content for seamless loop */}
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="flex gap-12">
                                        {[
                                            { role: "Senior React Dev", co: "Vercel", loc: "Remote", time: "2m ago" },
                                            { role: "AI Engineer", co: "OpenAI", loc: "San Francisco", time: "5m ago" },
                                            { role: "Product Designer", co: "Airbnb", loc: "New York", time: "12m ago" },
                                            { role: "Backend Lead", co: "Stripe", loc: "Dublin", time: "15m ago" },
                                            { role: "DevOps Engineer", co: "Netflix", loc: "Remote", time: "18m ago" },
                                            { role: "iOS Developer", co: "Apple", loc: "Cupertino", time: "22m ago" },
                                            { role: "Full Stack", co: "Google", loc: "Bangalore", time: "25m ago" },
                                        ].map((job, j) => (
                                            <div key={j} className="flex items-center gap-3 text-sm">
                                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                                                <span className="font-bold text-white">{job.role}</span>
                                                <span className="text-blue-400">@ {job.co}</span>
                                                <span className="text-white/40 hidden md:inline">• {job.loc}</span>
                                                <span className="text-cyan-500/60 text-xs font-mono">[{job.time}]</span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="container mx-auto px-4 mb-20 md:mb-32">
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { title: "Real-Time Sync", desc: "Aggregates jobs from LinkedIn, Indeed, and 50+ sources instantly.", icon: Globe, color: "text-cyan-400" },
                            { title: "AI Resume Analysis", desc: "Deep learning matches your exact skills to hidden job requirements.", icon: Cpu, color: "text-purple-400" },
                            { title: "Salary Predictor", desc: "Know your worth with our market-calibrated salary engine.", icon: DollarSign, color: "text-green-400" },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-[#0a0a1a] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-cyan-500/30 transition-colors group"
                            >
                                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.color}`}>
                                    <feature.icon className="w-6 h-6 md:w-7 md:h-7" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-sm md:text-base text-blue-200/60 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="container mx-auto px-4 text-center">
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="relative bg-gradient-to-r from-cyan-900/40 to-purple-900/40 rounded-3xl p-8 md:p-20 overflow-hidden border border-white/10"
                    >
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-white">Ready to Upgrade Your Career?</h2>
                            <p className="text-lg md:text-xl text-blue-200/60 mb-8 md:mb-10 max-w-2xl mx-auto">
                                Join 50,000+ developers who found their dream role using our Quantum Matcher.
                            </p>
                            <Link href="/ai-tools/job-matcher/app">
                                <Button className="bg-white text-black hover:bg-cyan-50 w-full md:w-auto px-12 py-6 md:py-8 text-lg md:text-xl rounded-full font-bold shadow-lg transition-transform hover:scale-105">
                                    Launch App
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </section>
            </main>

            <EnhancedFooter />
        </div>
    )
}


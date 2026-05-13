"use client"

import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { Compass, Flag, Navigation, Rocket, Target, Zap, Globe, ArrowRight, Layout, Users, TrendingUp, Star, Map, Sparkles, Network } from 'lucide-react'
import Link from "next/link"
import { useRef } from "react"

export default function CareerRoadmapPage() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <div className="min-h-[100dvh] w-full bg-[#030014] text-slate-200 flex flex-col relative overflow-hidden font-sans selection:bg-indigo-500/30" ref={containerRef}>
            <SiteHeader />

            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]" />
                <div className="absolute top-0 -left-1/4 w-[70vw] h-[70vw] bg-indigo-600/10 rounded-full blur-[150px] animate-pulse mix-blend-screen" />
                <div className="absolute bottom-1/4 -right-1/4 w-[60vw] h-[60vw] bg-violet-600/10 rounded-full blur-[150px] animate-pulse mix-blend-screen" style={{ animationDelay: '2s' }} />
                
                {/* Desktop: Stars */}
                <div className="hidden sm:block">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 2 + 1}px`,
                                height: `${Math.random() * 2 + 1}px`,
                                opacity: Math.random() * 0.5 + 0.1,
                                animation: `twinkle ${Math.random() * 4 + 2}s infinite alternate`
                            }}
                        />
                    ))}
                </div>
            </div>

            <main className="flex-1 relative z-10 w-full flex flex-col">
                {/* Hero Section */}
                <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-32 px-4 overflow-hidden">
                    <div className="container mx-auto text-center relative z-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-xl text-indigo-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-[0_0_20px_rgba(79,70,229,0.2)]"
                        >
                            <Network className="w-4 h-4 animate-pulse" />
                            <span className="tracking-[0.15em] uppercase font-semibold">Career Architecture</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl sm:text-7xl md:text-[8rem] font-extrabold mb-6 sm:mb-8 tracking-tighter leading-[1.1]"
                        >
                            Define Your <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 via-violet-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                                Tech Journey
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg sm:text-2xl text-slate-400 mb-10 sm:mb-14 max-w-3xl mx-auto leading-relaxed font-light px-2"
                        >
                            Navigate the dynamic landscape of modern technology. <br className="hidden sm:block" />
                            From ground zero to subject matter expert, we construct the optimal path.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 items-center"
                        >
                            <Link href="/ai-tools/roadmap/app" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-10 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl text-lg sm:text-xl font-bold shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all hover:scale-105 group relative overflow-hidden">
                                    <span className="relative z-10 flex items-center justify-center">
                                        Initialize Roadmap
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                </Button>
                            </Link>
                            <Link href="#features" className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-10 border-white/10 bg-white/5 hover:bg-white/10 text-white text-lg sm:text-xl rounded-2xl font-medium backdrop-blur-md transition-all">
                                    Explore Features
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid - Glass Cards */}
                <section id="features" className="py-20 sm:py-32 relative z-20">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16 sm:mb-24">
                            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-white tracking-tight">Core Methodology</h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Everything you need to traverse the complex landscape of technical skills and career milestones.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                            {[
                                {
                                    icon: Map,
                                    title: "Adaptive Waypoints",
                                    desc: "Dynamic milestones mapped to your specific goals, from beginner concepts to advanced architectures.",
                                    color: "text-indigo-400",
                                    bg: "bg-indigo-500/10",
                                    border: "border-indigo-500/20",
                                    glow: "group-hover:shadow-[0_0_30px_rgba(79,70,229,0.2)]"
                                },
                                {
                                    icon: Sparkles,
                                    title: "Curated Archives",
                                    desc: "Hand-picked courses, articles, and videos perfectly suited for each step of your journey.",
                                    color: "text-violet-400",
                                    bg: "bg-violet-500/10",
                                    border: "border-violet-500/20",
                                    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
                                },
                                {
                                    icon: Target,
                                    title: "Practical Applications",
                                    desc: "Real-world capstone projects designed to solidify your knowledge and build your portfolio.",
                                    color: "text-cyan-400",
                                    bg: "bg-cyan-500/10",
                                    border: "border-cyan-500/20",
                                    glow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                                }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className={`bg-[#0f111a]/80 backdrop-blur-xl border ${feature.border} p-10 rounded-3xl transition-all duration-500 group relative overflow-hidden ${feature.glow}`}
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                                    <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                                        <feature.icon className={`w-8 h-8 ${feature.color}`} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{feature.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-lg relative z-10">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Popular Roles Preview */}
                <section className="py-20 relative z-20 bg-gradient-to-b from-transparent to-indigo-950/20">
                    <div className="container mx-auto px-4 text-center max-w-6xl">
                        <h2 className="text-2xl sm:text-4xl font-bold mb-12">Popular Career Tracks</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                            {[
                                { title: "AI/ML Engineer", icon: "🤖", color: "from-indigo-400 to-violet-400" },
                                { title: "Full Stack Dev", icon: "⚡", color: "from-cyan-400 to-blue-400" },
                                { title: "Data Scientist", icon: "📊", color: "from-emerald-400 to-teal-400" },
                                { title: "DevOps Architect", icon: "☁️", color: "from-orange-400 to-red-400" }
                            ].map((role, i) => (
                                <Link key={i} href="/ai-tools/roadmap/app">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white/[0.02] border border-white/5 hover:border-white/20 p-6 rounded-2xl backdrop-blur-md transition-all hover:-translate-y-1 group"
                                    >
                                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{role.icon}</div>
                                        <div className={`font-semibold bg-gradient-to-r ${role.color} bg-clip-text text-transparent`}>
                                            {role.title}
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 border-t border-white/[0.05]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                            {[
                                { label: "Professionals Guided", value: "50k+" },
                                { label: "Milestones Hit", value: "125k+" },
                                { label: "Skills Mapped", value: "500+" },
                                { label: "Roles Defined", value: "40+" },
                            ].map((stat, i) => (
                                <div key={i} className="group cursor-default">
                                    <div className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-3 group-hover:scale-105 transition-transform duration-300 drop-shadow-md">{stat.value}</div>
                                    <div className="text-sm border border-white/10 inline-block px-3 py-1 rounded-full text-indigo-300 font-medium tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <div className="mt-auto block relative z-20 w-full">
                <EnhancedFooter />
            </div>
        </div>
    )
}

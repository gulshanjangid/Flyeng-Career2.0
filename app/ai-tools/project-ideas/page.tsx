"use client"

import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { Lightbulb, Zap, Rocket, Target, Sparkles, Settings, ArrowRight, Star, Users, BookOpen, Database, Cpu, Code, Layers, Network } from 'lucide-react'
import Link from "next/link"
import { useState, useRef } from "react"

export default function ProjectIdeasPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null)
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <div ref={containerRef} className="relative min-h-screen w-full bg-[#020617] text-white overflow-hidden flex flex-col font-sans selection:bg-cyan-500/30">
            <SiteHeader />

            {/* Holographic Grid Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617]" />
                <motion.div
                    style={{ y, opacity }}
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-cyan-500/5 rounded-full blur-[120px] hidden sm:block"
                />
            </div>

            <main className="flex-1 pt-20 sm:pt-32 pb-12 sm:pb-20 relative z-10">
                {/* Hero Section - Blueprint */}
                <section className="container mx-auto px-3 sm:px-4 mb-16 sm:mb-32 text-center relative">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-block mb-8 relative"
                    >
                        <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-20 animate-pulse" />
                        <div className="relative w-24 h-24 border border-cyan-500/30 rounded-full flex items-center justify-center bg-[#0f172a]/50 backdrop-blur-sm">
                            <div className="absolute inset-0 border-t-2 border-cyan-400 rounded-full animate-[spin_3s_linear_infinite]" />
                            <Cpu className="w-10 h-10 text-cyan-400" />
                        </div>
                    </motion.div>

                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight font-heading tracking-tight">
                        ARCHITECT YOUR <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">DIGITAL FUTURE</span>
                    </h1>
                    <p className="text-base sm:text-xl text-cyan-100/60 mb-6 sm:mb-10 max-w-2xl mx-auto font-light px-2">
                        Generate comprehensive technical blueprints, database schemas, and API specifications instantly with our AI Architect.
                    </p>

                    <div className="flex justify-center gap-6">
                        <Link href="/ai-tools/project-ideas/app">
                            <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 sm:px-12 py-4 sm:py-8 text-base sm:text-xl rounded-full shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all hover:scale-105 border border-cyan-400/50 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <Zap className="w-6 h-6 mr-2 fill-black relative z-10" />
                                <span className="relative z-10">Initialize Architect</span>
                            </Button>
                        </Link>
                    </div>

                    {/* Floating Code Snippets */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 hidden xl:block opacity-20 pointer-events-none">
                        <pre className="text-xs text-cyan-500 font-mono">
                            {`class Architect {\n  init() {\n    this.scan();\n    this.build();\n  }\n}`}
                        </pre>
                    </div>
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden xl:block opacity-20 pointer-events-none text-right">
                        <pre className="text-xs text-cyan-500 font-mono">
                            {`interface Blueprint {\n  schema: Schema;\n  api: Endpoints[];\n  ui: Components;\n}`}
                        </pre>
                    </div>
                </section>

                {/* Stats - System Metrics */}
                <section className="container mx-auto px-3 sm:px-4 mb-16 sm:mb-32">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8">
                        {[
                            { label: "Blueprints Generated", value: "850K+", icon: Database },
                            { label: "Code Lines Architected", value: "45M+", icon: Code },
                            { label: "System Accuracy", value: "99.9%", icon: Target },
                            { label: "Active Developers", value: "120K+", icon: Users },
                        ].map((stat, i) => (
                            <div key={i} className="text-center group p-4 sm:p-8 border border-cyan-500/10 rounded-2xl bg-[#0f172a]/30 backdrop-blur-sm hover:border-cyan-500/30 transition-all hover:-translate-y-1">
                                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                                    <stat.icon className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div className="text-xl sm:text-3xl font-bold text-white mb-1 font-mono">{stat.value}</div>
                                <div className="text-xs text-cyan-200/50 uppercase tracking-widest font-bold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Features - Holographic Cards */}
                <section className="container mx-auto px-3 sm:px-4 mb-16 sm:mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-heading">System Capabilities</h2>
                        <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                        {[
                            { title: "Deep Schema Design", desc: "Automatically generates normalized database schemas with relationships.", icon: Database },
                            { title: "API Specification", desc: "Defines RESTful endpoints with methods, paths, and payload descriptions.", icon: Network },
                            { title: "User Flow Mapping", desc: "Creates detailed user stories to guide frontend implementation.", icon: Layers },
                        ].map((feature, i) => (
                            <div key={i} className="bg-[#0f172a]/50 border border-cyan-500/10 rounded-3xl p-8 hover:border-cyan-500/40 transition-all group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-14 h-14 bg-cyan-900/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-7 h-7 text-cyan-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-cyan-100/60 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Target Audience - Access Levels */}
                <section className="container mx-auto px-4 mb-32">
                    <div className="bg-[#0f172a] border border-cyan-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Cpu className="w-64 h-64 text-cyan-500" />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 font-heading">Authorized Personnel</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
                                {[
                                    { title: "Hackathon Teams", desc: "Rapidly prototype complex systems.", icon: Zap },
                                    { title: "Solo Founders", desc: "Validate technical feasibility instantly.", icon: Rocket },
                                    { title: "Students", desc: "Learn industry-standard architecture.", icon: BookOpen },
                                ].map((item, i) => (
                                    <div key={i} className="text-center">
                                        <div className="w-20 h-20 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-6 relative bg-[#020617]">
                                            <div className="absolute inset-0 border border-cyan-500/20 rounded-full scale-125 animate-pulse" />
                                            <item.icon className="w-8 h-8 text-cyan-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-cyan-200/60">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="container mx-auto px-4 text-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-cyan-500 blur-[100px] opacity-10" />
                        <h2 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-12 text-white relative z-10 font-heading">Ready to Build?</h2>
                        <Link href="/ai-tools/project-ideas/app">
                            <Button className="bg-white text-[#020617] hover:bg-cyan-50 px-8 sm:px-16 py-4 sm:py-8 text-lg sm:text-2xl rounded-full font-bold shadow-2xl transition-transform hover:scale-105 relative z-10 border-4 border-cyan-500/20">
                                Launch Architect
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>

            <EnhancedFooter />
        </div>
    )
}

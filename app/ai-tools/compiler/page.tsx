"use client"

import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { Terminal, Cpu, Zap, Code2, Shield, Globe, ChevronRight, Play } from 'lucide-react'
import Link from "next/link"
import { useRef } from "react"

export default function CompilerLandingPage() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <div ref={containerRef} className="relative min-h-screen bg-[#020202] text-white overflow-hidden font-mono selection:bg-green-500/30">
            {/* Ambient Background Layers */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-green-500/5 to-transparent blur-[100px]" />
                <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-blue-500/5 to-transparent blur-[100px]" />
            </div>

            <SiteHeader />

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 px-4">
                    <motion.div
                        style={{ y, opacity }}
                        className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none will-change-transform transform-gpu"
                    >
                        <div className="w-[800px] h-[800px] border border-green-500/20 rounded-full animate-[spin_60s_linear_infinite]" />
                        <div className="absolute w-[600px] h-[600px] border border-blue-500/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                        <div className="absolute w-[400px] h-[400px] border border-purple-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
                    </motion.div>

                    <div className="container mx-auto relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold tracking-widest uppercase mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            System Online v2.5.0
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-500"
                        >
                            NEURAL CODE<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">ENGINE</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                        >
                            Execute code in <span className="text-green-400">7+ languages</span> with a high-precision AI compiler.
                            Detect vulnerabilities, optimize logic, and visualize complexity in real-time.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col md:flex-row items-center justify-center gap-4"
                        >
                            <Link href="/ai-tools/compiler/app">
                                <Button size="lg" className="bg-green-600 hover:bg-green-500 text-black font-bold h-14 px-8 text-lg tracking-wide shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_50px_rgba(34,197,94,0.6)] transition-all group">
                                    <Terminal className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                                    INITIALIZE TERMINAL
                                    <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg" className="h-14 px-8 border-white/10 bg-white/5 hover:bg-white/10 text-white hover:text-green-400 transition-colors">
                                <Play className="w-4 h-4 mr-2" />
                                WATCH DEMO
                            </Button>
                        </motion.div>
                    </div>

                    {/* Floating Code Snippets */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <CodeSnippet x="10%" y="20%" delay={0} code="def optimize(x): return x * 2" color="text-blue-500/40" />
                        <CodeSnippet x="80%" y="15%" delay={2} code="std::cout << system_status;" color="text-green-500/40" />
                        <CodeSnippet x="15%" y="70%" delay={4} code="fn main() { println!('Ready'); }" color="text-purple-500/40" />
                        <CodeSnippet x="75%" y="80%" delay={1} code="console.log('Vulnerability found');" color="text-red-500/40" />
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-32 relative">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FeatureCard
                                icon={<Cpu className="w-8 h-8 text-green-400" />}
                                title="Multi-Language Core"
                                description="Native support for Python, C++, Java, Go, Rust, and more. Auto-detection enabled."
                            />
                            <FeatureCard
                                icon={<Shield className="w-8 h-8 text-blue-400" />}
                                title="Edge Case Detection"
                                description="Identifies tricky inputs like empty arrays, negative numbers, and boundary conditions."
                            />
                            <FeatureCard
                                icon={<Zap className="w-8 h-8 text-yellow-400" />}
                                title="Complexity & Patterns"
                                description="AI-driven Time/Space complexity analysis and algorithmic pattern recognition."
                            />
                        </div>
                    </div>
                </section>
            </main>

            <EnhancedFooter />
        </div>
    )
}

function FeatureCard({ icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-green-500/30 transition-colors group relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
                <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg group-hover:bg-green-500/10 transition-colors">
                    {icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">{title}</h3>
                <p className="text-slate-400 leading-relaxed">{description}</p>
            </div>
        </motion.div>
    )
}

function CodeSnippet({ x, y, delay, code, color }: { x: string, y: string, delay: number, code: string, color: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 0], y: -20 }}
            transition={{ duration: 5, delay, repeat: Infinity, repeatDelay: 3 }}
            style={{ left: x, top: y }}
            className={`absolute font-mono text-xs ${color} whitespace-nowrap will-change-transform transform-gpu`}
        >
            {code}
        </motion.div>
    )
}

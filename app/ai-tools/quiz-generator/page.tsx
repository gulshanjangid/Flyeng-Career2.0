"use client"

import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { Brain, Sparkles, Zap, Target, ArrowRight, BookOpen, Clock, Trophy } from 'lucide-react'
import Link from "next/link"
import { useRef } from "react"

export default function QuizGeneratorLandingPage() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden selection:bg-cyan-500/30" ref={containerRef}>
            <SiteHeader />

            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-start pt-8 pb-16 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                </div>

                <div className="w-full max-w-[95%] mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-sm">
                            <Sparkles className="w-5 h-5 text-cyan-400" />
                            <span className="text-base text-cyan-100 font-medium">AI-Powered Learning Engine</span>
                        </div>

                        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400 tracking-tight leading-none">
                            Master Any Topic <br />
                            <span className="text-white/40">In Seconds</span>
                        </h1>

                        <p className="text-2xl text-white/60 max-w-4xl mx-auto mb-12 leading-relaxed">
                            Transform your study material into interactive quizzes instantly.
                            Powered by advanced AI to help you learn faster and retain more.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/ai-tools/quiz-generator/app">
                                <Button className="h-16 px-10 text-xl bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-full shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all group">
                                    Generate Quiz
                                    <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Button variant="outline" className="h-16 px-10 text-xl border-white/10 hover:bg-white/5 text-white rounded-full backdrop-blur-sm">
                                View Demo
                            </Button>
                        </div>
                    </motion.div>

                    {/* Floating Cards Preview */}
                    <motion.div
                        style={{ y }}
                        className="mt-24 relative max-w-[90%] mx-auto perspective-1000 will-change-transform transform-gpu"
                    >
                        <div className="relative z-10 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl transform rotate-x-12">
                            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-4 h-4 rounded-full bg-red-500" />
                                    <div className="w-4 h-4 rounded-full bg-yellow-500" />
                                    <div className="w-4 h-4 rounded-full bg-green-500" />
                                </div>
                                <div className="text-base text-white/40 font-mono">Generating Quiz: React Hooks...</div>
                            </div>
                            <div className="space-y-6">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="h-24 bg-white/5 rounded-xl w-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-40 relative z-10 bg-black/50 backdrop-blur-lg">
                <div className="w-full max-w-[95%] mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Brain,
                                title: "AI Generation",
                                desc: "Advanced algorithms analyze your topic to create relevant, challenging questions.",
                                color: "text-purple-400"
                            },
                            {
                                icon: Clock,
                                title: "Instant Feedback",
                                desc: "Get detailed explanations for every answer to understand the 'why' behind the 'what'.",
                                color: "text-cyan-400"
                            },
                            {
                                icon: Trophy,
                                title: "Track Progress",
                                desc: "Monitor your improvement over time with detailed analytics and performance insights.",
                                color: "text-pink-400"
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 ${feature.color} group-hover:scale-110 transition-transform`}>
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-bold mb-6 text-white">{feature.title}</h3>
                                <p className="text-lg text-white/60 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <EnhancedFooter />
        </div>
    )
}

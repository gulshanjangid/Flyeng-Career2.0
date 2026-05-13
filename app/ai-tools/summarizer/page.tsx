"use client"

import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Brain, Sparkles, Upload, FileText, Zap, Layout, AlignLeft, Layers, ShieldCheck, Clock, Check } from 'lucide-react'
import Link from "next/link"
import { useRef } from "react"

export default function SummarizerPage() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <div ref={containerRef} className="min-h-[100dvh] bg-[#030303] text-white selection:bg-indigo-500/30 font-sans flex flex-col relative overflow-hidden">
            <SiteHeader />

            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[150px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            <main className="flex-1 relative z-10 w-full flex flex-col">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden z-10 flex flex-col items-center justify-center min-h-[90vh]">
                <motion.div 
                    style={{ y, opacity }}
                    className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
                >
                    <div className="w-[800px] h-[800px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl animate-spin-slow" />
                    
                    {/* Floating Abstract Shapes */}
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
                        className="absolute top-[20%] right-[10%] w-64 h-64 border border-indigo-500/20 rounded-full animate-[spin_20s_linear_infinite] border-dashed"
                    />
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}
                        className="absolute bottom-[20%] left-[10%] w-80 h-80 border-2 border-purple-500/10 rounded-full animate-[spin_30s_linear_infinite_reverse] mix-blend-overlay"
                    />
                </motion.div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-2xl overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
                        <span className="text-sm font-medium tracking-wide text-indigo-100">AI-Powered Comprehension</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl sm:text-7xl lg:text-[8.5rem] font-extrabold mb-8 tracking-tighter leading-[1.05] relative z-10"
                    >
                        Transform <span className="text-white/40 italic font-serif">Chaos</span> <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-2xl">
                            Into Clarity.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        Distill hours of reading into seconds of insight. From lengthy reports to complex articles, let AI extract the core knowledge you need.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link href="/ai-tools/summarizer/app">
                            <Button className="h-14 px-10 text-lg bg-white text-black hover:bg-slate-200 rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all hover:scale-105 active:scale-95 group overflow-hidden relative">
                                <span className="relative z-10 flex items-center">
                                    Start Summarizing
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Processing Visualization Demo */}
            <section className="py-20 relative z-10 w-full overflow-hidden border-t border-white/5 bg-gradient-to-b from-transparent to-[#050505]">
                <div className="container mx-auto px-4">
                    <div className="relative max-w-5xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 blur-3xl opacity-50" />
                        
                        <div className="relative bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-[2rem] p-6 md:p-12 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center gap-12">
                            {/* Input Visualization */}
                            <div className="flex-1 space-y-4 w-full">
                                <div className="h-4 bg-white/5 rounded-full w-full object-cover overflow-hidden relative">
                                    <motion.div 
                                        animate={{ x: ["-100%", "100%"] }} 
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    />
                                </div>
                                <div className="h-4 bg-white/5 rounded-full w-5/6" />
                                <div className="h-4 bg-white/5 rounded-full w-full" />
                                <div className="h-4 bg-white/5 rounded-full w-4/6" />
                                <div className="h-4 bg-white/5 rounded-full w-11/12" />
                                <div className="h-4 bg-white/5 rounded-full w-3/4" />
                            </div>

                            {/* Center Node */}
                            <div className="relative shrink-0 flex items-center justify-center">
                                <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full scale-150" />
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                                        <Sparkles className="w-8 h-8 text-white" />
                                    </motion.div>
                                </div>
                                
                                {/* Connecting Lines */}
                                <div className="hidden md:block absolute top-1/2 right-full w-12 h-[2px] bg-gradient-to-r from-white/10 to-indigo-500/50 -translate-y-1/2" />
                                <div className="hidden md:block absolute top-1/2 left-full w-12 h-[2px] bg-gradient-to-l from-white/10 to-purple-500/50 -translate-y-1/2" />
                            </div>

                            {/* Output Visualization */}
                            <div className="flex-1 w-full bg-white/5 border border-white/10 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
                                    <Check className="w-5 h-5 text-emerald-400" />
                                    <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Perfect Summary</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-4 bg-white/80 rounded-full w-full" />
                                    <div className="h-4 bg-white/80 rounded-full w-5/6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bento Grid Features */}
            <section className="py-24 relative z-10 bg-[#050505]/50 border-t border-white/5">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Intelligence at Scale</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">More than just extracting sentences. Our AI comprehends the context to deliver human-like overviews.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Large Card 1 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="md:col-span-2 bg-gradient-to-br from-indigo-900/20 to-purple-900/10 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group hover:border-indigo-500/30 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                                <Brain className="w-32 h-32 text-indigo-400" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6">
                                    <Zap className="w-6 h-6 text-indigo-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white">Semantic Precision</h3>
                                <p className="text-slate-400 leading-relaxed max-w-md">
                                    We don't just pick random sentences. The AI reconstructs the core narrative, ensuring the meaning is preserved perfectly.
                                </p>
                            </div>
                        </motion.div>

                        {/* Small Card 1 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:bg-white/[0.05] transition-colors"
                        >
                            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                                <Upload className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">PDF & Text Ready</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Paste long-form text or simply upload a PDF document. We handle the extraction instantly.
                            </p>
                        </motion.div>

                        {/* Small Card 2 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:bg-white/[0.05] transition-colors"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                                <Layout className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Custom Formats</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Get your output precisely how you want it. Choose between crisp bullet points or flowing paragraphs.
                            </p>
                        </motion.div>

                        {/* Large Card 2 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="md:col-span-2 bg-gradient-to-br from-pink-900/10 to-orange-900/10 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group hover:border-pink-500/30 transition-colors"
                        >
                            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                                <Clock className="w-64 h-64 text-pink-400" />
                            </div>
                            <div className="relative z-10 flex flex-col justify-center h-full">
                                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6">
                                    <AlignLeft className="w-6 h-6 text-pink-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white">Adaptive Lengths</h3>
                                <p className="text-slate-400 leading-relaxed max-w-md">
                                    Control the depth of your summaries. From executive overviews (Short) to comprehensive breakdowns (Long), dial in the perfect detail level.
                                </p>
                            </div>
                        </motion.div>
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

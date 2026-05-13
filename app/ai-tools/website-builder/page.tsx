"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, LayoutTemplate, ArrowRight, Code2, MousePointer2 } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { EnhancedFooter } from '@/components/enhanced-footer';

export default function BuilderPortal() {
    return (
        <div className="min-h-screen bg-[#030303] text-white overflow-hidden font-sans selection:bg-purple-500/30 flex flex-col">
            <div className="fixed top-0 w-full z-50">
                <SiteHeader />
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 container mx-auto px-6 flex-1 flex flex-col items-center justify-center pt-24 pb-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm mb-6 backdrop-blur-md">
                        <Sparkles size={14} className="text-yellow-400" />
                        <span>Next-Gen Builder Platform</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/40 mb-6">
                        Build the <span className="text-purple-400">Impossible.</span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Two powerful engines. One unified workspace. Choose your architectural approach.
                    </p>
                </motion.div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-20">

                    {/* Card 1: AI Architect */}
                    <Link href="/ai-tools/website-builder/ai" className="group">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="relative h-[400px] rounded-3xl border border-white/10 bg-[#0a0a0f] p-8 overflow-hidden hover:border-purple-500/50 transition-colors duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 border border-white/5">
                                        <Code2 className="text-purple-400" size={28} />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-3">AI Architect</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Generate production-ready sites from natural language.
                                        Perfect for rapid prototyping and "V0" style iteration.
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 text-purple-400 font-medium group-hover:gap-5 transition-all">
                                    <span>Launch Generator</span>
                                    <ArrowRight size={18} />
                                </div>
                            </div>

                            {/* Decorative Code Abstract */}
                            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors"></div>
                        </motion.div>
                    </Link>

                    {/* Card 2: Visual Canvas */}
                    <Link href="/ai-tools/website-builder/canvas" className="group">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="relative h-[400px] rounded-3xl border border-white/10 bg-[#0a0a0f] p-8 overflow-hidden hover:border-blue-500/50 transition-colors duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-white/5">
                                        <MousePointer2 className="text-blue-400" size={28} />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-3">Visual Canvas</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Pixel-perfect drag and drop control. Fine-tune layouts
                                        and components with a Framer-like interface.
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 text-blue-400 font-medium group-hover:gap-5 transition-all">
                                    <span>Enter Canvas</span>
                                    <ArrowRight size={18} />
                                </div>
                            </div>

                            {/* Decorative Grid Abstract */}
                            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
                        </motion.div>
                    </Link>

                </div>
            </div>
            <EnhancedFooter />
        </div>
    );
}

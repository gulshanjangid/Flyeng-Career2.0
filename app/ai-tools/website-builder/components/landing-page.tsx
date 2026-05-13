"use client";

import { SiteHeader } from "@/components/site-header";
import { EnhancedFooter } from "@/components/enhanced-footer";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useBuilderStore } from '@/lib/stores/builder-store';
import { Sparkles, Zap, Code, ArrowRight, Shield, Layout, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LandingPage() {
    const { setShowLanding, setMode } = useBuilderStore();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    const handleStart = () => {
        setShowLanding(false);
        setMode('ai');
    };

    return (
        <div ref={containerRef} className="min-h-screen w-full bg-[#0a0a0f] text-white flex flex-col font-sans selection:bg-violet-500/30 overflow-x-hidden">

            {/* --- Navbar --- */}
            <div className="fixed top-0 w-full z-50">
                <SiteHeader />
            </div>

            {/* --- Hero Section --- */}
            <main className="pt-32 pb-20 relative z-10 px-4 md:px-0">
                {/* Background Blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[4s]"></div>
                    <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-[5s]"></div>
                </div>

                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-violet-300 backdrop-blur-md mb-6 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-violet-400 animate-pulse"></span>
                        <span>v4.0 is here: Full AI Code Steaming</span>
                        <ChevronRight size={14} className="text-violet-400" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.1] md:leading-[1.1]"
                    >
                        Build software <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 animate-gradient-x p-2">
                            at the speed of thought.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Describe your dream website and watch as our V4 Engine writes clean, production-ready React code in real-time. No drag-and-drop required (unless you want to).
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
                    >
                        <Button
                            onClick={handleStart}
                            size="lg"
                            className="h-14 px-8 text-lg rounded-full bg-white text-black hover:bg-slate-200 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                        >
                            Start Building Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-14 px-8 text-lg rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md transition-all flex items-center gap-2 group"
                        >
                            View Demo <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">▶</span>
                        </Button>
                    </motion.div>
                </div>
            </main>

            {/* --- Features Grid (Bento Style) --- */}
            <section className="py-24 relative z-10 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <BentoCard
                            title="Instant Generation"
                            desc="From prompt to fully functional app in seconds. Our LLM understands context, design systems, and modern React patterns."
                            icon={<Zap className="text-amber-400" size={24} />}
                            className="md:col-span-2 bg-gradient-to-br from-violet-900/10 to-transparent"
                        />
                        <BentoCard
                            title="Clean Code Export"
                            desc="No vendor lock-in. Get standard React, Tailwind, and Framer Motion code that you can deploy anywhere."
                            icon={<Code className="text-cyan-400" size={24} />}
                        />
                        <BentoCard
                            title="Interactive Preview"
                            desc="Real-time, responsive sandbox that updates as the AI types. Test mobile layouts instantly."
                            icon={<Layout className="text-pink-400" size={24} />}
                        />
                        <BentoCard
                            title="Enterprise Security"
                            desc="Your data is encrypted and safe. SOC2 Compliant infrastructure."
                            icon={<Shield className="text-emerald-400" size={24} />}
                            className="md:col-span-2 bg-gradient-to-br from-indigo-900/10 to-transparent"
                        />
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="py-32 relative z-10 px-6">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent pointer-events-none"></div>
                <div className="max-w-5xl mx-auto bg-[#1a1a20]/50 border border-white/10 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden backdrop-blur-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-indigo-500/10"></div>
                    {/* Glow behind button */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-500/20 blur-[100px] rounded-full pointing-events-none"></div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">Ready to build the future?</h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto relative z-10">
                        Join 50,000+ developers building with Builder.ai today. No credit card required.
                    </p>
                    <div className="relative z-10">
                        <Button
                            onClick={handleStart}
                            size="lg"
                            className="h-14 px-10 text-lg rounded-full bg-violet-600 hover:bg-violet-500 text-white transition-all hover:scale-105 shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                        >
                            Get Started for Free
                        </Button>
                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <EnhancedFooter />
        </div>
    );
}

function BentoCard({ title, desc, icon, className = "" }: { title: string, desc: string, icon: any, className?: string }) {
    return (
        <div className={`p - 8 rounded - 3xl bg - [#111116] border border - white / 5 hover: border - white / 10 transition - colors group ${className} `}>
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-slate-400 leading-relaxed">{desc}</p>
        </div>
    )
}

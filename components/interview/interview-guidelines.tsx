'use client';

import { motion } from 'framer-motion';
import { Shield, Brain, Zap, Clock, Mic, CheckCircle, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { AuroraBackground } from '@/components/aurora-background';

export function InterviewGuidelines() {
    const sections = [
        {
            title: "Zero-Click Flow",
            icon: <Zap className="w-6 h-6 text-yellow-400" />,
            content: "The interview is autonomous. After you speak, the AI will analyze your silence and respond automatically. No buttons needed."
        },
        {
            title: "Pro Analysis",
            icon: <Brain className="w-6 h-6 text-purple-400" />,
            content: "We track 50+ data points including sentiment, pace, and clarity using our Neural Engine. Be natural."
        },
        {
            title: "Live Coaching",
            icon: <Mic className="w-6 h-6 text-cyan-400" />,
            content: "The HUD will provide real-time hints if you are speaking too fast or too quiet. Keep an eye on the side panel."
        }
    ];

    return (
        <AuroraBackground className="bg-black">
            <div className="relative z-10 w-full min-h-screen p-6 md:p-12 flex flex-col items-center justify-center">
                <div className="max-w-5xl mx-auto w-full">
                    <header className="mb-16 text-center md:text-left">
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono mb-6 text-cyan-300 backdrop-blur-sm"
                        >
                            <BookOpen className="w-3 h-3" /> FLIGHT MANUAL v2.0
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white"
                        >
                            Guidelines
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-white/60 max-w-2xl leading-relaxed mx-auto md:mx-0"
                        >
                            Master the interface before you begin. This system is designed to simulate a high-pressure technical environment.
                        </motion.p>
                    </header>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {sections.map((s, i) => (
                            <motion.div 
                                key={i}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5 group-hover:border-white/10">
                                    {s.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{s.content}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-end">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="space-y-8"
                        >
                            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                <Shield className="w-6 h-6 text-green-400" /> Protocol Checklist
                            </h2>
                            <div className="space-y-4">
                                {[
                                    "Ensure camera has a clear line of sight.",
                                    "Use headphones for optimal audio isolation.",
                                    "Speak clearly; the system is sensitive to muttering.",
                                    "Do not switch tabs; focus tracking is active."
                                ].map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.7 + (i * 0.1) }}
                                        className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                            <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                                        </div>
                                        <span className="text-white/80 font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex justify-end"
                        >
                            <Link href="/interview/config" className="w-full md:w-auto">
                                <button className="w-full md:w-auto flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-white/10 group">
                                    PROCEED TO SETUP <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </AuroraBackground>
    );
}

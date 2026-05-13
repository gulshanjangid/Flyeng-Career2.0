
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

interface CoursesHeroProps {
    onStartLearning: () => void;
    onViewCurriculum: () => void;
}

export function CoursesHero({ onStartLearning, onViewCurriculum }: CoursesHeroProps) {
    return (
        <div className="h-[80vh] md:h-[40rem] w-full rounded-md flex md:items-center md:justify-center dark:bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="rgb(6, 182, 212)" // Cyan-500
            />
            
            <div className="absolute inset-0 bg-black/[0.96] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />

            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="flex justify-center mb-8"
                >
                    <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3 shadow-lg hover:bg-white/10 transition-colors cursor-default">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
                        <span className="text-[10px] font-medium text-zinc-300 tracking-widest uppercase">
                            THE ENGINEERING STANDARD
                        </span>
                    </div>
                </motion.div>

                <h1 className="text-4xl md:text-8xl font-black text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-4 tracking-tighter shadow-2xl">
                    Master the Art of <br /> <span className="text-cyan-400/90 drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">ENGINEERING</span>
                </h1>
                
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto leading-relaxed">
                    The premier platform for ambitious developers to architect distributed systems and production-grade software.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="flex justify-center gap-4 mt-10"
                >
                    <button 
                        onClick={onStartLearning}
                        className="px-6 md:px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all rounded shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95 flex items-center gap-2"
                    >
                        Start Learning <ArrowRight className="w-4 h-4" />
                    </button>
                    <button 
                        onClick={onViewCurriculum}
                        className="px-6 md:px-8 py-3 bg-black border border-zinc-800 text-white font-bold uppercase tracking-widest text-xs hover:bg-zinc-900 transition-all rounded flex items-center gap-2 hover:border-zinc-700 active:scale-95 shadow-lg"
                    >
                        <Code2 className="w-4 h-4 text-cyan-500" /> View Curriculum
                    </button>
                </motion.div>
            </div>
        </div>
    );
}

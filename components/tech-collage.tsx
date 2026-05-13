"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
    FileJson, Palette, FileDigit, Atom, Triangle, 
    Server, Hexagon, Database, TableProperties, 
    Sparkles, BrainCircuit, Wand2, Blocks, Code2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["500", "700"] });

type TechNode = {
    id: string;
    label: string;
    category: string;
    icon: React.ReactNode;
    color: string;
    description: string;
};

// Split into two rows for the marquee
const ROW_1: TechNode[] = [
    { id: "html", label: "HTML5", category: "Foundation", icon: <FileJson className="w-10 h-10" />, color: "text-orange-400 bg-orange-400/10 border-orange-400/30 shadow-[0_0_30px_-10px_rgba(251,146,60,0.3)]", description: "The skeleton of the web. Semantic, accessible structure." },
    { id: "css", label: "CSS3", category: "Foundation", icon: <Palette className="w-10 h-10" />, color: "text-blue-400 bg-blue-400/10 border-blue-400/30 shadow-[0_0_30px_-10px_rgba(96,165,250,0.3)]", description: "Styling, layouts, and animations. Pixel-perfect magic." },
    { id: "js", label: "JavaScript", category: "Foundation", icon: <FileDigit className="w-10 h-10" />, color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30 shadow-[0_0_30px_-10px_rgba(250,204,21,0.3)]", description: "The engine. Logic, interactivity, and DOM manipulation." },
    { id: "react", label: "React.js", category: "Frontend", icon: <Atom className="w-10 h-10" />, color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30 shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)]", description: "Component-driven UIs. The industry standard framework." },
    { id: "next", label: "Next.js", category: "Frontend", icon: <Triangle className="w-10 h-10" />, color: "text-slate-100 bg-slate-100/10 border-slate-100/30 shadow-[0_0_30px_-10px_rgba(241,245,249,0.3)]", description: "The React meta-framework. SSR, SSG, and API routes." },
    { id: "node", label: "Node.js", category: "Backend", icon: <Hexagon className="w-10 h-10" />, color: "text-green-500 bg-green-500/10 border-green-500/30 shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)]", description: "JavaScript on the server. Fast, scalable runtime." },
];

const ROW_2: TechNode[] = [
    { id: "express", label: "Express.js", category: "Backend", icon: <Server className="w-10 h-10" />, color: "text-slate-400 bg-slate-400/10 border-slate-400/30 shadow-[0_0_30px_-10px_rgba(148,163,184,0.3)]", description: "Minimalist web framework for building APIs." },
    { id: "mongo", label: "MongoDB", category: "Database", icon: <Database className="w-10 h-10" />, color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30 shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]", description: "NoSQL document database. Flexible and scalable." },
    { id: "mysql", label: "MySQL", category: "Database", icon: <TableProperties className="w-10 h-10" />, color: "text-blue-500 bg-blue-500/10 border-blue-500/30 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]", description: "Relational data modeling. ACID compliant power." },
    { id: "genai", label: "GenAI Apps", category: "Modern Era", icon: <BrainCircuit className="w-10 h-10" />, color: "text-fuchsia-500 bg-fuchsia-500/10 border-fuchsia-500/30 shadow-[0_0_30px_-10px_rgba(217,70,239,0.3)]", description: "Integrating LLMs, RAG, and AI agents into web apps." },
    { id: "vibe", label: "Vibe Coding", category: "Modern Era", icon: <Wand2 className="w-10 h-10" />, color: "text-purple-400 bg-purple-400/10 border-purple-400/30 shadow-[0_0_30px_-10px_rgba(192,132,252,0.3)]", description: "Coding at the speed of thought using AI co-pilots." },
    { id: "nocode", label: "Low-Code", category: "Modern Era", icon: <Blocks className="w-10 h-10" />, color: "text-pink-400 bg-pink-400/10 border-pink-400/30 shadow-[0_0_30px_-10px_rgba(244,114,182,0.3)]", description: "Visual builders for rapid MVP deployment." },
];

const ROW_3 = [...ROW_1].reverse();
const ROW_4 = [...ROW_2].reverse();

function CollageRow({ data, direction, offsetHover = false }: { data: TechNode[], direction: 'left' | 'right', offsetHover?: boolean }) {
    return (
        <div className={cn(
            "flex w-max shrink-0 gap-6 transition-transform hover:[animation-play-state:paused]",
            direction === 'left' ? "animate-marquee-left" : "animate-marquee-right"
        )}>
            {/* We duplicate the array 4 times to ensure infinite scroll fills wide screens even when angled */}
            {[...data, ...data, ...data, ...data].map((tech, i) => (
                <div 
                    key={`${tech.id}-${i}`}
                    className="flex flex-col shrink-0 w-[420px] h-[220px] p-8 rounded-[2rem] backdrop-blur-md border border-white/5 bg-[#12121a]/80 transition-all duration-700 ease-out group cursor-default hover:-translate-y-16 hover:-translate-x-16 hover:bg-[#1a1a24] hover:shadow-[50px_50px_100px_-20px_rgba(0,0,0,0.8)] relative"
                >
                    {/* Glowing highlight that traces the top-left edge for 3D depth */}
                    <div className="absolute inset-0 border-t-2 border-l-2 border-white/5 rounded-[2rem] pointer-events-none group-hover:border-white/20 transition-colors duration-500" />
                    
                    {/* Card Accent Glow */}
                    <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl", tech.color.split(' ')[1])} />
                    
                    <div className="flex items-center gap-5 mb-6 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-4 origin-left">
                        <div className={cn("p-4 rounded-2xl border shadow-inner", tech.color)}>
                            {tech.icon}
                        </div>
                        <div>
                            <span className="text-[11px] uppercase font-bold tracking-widest text-slate-500 block mb-1">
                                {tech.category}
                            </span>
                            <strong className={cn("text-2xl font-bold text-white", quicksand.className)}>
                                {tech.label}
                            </strong>
                        </div>
                    </div>
                    <p className="text-slate-400 font-medium text-[15px] leading-relaxed relative z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500 group-hover:translate-x-2">
                        {tech.description}
                    </p>
                </div>
            ))}
        </div>
    );
}

export function TechCollage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
    
    // Parallax on the central glow based on scroll
    const yGlow = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <div 
            ref={containerRef}
            className="relative w-full overflow-hidden bg-[#0a0a0f] py-40 md:py-56 flex items-center justify-center border-y border-white/5"
            style={{ perspective: "1500px" }}
        >
            {/* Ambient Lighting Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06),transparent_60%)] pointer-events-none" />
            
            {/* Central Glow tracking scroll */}
            <motion.div 
                style={{ y: yGlow }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none z-0" 
            />

            {/* The Isometric Grid Wrapper */}
            <div 
                className="relative w-[200vw] md:w-[150vw] flex flex-col gap-6 items-center justify-center pointer-events-auto z-10"
                style={{ 
                    transform: "rotateX(55deg) rotateZ(-35deg) rotateY(0deg) scale(1)",
                    transformStyle: "preserve-3d" 
                }}
            >
                {/* 4 Scrolling Rows for depth */}
                <CollageRow data={ROW_1} direction="left" />
                <CollageRow data={ROW_2} direction="right" />
                <CollageRow data={ROW_3} direction="left" />
                <CollageRow data={ROW_4} direction="right" />
            </div>

            {/* Fades around ALL edges to blend the jagged isometric grid into the website organically */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a0a0f] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent z-20 pointer-events-none" />

            {/* Title Overlay in the literal center of the screen, completely immune to the 3D grid */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                <div className="text-center bg-[#0a0a0f]/50 backdrop-blur-[32px] px-12 py-10 rounded-[4rem] border border-white/5 shadow-[0_0_150px_rgba(0,0,0,1)] flex flex-col items-center pointer-events-auto z-50">
                    <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner ring-1 ring-white/10">
                        <Code2 className="w-10 h-10 text-white" />
                    </div>
                    <h2 className={cn("text-4xl md:text-6xl font-black tracking-tight text-white mb-4 drop-shadow-2xl", quicksand.className)}>
                        The Modern Stack
                    </h2>
                    <p className="text-slate-300 max-w-sm font-medium text-lg lg:text-xl drop-shadow-lg">
                        Master the tools that power today's best digital products.
                    </p>
                </div>
            </div>

            {/* Global animations for scrolling. Because the grid is wide, we calculate offsets based on repeating patterns */}
            <style jsx global>{`
                @keyframes marquee-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-25% - 1.5rem)); } 
                }
                @keyframes marquee-right {
                    0% { transform: translateX(calc(-25% - 1.5rem)); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee-left {
                    animation: marquee-left 40s linear infinite;
                }
                .animate-marquee-right {
                    animation: marquee-right 40s linear infinite;
                }
            `}</style>
        </div>
    );
}

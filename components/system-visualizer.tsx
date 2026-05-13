"use client";

import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"
import { FileText, Cpu, User, Globe, Rocket, X } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils";

// Data for the nodes
const DEMO_DATA = {
    "architect": {
        title: "RESUME PARSING",
        subtitle: "Deep Analysis",
        icon: FileText,
        color: "indigo",
        services: ["PDF/Docx Parsing", "Entity Extraction"],
    },
    "analyze": {
        title: "SKILL INSIGHTS",
        subtitle: "Gap Detection",
        icon: Cpu,
        color: "purple",
        services: ["Gap Analysis", "Skill Scoring"],
    },
    "match": {
        title: "JOB MATCHING",
        subtitle: "Market Fit",
        icon: Globe,
        color: "pink",
        services: ["Job Scraper", "Culture Fit AI"],
    },
    "prepare": {
        title: "INTERVIEW COACH",
        subtitle: "AI Simulation",
        icon: Rocket,
        color: "emerald",
        services: ["Voice Analysis", "Calibration"],
    },
    "user": {
        title: "YOU",
        subtitle: "Central Profile",
        icon: User,
        color: "white",
        services: ["Session State", "Progress"],
    }
};

/* --- MAIN COMPONENT --- */

export function SystemVisualizer({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const [activeStage, setActiveStage] = useState<number>(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    // Gentle Auto-Cycle
    useEffect(() => {
        if (!open) return;
        const interval = setInterval(() => {
            setActiveStage(prev => (prev + 1) % 5); 
        }, 2500); // 2.5s cycle - good balance
        return () => clearInterval(interval);
    }, [open]);

    if (!mounted) return <>{children}</>;

    const isActive = (nodeKey: string) => {
        const map: Record<string, number> = { 'architect': 1, 'analyze': 2, 'match': 3, 'prepare': 4 };
        return map[nodeKey] === activeStage;
    };
    
    const isCoreActive = true; 

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div className="inline-flex cursor-pointer">{children}</div>
            </DialogTrigger>
            
            <DialogContent showCloseButton={false} className="max-w-none w-[95vw] lg:w-[90vw] lg:max-w-6xl h-[85vh] sm:h-[80vh] bg-zinc-950 text-white p-0 overflow-hidden shadow-2xl border border-white/5 outline-none rounded-3xl z-[100] flex flex-col items-center justify-center">
                
                {/* Floating Close Button - Minimalist */}
                <div className="absolute top-8 right-8 z-50">
                    <DialogClose className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all duration-300 backdrop-blur-sm border border-white/5">
                        <X className="w-5 h-5" />
                    </DialogClose>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 w-full relative flex items-center justify-center overflow-hidden bg-zinc-950 font-sans">
                    
                    {/* Background: Elegant Void */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-zinc-950/50 to-zinc-950 pointer-events-none" />
                    
                    {/* Subtle Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

                    {/* DIAGRAM AREA */}
                    <div className="w-full h-full relative flex items-center justify-center p-8 z-10">
                        
                        {/* Mobile: Simple Vertical Stack */}
                        <div className="lg:hidden flex flex-col gap-6 w-full max-w-xs shrink-0 items-center">
                            <MobileNode id="user" data={DEMO_DATA.user} active={isCoreActive} isCore />
                            <div className="grid grid-cols-2 gap-4 w-full">
                                <MobileNode id="architect" data={DEMO_DATA.architect} active={isActive('architect')} />
                                <MobileNode id="analyze" data={DEMO_DATA.analyze} active={isActive('analyze')} />
                                <MobileNode id="match" data={DEMO_DATA.match} active={isActive('match')} />
                                <MobileNode id="prepare" data={DEMO_DATA.prepare} active={isActive('prepare')} />
                            </div>
                        </div>

                        {/* Desktop: Radial Diagram */}
                        <div className="hidden lg:block relative w-full h-full max-w-4xl max-h-[500px] shrink-0">
                            {/* SVG Connections */}
                            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                                {/* Ecosystem Ring - 28% radius to fit inside nodes */}
                                <circle cx="50%" cy="50%" r="28%" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.05" strokeDasharray="4 4" />
                                
                                <ConnectionPath x1="50%" y1="50%" x2="18%" y2="18%" color="#6366f1" active={isActive('architect')} label="Extract" />
                                <ConnectionPath x1="50%" y1="50%" x2="82%" y2="18%" color="#8b5cf6" active={isActive('analyze')} label="Analyze" />
                                <ConnectionPath x1="50%" y1="50%" x2="18%" y2="82%" color="#ec4899" active={isActive('match')} label="Match" />
                                <ConnectionPath x1="50%" y1="50%" x2="82%" y2="82%" color="#10b981" active={isActive('prepare')} label="Prepare" />
                            </svg>

                            {/* Center Node */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <DesktopNode id="user" data={DEMO_DATA.user} active={isCoreActive} isCore />
                            </div>

                            {/* Peripheral Nodes - Using Inline Styles for Reliability */}
                            {/* Top Left */}
                            <div className="absolute z-20 -translate-x-1/2 -translate-y-1/2" style={{ top: '18%', left: '18%' }}>
                                <DesktopNode id="architect" data={DEMO_DATA.architect} active={isActive('architect')} />
                            </div>
                            
                            {/* Top Right */}
                            <div className="absolute z-20 translate-x-1/2 -translate-y-1/2" style={{ top: '18%', right: '18%' }}>
                                <DesktopNode id="analyze" data={DEMO_DATA.analyze} active={isActive('analyze')} />
                            </div>
                            
                            {/* Bottom Left */}
                            <div className="absolute z-20 -translate-x-1/2 translate-y-1/2" style={{ bottom: '18%', left: '18%' }}>
                                <DesktopNode id="match" data={DEMO_DATA.match} active={isActive('match')} />
                            </div>
                            
                            {/* Bottom Right */}
                            <div className="absolute z-20 translate-x-1/2 translate-y-1/2" style={{ bottom: '18%', right: '18%' }}>
                                <DesktopNode id="prepare" data={DEMO_DATA.prepare} active={isActive('prepare')} />
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

/* --- SUB-COMPONENTS --- */

function MobileNode({ id, data, active, isCore = false }: any) {
    const Icon = data.icon;
    return (
        <div className={cn(
            "relative p-4 rounded-xl border backdrop-blur-xl transition-all duration-1000",
            active 
                ? `border-${data.color}-500/30 bg-${data.color}-500/10` 
                : "border-white/5 bg-white/5",
            isCore ? "w-20 h-20 rounded-full flex items-center justify-center border-white/10" : "flex flex-col items-center justify-center w-full aspect-square"
        )}>
             <Icon className={cn(
                 "transition-colors duration-1000 mb-2",
                 active ? `text-${data.color}-400` : "text-white/30",
                 isCore ? "w-8 h-8" : "w-6 h-6"
             )} />
             {!isCore && <span className="text-[9px] font-medium text-white/60 tracking-wider text-center">{data.title}</span>}
        </div>
    )
}

function DesktopNode({ id, data, active, isCore = false }: any) {
    const Icon = data.icon;
    const size = isCore ? "w-44 h-44" : "w-32 h-32"; 
    
    return (
        <motion.div
            animate={{ 
                scale: active ? 1.05 : 1,
                opacity: active || isCore ? 1 : 0.5 
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className={cn(
                "relative flex flex-col items-center justify-center border transition-colors duration-1000 backdrop-blur-3xl shadow-2xl",
                isCore ? "rounded-full aspect-square border-white/10 bg-zinc-950/80" : "rounded-3xl aspect-square border-white/5 bg-zinc-950/80", 
                size,
                active ? `border-${data.color}-500/30 bg-zinc-950/95` : "hover:bg-zinc-950/90"
            )}
        >
             {/* Glow */}
             {active && (
                 <div className={cn("absolute inset-0 rounded-[inherit] opacity-20 blur-xl transition-all duration-1000", `bg-${data.color}-500`)} />
             )}

            {/* Icon */}
            <div className="relative z-10 flex flex-col items-center">
                <Icon className={cn(
                    "transition-all duration-1000 mb-3",
                    isCore ? "w-10 h-10" : "w-8 h-8",
                    active ? `text-${data.color}-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]` : "text-white/20"
                )} />

                <div className={cn(
                    "text-center transition-all duration-1000",
                    active ? "opacity-100 translate-y-0" : "opacity-40 translate-y-1"
                )}>
                    <div className="text-[10px] font-medium text-white tracking-widest uppercase">{data.title}</div>
                    <div className="text-[9px] text-white/40 font-light mt-1 tracking-wide uppercase">{data.subtitle}</div>
                </div>
            </div>
            
             {/* Core Pulse */}
             {isCore && (
                <div className="absolute -inset-4 rounded-full border border-white/5 animate-[spin_10s_linear_infinite_reverse] opacity-30" />
             )}
        </motion.div>
    )
}

function ConnectionPath({ x1, y1, x2, y2, color, active, label }: any) {
    return (
        <g>
            <motion.line
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="white"
                strokeWidth={1}
                strokeOpacity={0.03}
            />
            
            <motion.line
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={active ? color : "transparent"}
                strokeWidth={active ? 1.5 : 0}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: active ? 1 : 0, opacity: active ? 0.6 : 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            {active && (
                <motion.circle
                    r="2"
                    fill={color}
                    filter={`drop-shadow(0 0 4px ${color})`}
                    initial={{ cx: x1, cy: y1 }}
                    animate={{ cx: x2, cy: y2 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.2
                    }}
                />
            )}
            
             {label && active && (
                <foreignObject x="0" y="0" width="100%" height="100%" style={{ overflow: 'visible', pointerEvents: 'none' }}>
                    {(() => {
                        const parse = (s: string) => parseFloat(s);
                        const mx = (parse(x1 as string) + parse(x2 as string)) / 2 + "%";
                        const my = (parse(y1 as string) + parse(y2 as string)) / 2 + "%";
                        
                        return (
                             <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                style={{ 
                                    position: 'absolute', 
                                    left: mx, 
                                    top: my, 
                                    transform: 'translate(-50%, -50%)',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                <span className={cn(
                                    "px-2 py-1 rounded-full backdrop-blur-md uppercase tracking-[0.15em] text-[8px] font-medium border border-white/5",
                                    `bg-zinc-950/50 text-${color}-300 shadow-lg`
                                )}>
                                    {label}
                                </span>
                            </motion.div>
                        );
                    })()}
                </foreignObject>
            )}
        </g>
    )
}

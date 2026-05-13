"use client"

import { NeonGridBackground } from "@/components/neon-grid-background"
import { SiteHeader } from "@/components/site-header"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Activity, Zap, TrendingUp, Cpu, Binary, CheckCircle, XCircle, Clock, ShieldAlert, PieChart, Layers, Server, Code2, Database, Smartphone, Shield, Cloud, Bot, ArrowUpRight, X, Target, BrainCircuit, ScanLine, Radar, Flame } from "lucide-react"
import { cn } from "@/lib/utils"
import { Oswald, Inter, JetBrains_Mono } from "next/font/google"
import { useState, useMemo, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { trends, Trend } from "../data/trends"

const mono = JetBrains_Mono({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["500", "700"] });
const inter = Inter({ subsets: ["latin"] });

const CATEGORIES = ["All", "Agentic Tech", "AI/ML", "Frontend", "Backend", "Fullstack", "Data", "Infra/DevOps", "Mobile", "Security", "Web3/Crypto", "Game Dev", "Low/No Code", "Emerging"];

const AVAILABLE_SKILLS = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue/Nuxt", "Node.js", "Python", 
    "SQL", "NoSQL", "PostgreSQL", "AWS", "Docker", "Kubernetes", "Go", "C#", "C++", 
    "Java", "Rust", "Swift/Kotlin", "PHP", "Ruby", "Terraform", "GraphQL"
];

// Generate stats based on actual user skills overlap
const calculateProfileStats = (trend: Trend, userSkills: string[]) => {
    if (userSkills.length === 0) return { matchScore: 12, skillGap: 180 };

    let overlap = 0;
    const trendTechLower = trend.keyTech.map(t => t.toLowerCase());
    
    userSkills.forEach(skill => {
        const sLower = skill.toLowerCase();
        if (trendTechLower.some(t => t.includes(sLower) || sLower.includes(t))) {
            overlap++;
        }
    });

    // Special weighting bonuses
    if ((trend.category === "Agentic Tech" || trend.category === "AI/ML") && userSkills.includes("Python")) {
        overlap += 0.5;
    }
    if (trend.id === "nextjs-react" && userSkills.includes("React")) {
        overlap += 1;
    }

    let hash = 0;
    for (let i = 0; i < trend.id.length; i++) hash = trend.id.charCodeAt(i) + ((hash << 5) - hash);
    const noise = Math.abs(hash) % 12; // 0-11 variance to make numbers look organic/computed

    const maxOverlapRequired = 2.5; // Knowing 2-3 core skills = high match
    const ratio = Math.min(overlap / maxOverlapRequired, 1);

    if (overlap === 0) {
        return { matchScore: 12 + noise, skillGap: 120 + noise * 2 };
    }

    const matchScore = Math.floor(20 + (ratio * 65) + noise); // Max ~96
    const skillGap = Math.floor(120 - (ratio * 90) - noise); // Min ~18

    return { 
        matchScore: Math.min(matchScore, 99), 
        skillGap: Math.max(skillGap, 7) 
    };
}

export default function TrendHunterToolPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedTrend, setSelectedTrend] = useState<Trend | null>(null);
    const [userSkills, setUserSkills] = useState<string[]>(["React", "TypeScript", "Node.js"]);
    const [customSkill, setCustomSkill] = useState("");

    const toggleSkill = (skill: string) => {
        setUserSkills(prev => 
            prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
        );
    };

    const handleAddCustomSkill = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        const trimmed = customSkill.trim();
        if (trimmed && !userSkills.includes(trimmed)) {
            setUserSkills(prev => [...prev, trimmed]);
        }
        setCustomSkill("");
    };

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedTrend) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
             document.body.style.overflow = 'unset';
        };
    }, [selectedTrend]);

    const filteredTrends = useMemo(() => {
        return trends.filter(t => {
            const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  t.keyTech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesCategory = activeCategory === "All" || t.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory]);

    return (
        <NeonGridBackground className="min-h-screen font-sans text-slate-950 flex flex-col bg-[#030712] relative overflow-x-hidden">
            <SiteHeader />

            <div className="pt-24 pb-20 w-full mx-auto px-2 sm:px-4 md:px-8 max-w-[1100px] z-10 flex-1 relative">
                
                {/* --- HEADER & FILTERS --- */}
                <div className="mb-12 flex flex-col items-center justify-center text-center gap-6 relative z-10">
                    
                    {/* Personalized Greeting Array */}
                     <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="border-cyan-500/50 text-cyan-400 bg-cyan-500/10 font-mono text-[10px] uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.2)] px-3 py-1 rounded-full">
                            <BrainCircuit className="w-3.5 h-3.5 mr-2 animate-pulse" /> Neural Sync Active
                        </Badge>
                    </div>

                    <h1 className={cn("text-4xl sm:text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-700 tracking-tighter drop-shadow-xl mb-2 leading-tight", oswald.className)}>
                        YOUR PORTFOLIO, <br className="md:hidden" /><span className="text-cyan-400 font-sans tracking-wide">HYPER-OPTIMIZED.</span>
                    </h1>
                    
                    <p className="text-slate-400 text-base sm:text-lg font-light max-w-2xl leading-relaxed mx-auto px-4">
                        Welcome back. We've updated your telemetry based on your last session. Track everything from foundational stacks to the absolute bleeding edge like <strong>Agentic Swarms</strong> and <strong>Vibe Coding</strong>.
                    </p>

                    <div className="w-full max-w-2xl mt-4 relative group px-4">
                        <div className="absolute inset-4 -inset-y-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-cyan-500 w-5 h-5" />
                            <Input 
                                placeholder="Search 'Agentic AI', 'MCP', 'Rust'..." 
                                className="bg-slate-950/80 border-slate-700/50 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 pl-14 pr-6 text-white font-mono text-sm md:text-base h-14 md:h-16 rounded-2xl shadow-2xl backdrop-blur-xl transition-all w-full"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* SKILL SELECTOR (NEW) */}
                    <div className="w-full max-w-4xl mt-6 px-4">
                        <div className="flex flex-col md:flex-row items-center gap-4 justify-center bg-slate-950/40 p-3 sm:p-2 rounded-2xl border border-slate-800/80 backdrop-blur-xl shadow-inner">
                            <div className="text-[10px] whitespace-nowrap md:text-[11px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2 pl-2">
                                <Target className="w-4 h-4 text-cyan-500 animate-pulse" /> Your Arsenal:
                            </div>
                            
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 flex-1">
                                {/* All default AND any custom skills added userSkills that aren't in defaults */}
                                {Array.from(new Set([...AVAILABLE_SKILLS, ...userSkills])).map(skill => {
                                    const isSelected = userSkills.includes(skill);
                                    return (
                                        <button
                                            key={skill}
                                            onClick={() => toggleSkill(skill)}
                                            className={cn(
                                                "px-3 py-1.5 rounded-xl font-mono text-[10px] md:text-xs transition-all duration-300 border backdrop-blur-md",
                                                isSelected 
                                                    ? "bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border-cyan-500/50 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.25)] ring-1 ring-cyan-500/20" 
                                                    : "bg-slate-900/50 border-slate-800/60 text-slate-500 hover:border-slate-600 hover:text-slate-300 hover:bg-slate-800"
                                            )}
                                        >
                                            {skill}
                                        </button>
                                    )
                                })}

                                {/* Custom Skill Input */}
                                <form onSubmit={handleAddCustomSkill} className="flex items-center gap-1 ml-1 h-full">
                                    <input 
                                        type="text"
                                        placeholder="+ Custom tech..."
                                        value={customSkill}
                                        onChange={(e) => setCustomSkill(e.target.value)}
                                        className="bg-slate-900/50 border border-slate-800/80 focus:border-cyan-500/50 text-slate-300 placeholder:text-slate-600 rounded-lg px-2 h-7 md:h-8 text-[10px] md:text-xs font-mono outline-none focus:ring-1 focus:ring-cyan-500/20 w-28 md:w-32 transition-all"
                                    />
                                    <button 
                                        type="submit"
                                        className="bg-slate-800 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 border border-slate-700 hover:border-cyan-500/50 rounded-lg h-7 md:h-8 px-2 flex items-center justify-center transition-all"
                                    >
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- CATEGORY PILLS --- */}
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 pb-4 relative z-10 w-full max-w-5xl mx-auto scrollbar-hide px-2">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-mono text-[10px] sm:text-[11px] tracking-widest uppercase transition-all duration-300 whitespace-nowrap",
                                activeCategory === cat
                                    ? "bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(34,211,238,0.4)] border border-cyan-400 scale-105"
                                    : "bg-slate-900/60 backdrop-blur-md text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-slate-200"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* --- SINGLE COLUMN LIST VIEW --- */}
                {filteredTrends.length > 0 ? (
                    <div className="flex flex-col gap-6 relative z-10 w-full">
                        <AnimatePresence mode="popLayout">
                            {filteredTrends.map((trend, i) => {
                                const { matchScore, skillGap } = calculateProfileStats(trend, userSkills);
                                return (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, delay: Math.min(i * 0.05, 0.3) }}
                                    key={trend.id}
                                    onClick={() => setSelectedTrend(trend)}
                                    className="group relative bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-800/80 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(8,145,178,0.15)] cursor-pointer flex flex-col items-stretch"
                                >
                                     {/* Side Color Glow */}
                                     {trend.status === 'Hyper' && <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700 pointer-events-none" />}

                                    <div className="p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 relative z-10 w-full justify-between items-start lg:items-center">
                                        
                                        {/* 1. Identity & Core Info */}
                                        <div className="flex items-start gap-4 sm:gap-6 flex-1 max-w-2xl w-full">
                                            <div className={cn("p-4 rounded-2xl flex items-center justify-center shrink-0 shadow-inner", 
                                                trend.status === "Hyper" ? "bg-gradient-to-br from-purple-900/40 to-black text-purple-400 border border-purple-500/30 group-hover:border-purple-400" : 
                                                trend.status === "Explosive" ? "bg-gradient-to-br from-cyan-900/40 to-black text-cyan-400 border border-cyan-500/30 group-hover:border-cyan-400" : 
                                                trend.status === "Growing" ? "bg-gradient-to-br from-emerald-900/40 to-black text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-400" :
                                                "bg-slate-900/80 text-slate-300 border border-slate-700/50"
                                            )}>
                                                <div className="[&>svg]:w-7 sm:[&>svg]:w-9 [&>svg]:h-7 sm:[&>svg]:h-9">{trend.icon}</div>
                                            </div>
                                            
                                            <div className="flex-1 min-w-0">
                                                <div className="flex gap-2 items-center mb-1.5 flex-wrap">
                                                    <span className="text-[10px] md:text-xs font-mono tracking-widest text-slate-400 uppercase bg-slate-800/50 px-2 py-0.5 rounded border border-slate-700/50">{trend.category}</span>
                                                    {trend.status === "Hyper" && <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 max-w-fit"><Flame className="w-3 h-3"/> HOT</span>}
                                                </div>
                                                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-cyan-100 transition-colors truncate">
                                                    {trend.name}
                                                </h3>
                                                <p className="text-sm text-slate-500 mt-2 line-clamp-1 group-hover:line-clamp-2 transition-all duration-300 hidden sm:block">
                                                    {trend.description}
                                                </p>
                                                
                                                <div className="flex items-center gap-2 mt-4 flex-wrap">
                                                    {trend.keyTech.slice(0, 3).map(tech => (
                                                        <span key={tech} className="px-2.5 py-1 rounded bg-black/60 text-[10px] sm:text-[11px] text-slate-300 border border-slate-700/50 shadow-sm truncate">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {trend.keyTech.length > 3 && (
                                                        <span className="px-2.5 py-1 rounded bg-slate-800/30 text-[10px] sm:text-[11px] text-slate-400 font-mono">
                                                            +{trend.keyTech.length - 3}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* 2. Personalized Intel / Metrics */}
                                        <div className="flex flex-row flex-wrap lg:flex-nowrap lg:flex-row items-center gap-4 sm:gap-6 w-full lg:w-auto mt-2 lg:mt-0 relative before:absolute lg:before:content-[''] lg:before:-left-4 lg:before:top-0 lg:before:bottom-0 lg:before:w-px lg:before:bg-slate-800/60">
                                            
                                            <div className="flex flex-col gap-1 w-[45%] lg:w-[130px]">
                                                <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase flex items-center gap-1">
                                                    <Target className="w-3 h-3 text-cyan-500/70" /> Profile Match
                                                </div>
                                                <div className="flex items-center gap-2 mt-0.5">
                                                    <div className={cn("text-xl md:text-2xl font-black font-mono tracking-wider", matchScore > 85 ? "text-cyan-400" : matchScore > 75 ? "text-emerald-400" : "text-yellow-400")}>
                                                        {matchScore}%
                                                    </div>
                                                </div>
                                                <div className="w-full h-1 bg-slate-800 rounded-full mt-1 overflow-hidden">
                                                    <div className={cn("h-full rounded-full", matchScore > 85 ? "bg-cyan-500" : matchScore > 75 ? "bg-emerald-500" : "bg-yellow-500")} style={{ width: `${matchScore}%` }} />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-1 w-[45%] lg:w-[130px]">
                                                <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase flex items-center gap-1 group-hover:text-purple-400/80 transition-colors">
                                                    <Activity className="w-3 h-3" /> Growth Rate
                                                </div>
                                                <div className={cn("text-xl md:text-2xl font-black font-mono tracking-wider mt-0.5", 
                                                    trend.growthRate.includes('-') ? "text-red-400" : 
                                                    trend.status === "Hyper" ? "text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" :
                                                    "text-emerald-400"
                                                )}>
                                                    {trend.growthRate}
                                                </div>
                                                <Badge className={cn("mt-1 w-fit font-mono text-[9px] uppercase tracking-wider", 
                                                    trend.status === "Hyper" ? "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30" : 
                                                    trend.status === "Explosive" ? "bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30" : 
                                                    trend.status === "Growing" ? "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30" :
                                                    "bg-slate-800 text-slate-400"
                                                )}>
                                                    {trend.status}
                                                </Badge>
                                            </div>

                                        </div>

                                    </div>
                                </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-32 text-center z-10 relative bg-slate-900/20 border border-slate-800/50 rounded-3xl backdrop-blur-sm max-w-3xl mx-auto">
                        <Radar className="w-16 h-16 text-slate-700 mb-6 animate-pulse" />
                        <h3 className="text-2xl font-bold text-white mb-2">No signals detected</h3>
                        <p className="text-slate-500 max-w-md">Adjust your radar frequencies. No technologies match the current filter parameters in this quadrant.</p>
                        <button onClick={() => { setSearchQuery(""); setActiveCategory("All"); }} className="mt-6 text-cyan-400 hover:text-cyan-300 font-mono text-sm underline underline-offset-4">
                            Recalibrate Sensors
                        </button>
                    </div>
                )}
            </div>

            {/* --- DEEP DIVE MODAL --- */}
            {/* 
              FIX: Uses standard fixed overlay that scrolls natively, wrapping the modal.
              This prevents the "blank interior scrolling" bug and guarantees mouse wheel / trackpad 
              always scrolls the entire overlay context.
            */}
            <AnimatePresence>
                {selectedTrend && (
                    <div className="fixed inset-0 z-[100] flex justify-center items-start overflow-y-auto bg-black/80 backdrop-blur-md p-4 sm:p-6 md:p-12 scrollbar-hide">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 pointer-events-none"
                        />
                        
                        {/* Overlay closer */}
                        <div className="absolute inset-0 min-h-full" onClick={() => setSelectedTrend(null)}></div>

                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="bg-slate-950 border border-slate-800 rounded-3xl w-full max-w-5xl relative shadow-[0_0_100px_rgba(0,0,0,0.8)] ring-1 ring-white/10 z-10 my-auto sm:my-8 overflow-hidden"
                            onClick={(e) => e.stopPropagation()} /* Prevent click from bubbling to overlay */
                        >
                            {/* Color Glow Top */}
                            <div className={cn(
                                "absolute top-0 inset-x-0 h-40 opacity-20 bg-gradient-to-b to-transparent pointer-events-none rounded-t-3xl",
                                selectedTrend.status === 'Hyper' ? "from-purple-500" :
                                selectedTrend.status === 'Explosive' ? "from-cyan-500" :
                                selectedTrend.status === 'Growing' ? "from-emerald-500" :
                                "from-slate-500"
                            )} />

                            {/* Close Button */}
                            <button 
                                onClick={() => setSelectedTrend(null)}
                                className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-900/80 backdrop-blur-md hover:bg-slate-800 text-slate-400 hover:text-white transition-all border border-slate-700/80 z-50 hover:scale-110 active:scale-95 group shadow-lg"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                            </button>

                            {/* Content Body - It grows automatically now, no fixed blank height */}
                            <div className="p-6 sm:p-8 md:p-10 relative z-10">
                                
                                {/* Header */}
                                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 border-b border-slate-800/60 pb-8 mb-8">
                                     <div className={cn("p-5 lg:p-6 rounded-3xl flex items-center justify-center shrink-0 shadow-[inset_0_0_30px_rgba(255,255,255,0.05)] border", 
                                        selectedTrend.status === "Hyper" ? "bg-purple-900/20 text-purple-400 border-purple-500/30" : 
                                        selectedTrend.status === "Explosive" ? "bg-cyan-900/20 text-cyan-400 border-cyan-500/30" : 
                                        selectedTrend.status === "Growing" ? "bg-emerald-900/20 text-emerald-400 border-emerald-500/30" :
                                        "bg-slate-800/50 text-slate-300 border-slate-700"
                                    )}>
                                        <div className="[&>svg]:w-10 [&>svg]:h-10 lg:[&>svg]:w-14 lg:[&>svg]:h-14">{selectedTrend.icon}</div>
                                    </div>
                                    <div className="flex-1 pr-8">
                                        <div className="flex gap-3 mb-4 flex-wrap items-center">
                                            <Badge variant="outline" className="border-cyan-500/50 text-cyan-400 bg-cyan-500/10 font-mono text-[10px] md:text-xs uppercase tracking-widest px-3 py-1">{selectedTrend.category}</Badge>
                                            <Badge className={cn("font-mono text-[10px] md:text-xs uppercase px-3 py-1", 
                                                selectedTrend.status === "Hyper" ? "bg-purple-500 font-bold text-white tracking-wider" : 
                                                selectedTrend.status === "Explosive" ? "bg-cyan-500 font-bold text-black" : 
                                                selectedTrend.status === "Growing" ? "bg-emerald-500 font-bold text-black" :
                                                "bg-slate-700 font-bold text-white"
                                            )}>{selectedTrend.status} Trend</Badge>
                                        </div>
                                        <h2 className={cn("text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-4", oswald.className)}>
                                            {selectedTrend.name}
                                        </h2>
                                        <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed max-w-4xl">
                                            {selectedTrend.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Personalized Target Data */}
                                <div className="mb-10 bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80 flex flex-wrap gap-6 md:gap-12 pl-6 relative overflow-hidden">
                                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500"></div>
                                    <div>
                                        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Target Profile Match</div>
                                        <div className="text-2xl font-bold font-mono text-white">{calculateProfileStats(selectedTrend, userSkills).matchScore}%</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Estimated Upskill Time</div>
                                        <div className="text-2xl font-bold font-mono text-white">~{calculateProfileStats(selectedTrend, userSkills).skillGap} Days</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Recruiter Searches</div>
                                        <div className="text-2xl font-bold font-mono text-white gap-2 flex items-center">
                                            <ArrowUpRight className="w-5 h-5 text-emerald-400" /> High 
                                        </div>
                                    </div>
                                </div>

                                {/* 3-Column Metrics */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                     <div className="bg-slate-900/60 border border-emerald-500/20 p-6 md:p-8 rounded-3xl relative overflow-hidden group">
                                         <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-700" />
                                        <div className="flex items-center gap-3 mb-4 text-emerald-400 relative z-10">
                                            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20"><TrendingUp className="w-5 h-5" /></div>
                                            <h4 className="font-bold font-mono text-sm tracking-wider uppercase mb-0">Salary Impact</h4>
                                        </div>
                                        <div className="text-2xl md:text-3xl font-black text-white font-mono relative z-10 leading-tight">{selectedTrend.salaryImpact}</div>
                                     </div>

                                     <div className="bg-slate-900/60 border border-purple-500/20 p-6 md:p-8 rounded-3xl relative overflow-hidden group">
                                         <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-700" />
                                        <div className="flex items-center gap-3 mb-4 text-purple-400 relative z-10">
                                            <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20"><PieChart className="w-5 h-5" /></div>
                                            <h4 className="font-bold font-mono text-sm tracking-wider uppercase mb-0">Market Demand</h4>
                                        </div>
                                        <div className="text-3xl md:text-4xl font-black text-white font-mono relative z-10 flex items-baseline gap-2">{selectedTrend.marketDemand.roles} <span className="text-base font-normal text-slate-500 tracking-wide">Roles</span></div>
                                        <div className="text-xs font-mono text-purple-300 mt-3 bg-purple-500/20 px-3 py-1.5 rounded-md inline-block border border-purple-500/30 relative z-10 font-bold uppercase tracking-widest">{selectedTrend.marketDemand.growth}</div>
                                     </div>

                                     <div className="bg-slate-900/60 border border-yellow-500/20 p-6 md:p-8 rounded-3xl relative overflow-hidden sm:col-span-2 lg:col-span-1 group">
                                         <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-2xl rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-700" />
                                        <div className="flex items-center gap-3 mb-4 text-yellow-400 relative z-10">
                                            <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20"><Target className="w-5 h-5" /></div>
                                            <h4 className="font-bold font-mono text-sm tracking-wider uppercase mb-0">Adoption Trust</h4>
                                        </div>
                                        <div className="flex items-baseline gap-2 mb-3 relative z-10 pb-2">
                                            <div className="text-4xl font-black text-white font-mono leading-none">{selectedTrend.adoptionRate}%</div>
                                        </div>
                                        <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden relative z-10 shadow-inner">
                                            <div className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full relative" style={{ width: `${selectedTrend.adoptionRate}%` }}>
                                                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px] rounded-full"></div>
                                            </div>
                                        </div>
                                     </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-14">
                                    <h3 className={cn("text-xl md:text-2xl font-bold text-slate-100 mb-6 uppercase tracking-widest flex items-center gap-3 text-cyan-400", oswald.className)}>
                                        <Cpu className="w-6 h-6" /> Required Arsenal
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedTrend.keyTech.map((tech, i) => (
                                            <div key={i} className="px-5 py-3 hidden sm:flex bg-black text-slate-200 border border-slate-700/80 rounded-xl text-sm font-mono shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-cyan-500/50 hover:bg-cyan-950/40 transition-all cursor-crosshair">
                                                {tech}
                                            </div>
                                        ))}
                                        {/* Mobile stack (smaller text) */}
                                        {selectedTrend.keyTech.map((tech, i) => (
                                            <div key={`${i}-mobile`} className="px-3 py-2 sm:hidden bg-black text-slate-200 border border-slate-700/80 rounded-lg text-xs font-mono">
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Insights Grid */}
                                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-14">
                                    <div className="bg-emerald-950/10 border border-emerald-500/20 p-6 lg:p-8 rounded-3xl">
                                        <div className="flex items-center gap-3 text-emerald-400 font-bold mb-6 text-xl tracking-tight">
                                            <div className="p-2 bg-emerald-500/10 rounded-lg"><CheckCircle className="w-6 h-6" /></div> The Strategic Upside
                                        </div>
                                        <ul className="space-y-5">
                                            {selectedTrend.insights.good.map((insight, i) => (
                                                <li key={i} className="flex gap-4 text-slate-300 text-[15px] leading-relaxed">
                                                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                                                    {insight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-red-950/10 border border-red-500/20 p-6 lg:p-8 rounded-3xl">
                                        <div className="flex items-center gap-3 text-red-400 font-bold mb-6 text-xl tracking-tight">
                                            <div className="p-2 bg-red-500/10 rounded-lg"><ShieldAlert className="w-6 h-6" /></div> The Harsh Reality
                                        </div>
                                        <ul className="space-y-5">
                                            {selectedTrend.insights.bad.map((insight, i) => (
                                                <li key={i} className="flex gap-4 text-slate-300 text-[15px] leading-relaxed">
                                                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-2 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                                                    {insight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Timeline */}
                                <div className="mb-4">
                                    <h3 className={cn("text-xl md:text-2xl font-bold text-yellow-400 mb-8 uppercase tracking-widest flex items-center gap-3", oswald.className)}>
                                        <Clock className="w-6 h-6" /> Evolution Timeline
                                    </h3>
                                    <div className="relative pl-6 space-y-8 max-w-3xl">
                                        <div className="absolute left-8 md:left-9 top-2 bottom-2 w-px bg-gradient-to-b from-yellow-500 via-yellow-500/30 to-transparent"></div>
                                        {selectedTrend.timeline.map((event, i) => (
                                            <div key={i} className="flex gap-6 md:gap-8 relative items-start">
                                                <div className="w-6 h-6 rounded-full bg-slate-950 border-[3px] border-yellow-500 flex items-center justify-center shrink-0 z-10 shadow-[0_0_15px_rgba(234,179,8,0.5)] relative -left-0.5 mt-0.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                                </div>
                                                <div className="bg-slate-900/40 border border-slate-800/80 p-5 md:p-6 rounded-2xl flex-1 hover:border-yellow-500/30 transition-colors shadow-sm">
                                                    <div className="font-mono text-yellow-400 font-bold mb-2 tracking-widest text-sm bg-yellow-950/30 w-fit px-3 py-1 rounded-md border border-yellow-500/20">{event.year}</div>
                                                    <div className="text-slate-300 text-[15px] leading-relaxed">{event.event}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </NeonGridBackground>
    )
}

"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
// REMOVED ChatbotBubble import to prevent duplication
import { NeonGridBackground } from "@/components/neon-grid-background"
import { HolographicCard } from "@/components/holographic-card"
import {
    Zap, Search,
    Map, BrainCircuit, NotebookPen, Mic,
    Lightbulb, TrendingUp, Target,
    PenTool, Award, Lock, Clock,
    ScanLine, Layout, Code2, Network, Check, Loader2, Radar
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Oswald, Inter } from "next/font/google"
import { cn } from "@/lib/utils"

// === FONTS ===
const oswald = Oswald({ subsets: ["latin"], weight: ["500", "700"] });
const inter = Inter({ subsets: ["latin"] });


// === DATA ===
const tools = [
    {
        title: "Resume Architect",
        icon: <ScanLine className="w-8 h-8" />,
        description: "Beat the ATS. AI parses and rebuilds your resume to match job descriptions perfectly.",
        href: "/ai-tools/resume-builder",
        plan: "Free",
        category: "Career Prep",
        accent: "text-cyan-400",
        bgIcon: "bg-cyan-500/10",
        spotlight: "rgba(34, 211, 238, 0.4)", // Stronger spotlight
        border: "rgba(34, 211, 238, 0.3)",
        featured: true
    },
    {
        title: "Job Matcher",
        icon: <Radar className="w-8 h-8" />,
        description: "Find jobs that perfectly align with your skill set. 500+ daily matches.",
        href: "/ai-tools/job-matcher",
        plan: "Pro",
        category: "Career Prep",
        accent: "text-emerald-400",
        bgIcon: "bg-emerald-500/10",
        spotlight: "rgba(52, 211, 153, 0.4)",
        border: "rgba(52, 211, 153, 0.3)"
    },
    {
        title: "Career Roadmap",
        icon: <Map className="w-8 h-8" />,
        description: "Your personalized step-by-step guide to landing that dream role.",
        href: "/ai-tools/roadmap",
        plan: "Pro",
        category: "Career Prep",
        accent: "text-orange-400",
        bgIcon: "bg-orange-500/10",
        spotlight: "rgba(251, 146, 60, 0.4)",
        border: "rgba(251, 146, 60, 0.3)"
    },
    {
        title: "AI Quiz Gen",
        icon: <BrainCircuit className="w-8 h-8" />,
        description: "Infinite AI-generated quizzes.",
        href: "/ai-tools/quiz",
        plan: "Free",
        category: "Learning",
        accent: "text-indigo-400",
        bgIcon: "bg-indigo-500/10",
        spotlight: "rgba(129, 140, 248, 0.4)",
        border: "rgba(129, 140, 248, 0.3)"
    },
    {
        title: "Neural Voice AI",
        icon: <Mic className="w-8 h-8" />,
        description: "Mock interviews with real-time audio scoring.",
        href: "/interview/config",
        plan: "Free",
        category: "Career Prep",
        accent: "text-fuchsia-400",
        bgIcon: "bg-fuchsia-500/10",
        spotlight: "rgba(232, 121, 249, 0.4)",
        border: "rgba(232, 121, 249, 0.3)"
    },

    {
        title: "Project Ideas",
        icon: <Lightbulb className="w-8 h-8" />,
        description: "Get unique project ideas tailored to your stack.",
        href: "/ai-tools/project-ideas",
        plan: "Premium",
        category: "Learning",
        accent: "text-blue-400",
        bgIcon: "bg-blue-500/10",
        spotlight: "rgba(96, 165, 250, 0.4)",
        border: "rgba(96, 165, 250, 0.3)"
    },
    {
        title: "Algo Dojo",
        icon: <Code2 className="w-8 h-8" />,
        description: "Interactive Code Execution & AI Debug.",
        href: "/ai-tools/compiler",
        plan: "Free",
        category: "Learning",
        accent: "text-green-400",
        bgIcon: "bg-green-500/10",
        spotlight: "rgba(74, 222, 128, 0.4)",
        border: "rgba(74, 222, 128, 0.3)"
    },
    {
        title: "Flyeng Scope",
        icon: <TrendingUp className="w-8 h-8" />,
        description: "Market Trend Analyzer. Future-Proof Your Skills.",
        href: "/ai-tools/flyeng-scope",
        plan: "Elite",
        categoryId: "market-intelligence", // phantom property for diff match
        category: "Market Intelligence",
        new: true,

        accent: "text-blue-500",
        bgIcon: "bg-blue-500/10",
        spotlight: "rgba(59, 130, 246, 0.4)",
        border: "rgba(59, 130, 246, 0.3)"
    },
    {
        title: "Flyeng Radar",
        icon: <Target className="w-8 h-8" />,
        description: "Hiring Intelligence. Your Personal Hiring Unit.",
        href: "/ai-tools/flyeng-radar",
        plan: "Elite",
        categoryId: "market-intelligence", // phantom property for diff match
        category: "Market Intelligence",
        new: true,

        accent: "text-rose-500",
        bgIcon: "bg-rose-500/10",
        spotlight: "rgba(244, 63, 94, 0.4)",
        border: "rgba(244, 63, 94, 0.3)"
    },

    {
        title: "Notes Summarizer",
        icon: <NotebookPen className="w-8 h-8" />,
        description: "Lecture notes in seconds.",
        href: "/ai-tools/summarizer",
        plan: "Pro",
        category: "Productivity",
        accent: "text-violet-400",
        bgIcon: "bg-violet-500/10",
        spotlight: "rgba(167, 139, 250, 0.4)",
        border: "rgba(167, 139, 250, 0.3)"
    },
    {
        title: "DSA Visualizer",
        icon: <Network className="w-8 h-8" />,
        description: "Visualize algorithms.",
        href: "/ai-tools/dsa-visualizer",
        plan: "Free",
        category: "Learning",
        accent: "text-yellow-400",
        bgIcon: "bg-yellow-500/10",
        spotlight: "rgba(250, 204, 21, 0.4)",
        border: "rgba(250, 204, 21, 0.3)"
    },
    {
        title: "Cover Letter AI",
        icon: <PenTool className="w-8 h-8" />,
        description: "Craft persuasive letters.",
        href: "/ai-tools/cover-letter",
        plan: "Free",
        category: "Productivity",
        accent: "text-amber-400",
        bgIcon: "bg-amber-500/10",
        spotlight: "rgba(251, 191, 36, 0.4)",
        border: "rgba(251, 191, 36, 0.3)"
    },
    // UPCOMING TOOLS (Locked)
    {
        title: "Salary Negotiator",
        icon: <Award className="w-8 h-8" />,
        description: "AI that helps you negotiate the best package.",
        href: "#",
        plan: "Upcoming",
        category: "Upcoming",
        accent: "text-gray-500",
        bgIcon: "bg-white/5",
        spotlight: "rgba(255, 255, 255, 0.1)",
        border: "rgba(255, 255, 255, 0.1)",
        locked: true
    },
    {
        title: "AI Website Builder",
        icon: <Layout className="w-8 h-8" />,
        description: "Deploy a portfolio from your resume in seconds.",
        href: "#",
        plan: "Upcoming",
        category: "Upcoming",
        accent: "text-rose-400",
        bgIcon: "bg-rose-500/10",
        spotlight: "rgba(251, 113, 133, 0.4)",
        border: "rgba(251, 113, 133, 0.3)",
        locked: true
    },
]

const categories = ["All", "Market Intelligence", "Career Prep", "Learning", "Productivity", "Upcoming"]

// === POPUP COMPONENT ===
function UpcomingPopup({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const [mounted, setMounted] = useState(false)
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
            setStatus("idle")
        } else {
            document.body.style.overflow = "unset"
        }
        return () => { document.body.style.overflow = "unset" }
    }, [isOpen])

    const handleNotify = () => {
        setStatus("loading")
        setTimeout(() => {
            setStatus("success")
        }, 1500)
    }

    if (!mounted) return null

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl p-0 overflow-hidden shadow-2xl shadow-cyan-500/10 group"
                    >
                         {/* Static Gradient via CSS for stability */}
                         <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-blue-500/10" />

                        {/* Top Decorative Line */}
                        <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

                        <div className="p-8 relative z-10 flex flex-col items-center text-center">
                            {/* Icon Container with Glow */}
                            <div className="w-20 h-20 rounded-full bg-cyan-950/30 flex items-center justify-center mb-6 ring-1 ring-cyan-500/50 shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]">
                                <Lock className="w-8 h-8 text-cyan-400" />
                            </div>

                            <h3 className={cn("text-3xl font-bold text-white mb-2 uppercase tracking-tight", oswald.className)}>
                                Restricted Access
                            </h3>

                            <p className="text-white/50 mb-8 leading-relaxed text-sm">
                                This elite tool is currently in <b>Beta Development</b>. Join the waitlist to get early access before the public launch.
                            </p>

                            <Button
                                onClick={handleNotify}
                                disabled={status !== "idle"}
                                className={cn(
                                    "w-full font-bold uppercase tracking-widest py-6 transition-all duration-300 relative overflow-hidden",
                                    status === "success"
                                        ? "bg-emerald-500 hover:bg-emerald-500 text-black"
                                        : "bg-white text-black hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                                )}
                            >
                                {status === "idle" && (
                                    <span className="flex items-center gap-2">
                                        Notify Me on Launch <Zap className="w-4 h-4" />
                                    </span>
                                )}
                                {status === "loading" && (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                )}
                                {status === "success" && (
                                    <span className="flex items-center gap-2">
                                        You're on the list! <Check className="w-4 h-4" />
                                    </span>
                                )}
                            </Button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    )
}

export function AIToolsClient() {
    const [activeCategory, setActiveCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")
    const [showPopup, setShowPopup] = useState(false)

    // Filter Logic
    const filteredTools = tools.filter(tool => {
        const matchesCategory = activeCategory === "All" || tool.category === activeCategory
        const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <NeonGridBackground className="min-h-screen font-sans text-slate-950 pb-0 overflow-x-hidden max-w-[100vw] border-[10px] border-red-500 relative">
            <div className="fixed top-0 left-0 bg-red-500 text-white font-bold p-2 z-[9999]">COMPONENT DEBUG MODE</div>
            <UpcomingPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
            
            <SiteHeader />

            <div className={cn("relative z-10 flex flex-col pt-32 container mx-auto px-4 max-w-7xl", inter.className)}>
                
                {/* HERO SECTION */}
                <div className="flex flex-col items-center justify-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cyan-400 mb-6 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            AI-POWERED CAREER ACCELERATION
                        </div>

                        <h1 className={cn("text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6 text-white leading-[0.9]", oswald.className)}>
                            Elite <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                                Career Intelligence
                            </span>
                        </h1>
                        <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                            A suite of elite AI tools designed to help you land your dream job. 
                             <span className="text-white/80 font-normal"> Resume building, interview prep, and skill acquisition</span>—all in one place.
                        </p>

                        {/* CATEGORY TABS */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={cn(
                                        "px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border",
                                        activeCategory === cat
                                            ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105"
                                            : "bg-black/40 border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 backdrop-blur-sm"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* SEARCH BAR */}
                <div className="relative max-w-md mx-auto mb-16 w-full group">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-white/30 group-focus-within:text-cyan-400 transition-colors" />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search tools..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/10 rounded-2xl py-3.5 pl-10 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all font-medium text-sm shadow-xl"
                    />
                </div>

                {/* UNIFORM GRID - 3 Columns - Using HolographicCard */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    <AnimatePresence mode="popLayout">
                        {filteredTools.filter(t => !t.locked).map((tool) => (
                            <motion.div
                                key={tool.title}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="h-full min-h-[260px]"
                            >
                                <HolographicCard 
                                    href={tool.href}
                                    spotlightColor={tool.spotlight}
                                >
                                    <div className="flex flex-col h-full transform-gpu transition-transform duration-300 group-hover:translate-z-[10px]">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className={cn("p-3.5 rounded-2xl transition-transform group-hover:scale-110 duration-500 border border-white/5", tool.bgIcon, tool.accent)}>
                                                {tool.icon}
                                            </div>
                                            <div className="flex gap-2">
                                                {tool.new && (
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black bg-cyan-400 px-2.5 py-1 rounded-full flex items-center gap-1 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                                                        NEW
                                                    </span>
                                                )}
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 border border-white/10 px-2.5 py-1 rounded-full flex items-center gap-1 bg-black/40 backdrop-blur-md">
                                                    {tool.plan}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mb-auto">
                                            <h3 className={cn("text-xl font-bold text-white mb-3 uppercase tracking-wide", oswald.className)}>
                                                {tool.title}
                                            </h3>
                                            <p className="text-white/50 text-[13px] leading-relaxed group-hover:text-white/70 transition-colors font-medium">
                                                {tool.description}
                                            </p>
                                        </div>

                                        <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className={cn("text-xs font-bold tracking-widest uppercase flex items-center gap-2", tool.accent)}>
                                                Launch Tool <Zap className="w-3.5 h-3.5" />
                                            </span>
                                        </div>
                                    </div>
                                </HolographicCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>


                {/* COMING SOON SECTION */}
                {filteredTools.some(t => t.locked) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                         <div className="flex items-center gap-4 mb-10 text-white/30">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                            <h2 className={cn("text-sm font-bold uppercase tracking-[0.2em]", oswald.className)}>
                                Future Labs
                            </h2>
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                         </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-60 hover:opacity-100 transition-opacity duration-500">
                            {filteredTools.filter(t => t.locked).map((tool) => (
                                <motion.div
                                    key={tool.title}
                                    className="h-full min-h-[240px]"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setShowPopup(true)
                                    }}
                                >
                                    <HolographicCard 
                                        href={tool.href}
                                        className="cursor-pointer grayscale hover:grayscale-0 transition-all duration-500"
                                        spotlightColor="rgba(255,255,255,0.05)"
                                    >
                                        <div className="flex flex-col h-full transform-gpu transition-transform duration-300 group-hover:translate-z-[10px]">
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="p-3.5 rounded-2xl bg-white/5 text-white/40 border border-white/5">
                                                    {tool.icon}
                                                </div>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 border border-white/5 px-2.5 py-1 rounded-full flex items-center gap-1">
                                                    <Lock className="w-3 h-3" /> Locked
                                                </span>
                                            </div>

                                            <div className="mb-auto">
                                                <h3 className={cn("text-xl font-bold text-white/50 mb-3 uppercase tracking-wide group-hover:text-white transition-colors", oswald.className)}>
                                                    {tool.title}
                                                </h3>
                                                <p className="text-white/30 text-[13px] leading-relaxed group-hover:text-white/50 transition-colors">
                                                    {tool.description}
                                                </p>
                                            </div>

                                            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                                <span className="text-xs font-bold tracking-widest uppercase flex items-center gap-2 text-white/50">
                                                    Notify Me <Clock className="w-3.5 h-3.5" />
                                                </span>
                                            </div>
                                        </div>
                                    </HolographicCard>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

            </div>
            <EnhancedFooter />
        </NeonGridBackground>
    )
}
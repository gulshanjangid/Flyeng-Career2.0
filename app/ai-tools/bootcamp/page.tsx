"use client"

import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { Inter, Quicksand } from "next/font/google"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Sparkles, TerminalSquare, BrainCircuit, Waves, Code2, HeartHandshake, Zap, ArrowRight, Laptop } from "lucide-react"
import Link from "next/link"

// Using Quicksand for a much softer, more relaxing and fun vibe
const quicksand = Quicksand({ subsets: ["latin"], weight: ["500", "700"] });
const inter = Inter({ subsets: ["latin"] });

const TRACKS = [
    {
        title: "Web Dev Playground",
        icon: <TerminalSquare className="w-8 h-8 text-teal-400" />,
        desc: "Interactive lessons in React, Next.js, and Node. Build fun apps without the stress.",
        bg: "bg-teal-500/10",
        border: "border-teal-500/20",
        glow: "hover:shadow-[0_10px_40px_-10px_rgba(45,212,191,0.3)]",
        buttonColor: "bg-teal-500 hover:bg-teal-400 text-teal-950",
        href: "/ai-tools/bootcamp/web-dev", 
        badge: "Explore the New Tech Stack"
    },
    {
        title: "AI & Creativity",
        icon: <BrainCircuit className="w-8 h-8 text-indigo-400" />,
        desc: "Learn to build cool AI tools. We make Prompt Engineering and LLMs easy to grasp.",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        glow: "hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.3)]",
        buttonColor: "bg-indigo-500 hover:bg-indigo-400 text-indigo-950",
        href: "#",
        badge: "Coming Soon"
    },
    {
        title: "Zen Algorithms",
        icon: <Waves className="w-8 h-8 text-sky-400" />,
        desc: "DSA doesn't have to be scary. Relaxing, step-by-step visual guides to patterns.",
        bg: "bg-sky-500/10",
        border: "border-sky-500/20",
        glow: "hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.3)]",
        buttonColor: "bg-sky-500 hover:bg-sky-400 text-sky-950",
        href: "#",
        badge: "In Beta"
    }
]

const FEATURES = [
    {
        icon: <HeartHandshake className="w-7 h-7 text-rose-400" />,
        title: "Friendly AI Tutors",
        desc: "No strict grading. Your AI buddy helps you understand mistakes gently and cheers you on."
    },
    {
        icon: <Laptop className="w-7 h-7 text-amber-400" />,
        title: "Interactive Sandboxes",
        desc: "Write code directly in the browser. See results instantly without installing anything."
    },
    {
        icon: <Zap className="w-7 h-7 text-fuchsia-400" />,
        title: "Bite-Sized Lessons",
        desc: "Learn in comfy 15-minute chunks. Perfect for coffee breaks or winding down."
    }
]

export default function AIBootcampPage() {
    return (
        <div className="min-h-screen font-sans text-slate-100 bg-[#0f0f15] selection:bg-purple-500/30 overflow-hidden relative">
            {/* Relaxing ambient background blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-500/10 blur-[120px]" />
                <div className="absolute top-[20%] right-[-5%] w-[30%] h-[50%] rounded-full bg-indigo-500/10 blur-[150px]" />
                <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] rounded-full bg-purple-500/10 blur-[130px]" />
            </div>

            <SiteHeader />
            
            <main className={cn("relative z-10 flex flex-col pt-32", inter.className)}>
                {/* AMAZING FULL-WIDTH HERO SECTION */}
                <section className="relative w-full flex flex-col items-center justify-center text-center min-h-[85vh] mb-28">
                    
                    {/* Full-Screen Floating Decorative Elements (Background) */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                        <motion.div 
                            animate={{ y: [0, -30, 0], rotate: [0, 8, 0] }} 
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute left-[2%] md:left-[10%] top-[20%] opacity-30 md:opacity-100"
                        >
                            <div className="p-5 rounded-3xl bg-[#0a0f1c]/80 backdrop-blur-xl border border-teal-500/20 shadow-[0_0_40px_rgba(45,212,191,0.15)] transform -rotate-12 scale-75 md:scale-90 lg:scale-100">
                                <Code2 className="w-12 h-12 text-teal-400 mb-3" />
                                <div className="text-left text-xs text-teal-200/50 font-mono">
                                    <p><span className="text-teal-400">const</span> <span className="text-blue-300">future</span> = <span className="text-yellow-300">"AI"</span>;</p>
                                    <p>learn(future);</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            animate={{ y: [0, 30, 0], rotate: [0, -8, 0] }} 
                            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute right-[2%] md:right-[10%] bottom-[30%] opacity-30 md:opacity-100"
                        >
                            <div className="p-5 rounded-3xl bg-[#1c0a1c]/80 backdrop-blur-xl border border-fuchsia-500/20 shadow-[0_0_40px_rgba(217,70,239,0.15)] transform rotate-6 scale-75 md:scale-90 lg:scale-100">
                                <BrainCircuit className="w-10 h-10 text-fuchsia-400 mb-3" />
                                <div className="text-left text-xs text-fuchsia-200/50 font-mono">
                                    <p><span className="text-fuchsia-400">import</span> { '{' } <span className="text-purple-300">Magic</span> { '}' };</p>
                                    <p>buildAwesome();</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="relative z-10 max-w-5xl flex flex-col items-center px-4 mx-auto"
                    >
                        {/* Glowing Pill Badge */}
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500/10 via-indigo-500/10 to-fuchsia-500/10 border border-white/10 text-sm font-bold text-white mb-10 backdrop-blur-md shadow-2xl overflow-hidden relative group cursor-default"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-white/10 to-teal-500/0 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite]" />
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            <span>Learning, completely reimagined.</span>
                        </motion.div>

                        {/* Massive Headline */}
                        <h1 className={cn("text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-[1.1]", quicksand.className)}>
                            The fun way to master <br className="hidden md:block"/>
                            <span className="relative inline-block mt-4">
                                <span className="absolute -inset-2 bg-gradient-to-r from-teal-500/30 via-indigo-500/30 to-fuchsia-500/30 rounded-3xl blur-3xl opacity-60"></span>
                                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-fuchsia-400">
                                    Software Engineering
                                </span>
                            </span>
                        </h1>
                        
                        <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-14 leading-relaxed font-medium">
                            Step into the arena. Our immersive, AI-powered bootcamps turn complex concepts into bite-sized, interactive quests. Build real apps without the stress.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto relative z-20">
                            <Link href="/ai-tools/bootcamp/web-dev" className="w-full sm:w-auto relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative w-full sm:w-auto inline-flex h-16 items-center justify-center rounded-2xl bg-[#0f0f15] border border-white/10 px-10 font-bold text-white transition-colors hover:bg-white/5"
                                >
                                    <span className="flex items-center gap-3 text-lg">
                                        Explore Web Dev Hub <ArrowRight className="w-5 h-5 text-teal-400 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </motion.button>
                            </Link>

                            <Link href="/ai-tools" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto inline-flex h-16 items-center justify-center rounded-2xl px-8 font-bold text-slate-400 transition-colors hover:bg-white/5 hover:text-white text-md border border-transparent hover:border-white/10">
                                    View All AI Tools
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </section>

                <div className="container mx-auto px-4 max-w-6xl w-full">
                    {/* STATS BANNER */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto w-full mb-32 border-t border-b border-white/5 py-10 px-4 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent">
                    <div className="flex flex-col items-center">
                        <span className={cn("text-3xl md:text-5xl font-bold text-teal-400 mb-2", quicksand.className)}>10+</span>
                        <span className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-widest text-center">Interactive Configs</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className={cn("text-3xl md:text-5xl font-bold text-indigo-400 mb-2", quicksand.className)}>24/7</span>
                        <span className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-widest text-center">AI Bootcamps</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className={cn("text-3xl md:text-5xl font-bold text-fuchsia-400 mb-2", quicksand.className)}>0</span>
                        <span className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-widest text-center">Setup Required</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className={cn("text-3xl md:text-5xl font-bold text-amber-400 mb-2", quicksand.className)}>10k+</span>
                        <span className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-widest text-center">Lines of Code</span>
                    </div>
                </div>

                {/* TRACKS GRID */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className={cn("text-3xl md:text-4xl font-bold tracking-tight text-white mb-4", quicksand.className)}>
                            Choose your adventure
                        </h2>
                        <p className="text-slate-400">Jump right into interactive, guided learning paths.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {TRACKS.map((track, i) => (
                            <motion.div
                                key={track.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                <div className={cn(
                                    "group relative flex flex-col h-full rounded-[2rem] bg-[#1a1a24]/60 backdrop-blur-xl border border-white/5 p-8 transition-all duration-300",
                                    track.glow
                                )}>
                                    <div className="flex items-center justify-between mb-8">
                                        <div className={cn("p-4 rounded-2xl border transition-transform duration-300 group-hover:scale-110", track.bg, track.border)}>
                                            {track.icon}
                                        </div>
                                        <span className={cn("text-xs font-bold leading-none px-3 py-1.5 rounded-full border border-white/10 bg-black/20 text-slate-300")}>
                                            {track.badge}
                                        </span>
                                    </div>

                                    <h3 className={cn("text-2xl font-bold text-white mb-3", quicksand.className)}>
                                        {track.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed font-medium mb-8 flex-1">
                                        {track.desc}
                                    </p>

                                    <Link href={track.href}>
                                        <button className={cn(
                                            "w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform duration-300 group-hover:-translate-y-1",
                                            track.buttonColor
                                        )}>
                                            Explore Path <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* RELAXING FEATURES */}
                <div className="mb-32">
                    <div className="rounded-[3rem] bg-gradient-to-b from-white/5 to-transparent border border-white/5 p-8 md:p-16 relative overflow-hidden text-center">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
                        
                        <h2 className={cn("text-3xl md:text-4xl font-bold tracking-tight text-white mb-16", quicksand.className)}>
                            Why learn with us?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {FEATURES.map((feat, i) => (
                                <motion.div 
                                    key={i} 
                                    className="flex flex-col items-center group"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-[#1a1a24] border border-white/10 flex items-center justify-center mb-6 shadow-xl transition-colors group-hover:border-white/20">
                                        {feat.icon}
                                    </div>
                                    <h4 className={cn("text-xl font-bold text-white mb-3", quicksand.className)}>
                                        {feat.title}
                                    </h4>
                                    <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-[280px]">
                                        {feat.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
                </div> {/* End of container max-w-6xl wrapper */}
            </main>
            <EnhancedFooter />
        </div>
    )
}

"use client"

import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { TechCollage } from "@/components/tech-collage"
import { Inter, Quicksand } from "next/font/google"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Code2, Rocket, Database, Wand2, TerminalSquare } from "lucide-react"
import Link from "next/link"

const quicksand = Quicksand({ subsets: ["latin"], weight: ["500", "700"] });
const inter = Inter({ subsets: ["latin"] });

const CURRICULUM = [
    {
        phase: "Phase 1: The Foundation",
        icon: <TerminalSquare className="w-6 h-6 text-orange-400" />,
        desc: "Master the building blocks of the web. Semantic HTML for structure, advanced CSS3 for styling and responsive design.",
        tags: ["HTML5", "CSS3", "Flexbox", "Grid", "Animations"],
        locked: false,
        bg: "bg-orange-500/10 border-orange-500/30",
        href: "/ai-tools/bootcamp/html-css-exercises",
        featured: "Start 10-Day Challenge"
    },
    {
        phase: "Phase 2: JavaScript Mastery",
        icon: <Code2 className="w-6 h-6 text-yellow-500" />,
        desc: "Learn to think like an engineer. Variables, closures, promises, DOM manipulation, and the event loop.",
        tags: ["Vanilla JS", "ES6+", "Async/Await", "DOM"],
        locked: false,
        bg: "bg-yellow-500/10 border-yellow-500/30",
        href: "/ai-tools/bootcamp/js-exercises",
        featured: "Start 10-Day Challenge"
    },
    {
        phase: "Phase 3: Modern Frontend (React & Next)",
        icon: <Rocket className="w-6 h-6 text-cyan-400" />,
        desc: "Build massive, scalable user interfaces. Component architecture, state management, and Server-Side Rendering (SSR).",
        tags: ["React 19", "Next.js 15", "Tailwind CSS", "Hooks"],
        locked: false,
        bg: "bg-cyan-500/10 border-cyan-500/30",
        href: "/ai-tools/bootcamp/react-exercises",
        featured: "Start 10-Day Challenge"
    },
    {
        phase: "Phase 4: Backend & Architectures",
        icon: <Database className="w-6 h-6 text-emerald-400" />,
        desc: "Construct robust APIs and handle data. Authentication, REST vs. GraphQL, NoSQL architectures, and deployments.",
        tags: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
        locked: true,
        bg: "bg-emerald-500/10 border-emerald-500/30",
        href: "#"
    },
    {
        phase: "Phase 5: The AI Edge & Vibe Coding",
        icon: <Wand2 className="w-6 h-6 text-fuchsia-400" />,
        desc: "Learn the modern developer workflow. Prompt Engineering, integrating LLMs, and shipping features 10x faster.",
        tags: ["GenAI", "Cursor/Copilot", "RAG", "Low-Code"],
        locked: true,
        bg: "bg-fuchsia-500/10 border-fuchsia-500/30",
        href: "#"
    }
]

export default function WebDevHubPage() {
    return (
        <div className="min-h-screen font-sans text-slate-100 bg-[#0f0f15] selection:bg-teal-500/30 overflow-hidden relative">
            <SiteHeader />
            
            <main className={cn("relative z-10 flex flex-col pt-32 w-full", inter.className)}>
                
                {/* Back Link */}
                <div className="container mx-auto px-4 max-w-6xl">
                    <Link href="/ai-tools/bootcamp" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-teal-400 transition-colors mb-10 group">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Bootcamp Hub
                    </Link>
                </div>

                {/* HERO AREA (FULL WIDTH) */}
                <div className="flex flex-col items-center justify-center text-center mb-16 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full flex flex-col items-center"
                    >
                        {/* Full bleed component */}
                        <div className="w-full relative">
                            <TechCollage />
                        </div>

                        <div className="mt-8 mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-bold tracking-widest text-teal-300">
                            FULL-STACK ENGINEERING PATH
                        </div>
                        
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                            From the foundational HTML skeleton to the latest Vibe Coding techniques using GenAI. Master the modern stack through interactive, AI-guided challenges.
                        </p>
                    </motion.div>
                </div>

                {/* THE CURRICULUM TIMELINE */}
                <div className="mb-32 relative container mx-auto px-4 max-w-6xl">
                    <div className="absolute left-[39px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-teal-500/50 via-indigo-500/30 to-fuchsia-500/10 md:left-1/2 md:-translate-x-1/2" />
                    
                    <div className="space-y-12">
                        {CURRICULUM.map((item, index) => {
                            const isEven = index % 2 === 0
                            
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="relative flex items-center flex-col md:flex-row gap-8 md:gap-16 w-full"
                                >
                                    {/* Web Layout Formatting - alternating sides */}
                                    <div className={cn(
                                        "hidden md:block w-1/2 text-right",
                                        !isEven && "order-last text-left"
                                    )}>
                                        {/* Empty spacer for alternating timeline effect on Desktop */}
                                    </div>

                                    {/* Center Timeline Node */}
                                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-[#1a1a24] border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20">
                                        <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-500">
                                            0{index + 1}
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={cn(
                                        "w-full md:w-1/2 pl-24 md:pl-0",
                                        !isEven && "md:pl-16",
                                        isEven && "md:pr-16"
                                    )}>
                                        <div className={cn(
                                            "group p-8 rounded-3xl backdrop-blur-md bg-[#1a1a24]/80 border transition-all duration-300 relative overflow-hidden flex flex-col h-full",
                                            item.bg,
                                            !item.locked && "hover:border-teal-500/50 shadow-lg"
                                        )}>
                                            {/* Subtle gradient background matching the borders */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                                <div className={cn("p-3 rounded-2xl bg-black/40 border border-white/5", item.bg)}>
                                                    {item.icon}
                                                </div>
                                                <h3 className={cn("text-2xl font-bold text-white", quicksand.className)}>
                                                    {item.phase}
                                                </h3>
                                            </div>

                                            <p className="text-slate-400 leading-relaxed font-medium mb-6 relative z-10">
                                                {item.desc}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                                                {item.tags.map(tag => (
                                                    <span key={tag} className="px-2.5 py-1 rounded bg-black/30 border border-white/5 text-xs font-bold text-slate-300">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Action Button */}
                                            <div className="mt-auto relative z-10">
                                                {item.locked ? (
                                                    <button disabled className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 border border-white/5 text-slate-500 font-bold flex items-center justify-center gap-2 cursor-not-allowed">
                                                        Module Locked
                                                    </button>
                                                ) : (
                                                    <Link href={item.href} className="inline-block w-full sm:w-auto">
                                                        <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-teal-950 font-bold flex items-center justify-center gap-2 transition-all shadow-[0_5px_20px_-5px_rgba(45,212,191,0.4)] hover:-translate-y-1">
                                                            {item.featured} <ArrowRight className="w-4 h-4" />
                                                        </button>
                                                    </Link>
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

            </main>
            <EnhancedFooter />
        </div>
    )
}

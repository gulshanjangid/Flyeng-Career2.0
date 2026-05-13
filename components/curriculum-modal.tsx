
"use client"

import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Database, Brain, Globe, X, ArrowRight, Layout, Server, Cpu } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface CurriculumModalProps {
    isOpen: boolean
    onClose: () => void
}

const categories = [
    {
        id: "dsa",
        title: "DSA & Algorithms",
        description: "Master the DNA of software. Ace interviews.",
        icon: Database,
        color: "from-blue-500 to-cyan-400",
        href: "/courses/dsa"
    },
    {
        id: "cpp",
        title: "High-Performance C++",
        description: "Systems programming & low-latency engines.",
        icon: Cpu,
        color: "from-indigo-500 to-purple-400",
        href: "/courses/cpp"
    },
    {
        id: "java",
        title: "Java Backend",
        description: "Enterprise scale architectures & microservices.",
        icon: Server,
        color: "from-orange-500 to-red-400",
        href: "/courses/java"
    },
    {
        id: "python",
        title: "Python AI Engineering",
        description: "The language of modern AI & Data Science.",
        icon: Brain,
        color: "from-green-500 to-emerald-400",
        href: "/courses/python"
    },
    {
        id: "system-design",
        title: "System Design",
        description: "Architect scalable distributed systems.",
        icon: Globe,
        color: "from-pink-500 to-rose-400",
        href: "/courses/system-design"
    },
    {
        id: "frontend",
        title: "Modern Frontend",
        description: "Build beautiful, reactive user interfaces.",
        icon: Layout,
        color: "from-yellow-400 to-orange-500",
        href: "/courses/frontend"
    }
]

export function CurriculumModal({ isOpen, onClose }: CurriculumModalProps) {
    const [activeIdx, setActiveIdx] = useState<number | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isOpen])

    if (!mounted) return null

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 h-[85vh] flex flex-col will-change-transform"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 border border-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all backdrop-blur-sm group"
                            >
                                <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                            </button>

                            <div className="flex flex-col md:flex-row flex-1 min-h-0">
                                {/* Sidebar / Header Area */}
                                <div className="md:w-[35%] p-6 md:p-10 flex flex-col justify-between bg-gradient-to-b from-[#111] to-black relative overflow-hidden border-b md:border-b-0 md:border-r border-white/5 shrink-0 pointer-events-none md:pointer-events-auto">
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent opacity-50 pointer-events-none" />
                                    
                                    <div className="relative z-10 pointer-events-auto">
                                        <motion.div 
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                            className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6 md:mb-8 shadow-[0_0_40px_rgba(37,99,235,0.4)] border border-white/10"
                                        >
                                            <Sparkles className="text-white w-6 h-6 md:w-7 md:h-7" />
                                        </motion.div>
                                        
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tighter leading-[0.95]">
                                                Choose Your <br className="hidden md:block"/>
                                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 animate-gradient-x">Path to Glory</span>
                                            </h2>
                                            <p className="text-zinc-400 leading-relaxed text-xs md:text-sm font-light hidden md:block">
                                                Our curriculum is architected to take you from fundamentals to system mastery. Select a track to explore the detailed roadmap.
                                            </p>
                                        </motion.div>
                                    </div>

                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.4 }}
                                        className="relative z-10 mt-4 md:mt-0 hidden md:block pointer-events-auto"
                                    >
                                        <div className="flex items-center gap-3 text-[10px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/30 w-fit px-3 py-1.5 rounded-full border border-cyan-500/20">
                                            <span className="relative flex h-2 w-2">
                                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                            </span>
                                            Admissions Open 2026
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Grid Area */}
                                <div className="md:w-[65%] bg-[#050505] relative flex-1 min-h-0">
                                    {/* Gradients Overlay - Pointer events none strictly */}
                                    <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-[#050505] to-transparent z-20 pointer-events-none" />
                                    <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />

                                    {/* Scrollable Content Container using absolute positioning to guarantee height constraints */}
                                    <div 
                                        className="absolute inset-0 overflow-y-auto custom-scrollbar p-5 md:p-8 z-10 overscroll-contain"
                                        data-lenis-prevent="true"
                                        onWheel={(e) => e.stopPropagation()}
                                        onTouchMove={(e) => e.stopPropagation()}
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 pb-2">
                                            {categories.map((cat, idx) => (
                                                <Link href={cat.href} key={cat.id} onClick={onClose} className="block">
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 15 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: idx * 0.04 + 0.2, duration: 0.3, ease: "easeOut" }}
                                                        onMouseEnter={() => setActiveIdx(idx)}
                                                        onMouseLeave={() => setActiveIdx(null)}
                                                        className="group relative h-full bg-zinc-900/40 hover:bg-zinc-900 border border-white/5 hover:border-white/20 rounded-2xl p-4 md:p-6 transition-all duration-300 overflow-hidden"
                                                    >
                                                        {/* Hover Gradient Bloom */}
                                                        <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br blur-xl", cat.color)} />
                                                        
                                                        <div className="relative z-10 flex items-start justify-between mb-3 md:mb-5">
                                                            <div className={cn("p-2.5 md:p-3.5 rounded-xl bg-black border border-white/10 text-zinc-500 group-hover:text-white group-hover:border-white/20 transition-all duration-300 shadow-lg", 
                                                                activeIdx === idx && "scale-110 border-white/30 text-white"
                                                            )}>
                                                                <cat.icon size={20} strokeWidth={1.5} className="md:w-[22px] md:h-[22px]" />
                                                            </div>
                                                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                                                 <ArrowRight className="text-white" size={14} />
                                                            </div>
                                                        </div>
                                                        
                                                        <h3 className="relative z-10 text-base md:text-lg font-semibold text-zinc-200 mb-1 md:mb-2 group-hover:text-white transition-colors tracking-tight">{cat.title}</h3>
                                                        <p className="relative z-10 text-[11px] md:text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed">{cat.description}</p>
                                                    </motion.div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    )
}

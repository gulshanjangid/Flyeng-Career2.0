"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { FileText, Map, Mic, Briefcase, Code, Lightbulb, GraduationCap, Brain, Zap, Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRef, useState } from "react"

const tools = [
    {
        title: "AI Resume",
        icon: FileText,
        color: "bg-blue-500",
        desc: "ATS-Optimized Builder",
        href: "/ai-tools/resume-builder"
    },
    {
        title: "Career Roadmap",
        icon: Map,
        color: "bg-purple-500",
        desc: "Personalized Strategy",
        href: "/ai-tools/roadmap"
    },
    {
        title: "Mock Interview",
        icon: Mic,
        color: "bg-rose-500",
        desc: "Real-time AI Coach",
        href: "/ai-tools/mock-interview"
    },
    {
        title: "Job Matcher",
        icon: Briefcase,
        color: "bg-cyan-500",
        desc: "Smart Job Finding",
        href: "/ai-tools/job-matcher"
    },
    {
        title: "Code Engine",
        icon: Code,
        color: "bg-yellow-500",
        desc: "Debug & Optimize",
        href: "/ai-tools/compiler"
    },
    {
        title: "Project Ideas",
        icon: Lightbulb,
        color: "bg-emerald-500",
        desc: "Build Portfolio",
        href: "/ai-tools/project-ideas"
    }
]

export function HeroToolsGrid() {
    return (
        <div className="relative w-full h-[600px] perspective-2000 flex items-center justify-center pointer-events-none md:pointer-events-auto">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full opacity-50 pointer-events-none" />

            <motion.div
                initial={{ rotateY: -20, rotateX: 10, opacity: 0, scale: 0.8 }}
                animate={{ rotateY: -12, rotateX: 5, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="grid grid-cols-2 gap-4 transform-style-3d w-full max-w-md p-6"
                style={{ transformStyle: "preserve-3d" }}
            >
                {tools.map((tool, i) => (
                    <ToolCard key={i} tool={tool} index={i} />
                ))}
            </motion.div>
        </div>
    )
}

function ToolCard({ tool, index }: { tool: any, index: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const [hover, setHover] = useState(false)

    // Mouse tilt effect logic could go here, but keeping it simpler for the grid composition

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, z: -100 }}
            animate={{ opacity: 1, y: 0, z: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.8, type: "spring" }}
            className="relative group"
            style={{ transformStyle: "preserve-3d" }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Link href={tool.href} className="block relative">
                {/* Card Body */}
                <motion.div
                    className="relative h-32 w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden p-4 flex flex-col justify-between transition-colors group-hover:bg-white/5 active:scale-95 duration-200"
                    animate={{
                        z: hover ? 30 : 0,
                        rotateX: hover ? -5 : 0,
                        rotateY: hover ? 5 : 0,
                        scale: hover ? 1.05 : 1
                    }}
                >
                    {/* Hover Glow Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* Border Beam Animation (CSS based usually, implemented simply here) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />

                    <div className="flex justify-between items-start">
                        <div className={`w-10 h-10 rounded-lg ${tool.color} bg-opacity-20 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform`}>
                            <tool.icon className={`w-5 h-5 text-white`} />
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity -mr-1 -mt-1">
                            <ArrowRight className="w-4 h-4 text-white/40" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-sm tracking-wide">{tool.title}</h3>
                        <p className="text-white/40 text-[10px] uppercase font-medium tracking-wider mt-1">{tool.desc}</p>
                    </div>
                </motion.div>

                {/* Shadow for 3D depth */}
                <motion.div
                    animate={{ opacity: hover ? 0.6 : 0.2, scale: hover ? 1.1 : 0.9 }}
                    className="absolute -bottom-4 inset-x-4 h-4 bg-black/50 blur-xl -z-10 rounded-full"
                />
            </Link>
        </motion.div>
    )
}

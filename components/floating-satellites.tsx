"use client"

import { motion } from "framer-motion"
import { FileText, Map, Mic, Briefcase, Code, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const tools = [
    {
        title: "Resume Architect",
        icon: FileText,
        color: "bg-blue-500",
        href: "/ai-tools/resume-builder",
        pos: "top-[15%] left-[10%] lg:left-[18%]",
        delay: 0
    },
    {
        title: "Career Roadmap",
        icon: Map,
        color: "bg-purple-500",
        href: "/ai-tools/roadmap",
        pos: "top-[25%] right-[10%] lg:right-[18%]",
        delay: 1.5
    },
    {
        title: "Mock Interview",
        icon: Mic,
        color: "bg-rose-500",
        href: "/ai-tools/mock-interview",
        pos: "bottom-[35%] left-[15%] lg:left-[22%]",
        delay: 0.8
    },
    {
        title: "Job Matcher",
        icon: Briefcase,
        color: "bg-cyan-500",
        href: "/ai-tools/job-matcher",
        pos: "bottom-[25%] right-[15%] lg:right-[22%]",
        delay: 2.2
    }
]

export function FloatingSatellites() {
    return (
        <div className="absolute inset-0 pointer-events-none z-30 overflow-visible">
            {tools.map((tool, i) => (
                <Satellite key={i} tool={tool} index={i} />
            ))}
        </div>
    )
}

function Satellite({ tool, index }: { tool: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + tool.delay * 0.2, duration: 1.2, type: "spring" }}
            className={`absolute ${tool.pos} pointer-events-auto`}
        >
            <motion.div
                animate={{
                    y: [-15, 15, -15],
                    rotate: [-3, 3, -3],
                    scale: [1, 1.02, 1]
                }}
                transition={{
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: tool.delay
                }}
            >
                <Link href={tool.href} className="group relative block">
                    {/* Vision Pro Glass Effect */}
                    <div className="flex items-center gap-4 px-5 py-4 rounded-3xl bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-150 border border-white/20 hover:border-white/40 hover:bg-white/[0.08] transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] group-hover:scale-105 group-hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
                        <div className={`w-10 h-10 rounded-2xl ${tool.color} bg-opacity-10 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform`}>
                            <tool.icon className="w-5 h-5 text-white/90" />
                        </div>
                        <div>
                            <span className="text-base font-medium text-white block tracking-tight">{tool.title}</span>
                            <div className="flex items-center gap-1 text-[10px] text-white/40 uppercase tracking-widest font-mono mt-0.5">
                                AI Powered <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>
        </motion.div>
    )
}

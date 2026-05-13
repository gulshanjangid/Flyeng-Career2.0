"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BuilderHeroProps {
    onStart: () => void
    onGenerate: (prompt: string) => void
}

export function BuilderHero({ onStart, onGenerate }: BuilderHeroProps) {
    const [input, setInput] = useState("")

    return (
        <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden py-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#030014] to-[#030014]" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse delay-1000" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-medium mb-6">
                        <Sparkles className="w-3 h-3" /> AI Website Builder
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 mb-6">
                        Build your dream site <br /> with <span className="text-cyan-400">one prompt.</span>
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
                        Describe your vision, and watch our AI architect build it in seconds. No coding required.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-full max-w-2xl mx-auto relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                    <div className="relative bg-[#0a0a0a] border border-white/10 rounded-xl p-2 flex items-center gap-2 shadow-2xl">
                        <div className="pl-4">
                            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                        </div>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Describe your website (e.g., 'A futuristic portfolio for a designer')..."
                            className="flex-1 bg-transparent border-none text-white placeholder:text-white/30 focus:ring-0 h-12 text-lg outline-none"
                            onKeyDown={(e) => { if (e.key === 'Enter') onGenerate(input) }}
                        />
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-bold text-lg shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 border-none px-8 h-12 rounded-lg relative overflow-hidden group/btn"
                            onClick={() => onGenerate(input)}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Generate <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                    className="pt-8 flex items-center justify-center gap-4 text-sm text-white/40"
                >
                    <span>Or start from scratch:</span>
                    <Button
                        variant="outline"
                        className="bg-black border-white/10 hover:bg-black hover:border-white/30 text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 h-10 px-6"
                        onClick={onStart}
                    >
                        Open Builder <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                </motion.div>
            </div>
        </div>
    )
}

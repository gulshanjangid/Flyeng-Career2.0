"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Sparkles, FileCode, ChevronRight, Code } from "lucide-react"
import { cn } from "@/lib/utils"

interface GenerationViewProps {
    step: number
    prompt: string
    files: any[]
}

export function GenerationView({ step, prompt, files }: GenerationViewProps) {
    const [logLines, setLogLines] = useState<string[]>([])
    const scrollRef = useRef<HTMLDivElement>(null)
    const [codeLines, setCodeLines] = useState<number>(0)
    const [selectedFileContent, setSelectedFileContent] = useState<string | null>(null)

    useEffect(() => {
        if (step === 0) {
            const logs = [
                "Initializing neural network...",
                `Analyzing prompt: "${prompt}"`,
                "Detecting intent: Portfolio / Landing Page",
                "Loading component library...",
                "Optimizing for SEO...",
                "Generating color palette...",
                "Selecting typography...",
                "Drafting layout structure..."
            ]
            let i = 0
            const interval = setInterval(() => {
                if (i < logs.length) {
                    setLogLines(prev => [...prev, `> ${logs[i]}`])
                    i++
                    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
                } else {
                    clearInterval(interval)
                }
            }, 300)
            return () => clearInterval(interval)
        }
    }, [step, prompt])

    // Simulate code typing effect and file tree
    useEffect(() => {
        if (step >= 1) {
            const interval = setInterval(() => {
                setCodeLines(prev => {
                    if (prev < 25) return prev + 1
                    clearInterval(interval)
                    return prev
                })
            }, 80)
            return () => clearInterval(interval)
        }
    }, [step])

    const fileTree = files.length > 0 ? files : [
        {
            name: "app", type: "folder", children: [
                { name: "layout.tsx", type: "file" },
                { name: "page.tsx", type: "file" },
                { name: "globals.css", type: "file" },
            ]
        },
        {
            name: "components", type: "folder", children: [
                { name: "hero.tsx", type: "file" },
                { name: "features.tsx", type: "file" },
                { name: "navbar.tsx", type: "file" },
                { name: "footer.tsx", type: "file" },
            ]
        },
        {
            name: "lib", type: "folder", children: [
                { name: "utils.ts", type: "file" },
            ]
        },
    ]

    const handleFileClick = (file: any) => {
        if (file.type === 'file' && file.content) {
            setSelectedFileContent(file.content)
        }
    }

    return (
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px]">

            {/* Left: Agent Thinking (Matrix Style) */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 flex flex-col relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.8))] z-10 pointer-events-none" />
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4 relative z-20">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center relative">
                        <div className="absolute inset-0 rounded-full border border-cyan-500/50 animate-ping" />
                        <Sparkles className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-white tracking-wide">AI Architect</h3>
                        <p className="text-xs text-cyan-400/80 font-mono">v2.5.0-beta // ONLINE</p>
                    </div>
                </div>

                <div ref={scrollRef} className="flex-1 space-y-2 font-mono text-xs md:text-sm overflow-y-auto custom-scrollbar relative z-20 pb-10">
                    {logLines.map((line, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-white/70 border-l-2 border-cyan-500/30 pl-3"
                        >
                            <span className="text-cyan-500 mr-2">[{new Date().toLocaleTimeString()}]</span>
                            {line}
                        </motion.div>
                    ))}
                    {step >= 1 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 border-l-2 border-green-500/50 pl-3 font-bold">
                            &gt; Layout generated successfully.
                        </motion.div>
                    )}
                    {step >= 2 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-purple-400 border-l-2 border-purple-500/50 pl-3 font-bold">
                            &gt; Injecting React components...
                        </motion.div>
                    )}
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                    <motion.div
                        className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                        initial={{ width: "0%" }}
                        animate={{ width: step === 0 ? "30%" : step === 1 ? "70%" : "100%" }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />
                </div>
            </div>

            {/* Right: Code Generation (IDE Style) */}
            <div className="bg-[#1e1e1e] border border-white/10 rounded-2xl flex flex-col relative font-mono text-sm shadow-2xl overflow-hidden group">
                {/* IDE Header */}
                <div className="bg-[#252526] px-4 py-2 flex items-center justify-between border-b border-white/5">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="text-xs text-white/40 flex items-center gap-2">
                        <FileCode className="w-3 h-3" /> page.tsx
                    </div>
                </div>

                <div className="flex-1 p-6 overflow-hidden relative bg-[#1e1e1e]">
                    {step === 0 && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                            <div className="relative">
                                <div className="w-16 h-16 rounded-full border-4 border-white/10 border-t-cyan-500 animate-spin" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Code className="w-6 h-6 text-white/20" />
                                </div>
                            </div>
                            <p className="text-white/40 text-xs animate-pulse">Waiting for architect...</p>
                        </div>
                    )}
                    {step >= 1 && (
                        <div className="flex h-full">
                            {/* File Tree Visualization */}
                            <div className="w-48 border-r border-white/5 bg-[#252526]/50 p-4 font-mono text-xs text-white/60 hidden md:block overflow-y-auto custom-scrollbar">
                                <div className="mb-2 font-bold text-white/40 uppercase tracking-wider flex items-center justify-between">
                                    Explorer
                                    <span className="text-[10px] bg-white/10 px-1 rounded">GIT: main</span>
                                </div>
                                {fileTree.map((item: any, i: number) => (
                                    <div key={i} className="mb-2">
                                        <div className="flex items-center gap-1 text-white/80">
                                            <ChevronRight className="w-3 h-3" /> {item.name}
                                        </div>
                                        <div className="pl-4 space-y-1 mt-1 border-l border-white/5 ml-1.5">
                                            {item.children?.map((child: any, j: number) => (
                                                <motion.div
                                                    key={j}
                                                    initial={{ opacity: 0, x: -5 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 + j * 0.05 }}
                                                    className={cn(
                                                        "flex items-center gap-1.5 hover:bg-white/5 rounded px-1 cursor-pointer transition-colors",
                                                        selectedFileContent === child.content && "bg-white/10 text-cyan-400"
                                                    )}
                                                    onClick={() => handleFileClick(child)}
                                                >
                                                    <FileCode className="w-3 h-3 text-cyan-500/70" /> {child.name}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Code Preview */}
                            <div className="flex-1 p-6 overflow-hidden relative bg-[#1e1e1e] flex flex-col">
                                {selectedFileContent ? (
                                    <div className="h-full overflow-y-auto custom-scrollbar">
                                        <pre className="text-xs font-mono text-white/80 whitespace-pre-wrap">
                                            {selectedFileContent}
                                        </pre>
                                    </div>
                                ) : (
                                    <div className="space-y-1">
                                        {[
                                            <div key="1" className="flex"><span className="text-gray-500 w-6">1</span><span className="text-[#c586c0]">import</span> <span className="text-[#9cdcfe]">React</span> <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'react'</span></div>,
                                            <div key="2" className="flex"><span className="text-gray-500 w-6">2</span><span className="text-[#c586c0]">import</span> <span className="text-[#dcdcaa]">Hero</span> <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'@/components/hero'</span></div>,
                                            <div key="3" className="flex"><span className="text-gray-500 w-6">3</span><span className="text-[#c586c0]">import</span> <span className="text-[#dcdcaa]">Features</span> <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'@/components/features'</span></div>,
                                            <div key="4" className="flex"><span className="text-gray-500 w-6">4</span><span className="text-[#c586c0]">import</span> <span className="text-[#dcdcaa]">Navbar</span> <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'@/components/navbar'</span></div>,
                                            <div key="5" className="flex"><span className="text-gray-500 w-6">5</span></div>,
                                            <div key="6" className="flex"><span className="text-gray-500 w-6">6</span><span className="text-[#c586c0]">export</span> <span className="text-[#c586c0]">default</span> <span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">Page</span>() {'{'}</div>,
                                            <div key="7" className="flex"><span className="text-gray-500 w-6">7</span><span className="pl-4 text-[#c586c0]">return</span> (</div>,
                                            <div key="8" className="flex"><span className="text-gray-500 w-6">8</span><span className="pl-8 text-[#808080]">&lt;</span><span className="text-[#569cd6]">main</span> <span className="text-[#9cdcfe]">className</span>=<span className="text-[#ce9178]">"min-h-screen bg-black"</span><span className="text-[#808080]">&gt;</span></div>,
                                            <div key="9" className="flex"><span className="text-gray-500 w-6">9</span><span className="pl-12 text-[#808080]">&lt;</span><span className="text-[#4ec9b0]">Navbar</span> <span className="text-[#808080]">/&gt;</span></div>,
                                            <div key="10" className="flex"><span className="text-gray-500 w-6">10</span><span className="pl-12 text-[#808080]">&lt;</span><span className="text-[#4ec9b0]">Hero</span></div>,
                                            <div key="11" className="flex"><span className="text-gray-500 w-6">11</span><span className="pl-16 text-[#9cdcfe]">title</span>=<span className="text-[#ce9178]">"{prompt.substring(0, 20)}..."</span></div>,
                                            <div key="12" className="flex"><span className="text-gray-500 w-6">12</span><span className="pl-16 text-[#9cdcfe]">theme</span>=<span className="text-[#ce9178]">"modern"</span></div>,
                                            <div key="13" className="flex"><span className="text-gray-500 w-6">13</span><span className="pl-12 text-[#808080]">/&gt;</span></div>,
                                            <div key="14" className="flex"><span className="text-gray-500 w-6">14</span><span className="pl-12 text-[#808080]">&lt;</span><span className="text-[#4ec9b0]">Features</span> <span className="text-[#808080]">/&gt;</span></div>,
                                            <div key="15" className="flex"><span className="text-gray-500 w-6">15</span><span className="pl-12 text-[#808080]">&lt;</span><span className="text-[#4ec9b0]">Testimonials</span> <span className="text-[#808080]">/&gt;</span></div>,
                                            <div key="16" className="flex"><span className="text-gray-500 w-6">16</span><span className="pl-12 text-[#808080]">&lt;</span><span className="text-[#4ec9b0]">Footer</span> <span className="text-[#808080]">/&gt;</span></div>,
                                            <div key="17" className="flex"><span className="text-gray-500 w-6">17</span><span className="pl-8 text-[#808080]">&lt;/</span><span className="text-[#569cd6]">main</span><span className="text-[#808080]">&gt;</span></div>,
                                            <div key="18" className="flex"><span className="text-gray-500 w-6">18</span><span className="pl-4">)</span></div>,
                                            <div key="19" className="flex"><span className="text-gray-500 w-6">19</span>{'}'}</div>
                                        ].slice(0, codeLines).map((line, i) => (
                                            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.1 }}>
                                                {line}
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

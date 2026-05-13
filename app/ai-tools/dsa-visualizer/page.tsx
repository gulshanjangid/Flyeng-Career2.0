"use client"

import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowRight, BarChart3, Search, Zap, Code2, BrainCircuit, PlayCircle, Sparkles, Layers, Cpu, MousePointer2 } from "lucide-react"
import Link from "next/link"
import { HeroVisualizer } from "./hero-visualizer"
import { useRef } from "react"

export default function DSAVisualizerLanding() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, 200])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <div ref={containerRef} className="min-h-screen bg-[#030014] text-white flex flex-col font-sans selection:bg-blue-500/30 overflow-hidden perspective-1000">
            <SiteHeader />

            <main className="flex-1 relative">
                {/* Dynamic Background - Optimized for mobile */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-1000" />
                    <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-indigo-500/10 rounded-full blur-[100px] md:blur-[150px]" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                    {/* Shooting Stars Effect - Reduced for mobile */}
                    <div className="absolute inset-0 hidden md:block">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: -100, y: Math.random() * 600, opacity: 0 }}
                                animate={{ x: 1500, y: Math.random() * 600 + 100, opacity: [0, 1, 0] }}
                                transition={{
                                    duration: Math.random() * 3 + 3,
                                    repeat: Infinity,
                                    delay: Math.random() * 5,
                                    ease: "linear"
                                }}
                                className="absolute w-[150px] h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -rotate-12"
                            />
                        ))}
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 container mx-auto px-4 z-10 flex flex-col items-center justify-center">
                    <motion.div
                        style={{ y, opacity }}
                        className="text-center max-w-5xl mx-auto mb-12 md:mb-20 relative will-change-transform transform-gpu"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-20"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md hover:bg-white/10 transition-all cursor-default shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                                <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                                <span className="text-sm text-blue-200/80 font-medium tracking-wide">Next-Gen Algorithm Visualization</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
                                Master Algorithms <br className="hidden sm:block" />
                                <span className="sm:hidden"> </span>
                                <span className="relative inline-block">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient-x">
                                        Visually
                                    </span>
                                    <motion.div
                                        className="absolute -bottom-2 left-0 w-full h-1 md:h-2 bg-blue-500/30 blur-lg"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: 0.5, duration: 1 }}
                                    />
                                </span>
                            </h1>

                            <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4">
                                Experience sorting, searching, and graph algorithms with immersive
                                <span className="text-blue-400 font-semibold"> real-time animations</span>.
                                Make complex logic click instantly.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                                <Link href="/ai-tools/dsa-visualizer/playground">
                                    <Button className="h-14 px-8 text-lg rounded-full bg-blue-600 hover:bg-blue-700 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] transition-all hover:scale-105 group relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                        Start Visualizing
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-white/40">
                                    <div className="flex items-center gap-1">
                                        <Code2 className="w-3 h-3 md:w-4 md:h-4" /> <span className="hidden sm:inline">JS/Python/Java/C++</span><span className="sm:hidden">Multi-Lang</span>
                                    </div>
                                    <div className="w-1 h-1 rounded-full bg-white/20" />
                                    <div className="flex items-center gap-1">
                                        <MousePointer2 className="w-3 h-3 md:w-4 md:h-4" /> <span>Interactive</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 3D Floating Visualizer Preview */}
                        <motion.div
                            initial={{ opacity: 0, y: 100, rotateX: 20 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ duration: 1, delay: 0.4, type: "spring" }}
                            className="mt-10 md:mt-20 relative max-w-[95vw] md:max-w-3xl mx-auto perspective-1000 group will-change-transform transform-gpu"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                            <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] hover:-rotate-x-2">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
                                <HeroVisualizer />
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Bento Grid Features */}
                <section className="py-12 md:py-20 container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                        {/* Large Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="col-span-1 md:col-span-2 md:row-span-2 rounded-2xl md:rounded-3xl bg-[#0a0a0a]/50 border border-white/10 p-6 md:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500 border border-blue-500/20">
                                    <BarChart3 className="w-6 h-6 md:w-7 md:h-7 text-blue-400" />
                                </div>
                                <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-white">Sorting Engine</h3>
                                <p className="text-white/60 mb-6 md:mb-8 max-w-md leading-relaxed text-sm md:text-lg">
                                    Watch Bubble, Quick, Merge, Insertion, and Selection sort algorithms race in real-time.
                                    Understand how they compare elements, swap values, and conquer chaos.
                                </p>

                                {/* Abstract Visualization Decoration */}
                                <div className="flex items-end gap-1 md:gap-2 h-24 md:h-40 opacity-50 group-hover:opacity-80 transition-opacity mask-image-b">
                                    {[40, 70, 30, 85, 50, 20, 90, 60, 10, 45, 75, 25, 95, 55, 35].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: `${h}%` }}
                                            animate={{ height: [`${h}%`, `${Math.random() * 100}%`, `${h}%`] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                                            className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Small Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="rounded-2xl md:rounded-3xl bg-[#0a0a0a]/50 border border-white/10 p-5 md:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-purple-500/10 flex items-center justify-center mb-4 md:mb-6 border border-purple-500/20 group-hover:rotate-12 transition-transform">
                                <Search className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Smart Search</h3>
                            <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                                Visualize Linear and Binary search. See how algorithms narrow down targets in milliseconds.
                            </p>
                        </motion.div>

                        {/* Small Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="rounded-2xl md:rounded-3xl bg-[#0a0a0a]/50 border border-white/10 p-5 md:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-pink-500/30 transition-all duration-500 hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-pink-500/10 flex items-center justify-center mb-4 md:mb-6 border border-pink-500/20 group-hover:rotate-12 transition-transform">
                                <BrainCircuit className="w-5 h-5 md:w-6 md:h-6 text-pink-400" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Complexity Analysis</h3>
                            <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                                Master Big O notation. Compare Time and Space complexity for every algorithm instantly.
                            </p>
                        </motion.div>

                        {/* Wide Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="col-span-1 md:col-span-3 rounded-2xl md:rounded-3xl bg-[#0a0a0a]/50 border border-white/10 p-5 md:p-8 backdrop-blur-xl relative overflow-hidden group flex flex-col md:flex-row items-center gap-6 md:gap-8 hover:border-green-500/30 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="flex-1 relative z-10">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-green-500/10 flex items-center justify-center mb-4 md:mb-6 border border-green-500/20">
                                    <Code2 className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Interactive Code Walkthroughs</h3>
                                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                                    Don't just watch—read the code. Every visualization comes with clean, commented implementations in
                                    <span className="text-green-400 font-mono"> JS, Python, Java, C++</span> that highlight the logic as it executes.
                                </p>
                            </div>
                            <div className="flex-1 w-full bg-[#050505] rounded-xl border border-white/10 p-4 font-mono text-sm text-blue-300 opacity-80 group-hover:opacity-100 transition-opacity shadow-2xl">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                </div>
                                <p><span className="text-purple-400">function</span> <span className="text-yellow-200">bubbleSort</span>(arr) {'{'}</p>
                                <p className="pl-4"><span className="text-purple-400">for</span> (<span className="text-purple-400">let</span> i = 0; i &lt; n; i++) {'{'}</p>
                                <p className="pl-8"><span className="text-gray-500">// Compare adjacent elements</span></p>
                                <p className="pl-8"><span className="text-purple-400">if</span> (arr[j] &gt; arr[j+1]) {'{'}</p>
                                <p className="pl-12">swap(arr, j, j+1);</p>
                                <p className="pl-8">{'}'}</p>
                                <p className="pl-4">{'}'}</p>
                                <p>{'}'}</p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <EnhancedFooter />
        </div>
    )
}

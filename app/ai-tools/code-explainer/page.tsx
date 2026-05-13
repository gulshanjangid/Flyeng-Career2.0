"use client"

import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Code2, Terminal, Zap, BookOpen, Layers, CheckCircle2, Bug, Cpu, Globe, Lightbulb, Star, Users, ChevronRight, Hash } from 'lucide-react'
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

export default function CodeExplainerPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null)
    const [typedText, setTypedText] = useState("")
    const fullText = "explain_code --mode=simple"

    useEffect(() => {
        if (typedText.length < fullText.length) {
            const timeout = setTimeout(() => {
                setTypedText(fullText.slice(0, typedText.length + 1))
            }, 100)
            return () => clearTimeout(timeout)
        }
    }, [typedText, fullText])

    return (
        <div className="relative min-h-screen bg-[#0d1117] text-green-400 overflow-hidden flex flex-col font-mono selection:bg-green-900 selection:text-white">
            <SiteHeader />

            {/* Matrix Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-xs font-bold text-green-500 writing-vertical-rl"
                        style={{
                            left: Math.random() * 100 + '%',
                            top: -100,
                            opacity: Math.random()
                        }}
                        animate={{ top: '100%' }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                    >
                        {Array.from({ length: 20 }).map(() => String.fromCharCode(33 + Math.random() * 93)).join('')}
                    </motion.div>
                ))}
            </div>

            <main className="flex-1 pt-24 pb-20 relative z-10">
                {/* Hero Section - Terminal */}
                <section className="container mx-auto px-4 mb-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-8"
                    >
                        <div className="bg-black border border-green-500/50 rounded-lg p-4 shadow-[0_0_20px_rgba(34,197,94,0.2)] font-mono text-left min-w-[300px]">
                            <div className="flex gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div>
                                <span className="text-green-500">$ </span>
                                <span className="text-white">{typedText}</span>
                                <span className="animate-pulse bg-green-500 w-2 h-4 inline-block ml-1 align-middle"></span>
                            </div>
                        </div>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white font-heading">
                        <span className="text-green-500">&lt;</span>
                        Decode Complexity
                        <span className="text-green-500">/&gt;</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        // AI-powered code explanation for developers.<br />
                        // Understand any snippet in seconds.
                    </p>

                    <div className="flex justify-center gap-6">
                        <Link href="/ai-tools/code-explainer/app">
                            <Button className="bg-green-600 hover:bg-green-700 text-black font-bold px-10 py-6 text-lg rounded-sm shadow-[4px_4px_0_#000] border border-green-400 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all group relative overflow-hidden">
                                <span className="relative z-10 flex items-center">
                                    <Terminal className="w-5 h-5 mr-2" /> Run Explainer
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                            </Button>
                        </Link>
                    </div>
                </section>

                {/* Stats - System Status */}
                <section className="container mx-auto px-4 mb-32">
                    <div className="border border-green-500/30 rounded-lg bg-[#0d1117] p-1 font-mono text-sm shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                        <div className="bg-green-900/20 p-2 border-b border-green-500/30 flex justify-between items-center">
                            <span className="animate-pulse text-green-400">● SYSTEM_STATUS: ONLINE</span>
                            <div className="flex gap-2 text-xs text-slate-500">
                                <span>CPU: 12%</span>
                                <span>MEM: 45%</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-green-500/30">
                            {[
                                { label: "Lines Parsed", value: "1B+" },
                                { label: "Languages", value: "50+" },
                                { label: "Bugs Fixed", value: "10M+" },
                                { label: "Uptime", value: "99.99%" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                                    className="bg-[#0d1117] p-6 text-center transition-colors cursor-crosshair"
                                >
                                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-xs text-green-500">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Success Stories - Git Log */}
                <section className="container mx-auto px-4 mb-32">
                    <h2 className="text-3xl font-bold text-center mb-16 text-white font-heading">
                        <span className="text-green-500">git log</span> --oneline
                    </h2>
                    <div className="space-y-4 max-w-4xl mx-auto font-mono">
                        {[
                            { hash: "a1b2c3d", author: "Dev_Sarah", msg: "Finally understood that legacy regex thanks to this tool", tag: "feat" },
                            { hash: "e5f6g7h", author: "Junior_Mike", msg: "Fixed the production bug in record time", tag: "fix" },
                            { hash: "i8j9k0l", author: "Senior_Tom", msg: "Onboarded new team members 2x faster", tag: "chore" },
                        ].map((commit, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ x: 5 }}
                                className="flex flex-col md:flex-row gap-4 p-4 border-l-2 border-green-500 bg-green-900/10 hover:bg-green-900/20 transition-all cursor-pointer"
                            >
                                <span className="text-yellow-500">{commit.hash}</span>
                                <span className="px-2 py-0.5 text-xs rounded bg-blue-900 text-blue-300 w-fit">
                                    {commit.tag}
                                </span>
                                <span className="text-slate-300 flex-1">{commit.msg}</span>
                                <span className="text-green-600 text-sm">&lt;{commit.author}&gt;</span>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Target Audience - Interface Definitions */}
                <section className="container mx-auto px-4 mb-32">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-8 text-white font-heading">
                                interface <span className="text-yellow-400">TargetAudience</span> {'{'}
                            </h2>
                            <p className="text-slate-400 mb-8 text-lg">
                                // We support developers at every level of the stack.
                            </p>
                        </div>
                        <div className="bg-[#010409] border border-slate-700 rounded-lg p-6 shadow-2xl font-mono text-sm overflow-hidden relative group">
                            <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                <div className="text-xs text-slate-500">TypeScript</div>
                            </div>
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="space-y-4">
                                {[
                                    { role: "Beginner", task: "Learning syntax & logic" },
                                    { role: "Maintainer", task: "Reading legacy code" },
                                    { role: "Reviewer", task: "Understanding PRs" },
                                ].map((item, i) => (
                                    <TypewriterCode key={i} item={item} delay={i * 0.5} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ - Code Regions */}
                <section className="container mx-auto px-4 mb-32 max-w-3xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white font-heading">
                        <span className="text-purple-500">import</span> Answers <span className="text-purple-500">from</span> 'faq'
                    </h2>
                    <div className="space-y-2 font-mono">
                        {[
                            { q: "supported_languages()", a: "return ['Python', 'JS', 'Java', 'C++', 'Go', 'Rust', ...all];" },
                            { q: "is_secure()", a: "return true; // Code is processed in memory and never stored." },
                            { q: "handle_complexity(level)", a: "if (level === 'expert') return 'Deep technical breakdown';" },
                        ].map((faq, i) => (
                            <div key={i} className="border border-slate-800 rounded bg-[#0d1117]">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full flex items-center gap-2 p-4 text-left hover:bg-slate-800 transition-colors group"
                                >
                                    <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${activeFaq === i ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                                    <span className="text-blue-400 font-bold group-hover:text-blue-300">{faq.q}</span>
                                </button>
                                <AnimatePresence>
                                    {activeFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-4 pt-0 pl-10 text-slate-400 border-t border-slate-800/50 bg-black/20">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="container mx-auto px-4 text-center">
                    <div className="border border-green-500 rounded-lg p-12 relative overflow-hidden bg-green-900/10 group">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 group-hover:opacity-20 transition-opacity" />
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-8 text-white font-heading">Ready to Compile?</h2>
                            <Link href="/ai-tools/code-explainer/app">
                                <Button className="bg-green-600 hover:bg-green-700 text-black font-bold px-12 py-6 text-xl rounded-sm shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]">
                                    &gt; Start_Session
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <EnhancedFooter />
        </div>
    )
}

function TypewriterCode({ item, delay }: { item: any, delay: number }) {
    const [visible, setVisible] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            const timeout = setTimeout(() => setVisible(true), delay * 500)
            return () => clearTimeout(timeout)
        }
    }, [isInView, delay])

    return (
        <div ref={ref} className={`pl-4 border-l border-slate-700 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-purple-400">const</span> <span className="text-blue-400">{item.role.toLowerCase()}</span>: <span className="text-yellow-400">Developer</span> = {'{'} <br />
            &nbsp;&nbsp;focus: <span className="text-green-300">"{item.task}"</span> <br />
            {'}'}
        </div>
    )
}

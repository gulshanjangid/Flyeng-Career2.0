"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, BrainCircuit, Rocket, Sparkles, Feather, CloudRain, CopyCheck, Code2, ShieldAlert, TrendingUp, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Inter, Oswald } from "next/font/google"
import { cn } from "@/lib/utils"

const oswald = Oswald({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

const PERSONAS = [
    {
        id: "thought-leader",
        name: "Thought Leader",
        icon: Briefcase,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        shadow: "shadow-[0_0_15px_rgba(59,130,246,0.2)]",
        desc: "Turns it into a 5-paragraph LinkedIn post about B2B SaaS."
    },
    {
        id: "passive-aggressive",
        name: "HR Manager",
        icon: BrainCircuit,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
        shadow: "shadow-[0_0_15px_rgba(245,158,11,0.2)]",
        desc: "Polite, professional, and ruthessly passive-aggressive."
    },
    {
        id: "gen-z",
        name: "Brainrot Gen-Z",
        icon: Sparkles,
        color: "text-pink-400",
        bg: "bg-pink-500/10",
        border: "border-pink-500/20",
        shadow: "shadow-[0_0_15px_rgba(236,72,153,0.2)]",
        desc: "Translates text to TikTok slang. Skibidi rizz no cap."
    },
    {
        id: "hype-man",
        name: "The Hype Man",
        icon: Rocket,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        shadow: "shadow-[0_0_15px_rgba(16,185,129,0.2)]",
        desc: "Hypes up your tiny task like you just cured cancer."
    },
    {
        id: "shakespearean",
        name: " Shakespeare",
        icon: Feather,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        shadow: "shadow-[0_0_15px_rgba(168,85,247,0.2)]",
        desc: "A dramatic 16th-century poetic monologue."
    },
    {
        id: "doomer",
        name: "Nihilist Doomer",
        icon: CloudRain,
        color: "text-slate-400",
        bg: "bg-slate-500/10",
        border: "border-slate-500/20",
        shadow: "shadow-[0_0_15px_rgba(148,163,184,0.2)]",
        desc: "Intense existential dread over minor inconveniences."
    },
    {
        id: "code-reviewer",
        name: "Senior Code Reviewer",
        icon: Code2,
        color: "text-red-400",
        bg: "bg-red-500/10",
        border: "border-red-500/20",
        shadow: "shadow-[0_0_15px_rgba(248,113,113,0.2)]",
        desc: "Passive-aggressive 10x dev roasting your complexity."
    },
    {
        id: "junior-panic",
        name: "Panicking Junior Dev",
        icon: ShieldAlert,
        color: "text-orange-400",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
        shadow: "shadow-[0_0_15px_rgba(251,146,60,0.2)]",
        desc: "Terrified they just broke production. Please help."
    },
    {
        id: "yc-vc",
        name: "Silicon Valley VC",
        icon: TrendingUp,
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        shadow: "shadow-[0_0_15px_rgba(34,211,238,0.2)]",
        desc: "Pitches your text as a billion-dollar Web3 AI Unicorn."
    },
    {
        id: "brogrammer",
        name: "Tech Brogrammer",
        icon: Dumbbell,
        color: "text-lime-400",
        bg: "bg-lime-500/10",
        border: "border-lime-500/20",
        shadow: "shadow-[0_0_15px_rgba(163,230,53,0.2)]",
        desc: "Gym metaphors, macros, and grinding LeetCode Hards."
    }
]

export function VibeShiftClient() {
    const [inputText, setInputText] = useState("")
    const [selectedPersona, setSelectedPersona] = useState(PERSONAS[0].id)
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [output, setOutput] = useState<{ translatedText: string, emoji: string, title: string } | null>(null)
    const [copied, setCopied] = useState(false)

    const handleTranslate = async (overridePersona?: string) => {
        if (!inputText.trim()) return
        
        const targetPersona = overridePersona || selectedPersona
        setSelectedPersona(targetPersona)
        setStatus("loading")
        setOutput(null)

        try {
            const res = await fetch("/api/vibeshift", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: inputText, persona: targetPersona })
            })

            const data = await res.json()

            if (!res.ok) throw new Error(data.error || "Generation failed")

            setOutput(data)
            setStatus("success")
        } catch (error) {
            console.error(error)
            setStatus("error")
            setOutput({
                translatedText: "An error occurred in the space-time continuum. The VibeShift machine broke. Try again.",
                emoji: "💀",
                title: "System Failure"
            })
        }
    }

    const handleCopy = () => {
        if (!output) return
        navigator.clipboard.writeText(output.translatedText)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    // Grid animation variants
    const containerVariants = { start: { opacity: 0 }, end: { opacity: 1, transition: { staggerChildren: 0.1 } } }
    const itemVariants = { start: { opacity: 0, scale: 0.9 }, end: { opacity: 1, scale: 1 } }

    return (
        <div className={cn("min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-500/30", inter.className)}>
            <SiteHeader />

            {/* BACKGROUND AMBIENCE */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute top-[40%] left-[20%] w-[60%] h-[20%] bg-blue-600/5 blur-[150px] mix-blend-screen" />
            </div>

            <main className="relative z-10 pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <header className="mb-14 text-center max-w-3xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-6">
                        <Sparkles className="w-4 h-4" /> VibeShift AI
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className={cn("text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white", oswald.className)}>
                        Translate <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Boring Texts</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-slate-400 leading-relaxed font-light">
                        Never sound generic again. Type any mundane thought and instantly translate it into 6 completely unhinged internet personas. Zero scraping required.
                    </motion.p>
                </header>

                <div className="grid lg:grid-cols-[1fr,1fr] gap-10 lg:gap-16 items-start">
                    
                    {/* LEFT COLUMN: INPUT & PERSONAS */}
                    <div className="space-y-8">
                        {/* INPUT CARD */}
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="p-1 rounded-2xl bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-slate-700/50 shadow-2xl backdrop-blur-sm">
                            <div className="bg-slate-900/80 rounded-xl p-5">
                                <label className="block text-sm font-bold tracking-widest uppercase text-slate-400 mb-3">Your Base Text</label>
                                <textarea 
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder="E.g., I drank a cup of coffee and replied to an email."
                                    className="w-full h-32 bg-slate-950/50 border border-slate-700/50 rounded-lg p-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none font-light"
                                />
                                <div className="text-right mt-2 text-xs text-slate-600">
                                    {inputText.length}/500 chars limit
                                </div>
                            </div>
                        </motion.div>

                        {/* PERSONA GRID */}
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-indigo-400" />
                                    <h3 className="text-lg font-semibold text-slate-200">Select Transformation Vibe</h3>
                                </div>
                                <span className="text-xs font-bold text-indigo-400/50 uppercase tracking-widest">{PERSONAS.length} Personas</span>
                            </div>
                            {/* Make the grid scrollable on small screens if it gets too long, or use auto-fit */}
                            <motion.div variants={containerVariants} initial="start" animate="end" className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[600px] overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(99, 102, 241, 0.2) transparent' }}>
                                {PERSONAS.map((p) => (
                                    <motion.button
                                        key={p.id}
                                        variants={itemVariants}
                                        onClick={() => handleTranslate(p.id)}
                                        disabled={status === "loading" || !inputText.trim()}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={cn(
                                            "relative text-left p-4 rounded-xl border transition-all duration-300 group overflow-hidden",
                                            selectedPersona === p.id ? `${p.bg} ${p.border} ${p.shadow}` : "bg-slate-900/40 hover:bg-slate-800/60 border-slate-800 hover:border-slate-700",
                                            (status === "loading" || !inputText.trim()) && "opacity-50 cursor-not-allowed hover:scale-100 object-cover"
                                        )}
                                    >
                                        <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full")} />
                                        <div className="flex items-start gap-3 relative z-10">
                                            <div className={cn("p-2 rounded-lg mt-0.5", p.bg)}>
                                                <p.icon className={cn("w-5 h-5", p.color)} />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-200 text-sm mb-1">{p.name}</h4>
                                                <p className="text-xs text-slate-500 font-light leading-snug">{p.desc}</p>
                                            </div>
                                        </div>
                                    </motion.button>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: OUTPUT */}
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="h-full flex flex-col">
                        <div className="flex-1 bg-slate-900/60 border border-slate-700/50 rounded-2xl p-6 lg:p-10 shadow-2xl backdrop-blur-sm relative overflow-hidden flex flex-col min-h-[500px]">
                            
                            {status === "idle" && (
                                <div className="flex flex-col items-center justify-center flex-1 text-center h-full opacity-50">
                                    <Code2 className="w-16 h-16 text-slate-600 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-slate-400">Awaiting Signal</h3>
                                    <p className="text-slate-500 font-light text-sm max-w-xs">Type your boring thought and click a persona button to vibe shift.</p>
                                </div>
                            )}

                            {status === "loading" && (
                                <div className="flex flex-col items-center justify-center flex-1 h-full">
                                    <div className="relative w-24 h-24 mb-6">
                                        <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full" />
                                        <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Sparkles className="w-8 h-8 text-indigo-400 animate-pulse" />
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-indigo-300 animate-pulse">Shifting Dimensional Vibe...</h3>
                                </div>
                            )}

                            {output && (status === "success" || status === "error") && (
                                <AnimatePresence mode="wait">
                                    <motion.div 
                                        key={selectedPersona}
                                        initial={{ opacity: 0, y: 20 }} 
                                        animate={{ opacity: 1, y: 0 }} 
                                        exit={{ opacity: 0, y: -20 }}
                                        className="flex flex-col h-full"
                                    >
                                        <div className="flex items-strat justify-between gap-4 mb-8">
                                            <div className="flex items-center gap-4">
                                                <div className="text-5xl">{output.emoji}</div>
                                                <div>
                                                    <span className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-1 block">Translation Result</span>
                                                    <h2 className="text-2xl font-bold text-slate-200">{output.title}</h2>
                                                </div>
                                            </div>
                                            <Button 
                                                onClick={handleCopy} 
                                                variant="outline" 
                                                className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors"
                                            >
                                                {copied ? <CopyCheck className="w-4 h-4 mr-2 text-emerald-400" /> : <CopyCheck className="w-4 h-4 mr-2 text-slate-400" />}
                                                {copied ? "Copied" : "Copy"}
                                            </Button>
                                        </div>

                                        <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-8 flex-1 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative group">
                                            {/* Stylized quotes with gradient */}
                                            <div className="absolute top-4 left-4 text-7xl text-slate-800 font-serif opacity-40 pointer-events-none group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">"</div>
                                            <div className="absolute bottom-[-2rem] right-4 text-9xl text-slate-800 font-serif opacity-40 pointer-events-none group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">"</div>
                                            
                                            <p className="text-lg leading-loose font-light text-slate-300 relative z-10 whitespace-pre-wrap font-sans">
                                                {output.translatedText}
                                            </p>

                                            {/* Glow underneath text */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            )}

                        </div>
                    </motion.div>

                </div>
            </main>
            <EnhancedFooter />
        </div>
    )
}

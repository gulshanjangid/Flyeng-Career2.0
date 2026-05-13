"use client"

import { useState, useEffect } from "react"
import { DAYS } from "./data"
import { SiteHeader } from "@/components/site-header"
import { Inter, Quicksand, Fira_Code } from "next/font/google"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Code2, Sparkles, ChevronRight, Zap, Lightbulb, CheckCircle2, XCircle } from "lucide-react"

const quicksand = Quicksand({ subsets: ["latin"], weight: ["500", "700"] })
const inter = Inter({ subsets: ["latin"] })
const mono = Fira_Code({ subsets: ["latin"] })

// Helper to check text matches
function checkText(answers: string[], val: string) {
    const v = val.trim().toLowerCase()
    return answers.some(a => v.includes(a.toLowerCase()))
}

export default function JSBootcampExercises() {
    const [mounted, setMounted] = useState(false)
    const [currentDay, setCurrentDay] = useState(0)
    const [score, setScore] = useState(0)
    const [activeTab, setActiveTab] = useState<'concepts'|'exercises'>('concepts')
    
    // UI states
    const [openCards, setOpenCards] = useState<Record<string, boolean>>({})
    const [hintOpen, setHintOpen] = useState<Record<string, boolean>>({})
    const [solOpen, setSolOpen] = useState<Record<string, boolean>>({})
    
    // Data states
    const [mcPicked, setMcPicked] = useState<Record<string, number>>({})
    const [textAnswers, setTextAnswers] = useState<Record<string, string>>({})
    const [solvedEx, setSolvedEx] = useState<Record<string, boolean>>({})
    const [readConcepts, setReadConcepts] = useState<Record<string, boolean>>({})
    const [feedback, setFeedback] = useState<Record<string, {ok: boolean, msg: string}>>({})

    // Load from localStorage on mount
    useEffect(() => {
        setMounted(true)
        try {
            const savedScore = localStorage.getItem('jse_score')
            if (savedScore) setScore(parseInt(savedScore))

            const savedState = localStorage.getItem('jse_state')
            if (savedState) {
                const parsed = JSON.parse(savedState)
                if (parsed.mcPicked) setMcPicked(parsed.mcPicked)
                if (parsed.textAnswers) setTextAnswers(parsed.textAnswers)
                if (parsed.solvedEx) setSolvedEx(parsed.solvedEx)
                if (parsed.readConcepts) setReadConcepts(parsed.readConcepts)
            }
        } catch(e) {}
    }, [])

    // Save to localStorage
    useEffect(() => {
        if (!mounted) return
        localStorage.setItem('jse_score', score.toString())
        localStorage.setItem('jse_state', JSON.stringify({
            mcPicked, textAnswers, solvedEx, readConcepts
        }))
    }, [score, mcPicked, textAnswers, solvedEx, readConcepts, mounted])

    if (!mounted) return null

    const day = DAYS[currentDay]
    
    // Helpers
    const key = (di: number, ei: number) => `${di}_${ei}`
    const ckey = (di: number, ci: number) => `c_${di}_${ci}`
    const isSolved = (di: number, ei: number) => !!solvedEx[key(di, ei)]
    const isRead = (di: number, ci: number) => !!readConcepts[ckey(di, ci)]
    const dayAllSolved = (di: number) => 
        DAYS[di].exercises.every((_, ei) => isSolved(di, ei)) &&
        (DAYS[di].concepts || []).every((_, ci) => isRead(di, ci))
    
    const toggleCard = (k: string) => setOpenCards(prev => ({...prev, [k]: Object.hasOwn(prev, k) ? !prev[k] : false}))
    
    // Actions
    const handleCheckAnswer = (k: string, ei: number) => {
        const ex = day.exercises[ei]
        const val = textAnswers[k] || ""
        if (!val.trim()) return

        const ok = checkText(ex.answer!, val)
        if (ok) {
            setFeedback(prev => ({...prev, [k]: {ok: true, msg: `✓ Correct! +${ex.pts} pts`}}))
            if (!solvedEx[k]) {
                setSolvedEx(prev => ({...prev, [k]: true}))
                setScore(s => s + ex.pts)
            }
            setOpenCards(prev => ({...prev, [k]: false})) // auto close on success to save space
        } else {
            setFeedback(prev => ({...prev, [k]: {ok: false, msg: `✗ Not quite — check the hint, then try again`}}))
        }
    }

    const handlePickMC = (k: string, ei: number, oi: number) => {
        if (mcPicked[k] !== undefined) return // already picked
        
        const ex = day.exercises[ei]
        const ok = oi === ex.correct
        
        setMcPicked(prev => ({...prev, [k]: oi}))
        
        if (ok) {
            setFeedback(prev => ({...prev, [k]: {ok: true, msg: `✓ Correct! +${ex.pts} pts`}}))
            if (!solvedEx[k]) {
                setSolvedEx(prev => ({...prev, [k]: true}))
                setScore(s => s + ex.pts)
            }
        } else {
             setFeedback(prev => ({...prev, [k]: {ok: false, msg: `✗ Wrong — the correct answer is highlighted`}}))
        }
    }

    const solvedCountThisDay = day.exercises.filter((_, ei) => isSolved(currentDay, ei)).length
    const readCountThisDay = (day.concepts || []).filter((_, ci) => isRead(currentDay, ci)).length
    
    const totalItems = day.exercises.length + (day.concepts ? day.concepts.length : 0);
    const completedItems = solvedCountThisDay + readCountThisDay;
    const progressPct = totalItems === 0 ? 0 : Math.round((completedItems / totalItems) * 100)
    
    const isDayCompleted = dayAllSolved(currentDay)

    return (
        <div className={cn("min-h-screen bg-[#0d0d12] text-slate-200 flex flex-col font-sans", inter.className)}>
            {/* Header */}
            <header className="sticky top-0 z-50 bg-[#12121a]/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between shadow-sm h-[73px]">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center border border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                        <Code2 className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                        <h1 className={cn("font-bold text-slate-100 text-lg", quicksand.className)}>HTML/CSS Bootcamp</h1>
                        <p className="text-xs text-slate-400">by Flyeng Career</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-bold text-sm items-center gap-2">
                        <Zap className="w-4 h-4 text-amber-400 fill-amber-400" /> {score} Points
                    </div>
                </div>
            </header>

            <div className="flex w-full items-start">
                {/* Sidebar */}
                <aside className="sticky top-[73px] w-64 bg-[#12121a] border-r border-white/5 flex-shrink-0 flex-col hidden md:flex h-[calc(100vh-73px)] z-40">
                    <div className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 bg-[#12121a] z-10 w-full mb-2">
                        Curriculum
                    </div>
                    <div className="flex-1 overflow-y-auto px-3 pb-8 space-y-1 custom-scrollbar">
                        {DAYS.map((d, i) => {
                            const active = i === currentDay
                            const done = dayAllSolved(i)
                            return (
                                <button 
                                    key={i}
                                    onClick={() => {
                                        setCurrentDay(i)
                                        setFeedback({}) // clear feedback on day switch
                                        setActiveTab('concepts')
                                        window.scrollTo({ top: 0, behavior: 'smooth' })
                                    }}
                                    className={cn(
                                        "w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 flex items-center justify-between group",
                                        active 
                                            ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/20 shadow-sm"
                                            : "text-slate-400 hover:bg-white/5 hover:text-slate-200",
                                        done && !active && "text-orange-400"
                                    )}
                                >
                                    <span className={cn("font-medium", active && "font-bold")}>Day {i + 1}</span>
                                    {done && <CheckCircle2 className="w-4 h-4 text-orange-500" />}
                                </button>
                            )
                        })}
                    </div>
                </aside>

                {/* Main Content */}
                <main id="main-scroll-area" className="flex-1 p-4 md:p-8 scroll-smooth relative">
                     {/* Ambient Glow */}
                     <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[150px] pointer-events-none rounded-full" />
                    

                    <div className="max-w-3xl mx-auto relative z-10 pb-20">
                        
                        {/* Mobile Sidebar Selector */}
                        <div className="md:hidden mb-6 flex items-center overflow-x-auto gap-2 pb-2 custom-scrollbar">
                            {DAYS.map((_, i) => (
                                <button 
                                    key={i} onClick={() => setCurrentDay(i)}
                                    className={cn(
                                        "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap",
                                        i === currentDay ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30" : "bg-[#1a1a24] text-slate-400 border border-white/5"
                                    )}
                                >
                                    Day {i+1}
                                </button>
                            ))}
                        </div>

                        {/* Day Header */}
                        <div className="mb-8">
                            <h2 className={cn("text-3xl md:text-4xl font-bold text-slate-100 mb-3", quicksand.className)}>
                                {day.title}
                            </h2>
                            <p className="text-slate-400 text-sm md:text-base mb-6 font-medium">
                                {day.sub}
                            </p>
                            
                            {/* Progress */}
                            <div className="flex items-center gap-4 bg-[#1a1a24]/50 border border-white/5 rounded-2xl p-4">
                                <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div 
                                        className="h-full bg-gradient-to-r from-indigo-500 to-teal-400 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progressPct}%` }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    />
                                </div>
                                <span className="text-sm font-bold tracking-widest text-slate-300">
                                    {completedItems}/{totalItems}
                                </span>
                            </div>
                        </div>

                        {/* Tab Switcher */}
                        <div className="flex bg-[#1a1a24] p-1.5 rounded-2xl border border-white/5 mb-8 w-fit">
                            <button
                                onClick={() => setActiveTab('concepts')}
                                className={cn("px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all",
                                    activeTab === 'concepts' ? "bg-indigo-500/20 text-indigo-300 shadow-sm" : "text-slate-400 hover:text-slate-200"
                                )}
                            >
                                📖 Theory ({(day.concepts || []).length})
                            </button>
                            <button
                                onClick={() => setActiveTab('exercises')}
                                className={cn("px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all",
                                    activeTab === 'exercises' ? "bg-orange-500/20 text-teal-300 shadow-sm" : "text-slate-400 hover:text-slate-200"
                                )}
                            >
                                🎯 Exercises ({day.exercises.length})
                            </button>
                        </div>

                        {/* Tab Content Rendering */}
                        {activeTab === 'concepts' ? (
                            <div className="space-y-6">
                                {(day.concepts || []).length === 0 ? (
                                    <div className="text-center py-12 text-slate-500 border border-white/5 rounded-2xl border-dashed">
                                        No theory modules added for this day yet. Check out the exercises!
                                    </div>
                                ) : (
                                    (day.concepts || []).map((concept, ci) => {
                                        const k = ckey(currentDay, ci)
                                        const read = isRead(currentDay, ci)
                                        return (
                                            <div key={ci} className="bg-[#161621] border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden relative">
                                                {read && <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />}
                                                
                                                <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
                                                    <div>
                                                        <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded inline-block mb-3 border border-indigo-500/20">
                                                            Theory Module
                                                        </span>
                                                        <h3 className={cn("text-2xl font-bold text-slate-100", quicksand.className)}>
                                                            {concept.title}
                                                        </h3>
                                                    </div>
                                                </div>

                                                <div className="prose prose-invert max-w-none mb-8 text-slate-300 leading-relaxed text-sm md:text-base relative z-10">
                                                    <p>{concept.text}</p>
                                                </div>

                                                {concept.code && (
                                                    <div className={cn("relative z-10 p-4 md:p-5 rounded-xl bg-[#08080c] border border-white/5 text-[13px] leading-relaxed overflow-x-auto mb-8 thin-scrollbar shadow-inner", mono.className)}>
                                                        <pre className="text-indigo-200/90 m-0"><code>{concept.code}</code></pre>
                                                    </div>
                                                )}

                                                <div className="pt-2 border-t border-white/5 relative z-10">
                                                    <button
                                                        onClick={() => {
                                                            if (!read) setReadConcepts(prev => ({...prev, [k]: true}))
                                                        }}
                                                        disabled={read}
                                                        className={cn(
                                                            "mt-4 w-full sm:w-auto px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all",
                                                            read 
                                                                ? "bg-orange-500/10 text-orange-400 border border-orange-500/20 cursor-default" 
                                                                : "bg-indigo-500 hover:bg-indigo-400 text-white shadow-lg shadow-indigo-500/20"
                                                        )}
                                                    >
                                                        {read ? (
                                                            <><CheckCircle2 className="w-5 h-5" /> Module Completed</>
                                                        ) : (
                                                            <><Check className="w-5 h-5" /> Mark as Read</>
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    })
                                )}
                            </div>
                        ) : (
                            <div className="space-y-4">
                            {day.exercises.map((ex, ei) => {
                                const k = key(currentDay, ei)
                                const solved = isSolved(currentDay, ei)
                                // Standardize default open state: open if not solved, closed if solved (unless explicitly toggled)
                                const isOpen = Object.hasOwn(openCards, k) ? openCards[k] : !solved
                                
                                return (
                                    <div 
                                        key={ei} 
                                        className={cn(
                                            "rounded-2xl border transition-all duration-300 overflow-hidden",
                                            solved 
                                                ? "bg-[#0d1f19]/30 border-orange-500/20" 
                                                : isOpen ? "bg-[#161621] border-indigo-500/30 shadow-[0_8px_30px_-10px_rgba(99,102,241,0.1)]" : "bg-[#1a1a24]/40 border-white/5 hover:border-white/10"
                                        )}
                                    >
                                        {/* Card Header */}
                                        <button 
                                            onClick={() => toggleCard(k)}
                                            className={cn(
                                                "w-full px-5 py-4 flex items-start gap-4 text-left transition-colors",
                                                solved && !isOpen && "hover:bg-[#0d1f19]/50"
                                            )}
                                        >
                                            <div className={cn(
                                                "shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border",
                                                solved 
                                                    ? "bg-orange-500/20 border-orange-500/50 text-orange-400" 
                                                    : "bg-indigo-500/10 border-indigo-500/20 text-indigo-300"
                                            )}>
                                                {solved ? <Check className="w-4 h-4" /> : ei + 1}
                                            </div>
                                            
                                            <div className="flex-1 mt-1 pr-4">
                                                <div className="flex items-center flex-wrap gap-2 mb-2">
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-black/30 px-2 py-0.5 rounded border border-white/5">
                                                        {ex.type}
                                                    </span>
                                                    <span className="text-[11px] font-bold text-amber-500 flex items-center gap-1">
                                                        <Zap className="w-3 h-3" /> {ex.pts} pts
                                                    </span>
                                                </div>
                                                <h3 className={cn("text-base leading-relaxed font-medium transition-colors", solved ? "text-teal-100" : "text-slate-200")}>
                                                    {ex.q}
                                                </h3>
                                            </div>

                                            <div className="mt-1 shrink-0">
                                                <ChevronRight className={cn(
                                                    "w-5 h-5 text-slate-500 transition-transform duration-300",
                                                    isOpen && "rotate-90 text-indigo-400"
                                                )} />
                                            </div>
                                        </button>

                                        {/* Card Body */}
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-5 pb-5 pt-2 border-t border-white/5 border-dashed">
                                                        <div className={cn("p-4 rounded-xl bg-[#08080c] border border-white/5 text-[13px] leading-relaxed overflow-x-auto mb-5 thin-scrollbar", mono.className)}>
                                                            <pre className="text-indigo-200/80 m-0"><code>{ex.code}</code></pre>
                                                        </div>

                                                        {/* Interactive Section */}
                                                        {ex.kind === 'mc' ? (
                                                            <div className="space-y-2 mb-5">
                                                                {ex.opts?.map((opt, oi) => {
                                                                    const picked = mcPicked[k]
                                                                    const isPicked = picked === oi
                                                                    const isCorrect = oi === ex.correct
                                                                    
                                                                    let btnClass = "bg-[#1a1a24] border-white/5 text-slate-300 hover:bg-white/5 hover:border-white/10"
                                                                    
                                                                    if (picked !== undefined) {
                                                                        if (isCorrect) btnClass = "bg-orange-500/10 border-orange-500/50 text-teal-300 cursor-default"
                                                                        else if (isPicked) btnClass = "bg-rose-500/10 border-rose-500/50 text-rose-300 cursor-default"
                                                                        else btnClass = "bg-[#1a1a24]/50 border-white/5 text-slate-500 opacity-50 cursor-default"
                                                                    }

                                                                    return (
                                                                        <button
                                                                            key={oi}
                                                                            onClick={() => handlePickMC(k, ei, oi)}
                                                                            disabled={picked !== undefined}
                                                                            className={cn(
                                                                                "w-full text-left p-4 rounded-xl border text-[14px] font-medium transition-all duration-200",
                                                                                btnClass
                                                                            )}
                                                                        >
                                                                            {opt}
                                                                        </button>
                                                                    )
                                                                })}
                                                            </div>
                                                        ) : (
                                                            <div className="mb-5 space-y-3">
                                                                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Answer</label>
                                                                <textarea 
                                                                    rows={3}
                                                                    placeholder="Type your answer or code here..."
                                                                    value={textAnswers[k] || ""}
                                                                    onChange={(e) => setTextAnswers(prev => ({...prev, [k]: e.target.value}))}
                                                                    className={cn(
                                                                        "w-full bg-[#08080c] border border-white/10 rounded-xl p-4 text-[13px] text-slate-200 resize-y focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all",
                                                                        mono.className,
                                                                        feedback[k]?.ok ? "border-orange-500/50 focus:border-orange-500 focus:ring-teal-500/20 bg-orange-500/5" : "",
                                                                        feedback[k] && !feedback[k]?.ok ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20" : ""
                                                                    )}
                                                                />
                                                                <button
                                                                    onClick={() => handleCheckAnswer(k, ei)}
                                                                    className="px-5 py-2.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm transition-colors"
                                                                >
                                                                    Submit Answer
                                                                </button>
                                                            </div>
                                                        )}

                                                        {/* Feedback Message */}
                                                        {feedback[k] && (
                                                            <div className={cn(
                                                                "mb-5 p-3 rounded-lg text-sm font-medium flex items-center gap-2",
                                                                feedback[k].ok ? "bg-orange-500/10 text-orange-400 border border-orange-500/20" : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                                                            )}>
                                                                {feedback[k].ok ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                                                                {feedback[k].msg}
                                                            </div>
                                                        )}

                                                        {/* Utility Buttons */}
                                                        <div className="flex flex-wrap gap-3 pt-3 border-t border-white/5 border-dashed">
                                                            <button 
                                                                onClick={() => setHintOpen(prev => ({...prev, [k]: !prev[k]}))}
                                                                className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                                                            >
                                                                <Lightbulb className="w-3.5 h-3.5" /> 
                                                                {hintOpen[k] ? 'Hide Hint' : 'Show Hint'}
                                                            </button>

                                                            {solved && (
                                                                <button 
                                                                    onClick={() => setSolOpen(prev => ({...prev, [k]: !prev[k]}))}
                                                                    className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-1.5"
                                                                >
                                                                    <Code2 className="w-3.5 h-3.5" /> 
                                                                    {solOpen[k] ? 'Hide Solution' : 'View Correct Solution'}
                                                                </button>
                                                            )}
                                                        </div>

                                                        {/* Hint Box */}
                                                        <AnimatePresence>
                                                            {hintOpen[k] && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: "auto", opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    className="overflow-hidden mt-4"
                                                                >
                                                                    <div className="p-4 rounded-xl bg-amber-500/10 border-l-2 border-amber-500 text-amber-200/90 text-sm leading-relaxed font-medium">
                                                                        💡 {ex.hint}
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>

                                                        {/* Solution Box */}
                                                        <AnimatePresence>
                                                            {solOpen[k] && solved && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: "auto", opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    className="overflow-hidden mt-4"
                                                                >
                                                                    <div className="rounded-xl bg-[#0a1511] border border-teal-900/50 overflow-hidden">
                                                                        <div className="px-4 py-2 bg-teal-950/40 border-b border-teal-900/50 text-xs font-bold uppercase tracking-wider text-orange-500">
                                                                            Solution & Explanation
                                                                        </div>
                                                                        <div className={cn("p-4 text-[13px] text-orange-200/80 overflow-x-auto border-b border-teal-900/30", mono.className)}>
                                                                            <pre className="m-0"><code>{ex.sol}</code></pre>
                                                                        </div>
                                                                        <div className="p-4 text-[13px] leading-relaxed text-teal-100/70">
                                                                            {ex.explain}
                                                                        </div>
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>

                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                </div>
                                )
                            })}
                        </div>
                        )}

                        {/* Day Completion Celebrations */}
                        <AnimatePresence>
                            {isDayCompleted && (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="mt-8 p-8 rounded-[2rem] bg-gradient-to-br from-orange-500/20 to-blue-600/20 border border-orange-500/30 text-center relative overflow-hidden"
                                >
                                    <Sparkles className="absolute top-4 right-4 text-orange-400 w-8 h-8 opacity-50" />
                                    <h3 className={cn("text-2xl font-bold text-white mb-2", quicksand.className)}>
                                        Day {currentDay + 1} Complete! 🎉
                                    </h3>
                                    <p className="text-orange-200 mb-6 font-medium">Awesome work. You're building a strong foundation.</p>
                                    
                                    {currentDay < DAYS.length - 1 ? (
                                        <button 
                                            onClick={() => {
                                                setCurrentDay(d => d + 1)
                                                setFeedback({})
                                                window.scrollTo({ top: 0, behavior: 'smooth' })
                                                setActiveTab('concepts')
                                            }}
                                            className="px-8 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-orange-950 font-bold transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                                        >
                                            Proceed to Day {currentDay + 2} <ChevronRight className="w-5 h-5 inline" />
                                        </button>
                                    ) : (
                                        <div className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold shadow-lg inline-block">
                                            🏆 All 10 Days Completed!
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                </main>
            </div>
            {/* Custom scrollbars global styles inject */}
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                    height: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.2);
                }

                .thin-scrollbar::-webkit-scrollbar {
                    height: 4px;
                }
                .thin-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .thin-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(99, 102, 241, 0.3);
                    border-radius: 4px;
                }
            `}</style>
        </div>
    )
}

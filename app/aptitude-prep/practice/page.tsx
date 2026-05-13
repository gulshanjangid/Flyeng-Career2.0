"use client"

import { SiteHeader } from "@/components/site-header"
import { PRACTICE_QUESTIONS } from "@/lib/practice-data"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, ChevronRight, Calculator, BookOpen, Target, Settings, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import dynamicImport from "next/dynamic"

const EnhancedFooter = dynamicImport(() => import("@/components/enhanced-footer").then(mod => mod.EnhancedFooter), { ssr: false })

export default function PracticeArenaPage() {
  const [activeTab, setActiveTab] = useState<"Quantitative Aptitude" | "Logical Reasoning" | "Verbal Ability">("Quantitative Aptitude")
  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>({})

  const filteredQuestions = PRACTICE_QUESTIONS.filter(q => q.category === activeTab)

  const toggleReveal = (id: string) => {
    setRevealedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const tabs = [
    { id: "Quantitative Aptitude", label: "Quant", icon: Calculator, color: "from-sky-400 to-blue-600", border: "border-sky-500/30" },
    { id: "Logical Reasoning", label: "Reasoning", icon: Target, color: "from-purple-400 to-pink-600", border: "border-purple-500/30" },
    { id: "Verbal Ability", label: "Verbal", icon: BookOpen, color: "from-emerald-400 to-teal-600", border: "border-emerald-500/30" }
  ] as const

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 font-sans pb-20">
      <SiteHeader />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 border-b border-white/5 bg-zinc-950/80 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <Link href="/aptitude-prep" className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-white transition-colors mb-8 group">
             <ChevronRight className="mr-2 h-4 w-4 rotate-180 transform group-hover:-translate-x-1 transition-transform" />
            Back to Aptitude Hub
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center justify-center p-4 bg-zinc-900 rounded-2xl mb-6 border border-white/10 shadow-2xl">
               <Brain className="h-10 w-10 text-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500 pb-2">
              The <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Practice Arena</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Master the exact patterns behind TCS NQT's highest-weightage questions. Attempt beforehand, reveal the hidden PDF logics, and hack your speed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Arena */}
      <section className="pt-12 relative z-20">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Custom Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
             {tabs.map((tab) => {
               const isActive = activeTab === tab.id
               const Icon = tab.icon
               return (
                 <button
                   key={tab.id}
                   onClick={() => setActiveTab(tab.id)}
                   className={`relative px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 flex items-center gap-3 overflow-hidden group ${
                      isActive 
                        ? `bg-white/10 text-white border ${tab.border} shadow-[0_0_30px_rgba(255,255,255,0.05)]` 
                        : 'bg-zinc-950/50 text-zinc-500 border border-white/5 hover:bg-white/5 hover:text-zinc-300'
                   }`}
                 >
                   {isActive && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${tab.color} opacity-20`} />
                   )}
                   <Icon className={`w-4 h-4 relative z-10 ${isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`} />
                   <span className="relative z-10">{tab.label}</span>
                 </button>
               )
             })}
          </div>

          {/* Question List */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 gap-6"
              >
                {filteredQuestions.length > 0 ? (
                   filteredQuestions.map((q, idx) => (
                    <div 
                      key={q.id} 
                      className="bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/20 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4 mb-6">
                         <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center font-bold text-cyan-400 shadow-inner">
                            {idx + 1}
                         </div>
                         <h3 className="text-lg md:text-xl font-medium text-zinc-100 leading-relaxed pt-1">
                            {q.question}
                         </h3>
                      </div>
                      
                      {/* Options Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-14 mb-8">
                         {q.options.map((opt, optIdx) => (
                            <div key={optIdx} className="px-4 py-3 rounded-xl bg-zinc-900/50 border border-white/5 text-zinc-300 font-medium hover:bg-zinc-800 transition-colors cursor-default">
                               {opt}
                            </div>
                         ))}
                      </div>

                      {/* Reveal Section */}
                      <div className="pl-14">
                        <button 
                           onClick={() => toggleReveal(q.id)}
                           className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all ${
                             revealedQuestions[q.id] 
                               ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700' 
                               : 'bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/20'
                           }`}
                        >
                          {revealedQuestions[q.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          {revealedQuestions[q.id] ? "Hide Logic" : "Reveal Answer & Logic"}
                        </button>

                        <AnimatePresence>
                          {revealedQuestions[q.id] && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-blue-950/40 border border-cyan-500/20">
                                 <div className="flex items-center gap-3 mb-3">
                                    <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full border border-emerald-500/20">
                                      Correct Answer
                                    </div>
                                    <span className="font-bold text-lg text-white">{q.correctAnswer}</span>
                                 </div>
                                 <div className="text-cyan-100/70 font-light leading-relaxed text-sm md:text-base">
                                   <strong className="text-cyan-300 font-semibold uppercase tracking-wider text-xs block mb-1">Shortcut Logic:</strong>
                                   "{q.explanation}"
                                 </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                    </div>
                  ))
                ) : (
                  <div className="text-center py-20 bg-zinc-950/50 rounded-3xl border border-white/5">
                    <Brain className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-zinc-400 mb-2">No data recorded</h3>
                    <p className="text-zinc-500">The questions for this section are currently initializing.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      <EnhancedFooter />
    </main>
  )
}

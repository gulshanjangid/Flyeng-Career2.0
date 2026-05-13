"use client"

import { SiteHeader } from "@/components/site-header"
import { APTITUDE_DATA } from "@/lib/aptitude-data"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Calculator, Brain, ArrowRight, ChevronRight, Target, Puzzle, Gamepad2, LineChart, Sparkles } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"

import { EnhancedFooter } from "@/components/enhanced-footer"

export default function LearnOverviewPage() {
  const [activePhase, setActivePhase] = useState<number>(1);

  const getIcon = (iconName: string, wCls = "w-6 h-6") => {
    switch (iconName) {
      case "Calculator": return <Calculator className={wCls} />;
      case "Brain": return <Brain className={wCls} />;
      case "BookOpen": return <BookOpen className={wCls} />;
      case "Target": return <Target className={wCls} />;
      case "Puzzle": return <Puzzle className={wCls} />;
      case "Gamepad2": return <Gamepad2 className={wCls} />;
      case "LineChart": return <LineChart className={wCls} />;
      default: return <BookOpen className={wCls} />;
    }
  }

  const phases = [1, 2, 3]
  const timelineColors: Record<number, string> = {
     1: "from-blue-500 to-cyan-500 text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
     2: "from-purple-500 to-pink-500 text-pink-400 bg-pink-500/10 border-pink-500/20",
     3: "from-orange-500 to-yellow-500 text-orange-400 bg-orange-500/10 border-orange-500/20",
     4: "from-emerald-500 to-teal-500 text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
  }

  // Extracted logic to find the title for the tab buttons
  const getPhaseTitle = (phaseNum: number) => {
    const cats = Object.values(APTITUDE_DATA).filter(c => c.phase === phaseNum);
    return cats.length > 0 ? cats[0].phaseTitle : `Phase ${phaseNum}`;
  }

  const activeCategories = Object.values(APTITUDE_DATA).filter(c => c.phase === activePhase);
  const activeStyle = timelineColors[activePhase];

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30">
      <SiteHeader />
      
      {/* Header Section */}
      <section className="pt-32 pb-12 border-b border-white/5 bg-zinc-950/80 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none -z-10 transition-colors duration-1000 opacity-10" 
             style={{ backgroundColor: activePhase === 1 ? '#06b6d4' : activePhase === 2 ? '#ec4899' : '#f59e0b' }} />
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <Link href="/aptitude-prep" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-white transition-colors mb-6 group">
            <ArrowRight className="mr-2 h-4 w-4 rotate-180 transform group-hover:-translate-x-1 transition-transform" />
            Back to Aptitude Hub
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 pb-2">
              Training Grounds
            </h1>
            <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Master the curriculum via our structured progression flow. Proceed from foundational theory to modern gamified cognitive assessments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation & Content Section */}
      <section className="py-12 relative min-h-[800px]">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Phase Tabs */}
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-3 mb-16 p-2 bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-white/5 w-full md:w-fit mx-auto sticky top-20 z-40 shadow-2xl">
            {phases.map((phaseNum) => {
              const isActive = activePhase === phaseNum;
              const theme = timelineColors[phaseNum];
              return (
                <button
                  key={phaseNum}
                  onClick={() => setActivePhase(phaseNum)}
                  className={`relative flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold transition-all duration-300 text-sm md:text-base ${isActive ? 'text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)]' : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePhaseIndicator"
                      className={`absolute inset-0 bg-gradient-to-r ${theme} opacity-20 rounded-xl`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {isActive && (
                    <div className={`absolute inset-0 border rounded-xl ${theme.split('border-')[1]}`} />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 text-[10px]">{phaseNum}</span>
                    <span className="hidden sm:inline">{getPhaseTitle(phaseNum)}</span>
                    <span className="sm:hidden">Phase {phaseNum}</span>
                  </span>
                </button>
              )
            })}
          </div>

          {/* Active Phase Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
              transition={{ duration: 0.4 }}
              className="w-full space-y-16"
            >
              {/* Phase Title Area */}
              <div className="text-center mb-12">
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{getPhaseTitle(activePhase)}</h2>
                 <div className={`mx-auto h-1.5 w-32 rounded-full bg-gradient-to-r ${activeStyle.split(' ')[0]} ${activeStyle.split(' ')[1]}`} />
              </div>

              {activeCategories.map((category, idx) => (
                <div key={category.id} className="relative">
                  {/* Category Header */}
                  <div className="flex items-center gap-5 mb-8">
                    <div className={`h-16 w-16 rounded-2xl flex items-center justify-center border shadow-inner ${activeStyle}`}>
                      {getIcon(category.icon, "w-8 h-8")}
                    </div>
                    <div>
                      <h3 className="text-3xl font-extrabold text-white tracking-tight">{category.title}</h3>
                      <p className="text-zinc-400 text-base mt-1.5 font-light">{category.description}</p>
                    </div>
                  </div>

                  {/* Topics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.topics.map((topic) => {
                      const formulasCount = topic.subTopics 
                        ? topic.subTopics.reduce((acc, sub) => acc + (sub.formulas?.length || 0), 0)
                        : (topic.formulas?.length || 0);
                      const tipsCount = topic.subTopics
                        ? topic.subTopics.reduce((acc, sub) => acc + (sub.proTips?.length || 0), 0)
                        : (topic.proTips?.length || 0);
                      const examplesCount = topic.subTopics
                        ? topic.subTopics.reduce((acc, sub) => acc + (sub.solvedExamples?.length || 0), 0)
                        : (topic.solvedExamples?.length || 0);

                      return (
                      <Link href={`/aptitude-prep/learn/${category.id}/${topic.id}`} key={topic.id} className="block group h-full focus:outline-none focus:ring-2 focus:ring-white/20 rounded-[1.5rem]">
                        <div className="h-full bg-zinc-950/80 backdrop-blur-sm border border-white/5 rounded-[1.5rem] p-6 transition-all duration-300 hover:bg-zinc-900/80 hover:border-white/15 hover:-translate-y-1 hover:shadow-2xl flex flex-col relative overflow-hidden">
                          
                          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${activeStyle.split(' ')[0]} ${activeStyle.split(' ')[1]} opacity-0 group-hover:opacity-100 transition-opacity`} />

                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">{topic.title}</h4>
                            <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center transform group-hover:translate-x-1 group-hover:bg-white/10 transition-all border border-white/5 shrink-0 ml-3">
                              <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-white" />
                            </div>
                          </div>
                          <p className="text-zinc-500 text-[14px] leading-relaxed mb-6 font-light flex-grow">{topic.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                            {formulasCount > 0 && (
                              <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1.5 rounded-md bg-zinc-900 border border-white/5 text-zinc-300">
                                {formulasCount} Formulas
                              </span>
                            )}
                            {tipsCount > 0 && (
                              <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1.5 rounded-md bg-zinc-900 border border-white/5 text-purple-400/80">
                                {tipsCount} Tips
                              </span>
                            )}
                            {examplesCount > 0 && (
                              <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1.5 rounded-md bg-zinc-900 border border-white/5 text-emerald-400/80">
                                {examplesCount} Examples
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    )})}
                  </div>
                </div>
              ))}
              
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Master Sheet Call to Action Footer */}
      <section className="pb-16 pt-8 relative border-t border-white/5 bg-zinc-950/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-zinc-900/50 border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.1)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px]" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
               <div>
                 <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold tracking-widest uppercase">
                    <span>Final Strike</span>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">TCS NQT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Master Sheet</span></h2>
                 <p className="text-zinc-400 max-w-lg font-light text-lg">Rapid revision printable PDF-style terminal linking Quant, Logical, and Verbal modules entirely sourced for the 2026 TCS Foundation pattern.</p>
               </div>
               <Link href="/aptitude-prep/cheat-sheet">
                 <button className="px-8 py-4 rounded-full bg-white text-black font-bold tracking-wide hover:bg-zinc-200 transition-colors flex items-center gap-2 group-hover:scale-105 transform duration-300 shrink-0">
                   Access PDF Viewer <ArrowRight className="w-5 h-5" />
                 </button>
               </Link>
            </div>
          </div>
        </div>
      </section>

      <EnhancedFooter />
    </main>
  )
}

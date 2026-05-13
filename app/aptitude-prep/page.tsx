"use client"

import { SiteHeader } from "@/components/site-header"
import { AuroraBackground } from "@/components/aurora-background"
import { FloatingAptitudeSymbols } from "@/components/floating-aptitude-symbols"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Brain, Target, Trophy, Sparkles, Code2, Calculator } from "lucide-react"
import Link from "next/link"
import dynamicImport from "next/dynamic"
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "700"] })

import { EnhancedFooter } from "@/components/enhanced-footer"

export default function AptitudeHubHome() {
  const cards = [
    {
      title: "Master the Concepts",
      description: "Deep, note-style theory covering Number System, Divisibility, Syllogisms, and the NEW TCS NQT Cheat Sheet.",
      icon: BookOpen,
      href: "/aptitude-prep/learn",
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      badge: "Learn & Prepare",
      hasNewUpdate: true
    },
    {
      title: "AI Endless Practice",
      description: "Infinite AI-generated problem sets mirroring the exact difficulty of TCS Matrix.",
      icon: Brain,
      href: "/aptitude-prep/practice",
      color: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      badge: "Interactive Training"
    },
    {
      title: "PYQ Mock Tests",
      description: "Actual previous year questions from TCS NQT, Infosys InfyTQ, and Wipro NLTH.",
      icon: Trophy,
      href: "/aptitude-prep/pyq",
      color: "from-orange-500/20 to-red-500/20",
      border: "border-orange-500/30",
      badge: "Exam Simulation"
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <SiteHeader />
      
      {/* Hero Section */}
      <AuroraBackground className="pt-24 pb-12 sm:pt-32 sm:pb-32 relative overflow-hidden min-h-[70vh]">
        <FloatingAptitudeSymbols />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-4 text-center z-10 relative"
        >


          <h1 className={`${spaceGrotesk.className} text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400`}>
            Aptitude
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              Mastery Framework
            </span>
          </h1>
          
          <p className={`${spaceGrotesk.className} max-w-2xl mx-auto text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed font-light`}>
            The definitive placement preparation engine. Engineered specifically to bypass the brutal rejection rates of India&apos;s biggest tech giants.
          </p>

          <div className="flex flex-col items-center gap-8 mt-4">
            <Link href="#modules">
              <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black group hover:scale-105 transition-transform duration-300">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a855f7_0%,#22d3ee_50%,#a855f7_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-950 px-8 py-1 text-md font-bold text-white backdrop-blur-3xl gap-2 tracking-wide">
                  Initialize Training <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* Aptitude Analytics Insight Report */}
      <section className="py-24 bg-black relative border-y border-white/5 overflow-hidden">
        {/* Decorative Grid & Gradients */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Left side: Text Context */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">
                <Target className="h-4 w-4" /> Insight Report
              </div>
              <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]`}>
                Deconstructing the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Mass Recruiters</span>
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                TCS, Infosys, and Wipro don't test pure intelligence; they test strict speed and pattern recognition. We've reverse-engineered their adaptive algorithms to give you the exact metrics required to clear the filter rounds.
              </p>
              
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className={`${spaceGrotesk.className} text-4xl font-black text-white drop-shadow-md`}>82%</div>
                  <div className="text-xs md:text-sm font-medium text-zinc-500 uppercase tracking-widest mt-2">Elimination Rate</div>
                </div>
                <div className="w-px h-16 bg-white/10" />
                <div>
                  <div className={`${spaceGrotesk.className} text-4xl font-black text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]`}>45<span className="text-2xl text-cyan-500">s</span></div>
                  <div className="text-xs md:text-sm font-medium text-zinc-500 uppercase tracking-widest mt-2">Avg Time / Q</div>
                </div>
              </div>
            </div>

            {/* Right side: Glassmorphism Visual Analysis Board */}
            <div className="w-full lg:w-1/2 xl:pl-10">
              <div className="bg-zinc-950/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(34,211,238,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="space-y-8 relative z-10">
                  {/* Stat Bar 1 */}
                  <div>
                    <div className="flex justify-between text-sm mb-3">
                       <span className="text-zinc-300 font-medium tracking-wide">Algorithmic Pseudo-code</span>
                       <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs">Priority High</span>
                    </div>
                    <div className="h-2.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                       <motion.div initial={{ width: 0 }} whileInView={{ width: '92%' }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]" />
                    </div>
                  </div>
                  
                  {/* Stat Bar 2 */}
                  <div>
                    <div className="flex justify-between text-sm mb-3">
                       <span className="text-zinc-300 font-medium tracking-wide">Advanced Quantitative Math</span>
                       <span className="text-purple-400 font-bold tracking-widest uppercase text-xs">Priority High</span>
                    </div>
                    <div className="h-2.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                       <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }} className="h-full bg-purple-500 rounded-full shadow-[0_0_15px_#a855f7]" />
                    </div>
                  </div>

                  {/* Stat Bar 3 */}
                  <div>
                    <div className="flex justify-between text-sm mb-3">
                       <span className="text-zinc-300 font-medium tracking-wide">Speed & Logical Reasoning</span>
                       <span className="text-blue-400 font-bold tracking-widest uppercase text-xs">Priority Critical</span>
                    </div>
                    <div className="h-2.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                       <motion.div initial={{ width: 0 }} whileInView={{ width: '98%' }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }} className="h-full bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]" />
                    </div>
                  </div>
                  
                  <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between text-[11px] md:text-xs text-zinc-500 uppercase tracking-widest font-bold">
                     <span>Dataset: 80,000+ Attempts</span>
                     <span className="flex items-center gap-2 text-zinc-400"><div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" /> Live AI Sync Active</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Path Selection */}
      <section id="modules" className="pb-24 pt-20 relative z-20 bg-black">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {cards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                className="h-full"
              >
                <Link href={card.href} className="block group h-full">
                  <div className={`relative h-full overflow-hidden rounded-[2rem] border ${card.border} bg-zinc-950/70 backdrop-blur-2xl p-8 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.15)]`}>
                    
                    {/* Background Gradients */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-8">
                        <div className={`h-16 w-16 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-inner group-hover:border-white/20`}>
                          <card.icon className="h-8 w-8 text-white group-hover:text-cyan-400 transition-colors" />
                        </div>
                        <div className="flex items-center gap-2">
                          {(card as any).hasNewUpdate && (
                             <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                               <span className="relative flex h-1.5 w-1.5">
                                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                 <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                               </span>
                               New Phase
                             </span>
                          )}
                          <span className="text-xs font-bold uppercase tracking-widest text-zinc-300 bg-black/50 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md group-hover:bg-white/10 group-hover:text-white transition-colors">
                            {card.badge}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className={`${spaceGrotesk.className} text-3xl font-black mb-4 text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all`}>
                        {card.title}
                      </h3>
                      
                      <p className="text-zinc-400 text-base leading-relaxed mb-10 flex-grow font-light">
                        {card.description}
                      </p>
                      
                      <div className="flex items-center text-sm font-bold tracking-wide text-zinc-300 group-hover:text-cyan-400 transition-colors mt-auto uppercase">
                        Initialize Module
                        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition / Features tailored for India */}
      <section className="py-24 border-t border-white/5 bg-zinc-950/40 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-black mb-6 tracking-tight`}>Decade of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Service Patterns</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">We isolated the exact metrics that eliminate 80% of candidates in the first round of mass recruitment drives.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-[2rem] bg-zinc-950/50 backdrop-blur-sm border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 group"
            >
              {/* Unique Card 1 Visual */}
              <div className="relative mx-auto w-28 h-28 mb-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="relative w-24 h-24 border border-dashed border-cyan-500/30 rounded-full flex flex-col items-center justify-center"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 border border-cyan-400/50 rounded-full flex items-center justify-center bg-zinc-900/80 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.2)] group-hover:border-cyan-400 group-hover:bg-zinc-800 transition-colors"
                  >
                    <Target className="h-8 w-8 text-cyan-400" />
                  </motion.div>
                </motion.div>
              </div>

              <h4 className={`${spaceGrotesk.className} text-2xl font-bold mb-4 tracking-tight`}>TCS & Infosys Logic</h4>
              <p className="text-zinc-400 leading-relaxed font-light">Master the exact adaptive testing complexities of TCS NQT and the notorious algorithmic pseudo-code structures of Infosys.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-[2rem] bg-zinc-950/50 backdrop-blur-sm border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 group"
            >
              {/* Unique Card 2 Visual */}
              <div className="relative mx-auto w-28 h-28 mb-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-500/10 rounded-[2rem] blur-2xl animate-pulse" />
                <div className="relative w-24 h-24 bg-zinc-900/80 backdrop-blur-xl border border-blue-500/40 rounded-2xl flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.2)] group-hover:border-blue-400/60 group-hover:bg-zinc-800 transition-colors">
                  {/* Scanning laser line */}
                  <motion.div 
                    animate={{ top: ['-10%', '110%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-0.5 bg-blue-400 shadow-[0_0_15px_#60a5fa] z-20 opacity-70" 
                  />
                  <motion.div
                    animate={{ x: [-3, 3, -3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <Code2 className="h-10 w-10 text-blue-400" />
                  </motion.div>
                </div>
              </div>

              <h4 className={`${spaceGrotesk.className} text-2xl font-bold mb-4 tracking-tight`}>Sectional Cut-Offs</h4>
              <p className="text-zinc-400 leading-relaxed font-light">Practice under strict time thresholds to easily clear the stringent sectional and sub-sectional cut-offs demanded by Wipro and Cognizant.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-[2rem] bg-zinc-950/50 backdrop-blur-sm border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* BRAND NEW UNIQUE THIRD CARD VISUAL */}
              <div className="relative mx-auto w-28 h-28 mb-8 flex items-center justify-center perspective-[1000px]">
                <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-2xl animate-pulse" />
                
                <motion.div 
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="relative w-20 h-20 bg-zinc-900/80 backdrop-blur-xl border border-purple-500/40 rounded-2xl flex flex-col items-center justify-center gap-1.5 shadow-[0_0_40px_rgba(168,85,247,0.2)]"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div 
                    animate={{ x: [-12, 12, -12] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-10 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]" 
                  />
                  <motion.div 
                    animate={{ x: [12, -12, 12] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-14 h-1.5 bg-purple-400 rounded-full shadow-[0_0_15px_#a855f7]" 
                  />
                  <motion.div 
                    animate={{ x: [-8, 8, -8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-8 h-1.5 bg-pink-400 rounded-full shadow-[0_0_15px_#ec4899]" 
                  />
                </motion.div>
              </div>

              <h4 className={`${spaceGrotesk.className} text-2xl font-bold mb-4 tracking-tight`}>30-Second Mastery</h4>
              <p className="text-zinc-400 leading-relaxed font-light">Focus intensely on mathematical shortcuts and theorems to bypass traditional solving methods when you only have 45 seconds per question.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <EnhancedFooter />
    </main>
  )
}

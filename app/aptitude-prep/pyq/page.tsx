"use client"

import { SiteHeader } from "@/components/site-header"
import { TCS_MOCK_SETS } from "@/lib/tcs-mock-data"
import { motion } from "framer-motion"
import { ChevronRight, Play, Trophy, Cpu, Network } from "lucide-react"
import Link from "next/link"
import dynamicImport from "next/dynamic"

const EnhancedFooter = dynamicImport(() => import("@/components/enhanced-footer").then(mod => mod.EnhancedFooter), { ssr: false })

export default function PYQVaultPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500/30 font-sans">
      <SiteHeader />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 border-b border-white/5 bg-zinc-950/80 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <Link href="/aptitude-prep" className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-white transition-colors mb-8 group">
             <ChevronRight className="mr-2 h-4 w-4 rotate-180 transform group-hover:-translate-x-1 transition-transform" />
            Back to Aptitude Hub
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center justify-center p-4 bg-orange-500/10 rounded-2xl mb-6 border border-orange-500/20 shadow-[0_0_30px_rgba(249,115,22,0.15)]">
               <Trophy className="h-10 w-10 text-orange-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-orange-100 to-red-400 pb-2">
              TCS NQT 2026 <span className="text-orange-500">Simulators</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              We've temporarily locked all other companies to focus on the immediate absolute priority: The TCS NQT 2026 Matrix. 
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Section for Mock Sets */}
      <section className="py-24 relative z-20">
        <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-b from-orange-500/5 to-transparent blur-3xl rounded-full -z-10" />
        
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {TCS_MOCK_SETS.map((set, idx) => (
                <motion.div
                  key={set.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="group h-full"
                >
                  <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 p-8 flex flex-col transition-all duration-500 hover:border-orange-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)]">
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className="h-12 w-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-lg shadow-inner group-hover:scale-110 transition-transform">
                         {idx + 1}
                      </div>
                      <span className="px-3 py-1 bg-white/5 text-zinc-400 text-[10px] font-bold tracking-widest uppercase rounded-full border border-white/10 group-hover:border-orange-500/30 group-hover:text-orange-300 transition-colors">
                        Foundation + Advanced
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-200 group-hover:to-orange-400 transition-all">
                      {set.title}
                    </h3>

                    <p className="text-zinc-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                      Contains {set.totalQs} elite-level questions proportional to the 2026 Part A & Part B split. Features negative marking logic.
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-8 relative z-10">
                       <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-3 flex flex-col items-center justify-center group-hover:border-white/10 transition-colors">
                          <Cpu className="w-5 h-5 text-zinc-400 mb-1 group-hover:text-orange-300 transition-colors" />
                          <span className="text-xs font-bold text-zinc-300">{set.totalQs} Qs</span>
                       </div>
                       <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-3 flex flex-col items-center justify-center group-hover:border-white/10 transition-colors">
                          <Network className="w-5 h-5 text-zinc-400 mb-1 group-hover:text-red-300 transition-colors" />
                          <span className="text-xs font-bold text-zinc-300">{set.durationMins} Mins</span>
                       </div>
                    </div>

                    <Link href={`/aptitude-prep/pyq/tcs/${set.id}`} className="block relative z-10">
                      <button className="w-full py-4 rounded-xl bg-white text-black font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-2 hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl">
                        Launch Engine <Play className="w-4 h-4 fill-current" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
             ))}
           </div>
        </div>
      </section>

      <EnhancedFooter />
    </main>
  )
}

"use client"

import { SiteHeader } from "@/components/site-header"
import { APTITUDE_DATA, Category, Topic, SubTopic } from "@/lib/aptitude-data"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Brain, Calculator, ChevronRight, Lightbulb, Zap, ArrowRight, LayoutList } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import dynamicImport from "next/dynamic"

import { EnhancedFooter } from "@/components/enhanced-footer"

export default function TopicPage({ params }: { params: { category: string, topic: string } }) {
  const { category, topic } = params;

  const categoryData = APTITUDE_DATA[category as keyof typeof APTITUDE_DATA];
  
  if (!categoryData) {
    notFound();
  }

  const topicData = categoryData.topics.find((t) => t.id === topic);

  if (!topicData) {
    notFound();
  }

  // Handle Deep SubTopic Hierarchy (TCS Pattern) vs Legacy Flat Hierarchy
  const hasSubTopics = topicData.subTopics && topicData.subTopics.length > 0;
  const renderDataList = hasSubTopics ? topicData.subTopics! : [topicData as any];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <SiteHeader />
      
      {/* Dynamic Header */}
      <section className="pt-32 pb-16 border-b border-white/5 bg-zinc-950/80 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center text-sm font-medium text-zinc-400 mb-8 gap-1">
            <Link href="/aptitude-prep" className="hover:text-white transition-colors">Aptitude Hub</Link>
            <ChevronRight className="h-4 w-4 text-zinc-600 mx-1" />
            <Link href="/aptitude-prep/learn" className="hover:text-white transition-colors">Learn</Link>
            <ChevronRight className="h-4 w-4 text-zinc-600 mx-1" />
            <span className="text-purple-400">{categoryData.title}</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              {topicData.title}
            </h1>
            <p 
              className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed"
              dangerouslySetInnerHTML={{ __html: topicData.description }}
            />
          </motion.div>
        </div>
      </section>

      {/* Content Section (Dynamically rendered Modules) */}
      <section className="py-16 relative min-h-[500px]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-32">
            
            {renderDataList.map((activeData, index) => (
              <motion.div 
                key={activeData.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="space-y-16 relative"
              >
                {/* Visual Separator between subtopics */}
                {index > 0 && (
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                )}

                {/* Module Title Header */}
                {hasSubTopics && (
                   <div className="border-l-4 border-purple-500 pl-6 mb-12 flex items-center gap-4">
                     <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 font-bold text-sm border border-purple-500/30">{index + 1}</span>
                     <div>
                       <h2 className="text-3xl font-bold text-white mb-1">{activeData.title}</h2>
                       <p className="text-zinc-400 font-light text-sm tracking-wide">Deep Dive Concept Breakdown</p>
                     </div>
                   </div>
                )}

                {/* Extreme Theory & Concepts Section */}
                {activeData.concepts && activeData.concepts.length > 0 && (
                  <div className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                        <BookOpen className="h-6 w-6 text-indigo-400" />
                      </div>
                      <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 drop-shadow-sm">Extreme Theory & Concepts</h3>
                    </div>
                    <div className="space-y-6">
                      {activeData.concepts.map((concept: any, idx: number) => (
                        <div key={idx} className="p-6 md:p-8 rounded-[2rem] bg-zinc-950/80 border border-white/5 shadow-2xl relative overflow-hidden group hover:border-white/10 transition-colors">
                          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-indigo-500 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                          <h4 className="text-xl md:text-2xl font-bold text-white mb-4 pl-4 tracking-tight">{concept.title}</h4>
                          <div 
                            className="text-zinc-300 font-light leading-relaxed pl-4 text-base md:text-lg space-y-3 prose prose-invert prose-p:leading-relaxed prose-li:marker:text-indigo-400 prose-strong:text-white max-w-none"
                            dangerouslySetInnerHTML={{ __html: concept.description }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Formulas Section */}
                {activeData.formulas && activeData.formulas.length > 0 && (
                  <div className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <Calculator className="h-5 w-5 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold">Standard Formulas</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeData.formulas.map((item: any, idx: number) => (
                        <div key={idx} className="p-5 rounded-2xl bg-zinc-900 border border-white/5 hover:border-blue-500/30 transition-colors">
                          <h5 className="text-sm font-semibold text-zinc-400 mb-2 uppercase tracking-wider">{item.title}</h5>
                          <div 
                            className="text-lg font-mono text-zinc-200 break-words"
                            dangerouslySetInnerHTML={{ __html: item.formula }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pro Tips Section */}
                {activeData.proTips && activeData.proTips.length > 0 && (
                  <div className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-pink-500/10 rounded-lg border border-pink-500/20">
                        <Zap className="h-5 w-5 text-pink-400" />
                      </div>
                      <h3 className="text-2xl font-bold">30-Second Pro Tips</h3>
                    </div>
                    <div className="space-y-4">
                      {activeData.proTips.map((tip: any, idx: number) => (
                        <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/10 items-start">
                          <Lightbulb className="h-5 w-5 text-pink-400 shrink-0 mt-0.5" />
                          <div 
                             className="text-zinc-300 leading-relaxed font-light prose prose-invert prose-strong:text-pink-100"
                             dangerouslySetInnerHTML={{ __html: tip }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Solved Examples */}
                {activeData.solvedExamples && activeData.solvedExamples.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                        <Brain className="h-5 w-5 text-emerald-400" />
                      </div>
                      <h3 className="text-2xl font-bold">Solved Examples</h3>
                    </div>
                    <div className="space-y-8">
                      {activeData.solvedExamples.map((example: any, idx: number) => (
                        <div key={idx} className="rounded-3xl border border-white/5 bg-zinc-950 overflow-hidden shadow-xl">
                          <div className="p-6 md:p-8 bg-gradient-to-br from-zinc-900/80 to-zinc-900/20 border-b border-white/5">
                            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 block">Example {idx + 1}</span>
                            <div 
                              className="text-lg md:text-xl text-white leading-relaxed prose prose-invert prose-strong:text-emerald-100"
                              dangerouslySetInnerHTML={{ __html: example.question }}
                            />
                          </div>
                          <div className="p-6 md:p-8 space-y-6">
                            <div>
                              <h5 className="text-sm font-semibold text-zinc-500 mb-2 uppercase tracking-wider">The Approach</h5>
                              <div 
                                className="text-zinc-300 font-light leading-relaxed prose prose-invert prose-strong:text-white"
                                dangerouslySetInnerHTML={{ __html: example.explanation }}
                              />
                            </div>
                            <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 hover:bg-emerald-500/10 transition-colors overflow-x-auto">
                              <h5 className="text-sm font-semibold text-emerald-400/80 mb-2 uppercase tracking-wider block">Step-by-Step Solution</h5>
                              <div 
                                className="text-emerald-100/90 font-mono leading-relaxed mt-2"
                                dangerouslySetInnerHTML={{ __html: example.solution }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Call to Action: Practice */}
            <div className="mt-20 p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 border border-purple-500/30 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all">Ready to test your skills?</h3>
                <p className="text-zinc-300 max-w-xl mx-auto mb-8 font-light leading-relaxed">
                  Jump into the AI Practice Arena. The algorithm will generate endless questions on <span className="text-white font-medium">{topicData.title}</span> based on your skill level.
                </p>
                <Link href="/aptitude-prep/practice">
                  <span className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-bold tracking-wide hover:bg-zinc-200 transition-colors cursor-pointer group-hover:scale-105 transform duration-300">
                    Start AI Practice <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <EnhancedFooter />
    </main>
  )
}

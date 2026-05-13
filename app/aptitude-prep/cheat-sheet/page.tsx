"use client"

import { SiteHeader } from "@/components/site-header"
import { APTITUDE_DATA, Category, Topic, SubTopic, Concept } from "@/lib/aptitude-data"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import React, { useMemo, useState } from "react"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { motion } from "framer-motion"

const dataMap = APTITUDE_DATA as Record<string, Category>;

const cheatSheetIds = [
  "tcs-nqt-2026-cheat-sheet", // Quant
  "tcs-nqt-2026-reasoning-cheat-sheet", // Logical
  "tcs-nqt-2026-verbal-cheat-sheet", // Verbal
  "tcs-nqt-2026-elimination-cheat-sheet" // Option Elimination
];

// Helper component to render specific diagrams based on the topic ID
const CheatSheetDiagram = ({ topicId }: { topicId: string }) => {
  switch (topicId) {
    case "nqt-syllo-core":
      return (
        <div className="my-6 p-6 border border-slate-200 bg-white shadow-sm flex flex-col items-center justify-center">
          <svg width="200" height="140" viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
            {/* Venn Diagram: Some A are B */}
            <circle cx="80" cy="70" r="50" fill="none" stroke="#0f172a" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="120" cy="70" r="50" fill="none" stroke="#0f172a" strokeWidth="2" />
            <path d="M 100 30 A 50 50 0 0 0 100 110 A 50 50 0 0 0 100 30 Z" fill="#cbd5e1" opacity="0.5" />
            <text x="60" y="75" fontFamily="sans-serif" fontSize="14" fill="#0f172a" fontWeight="bold">A</text>
            <text x="140" y="75" fontFamily="sans-serif" fontSize="14" fill="#0f172a" fontWeight="bold">B</text>
            <text x="92" y="75" fontFamily="sans-serif" fontSize="10" fill="#0f172a" fontWeight="bold">A∩B</text>
          </svg>
          <p className="text-[10px] font-sans text-slate-500 mt-3 tracking-widest uppercase">Fig 1. Particular Intersection (Some)</p>
        </div>
      );
    case "nqt-dir-core":
      return (
        <div className="my-6 p-6 border border-slate-200 bg-white shadow-sm flex flex-col items-center justify-center">
          <svg width="160" height="160" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
            {/* Compass */}
            <line x1="80" y1="20" x2="80" y2="140" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="20" y1="80" x2="140" y2="80" stroke="#0f172a" strokeWidth="1.5" />
            <polygon points="80,10 85,20 75,20" fill="#0f172a" />
            <polygon points="80,150 85,140 75,140" fill="#0f172a" />
            <polygon points="150,80 140,75 140,85" fill="#0f172a" />
            <polygon points="10,80 20,75 20,85" fill="#0f172a" />
            <text x="75" y="15" fontFamily="serif" fontSize="12" fill="#0f172a" fontWeight="bold">N</text>
            <text x="75" y="155" fontFamily="serif" fontSize="12" fill="#0f172a" fontWeight="bold">S</text>
            <text x="145" y="75" fontFamily="serif" fontSize="12" fill="#0f172a" fontWeight="bold">E</text>
            <text x="10" y="75" fontFamily="serif" fontSize="12" fill="#0f172a" fontWeight="bold">W</text>
            {/* Shadow Vector */}
            <line x1="80" y1="80" x2="40" y2="120" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="80" cy="80" r="3" fill="#0f172a" />
            <text x="45" y="115" fontFamily="sans-serif" fontSize="9" fill="#64748b" transform="rotate(45 45 115)">Morning Shadow</text>
          </svg>
          <p className="text-[10px] font-sans text-slate-500 mt-3 tracking-widest uppercase">Fig 2. Vector & Shadow Projection</p>
        </div>
      );
    case "nqt-seat-core":
      return (
         <div className="my-6 p-6 border border-slate-200 bg-white shadow-sm flex flex-col items-center justify-center">
          <svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
            {/* Circular Seating Center Facing */}
            <circle cx="90" cy="90" r="60" fill="none" stroke="#0f172a" strokeWidth="2" />
            {/* 6 nodes */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
               const rad = (angle - 90) * (Math.PI / 180);
               const x = 90 + 60 * Math.cos(rad);
               const y = 90 + 60 * Math.sin(rad);
               // arrow pointing inward
               const ax = 90 + 50 * Math.cos(rad);
               const ay = 90 + 50 * Math.sin(rad);
               return (
                 <g key={i}>
                   <circle cx={x} cy={y} r="8" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
                   <line x1={x} y1={y} x2={ax} y2={ay} stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow)" />
                 </g>
               )
            })}
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#0f172a" />
              </marker>
            </defs>
            <text x="80" y="94" fontFamily="serif" fontSize="12" fill="#0f172a">Center</text>
          </svg>
          <p className="text-[10px] font-sans text-slate-500 mt-3 tracking-widest uppercase">Fig 3. Center-Facing Vectors</p>
        </div>
      );
    case "nqt-geom-core":
      return (
         <div className="my-6 p-6 border border-slate-200 bg-white shadow-sm flex flex-col items-center justify-center">
          <svg width="220" height="140" viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
             {/* Simple Geometric mappings, Triangle & Circle */}
             <path d="M 40 100 L 100 100 L 70 30 Z" fill="none" stroke="#0f172a" strokeWidth="1.5"/>
             <line x1="70" y1="30" x2="70" y2="100" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
             <text x="75" y="70" fontFamily="sans-serif" fontSize="10" fill="#64748b">h</text>
             <text x="65" y="115" fontFamily="sans-serif" fontSize="10" fill="#0f172a">Base (b)</text>
             
             <circle cx="160" cy="65" r="35" fill="none" stroke="#0f172a" strokeWidth="1.5" />
             <line x1="160" y1="65" x2="195" y2="65" stroke="#0f172a" strokeWidth="1"/>
             <circle cx="160" cy="65" r="2" fill="#0f172a"/>
             <text x="175" y="60" fontFamily="sans-serif" fontSize="10" fill="#0f172a">r</text>
          </svg>
          <p className="text-[10px] font-sans text-slate-500 mt-1 tracking-widest uppercase">Fig 4. 2D Boundaries</p>
        </div>
      );
    case "nqt-gram-core":
      return (
        <div className="my-6 border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 font-bold text-xs uppercase tracking-widest text-[#0f172a]">Fig 5. Conditional Types Table</div>
          <table className="w-full text-left text-[11px] font-sans">
            <thead className="bg-[#0f172a] text-white">
              <tr>
                <th className="px-4 py-2 border-b border-slate-700 font-semibold uppercase">Type</th>
                <th className="px-4 py-2 border-b border-slate-700 font-semibold uppercase">Condition (If)</th>
                <th className="px-4 py-2 border-b border-slate-700 font-semibold uppercase">Result</th>
                <th className="px-4 py-2 border-b border-slate-700 font-semibold uppercase">Usage</th>
              </tr>
            </thead>
            <tbody className="text-slate-800 divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-slate-900 font-bold">Zero</td>
                <td className="px-4 py-2 font-mono text-slate-700">Present Simple</td>
                <td className="px-4 py-2 font-mono text-slate-700">Present Simple</td>
                <td className="px-4 py-2 italic text-slate-500">Universal truths</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-slate-900 font-bold">First</td>
                <td className="px-4 py-2 font-mono text-slate-700">Present Simple</td>
                <td className="px-4 py-2 font-mono text-slate-700">will + V1</td>
                <td className="px-4 py-2 italic text-slate-500">Possible future</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-slate-900 font-bold">Second</td>
                <td className="px-4 py-2 font-mono text-slate-700">Past Simple (V2)</td>
                <td className="px-4 py-2 font-mono text-slate-700">would + V1</td>
                <td className="px-4 py-2 italic text-slate-500">Unlikely/Hypothetical</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-slate-900 font-bold">Third</td>
                <td className="px-4 py-2 font-mono text-slate-700">Past Perfect (had + V3)</td>
                <td className="px-4 py-2 font-mono text-slate-700">would have + V3</td>
                <td className="px-4 py-2 italic text-slate-500">Impossible past</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    case "nqt-tense-core":
      return (
        <div className="my-6 border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col items-center">
          <div className="w-full bg-slate-50 border-b border-slate-200 px-4 py-2 font-bold text-xs uppercase tracking-widest text-[#0f172a]">Fig 6. Comprehensive Tense Matrix</div>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left text-[11px] font-sans">
              <thead className="bg-[#0f172a] text-white">
                <tr>
                  <th className="px-4 py-2 border-b border-slate-700 font-semibold uppercase whitespace-nowrap">Verb Tense</th>
                  <th className="px-4 py-2 border-b border-slate-700 font-semibold uppercase whitespace-nowrap">Formula</th>
                  <th className="px-4 py-2 border-b border-slate-700 font-semibold uppercase">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-2 font-bold text-slate-900 bg-slate-50 border-r border-slate-100 whitespace-nowrap">Present Simple</td>
                  <td className="px-4 py-2 font-mono text-slate-700 border-r border-slate-100">Subject + Verb (v1) + s/es</td>
                  <td className="px-4 py-2 text-slate-600 italic">"I play music nearly every day."</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-2 font-bold text-slate-900 bg-slate-50 border-r border-slate-100 whitespace-nowrap">Past Simple</td>
                  <td className="px-4 py-2 font-mono text-slate-700 border-r border-slate-100">Subject + Verb (v2) or irregular verb</td>
                  <td className="px-4 py-2 text-slate-600 italic">"Yesterday, I played an entire album."</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-2 font-bold text-slate-900 bg-slate-50 border-r border-slate-100 whitespace-nowrap">Future Simple</td>
                  <td className="px-4 py-2 font-mono text-slate-700 border-r border-slate-100">Subject + will/shall + verb (v1)</td>
                  <td className="px-4 py-2 text-slate-600 italic">"I will play as many albums as I can this month."</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-2 font-bold text-slate-900 bg-slate-50 border-r border-slate-100 whitespace-nowrap">Present Continuous</td>
                  <td className="px-4 py-2 font-mono text-slate-700 border-r border-slate-100">Subject + is/am/are + Verb(+ing)</td>
                  <td className="px-4 py-2 text-slate-600 italic">"I am playing The Offspring right now."</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-2 font-bold text-slate-900 bg-slate-50 border-r border-slate-100 whitespace-nowrap">Past Continuous</td>
                  <td className="px-4 py-2 font-mono text-slate-700 border-r border-slate-100">Subject + was/were + Verb(+ing)</td>
                  <td className="px-4 py-2 text-slate-600 italic">"I was playing Marshmello and Halsey last night."</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-2 font-bold text-slate-900 bg-slate-50 border-r border-slate-100 whitespace-nowrap">Future Continuous</td>
                  <td className="px-4 py-2 font-mono text-slate-700 border-r border-slate-100">Subject + will be/shall be + verb(+ing)</td>
                  <td className="px-4 py-2 text-slate-600 italic">"I will be playing My Chemical Romance after I download my favorite album."</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-2 font-bold text-slate-900 bg-slate-50 border-r border-slate-100 whitespace-nowrap">Present Perfect</td>
                  <td className="px-4 py-2 font-mono text-slate-700 border-r border-slate-100">Subject + Has/have + Verb (v3)</td>
                  <td className="px-4 py-2 text-slate-600 italic">"I have played so many songs I can’t keep track."</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-2 font-bold text-slate-900 bg-slate-50 border-r border-slate-100 whitespace-nowrap">Past Perfect</td>
                  <td className="px-4 py-2 font-mono text-slate-700 border-r border-slate-100">Subject + had + Verb (v3)</td>
                  <td className="px-4 py-2 text-slate-600 italic">"I had played at least 100 albums by the time I was 10."</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-2 font-bold text-slate-900 bg-slate-50 border-r border-slate-100 whitespace-nowrap">Future Perfect</td>
                  <td className="px-4 py-2 font-mono text-slate-700 border-r border-slate-100">Subject + will have + verb(v3)</td>
                  <td className="px-4 py-2 text-slate-600 italic">"I will have played at least 1,000 songs by the time this year ends."</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-2 font-bold text-slate-900 bg-slate-50 border-r border-slate-100 whitespace-nowrap">Present Perfect Continuous</td>
                  <td className="px-4 py-2 font-mono text-slate-700 border-r border-slate-100">Subject + Has/have + been + Verb(+ing)</td>
                  <td className="px-4 py-2 text-slate-600 italic">"I have been playing music since I was a toddler."</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-2 font-bold text-slate-900 bg-slate-50 border-r border-slate-100 whitespace-nowrap">Past Perfect Continuous</td>
                  <td className="px-4 py-2 font-mono text-slate-700 border-r border-slate-100">Subject + had + been + Verb(+ing)</td>
                  <td className="px-4 py-2 text-slate-600 italic">"I had been playing for at least a year before my parents bought me my own iPod."</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-2 font-bold text-slate-900 bg-slate-50 border-r border-slate-100 whitespace-nowrap">Future Perfect Continuous</td>
                  <td className="px-4 py-2 font-mono text-slate-700 border-r border-slate-100">Subject + will have been + verb(+ing)</td>
                  <td className="px-4 py-2 text-slate-600 italic">"I will have been playing songs for at least 3 hours before practice tonight."</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full bg-slate-50 p-3 italic text-xs text-slate-500 border-t border-slate-200">
            Note: v1 = base form of the verb; v2 = past simple form of the verb; v3 = past participle form of the verb.
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function UnifiedCheatSheetPage() {
  const [activeTab, setActiveTab] = useState(0);

  const cheatSheets = useMemo(() => {
    return cheatSheetIds.map(id => dataMap[id]).filter(Boolean);
  }, []);

  const activeSheet = cheatSheets[activeTab];

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30">
      <SiteHeader />

      {/* Dynamic Dark Header */}
      <section className="pt-32 pb-16 border-b border-white/5 bg-zinc-950/80 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <Link href="/aptitude-prep" className="inline-flex items-center justify-center text-sm font-medium text-zinc-500 hover:text-white transition-colors mb-8 group">
            <ArrowRight className="mr-2 h-4 w-4 rotate-180 transform group-hover:-translate-x-1 transition-transform" />
            Back to Aptitude Hub
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold tracking-widest uppercase justify-center">
              <Sparkles className="w-3 h-3 mr-2" /> Rapid Revision Terminal
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white drop-shadow-sm leading-tight">
              TCS NQT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Master Sheet</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              A meticulously compiled, high-density printable paper mapping the exact TCS NQT 2026 foundation pattern. Scroll to consume formulas natively.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PDF Document Viewer Container */}
      <section className="py-16 relative">
        <div className="max-w-[1240px] mx-auto px-4 py-8 md:py-16 font-serif">
          
          {/* Internal Tab Navigation (Styled like Document Index Tabs) */}
          <div className="flex flex-wrap gap-2 mb-0 font-sans border-b border-white/20 pl-4 md:pl-12">
            {cheatSheets.map((sheet, idx) => (
              <button
                key={sheet.id}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors rounded-t-xl z-10 relative ${
                  activeTab === idx 
                    ? 'bg-slate-50 text-slate-900 shadow-2xl shadow-black mt-2 -mb-[1px]' 
                    : 'bg-zinc-900 text-zinc-400 border border-white/10 hover:bg-zinc-800'
                }`}
              >
                {sheet.title.replace('TCS NQT 2026', '').replace('Cheat Sheet', '').trim()}
              </button>
            ))}
          </div>

          {/* Active White Paper Document Body */}
          {activeSheet ? (
            <div className="bg-slate-50 text-slate-900 shadow-2xl shadow-black/50 border border-slate-200 p-8 md:p-12 lg:p-16 min-h-[800px] rounded-b-xl rounded-tr-xl">
              
              {/* Fake Paper Header */}
              <div className="mb-12 border-b-[3px] border-slate-800 pb-6 text-center">
                 <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-slate-900 mb-2 font-sans">
                  {activeSheet.title}
                 </h2>
                 <p className="text-slate-500 font-sans italic text-sm">Compiled directly from foundational constraints.</p>
              </div>

              {/* Dense 2-Column Grid Flow for the document */}
              <div className="columns-1 md:columns-2 gap-12 text-justify">
                {activeSheet.topics.length === 0 && (
                  <div className="col-span-1 md:col-span-2 text-center text-slate-500 py-20 font-sans italic">
                    [Content compiling. Document pending publication.]
                  </div>
                )}

                {activeSheet.topics.map((topic: Topic, idx: number) => {
                    // Aggregate data
                    const allConcepts: Concept[] = topic.concepts || [];
                    const allFormulas: { title: string; formula: string }[] = topic.formulas || [];
                    const allTips: string[] = topic.proTips || [];

                    if (topic.subTopics) {
                      topic.subTopics.forEach((sub: SubTopic) => {
                        if (sub.concepts) allConcepts.push(...sub.concepts);
                        if (sub.formulas) allFormulas.push(...sub.formulas);
                        if (sub.proTips) allTips.push(...sub.proTips);
                      })
                    }

                    return (
                      <div key={topic.id} className="break-inside-avoid-column mb-12 overflow-hidden">
                        
                        {/* Topic Header */}
                        <div className="mb-4 text-left">
                          <h3 className="text-xl font-extrabold text-slate-900 border-l-[3px] border-slate-800 pl-3">
                            <span className="text-slate-500 mr-2">{idx + 1 < 10 ? `0${idx+1}` : idx+1}.</span> 
                            {topic.title}
                          </h3>
                        </div>

                        <div className="space-y-6">
                          {/* Formulas Data Block */}
                          {allFormulas.length > 0 && (
                            <div className="space-y-3">
                              {allFormulas.map((form, fidx) => (
                                <div key={fidx} className="bg-white border border-slate-200 p-4 shadow-sm">
                                  <h4 className="text-[11px] font-sans font-extrabold text-slate-700 uppercase tracking-widest mb-1.5">{form.title}</h4>
                                  <div 
                                    className="font-mono text-sm text-slate-950 overflow-x-auto whitespace-pre-wrap leading-relaxed tracking-tight"
                                    dangerouslySetInnerHTML={{ __html: form.formula }}
                                  />
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Concepts Text Block */}
                          {allConcepts.length > 0 && (
                            <div className="space-y-4">
                              {allConcepts.map((concept, cidx) => (
                                <div key={cidx} className="text-sm">
                                  <h4 className="font-bold text-slate-900 inline mr-2">{concept.title}:</h4>
                                  <span 
                                    className="text-slate-700 leading-relaxed font-serif prose prose-slate prose-sm max-w-none inline"
                                    dangerouslySetInnerHTML={{ __html: concept.description.replace(/<p>/g, '').replace(/<\/p>/g, '') }}
                                  />
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Pro Tips Block */}
                          {allTips.length > 0 && (
                            <div className="mt-6 pt-4 border-t border-slate-200">
                               <h4 className="text-[11px] font-sans font-extrabold text-slate-500 uppercase tracking-wider mb-2">Pro Tips</h4>
                               <ul className="list-disc pl-5 space-y-1.5 marker:text-slate-400">
                                 {allTips.map((tip, tidx) => {
                                    return (
                                      <li key={tidx} className="text-[13px] text-slate-700 leading-relaxed pl-1">
                                        <span dangerouslySetInnerHTML={{ __html: tip.replace('⚡', '') }} />
                                      </li>
                                    )
                                 })}
                               </ul>
                            </div>
                          )}

                          {/* Dynamic Diagram Renderer */}
                          {topic.subTopics && topic.subTopics.length > 0 && (
                             <CheatSheetDiagram topicId={topic.subTopics[0].id} />
                          )}
                        </div>

                      </div>
                    )
                })}
              </div>
            </div>
          ) : null}

        </div>
      </section>
      
      <EnhancedFooter />
    </main>
  );
}

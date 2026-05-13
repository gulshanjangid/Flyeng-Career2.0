"use client"

import { NeonGridBackground } from "@/components/neon-grid-background"
import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Zap, BarChart3, LineChart, PieChart, Activity, Sparkles, Binary } from "lucide-react"
import { cn } from "@/lib/utils"
import { Oswald, Inter } from "next/font/google"
import { HolographicCard } from "@/components/holographic-card"
import Link from "next/link"

const oswald = Oswald({ subsets: ["latin"], weight: ["500", "700"] });
const inter = Inter({ subsets: ["latin"] });

// Mock Data for "Market Matrix"
const skillTrends = [
    { skill: "Next.js", growth: "+145%", type: "Explosive", color: "text-cyan-400" },
    { skill: "PHP", growth: "-12%", type: "Declining", color: "text-red-500" },
    { skill: "AI Agents", growth: "+400%", type: "Hyper", color: "text-purple-400" },
]

export default function TrendHunterPage() {
    return (
        <NeonGridBackground className="min-h-screen font-sans text-slate-950 pb-0 overflow-x-hidden">
            <SiteHeader />

            <div className="relative pt-32 pb-20 container mx-auto px-4 max-w-7xl z-10">
                {/* HERO SECTION */}
                <div className="flex flex-col items-center justify-center text-center mb-32 relative">
                    {/* ENHANCED MATRIX GLOW */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-[130px] rounded-full pointer-events-none mix-blend-screen transition-all duration-1000" />
                    
                    {/* ROTATING RADAR ORB */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-cyan-500/10 border-dashed animate-[spin_20s_linear_infinite] pointer-events-none">
                        <div className="absolute top-0 left-1/2 w-4 h-4 bg-cyan-500 rounded-full blur-[2px] shadow-[0_0_20px_rgba(34,211,238,1)]" />
                        <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-purple-500 rounded-full blur-[1px] shadow-[0_0_15px_rgba(168,85,247,1)]" />
                    </div>

                    {/* SCAN LINE - VERTICAL */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent opacity-40 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-cyan-950/80 border border-cyan-400/50 text-cyan-400 text-sm font-bold uppercase tracking-widest shadow-[0_0_25px_rgba(34,211,238,0.5)] animate-pulse backdrop-blur-md">
                            <Binary className="w-4 h-4 animate-spin-slow" />
                            Target Acquired: Global Trends
                        </div>
                    </motion.div>

                    <h1 className={cn("text-7xl md:text-[8rem] font-black uppercase tracking-tighter text-white mb-8 relative z-10 leading-[0.9]", oswald.className)}>
                        ELITE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400 animate-gradient-x drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] filter brightness-110">
                            TREND HUNTER
                        </span>
                    </h1>

                    <p className={cn("text-xl md:text-3xl text-cyan-100 max-w-3xl mx-auto mb-12 leading-relaxed font-light", inter.className)}>
                        Don't just watch the market. <span className="text-cyan-400 font-bold bg-cyan-950/30 px-2 rounded border border-cyan-500/20">Hack it.</span>
                        <br />
                        <span className="block mt-4 text-white/50 text-lg">
                            Real-time skill velocity, role evolution, and data typically reserved for CTOs.
                        </span>
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 relative z-20 mt-4">
                        <Button asChild className="h-20 px-12 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xl shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:shadow-[0_0_80px_rgba(34,211,238,0.8)] transition-all hover:scale-105 uppercase tracking-widest border-2 border-transparent hover:border-white/50">
                            <Link href="/ai-tools/trend-hunter/tool">
                                Start Hunting <Zap className="ml-3 w-6 h-6 fill-black" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="h-20 px-12 rounded-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/50 hover:text-cyan-300 font-bold text-xl backdrop-blur-md uppercase tracking-wide hover:border-cyan-400">
                            <Link href="#features">
                                View The Data
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* === HOT TRENDS TICKER (SIMULATED) === */}
                <div className="w-full max-w-5xl mx-auto mb-24 overflow-hidden relative rounded-xl border-y border-cyan-500/20 bg-black/40 backdrop-blur-sm">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
                    
                    <div className="flex whitespace-nowrap py-4 animate-scroll-left">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-12 px-6">
                                <span className="flex items-center gap-2 text-cyan-400 font-mono text-sm"><TrendingUp className="w-4 h-4" /> AI AGENTS (+400%)</span>
                                <span className="flex items-center gap-2 text-purple-400 font-mono text-sm"><TrendingUp className="w-4 h-4" /> RUST (+150%)</span>
                                <span className="flex items-center gap-2 text-red-400 font-mono text-sm"><Activity className="w-4 h-4 rotate-180" /> PHP (-12%)</span>
                                <span className="flex items-center gap-2 text-green-400 font-mono text-sm"><TrendingUp className="w-4 h-4" /> SYSTEM DESIGN (+85%)</span>
                                <span className="flex items-center gap-2 text-white font-mono text-sm"><Sparkles className="w-4 h-4" /> PROMPT ENG (+300%)</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* VISUALIZER SECTION */}
                <div className="grid md:grid-cols-2 gap-8 mb-32">
                    {/* Card 1: Skill Velocity Matrix */}
                    <HolographicCard className="min-h-[450px] p-0 border-cyan-500/30 overflow-hidden bg-black/60" spotlightColor="rgba(34, 211, 238, 0.2)">
                        <div className="p-8 border-b border-cyan-500/10 flex justify-between items-center bg-cyan-950/20">
                            <div>
                                <h3 className={cn("text-2xl font-bold text-white uppercase", oswald.className)}>Market Velocity</h3>
                                <p className="text-cyan-400/60 text-xs font-mono">LIVE UPDATE: 12:04:42 PM</p>
                            </div>
                            <div className="animate-pulse">
                                <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                            </div>
                        </div>
                        
                        <div className="p-8 space-y-6">
                            {skillTrends.map((item, i) => (
                                <div key={i} className="relative group">
                                    <div className="flex justify-between items-end mb-2 relative z-10">
                                        <span className="font-bold text-white text-lg">{item.skill}</span>
                                        <span className={cn("font-bold font-mono", item.color)}>{item.growth}</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative">
                                        {/* Animated Bar */}
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: item.growth.includes('-') ? '20%' : item.growth.replace('+', '').replace('%', '') === '400' ? '95%' : '60%' }}
                                            transition={{ duration: 1.5, delay: i * 0.2 }}
                                            className={cn("h-full rounded-full opacity-80", 
                                                item.growth.includes('-') ? 'bg-red-500' : 'bg-gradient-to-r from-cyan-500 to-purple-500'
                                            )} 
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg -m-2 pointer-events-none" />
                                </div>
                            ))}
                        </div>
                    </HolographicCard>

                    {/* Card 2: Role Evolution Visualizer */}
                    <HolographicCard className="min-h-[450px] p-8 border-cyan-500/30 bg-black/60" spotlightColor="rgba(168, 85, 247, 0.2)">
                         <div className="flex items-center gap-4 mb-10">
                            <div className="p-4 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                <Activity className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className={cn("text-2xl font-bold text-white uppercase", oswald.className)}>Role Evolution</h3>
                                <p className="text-white/50 text-sm">Predictive Title Modeling</p>
                            </div>
                        </div>

                        <div className="relative h-[250px] flex flex-col justify-center gap-8">
                             {/* Evolution Path 1 */}
                            <div className="flex items-center justify-between group">
                                <div className="bg-white/5 border border-white/10 px-4 py-2 rounded text-white/40 text-sm line-through decoration-red-500/50 decoration-2">Frontend Dev</div>
                                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-cyan-500/50 mx-4 relative">
                                    <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                                </div>
                                <div className="bg-cyan-500/10 border border-cyan-500 px-6 py-3 rounded-lg text-cyan-400 font-bold shadow-[0_0_20px_rgba(34,211,238,0.2)]">UX Engineer</div>
                            </div>

                             {/* Evolution Path 2 */}
                             <div className="flex items-center justify-between group">
                                <div className="bg-white/5 border border-white/10 px-4 py-2 rounded text-white/40 text-sm line-through decoration-red-500/50 decoration-2">Backend Dev</div>
                                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-purple-500/50 mx-4 relative">
                                    <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-purple-500 animate-ping delay-75" />
                                </div>
                                <div className="bg-purple-500/10 border border-purple-500 px-6 py-3 rounded-lg text-purple-400 font-bold shadow-[0_0_20px_rgba(168,85,247,0.2)]">AI Architect</div>
                            </div>
                        </div>
                    </HolographicCard>
                </div>

                {/* === NEW: HUNTER'S TOOLKIT (COMPLETENESS) === */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-12">
                         <h2 className={cn("text-4xl font-black uppercase text-white", oswald.className)}>
                            Hunter's <span className="text-cyan-400">Toolkit</span>
                        </h2>
                        <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { title: "Skill Radar", icon: <BarChart3 className="w-6 h-6" />, desc: "Track 500+ tech stacks" },
                            { title: "Salary Predictor", icon: <LineChart className="w-6 h-6" />, desc: "Future-proof your income" },
                            { title: "Role Matcher", icon: <PieChart className="w-6 h-6" />, desc: "Find your gap" },
                            { title: "Market Alerts", icon: <Zap className="w-6 h-6" />, desc: "Instant trend notifications" },
                        ].map((tool, i) => (
                            <div key={i} className="p-6 bg-white/5 hover:bg-cyan-950/30 border border-white/5 hover:border-cyan-500/30 transition-all rounded-xl group cursor-pointer">
                                <div className="mb-4 text-cyan-500 group-hover:scale-110 transition-transform origin-left">{tool.icon}</div>
                                <h4 className="font-bold text-white mb-2 uppercase tracking-wide">{tool.title}</h4>
                                <p className="text-white/40 text-sm group-hover:text-white/70">{tool.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* === SUCCESS STORIES === */}
                <div className="mb-32 relative">
                     <div className="absolute -right-20 top-0 text-[200px] font-black text-cyan-500/5 select-none pointer-events-none z-0">
                        WINS
                    </div>
                     <div className="relative z-10 text-center mb-16">
                        <h2 className={cn("text-4xl md:text-5xl font-black uppercase text-white mb-4", oswald.className)}>
                            Hunter <span className="text-cyan-400">Success Logs</span>
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            Devs who spotted the wave before it broke.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { quote: "Saw the 'AI Agents' spike here 2 months ago. Pivoted my portfolio, landed a $180k remote role.", role: "Full Stack Dev", result: "+$60k Bump" },
                            { quote: "Every other tool says 'Learn React'. Trend Hunter said 'Learn Rust for WASM'. Best advice evver.", role: "Senior Engineer", result: "Early Adopter" },
                            { quote: "The salary predictions are scarily accurate. precise data helped me negotiate a 30% hike.", role: "Product Designer", result: "Negotiation Win" },
                        ].map((item, i) => (
                            <div key={i} className="bg-black/40 border border-cyan-500/20 p-8 rounded-2xl relative hover:border-cyan-500/50 transition-colors group">
                                <div className="mb-6 text-cyan-500">
                                    <Sparkles className="w-8 h-8 opacity-50" />
                                </div>
                                <p className={cn("text-white/80 text-lg mb-6 leading-relaxed italic", inter.className)}>
                                    "{item.quote}"
                                </p>
                                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                    <div className="text-white font-bold">{item.role}</div>
                                    <div className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 uppercase">
                                        {item.result}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* === FAQ SECTION === */}
                 <div className="max-w-3xl mx-auto mb-20 relative z-10">
                    <h3 className={cn("text-3xl font-bold text-white mb-8 text-center uppercase", oswald.className)}>Briefing & Intel</h3>
                    <div className="space-y-4">
                        {[
                            { q: "Where does this data come from?", a: "We scrape 50+ job boards, GitHub repositories, and tech forums (StackOverflow, Reddit, HackerNews) in real-time." },
                            { q: "How often are trends updated?", a: "The 'Velocity' metrics update every 6 hours. 'Salary' and 'Role' models are retrained weekly." },
                            { q: "Is this for beginners?", a: "Yes. Use it to choose what to learn next. Don't waste time on dying tech stacks." },
                        ].map((faq, i) => (
                            <div key={i} className="border border-white/10 bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                                <h4 className="text-white font-bold mb-2 flex items-center gap-3">
                                    <span className="text-cyan-500">0{i+1}.</span> {faq.q}
                                </h4>
                                <p className="text-white/60 text-sm ml-8">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                 </div>

            </div>
             <div className="relative z-20">
                <EnhancedFooter showCta={true} />
            </div>
        </NeonGridBackground>
    )
}

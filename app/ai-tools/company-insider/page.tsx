"use client"

import { NeonGridBackground } from "@/components/neon-grid-background"
import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ShieldCheck, Lock, Binary, Cpu, Search, Database, X, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { JetBrains_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google"
import Link from "next/link"
import { HolographicCard } from "@/components/holographic-card"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function CompanyInsiderLandingPage() {
    const [showModal, setShowModal] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [showModal]);

    const ModalContent = showModal ? (
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            >
                <motion.div 
                    initial={{ scale: 0.95, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, y: 20 }}
                    className="bg-slate-950 border border-blue-500/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative shadow-[0_0_50px_rgba(59,130,246,0.15)] flex flex-col md:flex-row min-h-[400px]"
                >
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 z-10"></div>
                    
                    {/* Left Side - Report Cover representation */}
                    <div className="md:w-5/12 bg-slate-900 border-r border-white/10 p-0 flex flex-col justify-center items-center relative overflow-hidden group">
                        <Image 
                            src="/collage_img.png"
                            alt="Market Intelligence Report Collage"
                            width={500}
                            height={600}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent pointer-events-none"></div>
                        
                        <div className="absolute bottom-6 left-6 right-6 z-10">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30 backdrop-blur-md">
                                    <Database className="w-4 h-4" />
                                </div>
                                <h4 className={cn("text-white font-bold text-lg", jakarta.className)}>Q3 INTELLIGENCE</h4>
                            </div>
                            <div className="h-[2px] w-12 bg-blue-500 mb-2 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                            <p className="text-xs text-slate-300 font-mono tracking-widest">115+ COMPANIES DECODED</p>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center relative bg-slate-950">
                        <button 
                            onClick={() => setShowModal(false)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                                <Search className="w-3 h-3" /> Live Database
                            </div>
                            <span className="text-xs text-slate-500 font-mono">UPDATED: TODAY</span>
                        </div>

                        <h3 className={cn("text-3xl font-black text-white mb-4 tracking-tight leading-tight", jakarta.className)}>
                            The Ultimate <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Insights Portal</span>
                        </h3>
                        
                        <p className="text-slate-400 leading-relaxed mb-8">
                            Explore dynamic data mapping of over 115+ top companies. Quickly discover real hiring patterns, exactly matched syllabi, and accurate salary bands right inside your browser without needing to download any PDFs.
                        </p>

                        <Link href="/ai-tools/company-insider/tool">
                            <Button 
                                className="w-full sm:w-auto h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-wide shadow-[0_0_30px_rgba(37,99,235,0.2)] hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all"
                            >
                                EXPLORE INSIGHTS <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    ) : null;

    return (
        <NeonGridBackground className="min-h-screen font-sans text-slate-950 pb-0 overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
            <SiteHeader />

            {mounted && createPortal(ModalContent, document.body)}

            <div className="relative pt-32 pb-20 container mx-auto px-4 max-w-7xl z-10">
                
                {/* === HERO SECTION === */}
                <div className="flex flex-col items-center text-center mb-32 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                         <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-md">
                            <Binary className="w-4 h-4 text-blue-400" />
                            <span className={mono.className}>INSIGHTS_ENGINE_V4.0</span>
                        </div>
                        
                        <h1 className={cn("text-6xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[1.1]", jakarta.className)}>
                            STOP <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">GUESSING.</span>
                            <br />
                            START <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">DECODING.</span>
                        </h1>

                        <p className={cn("text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light", inter.className)}>
                            The ultimate <strong className="text-white">AI Decoding Platform</strong> designed to reveal how elite companies actually hire. Get unrestricted access to hidden salary bands, granular interview blueprints, and exact technical patterns.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/ai-tools/company-insider/tool">
                                <Button size="lg" className="h-16 px-10 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg tracking-wide shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all hover:scale-105">
                                    LAUNCH DECODER HUD <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Button 
                                onClick={() => setShowModal(true)}
                                size="lg" 
                                variant="outline" 
                                className="h-16 px-10 rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 font-medium text-lg backdrop-blur-sm transition-all hover:scale-105"
                            >
                                View Intelligence Report
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* === FEATURE TEASERS (Fixed Alignment) === */}
                <div className="grid lg:grid-cols-3 gap-8 mb-32">
                    <HolographicCard className="p-8 border-white/10 bg-slate-950/50 min-h-[320px] flex flex-col group relative overflow-hidden">
                        <div className="mb-6 w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors group-hover:scale-110 duration-300">
                            <Database className="w-7 h-7" />
                        </div>
                        <h3 className={cn("text-2xl font-bold text-white mb-3", jakarta.className)}>Salary Decoder</h3>
                        <p className="text-slate-400 leading-relaxed">CTC vs Real In-Hand. We break down the 3-Tier hierarchy (Ninja/Digital/Prime) so you know exactly what hits the bank.</p>
                    </HolographicCard>

                    <HolographicCard className="p-8 border-white/10 bg-slate-950/50 min-h-[320px] flex flex-col group relative overflow-hidden" spotlightColor="rgba(239, 68, 68, 0.2)">
                         <div className="mb-6 w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-400 group-hover:bg-red-500/20 transition-colors group-hover:scale-110 duration-300">
                            <ShieldCheck className="w-7 h-7" />
                        </div>
                        <h3 className={cn("text-2xl font-bold text-white mb-3", jakarta.className)}>Gatekeeper Scan</h3>
                        <p className="text-slate-400 leading-relaxed">Strict eligibility checks. Don't waste time applying where automated filters will reject you (60% cut-offs, Gaps).</p>
                    </HolographicCard>

                    <HolographicCard className="p-8 border-white/10 bg-slate-950/50 min-h-[320px] flex flex-col group relative overflow-hidden" spotlightColor="rgba(168, 85, 247, 0.2)">
                         <div className="mb-6 w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors group-hover:scale-110 duration-300">
                            <Cpu className="w-7 h-7" />
                        </div>
                        <h3 className={cn("text-2xl font-bold text-white mb-3", jakarta.className)}>Interview Blueprint</h3>
                        <p className="text-slate-400 leading-relaxed">Step-by-step process maps. From NQT Part A topics to managerial round landmines. Decode the pattern.</p>
                    </HolographicCard>
                </div>

                {/* === DATA PREVIEW (Cleaned CTA) === */}
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-12 relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <div className="relative z-10 flex flex-col items-center">
                        <Badge variant="outline" className="mb-6 border-slate-700 text-slate-400">LIVE DATABASE</Badge>
                        <h2 className={cn("text-4xl md:text-5xl font-bold text-white mb-6", jakarta.className)}>115+ Companies Decoded</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
                            Access granular hiring data for TCS, Google, Amazon, Infosys, and more. 
                            Understand the exact criteria they use to filter candidates.
                        </p>
                        
                         <Link href="/ai-tools/company-insider/tool">
                            <Button size="lg" className="h-14 px-10 rounded-full bg-white text-black hover:bg-slate-200 font-bold tracking-wide transition-all hover:scale-105">
                                ACCESS DATABASE NOW
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
             <div className="relative z-20">
                <EnhancedFooter showCta={false} />
            </div>
        </NeonGridBackground>
    )
}
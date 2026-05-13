"use client"

import { NeonGridBackground } from "@/components/neon-grid-background"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ShieldAlert, Cpu, Lock, FileCode, Users, Terminal, Zap, ChevronRight, Activity, Database, CheckCircle, XCircle, Briefcase, GraduationCap, Clock, DollarSign, BrainCircuit, Filter, Timer, Hash, Star, Building, Code2, Coffee, Globe, MapPin, Target } from "lucide-react"
import { cn } from "@/lib/utils"
import { JetBrains_Mono, Inter } from "next/font/google"
import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { companies } from "../data/companies/index"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const mono = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function AIHiringDecoderToolPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCompanyId, setSelectedCompanyId] = useState<string>("tcs");
    const [activeTab, setActiveTab] = useState("overview"); // Default to Overview in V3

    // Filter companies based on search
    const filteredCompanies = useMemo(() => {
        return companies.filter(c => 
            c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
            c.type.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    // Get current active company data
    const activeCompany = useMemo(() => {
        return companies.find(c => c.id === selectedCompanyId) || companies[0];
    }, [selectedCompanyId]);

    // Derived state for stats
    const salaryMultiplier = activeCompany.roles[0]?.ctc.includes("LPA") 
        ? parseFloat(activeCompany.roles[0].ctc.replace(/[^0-9.]/g, '')) 
        : 0;
    
    return (
        <NeonGridBackground className="min-h-[100dvh] lg:h-screen font-sans text-slate-950 lg:overflow-hidden overflow-x-hidden selection:bg-cyan-500/30 selection:text-white bg-[#030712] flex flex-col">
            <SiteHeader />

            <div className="pt-16 pb-8 flex-1 w-full mx-auto px-2 md:px-6 max-w-[1920px] z-10 flex flex-col lg:flex-row gap-6 lg:gap-8 min-h-0">
                
                {/* === LEFT SIDEBAR: COMPANY SELECTOR (20%) === */}
                <div className="lg:w-[320px] w-full flex flex-col gap-4 shrink-0 h-[400px] lg:h-full lg:min-h-0">
                    {/* Header */}
                    <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-xl backdrop-blur-xl relative overflow-hidden flex flex-col gap-4 shadow-2xl ring-1 ring-white/5 shrink-0">
                         <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl opacity-50"></div>
                         <div className="flex items-center gap-3 relative z-10">
                            <div className="p-2.5 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl border border-cyan-400/30 text-cyan-300 shadow-[0_0_20px_rgba(8,145,178,0.4)]">
                                <BrainCircuit className="w-5 h-5" />
                            </div>
                            <div>
                                <h1 className={cn("text-lg font-black text-white tracking-widest leading-none drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]", mono.className)}>AI DECODER</h1>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <Input 
                                placeholder="Search DB (115+ Companies)..." 
                                className="bg-slate-900/80 border-slate-700 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 pl-9 text-white font-mono text-xs h-10 rounded-lg shadow-inner"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* List */}
                    <div className="bg-slate-950/80 border border-slate-800 rounded-xl flex-1 flex flex-col overflow-hidden backdrop-blur-xl shadow-2xl ring-1 ring-white/5 relative min-h-0">
                        {/* Gradient Fade Top/Bottom for Scroll Hint */}
                        <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-slate-950/80 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-slate-950/80 to-transparent z-10 pointer-events-none"></div>
                        
                        <div className="flex-1 relative min-h-0">
                            <div className="absolute inset-0 overflow-y-auto overflow-x-hidden custom-scrollbar p-3" data-lenis-prevent="true">
                                <div className="space-y-1.5 pr-3">
                                    <AnimatePresence>
                                {filteredCompanies.map((company) => (
                                    <motion.button
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0 }}
                                        key={company.id}
                                        onClick={() => setSelectedCompanyId(company.id)}
                                        className={cn(
                                            "w-full text-left p-3.5 rounded-xl flex items-center justify-between group transition-all duration-300 relative overflow-hidden",
                                            selectedCompanyId === company.id 
                                                ? "bg-gradient-to-r from-cyan-950/60 to-slate-900 border border-cyan-500/50 text-white shadow-[0_0_15px_rgba(8,145,178,0.15)] scale-[1.02]" 
                                                : "hover:bg-slate-900/80 text-slate-400 border border-transparent hover:border-slate-800 hover:scale-[1.01]"
                                        )}
                                    >
                                        {selectedCompanyId === company.id && (
                                            <motion.div layoutId="active-nav" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,145,178,0.1)_0%,transparent_100%)] pointer-events-none" />
                                        )}
                                        <div className="flex items-center gap-3 relative z-10">
                                            <div className={cn("w-9 h-9 shrink-0 rounded-lg flex items-center justify-center text-[10px] font-black font-mono shadow-sm transition-all duration-300", 
                                                selectedCompanyId === company.id ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.6)] border border-cyan-300" : "bg-slate-800 text-slate-500 group-hover:bg-slate-700 group-hover:text-slate-300 border border-slate-700"
                                            )}>
                                                {company.logo}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-center mb-0.5">
                                                    <div className={cn("text-sm font-bold truncate tracking-tight transition-colors", selectedCompanyId === company.id ? "text-white" : "text-slate-300")}>{company.name}</div>
                                                    <div className="flex items-center gap-1 text-[10px] text-yellow-500">
                                                        <Star className="w-3 h-3 fill-yellow-500 stroke-none" /> {company.rating.toFixed(1)}
                                                    </div>
                                                </div>
                                                <div className="text-[10px] font-mono tracking-widest uppercase opacity-80 truncate flex items-center gap-2 mt-0.5">
                                                     <span className={selectedCompanyId === company.id ? "text-cyan-300" : "text-slate-500"}>{company.type}</span>
                                                     {company.status === "Active" && <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)] animate-pulse" />}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.button>
                                ))}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* === RIGHT PANEL: DECODER DASHBOARD (80%) === */}
                <div className="flex-1 flex flex-col bg-slate-950/40 rounded-2xl border border-slate-800/60 backdrop-blur-xl shadow-2xl relative overflow-hidden min-h-[600px] lg:min-h-0 lg:h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-2xl pointer-events-none"></div>
                    
                    {/* DASHBOARD HEADER */}
                    <div className="shrink-0 flex items-end justify-between border-b mx-8 border-slate-800/80 pt-8 pb-6 relative z-10 gap-4">
                        <div>
                             <div className="flex items-center gap-4 mb-3">
                                <h2 className={cn("text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]", mono.className)}>
                                    {activeCompany.name}
                                </h2>
                                <Badge variant="outline" className={cn("font-mono tracking-widest uppercase border-opacity-50 px-3 py-1 shadow-inner", 
                                    activeCompany.status === "Active" ? "border-emerald-500 text-emerald-400 bg-emerald-500/10 shadow-[0_0_10px_rgba(16,185,129,0.2)]" : "border-slate-500 text-slate-400 bg-slate-800/50"
                                )}>
                                    {activeCompany.status === "Active" ? "● LIVE HIRING" : "○ INACTIVE"}
                                </Badge>
                            </div>
                            <p className="text-slate-400 text-sm max-w-3xl font-light leading-relaxed mt-2 lg:mt-0">
                                <span className="text-cyan-400 font-bold drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">AI Verdict: </span> 
                                {activeCompany.aiVerdict}
                            </p>
                        </div>
                        <div className="hidden xl:flex gap-6 items-center shrink-0">
                            <div className="text-right glass-panel p-3 rounded-xl border border-white/5 bg-black/20 backdrop-blur-md">
                                <div className="text-[10px] text-slate-500 uppercase font-mono tracking-widest mb-1">Update Cycle</div>
                                <div className="text-cyan-300 font-mono font-bold tracking-wider">BATCH '26</div>
                            </div>
                            <div className="text-right glass-panel p-3 rounded-xl border border-white/5 bg-black/20 backdrop-blur-md">
                                <div className="text-[10px] text-slate-500 uppercase font-mono tracking-widest mb-1">Difficulty</div>
                                <div className={cn("font-mono font-bold tracking-wider drop-shadow-md", salaryMultiplier > 40 ? "text-red-500" : salaryMultiplier > 20 ? "text-orange-400" : "text-yellow-400")}>
                                    {salaryMultiplier > 40 ? "NIGHTMARE" : salaryMultiplier > 20 ? "EXPERT" : salaryMultiplier > 8 ? "HARD" : "MODERATE"}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MAIN CONTENT AREA (Native Flow) */}
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col flex-1 overflow-hidden min-h-0">
                        <div className="border-b border-slate-800/50 bg-slate-950/50 px-8 backdrop-blur-sm z-20 shrink-0 overflow-x-auto custom-scrollbar">
                            <TabsList className="bg-transparent h-14 p-0 space-x-8 min-w-max flex items-center">
                                <TabsTrigger value="overview" className="h-full rounded-none border-b-2 border-transparent data-[state=active]:border-cyan-500 data-[state=active]:bg-transparent data-[state=active]:text-cyan-400 text-slate-400 hover:text-slate-200 transition-all font-medium text-sm gap-2 whitespace-nowrap">
                                    <Building className="w-4 h-4" /> Company Overview
                                </TabsTrigger>
                                <TabsTrigger value="salary" className="h-full rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-500 data-[state=active]:bg-transparent data-[state=active]:text-emerald-400 text-slate-400 hover:text-slate-200 transition-all font-medium text-sm gap-2 whitespace-nowrap">
                                    <span className="font-mono">₹</span> Role & Salary Decoder
                                </TabsTrigger>
                                <TabsTrigger value="tech" className="h-full rounded-none border-b-2 border-transparent data-[state=active]:border-purple-500 data-[state=active]:bg-transparent data-[state=active]:text-purple-400 text-slate-400 hover:text-slate-200 transition-all font-medium text-sm gap-2 whitespace-nowrap">
                                    <Code2 className="w-4 h-4" /> Tech Stack
                                </TabsTrigger>
                                <TabsTrigger value="process" className="h-full rounded-none border-b-2 border-transparent data-[state=active]:border-yellow-500 data-[state=active]:bg-transparent data-[state=active]:text-yellow-400 text-slate-400 hover:text-slate-200 transition-all font-medium text-sm gap-2 whitespace-nowrap">
                                    <BrainCircuit className="w-4 h-4" /> Interview Process
                                </TabsTrigger>
                                <TabsTrigger value="eligibility" className="h-full rounded-none border-b-2 border-transparent data-[state=active]:border-red-500 data-[state=active]:bg-transparent data-[state=active]:text-red-400 text-slate-400 hover:text-slate-200 transition-all font-medium text-sm gap-2 whitespace-nowrap">
                                    <Lock className="w-4 h-4" /> Gatekeeper Scan
                                </TabsTrigger>
                                <TabsTrigger value="culture" className="h-full rounded-none border-b-2 border-transparent data-[state=active]:border-pink-500 data-[state=active]:bg-transparent data-[state=active]:text-pink-400 text-slate-400 hover:text-slate-200 transition-all font-medium text-sm gap-2 whitespace-nowrap">
                                    <Coffee className="w-4 h-4" /> Work Culture
                                </TabsTrigger>
                                <TabsTrigger value="reality" className="h-full rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:text-blue-400 text-slate-400 hover:text-slate-200 transition-all font-medium text-sm gap-2 whitespace-nowrap">
                                    <ChevronRight className="w-4 h-4" /> Insider Truth
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <div className="flex-1 relative min-h-0">
                            <div className="absolute inset-0 overflow-y-auto overflow-x-hidden custom-scrollbar bg-slate-950/30 p-4 md:p-8 pb-32" data-lenis-prevent="true">
                                 
                                {/* === OVERVIEW TAB (NEW) === */}
                            <TabsContent value="overview" className="mt-0 space-y-8 data-[state=inactive]:hidden focus-visible:outline-none">
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                                    <div className="xl:col-span-2 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800/80 p-8 shadow-2xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none"></div>
                                        <h3 className="text-2xl font-black text-white tracking-tight mb-6 flex items-center gap-3">
                                            <Building className="w-6 h-6 text-cyan-400" /> At a Glance
                                        </h3>
                                        <p className="text-slate-300 leading-relaxed text-lg font-light mb-8">
                                            {activeCompany.overview.about}
                                        </p>
                                        
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="bg-black/30 p-4 rounded-xl border border-white/5 flex gap-4 items-start hover:-translate-y-1 hover:shadow-lg hover:border-slate-700 transition-all duration-300">
                                                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="text-[10px] text-slate-500 uppercase font-mono tracking-widest mb-1">Key Hubs</p>
                                                    <p className="font-semibold text-slate-200 text-sm max-w-[200px]">{activeCompany.overview.headquarters}</p>
                                                </div>
                                            </div>
                                            <div className="bg-black/30 p-4 rounded-xl border border-white/5 flex gap-4 items-start hover:-translate-y-1 hover:shadow-lg hover:border-slate-700 transition-all duration-300">
                                                <Users className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="text-[10px] text-slate-500 uppercase font-mono tracking-widest mb-1">Scale</p>
                                                    <p className="font-semibold text-slate-200 text-sm">{activeCompany.overview.size}</p>
                                                </div>
                                            </div>
                                            <div className="bg-black/30 p-4 rounded-xl border border-white/5 flex gap-4 items-start hover:-translate-y-1 hover:shadow-lg hover:border-slate-700 transition-all duration-300">
                                                <Activity className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="text-[10px] text-slate-500 uppercase font-mono tracking-widest mb-1">Founded</p>
                                                    <p className="font-semibold text-slate-200 text-sm">{activeCompany.overview.founded}</p>
                                                </div>
                                            </div>
                                            <div className="bg-black/30 p-4 rounded-xl border border-white/5 flex flex-col gap-1 items-start justify-center hover:-translate-y-1 hover:shadow-lg hover:border-slate-700 transition-all duration-300">
                                                <a href={activeCompany.overview.website.startsWith('http') ? activeCompany.overview.website : `https://${activeCompany.overview.website}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors group truncate w-full">
                                                    <Globe className="w-4 h-4 shrink-0" /> <span className="truncate">{activeCompany.overview.website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</span> <ChevronRight className="w-4 h-4 text-cyan-500/50 group-hover:translate-x-1 transition-transform shrink-0 ml-auto" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col gap-6">
                                        <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.05)] relative overflow-hidden flex flex-col items-center justify-center text-center h-full min-h-[250px] group hover:border-yellow-500/40 transition-colors">
                                             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                             <Star className="w-12 h-12 fill-yellow-500 stroke-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.8)] mb-4" />
                                             <div className="text-6xl font-black text-white font-mono tracking-tighter drop-shadow-xl">{activeCompany.rating.toFixed(1)}<span className="text-2xl text-slate-500">/5</span></div>
                                             <p className="text-xs text-slate-400 font-mono tracking-widest uppercase mt-4">Industry Standard Score</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </TabsContent>

                            {/* === SALARY TAB (REVAMPED) === */}
                            <TabsContent value="salary" className="mt-0 space-y-8 data-[state=inactive]:hidden"> 
                                <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
                                    <AnimatePresence mode="popLayout">
                                    {activeCompany.roles.map((role, i) => (
                                        <motion.div 
                                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                                            key={`${activeCompany.id}-role-${i}`}
                                            className="group relative bg-[#060B14]/90 backdrop-blur-xl rounded-2xl border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(8,145,178,0.2)] flex flex-col w-full"
                                            style={{ minHeight: "480px" }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-transparent pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity"></div>
                                            
                                            {/* Holographic Header */}
                                            <div className="relative p-6 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-transparent shrink-0">
                                                <div className="absolute top-0 right-0 p-24 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500 w-full h-full" />
                                                <div className="flex justify-between items-start mb-4 relative z-10">
                                                    <div className="flex items-center gap-2">
                                                        <Badge className="bg-slate-900 text-cyan-400 font-mono text-[10px] uppercase tracking-widest border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.1)]">Lvl {i+1}</Badge>
                                                        {i === activeCompany.roles.length - 1 && <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/40 text-[10px] uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.3)]">PREMIUM</Badge>}
                                                    </div>
                                                </div>
                                                <h3 className={cn("text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 relative z-10 tracking-tighter", mono.className)}>{role.title}</h3>
                                            </div>

                                            {/* Salary Visualization Array */}
                                            <div className="p-6 flex flex-col gap-6 relative z-10 flex-1">
                                                {/* CTC Block */}
                                                <div className="bg-black/40 p-5 rounded-xl border border-slate-800/80 group-hover:border-slate-700 transition-colors shadow-inner">
                                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                                                        <Lock className="w-3.5 h-3.5 text-cyan-500/60" /> OFFER LETTER CTC 
                                                    </p>
                                                    <div className="flex items-baseline gap-2">
                                                        <div className="text-4xl font-mono font-black text-white tracking-tighter drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">{role.ctc}</div>
                                                    </div>
                                                </div>

                                                {/* Breakdown Bars */}
                                                {(role.base || role.variable || role.rsus) && (
                                                    <div className="space-y-5 flex-1 w-full">
                                                        <div>
                                                            <div className="flex justify-between text-xs font-medium text-slate-400 mb-2.5">
                                                                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div> Base Pay</span>
                                                                <span className="text-slate-200 font-mono font-semibold tracking-wide">{role.base}</span>
                                                            </div>
                                                            <div className="w-full h-2.5 bg-black/50 rounded-full overflow-hidden border border-slate-800/80 shadow-inner">
                                                                <motion.div initial={{ width: 0 }} animate={{ width: "70%" }} transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }} className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full relative">
                                                                    <div className="absolute inset-0 w-full h-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] animate-[shine_2s_infinite]"></div>
                                                                </motion.div>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className="flex justify-between text-xs font-medium text-slate-400 mb-2.5">
                                                                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div> Variable / Bonus</span>
                                                                <span className="text-yellow-200 font-mono font-semibold tracking-wide">{role.variable}</span>
                                                            </div>
                                                            <div className="w-full h-2.5 bg-black/50 rounded-full overflow-hidden border border-slate-800/80 shadow-inner">
                                                                <motion.div initial={{ width: 0 }} animate={{ width: "20%" }} transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }} className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full relative">
                                                                     <div className="absolute inset-0 w-full h-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] animate-[shine_2s_infinite]"></div>
                                                                </motion.div>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className="flex justify-between text-xs font-medium text-slate-400 mb-2.5">
                                                                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div> RSUs / Stock</span>
                                                                <span className="text-purple-200 font-mono font-semibold tracking-wide">{role.rsus}</span>
                                                            </div>
                                                            <div className="w-full h-2.5 bg-black/50 rounded-full overflow-hidden border border-slate-800/80 shadow-inner">
                                                                <motion.div initial={{ width: 0 }} animate={{ width: "10%" }} transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }} className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full relative">
                                                                     <div className="absolute inset-0 w-full h-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] animate-[shine_2s_infinite]"></div>
                                                                </motion.div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="flex justify-between text-xs font-medium text-red-400 pt-4 border-t border-slate-800/80 border-dashed">
                                                            <span>Deductions (PF/Tax)</span>
                                                            <span className="font-mono tracking-wide">-{role.deductions}</span>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* In-Hand Footer */}
                                                <div className="pt-2 mt-auto">
                                                    <div className="relative overflow-hidden flex justify-between items-center bg-cyan-950/30 p-5 rounded-xl border border-cyan-500/40 group-hover:bg-cyan-900/50 group-hover:border-cyan-400 transition-all duration-300 shadow-[inset_0_0_20px_rgba(8,145,178,0.1)]">
                                                        <div className="relative z-10">
                                                            <p className="text-[11px] text-cyan-400 uppercase font-black tracking-widest mb-1 shadow-cyan-500">REAL IN-HAND</p>
                                                            <p className="text-[10px] text-cyan-200/50 font-mono uppercase tracking-wide">Est. Monthly Credit</p>
                                                        </div>
                                                        <div className="relative z-10 text-3xl md:text-4xl font-black text-white font-mono drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
                                                            {role.inHand}
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </motion.div>
                                    ))}
                                    </AnimatePresence>
                                </div>
                                
                                {/* Disclaimer */}
                                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex gap-4 items-start backdrop-blur-sm">
                                    <Activity className="w-5 h-5 shrink-0 mt-0.5 text-cyan-500" />
                                    <p className="leading-relaxed"><strong>Data Intelligence:</strong> Salary figures are algorithmic estimates based on 2024-2025 offer letters and crowdsourced datapoints. In-hand components may vary based on specific city categories (Tier 1 vs 2) and individual tax regime selections.</p>
                                </div>
                            </TabsContent>

                            {/* === TECH STACK TAB (NEW) === */}
                            <TabsContent value="tech" className="mt-0 space-y-8 data-[state=inactive]:hidden focus-visible:outline-none">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-slate-900/60 backdrop-blur-md rounded-xl border border-slate-800 p-6 flex flex-col gap-4 shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:border-slate-700 transition-all duration-300">
                                        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                                            <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20"><Code2 className="w-5 h-5 text-blue-400" /></div>
                                            <h4 className="text-xl font-bold font-mono text-white tracking-tight">Frontend / Client</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {activeCompany.techStack.frontend.map(t => (
                                                <Badge key={t} className="bg-slate-950 text-slate-300 hover:bg-slate-800 border-slate-700 px-3 py-1.5">{t}</Badge>
                                            ))}
                                        </div>
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="bg-slate-900/60 backdrop-blur-md rounded-xl border border-slate-800 p-6 flex flex-col gap-4 shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:border-slate-700 transition-all duration-300">
                                        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                                            <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20"><BrainCircuit className="w-5 h-5 text-emerald-400" /></div>
                                            <h4 className="text-xl font-bold font-mono text-white tracking-tight">Backend Core</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {activeCompany.techStack.backend.map(t => (
                                                <Badge key={t} className="bg-slate-950 text-slate-300 hover:bg-slate-800 border-slate-700 px-3 py-1.5">{t}</Badge>
                                            ))}
                                        </div>
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="bg-slate-900/60 backdrop-blur-md rounded-xl border border-slate-800 p-6 flex flex-col gap-4 shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:border-slate-700 transition-all duration-300">
                                        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                                            <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20"><MapPin className="w-5 h-5 text-purple-400" /></div>
                                            <h4 className="text-xl font-bold font-mono text-white tracking-tight">Infrastructure</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {activeCompany.techStack.infra.map(t => (
                                                <Badge key={t} className="bg-slate-950 text-slate-300 hover:bg-slate-800 border-slate-700 px-3 py-1.5">{t}</Badge>
                                            ))}
                                        </div>
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="bg-slate-900/60 backdrop-blur-md rounded-xl border border-slate-800 p-6 flex flex-col gap-4 shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:border-slate-700 transition-all duration-300">
                                        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                                            <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20"><Activity className="w-5 h-5 text-cyan-400" /></div>
                                            <h4 className="text-xl font-bold font-mono text-white tracking-tight">Data & Messaging</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {activeCompany.techStack.data.map(t => (
                                                <Badge key={t} className="bg-slate-950 text-slate-300 hover:bg-slate-800 border-slate-700 px-3 py-1.5">{t}</Badge>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </TabsContent>

                            {/* === PROCESS TAB === */}
                                    <TabsContent value="process" className="mt-0 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        
                                        {/* === NEW OVERVIEW HEADER FOR PROCESS === */}
                                        <motion.div 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                                        >
                                            <div className="bg-purple-950/20 border border-purple-500/20 backdrop-blur-md rounded-2xl p-6 flex flex-col">
                                                <div className="text-xs font-mono text-purple-400/80 mb-2 uppercase tracking-widest flex items-center gap-2"><Filter className="w-3.5 h-3.5"/> Total Rounds</div>
                                                <div className={cn("text-4xl font-black text-white mt-auto", mono.className)}>{activeCompany.process.length}</div>
                                            </div>
                                            
                                            <div className="md:col-span-2 bg-slate-900/40 border border-slate-800/80 backdrop-blur-md rounded-2xl p-6 relative overflow-hidden flex flex-col">
                                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent pointer-events-none"></div>
                                                <div className="text-xs font-mono text-slate-400 mb-4 uppercase tracking-widest relative z-10 flex items-center gap-2"><Target className="w-3.5 h-3.5"/> Pipeline Pattern & Core Focus</div>
                                                
                                                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                                                    {Array.from(new Set(activeCompany.process.flatMap(p => p.topics || []))).slice(0, 8).map((t, idx) => (
                                                        <Badge key={idx} variant="outline" className="bg-slate-950/80 border-purple-500/30 text-purple-300 font-medium px-3 py-1 scale-95 origin-left">
                                                            {t}
                                                        </Badge>
                                                    ))}
                                                    {Array.from(new Set(activeCompany.process.flatMap(p => p.topics || []))).length > 8 && (
                                                        <Badge variant="outline" className="bg-slate-950 border-slate-700 text-slate-400 font-medium px-3 py-1 scale-95 origin-left">
                                                            +{Array.from(new Set(activeCompany.process.flatMap(p => p.topics || []))).length - 8} more
                                                        </Badge>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>

                                        <div className="max-w-4xl relative">
                                            {/* Process Line */}
                                            <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent"></div>
                                            
                                            {activeCompany.process.map((step, i) => (
                                                <motion.div 
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    key={`${activeCompany.id}-process-${i}`} 
                                                    className="mb-6 relative pl-8 border-l-2 border-slate-800/80 last:border-0 group"
                                                >
                                                    <div className="absolute left-[-1.3rem] top-6 flex items-center justify-center w-10 h-10 rounded-xl bg-slate-950 border border-purple-500/40 group-hover:border-purple-400 group-hover:bg-purple-950/50 text-purple-400 group-hover:text-purple-300 font-black shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] z-10 transition-all duration-300">
                                                        {i+1}
                                                    </div>
                                                    
                                                    <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 p-6 rounded-2xl hover:border-purple-500/40 hover:bg-slate-900/80 transition-all duration-300 relative overflow-hidden group/card shadow-lg flex-1">
                                                        {/* Scanning Hover */}
                                                        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>

                                                        <div className="flex flex-wrap justify-between items-center mb-3 gap-3 relative z-10">
                                                            <h3 className={cn("text-xl font-bold text-white", mono.className)}>{step.step}</h3>
                                                            <div className="flex gap-2 text-xs font-mono">
                                                                {step.duration && <Badge variant="secondary" className="bg-slate-950 text-slate-400 border-slate-800 rounded-sm"><Timer className="w-3 h-3 mr-1"/> {step.duration}</Badge>}
                                                                {step.difficulty && <Badge variant="outline" className={cn("rounded-sm", step.difficulty === 'Expert' ? "text-red-400 border-red-900/50" : "text-emerald-400 border-emerald-900/50")}>{step.difficulty}</Badge>}
                                                            </div>
                                                        </div>
                                                        <p className="text-slate-400 leading-relaxed text-sm mb-4">{step.description}</p>
                                                        
                                                        {step.topics && (
                                                            <div className="flex flex-wrap gap-2 pt-4 mt-2 border-t border-white/5 relative z-10">
                                                                <span className="text-[10px] uppercase tracking-widest font-mono text-purple-500/70 mr-2 self-center">TESTS ON:</span>
                                                                {step.topics.map((t, idx) => (
                                                                    <Badge key={idx} variant="outline" className="bg-purple-500/10 border-purple-500/20 text-purple-300 hover:text-purple-200 hover:border-purple-500/40 transition-colors font-medium">
                                                                        {t}
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                        
                                        {/* Detailed Syllabus / Exam Pattern Section */}
                                        {activeCompany.syllabus && activeCompany.syllabus.length > 0 && (
                                            <motion.div 
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                                className="mt-12 max-w-5xl"
                                            >
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                                                        <FileCode className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-white">Detailed Exam Syllabus</h3>
                                                        <p className="text-sm text-slate-400">Comprehensive breakdown of topics and sections tested across rounds</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                    {activeCompany.syllabus.map((section, idx) => (
                                                        <div key={idx} className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 p-5 rounded-xl hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-300">
                                                            <h4 className="text-md font-bold text-purple-300 mb-4 pb-2 border-b border-white/5">{section.subject}</h4>
                                                            <ul className="space-y-2.5">
                                                                {section.topics.map((topic, tidx) => (
                                                                    <li key={tidx} className="flex items-start gap-2.5 text-sm text-slate-300 font-medium leading-snug">
                                                                        <div className="w-3 h-3 rounded-full bg-slate-950 border border-purple-500/50 flex items-center justify-center shrink-0 mt-0.5">
                                                                            <div className="w-1 h-1 rounded-full bg-purple-400"></div>
                                                                        </div>
                                                                        <span>{topic}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </TabsContent>

                                    {/* === ELIGIBILITY TAB === */}
                                    <TabsContent value="eligibility" className="mt-0 data-[state=inactive]:hidden focus-visible:outline-none">
                                         <motion.div 
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            key={`${activeCompany.id}-elig`}
                                            className="grid md:grid-cols-2 gap-8 max-w-6xl"
                                        >
                                            <div className="bg-slate-900/40 backdrop-blur-md border border-red-500/20 p-8 rounded-2xl relative overflow-hidden group hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] transition-all duration-300">
                                                <div className="absolute top-0 right-0 p-32 bg-red-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-red-500/10 transition-all duration-500" />
                                                <div className="flex items-center gap-4 mb-8 relative z-10">
                                                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)] group-hover:scale-110 transition-transform duration-300">
                                                        <ShieldAlert className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-white tracking-tight">Hard Filters</h3>
                                                        <p className="text-red-400/60 text-sm">Automated Resume Rejection Criteria</p>
                                                    </div>
                                                </div>
                                                <div className="space-y-6 relative z-10">
                                                    <div className="flex justify-between items-center p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 group-hover:border-slate-700/80 transition-colors">
                                                        <span className="text-slate-400 font-medium text-sm">Cut-off Score</span>
                                                        <span className="text-white font-mono font-bold bg-white/5 px-3 py-1 rounded">{activeCompany.eligibility.cgpa}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                                                        <span className="text-slate-400 font-medium text-sm">History of Arrears</span>
                                                        <span className="text-white font-mono font-bold">{activeCompany.eligibility.backlogs}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                                                        <span className="text-slate-400 font-medium text-sm">Education Gap</span>
                                                        <span className="text-white font-mono font-bold">{activeCompany.eligibility.gap}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {activeCompany.eligibility.notes && (
                                                <div className="bg-slate-900/20 border border-slate-800 p-8 rounded-2xl flex flex-col justify-center">
                                                    <h4 className="text-slate-200 font-bold mb-4 flex items-center gap-2">
                                                        <Terminal className="w-5 h-5 text-yellow-500" /> Hiring Manager's Note
                                                    </h4>
                                                    <p className="text-slate-400 leading-relaxed italic border-l-2 border-yellow-500/50 pl-4 py-2">
                                                        "{activeCompany.eligibility.notes}"
                                                    </p>
                                                </div>
                                            )}
                                        </motion.div>
                                    </TabsContent>

                                    {/* === CULTURE TAB (NEW) === */}
                                    <TabsContent value="culture" className="mt-0 data-[state=inactive]:hidden focus-visible:outline-none">
                                        <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
                                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-gradient-to-br from-pink-950/20 to-slate-900/60 border border-pink-500/20 p-8 rounded-2xl flex flex-col gap-4 text-center items-center justify-center min-h-[200px] hover:-translate-y-1 hover:shadow-2xl hover:border-pink-500/40 transition-all duration-300">
                                                <Coffee className="w-10 h-10 text-pink-400 mb-2 drop-shadow-[0_0_10px_rgba(244,114,182,0.5)]" />
                                                <div className="text-[10px] text-slate-500 uppercase font-mono tracking-widest">Work-Life Balance</div>
                                                <div className="text-xl font-bold text-white">{activeCompany.culture.wlb}</div>
                                            </motion.div>
                                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-gradient-to-br from-indigo-950/20 to-slate-900/60 border border-indigo-500/20 p-8 rounded-2xl flex flex-col gap-4 text-center items-center justify-center min-h-[200px] hover:-translate-y-1 hover:shadow-2xl hover:border-indigo-500/40 transition-all duration-300">
                                                <Globe className="w-10 h-10 text-indigo-400 mb-2 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                                                <div className="text-[10px] text-slate-500 uppercase font-mono tracking-widest">Remote Policy</div>
                                                <div className="text-xl font-bold text-white">{activeCompany.culture.remote}</div>
                                            </motion.div>
                                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-gradient-to-br from-yellow-950/20 to-slate-900/60 border border-yellow-500/20 p-8 rounded-2xl flex flex-col gap-4 text-center items-center justify-center min-h-[200px] hover:-translate-y-1 hover:shadow-2xl hover:border-yellow-500/40 transition-all duration-300">
                                                <Activity className="w-10 h-10 text-yellow-400 mb-2 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                                                <div className="text-[10px] text-slate-500 uppercase font-mono tracking-widest">General Vibe</div>
                                                <div className="text-xl font-bold text-white leading-tight">{activeCompany.culture.vibe}</div>
                                            </motion.div>
                                        </div>
                                    </TabsContent>

                                    {/* === REALITY TAB === */}
                                    <TabsContent value="reality" className="mt-0 data-[state=inactive]:hidden focus-visible:outline-none">
                                        <motion.div 
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            key={`${activeCompany.id}-reality`}
                                            className="grid md:grid-cols-2 gap-8 max-w-6xl"
                                        >
                                            <div className="bg-emerald-950/20 backdrop-blur-md border border-emerald-500/30 p-8 rounded-2xl hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-shadow">
                                                <h3 className="text-emerald-400 font-bold text-lg mb-6 flex items-center gap-2">
                                                    <CheckCircle className="w-5 h-5" /> The Good
                                                </h3>
                                                <ul className="space-y-4">
                                                    {activeCompany.reality.good.map((p, i) => (
                                                        <li key={i} className="flex gap-4 text-slate-300 text-sm leading-relaxed">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                                                            {p}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                             <div className="bg-red-950/10 border border-red-500/20 p-8 rounded-2xl">
                                                <h3 className="text-red-400 font-bold text-lg mb-6 flex items-center gap-2">
                                                    <XCircle className="w-5 h-5" /> The Bad
                                                </h3>
                                                <ul className="space-y-4">
                                                    {activeCompany.reality.bad.map((c, i) => (
                                                        <li key={i} className="flex gap-4 text-slate-300 text-sm leading-relaxed">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                                            {c}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    </TabsContent>
                                    
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        </NeonGridBackground>
    )
}

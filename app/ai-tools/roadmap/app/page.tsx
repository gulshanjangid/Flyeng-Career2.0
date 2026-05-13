"use client"

import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Rocket, Clock, BookOpen, ChevronDown, ChevronUp, Save, Star, Zap, Code, Youtube, FileText, Book, GraduationCap, Loader2, Search, CheckCircle2, Circle, TrendingUp, Printer, Layout, Target, Calendar, MessageSquare, Brain, Briefcase, DollarSign, Award, Wrench, CheckSquare, Sparkles, Map, AlertTriangle, Network, Database, ArrowRight } from 'lucide-react'
import Link from "next/link"
import { useState, useEffect } from "react"
import { toast } from "sonner"
import { motion, AnimatePresence } from "framer-motion"
import { PREDEFINED_ROADMAPS, RoadmapData, Milestone, Resource } from "@/lib/roadmap-data"
import { useRouter } from "next/navigation"

export default function RoadmapApp() {
    const [goal, setGoal] = useState("")
    const [roadmap, setRoadmap] = useState<RoadmapData | null>(null)
    const [loading, setLoading] = useState(false)
    const [expandedStep, setExpandedStep] = useState<number | null>(null)
    const [activeTab, setActiveTab] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Beginner')
    const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set())
    const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())
    const router = useRouter()

    const handleQuickSelect = (role: string) => {
        setGoal(role)
        if (PREDEFINED_ROADMAPS[role]) {
            setRoadmap(PREDEFINED_ROADMAPS[role])
            toast.success(`Loaded roadmap for ${role}`)
        } else {
            generateRoadmap(role)
        }
    }

    // Auto-switch tab if current tab is empty
    useEffect(() => {
        if (roadmap && roadmap.milestones.length > 0) {
            const hasMilestonesInCurrentTab = roadmap.milestones.some(m => m.difficulty === activeTab);
            if (!hasMilestonesInCurrentTab) {
                // Find the first difficulty that has milestones
                const firstMilestone = roadmap.milestones[0];
                if (firstMilestone) {
                    setActiveTab(firstMilestone.difficulty);
                }
            }
        }
    }, [roadmap, activeTab]);

    const toggleStepCompletion = (stepTitle: string) => {
        const newCompleted = new Set(completedSteps)
        if (newCompleted.has(stepTitle)) {
            newCompleted.delete(stepTitle)
        } else {
            newCompleted.add(stepTitle)
            toast.success("Milestone completed!")
        }
        setCompletedSteps(newCompleted)
    }

    const toggleChecklistItem = (item: string) => {
        const newChecked = new Set(checkedItems)
        if (newChecked.has(item)) {
            newChecked.delete(item)
        } else {
            newChecked.add(item)
        }
        setCheckedItems(newChecked)
    }

    const handlePrint = () => {
        window.print()
    }

    const navigateToJobMarket = () => {
        if (roadmap?.role) {
            router.push('/ai-tools/job-market')
            toast.info(`Check job market for ${roadmap.role}`)
        }
    }

    const generateRoadmap = async (customGoal?: string) => {
        const targetGoal = customGoal || goal;
        if (!targetGoal) {
            toast.error("Please enter a target role.");
            return;
        }

        if (PREDEFINED_ROADMAPS[targetGoal]) {
            const newRoadmap = PREDEFINED_ROADMAPS[targetGoal];
            setRoadmap(newRoadmap);
            // Auto-select the first available difficulty
            if (newRoadmap.milestones.length > 0) {
                setActiveTab(newRoadmap.milestones[0].difficulty);
            } else {
                setActiveTab('Beginner');
            }
            toast.success(`Loaded roadmap for ${targetGoal}`);
            return;
        }

        setLoading(true);
        setRoadmap(null);
        try {
            const response = await fetch("/api/roadmap/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ goal: targetGoal })
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error || "Failed to generate roadmap");

            setRoadmap(data);
        } catch (error) {
            console.error(error);
            toast.error("Failed to generate roadmap. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    const getDifficultyColor = (level: string) => {
        switch (level) {
            case 'Beginner': return 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_10px_rgba(34,211,238,0.2)]';
            case 'Intermediate': return 'text-violet-400 border-violet-500/30 bg-violet-500/10 shadow-[0_0_10px_rgba(139,92,246,0.2)]';
            case 'Advanced': return 'text-pink-400 border-pink-500/30 bg-pink-500/10 shadow-[0_0_10px_rgba(236,72,153,0.2)]';
            default: return 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10 shadow-[0_0_10px_rgba(79,70,229,0.2)]';
        }
    }

    const getResourceIcon = (type: string) => {
        switch (type) {
            case 'Video': return <Youtube className="w-4 h-4" />;
            case 'Article': return <FileText className="w-4 h-4" />;
            case 'Book': return <Book className="w-4 h-4" />;
            case 'Course': return <GraduationCap className="w-4 h-4" />;
            default: return <BookOpen className="w-4 h-4" />;
        }
    }

    const filteredMilestones = roadmap?.milestones.filter(m => m.difficulty === activeTab) || [];

    return (
        <div className="min-h-screen w-full bg-[#030014] text-slate-200 flex flex-col font-sans selection:bg-indigo-500/30 overflow-x-hidden print:bg-white print:text-black">
            <div className="print:hidden">
                <SiteHeader />
            </div>

            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden print:hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]" />
                <div className="absolute top-0 -left-1/4 w-[70vw] h-[70vw] bg-indigo-600/10 rounded-full blur-[150px] animate-pulse mix-blend-screen" />
                <div className="absolute bottom-1/4 -right-1/4 w-[60vw] h-[60vw] bg-violet-600/10 rounded-full blur-[150px] animate-pulse mix-blend-screen" style={{ animationDelay: '2s' }} />
            </div>

            <main className="flex-1 pt-24 pb-8 sm:pb-20 container mx-auto px-4 relative z-10 flex flex-col items-center print:pt-0 print:pb-0">

                <div className="w-full max-w-4xl flex flex-col items-center text-center mb-8 sm:mb-16 print:hidden">
                    <div className="w-full flex justify-start mb-4 sm:mb-8">
                        <Link href="/ai-tools/roadmap" className="inline-flex items-center text-slate-400 hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-lg transition-colors text-sm font-medium">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Navigate Back
                        </Link>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-4">
                        <Map className="w-3.5 h-3.5" />
                        Dynamic Pathway Generator
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-200 to-slate-400"
                    >
                        Pathway Generator
                    </motion.h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
                        Enter your target role to generate a comprehensive career trajectory.
                    </p>
                </div>

                {/* Input Section */}
                <div className="w-full max-w-3xl mb-16 relative z-20 flex flex-col items-center gap-8 print:hidden">
                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="w-full relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                        <div className="relative flex items-center bg-[#0f111a]/80 backdrop-blur-xl p-2 rounded-xl border border-white/10 shadow-2xl">
                            <div className="pl-4 text-indigo-400">
                                <Search className="w-5 h-5" />
                            </div>
                            <Input
                                value={goal}
                                onChange={(e) => setGoal(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && generateRoadmap()}
                                className="flex-1 bg-transparent border-none text-white placeholder:text-slate-500 text-lg h-14 px-4 focus-visible:ring-0"
                                placeholder="E.g. AI Engineer, Full Stack Dev..."
                            />
                            <Button
                                onClick={() => generateRoadmap()}
                                disabled={!goal || loading}
                                className="h-12 px-8 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all overflow-hidden relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <span className="flex items-center gap-2">Generate Path <Zap className="w-4 h-4 text-amber-400" /></span>}
                            </Button>
                        </div>
                    </motion.div>

                    {/* Quick Select */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-2 max-w-2xl"
                    >
                        {Object.keys(PREDEFINED_ROADMAPS).map((role) => (
                            <button
                                key={role}
                                onClick={() => handleQuickSelect(role)}
                                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 hover:bg-indigo-500/20 hover:border-indigo-500/40 hover:text-indigo-200 transition-all backdrop-blur-sm"
                            >
                                {role}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Roadmap Display */}
                <AnimatePresence mode="wait">
                    {roadmap && (
                        <motion.div
                            key="roadmap"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-6xl print:w-full"
                        >
                            {/* Actions Banner */}
                            <div className="flex justify-end gap-3 mb-6 print:hidden w-full max-w-6xl mx-auto">
                                <Button onClick={handlePrint} variant="outline" className="h-10 border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 rounded-lg">
                                    <Printer className="w-4 h-4 sm:mr-2" /> <span className="hidden sm:inline">Export Plan</span>
                                </Button>
                                <Button onClick={navigateToJobMarket} className="h-10 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-lg backdrop-blur-md shadow-lg shadow-black/20">
                                    <TrendingUp className="w-4 h-4 sm:mr-2 text-emerald-400" /> <span className="hidden sm:inline">Market Metrics</span>
                                </Button>
                            </div>

                            {/* Header Card */}
                            <div className="relative mb-12 print:mb-8 print:border-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 blur-3xl rounded-[3rem] opacity-50" />
                                <div className="relative bg-[#0f111a]/80 backdrop-blur-xl border border-white/[0.05] rounded-[2.5rem] p-10 sm:p-14 text-center print:bg-white print:text-black print:border-none print:p-0 shadow-2xl overflow-hidden">
                                     <div className="absolute top-0 right-0 p-8 opacity-5 border-l border-b border-white/10 rounded-bl-full pointer-events-none">
                                        <Network className="w-48 h-48" />
                                    </div>
                                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6 print:text-black tracking-tight">{roadmap.role}</h2>
                                    <p className="text-indigo-200/80 text-xl font-light italic mb-10 max-w-3xl mx-auto print:text-gray-600">"{roadmap.summary}"</p>

                                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-slate-300 print:border-gray-300 print:bg-gray-100 print:text-black shadow-inner">
                                        <div className="p-1.5 rounded-lg bg-indigo-500/20"><Clock className="w-5 h-5 text-indigo-400" /></div>
                                        <span className="tracking-wide text-sm font-medium">Estimated Timeframe: <span className="text-white font-bold ml-1 print:text-black">{roadmap.estimatedTotalDuration}</span></span>
                                    </div>
                                </div>
                            </div>

                            {/* Bento Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 print:grid-cols-2 print:gap-4">
                                {/* Salary */}
                                <div className="md:col-span-2 bg-[#0f111a]/80 backdrop-blur-xl border border-white/[0.05] hover:border-emerald-500/30 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group transition-all duration-500 shadow-xl">
                                    <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none">
                                        <DollarSign className="w-32 h-32 text-emerald-500" />
                                    </div>
                                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/50" />
                                    <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2"><DollarSign className="w-4 h-4" /> Market Salary</div>
                                    <p className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{roadmap.salaryRange || "$80k - $120k"}</p>
                                </div>

                                {/* Companies */}
                                <div className="bg-[#0f111a]/80 backdrop-blur-xl border border-white/[0.05] hover:border-indigo-500/30 rounded-3xl p-6 flex flex-col transition-all duration-500 shadow-xl group">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500/50" />
                                    <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <Briefcase className="w-4 h-4" /> Top Employers
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {roadmap.topCompanies?.map((company, i) => (
                                            <span key={i} className="text-xs font-medium bg-indigo-500/10 text-indigo-200 px-2.5 py-1 rounded-md border border-indigo-500/20">
                                                {company}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Tools */}
                                <div className="bg-[#0f111a]/80 backdrop-blur-xl border border-white/[0.05] hover:border-amber-500/30 rounded-3xl p-6 flex flex-col transition-all duration-500 shadow-xl group">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/50" />
                                    <div className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <Wrench className="w-4 h-4" /> Tech Stack
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {roadmap.tools?.map((tool, i) => (
                                            <span key={i} className="text-xs font-medium bg-amber-500/10 text-amber-200 px-2.5 py-1 rounded-md border border-amber-500/20">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Certifications */}
                                <div className="md:col-span-2 bg-[#0f111a]/80 backdrop-blur-xl border border-white/[0.05] hover:border-violet-500/30 rounded-3xl p-6 flex flex-col transition-all duration-500 shadow-xl group">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-violet-500/50" />
                                    <div className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <Award className="w-4 h-4" /> Verified Credentials
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {roadmap.certifications?.map((cert, i) => (
                                            <span key={i} className="text-[11px] font-semibold bg-violet-500/10 text-violet-300 px-3 py-1.5 rounded-lg border border-violet-500/20">
                                                {cert}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Routine */}
                                <div className="md:col-span-2 bg-[#0f111a]/80 backdrop-blur-xl border border-white/[0.05] hover:border-cyan-500/30 rounded-3xl p-6 flex flex-col transition-all duration-500 shadow-xl group">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500/50" />
                                    <div className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Calendar className="w-4 h-4" /> Daily Protocol
                                    </div>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        {roadmap.dailyRoutine || "Maintain a consistent schedule focused on theoretical concepts and immense practical application."}
                                    </p>
                                </div>
                            </div>

                            {/* Level Tabs */}
                            <div className="flex justify-center mb-16 sticky top-20 sm:top-24 z-30 print:hidden">
                                <div className="bg-[#0f111a]/95 backdrop-blur-2xl p-1.5 rounded-2xl border border-white/10 flex shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                                    {(['Beginner', 'Intermediate', 'Advanced'] as const).map((level) => (
                                        <button
                                            key={level}
                                            onClick={() => setActiveTab(level)}
                                            className={`px-6 sm:px-10 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${activeTab === level
                                                ? 'bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]'
                                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            {level}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Constellation Timeline */}
                            <div className="relative min-h-[400px]">
                                {/* Central Line */}
                                <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent md:-translate-x-1/2 print:bg-gray-300" />

                                <div className="space-y-8 sm:space-y-16 pb-16 sm:pb-32">
                                    {filteredMilestones.length > 0 ? (
                                        filteredMilestones.map((step, i) => (
                                            <motion.div
                                                key={step.title}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                                className={`relative flex flex-col md:flex-row gap-6 sm:gap-14 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} print:flex-row print:gap-4 group/node`}
                                            >
                                                {/* Star Node */}
                                                <div className={`absolute left-6 sm:left-8 md:left-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-[#030014] border-[3px] ${completedSteps.has(step.title) ? 'border-green-400' : 'border-indigo-500'} rounded-full z-10 -translate-x-1/2 flex items-center justify-center print:relative print:left-0 print:translate-x-0 print:border-gray-300 print:bg-white shadow-[0_0_15px_rgba(79,70,229,0.6)] group-hover/node:scale-125 transition-transform duration-300`}>
                                                    {completedSteps.has(step.title) ? (
                                                        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-40" />
                                                    ) : (
                                                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-50" />
                                                    )}
                                                </div>

                                                {/* Content Card */}
                                                <div className="w-full md:w-1/2 pl-12 sm:pl-20 md:pl-0 md:px-16 print:w-full print:pl-4 relative">
                                                    {/* Connecting Line from Node to Card (Desktop only) */}
                                                    <div className={`hidden md:block absolute top-6 w-16 h-px bg-indigo-500/30 ${i % 2 === 0 ? '-left-16' : '-right-16'}`} />

                                                    <div
                                                        className={`group relative bg-[#0f111a]/80 backdrop-blur-xl border border-white/[0.05] rounded-3xl overflow-hidden transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_10px_40px_rgba(79,70,229,0.15)] ${expandedStep === i ? 'ring-1 ring-indigo-500 border-indigo-500/50' : ''} print:bg-white print:border-gray-200 print:shadow-none print:text-black`}
                                                    >
                                                        {/* Card Header */}
                                                        <div className="p-6 sm:p-10 relative">
                                                            {/* Background Glow inside card */}
                                                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
                                                            
                                                            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
                                                                <span className={`text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border ${getDifficultyColor(step.difficulty)} print:border-black print:text-black print:bg-transparent`}>
                                                                    {step.difficulty}
                                                                </span>
                                                                <div className="flex items-center gap-5">
                                                                    <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 print:text-gray-600">
                                                                        <Clock className="w-3.5 h-3.5" /> {step.duration}
                                                                    </span>
                                                                    <button
                                                                        onClick={() => toggleStepCompletion(step.title)}
                                                                        className="text-slate-500 hover:text-green-400 transition-colors print:hidden"
                                                                        title="Mark milestone as complete"
                                                                    >
                                                                        {completedSteps.has(step.title) ? <CheckCircle2 className="w-7 h-7 text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" /> : <Circle className="w-7 h-7" />}
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 print:text-black tracking-tight">
                                                                {step.title}
                                                            </h3>
                                                            <p className="text-slate-400 text-[15px] leading-relaxed mb-6 print:text-gray-700 font-light">
                                                                {step.description}
                                                            </p>

                                                            <button
                                                                onClick={() => setExpandedStep(expandedStep === i ? null : i)}
                                                                className="w-full flex items-center justify-between text-xs text-indigo-400 font-bold uppercase tracking-widest hover:text-indigo-300 transition-colors bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] p-4 rounded-2xl print:hidden"
                                                            >
                                                                <span>{expandedStep === i ? 'Collapse Core Module' : 'Expand Core Module'}</span>
                                                                <div className={`p-1 rounded-md bg-indigo-500/10 transition-transform duration-300 ${expandedStep === i ? 'rotate-180' : ''}`}>
                                                                    <ChevronDown className="w-4 h-4" />
                                                                </div>
                                                            </button>
                                                        </div>

                                                        {/* Expanded Details */}
                                                        <AnimatePresence>
                                                            {(expandedStep === i || typeof window !== 'undefined' && window.matchMedia('print').matches) && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: "auto", opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    className="border-t border-white/[0.05] bg-black/40 print:block print:opacity-100 print:h-auto print:border-gray-200"
                                                                >
                                                                    <div className="p-6 sm:p-10 space-y-10">

                                                                        {/* Intelligence Brief */}
                                                                        <div className="grid sm:grid-cols-2 gap-4 print:grid-cols-2 print:gap-4">
                                                                            <div className="bg-indigo-900/10 rounded-2xl p-5 border border-indigo-500/20 print:border-gray-300 print:bg-gray-50 flex flex-col gap-2">
                                                                                <h4 className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2 print:text-black">
                                                                                    <Brain className="w-3.5 h-3.5" /> Conceptual Value
                                                                                </h4>
                                                                                <p className="text-sm text-slate-300 leading-relaxed print:text-gray-700">
                                                                                    {step.whyMatters || "This is a foundational logic block required for advanced systems architecture."}
                                                                                </p>
                                                                            </div>
                                                                            <div className="bg-emerald-900/10 rounded-2xl p-5 border border-emerald-500/20 print:border-gray-300 print:bg-gray-50 flex flex-col gap-2">
                                                                                <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2 print:text-black">
                                                                                    <Briefcase className="w-3.5 h-3.5" /> Practical Edge
                                                                                </h4>
                                                                                <p className="text-sm text-slate-300 leading-relaxed print:text-gray-700">
                                                                                    {step.realWorldApplication || "Highly utilized in production deployments by senior engineers."}
                                                                                </p>
                                                                            </div>
                                                                            <div className="bg-rose-900/10 rounded-2xl p-5 border border-rose-500/20 print:border-gray-300 print:bg-gray-50 flex flex-col gap-2">
                                                                                <h4 className="text-[10px] font-bold text-rose-400 uppercase tracking-widest flex items-center gap-2 print:text-black">
                                                                                    <AlertTriangle className="w-3.5 h-3.5" /> Warning Zones
                                                                                </h4>
                                                                                <p className="text-sm text-slate-300 leading-relaxed print:text-gray-700">
                                                                                    {step.commonPitfalls || "Do not proceed without solidifying primary foundational prerequisites."}
                                                                                </p>
                                                                            </div>
                                                                            <div className="bg-amber-900/10 rounded-2xl p-5 border border-amber-500/20 print:border-gray-300 print:bg-gray-50 flex flex-col gap-2">
                                                                                <h4 className="text-[10px] font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2 print:text-black">
                                                                                    <Clock className="w-3.5 h-3.5" /> Resource Allocation
                                                                                </h4>
                                                                                <p className="text-sm text-slate-300 leading-relaxed print:text-gray-700">
                                                                                    {step.weeklyCommitment || "Approx. 10-15 hours/week for thorough comprehension."}
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        {/* Checklist */}
                                                                        {step.checklist && step.checklist.length > 0 && (
                                                                            <div className="bg-white/[0.02] rounded-3xl p-6 sm:p-8 border border-white/[0.05]">
                                                                                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-6 flex items-center gap-2">
                                                                                    <CheckSquare className="w-4 h-4 text-indigo-400" /> Action Items
                                                                                </h4>
                                                                                <div className="space-y-4">
                                                                                    {step.checklist.map((item, idx) => (
                                                                                        <div
                                                                                            key={idx}
                                                                                            onClick={() => toggleChecklistItem(item)}
                                                                                            className="flex items-start gap-4 cursor-pointer group/item bg-white/5 p-4 rounded-xl border border-white/[0.02] hover:bg-white/10 transition-colors"
                                                                                        >
                                                                                            <div className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors shrink-0 ${checkedItems.has(item) ? 'bg-indigo-500 border-indigo-500' : 'border-slate-600 group-hover/item:border-slate-400'}`}>
                                                                                                {checkedItems.has(item) && <CheckCircle2 className="w-4 h-4 text-white" />}
                                                                                            </div>
                                                                                            <span className={`text-[15px] leading-relaxed transition-colors ${checkedItems.has(item) ? 'text-slate-500 line-through' : 'text-slate-200 group-hover/item:text-white'}`}>
                                                                                                {item}
                                                                                            </span>
                                                                                        </div>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        )}

                                                                        <div className="grid sm:grid-cols-2 gap-8">
                                                                            {/* Skills */}
                                                                            <div>
                                                                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2 print:text-black">
                                                                                    <Zap className="w-3.5 h-3.5" /> Skill Dependencies
                                                                                </h4>
                                                                                <div className="flex flex-wrap gap-2">
                                                                                    {step.skills.map((skill, idx) => (
                                                                                        <span key={idx} className="text-[11px] font-semibold bg-white/5 text-slate-300 px-3 py-1.5 rounded-md border border-white/5 print:bg-gray-100 print:text-black print:border-gray-300">
                                                                                            {skill}
                                                                                        </span>
                                                                                    ))}
                                                                                </div>
                                                                            </div>

                                                                            {/* Resources */}
                                                                            <div>
                                                                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2 print:text-black">
                                                                                    <Database className="w-3.5 h-3.5" /> Learning Nodes
                                                                                </h4>
                                                                                <div className="grid gap-3">
                                                                                    {step.resources.map((res, idx) => (
                                                                                        <a
                                                                                            key={idx}
                                                                                            href={res.url || "#"}
                                                                                            target="_blank"
                                                                                            rel="noopener noreferrer"
                                                                                            className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] transition-colors group/res border border-white/[0.02] print:bg-transparent print:border print:border-gray-200 hover:border-indigo-500/30"
                                                                                        >
                                                                                            <div className="text-indigo-400 group-hover/res:scale-110 transition-transform print:text-black">
                                                                                                {getResourceIcon(res.type)}
                                                                                            </div>
                                                                                            <div className="flex-1">
                                                                                                <div className="flex items-center justify-between">
                                                                                                    <p className="text-[13px] font-semibold text-slate-300 group-hover/res:text-white print:text-black">{res.title}</p>
                                                                                                    {res.url && <ArrowRight className="w-3 h-3 text-slate-500 group-hover/res:text-indigo-400 -rotate-45 transition-colors" />}
                                                                                                </div>
                                                                                                <p className="text-[10px] font-mono text-slate-500 print:text-gray-600 uppercase tracking-wider mt-0.5">{res.type}</p>
                                                                                            </div>
                                                                                        </a>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        {/* Project Idea */}
                                                                        <div className="bg-gradient-to-r from-violet-900/20 to-indigo-900/20 border border-indigo-500/20 rounded-2xl p-6 sm:p-8 print:bg-gray-50 print:border-gray-200 shadow-inner overflow-hidden relative">
                                                                            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none -mb-8 -mr-8">
                                                                                <Target className="w-40 h-40" />
                                                                            </div>
                                                                            <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4 flex items-center gap-2 relative z-10 print:text-black">
                                                                                <Target className="w-4 h-4" /> Capstone Objective
                                                                            </h4>
                                                                            <p className="text-[15px] text-slate-300 italic leading-relaxed relative z-10 print:text-gray-700">
                                                                                "{step.projectIdea}"
                                                                            </p>
                                                                        </div>

                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                </div>

                                                {/* Spacer */}
                                                <div className="hidden md:block w-1/2 print:hidden" />
                                            </motion.div>
                                        ))
                                    ) : (
                                        <div className="text-center text-slate-500 py-20 flex flex-col items-center">
                                            <Search className="w-12 h-12 mb-4 opacity-50" />
                                            <p className="text-xl font-medium">Analyzing requirements...</p>
                                            <p className="text-sm mt-2">No milestones found for this difficulty level.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    )
}
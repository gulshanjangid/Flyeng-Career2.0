"use client"

import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Zap, Loader2, Sparkles, Code, Target, Clock, Layers, Database, Network, FileText, Copy, Check, Terminal, Cpu, Scan, Settings, Rocket, Braces, LayoutTemplate, Box, Lightbulb } from 'lucide-react'
import Link from "next/link"
import { useState, useEffect } from "react"
import { toast } from "sonner"
import { motion, AnimatePresence } from "framer-motion"

// Typing effect component
const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
    const [displayedText, setDisplayedText] = useState("")

    useEffect(() => {
        let i = 0
        setDisplayedText("")
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                setDisplayedText(text.substring(0, i + 1))
                i++
                if (i >= text.length) clearInterval(interval)
            }, 10) // Typing speed
            return () => clearInterval(interval)
        }, delay)
        return () => clearTimeout(timer)
    }, [text, delay])

    return <span>{displayedText}</span>
}

export default function ProjectIdeasApp() {
    const [loading, setLoading] = useState(false)
    const [loadingStep, setLoadingStep] = useState(0)
    const [blueprint, setBlueprint] = useState<any>(null)
    const [copied, setCopied] = useState(false)
    const [formData, setFormData] = useState({
        topic: "",
        difficulty: "Intermediate",
        techStack: ""
    })

    const loadingSteps = [
        "Initializing synaptic pathways...",
        "Analyzing project parameters...",
        "Synthesizing architecture...",
        "Drafting database schemas...",
        "Mapping API routes...",
        "Finalizing project blueprint..."
    ]

    useEffect(() => {
        let interval: NodeJS.Timeout
        if (loading) {
            setLoadingStep(0)
            interval = setInterval(() => {
                setLoadingStep(prev => (prev < loadingSteps.length - 1 ? prev + 1 : prev))
            }, 600)
        }
        return () => clearInterval(interval)
    }
    , [loading])

    const generateBlueprint = async () => {
        if (!formData.topic.trim()) {
            toast.error("Please provide a project directive.");
            return;
        }

        setLoading(true);
        setBlueprint(null);
        try {
            const response = await fetch('/api/project-ideas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to generate blueprint');

            const data = await response.json();
            // Artificial delay for effect
            setTimeout(() => {
                setBlueprint(data);
                setLoading(false);
            }, 1500);

        } catch (error) {
            toast.error("Failed to generate blueprint. Please try again.");
            setLoading(false);
        }
    }

    const copyToClipboard = () => {
        if (!blueprint) return;
        const text = JSON.stringify(blueprint, null, 2);
        navigator.clipboard.writeText(text);
        setCopied(true);
        toast.success("Blueprint JSON copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <div className="min-h-screen bg-[#030014] text-slate-200 flex flex-col font-sans selection:bg-indigo-500/30 overflow-x-hidden relative w-full">
            <SiteHeader />

            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]" />
                <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-1/4 w-[50vw] h-[50vw] bg-violet-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <main className="flex-1 pt-24 pb-12 container mx-auto px-4 relative z-10 flex flex-col min-h-[calc(100vh-5rem)]">
                {/* Header Section */}
                <div className="mb-8 flex flex-col items-center text-center relative">
                    <div className="absolute top-0 left-0 sm:left-4">
                        <Link href="/ai-tools/project-ideas">
                            <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors gap-2">
                                <ArrowLeft className="w-4 h-4" />
                                <span className="hidden sm:inline">Back</span>
                            </Button>
                        </Link>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl mx-auto mt-12 sm:mt-0"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6">
                            <Sparkles className="w-3.5 h-3.5" />
                            Next-Gen Project Architect
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500">
                            Build The Impossible
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl font-light">
                            Describe your vision and let AI instantly generate a complete, production-ready project blueprint.
                        </p>
                    </motion.div>
                </div>

                <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* Left Column: Configuration Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-4 xl:col-span-3 flex flex-col gap-6"
                    >
                        <div className="bg-[#0f111a]/80 backdrop-blur-xl border border-white/[0.05] rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
                            
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                                    <Settings className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl font-semibold text-white">Parameters</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2.5">
                                    <Label htmlFor="topic" className="text-slate-300 text-sm font-medium">Core Concept</Label>
                                    <div className="relative group/input">
                                        <div className="absolute inset-0 bg-indigo-500/20 rounded-xl blur opacity-0 group-focus-within/input:opacity-100 transition-opacity" />
                                        <Input
                                            id="topic"
                                            placeholder="e.g. AI Content Generator..."
                                            className="relative bg-slate-900/50 border-white/10 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-indigo-500 focus:ring-0 transition-all text-sm"
                                            value={formData.topic}
                                            onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2.5">
                                    <Label htmlFor="difficulty" className="text-slate-300 text-sm font-medium">Complexity Target</Label>
                                    <Select value={formData.difficulty} onValueChange={(val) => setFormData({ ...formData, difficulty: val })}>
                                        <SelectTrigger className="bg-slate-900/50 border-white/10 text-white h-12 rounded-xl focus:border-indigo-500 focus:ring-0 transition-all">
                                            <SelectValue placeholder="Select level" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#0f111a] border-white/10 text-white rounded-xl">
                                            <SelectItem value="Beginner" className="focus:bg-indigo-500/20 focus:text-indigo-200 cursor-pointer">MVP Prototype</SelectItem>
                                            <SelectItem value="Intermediate" className="focus:bg-indigo-500/20 focus:text-indigo-200 cursor-pointer">Production Beta</SelectItem>
                                            <SelectItem value="Advanced" className="focus:bg-indigo-500/20 focus:text-indigo-200 cursor-pointer">Enterprise Scale</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2.5">
                                    <Label htmlFor="techStack" className="text-slate-300 text-sm font-medium">Preferred Tech Stack</Label>
                                    <div className="relative group/input">
                                        <div className="absolute inset-0 bg-indigo-500/20 rounded-xl blur opacity-0 group-focus-within/input:opacity-100 transition-opacity" />
                                        <Input
                                            id="techStack"
                                            placeholder="e.g. Next.js, FastAPI, Prisma..."
                                            className="relative bg-slate-900/50 border-white/10 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-indigo-500 focus:ring-0 transition-all text-sm"
                                            value={formData.techStack}
                                            onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                                        />
                                    </div>
                                    <p className="text-[11px] text-slate-500 mt-1">Leave empty for AI-recommended stack</p>
                                </div>

                                <Button
                                    onClick={generateBlueprint}
                                    disabled={loading || !formData.topic}
                                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white h-14 rounded-xl font-bold shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all overflow-hidden group relative mt-2"
                                >
                                    {loading ? (
                                        <span className="flex items-center gap-2">
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Architecting...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Generate Blueprint
                                            <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Blueprint Display */}
                    <div className="lg:col-span-8 xl:col-span-9">
                        <AnimatePresence mode="wait">
                            {loading ? (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    className="h-[500px] lg:h-[600px] flex flex-col items-center justify-center text-center p-8 border border-white/[0.05] rounded-3xl bg-[#0f111a]/50 backdrop-blur-xl relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent" />
                                    
                                    <div className="relative w-32 h-32 mb-10">
                                        <div className="absolute inset-0 border-[3px] border-indigo-500/20 rounded-full animate-[spin_3s_linear_infinite]" />
                                        <div className="absolute inset-2 border-[3px] border-t-indigo-400 border-transparent rounded-full animate-[spin_2s_linear_infinite_reverse]" />
                                        <div className="absolute inset-4 border-[3px] border-b-violet-400 border-transparent rounded-full animate-[spin_1.5s_linear_infinite]" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Cpu className="w-8 h-8 text-indigo-300 animate-pulse" />
                                        </div>
                                    </div>

                                    <div className="h-8 mb-4">
                                        <AnimatePresence mode="wait">
                                            <motion.p
                                                key={loadingStep}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="text-indigo-300 font-mono text-sm tracking-wide"
                                            >
                                                {loadingSteps[loadingStep]}
                                            </motion.p>
                                        </AnimatePresence>
                                    </div>
                                    
                                    <div className="flex gap-1.5 mt-2">
                                        {[...Array(6)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className={`w-1.5 h-1.5 rounded-full ${i <= loadingStep ? 'bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)]' : 'bg-slate-700'}`}
                                                animate={i === loadingStep ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : {}}
                                                transition={{ repeat: Infinity, duration: 1 }}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            ) : blueprint ? (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-[#0f111a]/80 backdrop-blur-xl border border-white/[0.05] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                                >
                                    {/* Blueprint Header */}
                                    <div className="p-6 lg:p-10 border-b border-white/[0.05] relative overflow-hidden bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5">
                                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-500/20 blur-[80px] rounded-full" />
                                        
                                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-6">
                                            <div className="max-w-2xl">
                                                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium flex items-center gap-1.5 backdrop-blur-sm">
                                                        <Target className="w-3.5 h-3.5 text-indigo-400" />
                                                        {blueprint.overview.difficulty}
                                                    </span>
                                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium flex items-center gap-1.5 backdrop-blur-sm">
                                                        <Clock className="w-3.5 h-3.5 text-indigo-400" />
                                                        Est. {blueprint.overview.estimatedTime}
                                                    </span>
                                                </div>
                                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
                                                    <TypewriterText text={blueprint.overview.title} />
                                                </h2>
                                                <p className="text-indigo-200/80 text-lg">
                                                    {blueprint.overview.tagline}
                                                </p>
                                            </div>
                                            
                                            <Button
                                                onClick={copyToClipboard}
                                                variant="outline"
                                                className="shrink-0 bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-xl h-11 px-4 hidden md:flex transition-colors"
                                            >
                                                {copied ? (
                                                    <><Check className="w-4 h-4 mr-2 text-green-400" /> Copied JSON</>
                                                ) : (
                                                    <><Copy className="w-4 h-4 mr-2 opacity-70" /> Export JSON</>
                                                )}
                                            </Button>
                                        </div>
                                        
                                        <Button
                                            onClick={copyToClipboard}
                                            variant="outline"
                                            className="mt-6 w-full bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-xl h-11 px-4 md:hidden transition-colors"
                                        >
                                            {copied ? (
                                                <><Check className="w-4 h-4 mr-2 text-green-400" /> Copied JSON</>
                                            ) : (
                                                <><Copy className="w-4 h-4 mr-2 opacity-70" /> Export JSON</>
                                            )}
                                        </Button>
                                    </div>

                                    {/* Content Tabs */}
                                    <Tabs defaultValue="overview" className="flex-1 flex flex-col">
                                        <div className="px-6 lg:px-10 border-b border-white/[0.05] bg-black/20 overflow-x-auto no-scrollbar">
                                            <TabsList className="h-16 bg-transparent p-0 gap-8 min-w-max">
                                                <TabsTrigger value="overview" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-indigo-400 rounded-none h-full px-0 text-slate-400 data-[state=active]:text-white transition-all font-medium text-sm flex items-center gap-2">
                                                    <LayoutTemplate className="w-4 h-4" /> Overview
                                                </TabsTrigger>
                                                <TabsTrigger value="architecture" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-indigo-400 rounded-none h-full px-0 text-slate-400 data-[state=active]:text-white transition-all font-medium text-sm flex items-center gap-2">
                                                    <Braces className="w-4 h-4" /> Architecture
                                                </TabsTrigger>
                                                <TabsTrigger value="userflow" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-indigo-400 rounded-none h-full px-0 text-slate-400 data-[state=active]:text-white transition-all font-medium text-sm flex items-center gap-2">
                                                    <FileText className="w-4 h-4" /> User Flow
                                                </TabsTrigger>
                                            </TabsList>
                                        </div>

                                        <div className="p-6 lg:p-10 flex-1 bg-black/10">
                                            <TabsContent value="overview" className="m-0 space-y-10 focus:outline-none animate-in fade-in slide-in-from-bottom-2 duration-500">
                                                {/* Mission Brief */}
                                                <div>
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <div className="p-1.5 rounded-md bg-indigo-500/20 text-indigo-400"><LayoutTemplate className="w-4 h-4" /></div>
                                                        <h3 className="text-lg font-semibold text-white">Project Brief</h3>
                                                    </div>
                                                    <div className="leading-relaxed text-slate-300 text-lg">
                                                        <TypewriterText text={blueprint.overview.description} delay={300} />
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-8">
                                                    {/* Features */}
                                                    <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6">
                                                        <div className="flex items-center gap-2 mb-6">
                                                            <div className="p-1.5 rounded-md bg-violet-500/20 text-violet-400"><Sparkles className="w-4 h-4" /></div>
                                                            <h3 className="text-lg font-semibold text-white">Core Modules</h3>
                                                        </div>
                                                        <ul className="space-y-4">
                                                            {blueprint.features.map((feature: string, i: number) => (
                                                                <li key={i} className="flex items-start gap-3 text-slate-300 text-[15px]">
                                                                    <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                                                                        <Check className="w-3 h-3 text-violet-400" />
                                                                    </div>
                                                                    <span className="leading-relaxed">{feature}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Tech Stack */}
                                                    <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6">
                                                        <div className="flex items-center gap-2 mb-6">
                                                            <div className="p-1.5 rounded-md bg-blue-500/20 text-blue-400"><Layers className="w-4 h-4" /></div>
                                                            <h3 className="text-lg font-semibold text-white">Tech Stack</h3>
                                                        </div>
                                                        <div className="space-y-4">
                                                            {Object.entries(blueprint.techStack).map(([key, value]) => (
                                                                <div key={key} className="flex flex-col gap-1.5">
                                                                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{key}</span>
                                                                    <span className="text-slate-200 bg-slate-800/50 px-3 py-2.5 rounded-xl border border-white/5 text-sm font-medium">
                                                                        {value as string}
                                                                    </span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabsContent>

                                            <TabsContent value="architecture" className="m-0 space-y-10 focus:outline-none animate-in fade-in slide-in-from-bottom-2 duration-500">
                                                {/* Schemas */}
                                                <div>
                                                    <div className="flex items-center gap-2 mb-6">
                                                        <div className="p-1.5 rounded-md bg-teal-500/20 text-teal-400"><Database className="w-4 h-4" /></div>
                                                        <h3 className="text-lg font-semibold text-white">Data Models</h3>
                                                    </div>
                                                    <div className="grid md:grid-cols-2 gap-4">
                                                        {blueprint.schema.map((table: any, i: number) => (
                                                            <div key={i} className="bg-slate-900/50 border border-white/10 rounded-xl p-5 hover:border-teal-500/30 transition-colors group">
                                                                <div className="flex justify-between items-center mb-3">
                                                                    <h4 className="font-mono text-teal-300 font-bold text-sm tracking-wide">{table.table}</h4>
                                                                    <Box className="w-4 h-4 text-slate-600 group-hover:text-teal-500/50 transition-colors" />
                                                                </div>
                                                                <p className="text-xs text-slate-400 mb-4 h-8 overflow-hidden">{table.description}</p>
                                                                <div className="flex flex-wrap gap-1.5">
                                                                    {table.columns.map((col: string, j: number) => (
                                                                        <span key={j} className="px-2 py-0.5 bg-white/5 text-slate-300 text-[10px] font-mono rounded-md border border-white/5">
                                                                            {col}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Endpoints */}
                                                <div>
                                                    <div className="flex items-center gap-2 mb-6">
                                                        <div className="p-1.5 rounded-md bg-rose-500/20 text-rose-400"><Network className="w-4 h-4" /></div>
                                                        <h3 className="text-lg font-semibold text-white">API Routes</h3>
                                                    </div>
                                                    <div className="bg-slate-900/50 border border-white/10 rounded-xl overflow-hidden">
                                                        {blueprint.endpoints.map((ep: any, i: number) => (
                                                            <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                                                                <span className={`px-2 py-1 rounded text-[10px] font-bold font-mono w-14 text-center ${
                                                                    ep.method === 'GET' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                                                    ep.method === 'POST' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                                                                    ep.method === 'PUT' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                                                                    'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                                                                }`}>
                                                                    {ep.method}
                                                                </span>
                                                                <span className="text-slate-200 font-mono text-sm sm:w-[200px] truncate" title={ep.path}>{ep.path}</span>
                                                                <span className="text-slate-500 text-sm hidden sm:block flex-1 border-l border-white/10 pl-4" title={ep.description}>
                                                                    {ep.description}
                                                                </span>
                                                                <p className="text-slate-500 text-xs sm:hidden mt-1">{ep.description}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </TabsContent>

                                            <TabsContent value="userflow" className="m-0 focus:outline-none animate-in fade-in slide-in-from-bottom-2 duration-500">
                                                <div className="flex items-center gap-2 mb-8">
                                                    <div className="p-1.5 rounded-md bg-amber-500/20 text-amber-400"><FileText className="w-4 h-4" /></div>
                                                    <h3 className="text-lg font-semibold text-white">User Journey</h3>
                                                </div>
                                                <div className="relative isolate pl-2">
                                                    <div className="absolute left-[29px] top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-amber-500/30 to-transparent -z-10" />
                                                    <div className="space-y-8">
                                                        {blueprint.userStories.map((story: string, i: number) => (
                                                            <div key={i} className="relative flex gap-5 group">
                                                                <div className="w-5 h-5 rounded-full bg-[#0f111a] border-2 border-amber-500/40 flex items-center justify-center mt-1 group-hover:border-amber-400 transition-all shrink-0">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                                </div>
                                                                <div className="flex-1 bg-white/[0.02] border border-white/[0.05] p-5 rounded-2xl group-hover:bg-white/[0.04] transition-colors">
                                                                    <p className="text-slate-300 leading-relaxed text-[15px]">
                                                                        {story}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </TabsContent>
                                        </div>
                                    </Tabs>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="h-[400px] lg:h-full min-h-[500px] flex flex-col items-center justify-center text-center p-8 bg-white/[0.01] border border-white/[0.05] border-dashed rounded-3xl"
                                >
                                    <div className="w-24 h-24 mb-6 rounded-full bg-slate-800/50 border border-white/5 flex items-center justify-center relative group">
                                        <div className="absolute inset-0 rounded-full border border-indigo-500/30 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                                        <Lightbulb className="w-10 h-10 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-slate-300 mb-3">Awaiting Instructions</h3>
                                    <p className="text-slate-500 max-w-sm text-center tracking-wide">
                                        Configure your project parameters on the left to generate a comprehensive technical blueprint.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </main>
        </div>
    )
}

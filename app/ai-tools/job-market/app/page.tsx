"use client"

import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, TrendingUp, Map, Target, Activity, Zap, Filter, Search, AlertCircle, Cpu, Globe, Briefcase, Sparkles, Layers, DollarSign, PieChart as PieIcon, Radar, Scan, Crosshair, Terminal, Code, Database, Lock, ChevronRight, Star, IndianRupee, Clock, Users, GraduationCap, Building2, FileText, CheckCircle2 } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "sonner"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar as RechartsRadar, PieChart, Pie, Legend, ComposedChart, Line } from 'recharts'
import { getCurrentUser } from "@/lib/user-service"
import { useEffect } from "react"

// Types
interface MarketData {
    salaryTrend: number[]
    demandScore: number
    marketSignal: string
    topSkills: string[]
    heatmap: { region: string; intensity: number; color: string }[]
    insights: { avgSalary: string; yoyGrowth: string; openRoles: string }
    skillMatch: { subject: string; A: number; fullMark: number }[]
    roleDistribution: { name: string; value: number }[]
    marketNarrative: string
    // New Fields
    tierData: { name: string; salary: number; demand: number }[]
    workMode: { name: string; value: number }[]
    educationProfile: { name: string; value: number }[]
    interviewInsights: { difficulty: string; avgRounds: number; commonTopics: string[]; timeToOffer: string }
    talentDNA: { avgTenure: string; genderRatio: string; topColleges: string[] }
    isSimulated?: boolean
}

// Dossier Card Component (Midnight Theme)
const DossierCard = ({ children, className = "", title, icon: Icon }: { children: React.ReactNode, className?: string, title?: string, icon?: any }) => (
    <div className={`bg-[#0f172a] border border-indigo-500/10 rounded-sm p-5 shadow-sm hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden ${className}`}>
        {title && (
            <div className="flex items-center gap-2 mb-4 border-b border-indigo-500/10 pb-2">
                {Icon && <Icon className="w-4 h-4 text-indigo-400" />}
                <h3 className="text-xs font-semibold text-indigo-200 uppercase tracking-widest">{title}</h3>
            </div>
        )}
        {children}
        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-indigo-500/20" />
    </div>
)

export default function JobMarketApp() {
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const currentUser = getCurrentUser()
        setUser(currentUser)
    }, [])
    const [role, setRole] = useState("")
    const [location, setLocation] = useState("")
    const [data, setData] = useState<MarketData | null>(null)

    const handleAnalyze = async () => {
        if (!role) {
            toast.error("Please enter a job role")
            return
        }

        setLoading(true)
        setData(null)

        try {
            const response = await fetch('/api/job-market/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ role, location })
            })

            if (!response.ok) throw new Error("Analysis failed")

            const result = await response.json()
            setData(result)
            toast.success("Intelligence report generated")

        } catch (error) {
            toast.error("Could not generate report")
        } finally {
            setLoading(false)
        }
    }

    // Prepare chart data
    const chartData = data?.salaryTrend.map((val, i) => ({
        month: `M${i + 1}`,
        salary: val
    }))

    // Midnight Palette
    const COLORS = ['#6366f1', '#06b6d4', '#3b82f6', '#1e293b']; // Indigo, Cyan, Blue, Slate

    return (
        <div className="min-h-screen bg-[#020617] text-slate-300 flex flex-col font-mono selection:bg-indigo-500/30 overflow-x-hidden relative">
            <SiteHeader />

            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e1b4b_0%,#020617_60%)] opacity-30" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]" />
            </div>

            <main className="flex-1 pt-24 pb-12 container mx-auto px-4 relative z-10 flex flex-col min-h-[calc(100vh-5rem)]">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 border-b border-indigo-500/10 pb-6">
                    <div className="flex items-center gap-4">
                        <Link href="/ai-tools/job-market">
                            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-sm">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-2xl font-bold text-white tracking-tight">
                                    MIDNIGHT <span className="text-indigo-500">INTELLIGENCE</span>
                                </h1>
                                <span className="px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 text-[10px] text-indigo-400 rounded-full">v4.0.1</span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">Classified Market Analysis Protocol</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
                    {/* Sidebar Controls */}
                    <div className="lg:col-span-3 space-y-4">
                        <DossierCard title="Query Parameters" icon={Filter}>
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <Label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Target Role</Label>
                                    <Input
                                        placeholder="e.g. Full Stack Developer"
                                        className="bg-[#1e293b]/50 border-indigo-500/20 h-10 text-xs text-white focus:border-indigo-500 focus:ring-0 rounded-sm placeholder:text-slate-600 font-mono"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <Label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Region</Label>
                                    <Input
                                        placeholder="India (Default)"
                                        className="bg-[#1e293b]/50 border-indigo-500/20 h-10 text-xs text-white focus:border-indigo-500 focus:ring-0 rounded-sm placeholder:text-slate-600 font-mono"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>

                                <Button
                                    onClick={handleAnalyze}
                                    disabled={loading}
                                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold mt-2 h-10 rounded-sm shadow-lg shadow-indigo-500/20 transition-all text-xs tracking-wider uppercase"
                                >
                                    {loading ? "Processing..." : "Initiate Scan"}
                                </Button>
                            </div>
                        </DossierCard>

                        {data && (
                            <DossierCard title="Analyst Notes" icon={FileText} className="bg-indigo-950/10 border-indigo-500/20">
                                <div className="text-xs text-indigo-200 leading-relaxed font-light">
                                    {data.marketNarrative}
                                </div>
                            </DossierCard>
                        )}

                        {data && user && (
                            <Button
                                onClick={async () => {
                                    if (!role) return;
                                    setLoading(true);
                                    try {
                                        const { addApplication } = await import("@/lib/application-service");
                                        // User is already checked via state, but we use the state value
                                        if (user) {
                                            await addApplication({
                                                user_id: user.id || (user as any).uid || '',
                                                title: role,
                                                company: "Market Target", // Placeholder for generic market analysis
                                                location: location || "Remote",
                                                status: 'Saved',
                                                type: 'Full-time',
                                                salary: data.insights.avgSalary,
                                                notes: `Market Score: ${data.demandScore}/100. Signal: ${data.marketSignal}`
                                            });
                                            toast.success("Saved to Dashboard Target List");
                                        }
                                    } catch (e) {
                                        toast.error("Failed to save target");
                                    } finally {
                                        setLoading(false);
                                    }
                                }}
                                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold h-10 rounded-sm shadow-lg shadow-emerald-500/20 transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                            >
                                <Target className="w-4 h-4" /> Save as Target
                            </Button>
                        )}
                    </div>

                    {/* Main Dashboard */}
                    <div className="lg:col-span-9 space-y-4 relative min-h-[500px]">

                        <AnimatePresence mode="wait">
                            {loading ? (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center justify-center h-96 text-slate-500"
                                >
                                    <div className="w-12 h-12 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4" />
                                    <div className="text-xs font-mono uppercase tracking-widest animate-pulse">Decrypting Market Streams...</div>
                                </motion.div>
                            ) : data ? (
                                <motion.div
                                    key="results"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="space-y-4"
                                >
                                    {/* KPI Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <DossierCard>
                                            <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Avg. CTC</div>
                                            <div className="text-2xl font-bold text-white">{data.insights.avgSalary}</div>
                                            <div className="text-[10px] text-emerald-400 mt-1">{data.insights.yoyGrowth} YoY</div>
                                        </DossierCard>
                                        <DossierCard>
                                            <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Market Signal</div>
                                            <div className={`text-2xl font-bold ${data.marketSignal.includes("Buy") ? "text-emerald-400" : "text-amber-400"}`}>
                                                {data.marketSignal}
                                            </div>
                                            <div className="text-[10px] text-slate-400 mt-1">Score: {data.demandScore}/100</div>
                                        </DossierCard>
                                        <DossierCard>
                                            <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Open Roles</div>
                                            <div className="text-2xl font-bold text-white">{data.insights.openRoles}</div>
                                            <div className="text-[10px] text-slate-400 mt-1">Active Listings</div>
                                        </DossierCard>
                                        <DossierCard>
                                            <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Avg. Tenure</div>
                                            <div className="text-2xl font-bold text-white">{data.talentDNA.avgTenure}</div>
                                            <div className="text-[10px] text-slate-400 mt-1">Retention Rate</div>
                                        </DossierCard>
                                    </div>

                                    {/* Deep Dive Row 1: Salary Tiers & Trends */}
                                    <div className="grid lg:grid-cols-3 gap-4">
                                        <div className="lg:col-span-2">
                                            <DossierCard title="Compensation Velocity & Tiers" icon={DollarSign}>
                                                <div className="h-64 w-full">
                                                    <ResponsiveContainer width="100%" height="100%">
                                                        <ComposedChart data={data.tierData}>
                                                            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                                            <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                                                            <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value}L`} />
                                                            <Tooltip
                                                                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #312e81', borderRadius: '4px' }}
                                                                itemStyle={{ color: '#e2e8f0', fontSize: '12px' }}
                                                            />
                                                            <Bar dataKey="salary" barSize={40} fill="#4f46e5" radius={[2, 2, 0, 0]}>
                                                                {data.tierData.map((entry, index) => (
                                                                    <Cell key={`cell-${index}`} fill={index === 0 ? '#6366f1' : '#312e81'} />
                                                                ))}
                                                            </Bar>
                                                            <Line type="monotone" dataKey="demand" stroke="#06b6d4" strokeWidth={2} dot={{ r: 3 }} />
                                                        </ComposedChart>
                                                    </ResponsiveContainer>
                                                </div>
                                            </DossierCard>
                                        </div>

                                        <div className="space-y-4">
                                            <DossierCard title="Work Mode" icon={Building2}>
                                                <div className="h-32 w-full">
                                                    <ResponsiveContainer width="100%" height="100%">
                                                        <PieChart>
                                                            <Pie
                                                                data={data.workMode}
                                                                cx="50%"
                                                                cy="50%"
                                                                innerRadius={30}
                                                                outerRadius={50}
                                                                paddingAngle={2}
                                                                dataKey="value"
                                                                stroke="none"
                                                            >
                                                                {data.workMode.map((entry, index) => (
                                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                                ))}
                                                            </Pie>
                                                            <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none' }} itemStyle={{ color: '#fff', fontSize: '10px' }} />
                                                            <Legend verticalAlign="middle" align="right" layout="vertical" iconSize={8} formatter={(value) => <span className="text-[10px] text-slate-400">{value}</span>} />
                                                        </PieChart>
                                                    </ResponsiveContainer>
                                                </div>
                                            </DossierCard>

                                            <DossierCard title="Education" icon={GraduationCap}>
                                                <div className="space-y-2">
                                                    {data.educationProfile.map((item, i) => (
                                                        <div key={i} className="flex items-center justify-between text-xs">
                                                            <span className="text-slate-400">{item.name}</span>
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                                                    <div className="h-full bg-indigo-500" style={{ width: `${item.value}%` }} />
                                                                </div>
                                                                <span className="text-white w-6 text-right">{item.value}%</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </DossierCard>
                                        </div>
                                    </div>

                                    {/* Deep Dive Row 2: Interview & Skills */}
                                    <div className="grid lg:grid-cols-3 gap-4">
                                        <DossierCard title="Interview Intelligence" icon={Users}>
                                            <div className="grid grid-cols-2 gap-4 mb-4">
                                                <div className="bg-slate-900/50 p-3 rounded-sm border border-slate-800">
                                                    <div className="text-[10px] text-slate-500 uppercase">Difficulty</div>
                                                    <div className="text-lg font-bold text-white">{data.interviewInsights.difficulty}</div>
                                                </div>
                                                <div className="bg-slate-900/50 p-3 rounded-sm border border-slate-800">
                                                    <div className="text-[10px] text-slate-500 uppercase">Time to Offer</div>
                                                    <div className="text-lg font-bold text-white">{data.interviewInsights.timeToOffer}</div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Common Rounds</div>
                                                <div className="flex flex-wrap gap-2">
                                                    {data.interviewInsights.commonTopics.map((topic, i) => (
                                                        <span key={i} className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 text-[10px] text-indigo-300 rounded-sm">
                                                            {topic}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </DossierCard>

                                        <DossierCard title="Competency Radar" icon={Radar}>
                                            <div className="h-48 w-full">
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data.skillMatch}>
                                                        <PolarGrid stroke="#334155" />
                                                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 9 }} />
                                                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                                        <RechartsRadar
                                                            name="Market Demand"
                                                            dataKey="A"
                                                            stroke="#06b6d4"
                                                            strokeWidth={2}
                                                            fill="#06b6d4"
                                                            fillOpacity={0.2}
                                                        />
                                                        <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none' }} itemStyle={{ color: '#fff', fontSize: '10px' }} />
                                                    </RadarChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </DossierCard>

                                        <DossierCard title="Tech Hub Heatmap" icon={Map}>
                                            <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                                                {data.heatmap.map((city, i) => (
                                                    <div key={i} className="flex items-center justify-between group">
                                                        <span className="text-xs text-slate-400 group-hover:text-white transition-colors">{city.region}</span>
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                                                <div
                                                                    className={`h-full ${city.intensity > 80 ? 'bg-cyan-500' : city.intensity > 60 ? 'bg-indigo-500' : 'bg-slate-600'}`}
                                                                    style={{ width: `${city.intensity}%` }}
                                                                />
                                                            </div>
                                                            <span className="text-[10px] text-slate-500 w-6 text-right">{city.intensity}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </DossierCard>
                                    </div>

                                    {/* Skills Tags */}
                                    <DossierCard title="Required Augmentations" icon={Cpu}>
                                        <div className="flex flex-wrap gap-2">
                                            {data.topSkills.map((skill, i) => (
                                                <span key={i} className="px-2 py-1 bg-slate-800 border border-slate-700 text-[10px] text-slate-300 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors cursor-default">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </DossierCard>
                                </motion.div>
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-700 opacity-50">
                                    <div className="w-20 h-20 border border-dashed border-slate-700 rounded-full flex items-center justify-center mb-4">
                                        <Target className="w-8 h-8" />
                                    </div>
                                    <div className="text-sm font-mono uppercase tracking-widest">System Idle</div>
                                    <div className="text-[10px] mt-2">Awaiting Target Parameters</div>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div >
            </main >
        </div >
    )
}

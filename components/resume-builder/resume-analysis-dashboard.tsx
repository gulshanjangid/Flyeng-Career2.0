"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, AlertCircle, CheckCircle, Target, TrendingUp, User, Eye, AlertTriangle, Lightbulb, Zap, Award, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
    BarChart, Bar, XAxis, YAxis, Tooltip, Cell
} from 'recharts'

import { ResumeAnalysisData } from '@/lib/types'

interface AnalysisDashboardProps {
    isOpen: boolean
    onClose: () => void
    data: ResumeAnalysisData
}

export function ResumeAnalysisDashboard({ isOpen, onClose, data }: AnalysisDashboardProps) {
    if (!isOpen) return null

    // Fallback radar data if missing
    const radarData = data.radarData?.length > 0 ? data.radarData : [
        { subject: 'ATS', A: data.score || 50, fullMark: 100 },
        { subject: 'Content', A: 50, fullMark: 100 },
        { subject: 'Skills', A: 50, fullMark: 100 },
        { subject: 'Impact', A: 50, fullMark: 100 },
        { subject: 'Format', A: 80, fullMark: 100 },
    ];

    // Prepare Bar Chart Data
    const barData = [
        { name: 'Impact', score: data.categoryScores?.impact || 0, fill: '#f59e0b' }, // Amber
        { name: 'Content', score: data.categoryScores?.content || 0, fill: '#3b82f6' }, // Blue
        { name: 'Skills', score: data.categoryScores?.skills || 0, fill: '#10b981' }, // Emerald
        { name: 'Format', score: data.categoryScores?.formatting || 0, fill: '#8b5cf6' }, // Violet
    ];

    const scoreColor = data.score > 80 ? '#22c55e' : data.score > 50 ? '#eab308' : '#ef4444';
    const scoreGradient = data.score > 80 ? 'from-green-500 to-emerald-400' : data.score > 50 ? 'from-yellow-500 to-amber-400' : 'from-red-500 to-rose-400';

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-[#030303] flex flex-col overflow-hidden"
                >
                    {/* Premium Header */}
                    <div className="h-14 md:h-16 border-b border-white/5 flex items-center justify-between px-4 md:px-8 bg-gradient-to-r from-[#0A0A0A] to-[#111] shrink-0">
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                                <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            </div>
                            <div>
                                <h2 className="text-base md:text-lg font-bold text-white tracking-tight">Resume Analysis</h2>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest hidden md:block">AI-Powered Insights</p>
                            </div>
                        </div>
                        <Button variant="ghost" onClick={onClose} className="rounded-full hover:bg-white/10 text-slate-400 hover:text-white w-8 h-8 md:w-10 md:h-10 p-0">
                            <X className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Main Scrollable Content */}
                    <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 scrollbar-hide">
                        <div className="max-w-6xl mx-auto space-y-6 pb-12">

                            {/* Hero Section: Score + Radar + Bar Chart */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                                {/* Score Card - Dominant */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="col-span-12 md:col-span-6 lg:col-span-4 bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-3xl border border-white/5 p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]"
                                >
                                    {/* Glow effect */}
                                    <div className="absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full pointer-events-none" style={{ background: `${scoreColor}20` }} />

                                    <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                                        {/* Animated Score Ring */}
                                        <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6">
                                            <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                                                {/* Background ring */}
                                                <circle cx="100" cy="100" r="85" className="stroke-white/5" strokeWidth="12" fill="transparent" />
                                                {/* Outer glow ring */}
                                                <circle cx="100" cy="100" r="85" stroke={scoreColor} strokeWidth="12" fill="transparent"
                                                    strokeDasharray={534} strokeDashoffset={534 - (534 * (data.score || 0)) / 100}
                                                    strokeLinecap="round" className="transition-all duration-1000 ease-out"
                                                    style={{ filter: `drop-shadow(0 0 20px ${scoreColor})` }}
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span className={`text-5xl md:text-6xl font-black bg-gradient-to-b ${scoreGradient} bg-clip-text text-transparent`}>{data.score || 0}</span>
                                                <span className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">ATS Score</span>
                                            </div>
                                        </div>

                                        {/* Verdict Badge */}
                                        <div className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border ${data.score > 80 ? 'bg-green-500/10 text-green-400 border-green-500/30' : data.score > 50 ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30' : 'bg-red-500/10 text-red-400 border-red-500/30'}`}>
                                            {data.score > 80 ? '🚀 Interview Ready' : data.score > 50 ? '⚡ Needs Polish' : '⚠️ Major Issues'}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Radar Chart & Bar Chart Container */}
                                <div className="col-span-12 md:col-span-6 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Radar Chart */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="bg-[#111] rounded-3xl border border-white/5 p-4 md:p-6 relative overflow-hidden h-[300px]"
                                    >
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">360° Assessment</h3>
                                        <div className="h-[220px] w-full flex items-center justify-center">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                                                    <PolarGrid stroke="#222" strokeDasharray="3 3" />
                                                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 600 }} />
                                                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                                    <Radar
                                                        name="Resume"
                                                        dataKey="A"
                                                        stroke="#06b6d4"
                                                        strokeWidth={2}
                                                        fill="url(#radarGradient)"
                                                        fillOpacity={0.4}
                                                    />
                                                    <defs>
                                                        <linearGradient id="radarGradient" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.8} />
                                                            <stop offset="100%" stopColor="#0284c7" stopOpacity={0.2} />
                                                        </linearGradient>
                                                    </defs>
                                                </RadarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </motion.div>

                                    {/* New Bar Chart: Category Scores */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="bg-[#111] rounded-3xl border border-white/5 p-4 md:p-6 relative overflow-hidden h-[300px]"
                                    >
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Category Breakdown</h3>
                                        <div className="h-[220px] w-full">
                                            <ResponsiveContainer width="100%" height="100%">
                                                {/* @ts-ignore */}
                                                <BarChart data={barData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                                    {/* @ts-ignore */}
                                                    <XAxis type="number" domain={[0, 100]} hide />
                                                    {/* @ts-ignore */}
                                                    <YAxis dataKey="name" type="category" width={60} tick={{ fill: '#94a3b8', fontSize: 11 }} />
                                                    {/* @ts-ignore */}
                                                    <Tooltip 
                                                        contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                                                        itemStyle={{ color: '#f8fafc' }}
                                                        cursor={{fill: 'transparent'}}
                                                    />
                                                    {/* @ts-ignore */}
                                                    <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={20} background={{ fill: '#1e293b', radius: [0, 4, 4, 0] }}>
                                                        {
                                                            barData.map((entry, index) => (
                                                                <Cell key={`cell-${index}`} fill={entry.fill} />
                                                            ))
                                                        }
                                                    </Bar>
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Bullet Point Feedback (New Deep Dive Section) */}
                            {data.bulletPointFeedback?.length > 0 && (
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="bg-[#111] rounded-3xl border border-white/5 p-6"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                            <Sparkles className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-200">Bullet Point Deep Dive</h3>
                                            <p className="text-sm text-slate-500">AI-suggested improvements for impact</p>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 gap-4">
                                        {data.bulletPointFeedback.map((item, i) => (
                                            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all">
                                                <div className="text-xs text-red-400/80 uppercase font-bold mb-2 flex items-center gap-2">
                                                    <AlertTriangle className="w-3 h-3" /> Weak Original
                                                </div>
                                                <p className="text-slate-400 text-sm mb-4 line-through decoration-red-500/30 decoration-2 italic">"{item.original}"</p>
                                                
                                                <div className="flex items-center gap-2 my-3">
                                                    <div className="h-px bg-white/10 flex-1" />
                                                    <span className="text-[10px] text-slate-600 uppercase font-bold">Better Version</span>
                                                    <div className="h-px bg-white/10 flex-1" />
                                                </div>

                                                <div className="text-xs text-green-400/80 uppercase font-bold mb-2 flex items-center gap-2">
                                                    <CheckCircle className="w-3 h-3" /> Improved
                                                </div>
                                                <p className="text-green-100 text-sm font-medium bg-green-500/10 p-3 rounded-lg border border-green-500/20">"{item.improved}"</p>
                                                <p className="text-xs text-slate-500 mt-2 italic border-l-2 border-slate-700 pl-3">Why: {item.reason}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}


                            {/* Quick Metrics Row */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    { label: 'Archetype', value: data.archetype || 'Generalist', icon: User, color: 'text-purple-400', bg: 'bg-purple-500/10' },
                                    { label: 'Recruiter View', value: data.recruiterImpression || 'Neutral', icon: Eye, color: 'text-blue-400', bg: 'bg-blue-500/10' },
                                    { label: 'Impact Score', value: `${data.impactScore || 0}/100`, icon: Zap, color: 'text-orange-400', bg: 'bg-orange-500/10' },
                                    { label: 'Keywords', value: `${data.keywordsMissing?.length || 0} Missing`, icon: Target, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
                                ].map((metric, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.15 + i * 0.05 }}
                                        className="bg-[#111] rounded-2xl border border-white/5 p-4 group hover:border-white/10 transition-all"
                                    >
                                        <div className={`w-8 h-8 rounded-lg ${metric.bg} flex items-center justify-center mb-3`}>
                                            <metric.icon className={`w-4 h-4 ${metric.color}`} />
                                        </div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">{metric.label}</div>
                                        <div className="text-xs md:text-sm font-bold text-white truncate" title={metric.value.length > 20 ? metric.value : undefined}>{metric.value}</div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Strengths & Weaknesses */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Strengths */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="bg-gradient-to-br from-green-950/30 to-emerald-950/20 rounded-3xl border border-green-500/20 p-6"
                                >
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                                            <CheckCircle className="w-5 h-5 text-green-400" />
                                        </div>
                                        <h3 className="text-lg font-bold text-green-200">Strengths</h3>
                                    </div>
                                    <div className="space-y-3">
                                        {data.strengths?.length > 0 ? data.strengths?.slice(0, 4).map((s, i) => (
                                            <div key={i} className="flex gap-3 items-start p-3 bg-green-500/5 rounded-xl border border-green-500/10">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                                                <span className="text-sm text-green-100/80">{s}</span>
                                            </div>
                                        )) : (
                                            <p className="text-sm text-slate-500 italic">Analysis in progress...</p>
                                        )}
                                    </div>
                                </motion.div>

                                {/* Weaknesses / Issues */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.35 }}
                                    className="bg-gradient-to-br from-red-950/30 to-rose-950/20 rounded-3xl border border-red-500/20 p-6"
                                >
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                                            <AlertCircle className="w-5 h-5 text-red-400" />
                                        </div>
                                        <h3 className="text-lg font-bold text-red-200">Critical Issues</h3>
                                    </div>
                                    <div className="space-y-3">
                                        {data.fatalErrors?.length > 0 ? data.fatalErrors?.slice(0, 4).map((err, i) => (
                                            <div key={i} className="flex gap-3 items-start p-3 bg-red-500/5 rounded-xl border border-red-500/10">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                                                <span className="text-sm text-red-100/80">{err}</span>
                                            </div>
                                        )) : (
                                            <div className="flex items-center gap-2 text-green-400 p-3 bg-green-500/5 rounded-xl">
                                                <CheckCircle className="w-4 h-4" /> No critical issues found!
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Missing Keywords */}
                            {data.keywordsMissing && data.keywordsMissing.length > 0 && (
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="bg-[#111] rounded-3xl border border-white/5 p-6"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                                            <Target className="w-4 h-4 text-orange-400" />
                                        </div>
                                        <h3 className="text-sm font-bold text-slate-200">Missing Keywords to Add</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {data.keywordsMissing.map((kw, i) => (
                                            <span key={i} className="px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-300 text-xs font-medium border border-orange-500/20 hover:bg-orange-500/20 transition-colors cursor-pointer">
                                                + {kw}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Action Plan */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.45 }}
                                className="bg-gradient-to-br from-cyan-950/30 to-blue-950/20 rounded-3xl border border-cyan-500/20 p-6"
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                                        <Lightbulb className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-cyan-200">Improvement Action Plan</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {data.improvementPlan?.map((plan, i) => (
                                        <div key={i} className="flex gap-3 items-center p-4 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors group">
                                            <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-bold font-mono group-hover:bg-cyan-500 group-hover:text-white transition-colors shrink-0">
                                                {i + 1}
                                            </div>
                                            <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{plan}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Summary */}
                            {data.summary && (
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="bg-[#111] rounded-3xl border border-white/5 p-6"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-slate-500/10 flex items-center justify-center">
                                            <Award className="w-4 h-4 text-slate-400" />
                                        </div>
                                        <h3 className="text-sm font-bold text-slate-200">Executive Summary</h3>
                                    </div>
                                    <p className="text-sm text-slate-400 leading-relaxed">{data.summary}</p>
                                </motion.div>
                            )}

                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

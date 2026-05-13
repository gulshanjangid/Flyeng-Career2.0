'use client'

import { useState, useEffect, useMemo } from 'react'
import { useAuth } from '@/context/auth-context'
import {
    getUserApplications, addApplication, updateApplication, deleteApplication,
    getApplicationStats, Application, ApplicationStats
} from '@/lib/application-service'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Briefcase, Plus, Search, Filter, X, ExternalLink, Trash2, Edit3,
    MapPin, Building2, Calendar, DollarSign, ArrowRight, CheckCircle,
    Clock, XCircle, Bookmark, TrendingUp, ChevronDown, AlertCircle,
    Link2, StickyNote, User2, Mail, BarChart3, Sparkles
} from 'lucide-react'
import { cn } from '@/lib/utils'

const STATUS_CONFIG = {
    Applied: { color: 'blue', icon: Clock, label: 'Applied', bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', badge: 'bg-blue-500/20 text-blue-300' },
    Interviewing: { color: 'purple', icon: Briefcase, label: 'Interviewing', bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', badge: 'bg-purple-500/20 text-purple-300' },
    Offer: { color: 'emerald', icon: CheckCircle, label: 'Offer', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-300' },
    Rejected: { color: 'red', icon: XCircle, label: 'Rejected', bg: 'bg-red-500/10', border: 'border-red-500/20', text: 'text-red-400', badge: 'bg-red-500/20 text-red-300' },
    Saved: { color: 'amber', icon: Bookmark, label: 'Saved', bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', badge: 'bg-amber-500/20 text-amber-300' },
} as const

type StatusKey = keyof typeof STATUS_CONFIG
const JOB_TYPES = ['Full-time', 'Part-time', 'Internship', 'Remote', 'Contract'] as const

export default function ApplicationsPage() {
    const { user } = useAuth()
    const [applications, setApplications] = useState<Application[]>([])
    const [loading, setLoading] = useState(true)
    const [showAddModal, setShowAddModal] = useState(false)
    const [editingApp, setEditingApp] = useState<Application | null>(null)
    const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [statusFilter, setStatusFilter] = useState<StatusKey | 'All'>('All')
    const [saving, setSaving] = useState(false)
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

    // Form state
    const [form, setForm] = useState({
        title: '', company: '', location: '', type: 'Full-time' as string,
        status: 'Applied' as StatusKey, salary: '', link: '', notes: '',
        contactPerson: '', contactEmail: ''
    })

    const userId = user?.id || 'anonymous'

    // Load applications
    useEffect(() => {
        if (!user) return
        const load = async () => {
            setLoading(true)
            const apps = await getUserApplications(userId)
            setApplications(apps)
            setLoading(false)
        }
        load()
    }, [user, userId])

    // Stats
    const stats: ApplicationStats = useMemo(() => getApplicationStats(applications), [applications])

    // Filtered + searched
    const filteredApps = useMemo(() => {
        let result = applications
        if (statusFilter !== 'All') result = result.filter(a => a.status === statusFilter)
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase()
            result = result.filter(a =>
                a.title.toLowerCase().includes(q) ||
                a.company.toLowerCase().includes(q) ||
                (a.location || '').toLowerCase().includes(q)
            )
        }
        return result
    }, [applications, statusFilter, searchQuery])

    // Toast auto-dismiss
    useEffect(() => {
        if (toast) {
            const t = setTimeout(() => setToast(null), 3000)
            return () => clearTimeout(t)
        }
    }, [toast])

    // Reset form
    const resetForm = () => setForm({
        title: '', company: '', location: '', type: 'Full-time',
        status: 'Applied', salary: '', link: '', notes: '',
        contactPerson: '', contactEmail: ''
    })

    // Open edit
    const openEdit = (app: Application) => {
        setForm({
            title: app.title, company: app.company, location: app.location || '',
            type: app.type || 'Full-time', status: app.status, salary: app.salary || '',
            link: app.link || '', notes: app.notes || '',
            contactPerson: app.contactPerson || '', contactEmail: app.contactEmail || ''
        })
        setEditingApp(app)
        setShowAddModal(true)
    }

    // Save (add or update)
    const handleSave = async () => {
        if (!form.title.trim() || !form.company.trim()) {
            setToast({ message: 'Job title and company are required', type: 'error' })
            return
        }

        setSaving(true)
        try {
            if (editingApp) {
                await updateApplication(userId, editingApp.id!, {
                    title: form.title, company: form.company, location: form.location,
                    type: form.type as any, status: form.status, salary: form.salary,
                    link: form.link, notes: form.notes,
                    contactPerson: form.contactPerson, contactEmail: form.contactEmail
                })
                setToast({ message: 'Application updated!', type: 'success' })
            } else {
                await addApplication({
                    user_id: userId, title: form.title, company: form.company,
                    location: form.location, type: form.type as any,
                    status: form.status, salary: form.salary, link: form.link,
                    notes: form.notes, contactPerson: form.contactPerson,
                    contactEmail: form.contactEmail
                } as any)
                setToast({ message: 'Application added!', type: 'success' })
            }
            // Reload
            const apps = await getUserApplications(userId)
            setApplications(apps)
            setShowAddModal(false)
            setEditingApp(null)
            resetForm()
        } catch {
            setToast({ message: 'Failed to save. Try again.', type: 'error' })
        } finally {
            setSaving(false)
        }
    }

    // Delete
    const handleDelete = async (appId: string) => {
        await deleteApplication(userId, appId)
        setApplications(prev => prev.filter(a => a.id !== appId))
        setDeleteConfirm(null)
        setToast({ message: 'Application removed', type: 'success' })
    }

    // Quick status update
    const handleStatusChange = async (appId: string, newStatus: StatusKey) => {
        await updateApplication(userId, appId, { status: newStatus })
        setApplications(prev => prev.map(a => a.id === appId ? { ...a, status: newStatus } : a))
        setToast({ message: `Status → ${newStatus}`, type: 'success' })
    }

    if (loading) {
        return (
            <div className="h-full flex items-center justify-center p-8">
                <div className="relative">
                                            <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
                    <div className="w-16 h-16 border-4 border-cyan-500/20 rounded-full" />
                    <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-cyan-500 rounded-full animate-spin" />
                </div>
            </div>
        )
    }

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">

            {/* TOAST */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={cn(
                            "fixed top-6 right-6 z-[60] px-5 py-3 rounded-xl border backdrop-blur-xl shadow-2xl flex items-center gap-3",
                            toast.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-red-500/10 border-red-500/30 text-red-300'
                        )}
                    >
                        {toast.type === 'success' ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                        <span className="text-sm font-medium">{toast.message}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* HEADER */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-cyan-500/10">
                            <Briefcase className="w-6 h-6 text-cyan-400" />
                        </div>
                        My Applications
                    </h1>
                    <p className="text-white/40 text-sm mt-1">Track and manage your job applications</p>
                </div>
                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => { resetForm(); setEditingApp(null); setShowAddModal(true) }}
                    className="h-11 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-95 duration-200 text-sm sm:text-base w-fit border border-white/10"
                >
                    <Plus className="w-4 h-4" /> Add Application
                </motion.button>
            </div>

            {/* STATS CARDS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                    { label: 'Total', value: stats.total, color: 'cyan', icon: BarChart3 },
                    { label: 'Applied', value: stats.applied, color: 'blue', icon: Clock },
                    { label: 'Interviewing', value: stats.interviewing, color: 'purple', icon: Briefcase },
                    { label: 'Offers', value: stats.offers, color: 'emerald', icon: CheckCircle },
                    { label: 'Interview Rate', value: `${stats.interviewRate}%`, color: 'amber', icon: TrendingUp },
                    { label: 'Saved', value: stats.saved, color: 'pink', icon: Bookmark },
                ].map((stat) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className={cn(
                            "relative overflow-hidden p-4 sm:p-5 rounded-2xl border backdrop-blur-xl group cursor-default shadow-lg transition-all duration-300",
                            `bg-[#0a0f1a] border-white/5 hover:border-${stat.color}-500/30 hover:shadow-[0_0_20px_rgba(var(--${stat.color}-500),0.15)]`
                        )}
                    >
                        <div className={cn("absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none", `bg-${stat.color}-500`)} />
                        
                        <div className="flex items-start justify-between mb-4 relative z-10">
                            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center border", `bg-${stat.color}-500/10 text-${stat.color}-400 border-${stat.color}-500/20 shadow-[inset_0_0_10px_rgba(var(--${stat.color}-500),0.1)] group-hover:shadow-[0_0_15px_rgba(var(--${stat.color}-500),0.2)] transition-shadow`)}>
                                <stat.icon className="w-5 h-5" />
                            </div>
                        </div>

                        <div className="relative z-10">
                            <p className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md">{stat.value}</p>
                            <p className="text-[10px] sm:text-[11px] text-white/50 font-black uppercase tracking-[0.2em] mt-1">{stat.label}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* FILTERS */}
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                        type="text"
                        placeholder="Search by title, company, or location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-10 bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-4 text-sm text-white placeholder:text-white/25 outline-none focus:border-cyan-500/40 transition-colors"
                    />
                </div>
                <div className="flex gap-1.5 flex-wrap">
                    {(['All', 'Applied', 'Interviewing', 'Offer', 'Rejected', 'Saved'] as const).map(s => (
                        <button
                            key={s}
                            onClick={() => setStatusFilter(s)}
                            className={cn(
                                "h-10 px-3 sm:px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border",
                                statusFilter === s
                                    ? 'bg-white/10 text-white border-white/20'
                                    : 'bg-white/[0.02] text-white/40 border-white/5 hover:text-white/60 hover:border-white/10'
                            )}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>

            {/* APPLICATIONS LIST */}
            {filteredApps.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-24 text-center border border-white/5 rounded-3xl bg-gradient-to-b from-[#0a0f1a]/80 to-[#050B14] relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
                    
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-[2rem] flex items-center justify-center mb-8 border border-white/10 relative z-10 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
                        <Briefcase className="w-12 h-12 text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                    </div>
                    
                    <h3 className="text-2xl font-black text-white mb-3 tracking-tight relative z-10">
                        {applications.length === 0 ? 'Your Career Journey Starts Here' : 'No matching results'}
                    </h3>
                    <p className="text-white/50 text-sm max-w-sm mx-auto mb-8 relative z-10 leading-relaxed">
                        {applications.length === 0
                            ? 'Organize your job search, track interviews, and analyze your success rate all in one beautiful dashboard.'
                            : 'Try adjusting your filters or search query.'}
                    </p>
                    
                    {applications.length === 0 && (
                        <button
                            onClick={() => { resetForm(); setShowAddModal(true) }}
                            className="h-12 px-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black hover:from-cyan-400 hover:to-blue-500 transition-all inline-flex items-center gap-3 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] relative z-10 hover:scale-105"
                        >
                            <Plus className="w-5 h-5" /> Add First Application
                        </button>
                    )}
                </motion.div>
            ) : (
                <div className="space-y-3">
                    <AnimatePresence mode="popLayout">
                        {filteredApps.map((app, i) => {
                            const cfg = STATUS_CONFIG[app.status]
                            return (
                                <motion.div
                                    key={app.id}
                                    layout
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ delay: i * 0.03 }}
                                    className={cn(
                                        "p-4 sm:p-5 rounded-2xl border backdrop-blur-md group transition-all duration-300 relative overflow-hidden hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:border-white/30",
                                        cfg.bg, cfg.border
                                    )}
                                >
                                    {/* Glass Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                    <div className={cn("absolute -inset-4 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-full", `bg-${cfg.color}-500`)} />
                                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                                        {/* Icon */}
                                        <div className={cn("shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center", cfg.bg)}>
                                            <cfg.icon className={cn("w-5 h-5 sm:w-6 sm:h-6", cfg.text)} />
                                        </div>

                                        {/* Details */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2">
                                                <div className="min-w-0">
                                                    <h3 className="font-bold text-white text-sm sm:text-base truncate">{app.title}</h3>
                                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-white/40">
                                                        <span className="flex items-center gap-1"><Building2 className="w-3 h-3" />{app.company}</span>
                                                        {app.location && <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{app.location}</span>}
                                                        {app.type && <span>{app.type}</span>}
                                                        {app.salary && <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" />{app.salary}</span>}
                                                    </div>
                                                </div>
                                                <span className={cn("shrink-0 px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider", cfg.badge)}>
                                                    {app.status}
                                                </span>
                                            </div>

                                            {app.notes && (
                                                <p className="text-xs text-white/30 mt-2 line-clamp-1"><StickyNote className="w-3 h-3 inline mr-1" />{app.notes}</p>
                                            )}

                                            <div className="flex flex-wrap items-center gap-2 mt-3">
                                                {/* Applied date */}
                                                <div className="flex items-center gap-2 mb-2 text-white/30 text-[10px] font-medium uppercase tracking-widest">
                                                <Calendar className="w-3 h-3" />
                                                <span>{new Date(app.applied_at || '').toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                            </div>

                                                <div className="flex-1" />

                                                {/* Quick status */}
                                                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    {(['Applied', 'Interviewing', 'Offer', 'Rejected'] as StatusKey[]).filter(s => s !== app.status).map(s => (
                                                        <button
                                                            key={s}
                                                            onClick={() => handleStatusChange(app.id!, s)}
                                                            className={cn("px-2 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider border transition-all hover:scale-105", STATUS_CONFIG[s].badge, `border-${STATUS_CONFIG[s].color}-500/20`)}
                                                            title={`Move to ${s}`}
                                                        >
                                                            {s}
                                                        </button>
                                                    ))}
                                                </div>

                                                {/* Actions */}
                                                <div className="flex items-center gap-1">
                                                    {app.link && (
                                                        <a href={app.link} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-white/10 text-white/30 hover:text-white/60 transition-colors" title="Open link">
                                                            <ExternalLink className="w-3.5 h-3.5" />
                                                        </a>
                                                    )}
                                                    <button onClick={() => openEdit(app)} className="p-1.5 rounded-lg hover:bg-white/10 text-white/30 hover:text-cyan-400 transition-colors" title="Edit">
                                                        <Edit3 className="w-3.5 h-3.5" />
                                                    </button>
                                                    <button onClick={() => setDeleteConfirm(app.id!)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-white/30 hover:text-red-400 transition-colors" title="Delete">
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Delete confirmation inline */}
                                    <AnimatePresence>
                                        {deleteConfirm === app.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="flex items-center justify-end gap-2 mt-3 pt-3 border-t border-white/5">
                                                    <span className="text-xs text-red-300/70 mr-2">Delete this application?</span>
                                                    <button onClick={() => setDeleteConfirm(null)} className="px-3 py-1.5 rounded-lg bg-white/5 text-white/60 text-xs font-medium hover:bg-white/10 transition-colors">Cancel</button>
                                                    <button onClick={() => handleDelete(app.id!)} className="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-300 text-xs font-bold hover:bg-red-500/30 transition-colors">Delete</button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </div>
            )}

            {/* ADD / EDIT MODAL */}
            <AnimatePresence>
                {showAddModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                        onClick={(e) => { if (e.target === e.currentTarget) { setShowAddModal(false); setEditingApp(null); resetForm() } }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="w-full max-w-xl bg-[#0a0a1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-5 border-b border-white/5">
                                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-cyan-400" />
                                    {editingApp ? 'Edit Application' : 'Add Application'}
                                </h2>
                                <button onClick={() => { setShowAddModal(false); setEditingApp(null); resetForm() }} className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Form */}
                            <div className="p-5 space-y-4 overflow-y-auto flex-1">
                                {/* Row 1: Title + Company */}
                                <div className="grid sm:grid-cols-2 gap-3">
                                    <div className="space-y-1.5 group/input">
                                        <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">Job Title *</label>
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" /><div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
<input
                                            value={form.title}
                                            onChange={(e) => setForm(p => ({ ...p, title: e.target.value }))}
                                            className="relative w-full bg-white/5 border border-white/10 rounded-xl px-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm"
                                            placeholder="Software Engineer"
                                        /></div>
                                    </div>
                                    <div className="space-y-1.5 group/input">
                                        <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">Company *</label>
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" /><div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
<input
                                            value={form.company}
                                            onChange={(e) => setForm(p => ({ ...p, company: e.target.value }))}
                                            className="relative w-full bg-white/5 border border-white/10 rounded-xl px-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm"
                                            placeholder="Google"
                                        /></div>
                                    </div>
                                </div>

                                {/* Row 2: Location + Type */}
                                <div className="grid sm:grid-cols-2 gap-3">
                                    <div className="space-y-1.5 group/input">
                                        <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">Location</label>
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
                                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
                                            <input
                                                value={form.location}
                                                onChange={(e) => setForm(p => ({ ...p, location: e.target.value }))}
                                                className="relative w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm"
                                                placeholder="Bangalore, India"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5 group/input">
                                        <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">Job Type</label>
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" /><div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
<select
                                            value={form.type}
                                            onChange={(e) => setForm(p => ({ ...p, type: e.target.value }))}
                                            className="relative w-full bg-white/5 border border-white/10 rounded-xl px-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm appearance-none cursor-pointer"
                                        >
                                            {JOB_TYPES.map(t => <option key={t} value={t} className="bg-[#0a0a1a]">{t}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Row 3: Status + Salary */}
                                <div className="grid sm:grid-cols-2 gap-3">
                                    <div className="space-y-1.5 group/input">
                                        <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">Status</label>
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" /><div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
<select
                                            value={form.status}
                                            onChange={(e) => setForm(p => ({ ...p, status: e.target.value as StatusKey }))}
                                            className="relative w-full bg-white/5 border border-white/10 rounded-xl px-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm appearance-none cursor-pointer"
                                        >
                                            {(Object.keys(STATUS_CONFIG) as StatusKey[]).map(s => <option key={s} value={s} className="bg-[#0a0a1a]">{s}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-1.5 group/input">
                                        <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">Salary / Stipend</label>
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
                                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
                                            <input
                                                value={form.salary}
                                                onChange={(e) => setForm(p => ({ ...p, salary: e.target.value }))}
                                                className="relative w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm"
                                                placeholder="₹6 LPA / $120k"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Link */}
                                <div className="space-y-1.5 group/input">
                                    <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">Job Posting Link</label>
                                    <div className="relative">
                                            <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
                                        <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
                                        <input
                                            value={form.link}
                                            onChange={(e) => setForm(p => ({ ...p, link: e.target.value }))}
                                            className="relative w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm"
                                            placeholder="https://careers.google.com/..."
                                        />
                                    </div>
                                </div>

                                {/* Contact */}
                                <div className="grid sm:grid-cols-2 gap-3">
                                    <div className="space-y-1.5 group/input">
                                        <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">Contact Person</label>
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
                                            <User2 className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
                                            <input
                                                value={form.contactPerson}
                                                onChange={(e) => setForm(p => ({ ...p, contactPerson: e.target.value }))}
                                                className="relative w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm"
                                                placeholder="Recruiter name"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5 group/input">
                                        <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">Contact Email</label>
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
                                            <input
                                                value={form.contactEmail}
                                                onChange={(e) => setForm(p => ({ ...p, contactEmail: e.target.value }))}
                                                className="relative w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm"
                                                placeholder="recruiter@company.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Notes */}
                                <div className="space-y-1.5 group/input">
                                    <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">Notes</label>
                                    <div className="relative">
                                            <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" /><div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
<textarea
                                        value={form.notes}
                                        onChange={(e) => setForm(p => ({ ...p, notes: e.target.value }))}
                                        rows={3}
                                        className="relative w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm resize-none"
                                        placeholder="Any notes about this application..."
                                    /></div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-end gap-3 p-5 border-t border-white/5">
                                <button
                                    onClick={() => { setShowAddModal(false); setEditingApp(null); resetForm() }}
                                    className="h-10 px-5 rounded-xl bg-white/5 text-white/60 text-sm font-medium hover:bg-white/10 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSave}
                                    disabled={saving}
                                    className="h-10 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50 flex items-center gap-2"
                                >
                                    {saving ? (
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <CheckCircle className="w-4 h-4" />
                                    )}
                                    {editingApp ? 'Update' : 'Add Application'}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

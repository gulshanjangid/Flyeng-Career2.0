'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Mail, Phone, School, Target, Save, Upload, UserCircle, Briefcase, Loader2, CheckCircle, AlertTriangle, FileText, Sparkles } from 'lucide-react'
import { useAuth } from '@/context/auth-context'
import { Button } from '@/components/ui/button'
import { updateUser, getUserByEmail } from '@/lib/user-service'
import { cn } from '@/lib/utils'
import { supabase } from '@/lib/supabase'

// Calculate profile completion
function calcCompletion(data: any): { score: number; missing: string[] } {
    const missing: string[] = []
    let score = 20 // base for having an account
    if (data.name) score += 12; else missing.push('Name')
    if (data.email) score += 8
    if (data.photo) score += 12; else missing.push('Profile Photo')
    if (data.role) score += 10; else missing.push('Role')
    if (data.bio && data.bio.length > 10) score += 10; else missing.push('Bio')
    if (data.phone) score += 8; else missing.push('Phone')
    if (data.college) score += 10; else missing.push('College')
    if (data.goals && data.goals.length > 0) score += 10; else missing.push('Goals')
    return { score: Math.min(score, 100), missing }
}

export default function SettingsPage() {
    const { user: authUser } = useAuth()
    const [loading, setLoading] = useState(false)
    const [pageLoading, setPageLoading] = useState(true)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        photo: '',
        role: '',
        bio: '',
        phone: '',
        college: '',
        goals: '' // comma separated
    })

    // Load profile from Supabase DB
    useEffect(() => {
        const loadProfile = async () => {
            if (!authUser) { setPageLoading(false); return }

            try {
                // 1. Try from Supabase DB first (most complete)
                if (supabase) {
                    const dbUser = await getUserByEmail(authUser.email!)
                    if (dbUser) {
                        setFormData({
                            name: dbUser.name || '',
                            email: authUser.email || '',
                            photo: dbUser.photo || authUser.user_metadata?.avatar_url || '',
                            role: dbUser.role || '',
                            bio: (dbUser as any).bio || '',
                            phone: dbUser.phone || '',
                            college: dbUser.college || '',
                            goals: dbUser.goals?.join(', ') || ''
                        })
                        setPageLoading(false)
                        return
                    }
                }

                // 2. Fallback to auth metadata + localStorage
                const meta = authUser.user_metadata || {}
                let stored: any = null
                try { stored = JSON.parse(localStorage.getItem('flyeng_user') || 'null') } catch {}

                setFormData({
                    name: stored?.name || meta?.name || meta?.full_name || '',
                    email: authUser.email || '',
                    photo: stored?.photo || meta?.avatar_url || meta?.picture || '',
                    role: stored?.role || '',
                    bio: stored?.bio || '',
                    phone: stored?.phone || '',
                    college: stored?.college || '',
                    goals: stored?.goals?.join(', ') || ''
                })
            } catch (err) {
                console.error('Error loading profile:', err)
            } finally {
                setPageLoading(false)
            }
        }
        loadProfile()
    }, [authUser])

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return
        
        const file = e.target.files[0]
        if (file.size > 5 * 1024 * 1024) {
            setError('Image must be under 5MB')
            return
        }
        
        const fileExt = file.name.split('.').pop()
        const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`
        const filePath = `avatars/${fileName}`

        setLoading(true)
        setError('')

        if (!supabase) {
             const fakeUrl = URL.createObjectURL(file)
             setFormData(prev => ({ ...prev, photo: fakeUrl }))
             setLoading(false)
             return
        }

        try {
            const { error: uploadError } = await supabase.storage
                .from('public')
                .upload(filePath, file)

            if (uploadError) throw uploadError

            const { data: { publicUrl } } = supabase.storage
                .from('public')
                .getPublicUrl(filePath)

            setFormData(prev => ({ ...prev, photo: publicUrl }))
            setLoading(false)
            
        } catch (err: any) {
            console.error('Avatar upload Supabase error (falling back to ImgBB API):', err)
            // Fallback to ImgBB API to guarantee it saves an instant URL to DB, instead of a massive base64 string breaking NextJS HTTP Headers
            try {
                const formData = new FormData();
                formData.append("image", file);
                const res = await fetch("https://api.imgbb.com/1/upload?key=6412fb7e93051ae9ceeeabce71e626e6", {
                    method: "POST",
                    body: formData
                });
                const data = await res.json();
                if (data.success) {
                    setFormData(prev => ({ ...prev, photo: data.data.url }))
                } else {
                     setError("Image upload failed perfectly, please try again.")
                }
            } catch (fallbackErr) {
                console.error("Fallback upload failed", fallbackErr)
                setError("Unable to upload image at this time.")
            } finally {
                setLoading(false)
            }
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setSuccess(false)
        setError('')

        if (!formData.name.trim()) {
            setError('Name is required')
            setLoading(false)
            return
        }

        try {
            const updates: any = {
                name: formData.name.trim(),
                photo: formData.photo,
                role: formData.role.trim(),
                phone: formData.phone.trim(),
                college: formData.college.trim(),
                bio: formData.bio.trim(),
                goals: formData.goals.split(',').map(g => g.trim()).filter(Boolean)
            }

            const ok = await updateUser(updates)
            
            if (!ok) {
                throw new Error('Failed to save profile. Please try again.')
            }

            setSuccess(true)
            setTimeout(() => setSuccess(false), 4000)

        } catch (err: any) {
            console.error("Save error:", err)
            setError(err.message || 'Failed to save changes. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const { score: completionScore, missing: missingFields } = calcCompletion({
        ...formData,
        goals: formData.goals.split(',').filter(Boolean)
    })

    if (pageLoading) {
        return (
            <div className="max-w-4xl mx-auto p-6 md:p-8 flex items-center justify-center min-h-[60vh]">
                <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                                    <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
                        <div className="w-12 h-12 border-4 border-cyan-500/20 rounded-full" />
                        <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-cyan-500 rounded-full animate-spin" />
                    </div>
                    <p className="text-white/40 text-sm">Loading your profile...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-2xl md:text-3xl font-black text-white mb-1">Profile Settings</h1>
                <p className="text-white/50 text-sm md:text-base">Manage your public profile and preferences.</p>
            </motion.div>

            {/* Error / Success Banners */}
            <AnimatePresence>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm flex items-center gap-3"
                    >
                        <AlertTriangle className="w-5 h-5 shrink-0" />
                        <span>{error}</span>
                    </motion.div>
                )}
                {success && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-300 text-sm flex items-center gap-3 backdrop-blur-md shadow-[0_0_30px_rgba(34,197,94,0.1)]"
                    >
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                        </div>
                        <div className="flex-1">
                            <p className="font-bold">Profile Update Successful!</p>
                            <p className="text-[11px] opacity-60">Your changes have been synced to the database.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {/* LEFT: AVATAR + COMPLETION CARD */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-1 space-y-4"
                >
                    {/* Avatar Card */}
                    <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-4">
                        <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto cursor-pointer group">
                             <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all z-10">
                                <Upload className="w-7 h-7 text-white" />
                             </div>
                             
                            {formData.photo ? (
                                <img 
                                    src={formData.photo} 
                                    alt="Profile" 
                                    className="w-full h-full rounded-full object-cover border-4 border-white/10 group-hover:border-cyan-500/50 transition-colors"
                                />
                            ) : (
                                <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-900 to-blue-900 flex items-center justify-center border-4 border-white/10 group-hover:border-cyan-500/50 transition-colors">
                                    <UserCircle className="w-14 h-14 text-cyan-200" />
                                </div>
                            )}
                            
                            <input 
                                type="file" 
                                accept="image/*"
                                onChange={handleFileUpload}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                            />
                        </div>
                        
                        <div>
                            <h3 className="font-bold text-white text-lg">{formData.name || 'User'}</h3>
                            <p className="text-sm text-white/40">{formData.role || 'Flyeng Student'}</p>
                        </div>

                        <div className="pt-3 border-t border-white/5">
                            <p className="text-xs text-white/30">
                                Click avatar to upload new photo.<br/>
                                Max 5MB · Recommended: 400x400px
                            </p>
                        </div>
                    </div>

                    {/* Profile Completion Card */}
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border border-white/10 space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-white">Profile Completion</span>
                            <span className={cn(
                                "text-sm font-black",
                                completionScore >= 80 ? "text-green-400" : completionScore >= 50 ? "text-yellow-400" : "text-red-400"
                            )}>
                                {completionScore}%
                            </span>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${completionScore}%` }}
                                transition={{ duration: 1.5, ease: "circOut" }}
                                className={cn(
                                    "h-full rounded-full relative",
                                    completionScore >= 80 ? "bg-gradient-to-r from-emerald-500 to-cyan-500" :
                                    completionScore >= 50 ? "bg-gradient-to-r from-amber-500 to-orange-500" :
                                    "bg-gradient-to-r from-red-600 to-rose-600"
                                )}
                            >
                                <motion.div 
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                />
                            </motion.div>
                        </div>

                        {missingFields.length > 0 && (
                            <div className="space-y-1.5">
                                <p className="text-[11px] text-white/30 uppercase font-bold tracking-widest">Missing</p>
                                {missingFields.slice(0, 3).map(field => (
                                    <div key={field} className="flex items-center gap-2 text-xs text-white/40">
                                        <div className="w-1 h-1 bg-white/20 rounded-full" />
                                        {field}
                                    </div>
                                ))}
                                {missingFields.length > 3 && (
                                    <p className="text-[10px] text-white/20">+{missingFields.length - 3} more</p>
                                )}
                            </div>
                        )}

                        {completionScore >= 100 && (
                            <div className="flex items-center gap-2 text-green-400 text-xs font-bold">
                                <Sparkles className="w-3.5 h-3.5" />
                                Profile complete! You're all set.
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* RIGHT: FORM */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-2"
                >
                    <form onSubmit={handleSubmit} className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 space-y-5 md:space-y-6">
                        
                        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-1.5 group/input">
                                <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">Full Name *</label>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
                                    <User className="absolute left-4 top-3.5 w-4 h-4 text-white/30" />
                                    <input 
                                        type="text" 
                                        value={formData.name}
                                        onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                                        className="relative w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5 group/input">
                                <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">Email</label>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
                                    <Mail className="absolute left-4 top-3.5 w-4 h-4 text-white/30" />
                                    <input 
                                        type="email" 
                                        value={formData.email}
                                        disabled
                                        className="relative w-full bg-white/5 border border-white/5 rounded-xl pl-10 pr-4 h-11 text-white/50 cursor-not-allowed font-medium text-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5 group/input">
                                <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">Role / Title</label>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
                                    <Briefcase className="absolute left-4 top-3.5 w-4 h-4 text-white/30" />
                                    <input 
                                        type="text" 
                                        value={formData.role}
                                        onChange={(e) => setFormData(p => ({ ...p, role: e.target.value }))}
                                        className="relative w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm"
                                        placeholder="Full Stack Developer"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5 group/input">
                                <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">Phone</label>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
                                    <Phone className="absolute left-4 top-3.5 w-4 h-4 text-white/30" />
                                    <input 
                                        type="tel" 
                                        value={formData.phone}
                                        onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                                        className="relative w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                             <div className="space-y-1.5 group/input sm:col-span-2">
                                <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">College / Organization</label>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
                                    <School className="absolute left-4 top-3.5 w-4 h-4 text-white/30" />
                                    <input 
                                        type="text" 
                                        value={formData.college}
                                        onChange={(e) => setFormData(p => ({ ...p, college: e.target.value }))}
                                        className="relative w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm"
                                        placeholder="University of Technology"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1.5 group/input">
                            <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">Bio</label>
                            <div className="relative">
                                    <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
                                <FileText className="absolute left-4 top-3.5 w-4 h-4 text-white/30" />
                                <textarea 
                                    value={formData.bio}
                                    onChange={(e) => setFormData(p => ({ ...p, bio: e.target.value }))}
                                    rows={3}
                                    className="relative w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium resize-none text-sm"
                                    placeholder="Tell us about yourself, your interests, and career aspirations..."
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5 group/input">
                            <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">Career Goals</label>
                            <div className="relative">
                                    <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
                                <Target className="absolute left-4 top-3.5 w-4 h-4 text-white/30" />
                                <input 
                                    type="text" 
                                    value={formData.goals}
                                    onChange={(e) => setFormData(p => ({ ...p, goals: e.target.value }))}
                                    className="relative w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 h-11 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium text-sm"
                                    placeholder="e.g. Master React, Get a FAANG job, Learn System Design"
                                />
                                <p className="text-[10px] text-white/20 mt-1 ml-1">Separate goals with commas</p>
                            </div>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
                            <p className="text-sm text-white/40">
                                {success ? (
                                    <span className="text-green-400 font-bold flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> 
                                        Changes Saved Successfully
                                    </span>
                                ) : "Changes sync to cloud automatically."}
                            </p>
                            <Button 
                                type="submit" 
                                disabled={loading}
                                className={cn(
                                    "h-12 px-8 rounded-xl font-bold transition-all w-full sm:w-auto",
                                    success ? "bg-gradient-to-r from-emerald-400 to-green-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)]" : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] border-0"
                                )}
                            >
                                {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
                                {success ? "Saved!" : "Save Changes"}
                            </Button>
                        </div>

                    </form>
                </motion.div>
            </div>
        </div>
    )
}

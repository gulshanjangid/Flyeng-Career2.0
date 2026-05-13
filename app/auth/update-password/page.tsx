'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, Eye, EyeOff, ShieldCheck, ArrowRight, CheckCircle, AlertTriangle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase'
import { getPasswordStrength } from '@/lib/validation'
import Link from 'next/link'

function UpdatePasswordForm() {
    const router = useRouter()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [sessionReady, setSessionReady] = useState(false)
    const [sessionError, setSessionError] = useState(false)

    useEffect(() => {
        if (!supabase) {
            setSessionError(true)
            return
        }

        const checkSession = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();
            if (error) {
                console.error("Error getting session:", error);
                setSessionError(true);
            } else if (session) {
                setSessionReady(true);
            } else {
                // No session found, but no error either (e.g., initial load without a valid session)
                // This might mean the user needs to go through password recovery flow
                // For now, we'll assume if no session, it's an invalid state for password update
                setSessionError(true);
            }
        }

        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'PASSWORD_RECOVERY') {
                setSessionReady(true)
            }
            if (event === 'SIGNED_IN' && session) {
                setSessionReady(true)
            }
        })

        checkSession()
        return () => subscription.unsubscribe()
    }, [])

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        // Use proper password strength validation
        const strength = getPasswordStrength(password)
        if (strength.score < 3) {
            setError('Password is too weak. Include uppercase, lowercase, number, and special character.')
            return
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }

        if (!supabase) {
            setError('Authentication service unavailable')
            return
        }

        setLoading(true)

        try {
            const { error: updateError } = await supabase.auth.updateUser({
                password: password,
            })

            if (updateError) throw updateError

            setSuccess(true)
            await supabase.auth.signOut()
            setTimeout(() => router.push('/login'), 2500)
        } catch (err: any) {
            if (err.message?.includes('should be different')) {
                setError('New password must be different from your current password.')
            } else if (err.message?.includes('session')) {
                setError('Your reset link has expired. Please request a new one.')
                setSessionError(true)
            } else {
                setError(err.message || 'Failed to update password. Please try again.')
            }
        } finally {
            setLoading(false)
        }
    }

    const strength = getPasswordStrength(password)

    // ─── Success State ───
    if (success) {
        return (
            <div className="animate-fade-in-up flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Password Updated!</h2>
                    <p className="text-white/60">Your password has been changed successfully.</p>
                    <p className="text-white/40 text-sm mt-2">Redirecting you to login...</p>
                </div>
                <div className="w-8 h-1 rounded-full bg-green-500/50 animate-pulse" />
            </div>
        )
    }

    // ─── Session Error ───
    if (sessionError) {
        return (
            <div className="animate-fade-in-up flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <AlertTriangle className="w-10 h-10 text-amber-400" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Session Expired</h2>
                    <p className="text-white/60 max-w-sm">
                        Your password reset link has expired or is invalid. Please request a new one.
                    </p>
                </div>
                <Link href="/forgot-password">
                    <Button className="bg-white text-black hover:bg-gray-200 h-12 rounded-xl font-bold px-8">
                        Request New Link <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </Link>
            </div>
        )
    }

    // ─── Waiting for Session ───
    if (!sessionReady) {
        return (
            <div className="animate-fade-in-up flex flex-col items-center justify-center text-center space-y-6">
                <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
                <div>
                    <h2 className="text-xl font-bold text-white mb-1">Verifying Reset Link</h2>
                    <p className="text-white/50 text-sm">Please wait while we verify your identity...</p>
                </div>
            </div>
        )
    }

    // ─── Main Form ───
    return (
        <div className="animate-fade-in-up space-y-6 w-full">
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                    <ShieldCheck className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">New Password</h2>
                    <p className="text-white/50 text-sm">Choose a strong, unique password</p>
                </div>
            </div>

            {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-200 text-sm font-medium text-center animate-fade-in-up">
                    {error}
                </div>
            )}

            <form onSubmit={handleUpdate} className="space-y-5">
                {/* Password */}
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">New Password</label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 focus:bg-white/10 focus:border-cyan-500/50 rounded-xl pl-11 pr-12 h-12 text-white placeholder:text-white/20 outline-none transition-all font-medium"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-white/30 hover:text-white/60 transition-colors">
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                    </div>

                    {/* Strength Meter */}
                    {password && (
                        <div className="space-y-2 mt-2 animate-fade-in-up">
                            <div className="flex gap-1">
                                {[0, 1, 2, 3, 4].map(i => (
                                    <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= strength.score - 1 ? (strength.score <= 2 ? 'bg-red-500' : strength.score === 3 ? 'bg-amber-500' : 'bg-emerald-500') : 'bg-white/10'}`} />
                                ))}
                            </div>
                            <p className={`text-[10px] font-bold uppercase tracking-wider ${strength.score <= 2 ? 'text-red-400' : strength.score === 3 ? 'text-amber-400' : 'text-emerald-400'}`}>
                                {strength.label}
                            </p>
                            <div className="grid grid-cols-1 gap-0.5">
                                {strength.checks.map(c => (
                                    <div key={c.label} className="flex items-center gap-1.5">
                                        <div className={`w-3 h-3 rounded-full flex items-center justify-center ${c.passed ? 'bg-emerald-500/20' : 'bg-white/5'}`}>
                                            {c.passed && <CheckCircle className="w-2 h-2 text-emerald-400" />}
                                        </div>
                                        <span className={`text-[10px] ${c.passed ? 'text-emerald-400/80' : 'text-white/25'}`}>{c.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Confirm Password */}
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Confirm Password</label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            className={`w-full bg-white/5 border rounded-xl pl-11 pr-4 h-12 text-white placeholder:text-white/20 outline-none transition-all font-medium ${confirmPassword && confirmPassword !== password ? 'border-red-500/40' : 'border-white/10 focus:border-cyan-500/50'}`}
                        />
                    </div>
                    {confirmPassword && confirmPassword !== password && (
                        <p className="text-[10px] text-red-400 font-medium ml-1">Passwords do not match</p>
                    )}
                    {confirmPassword && confirmPassword === password && confirmPassword.length > 0 && (
                        <p className="text-[10px] text-emerald-400 font-medium ml-1 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" /> Passwords match
                        </p>
                    )}
                </div>

                <Button
                    type="submit"
                    disabled={loading || strength.score < 3 || password !== confirmPassword}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white h-14 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
                >
                    {loading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        <>Update Password <ArrowRight className="w-4 h-4" /></>
                    )}
                </Button>
            </form>

            <div className="text-center pt-2">
                <Link href="/login" className="text-sm text-white/40 hover:text-cyan-400 transition-colors">
                    Back to Login
                </Link>
            </div>
        </div>
    )
}

export default function UpdatePasswordPage() {
    return (
        <div className="min-h-screen bg-[#030014] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/10 blur-[80px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[80px]" />
            </div>

            <div className="w-full max-w-md relative z-10">
                <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.5)] p-8 md:p-10">
                    <Suspense fallback={
                        <div className="flex items-center justify-center py-12">
                            <Loader2 className="w-6 h-6 text-cyan-400 animate-spin" />
                        </div>
                    }>
                        <UpdatePasswordForm />
                    </Suspense>
                </div>

                {/* Footer */}
                <p className="text-center text-white/20 text-xs mt-6">
                    Protected by Flyeng Career Security
                </p>
            </div>
        </div>
    )
}
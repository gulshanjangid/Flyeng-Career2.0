'use client'

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Mail, ArrowRight, Chrome, AlertTriangle, CheckCircle, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { motion, AnimatePresence } from "framer-motion"
import { validateEmail } from "@/lib/validation"
import { getClientURL } from "@/lib/get-url"

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)

    const handleGoogleLogin = async () => {
        if (!supabase) return
        try {
            await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `${getClientURL()}/auth/callback?next=/dashboard`,
                    queryParams: { access_type: 'offline', prompt: 'consent' },
                }
            })
        } catch (err) {
            console.error("Google Login Error:", err)
        }
    }

    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        setSuccess(false)

        const emailError = validateEmail(email)
        if (emailError) {
            setError(emailError)
            setLoading(false)
            return
        }

        if (!supabase) {
            setError("Supabase not initialized")
            setLoading(false)
            return
        }

        try {
            const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${getClientURL()}/auth/update-password`,
            })

            if (resetError) throw resetError
            setSuccess(true)
        } catch (err: any) {
            console.error("Reset Password Error:", err)
            if (err.message?.includes('rate') || err.code === 'over_email_send_rate_limit') {
                setError("Too many requests. Supabase limits to 3 emails/hour on the free plan. Please wait and try again.")
            } else {
                setError(err.message || "Failed to send reset email. Please try again.")
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#030014] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Back to Login Button */}
            <Link
                href="/login"
                className="absolute top-8 left-8 z-50 flex items-center gap-2 text-white/60 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10"
            >
                <ChevronLeft className="w-4 h-4" />
                <span>Back to Login</span>
            </Link>

            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/15 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative z-10"
            >
                <div className="p-8">
                    <div className="text-center space-y-2 mb-8">
                        <h2 className="text-3xl font-bold text-white">Reset Password</h2>
                        <p className="text-white/50 text-sm">Enter your email to receive a reset link</p>
                    </div>

                    {/* ERROR */}
                    <AnimatePresence>
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mb-6 rounded-xl bg-red-500/10 border border-red-500/20 p-4 flex items-start gap-3 overflow-hidden"
                            >
                                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <p className="text-red-200 text-sm">{error}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {success ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center space-y-6"
                        >
                            <div className="w-20 h-20 bg-cyan-500/15 rounded-full flex items-center justify-center mx-auto relative">
                                <Mail className="w-9 h-9 text-cyan-400" />
                                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-white">Check your inbox!</h3>
                                <p className="text-white/50 text-sm">We've sent a password reset link to <strong className="text-white/80">{email}</strong></p>
                            </div>

                            {/* Tips */}
                            <div className="space-y-2 text-left">
                                <div className="flex items-center gap-2 text-white/40 text-xs">
                                    <CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0" />
                                    <span>Check your spam/junk folder if you don't see it</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/40 text-xs">
                                    <Clock className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                                    <span>The link expires in 1 hour</span>
                                </div>
                            </div>

                            {/* Google alternative */}
                            <div className="pt-2 space-y-3">
                                <div className="relative flex items-center">
                                    <div className="flex-grow border-t border-white/5"></div>
                                    <span className="flex-shrink-0 mx-3 text-white/20 text-xs">or</span>
                                    <div className="flex-grow border-t border-white/5"></div>
                                </div>
                                <button
                                    onClick={handleGoogleLogin}
                                    className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2.5 text-sm font-medium transition-all"
                                >
                                    <Chrome className="w-4 h-4" /> Sign in with Google instead
                                </button>
                            </div>

                            <Button asChild className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-xl transition-all">
                                <Link href="/login">Return to Login</Link>
                            </Button>
                        </motion.div>
                    ) : (
                        <div className="space-y-5">
                            <form onSubmit={handleReset} className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-white/30 focus:bg-white/10 focus:border-cyan-500/40 outline-none transition-all font-medium"
                                            required
                                        />
                                    </div>
                                </div>
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-900/20"
                                >
                                    {loading ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Sending...</span>
                                        </div>
                                    ) : (
                                        <>Send Reset Link <ArrowRight className="w-4 h-4" /></>
                                    )}
                                </Button>
                            </form>

                            {/* Google Sign-In Alternative */}
                            <div className="space-y-3">
                                <div className="relative flex items-center">
                                    <div className="flex-grow border-t border-white/5"></div>
                                    <span className="flex-shrink-0 mx-3 text-white/20 text-[10px] uppercase tracking-widest">signed up with google?</span>
                                    <div className="flex-grow border-t border-white/5"></div>
                                </div>
                                <button
                                    onClick={handleGoogleLogin}
                                    className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2.5 text-sm font-medium transition-all"
                                >
                                    <Chrome className="w-4 h-4" /> Sign in with Google instead
                                </button>
                                <p className="text-white/25 text-[11px] text-center">If you signed up with Google, no password was set. Use Google to sign in directly.</p>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    )
}

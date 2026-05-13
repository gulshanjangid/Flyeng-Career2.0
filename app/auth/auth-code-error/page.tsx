"use client"

import Link from "next/link"
import { AlertTriangle, Chrome, RefreshCcw, Mail, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { motion } from "framer-motion"
import { supabase } from "@/lib/supabase"
import { getClientURL } from "@/lib/get-url"

function ErrorContent() {
    const searchParams = useSearchParams()
    const error = searchParams.get("error")

    const handleGoogleLogin = async () => {
        if (!supabase) return
        try {
            await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `${getClientURL()}/auth/callback?next=/dashboard&mode=login`,
                    queryParams: { access_type: 'offline', prompt: 'consent' },
                }
            })
        } catch (err) {
            console.error("Google Login Error:", err)
        }
    }

    // Categorise the error for a friendly message + hint
    const getErrorInfo = (error: string | null): { title: string; message: string; hint: string; icon: 'expired' | 'browser' | 'generic' } => {
        if (!error) return {
            title: "Authentication Failed",
            message: "An unknown error occurred during sign-in.",
            hint: "Please try signing in again.",
            icon: 'generic'
        }

        const e = error.toLowerCase()

        if (e.includes("code challenge") || e.includes("code verifier") || e.includes("pkce")) {
            return {
                title: "Link Opened in Wrong Browser",
                message: "The sign-in link was opened in a different browser or device than where you requested it.",
                hint: "This happens when Gmail opens links in its built-in browser. Please use Google Sign-In below instead — it works reliably on all devices.",
                icon: 'browser'
            }
        }
        if (e.includes("expired") || e.includes("otp_expired")) {
            return {
                title: "Link Expired",
                message: "Your authentication link has expired.",
                hint: "Sign-in links are only valid for a few minutes. Please try again.",
                icon: 'expired'
            }
        }
        if (e.includes("already used") || e.includes("already_used")) {
            return {
                title: "Link Already Used",
                message: "This sign-in link has already been used.",
                hint: "Each sign-in link can only be used once. Please start a new sign-in from the login page.",
                icon: 'expired'
            }
        }
        if (e.includes("invalid") || e.includes("not_found")) {
            return {
                title: "Invalid Link",
                message: "The authentication link is invalid or malformed.",
                hint: "Please request a new sign-in from the login page.",
                icon: 'generic'
            }
        }

        return {
            title: "Authentication Failed",
            message: error,
            hint: "Please try signing in again using one of the options below.",
            icon: 'generic'
        }
    }

    const info = getErrorInfo(error)

    const HintIcon = info.icon === 'browser' ? Chrome : info.icon === 'expired' ? Clock : AlertTriangle

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full space-y-4"
        >
            {/* Main Card */}
            <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 text-center space-y-6">
                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-red-500/15 flex items-center justify-center mx-auto relative">
                    <AlertTriangle className="w-9 h-9 text-red-400" />
                    <div className="absolute inset-0 bg-red-500/10 rounded-full blur-xl animate-pulse" />
                </div>

                {/* Text */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-white">{info.title}</h1>
                    <p className="text-white/50 text-sm">{info.message}</p>
                </div>

                {/* Hint Box */}
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-left flex items-start gap-3">
                    <HintIcon className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-amber-200/80 text-xs leading-relaxed">{info.hint}</p>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-1">
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full bg-white hover:bg-gray-100 text-black py-3.5 px-4 rounded-xl flex items-center justify-center gap-2.5 text-sm font-bold transition-all active:scale-[0.98]"
                    >
                        <Chrome className="w-4 h-4" /> Sign in with Google
                    </button>

                    <Button asChild className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2">
                        <Link href="/login">
                            <RefreshCcw className="w-4 h-4" /> Back to Login
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Bottom Link */}
            <p className="text-center text-white/30 text-sm">
                New here?{" "}
                <Link href="/signup" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                    Create an account
                </Link>
            </p>
        </motion.div>
    )
}

export default function AuthErrorPage() {
    return (
        <div className="min-h-screen bg-[#030014] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Back nav */}
            <Link href="/login" className="absolute top-8 left-8 z-50 group">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md group-hover:bg-white/10 group-hover:border-cyan-500/30 transition-all duration-300">
                    <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium text-white/80 group-hover:text-white">Back to Login</span>
                </div>
            </Link>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
                <ErrorContent />
            </Suspense>
        </div>
    )
}

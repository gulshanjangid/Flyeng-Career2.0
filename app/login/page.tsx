'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Eye, EyeOff, Mail, Lock, Chrome, ChevronLeft, Shield, AlertCircle, Sparkles, ArrowRight, Info } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { loginUser } from "@/lib/user-service"
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from "framer-motion"
import { LoginSchema, mapAuthError } from "@/lib/validation"
import { getClientURL } from "@/lib/get-url"
import { cn } from "@/lib/utils"
import { Confetti } from "@/components/ui/confetti"

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [isOAuthUser, setIsOAuthUser] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  // Read redirect target from URL (set by middleware for protected routes)
  const [redirectTo, setRedirectTo] = useState('/dashboard')

  useEffect(() => {
    if (!supabase) {
      setError("System Configuration Error: Supabase client is missing.")
    }

    const params = new URLSearchParams(window.location.search)

    // Capture redirect destination
    const redirect = params.get('redirect')
    if (redirect) setRedirectTo(redirect)

    // Check for errors in URL (e.g. from callback)
    const urlError = params.get('error')
    if (urlError) {
      setError(urlError)
      window.history.replaceState({}, '', '/login')
    }
  }, [])

  const handleGoogleLogin = async () => {
    setLoading(true)
    setError("")
    setIsOAuthUser(false)

    if (!supabase) {
       setError("Authentication unavailable.")
       setLoading(false)
       return
    }

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${getClientURL()}/auth/callback?next=/dashboard&mode=login`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        }
      })
      if (error) throw error
    } catch (err: any) {
      console.error("Google Sign In Error:", err)
      setError("Failed to sign in. Please try again.")
      setLoading(false)
    }
  }

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setIsOAuthUser(false)

    // Zod Validation
    const validationResult = LoginSchema.safeParse(formData)
    if (!validationResult.success) {
      setError(validationResult.error.errors[0].message)
      setLoading(false)
      return
    }

    if (!supabase) {
      setError("Supabase not initialized")
      setLoading(false)
      return
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      })

      if (error) {
        // Check if this is an OAuth-only user (signed up via Google, no password)
        if (error.message?.includes("Invalid login credentials")) {
          const { data: userData } = await supabase
            .from('users')
            .select('email')
            .eq('email', formData.email)
            .maybeSingle()

          if (userData) {
            // User exists in DB but password login failed — likely OAuth user
            setIsOAuthUser(true)
            setLoading(false)
            return
          }
        }
        throw error
      }

      const user = data.user
      if (user) {
        // [RESCUE SCRIPT] Check for bloated user_metadata (which causes 431 Request Header Too Large Error)
        const metaStr = JSON.stringify(user.user_metadata || {})
        if (metaStr.length > 5000) {
            console.warn("Detected massive user_metadata. Stripping fields to prevent HTTP 431 errors...");
            await supabase.auth.updateUser({ 
              data: { avatar_url: null, picture: null, photo: null } 
            });
            await supabase.auth.refreshSession();
        }

        await loginUser(formData.email)
        setSuccess(true)
        setTimeout(() => router.push(redirectTo), 2200)
      }

    } catch (err: any) {
      console.error("Login Error:", err)
      setError(mapAuthError(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-cyan-500/30">

      {success && <Confetti />}

      {/* FULL SCREEN SUCCESS OVERLAY */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030014]/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
              className="text-center space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', bounce: 0.6, delay: 0.2 }}
                className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-[0_0_60px_rgba(34,197,94,0.4)]"
              >
                <Sparkles className="w-12 h-12 text-white" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl font-black text-white"
              >
                Welcome Back! 🎉
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white/50 text-sm"
              >
                Redirecting to your dashboard...
              </motion.p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'linear' }}
                className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mx-auto max-w-[200px]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAV */}
      <Link href="/" className="absolute top-8 left-8 z-50 group">
        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md group-hover:bg-white/10 group-hover:border-cyan-500/30 transition-all duration-300">
          <ChevronLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium text-white/80 group-hover:text-white">Back to Home</span>
        </div>
      </Link>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center relative z-10 px-4 md:px-0">

        {/* LEFT: TEXT CONTENT (2 Cols) */}
        <div className="lg:col-span-2 hidden lg:flex flex-col justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
              <Shield className="w-3 h-3" /> Secure Access
            </div>
            <h1 className="text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Welcome <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 animate-gradient-x">Back.</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed border-l-2 border-white/10 pl-6">
              Your mission control is ready. Resume your learning journey and track your progress.
            </p>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="grid grid-cols-2 gap-4 pt-4"
          >
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
              <div className="text-2xl font-bold text-white mb-1">2.4k+</div>
              <div className="text-xs text-white/40 uppercase tracking-wider font-semibold">Active Users</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
              <div className="text-2xl font-bold text-cyan-400 mb-1">100%</div>
              <div className="text-xs text-white/40 uppercase tracking-wider font-semibold">Uptime</div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: LOGIN CARD (3 Cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:col-span-3 lg:w-auto"
        >
          <div className="relative group perspective-1000">
            {/* GLOW BEHIND CARD */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[#000]/80 rounded-3xl" />

              <div className="relative z-10 p-6 md:p-12">

                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-white mb-2">Sign In</h2>
                  <p className="text-white/40 text-sm">Enter your credentials to access the dashboard.</p>
                </div>

                {/* ERROR MSG */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginBottom: 24 }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      className="rounded-xl bg-red-500/10 border border-red-500/20 p-4 flex items-center gap-3 overflow-hidden"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                      <p className="text-red-200 text-sm font-medium">{error}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* OAUTH USER DETECTED BANNER */}
                <AnimatePresence>
                  {isOAuthUser && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginBottom: 24 }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      className="rounded-xl bg-blue-500/10 border border-blue-500/25 p-4 overflow-hidden"
                    >
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                        <div className="space-y-3">
                          <div>
                            <p className="text-blue-200 text-sm font-semibold">This account uses Google Sign-In</p>
                            <p className="text-blue-200/70 text-xs mt-1">You signed up with Google, so there's no password set. Please use Google Sign-In below.</p>
                          </div>
                          <button
                            onClick={handleGoogleLogin}
                            className="text-xs bg-white text-black hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 font-bold"
                          >
                            <Chrome className="w-3.5 h-3.5" /> Sign in with Google
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* MAIN LOGIN AREA */}
                <div className="space-y-6">
                  {/* GOOGLE BTN */}
                  <Button
                    onClick={handleGoogleLogin}
                    disabled={loading || success}
                    id="google-signin-btn"
                    className="w-full bg-white text-black hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 h-14 rounded-xl font-bold flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    {loading && !success ? <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" /> : <Chrome className="w-5 h-5" />}
                    <span>Sign in with Google</span>
                  </Button>

                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-white/5"></div>
                    <span className="flex-shrink-0 mx-4 text-white/20 text-xs font-medium uppercase tracking-widest">Or sign in with email</span>
                    <div className="flex-grow border-t border-white/5"></div>
                  </div>

                  {/* EMAIL/PASSWORD FORM */}
                  <form onSubmit={handleEmailLogin} className="space-y-5" id="email-login-form">
                    <div className="space-y-1.5 group/input">
                      <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within/input:text-cyan-400 transition-colors" />
                        <input
                          id="email-input"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          disabled={loading || success}
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 h-12 text-white placeholder:text-white/20 outline-none focus:bg-white/10 focus:border-cyan-500/50 transition-all font-medium"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 group/input">
                      <div className="flex justify-between items-center ml-1">
                        <label className="text-xs font-bold text-white/40 uppercase tracking-widest group-focus-within/input:text-cyan-400 transition-colors">Password</label>
                        <Link href="/forgot-password" className="text-xs text-white/30 hover:text-cyan-400 transition-colors">Forgot?</Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within/input:text-cyan-400 transition-colors" />
                        <input
                          id="password-input"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          disabled={loading || success}
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-12 h-12 text-white placeholder:text-white/20 outline-none focus:bg-white/10 focus:border-cyan-500/50 transition-all font-medium"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      id="email-signin-btn"
                      disabled={loading || success}
                      className={cn(
                        "w-full h-12 rounded-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-900/20 transition-all duration-300",
                        (loading || success) && "opacity-80"
                      )}
                    >
                      {loading && !success ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Authenticating...</span>
                        </div>
                      ) : success ? (
                         <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" />
                          <span>Welcome Back!</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span>Sign In</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      )}
                    </Button>
                  </form>

                  <div className="text-center">
                    <p className="text-sm text-white/40">
                      New to Flyeng?{" "}
                      <Link href="/signup" className="text-cyan-400 hover:text-cyan-300 font-semibold hover:underline">
                        Create an account
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
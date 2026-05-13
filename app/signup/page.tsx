'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Check, User, Briefcase, Target, ChevronLeft, Sparkles, Chrome, AlertCircle, Shield, School, Mail, Eye, EyeOff, Phone, Rocket, Code, BookOpen, Users, Globe, Brain, Lightbulb, Search, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { registerUser, isUserRegistered } from "@/lib/user-service"
import { motion, AnimatePresence } from "framer-motion"
import { SignupSchema, SignupSchemaBase, mapAuthError, getPasswordStrength } from "@/lib/validation"
import { cn } from "@/lib/utils"
import { getClientURL } from "@/lib/get-url"
import { Confetti } from "@/components/ui/confetti"

type Step = 'signup' | 'profile' | 'goals' | 'success'

// --- PREMIUM COMPONENTS ---

function StepIndicator({ current, step }: { current: Step, step: Step }) {
  const steps: Step[] = ['signup', 'profile', 'goals', 'success']
  const ci = steps.indexOf(current)
  const si = steps.indexOf(step)

  const isDone = ci > si
  const isActive = current === step

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 border-2",
        isDone
          ? "bg-cyan-500 border-cyan-400 text-white scale-90"
          : isActive
            ? "bg-cyan-500/20 border-cyan-500 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-110"
            : "bg-white/5 border-white/10 text-white/30"
      )}>
        {isDone ? <Check className="w-3.5 h-3.5" /> : si + 1}
      </div>
      <span className={cn("text-[9px] font-bold uppercase tracking-widest", isActive ? "text-cyan-400" : isDone ? "text-white/60" : "text-white/20")}>
        {step === 'signup' ? 'Account' : step === 'profile' ? 'Profile' : step === 'goals' ? 'Goals' : 'Done'}
      </span>
    </div>
  )
}

function GlassCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn(
      "relative bg-white/[0.02] backdrop-blur-2xl border border-white/[0.06] rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.5)] overflow-hidden",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />
      {children}
    </div>
  )
}

// --- PASSWORD STRENGTH METER ---
function PasswordStrengthMeter({ password }: { password: string }) {
  const { score, label, checks } = getPasswordStrength(password)
  if (!password) return null

  const colors = ['bg-red-500', 'bg-red-500', 'bg-orange-500', 'bg-amber-500', 'bg-emerald-500']
  const textColors = ['text-red-400', 'text-red-400', 'text-orange-400', 'text-amber-400', 'text-emerald-400']

  return (
    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-2 mt-2">
      {/* Bar */}
      <div className="flex gap-1">
        {[0, 1, 2, 3, 4].map(i => (
          <div key={i} className={cn("h-1 flex-1 rounded-full transition-all duration-500", i <= score - 1 ? colors[score] : 'bg-white/10')} />
        ))}
      </div>
      <p className={cn("text-[10px] font-bold uppercase tracking-wider", textColors[score])}>{label}</p>
      {/* Requirements */}
      <div className="grid grid-cols-1 gap-0.5">
        {checks.map(c => (
          <div key={c.label} className="flex items-center gap-1.5">
            <div className={cn("w-3 h-3 rounded-full flex items-center justify-center", c.passed ? 'bg-emerald-500/20' : 'bg-white/5')}>
              {c.passed && <Check className="w-2 h-2 text-emerald-400" />}
            </div>
            <span className={cn("text-[10px]", c.passed ? 'text-emerald-400/80' : 'text-white/25')}>{c.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// ---------------------------

// --- GOALS CONFIG ---
const GOAL_OPTIONS = [
  { id: 'resume', label: 'Resume Building', icon: Briefcase, desc: 'Craft ATS-friendly resumes' },
  { id: 'interview', label: 'Interview Prep', icon: Users, desc: 'Mock interviews & tips' },
  { id: 'jobsearch', label: 'Job Search', icon: Search, desc: 'Find perfect opportunities' },
  { id: 'dsa', label: 'DSA & Algorithms', icon: Code, desc: 'Data structures mastery' },
  { id: 'systemdesign', label: 'System Design', icon: Brain, desc: 'Architect scalable systems' },
  { id: 'frontend', label: 'Frontend / React', icon: Globe, desc: 'Modern web development' },
  { id: 'backend', label: 'Backend / APIs', icon: Zap, desc: 'Server-side engineering' },
  { id: 'fullstack', label: 'Full Stack', icon: Rocket, desc: 'End-to-end development' },
  { id: 'ml', label: 'AI / ML', icon: Sparkles, desc: 'Machine learning & AI' },
  { id: 'faang', label: 'FAANG Prep', icon: Target, desc: 'Crack top tech companies' },
  { id: 'placement', label: 'Campus Placement', icon: School, desc: 'College to career' },
  { id: 'learning', label: 'Skill Development', icon: BookOpen, desc: 'Continuous learning' },
]

export default function SignupPage() {
  const router = useRouter()
  const [step, setStep] = useState<Step>('signup')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [isGoogleUser, setIsGoogleUser] = useState(false)
  const [needsEmailConfirmation, setNeedsEmailConfirmation] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    photo: "",
    role: "student",
    goals: [] as string[],
    phone: "",
    age: "",
    gender: "",
    college: "",
  })

  useEffect(() => {
    if (!supabase) {
      console.error("⚠️ Supabase keys missing.");
      setError("System Configuration Error: Supabase client is missing.")
    } else {
      const checkSession = async () => {
        if (!supabase) return;
        const { data: { user } } = await supabase.auth.getUser()

        const params = new URLSearchParams(window.location.search)
        const stepParam = params.get('step')

        if (user) {
          setIsGoogleUser(true)
          setFormData(prev => ({
            ...prev,
            email: user.email || prev.email,
            name: user.user_metadata?.name || user.user_metadata?.full_name || prev.name,
            photo: user.user_metadata?.avatar_url || user.user_metadata?.picture || prev.photo
          }))

          // Handle both ?step=profile (new direct redirect) and legacy flows
          if (stepParam === 'profile' || stepParam) {
            setStep('profile')
            // Clean the URL without losing browser history
            window.history.replaceState({}, '', '/signup')
          } else {
            const registered = await isUserRegistered(user.email!)
            if (registered) {
              router.push('/dashboard')
            } else {
              // New Google user with no profile — go to profile step
              setStep('profile')
            }
          }
        }
      }
      checkSession()
    }
  }, []);

  const handleGoogleSignup = async () => {
    setLoading(true)
    setError("")

    if (!supabase) {
        setError("System Error: Supabase client missing.")
        setLoading(false)
        return
    }

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${getClientURL()}/auth/callback?next=/signup`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        }
      })
      if (error) throw error
    } catch (err: any) {
      console.error("Google Sign In Error:", err)
      setError(mapAuthError(err))
      setLoading(false)
    }
  }

  const handleNext = () => {
    setError("")

    if (step === 'profile') {
      if (!formData.name || formData.name.trim().length < 2) { setError("Name must be at least 2 characters"); return; }
      if (formData.name.length > 50) { setError("Name must be under 50 characters"); return; }
      if (!formData.age || parseInt(formData.age) < 13 || parseInt(formData.age) > 100) { setError("Please enter a valid age (13-100)"); return; }
      if (!formData.gender) { setError("Please select your gender"); return; }
      if (!formData.role) { setError("Please select your current status"); return; }
      if (formData.phone && !/^[\+]?[\d\s\-()]{7,15}$/.test(formData.phone.trim())) { setError("Please enter a valid phone number"); return; }

      setStep('goals')
    } else if (step === 'goals') {
      if (formData.goals.length === 0) {
        setError("Please select at least one goal");
        return;
      }
      handleCompleteSignup()
    }
  }

  const handleBack = () => {
    setError("");
    if (step === 'profile' && !isGoogleUser) setStep('signup')
    else if (step === 'goals') setStep('profile')
  }

  const handleCompleteSignup = async () => {
    setLoading(true)
    setError("")

    if (!supabase) return

    try {
      let user = (await supabase.auth.getUser()).data.user
      let session = (await supabase.auth.getSession()).data.session

      if (!user && formData.email && formData.password) {
        // Validate email
        const emailSchema = SignupSchemaBase.shape.email
        const emailCheck = emailSchema.safeParse(formData.email)
        if (!emailCheck.success) throw { message: emailCheck.error.errors[0].message }

        // Validate password
        const pwdStrength = getPasswordStrength(formData.password)
        if (pwdStrength.score < 3) throw { message: "Password is too weak. Please add more complexity." }

        // Confirm password
        if (formData.password !== formData.confirmPassword) throw { message: "Passwords do not match" }

        const { data, error: signUpError } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            emailRedirectTo: `${getClientURL()}/auth/callback`,
            data: {
              name: formData.name,
              role: formData.role,
              age: formData.age,
              gender: formData.gender,
              goals: formData.goals,
              college: formData.college,
              phone: formData.phone
            }
          }
        })

        if (signUpError) {
          if (signUpError.message.includes("User already registered") || signUpError.message.includes("email already in use")) {
            const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
              email: formData.email,
              password: formData.password
            })
            if (signInError) {
              setError("Account exists, but password was incorrect.")
              setLoading(false)
              return
            }
            user = signInData.user
            session = signInData.session
          } else {
            throw signUpError
          }
        } else {
          user = data.user
          session = data.session
        }
      }

      if (!user) {
        setError("Something went wrong. Please try again.")
        setLoading(false)
        return
      }

      // [RESCUE SCRIPT] Check for bloated user_metadata (which causes 431 Request Header Too Large Error)
      const metaStr = JSON.stringify(user.user_metadata || {})
      if (metaStr.length > 5000) {
          console.warn("Detected massive user_metadata on signup. Stripping fields to prevent HTTP 431 errors...");
          await supabase.auth.updateUser({ 
            data: { avatar_url: null, picture: null, photo: null } 
          });
          await supabase.auth.refreshSession();
      }

      if (!session) {
        setNeedsEmailConfirmation(true)
        setStep('success')
        return
      }

      await registerUser({
        email: formData.email || user.email!,
        name: formData.name,
        photo: formData.photo || user.user_metadata?.avatar_url || "",
        role: formData.role,
        goals: formData.goals,
        age: formData.age,
        gender: formData.gender,
        phone: formData.phone,
        college: formData.college,
      });

      setStep('success');

    } catch (err: any) {
      console.error("Signup Error:", err)
      setError(mapAuthError(err));
    } finally {
      setLoading(false)
    }
  }

  const toggleGoal = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal) ? prev.goals.filter(g => g !== goal) : [...prev.goals, goal],
    }))
  }

  // --- ANIMATIONS ---
  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 50 : -50, opacity: 0 }),
  };

  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-cyan-500/30">

      {/* NAV */}
      <Link href="/" className="absolute top-8 left-8 z-50 group">
        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md group-hover:bg-white/10 group-hover:border-cyan-500/30 transition-all duration-300">
          <ChevronLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium text-white/80 group-hover:text-white">Back to Home</span>
        </div>
      </Link>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 px-4 md:px-0">

        {/* LEFT: INFO & STEPS (5 Cols) */}
        <div className="lg:col-span-5 hidden lg:flex flex-col justify-center h-full space-y-8 md:space-y-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
              <Sparkles className="w-3 h-3" /> Premium Engineering Series
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-[1.15] tracking-tight">
              Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 animate-gradient-x">Future Career</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-md">
              Join the elite community of engineers mastering Data Structures, Algorithms, and System Design.
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="flex gap-6 items-center">
            {(['signup', 'profile', 'goals', 'success'] as Step[]).map((s) => (
              <StepIndicator key={s} current={step} step={s} />
            ))}
          </div>

          {/* Security Badge */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center gap-3 text-white/30">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-medium">End-to-end encrypted • GDPR compliant • SOC 2 ready</span>
          </motion.div>
        </div>

        {/* RIGHT: INTERACTIVE FORM (7 Cols) */}
        <div className="lg:col-span-7 h-full">
          <GlassCard className="min-h-[600px] flex flex-col h-full">
            <div className="p-6 md:p-12 flex-1 flex flex-col">

              {/* HEADER */}
              <div className="flex justify-between items-center mb-6">
                {step !== 'signup' && step !== 'success' && !(step === 'profile' && isGoogleUser) && (
                  <button onClick={handleBack} className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                    <ChevronLeft className="w-4 h-4" /> Back
                  </button>
                )}
                {step === 'signup' && (
                  <Link href="/login" className="text-sm font-medium text-white/40 hover:text-cyan-400 transition-colors ml-auto flex items-center gap-1">
                    Sign In <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </div>

              {/* CONTENT AREA */}
              <div className="flex-1 relative">
                <AnimatePresence custom={1} mode="wait">

                  {/* --- STEP 1: SIGNUP --- */}
                  {step === 'signup' && (
                    <motion.div key="signup" variants={slideVariants} initial="enter" animate="center" exit="exit" className="space-y-6">
                      <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-white">Create Account</h2>
                        <p className="text-white/50">Start your journey with a free account.</p>
                      </div>

                      <AnimatePresence>
                        {error && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-200 text-sm font-medium text-center">{error}</motion.div>}
                      </AnimatePresence>

                      <div className="space-y-5">
                        <Button onClick={handleGoogleSignup} disabled={loading} className="w-full bg-white text-black hover:bg-gray-100 h-14 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-white/5 transition-transform active:scale-[0.98]">
                          <Chrome className="w-5 h-5" /> Sign up with Google
                        </Button>

                        <div className="relative flex items-center py-2">
                          <div className="flex-grow border-t border-white/5"></div>
                          <span className="flex-shrink-0 mx-4 text-white/20 text-xs font-medium uppercase tracking-widest">Or email</span>
                          <div className="flex-grow border-t border-white/5"></div>
                        </div>

                        <form onSubmit={(e) => {
                          e.preventDefault();
                          setError("")
                          if (!formData.name || formData.name.trim().length < 2) { setError("Name must be at least 2 characters"); return; }
                          if (!formData.email || !formData.password) { setError("All fields are required"); return; }

                          // Email check
                          const emailCheck = SignupSchemaBase.shape.email.safeParse(formData.email)
                          if (!emailCheck.success) { setError(emailCheck.error.errors[0].message); return; }

                          // Password strength
                          const strength = getPasswordStrength(formData.password)
                          if (strength.score < 3) { setError("Password is too weak. Please add more complexity."); return; }

                          // Confirm password
                          if (formData.password !== formData.confirmPassword) { setError("Passwords do not match"); return; }

                          setStep('profile');
                        }} className="space-y-4">
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Full Name</label>
                            <input required type="text" placeholder="John Doe" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full bg-white/5 border border-white/10 focus:bg-white/10 focus:border-cyan-500/50 rounded-xl px-4 h-12 text-white placeholder:text-white/20 outline-none transition-all font-medium" />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Email</label>
                            <input required type="email" placeholder="john@example.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full bg-white/5 border border-white/10 focus:bg-white/10 focus:border-cyan-500/50 rounded-xl px-4 h-12 text-white placeholder:text-white/20 outline-none transition-all font-medium" />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Password</label>
                            <div className="relative">
                              <input required type={showPassword ? "text" : "password"} placeholder="••••••••" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} className="w-full bg-white/5 border border-white/10 focus:bg-white/10 focus:border-cyan-500/50 rounded-xl px-4 pr-12 h-12 text-white placeholder:text-white/20 outline-none transition-all font-medium" />
                              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-white/30 hover:text-white/60 transition-colors">
                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                              </button>
                            </div>
                            <PasswordStrengthMeter password={formData.password} />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Confirm Password</label>
                            <div className="relative">
                              <input required type={showConfirmPassword ? "text" : "password"} placeholder="••••••••" value={formData.confirmPassword} onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })} className={cn("w-full bg-white/5 border rounded-xl px-4 pr-12 h-12 text-white placeholder:text-white/20 outline-none transition-all font-medium", formData.confirmPassword && formData.confirmPassword !== formData.password ? 'border-red-500/40 focus:border-red-500/60' : 'border-white/10 focus:border-cyan-500/50')} />
                              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-white/30 hover:text-white/60 transition-colors">
                                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                              </button>
                            </div>
                            {formData.confirmPassword && formData.confirmPassword !== formData.password && (
                              <p className="text-[10px] text-red-400 font-medium ml-1">Passwords do not match</p>
                            )}
                            {formData.confirmPassword && formData.confirmPassword === formData.password && formData.confirmPassword.length > 0 && (
                              <p className="text-[10px] text-emerald-400 font-medium ml-1 flex items-center gap-1"><Check className="w-3 h-3" /> Passwords match</p>
                            )}
                          </div>

                          <Button type="submit" disabled={loading} className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10 h-12 rounded-xl font-bold mt-2 flex items-center justify-center gap-2 group">
                            Continue <ChevronLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </form>
                      </div>
                    </motion.div>
                  )}

                  {/* --- STEP 2: PROFILE --- */}
                  {step === 'profile' && (
                    <motion.div key="profile" variants={slideVariants} initial="enter" animate="center" exit="exit" className="space-y-6">
                       <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-white">Your Profile</h2>
                        <p className="text-white/50">Help us personalize your experience.</p>
                      </div>

                      <AnimatePresence>
                        {error && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-200 text-sm font-medium text-center">{error}</motion.div>}
                      </AnimatePresence>

                      <div className="space-y-5">
                        {/* Name field — always shown, pre-filled for Google users */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Full Name</label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 h-12 text-white outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-medium"
                            placeholder="Your full name"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5 group/input">
                            <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1 group-focus-within/input:text-cyan-400 transition-colors">Age</label>
                            <div className="relative">
                               <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
                               <input type="number" min="13" max="100" value={formData.age} onChange={e => setFormData({ ...formData, age: e.target.value })} className="relative w-full bg-white/5 border border-white/10 rounded-xl px-4 h-12 text-white outline-none focus:border-cyan-500/50 focus:bg-[#0a1a2a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all font-medium" placeholder="21" />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Gender</label>
                            <select value={formData.gender} onChange={e => setFormData({ ...formData, gender: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 h-12 text-white outline-none focus:border-cyan-500/50 transition-all font-medium appearance-none">
                              <option value="" className="bg-[#111] text-gray-500">Select</option>
                              <option value="male" className="bg-[#111]">Male</option>
                              <option value="female" className="bg-[#111]">Female</option>
                              <option value="other" className="bg-[#111]">Other</option>
                              <option value="prefer-not-to-say" className="bg-[#111]">Prefer not to say</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">College / Organization</label>
                            <div className="relative">
                              <School className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                              <input type="text" value={formData.college} onChange={e => setFormData({ ...formData, college: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 h-12 text-white outline-none focus:border-cyan-500/50 transition-all font-medium" placeholder="MIT, Google..." />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Phone <span className="text-white/15">(optional)</span></label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                              <input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 h-12 text-white outline-none focus:border-cyan-500/50 transition-all font-medium" placeholder="+91 98765 43210" />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Current Status</label>
                          <div className="grid gap-3">
                            {[
                              { id: 'student', label: 'Student', icon: User, desc: 'Currently studying' },
                              { id: 'graduate', label: 'Graduate', icon: Briefcase, desc: 'Looking for opportunities' },
                              { id: 'professional', label: 'Professional', icon: Target, desc: 'Working & upskilling' }
                            ].map(role => (
                              <button key={role.id} onClick={() => setFormData({ ...formData, role: role.id })} className={cn("flex items-center gap-4 p-3 rounded-xl border transition-all text-left group", formData.role === role.id ? 'bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.1)]' : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20')}>
                                <div className={cn("p-2 rounded-lg transition-colors", formData.role === role.id ? 'bg-cyan-500 text-black' : 'bg-white/10 text-white/60')}>
                                  <role.icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className={cn("font-bold text-sm transition-colors", formData.role === role.id ? 'text-cyan-300' : 'text-white')}>{role.label}</div>
                                  <div className="text-xs text-white/40">{role.desc}</div>
                                </div>
                                {formData.role === role.id && <Check className="w-4 h-4 text-cyan-400 ml-auto" />}
                              </button>
                            ))}
                          </div>
                        </div>

                        <Button onClick={handleNext} className="w-full bg-white text-black hover:bg-gray-200 h-14 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-white/10">
                          Continue <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* --- STEP 3: GOALS --- */}
                  {step === 'goals' && (
                    <motion.div key="goals" variants={slideVariants} initial="enter" animate="center" exit="exit" className="space-y-6">
                      <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-white">Your Focus</h2>
                        <p className="text-white/50">Select your goals — we'll personalize everything for you.</p>
                      </div>

                      <AnimatePresence>
                        {error && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-200 text-sm font-medium text-center">{error}</motion.div>}
                      </AnimatePresence>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {GOAL_OPTIONS.map(goal => {
                          const isActive = formData.goals.includes(goal.label);
                          return (
                            <motion.button
                              key={goal.id}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => toggleGoal(goal.label)}
                              className={cn(
                                "p-3 sm:p-4 rounded-xl border text-left transition-all duration-300 relative overflow-hidden group/goal",
                                isActive ? 'bg-gradient-to-br from-purple-500/20 to-cyan-500/10 border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.3)]' : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.08] hover:border-white/20 hover:shadow-lg'
                              )}
                            >
                              {isActive && <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent blur-md pointer-events-none" />}
                              <div className="flex items-start gap-2.5 relative z-10">
                                <div className={cn("p-1.5 rounded-lg shrink-0 transition-colors", isActive ? 'bg-purple-500/30 text-purple-300' : 'bg-white/[0.06] text-white/40')}>
                                  <goal.icon className="w-3.5 h-3.5" />
                                </div>
                                <div className="min-w-0">
                                  <div className={cn("font-bold text-xs leading-tight transition-colors", isActive ? 'text-purple-200' : 'text-white/80')}>{goal.label}</div>
                                  <div className="text-[9px] text-white/30 mt-0.5 line-clamp-1">{goal.desc}</div>
                                </div>
                              </div>
                              {isActive && (
                                <>
                                  <div className="absolute inset-0 bg-purple-500/5 blur-xl" />
                                  <div className="absolute top-1.5 right-1.5"><Check className="w-3 h-3 text-purple-400" /></div>
                                </>
                              )}
                            </motion.button>
                          )
                        })}
                      </div>

                      {formData.goals.length > 0 && (
                        <p className="text-xs text-white/30 text-center">{formData.goals.length} goal{formData.goals.length > 1 ? 's' : ''} selected</p>
                      )}

                      <div className="pt-2">
                        <Button onClick={handleNext} disabled={formData.goals.length === 0 || loading} className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white h-14 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50">
                          {loading ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>Complete Setup <Sparkles className="w-4 h-4 animate-pulse" /></>
                          )}
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* --- STEP 4: SUCCESS --- */}
                  {step === 'success' && (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", bounce: 0.5 }} className="flex flex-col items-center justify-center text-center h-full space-y-6 py-8">
                      <Confetti />
                      <div className="relative">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ 
                            scale: 1,
                            y: [0, -10, 0],
                            rotate: [0, -5, 5, 0]
                          }}
                          transition={{ 
                            type: 'spring', 
                            bounce: 0.6, 
                            delay: 0.2,
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                          }}
                          className="w-24 h-24 bg-gradient-to-br from-[#0a1a3a] to-[#1a0a2a] rounded-full flex items-center justify-center p-1 border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.4)] relative z-10"
                        >
                          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-md" />
                          {needsEmailConfirmation ? <motion.div animate={{ x: [0, 5, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}><Mail className="w-10 h-10 text-cyan-400" /></motion.div> : <Shield className="w-10 h-10 text-cyan-400" />}
                        </motion.div>
                        <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-2xl animate-pulse" />
                        <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500" />
                      </div>

                      {needsEmailConfirmation ? (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="space-y-8 w-full max-w-sm mx-auto">
                          <div className="space-y-2">
                            <h2 className="text-4xl font-black text-white tracking-tight relative z-10">Check Your Email!</h2>
                            <p className="text-white/50 text-base leading-relaxed relative z-10">
                              We sent a magic link to <span className="text-cyan-400 font-bold underline decoration-cyan-500/30 underline-offset-4">{formData.email}</span>
                            </p>
                          </div>

                          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-4 relative z-10 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="flex items-start gap-4 text-left">
                              <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-500 shrink-0">
                                <AlertCircle className="w-5 h-5" />
                              </div>
                              <div className="space-y-1">
                                <p className="text-sm font-bold text-white/90">Missing the email?</p>
                                <p className="text-xs text-white/40 leading-relaxed">It might have landed in your <span className="text-white/60 font-medium">Spam</span> or <span className="text-white/60 font-medium">Promotions</span> folder. Digital delivery can sometimes be slow.</p>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <Button onClick={() => router.push('/login')} className="w-full bg-white text-black hover:bg-cyan-50 h-14 rounded-xl font-bold text-lg transition-all relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95">
                              Proceed to Login
                            </Button>
                            <p className="text-[10px] text-white/20 uppercase font-black tracking-[0.2em]">Verified Secure by Flyeng Career</p>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="space-y-4">
                          <h2 className="text-4xl font-bold text-white relative z-10">Welcome, {formData.name.split(' ')[0]}! 🎉</h2>
                          <p className="text-white/60 max-w-xs mx-auto relative z-10">Your personalized career command center is ready.</p>

                          {/* Account Summary */}
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] max-w-xs mx-auto text-left space-y-2 relative z-10">
                            <div className="flex items-center gap-2 text-xs">
                              <User className="w-3 h-3 text-cyan-400" />
                              <span className="text-white/50">Name:</span>
                              <span className="text-white/80 font-medium">{formData.name}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                              <Target className="w-3 h-3 text-purple-400" />
                              <span className="text-white/50">Goals:</span>
                              <span className="text-white/80 font-medium">{formData.goals.length} selected</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                              <Briefcase className="w-3 h-3 text-emerald-400" />
                              <span className="text-white/50">Status:</span>
                              <span className="text-white/80 font-medium capitalize">{formData.role}</span>
                            </div>
                          </motion.div>

                          <Button onClick={() => router.push('/dashboard')} className="w-full max-w-xs bg-white text-black hover:bg-gray-200 h-14 rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all relative z-10">
                            Enter Dashboard <ArrowRight className="w-5 h-5 inline ml-2" />
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

            {/* Progress Bar (Bottom Line) */}
            <div className="h-1 bg-white/5 w-full mt-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-[0_0_10px_#06b6d4]"
                animate={{
                  width: step === 'signup' ? '25%' : step === 'profile' ? '50%' : step === 'goals' ? '75%' : '100%'
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
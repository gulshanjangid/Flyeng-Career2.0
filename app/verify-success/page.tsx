'use client'

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Rocket, ArrowRight, Shield, Mail, Zap, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Confetti } from "@/components/ui/confetti"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function VerifySuccessPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const next = searchParams.get('next') || '/dashboard'
    const [seconds, setSeconds] = useState(5)

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prev) => {
                if (prev <= 1) {
                    clearInterval(timer)
                    // Auto redirect could be annoying, maybe just leave the button?
                    // Let's keep it but make it a bit longer or obvious.
                    return 0
                }
                return prev - 1
            })
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="min-h-screen bg-[#030014] flex items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-cyan-500/30">
            {/* Ambient background effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
            
            <Confetti />

            <div className="w-full max-w-lg relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/[0.02] backdrop-blur-2xl border border-white/[0.06] rounded-[2.5rem] p-8 md:p-12 text-center shadow-[0_32px_64px_rgba(0,0,0,0.5)] overflow-hidden relative"
                >
                    {/* Top shine */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                    
                    {/* Success Icon Container */}
                    <div className="relative mb-8">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', bounce: 0.6, delay: 0.2 }}
                            className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.4)] relative z-10"
                        >
                            <Check className="w-12 h-12 text-white stroke-[3px]" />
                        </motion.div>
                        
                        {/* Pulse effects */}
                        <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl animate-pulse -z-10" />
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -inset-4 bg-purple-500/10 rounded-full blur-3xl -z-20" 
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                            <Shield className="w-3 h-3" /> Account Verified
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                            Identity <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-blue-400">Confirmed!</span>
                        </h1>
                        
                        <p className="text-white/60 text-lg leading-relaxed">
                            Your email has been verified. Welcome to the elite community of engineers.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-10"
                    >
                        <Link href={next} className="block group">
                            <Button className="w-full h-16 bg-white text-black hover:bg-cyan-50 rounded-2xl font-black text-xl shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-3 relative overflow-hidden group-hover:scale-[1.02] active:scale-[0.98]">
                                <span className="relative z-10">Proceed to Dashboard</span>
                                <Rocket className="w-6 h-6 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Button>
                        </Link>
                        
                        <p className="mt-6 text-white/30 text-sm font-medium flex items-center justify-center gap-2">
                            <Zap className="w-3.5 h-3.5 text-cyan-500" /> 
                            {seconds > 0 ? `Redirecting in ${seconds}s...` : 'Ready to launch'}
                        </p>
                    </motion.div>

                    {/* Features Footer */}
                    <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-3 gap-4">
                        <div className="space-y-1">
                            <div className="text-white font-bold text-xs uppercase tracking-tighter">AI Ready</div>
                            <div className="text-[10px] text-white/30">Analysis tools active</div>
                        </div>
                        <div className="space-y-1 border-x border-white/5">
                            <div className="text-white font-bold text-xs uppercase tracking-tighter">Premium</div>
                            <div className="text-[10px] text-white/30">Content unlocked</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-white font-bold text-xs uppercase tracking-tighter">Global</div>
                            <div className="text-[10px] text-white/30">Network synced</div>
                        </div>
                    </div>
                </motion.div>

                {/* Back Link */}
                <div className="text-center mt-8">
                    <Link href="/" className="text-white/40 hover:text-white transition-colors text-sm font-medium flex items-center justify-center gap-2">
                        <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

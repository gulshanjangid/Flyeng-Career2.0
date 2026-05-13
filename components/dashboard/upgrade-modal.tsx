"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Zap, Shield, Crown, CreditCard, Loader2, Tag, ArrowRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Confetti from "react-confetti"
import { useWindowSize } from "react-use"

interface UpgradeModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function UpgradeModal({ open, onOpenChange }: UpgradeModalProps) {
    const { width, height } = useWindowSize()
    
    const [step, setStep] = useState<'plans' | 'checkout' | 'processing' | 'success'>('plans')
    const [promoCode, setPromoCode] = useState("")
    const [discountApplied, setDiscountApplied] = useState(false)
    const [promoStatus, setPromoStatus] = useState<"idle" | "valid" | "invalid">("idle")
    
    const BASE_PRICE = 1499
    const DISCOUNT_RATE = 0.20 // 20% off
    const finalPrice = discountApplied ? Math.floor(BASE_PRICE * (1 - DISCOUNT_RATE)) : BASE_PRICE

    const benefits = [
        { icon: Zap, text: "Unlimited AI Credits", sub: "Generate unlimited resumes & cover letters" },
        { icon: Crown, text: "Premium Templates", sub: "Access 50+ ATS-optimized verified templates" },
        { icon: Shield, text: "Priority Support", sub: "24/7 priority email & chat support" },
        { icon: Sparkles, text: "Advanced Analytics", sub: "See exactly who views your profile" }
    ]

    const handleApplyPromo = () => {
        if (promoCode.toUpperCase() === "PRO20" || promoCode.toUpperCase() === "LAUNCH") {
            setDiscountApplied(true)
            setPromoStatus("valid")
        } else {
            setDiscountApplied(false)
            setPromoStatus("invalid")
        }
    }

    const handleMockPayment = () => {
        setStep('processing')
        setTimeout(() => {
            setStep('success')
            if (typeof window !== 'undefined') {
                 localStorage.setItem('flyeng_pro_plan', 'true')
                 // Dispatch event for sidebar to catch
                 window.dispatchEvent(new Event('storage'))
            }
        }, 2500)
    }

    const handleClose = () => {
        onOpenChange(false)
        setTimeout(() => {
            setStep('plans')
            setPromoCode("")
            setDiscountApplied(false)
            setPromoStatus("idle")
        }, 500)
    }

    return (
        <Dialog open={open} onOpenChange={open ? undefined : handleClose}>
            <DialogContent className="sm:max-w-md md:max-w-lg bg-[#0a0f1c] border-white/10 text-white overflow-hidden p-0 gap-0 shadow-[0_0_100px_rgba(6,182,212,0.15)] max-h-[90vh] overflow-y-auto w-[95vw] mx-auto rounded-2xl">
                {/* Global Background Glow map */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="p-6 md:p-8 relative z-10 flex flex-col items-center">
                    <AnimatePresence mode="wait">
                        
                        {/* STEP 1: PLANS OVERVIEW */}
                        {step === 'plans' && (
                            <motion.div 
                                key="plans"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                                className="w-full text-center relative"
                            >
                                <button onClick={handleClose} className="absolute right-0 top-0 p-2 text-white/40 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition">
                                    <X className="w-5 h-5" />
                                </button>
                                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(6,182,212,0.4)] relative mt-4">
                                    <Crown className="w-8 h-8 text-black" />
                                    <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-50 animate-pulse" />
                                </div>

                                <DialogTitle className="text-3xl font-black mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                                    Go Beyond Limits
                                </DialogTitle>
                                <DialogDescription className="text-white/60 mb-6 max-w-sm mx-auto text-sm leading-relaxed">
                                    Supercharge your career with industry-leading AI tools, premium templates, and advanced analytics.
                                </DialogDescription>

                                <div className="grid gap-3 w-full mb-8 text-left">
                                    {benefits.map((b, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-cyan-500/30 transition-all group"
                                        >
                                            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 mt-0.5 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                                                <b.icon className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-sm text-white group-hover:text-cyan-100 transition-colors">{b.text}</div>
                                                <div className="text-xs text-white/50">{b.sub}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <Button 
                                    onClick={() => setStep('checkout')}
                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold h-14 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] border-0 transition-all hover:scale-[1.02] active:scale-[0.98] text-lg flex items-center justify-center gap-2 group"
                                >
                                    Continue to Upgrade <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-4 font-bold">Cancel anytime • 14-day guarantee</p>
                            </motion.div>
                        )}

                        {/* STEP 2: CHECKOUT */}
                        {step === 'checkout' && (
                            <motion.div 
                                key="checkout"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="w-full"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <button onClick={() => setStep('plans')} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white">
                                        <ArrowRight className="w-4 h-4 rotate-180" />
                                    </button>
                                    <DialogTitle className="text-xl font-bold">Secure Checkout</DialogTitle>
                                </div>

                                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-5 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="font-bold text-lg text-white">Pro Plan (Monthly)</div>
                                            <div className="text-sm text-white/40">Billed monthly</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xl font-black text-white">₹{finalPrice}</div>
                                            {discountApplied && (
                                                <div className="text-xs font-bold text-emerald-400 line-through opacity-70">₹{BASE_PRICE}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="h-px w-full bg-white/5" />

                                    {/* PROMO CODE */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-white/50 uppercase tracking-widest flex items-center gap-2">
                                            <Tag className="w-3 h-3" /> Promo Code
                                        </label>
                                        <div className="flex gap-2">
                                            <input 
                                                type="text" 
                                                value={promoCode}
                                                onChange={(e) => {
                                                    setPromoCode(e.target.value)
                                                    setPromoStatus("idle")
                                                }}
                                                placeholder="Enter code (e.g. PRO20)" 
                                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 h-11 text-sm text-white uppercase placeholder:normal-case placeholder:text-white/20 outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-mono"
                                            />
                                            <Button 
                                                onClick={handleApplyPromo}
                                                variant="outline" 
                                                className="h-11 border-white/10 bg-white/5 hover:bg-white/10 hover:text-white"
                                            >
                                                Apply
                                            </Button>
                                        </div>
                                        {promoStatus === "valid" && <p className="text-[10px] text-emerald-400 font-bold">Promo code applied successfully! (-20%)</p>}
                                        {promoStatus === "invalid" && <p className="text-[10px] text-red-400 font-bold">Invalid promo code</p>}
                                    </div>
                                </div>

                                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-6">
                                    <div className="flex justify-between items-center text-lg font-black text-white">
                                        <span>Total Due Today</span>
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">₹{finalPrice}</span>
                                    </div>
                                </div>

                                <Button 
                                    onClick={handleMockPayment}
                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold h-14 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] border-0 transition-all hover:scale-[1.02] active:scale-[0.98] text-lg flex items-center justify-center gap-2"
                                >
                                    <CreditCard className="w-5 h-5" /> Pay ₹{finalPrice}
                                </Button>
                                <div className="flex items-center justify-center gap-2 mt-4 text-white/30 text-xs font-medium">
                                    <Shield className="w-3.5 h-3.5" /> 256-bit encrypted secure payment
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: PROCESSING */}
                        {step === 'processing' && (
                            <motion.div 
                                key="processing"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="w-full flex flex-col items-center justify-center py-12 text-center"
                            >
                                <div className="relative w-20 h-20 mb-6">
                                    <div className="absolute inset-0 border-4 border-white/10 rounded-full" />
                                    <div className="absolute inset-0 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                                    <Loader2 className="absolute inset-0 m-auto w-8 h-8 text-cyan-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Processing Payment</h3>
                                <p className="text-white/50 text-sm">Securing your Pro access...</p>
                            </motion.div>
                        )}

                        {/* STEP 4: SUCCESS */}
                        {step === 'success' && (
                            <motion.div 
                                key="success"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-full flex flex-col items-center justify-center py-8 text-center"
                            >
                                {open && <Confetti width={width} height={height} recycle={false} numberOfPieces={500} gravity={0.15} colors={['#06b6d4', '#a855f7', '#3b82f6', '#ffffff']} style={{ position: 'fixed', top: 0, left: 0, zIndex: 100 }} />}
                                
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: "spring", bounce: 0.5 }}
                                    className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(16,185,129,0.4)] relative"
                                >
                                    <Check className="w-12 h-12 text-black" strokeWidth={3} />
                                    <div className="absolute inset-0 rounded-full border border-emerald-300 animate-ping opacity-50" />
                                </motion.div>

                                <h3 className="text-3xl font-black text-white mb-3">You're going Pro!</h3>
                                <p className="text-white/60 text-sm max-w-xs mx-auto mb-8 leading-relaxed">
                                    Payment successful. Your account has been upgraded and all premium features are now unlocked.
                                </p>

                                <Button 
                                    onClick={handleClose}
                                    className="w-full max-w-xs bg-white text-black hover:bg-gray-200 font-bold h-12 rounded-xl shadow-lg transition-all active:scale-[0.98]"
                                >
                                    Return to Dashboard
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </DialogContent>
        </Dialog>
    )
}

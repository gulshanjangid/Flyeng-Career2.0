"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { Check, Star, Zap } from "lucide-react"
import { MouseEvent } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const tiers = [
    {
        name: "Starter",
        price: "Free",
        desc: "Essential tools for students",
        features: ["AI Resume Builder (Basic)", "1 Mock Interview", "Career Roadmap Access"],
        color: "from-blue-500 to-cyan-500",
        cta: "Start Free",
        popular: false
    },
    {
        name: "Pro",
        price: "$12",
        desc: "Full power for job seekers",
        features: ["Unlimited AI Resumes", "Real-time Voice Interviews", "GitHub Code Analysis", "Priority Support"],
        color: "from-purple-500 to-pink-500",
        cta: "Upgrade to Pro",
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        desc: "For universities & bootcamps",
        features: ["Admin Dashboard", "Cohort Analytics", "Custom Integrations", "Dedicated Manager"],
        color: "from-amber-500 to-orange-500",
        cta: "Contact Sales",
        popular: false
    }
]

export function PricingMonolith() {
    return (
        <section className="relative py-16 md:py-32 bg-black overflow-hidden flex flex-col items-center justify-center min-h-screen">

            {/* Header */}
            <div className="relative z-10 text-center mb-16 px-4">
                <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">Pricing Plans.</h2>
                <p className="text-white/50 text-xl">Invest in your future. Simple pricing.</p>
            </div>

            {/* Cards Container */}
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 max-w-6xl">
                {tiers.map((tier, i) => (
                    <PricingCard key={i} tier={tier} index={i} />
                ))}
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-900/20 blur-[50px] rounded-full pointer-events-none" />
        </section>
    )
}

function PricingCard({ tier, index }: { tier: any, index: number }) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            onMouseMove={handleMouseMove}
            className={`relative group rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden ${tier.popular ? 'scale-105 z-10 border-white/20' : 'scale-100'}`}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(255,255,255,0.1),
                            transparent 80%
                        )
                    `
                }}
            />

            <div className="p-8 relative z-10 flex flex-col h-full">
                {tier.popular && (
                    <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-bl-2xl text-xs font-bold text-white uppercase tracking-widest">
                        Most Popular
                    </div>
                )}

                <h3 className="text-xl font-medium text-white/60 mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-white/40">/mo</span>
                </div>
                <p className="text-sm text-white/50 mb-8 h-10">{tier.desc}</p>

                <div className="flex-grow space-y-4 mb-8">
                    {tier.features.map((feat: string, j: number) => (
                        <div key={j} className="flex items-center gap-3 text-sm text-white/80">
                            <Check className="w-4 h-4 text-emerald-400" />
                            {feat}
                        </div>
                    ))}
                </div>

                <Button className={`w-full h-12 rounded-xl text-white border-0 bg-gradient-to-r ${tier.color} opacity-90 hover:opacity-100 transition-opacity shadow-lg`}>
                    <Link href="/signup">{tier.cta}</Link>
                </Button>
            </div>
        </motion.div>
    )
}

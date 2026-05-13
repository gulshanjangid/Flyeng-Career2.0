"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { motion } from "framer-motion"
import { Construction, ArrowLeft, Bell, CheckCircle2 } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import confetti from "canvas-confetti"

export default function ComingSoonPage() {
    const [isNotified, setIsNotified] = useState(false)

    const handleNotify = () => {
        if (isNotified) return

        setIsNotified(true)

        // Fire confetti
        const duration = 3 * 1000
        const animationEnd = Date.now() + duration
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now()

            if (timeLeft <= 0) {
                return clearInterval(interval)
            }

            const particleCount = 50 * (timeLeft / duration)

            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            })
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            })
        }, 250)
    }

    return (
        <div className="relative min-h-screen bg-[#030014] text-white overflow-hidden flex flex-col">
            <SiteHeader />

            <main className="flex-1 flex flex-col items-center justify-center relative z-10 p-4">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto relative z-20"
                >
                    <div className="w-24 h-24 mx-auto bg-yellow-500/10 rounded-3xl flex items-center justify-center mb-8 border border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                        <Construction className="w-12 h-12 text-yellow-500 animate-pulse" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                        Work in Progress
                    </h1>

                    <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                        Our engineers are working hard to bring this AI tool to life.
                        It's going to be worth the wait!
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            asChild
                            className="bg-white/10 hover:bg-white/20 text-white border-none px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all"
                        >
                            <Link href="/ai-tools">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back to Tools
                            </Link>
                        </Button>

                        <Button
                            onClick={handleNotify}
                            disabled={isNotified}
                            className={`px-8 py-6 text-lg rounded-full font-bold transition-all duration-500 ${isNotified
                                    ? "bg-green-500 hover:bg-green-600 text-white"
                                    : "bg-yellow-500 hover:bg-yellow-600 text-black hover:scale-105"
                                }`}
                        >
                            {isNotified ? (
                                <>
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    You're on the list!
                                </>
                            ) : (
                                <>
                                    <Bell className="w-5 h-5 mr-2" />
                                    Notify Me When Ready
                                </>
                            )}
                        </Button>
                    </div>
                </motion.div>
            </main>

            <EnhancedFooter />
        </div>
    )
}

"use client"

import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion"
import { Brain, Sparkles, Zap, Target, ArrowRight, Clock, Trophy, Star, Rocket, Cpu, X, Check } from 'lucide-react'
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

function HeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse mix-blend-screen" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-1000 mix-blend-screen" />
            <div className="absolute top-[40%] left-[40%] w-[40%] h-[40%] bg-pink-600/10 rounded-full blur-[100px] animate-pulse delay-2000 mix-blend-screen" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
    )
}

function FloatingCard({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay, duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all group ${className}`}
        >
            {children}
        </motion.div>
    )
}

function MouseFollower() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    useEffect(() => {
        const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
            mouseX.set(clientX)
            mouseY.set(clientY)
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <motion.div
            className="fixed w-8 h-8 rounded-full border-2 border-cyan-500 pointer-events-none z-50 mix-blend-difference"
            style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
    )
}

function DemoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-12 md:pt-24 overflow-y-auto custom-scrollbar">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl mb-8"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                                    <Sparkles className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">How It Works</h3>
                                    <p className="text-sm text-white/40">From topic to quiz in seconds</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                            >
                                <X className="w-5 h-5 text-white/60" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div className="relative pl-8 border-l-2 border-white/10 space-y-8">
                                    <div className="relative">
                                        <div className="absolute -left-[39px] w-5 h-5 rounded-full bg-cyan-500 border-4 border-[#0a0a0a]" />
                                        <h4 className="text-lg font-bold text-white mb-2">1. Choose Your Topic</h4>
                                        <p className="text-white/60 text-sm">Enter any subject, from "Quantum Physics" to "90s Pop Music". Our AI understands it all.</p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[39px] w-5 h-5 rounded-full bg-purple-500 border-4 border-[#0a0a0a]" />
                                        <h4 className="text-lg font-bold text-white mb-2">2. Customize</h4>
                                        <p className="text-white/60 text-sm">Select difficulty, tone (Fun, Sarcastic, Academic), and language.</p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[39px] w-5 h-5 rounded-full bg-pink-500 border-4 border-[#0a0a0a]" />
                                        <h4 className="text-lg font-bold text-white mb-2">3. Play & Learn</h4>
                                        <p className="text-white/60 text-sm">Challenge yourself with unique questions, streaks, and lifelines.</p>
                                    </div>
                                </div>

                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Zap className="w-5 h-5 text-yellow-400" />
                                        <span className="font-bold text-white">Pro Features Included</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        {['Detailed Explanations', 'Performance Analytics', 'Multi-language Support', 'Export Options'].map((feat, i) => (
                                            <div key={i} className="flex items-center gap-2 text-xs text-white/60">
                                                <Check className="w-3 h-3 text-green-400" /> {feat}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl" />
                                <div className="relative bg-black/60 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-white/10" />
                                            <div className="h-2 w-20 bg-white/10 rounded-full" />
                                        </div>
                                        <div className="h-6 w-16 bg-cyan-500/20 rounded-full" />
                                    </div>
                                    <div className="space-y-4 mb-6">
                                        <div className="h-4 w-3/4 bg-white/20 rounded-full" />
                                        <div className="h-4 w-1/2 bg-white/20 rounded-full" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className={`h-12 rounded-xl border border-white/5 ${i === 2 ? 'bg-green-500/20 border-green-500/50' : 'bg-white/5'}`} />
                                        ))}
                                    </div>
                                </div>

                                {/* Floating Badges */}
                                <div className="hidden md:flex absolute -top-4 -right-4 bg-[#0a0a0a] border border-white/10 p-3 rounded-xl shadow-xl items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                                        <Trophy className="w-4 h-4 text-yellow-400" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-white/40 uppercase font-bold">Streak</div>
                                        <div className="text-sm font-bold text-white">5x Combo!</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-white/10 bg-white/5 flex justify-end">
                            <Link href="/ai-tools/quiz/app">
                                <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                                    Try it Yourself <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

function FloatingIcon({ icon: Icon, color, x, y, delay }: { icon: any, color: string, x: string, y: string, delay: number }) {
    return (
        <motion.div
            className={`absolute ${color} opacity-20 blur-[1px]`}
            style={{ left: x, top: y }}
            animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
            }}
            transition={{
                duration: 5,
                delay: delay,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <Icon className="w-24 h-24" />
        </motion.div>
    )
}

export default function QuizContent() {
    const [isDemoOpen, setIsDemoOpen] = useState(false)
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <div className="min-h-screen bg-[#030303] text-white overflow-hidden selection:bg-cyan-500/30 font-sans" ref={containerRef}>
            {/* <MouseFollower /> */}
            <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
            <SiteHeader />

            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-start pt-16 sm:pt-28 pb-12 sm:pb-20 overflow-hidden">
                <HeroBackground />

                <div className="container mx-auto px-3 sm:px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 tracking-tight">
                            <span className="block text-white mb-2">Transform any topic into an</span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                                interactive quiz
                            </span>
                        </h1>

                        <p className="text-base sm:text-xl text-white/60 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                            Experience the future of learning with our AI-powered quiz generator.
                            Gamified, adaptive, and instantly generated from any subject.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/ai-tools/quiz/app">
                                <Button className="h-12 sm:h-14 px-6 sm:px-8 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-full text-base sm:text-lg font-bold shadow-lg shadow-cyan-500/25 transition-all hover:scale-105">
                                    <Rocket className="w-5 h-5 mr-2" />
                                    Launch App
                                </Button>
                            </Link>
                            <Button
                                variant="ghost"
                                onClick={() => setIsDemoOpen(true)}
                                className="h-12 sm:h-14 px-6 sm:px-8 rounded-full text-base sm:text-lg font-medium text-white/50 hover:text-white hover:bg-white/5 transition-all"
                            >
                                <Clock className="w-5 h-5 mr-2" />
                                Watch Demo
                            </Button>
                        </div>
                    </motion.div>

                    {/* 3D Floating Elements */}
                    <motion.div style={{ y }} className="absolute top-1/2 left-0 w-full h-full pointer-events-none -z-10">
                        <FloatingIcon icon={Brain} color="text-cyan-500" x="10%" y="20%" delay={0} />
                        <FloatingIcon icon={Zap} color="text-yellow-500" x="85%" y="15%" delay={1} />
                        <FloatingIcon icon={Trophy} color="text-purple-500" x="15%" y="70%" delay={2} />
                        <FloatingIcon icon={Target} color="text-pink-500" x="80%" y="60%" delay={3} />
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 sm:py-32 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10 sm:mb-20">
                        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">Supercharge Your Study</h2>
                        <p className="text-white/50 text-base sm:text-xl max-w-2xl mx-auto px-2">
                            Our AI analyzes your topic deeply to create questions that actually test your understanding, not just memorization.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                        <FloatingCard delay={0.2}>
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Cpu className="w-7 h-7 text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Adaptive AI Engine</h3>
                            <p className="text-white/60 leading-relaxed">
                                Generates unique questions every time based on your selected difficulty and topic. No two quizzes are the same.
                            </p>
                        </FloatingCard>

                        <FloatingCard delay={0.4}>
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Brain className="w-7 h-7 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Deep Explanations</h3>
                            <p className="text-white/60 leading-relaxed">
                                Don't just get the answer. Understand the concept with detailed, AI-generated explanations for every question.
                            </p>
                        </FloatingCard>

                        <FloatingCard delay={0.6}>
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Trophy className="w-7 h-7 text-yellow-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Performance Tracking</h3>
                            <p className="text-white/60 leading-relaxed">
                                Visualize your progress with beautiful charts and analytics. Identify your weak spots and master them.
                            </p>
                        </FloatingCard>
                    </div>
                </div>
            </section>

            {/* Interactive Demo Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-[3rem] p-4 sm:p-8 md:p-16 overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Ready to challenge yourself?</h2>
                                <p className="text-white/60 text-lg mb-8">
                                    Join thousands of students and professionals who use Flyeng Quiz to master new skills daily.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {['Unlimited Quizzes', 'Custom Topics', 'Detailed Analytics', 'Export to PDF'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/80">
                                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                                <Star className="w-3 h-3 text-green-400 fill-current" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/ai-tools/quiz/app">
                                    <Button className="h-14 px-8 bg-white text-black hover:bg-gray-200 font-bold rounded-xl text-lg w-full sm:w-auto">
                                        Start Generating Now
                                    </Button>
                                </Link>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-2xl opacity-20 animate-pulse" />
                                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 relative shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                        </div>
                                        <div className="text-xs font-mono text-white/40">quiz_generator.exe</div>
                                    </div>
                                    <div className="space-y-4 font-mono text-sm">
                                        <div className="text-green-400">$ generate --topic "Quantum Computing"</div>
                                        <div className="text-white/60">Analyzing topic complexity...</div>
                                        <div className="text-white/60">Generating questions... [||||||||||] 100%</div>
                                        <div className="p-4 bg-white/5 rounded-lg border border-white/5 mt-4">
                                            <div className="text-cyan-400 mb-2">Q: What is a qubit?</div>
                                            <div className="space-y-2 pl-4 border-l-2 border-white/10">
                                                <div className="text-white/40 hover:text-white cursor-pointer transition-colors">A) A classical bit</div>
                                                <div className="text-white/40 hover:text-white cursor-pointer transition-colors">B) A quantum bit</div>
                                                <div className="text-white/40 hover:text-white cursor-pointer transition-colors">C) A byte of data</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <EnhancedFooter />
        </div>
    )
}

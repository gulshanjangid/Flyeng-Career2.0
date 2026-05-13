"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Scan, FileText, User, CheckCircle2, Binary, Sparkles, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

interface ImportScanningModalProps {
    isOpen: boolean
    onComplete?: () => void
}

export function ImportScanningModal({ isOpen, onComplete }: ImportScanningModalProps) {
    const [progress, setProgress] = useState(0)
    const [stage, setStage] = useState(0)

    const stages = [
        { label: "Scanning Document Structure...", icon: Scan },
        { label: "Extracting Text Layers...", icon: FileText },
        { label: "Identifying Contact Information...", icon: User },
        { label: "Analyzing Professional Experience...", icon: Binary },
        { label: "Optimizing for ATS...", icon: Sparkles },
    ]

    useEffect(() => {
        if (isOpen) {
            setProgress(0)
            setStage(0)

            // Simulate scanning progress
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval)
                        return 100
                    }
                    return prev + 1
                })
            }, 40) // 4 seconds total

            // Stage switching
            const stageInterval = setInterval(() => {
                setStage(prev => {
                    if (prev >= stages.length - 1) {
                        clearInterval(stageInterval)
                        return prev
                    }
                    return prev + 1
                })
            }, 800)

            return () => {
                clearInterval(interval)
                clearInterval(stageInterval)
            }
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed top-0 left-0 right-0 bottom-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md h-screen w-screen overflow-hidden"
            >
                <div className="w-[500px] relative">
                    {/* Glowing Orb Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />

                    <div className="relative z-10 bg-black/50 border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden">
                        {/* Scanning Line Effect */}
                        <motion.div
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                            className="absolute left-0 right-0 h-1 bg-cyan-500/50 blur-sm shadow-[0_0_20px_rgba(6,182,212,0.5)] z-0"
                        />

                        {/* Main Icon */}
                        <div className="flex justify-center mb-8">
                            <div className="relative">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                                    className="w-20 h-20 rounded-full border-2 border-dashed border-cyan-500/30"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Scan className="w-8 h-8 text-cyan-400" />
                                </div>
                            </div>
                        </div>

                        {/* Text Status */}
                        <div className="text-center mb-8">
                            <motion.h3
                                key={stage}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xl font-bold text-white mb-2"
                            >
                                {stages[stage].label}
                            </motion.h3>
                            <p className="text-cyan-400/60 font-mono text-sm">
                                Processing... {progress}%
                            </p>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden mb-6">
                            <motion.div
                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        {/* Checklist */}
                        <div className="space-y-3">
                            {stages.map((s, i) => (
                                <div key={i} className={`flex items-center gap-3 text-sm transition-colors duration-300 ${i <= stage ? 'text-white' : 'text-gray-600'}`}>
                                    {i < stage ? (
                                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                                    ) : i === stage ? (
                                        <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
                                    ) : (
                                        <div className="w-4 h-4 rounded-full border border-gray-700" />
                                    )}
                                    <span className={i === stage ? "font-semibold" : ""}>{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

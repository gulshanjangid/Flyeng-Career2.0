"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Code, Database, Globe, Cpu, Layers, Terminal, FileText, Mic, Briefcase, UserCheck, Lightbulb } from "lucide-react"

const techFacts = [
    {
        category: "Artificial Intelligence",
        icon: Brain,
        text: "The term 'Artificial Intelligence' was coined in 1956 by John McCarthy at the Dartmouth Conference.",
        color: "text-purple-400"
    },
    {
        category: "Data Structures",
        icon: Code,
        text: "A Hash Table provides O(1) average time complexity for search, insert, and delete operations.",
        color: "text-cyan-400"
    },
    {
        category: "System Design",
        icon: Layers,
        text: "CAP Theorem states that a distributed system can only deliver two of three guarantees: Consistency, Availability, and Partition Tolerance.",
        color: "text-blue-400"
    },
    {
        category: "Operating Systems",
        icon: Terminal,
        text: "Thrashing occurs when a computer's virtual memory resources are overused, leading to a constant state of paging and page faults.",
        color: "text-rose-400"
    },
    {
        category: "Networking",
        icon: Globe,
        text: "TCP is a connection-oriented protocol that guarantees delivery, while UDP is connectionless and faster but unreliable.",
        color: "text-emerald-400"
    },
    {
        category: "DBMS",
        icon: Database,
        text: "ACID properties (Atomicity, Consistency, Isolation, Durability) ensure reliable processing of database transactions.",
        color: "text-yellow-400"
    },
    {
        category: "OOP",
        icon: Cpu,
        text: "Polymorphism allows objects of different classes to be treated as objects of a common superclass.",
        color: "text-orange-400"
    }
]

const careerFacts = [
    {
        category: "Resume Tip",
        icon: FileText,
        text: "Recruiters spend an average of only 6-7 seconds reviewing a resume. Keep it concise and impact-focused.",
        color: "text-blue-400"
    },
    {
        category: "Interview Trick",
        icon: Mic,
        text: "Use the STAR method (Situation, Task, Action, Result) to structure your behavioral interview answers.",
        color: "text-purple-400"
    },
    {
        category: "Job Search",
        icon: Briefcase,
        text: "Networking accounts for up to 85% of all filled positions. Don't just apply; connect.",
        color: "text-cyan-400"
    },
    {
        category: "Personal Branding",
        icon: UserCheck,
        text: "Optimizing your LinkedIn headline with keywords can increase profile views by 40%.",
        color: "text-rose-400"
    },
    {
        category: "Negotiation",
        icon: Lightbulb,
        text: "Always negotiate your salary. 85% of companies expect candidates to negotiate but only 25% do.",
        color: "text-yellow-400"
    }
]

interface FactLoaderProps {
    type?: "tech" | "career"
    show: boolean
}

export function FactLoader({ type = "tech", show }: FactLoaderProps) {
    const [currentFactIndex, setCurrentFactIndex] = useState(0)
    const [progress, setProgress] = useState(0)

    const facts = type === "career" ? careerFacts : techFacts

    useEffect(() => {
        if (!show) return

        // Randomize start fact
        setCurrentFactIndex(Math.floor(Math.random() * facts.length))

        // Rotate facts every 3 seconds
        const interval = setInterval(() => {
            setCurrentFactIndex((prev) => (prev + 1) % facts.length)
        }, 3000)

        // Fake progress bar
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 95) return prev
                return prev + Math.random() * 5
            })
        }, 200)

        return () => {
            clearInterval(interval)
            clearInterval(progressInterval)
        }
    }, [facts.length, show])

    const fact = facts[currentFactIndex]

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/80 backdrop-blur-lg"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_70%)]" />

                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full max-w-2xl px-6 relative z-10 flex flex-col items-center text-center"
                    >
                        {/* Loading Spinner */}
                        <div className="mb-12 relative">
                            <div className="w-16 h-16 rounded-full border-4 border-white/10 border-t-cyan-500 animate-spin" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <fact.icon className={`w-6 h-6 ${fact.color} animate-pulse`} />
                            </div>
                        </div>

                        {/* Fact Card */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentFactIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl w-full min-h-[200px] flex flex-col justify-center items-center"
                            >
                                <div className={`text-sm font-bold uppercase tracking-wider mb-4 ${fact.color} flex items-center justify-center gap-2`}>
                                    <fact.icon className="w-4 h-4" />
                                    {fact.category}
                                </div>
                                <h3 className="text-xl md:text-2xl font-medium leading-relaxed text-white/90">
                                    "{fact.text}"
                                </h3>
                            </motion.div>
                        </AnimatePresence>

                        {/* Progress Bar */}
                        <div className="w-full max-w-md mt-12 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                        <p className="text-white/40 text-xs mt-4 animate-pulse">
                            {type === "career" ? "Preparing your career dashboard..." : "Initializing AI tools..."}
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

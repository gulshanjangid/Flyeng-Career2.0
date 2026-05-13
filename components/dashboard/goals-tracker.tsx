"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    PieChart,
    Target,
    Trophy,
    Zap,
    CheckCircle2
} from "lucide-react"

export function GoalsTracker() {
    const [goals, setGoals] = useState([
        { id: 1, text: "Apply to 5 jobs", current: 3, target: 5, unit: "apps" },
        { id: 2, text: "Complete 1 Interview", current: 1, target: 1, unit: "session" },
        { id: 3, text: "Update Resume", current: 0, target: 1, unit: "task" },
    ])

    const toggleGoal = (id: number) => {
        // Basic toggle for visual feedback for now
        setGoals(prev => prev.map(g => {
            if (g.id === id) {
                return { ...g, current: g.current >= g.target ? 0 : g.target }
            }
            return g
        }))
    }

    // Calculate overall progress
    const totalProgress = Math.round(
        (goals.reduce((acc, g) => acc + Math.min(g.current, g.target) / g.target, 0) / goals.length) * 100
    )

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider">Daily Goals</h3>
                <span className="text-xl font-bold text-white">{totalProgress}%</span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${totalProgress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />
            </div>

            <div className="space-y-3">
                {goals.map((goal) => {
                    const isCompleted = goal.current >= goal.target
                    return (
                        <div
                            key={goal.id}
                            onClick={() => toggleGoal(goal.id)}
                            className={`group p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${isCompleted
                                    ? "bg-green-500/10 border-green-500/20"
                                    : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${isCompleted ? "bg-green-500 border-green-500" : "border-white/20 group-hover:border-white/40"
                                    }`}>
                                    {isCompleted && <CheckCircle2 className="w-3 h-3 text-black" />}
                                </div>
                                <span className={`text-sm font-medium transition-colors ${isCompleted ? "text-green-400 line-through decoration-green-500/50" : "text-white/80"
                                    }`}>
                                    {goal.text}
                                </span>
                            </div>
                            <span className="text-xs text-white/40 font-mono">
                                {goal.current}/{goal.target}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

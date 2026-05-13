"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function HeroVisualizer() {
    const [array, setArray] = useState<number[]>([])
    const [activeIndices, setActiveIndices] = useState<number[]>([])
    const [sortedIndices, setSortedIndices] = useState<number[]>([])

    useEffect(() => {
        let isMounted = true

        // Generate random array
        const resetArray = () => {
            const newArray = Array.from({ length: 15 }, () => Math.floor(Math.random() * 50) + 10)
            if (isMounted) {
                setArray(newArray)
                setSortedIndices([])
                setActiveIndices([])
            }
            return newArray
        }

        const runSort = async () => {
            while (isMounted) {
                const arr = resetArray()
                await new Promise(r => setTimeout(r, 1000))

                // Bubble Sort Animation
                const n = arr.length
                for (let i = 0; i < n; i++) {
                    for (let j = 0; j < n - i - 1; j++) {
                        if (!isMounted) return
                        setActiveIndices([j, j + 1])
                        await new Promise(r => setTimeout(r, 100))

                        if (arr[j] > arr[j + 1]) {
                            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                            setArray([...arr])
                        }
                    }
                    if (!isMounted) return
                    setSortedIndices(prev => [...prev, n - i - 1])
                }
                setSortedIndices(Array.from({ length: n }, (_, i) => i))
                await new Promise(r => setTimeout(r, 2000))
            }
        }

        runSort()
        return () => { isMounted = false }
    }, [])

    return (
        <div className="w-full h-48 md:h-64 flex items-end justify-center gap-0.5 md:gap-1 p-2 md:p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            {array.map((value, idx) => (
                <motion.div
                    key={idx}
                    layout
                    initial={{ height: 0 }}
                    animate={{
                        height: `${(value / 60) * 100}%`,
                        backgroundColor: sortedIndices.includes(idx)
                            ? '#22c55e' // Green
                            : activeIndices.includes(idx)
                                ? '#eab308' // Yellow
                                : '#3b82f6' // Blue
                    }}
                    className="w-2 sm:w-3 md:w-4 rounded-t-sm relative"
                >
                    {/* Reflection effect */}
                    <div className="absolute top-full left-0 w-full h-full bg-inherit opacity-20 scale-y-[-1]" />
                </motion.div>
            ))}
        </div>
    )
}

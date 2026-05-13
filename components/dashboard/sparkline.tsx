"use client"

import { motion } from "framer-motion"

interface SparklineProps {
    data: number[]
    color?: string
    width?: number
    height?: number
    className?: string
}

export function Sparkline({ data, color = "#22d3ee", width = 100, height = 30, className }: SparklineProps) {
    const max = Math.max(...data)
    const min = Math.min(...data)
    const range = max - min || 1
    const stepX = width / (data.length - 1)

    const points = data.map((d, i) => {
        const x = i * stepX
        const y = height - ((d - min) / range) * height
        return `${x},${y}`
    }).join(" ")

    return (
        <svg width={width} height={height} className={className} overflow="visible">
            {/* Glow effect */}
            <motion.path
                d={`M ${points}`}
                fill="none"
                stroke={color}
                strokeWidth="3"
                strokeOpacity="0.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ filter: "blur(3px)" }}
            />
            {/* Main line */}
            <motion.path
                d={`M ${points}`}
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
        </svg>
    )
}

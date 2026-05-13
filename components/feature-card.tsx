"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const FeatureCard = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => {
    const ref = useRef<HTMLDivElement>(null)

    const [rotationX, setRotationX] = useState(0)
    const [rotationY, setRotationY] = useState(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        setRotationX(yPct * -20)
        setRotationY(xPct * 20)
    }

    const handleMouseLeave = () => {
        setRotationX(0)
        setRotationY(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
            }}
            animate={{
                rotateX: rotationX,
                rotateY: rotationY,
            }}
            className={cn(
                "relative transition-all duration-200 ease-linear",
                className
            )}
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="group relative"
            >
                {children}
            </div>
        </motion.div>
    )
}

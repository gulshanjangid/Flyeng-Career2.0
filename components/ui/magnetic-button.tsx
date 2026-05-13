"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export const MagneticButton = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null)
    
    // Use motion values instead of useState to avoid React re-renders on every mouse pixel
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    
    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e
        const { height, width, left, top } = ref.current!.getBoundingClientRect()
        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)
        x.set(middleX)
        y.set(middleY)
    }

    const reset = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            style={{ position: "relative", x: springX, y: springY }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
        >
            {children}
        </motion.div>
    )
}

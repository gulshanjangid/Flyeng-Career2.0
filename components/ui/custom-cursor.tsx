"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)
    const [isMobile, setIsMobile] = useState(false)
    const rafIdRef = useRef<number>(0)

    useEffect(() => {
        // Hide on mobile/touch
        if (typeof window !== 'undefined' && (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches)) {
            setIsMobile(true)
        }
    }, [])

    useEffect(() => {
        if (isMobile) return

        const moveCursor = (e: MouseEvent) => {
            // Throttle via rAF - only update once per frame
            if (rafIdRef.current) return
            rafIdRef.current = requestAnimationFrame(() => {
                if (!isVisible) setIsVisible(true)
                cursorX.set(e.clientX - 10)
                cursorY.set(e.clientY - 10)
                rafIdRef.current = 0
            })
        }

        // Simplified: detect hoverable elements via CSS instead of JS mouseover
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const isInteractive = target.tagName === "BUTTON" || target.tagName === "A" ||
                target.closest("button") || target.closest("a")
            setIsHovering(!!isInteractive)
        }

        window.addEventListener("mousemove", moveCursor, { passive: true })
        window.addEventListener("mousedown", handleClick, { passive: true })

        return () => {
            window.removeEventListener("mousemove", moveCursor)
            window.removeEventListener("mousedown", handleClick)
            if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
        }
    }, [cursorX, cursorY, isVisible, isMobile])

    if (isMobile) return null

    return (
        <motion.div
            className="fixed top-0 left-0 w-5 h-5 rounded-full border border-white pointer-events-none z-[9999]"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                opacity: isVisible ? 1 : 0,
            }}
            animate={{
                scale: isHovering ? 3 : 1,
                backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
                borderColor: isHovering ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.8)",
            }}
            transition={{
                scale: { duration: 0.2 },
                backgroundColor: { duration: 0.2 },
            }}
        >
            {!isHovering && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full" />
            )}
        </motion.div>
    )
}

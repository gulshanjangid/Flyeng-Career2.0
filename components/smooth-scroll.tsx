"use client"

import { ReactNode, useEffect, useRef } from "react"
import Lenis from "lenis"

function isTouchDevice(): boolean {
    return window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches
}

export function SmoothScroll({ children }: { children: ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null)
    const rafRef = useRef<number>(0)

    useEffect(() => {
        if (isTouchDevice()) return

        function initLenis() {
            // Clean up existing instance first
            if (lenisRef.current) {
                cancelAnimationFrame(rafRef.current)
                lenisRef.current.destroy()
                lenisRef.current = null
            }

            // Don't init if orientation changed and now mobile
            if (isTouchDevice()) return

            const lenis = new Lenis({
                duration: 0.9,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: "vertical",
                gestureOrientation: "vertical",
                smoothWheel: true,
                wheelMultiplier: 0.9,
                touchMultiplier: 2.5,
            })
            lenisRef.current = lenis

            function raf(time: number) {
                lenis.raf(time)
                rafRef.current = requestAnimationFrame(raf)
            }
            rafRef.current = requestAnimationFrame(raf)
        }

        initLenis()

        // Pause rAF loop when tab is hidden to save CPU
        const handleVisibilityChange = () => {
            if (document.hidden) {
                cancelAnimationFrame(rafRef.current)
            } else if (lenisRef.current) {
                const lenis = lenisRef.current
                function raf(time: number) {
                    lenis.raf(time)
                    rafRef.current = requestAnimationFrame(raf)
                }
                rafRef.current = requestAnimationFrame(raf)
            }
        }

        // Re-init on orientation change (iPad rotation, phone rotation)
        let orientationTimer: ReturnType<typeof setTimeout>
        const handleOrientationChange = () => {
            clearTimeout(orientationTimer)
            // Wait for layout to settle after rotation
            orientationTimer = setTimeout(initLenis, 300)
        }

        document.addEventListener("visibilitychange", handleVisibilityChange)
        window.addEventListener("orientationchange", handleOrientationChange)

        return () => {
            cancelAnimationFrame(rafRef.current)
            clearTimeout(orientationTimer)
            document.removeEventListener("visibilitychange", handleVisibilityChange)
            window.removeEventListener("orientationchange", handleOrientationChange)
            lenisRef.current?.destroy()
            lenisRef.current = null
        }
    }, [])

    return <>{children}</>
}

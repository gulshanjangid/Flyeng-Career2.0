"use client"

import { useEffect, useState } from "react"

export function AmbientLight() {
    const [isMobile, setIsMobile] = useState(true) // SSR-safe: default to mobile (no render)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    // Don't render heavy blurred divs on mobile — native has no GPU to spare
    if (isMobile) return null

    return (
        <div
            className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none"
            style={{ transform: 'translate3d(0,0,0)', contain: 'layout style paint' }}
        >
            {/* Subtle ambient glow - reduced blur for performance */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/8 blur-[60px] will-change-transform" />
            
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/8 blur-[60px] will-change-transform" />
            
            {/* Desktop spotlight removed — was blur-[150px] with animation, massive GPU cost */}
        </div>
    )
}

"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useLoader } from "./loader-context"

if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP)
}

export function GlobalLoader() {
    const { isLoading, setIsLoading, loaderText, type } = useLoader()
    const containerRef = useRef<HTMLDivElement>(null)

    // Safety Lock: Intro MUST play exactly once on mount/refresh.
    const hasPlayedIntro = useRef(false)
    const effectiveType = !hasPlayedIntro.current ? 'intro' : type;

    // Refs
    // Intro
    const fPathRef = useRef(null)
    const cPathRef = useRef(null)
    const logoGroupRef = useRef(null)
    const introTextRef = useRef(null)
    const introWrapperRef = useRef(null) // Wrapper for "shaking" the screen
    const scanlinesRef = useRef(null)
    // Route
    const slideRef = useRef(null)
    const routeTextWrapperRef = useRef(null)
    const routeTextRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        // 1. EXIT SEQUENCE (Shared)
        if (!isLoading) {
            if (containerRef.current) {
                gsap.to(containerRef.current, {
                    yPercent: -100,
                    duration: 0.6,
                    ease: "expo.inOut",
                    onComplete: () => {
                        if (containerRef.current) gsap.set(containerRef.current, { visibility: "hidden", yPercent: 0 })
                    }
                })
            }
            return
        }

        // 2. ENTER SEQUENCE
        if (containerRef.current) gsap.set(containerRef.current, { visibility: "visible", opacity: 1, yPercent: 0 })

        if (effectiveType === 'intro') {
            // === INTRO ANIMATION: "CINEMATIC IGNITION" ===

            // Setup Refs
            if (introWrapperRef.current) gsap.set(introWrapperRef.current, { scale: 0.01, height: "2px", opacity: 0, overflow: "hidden", background: "#000" })
            if (logoGroupRef.current) gsap.set(logoGroupRef.current, { autoAlpha: 1, scale: 1.5, filter: "blur(10px)" })
            if (introTextRef.current) gsap.set(introTextRef.current, { autoAlpha: 0, scale: 2, filter: "blur(20px)" })
            if (scanlinesRef.current) gsap.set(scanlinesRef.current, { opacity: 0 })

            if (fPathRef.current && cPathRef.current) {
                gsap.set([fPathRef.current, cPathRef.current], {
                    strokeDasharray: 400, strokeDashoffset: 400, opacity: 0
                })
            }

            // A. LASER BEAM OPEN (0s - 0.25s) - NO WHITE FLICKER
            if (introWrapperRef.current) {
                // Start as Electric Blue Beam
                gsap.set(introWrapperRef.current, {
                    display: "flex",
                    flexDirection: "column",
                    background: "#3b82f6", // Electric Blue
                    boxShadow: "0 0 50px #3b82f6" // Glowing Aura
                })

                tl.to(introWrapperRef.current, { opacity: 1, width: "100%", duration: 0.1, ease: "power4.inOut" })
                    .to(introWrapperRef.current, { height: "100%", scale: 1, duration: 0.15, ease: "power2.out" })
                    .to(introWrapperRef.current, { background: "#000", boxShadow: "none", duration: 0.1 }, "-=0.1") // Smooth fade to void
            }

            // B. SCANLINES ON
            if (scanlinesRef.current) {
                tl.to(scanlinesRef.current, { opacity: 0.3, duration: 0.1 }, "<")
            }

            // C. SIMULTANEOUS REVEAL (0.25s - 0.8s) - AGENCY SYNC
            if (fPathRef.current && cPathRef.current && logoGroupRef.current && introTextRef.current) {

                // 1. Logo Starts Drawing
                tl.to(logoGroupRef.current, { filter: "blur(0px)", scale: 1, autoAlpha: 1, duration: 0.3, ease: "expo.out" }, "-=0.05")
                    .to([fPathRef.current, cPathRef.current], { opacity: 1, duration: 0.05 }, "<")
                    .to(fPathRef.current, { strokeDashoffset: 0, duration: 0.4, ease: "power3.inOut" }, "<")
                    .to(cPathRef.current, { strokeDashoffset: 0, duration: 0.4, ease: "power3.inOut" }, "<0.05")

                    // 2. Text Reveals WITH Logo
                    .fromTo(introTextRef.current,
                        { letterSpacing: "0em", autoAlpha: 0, y: 10, scale: 0.9, filter: "blur(5px)" },
                        { letterSpacing: "0.5em", autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.4, ease: "expo.out" },
                        "<0.1"
                    )

                    // RGB Split Impact
                    .fromTo(introTextRef.current,
                        { textShadow: "5px 0px 0px rgba(255,0,0,0.8), -5px 0px 0px rgba(0,0,255,0.8)" },
                        { textShadow: "0px 0px 0px rgba(255,0,0,0), 0px 0px 0px rgba(0,0,255,0)", duration: 0.2, ease: "power2.out" },
                        "<"
                    )
            }

            // D. FINAL IMPACT (0.8s+)
            if (introWrapperRef.current && logoGroupRef.current) {
                // Shockwave Expansion (Gradient Burst)
                const shockwave = containerRef.current?.querySelector(".shockwave-ring");
                if (shockwave) {
                    tl.fromTo(shockwave,
                        { scale: 0.5, opacity: 1, width: "100px", height: "100px" },
                        { scale: 4, opacity: 0, width: "1200px", height: "1200px", duration: 0.5, ease: "expo.out" }, // Smoother ease
                        "-=0.4"
                    )
                }

                // Vertical Stomp (Subtle & Solid)
                tl.to(introWrapperRef.current, {
                    y: () => (Math.random() - 0.5) * 5, // Reduced from 8 to 5 for subtlety
                    duration: 0.05,
                    repeat: 1, // Reduced repeats
                    yoyo: true,
                    ease: "rough"
                }, "-=0.3")
                    .to(introWrapperRef.current, { y: 0, duration: 0.05 })

                    // Intense Glow Pulse
                    .to([fPathRef.current, cPathRef.current], { filter: "url(#glowIntense)", duration: 0.1, yoyo: true, repeat: 1 }, "<")

                    // Holographic Shimmer
                    .to(introTextRef.current, {
                        backgroundPosition: "200% center",
                        duration: 0.8,
                        ease: "linear"
                    }, "-=0.2")

                    // E. CINEMATIC EXIT (Fly Through)
                    .to([logoGroupRef.current, introTextRef.current], {
                        scale: 1.5,
                        autoAlpha: 0,
                        filter: "blur(10px)",
                        duration: 0.5,
                        ease: "power2.in"
                    }, "+=0.1")
                    .to(introWrapperRef.current, {
                        opacity: 0,
                        duration: 0.4,
                        ease: "power2.inOut"
                    }, "<0.2")
            }

            tl.call(() => {
                hasPlayedIntro.current = true;
                window.dispatchEvent(new Event('flyeng-loader-complete'))
                setIsLoading(false)
            })

        } else {
            // === ROUTE ANIMATION ===
            // ... (Route Animation)
            if (slideRef.current) gsap.set(slideRef.current, { autoAlpha: 1 })
            if (routeTextWrapperRef.current) gsap.set(routeTextWrapperRef.current, { autoAlpha: 1 })
            if (routeTextRef.current) gsap.set(routeTextRef.current, { yPercent: 100 })

            if (routeTextRef.current) {
                tl.to(routeTextRef.current, {
                    yPercent: 0, duration: 0.5, ease: "power4.out"
                })
            }
            tl.to({}, { duration: 0.2, onComplete: () => setIsLoading(false) })
        }

    }, { dependencies: [isLoading, effectiveType], scope: containerRef })

    return (
        <div
            ref={containerRef}
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden ${isLoading ? 'visible' : 'invisible'}`}
        >
            {effectiveType === 'intro' ? (
                <div ref={introWrapperRef} className="relative w-full h-full flex flex-col items-center justify-center bg-black overflow-hidden perspective-[1000px]">
                    {/* === INTRO HTML === */}

                    {/* 0. Energy Shockwave (Gradient) */}
                    <div className="shockwave-ring absolute rounded-full opacity-0 pointer-events-none z-10"
                        style={{
                            transform: "translate(-50%, -50%)",
                            left: "50%",
                            top: "50%",
                            background: "radial-gradient(circle, rgba(255,255,255,0.0) 30%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.0) 70%)"
                        }}
                    />

                    {/* 1. CRT Scanlines & Vignette */}
                    <div ref={scanlinesRef} className="absolute inset-0 z-0 pointer-events-none opacity-0"
                        style={{
                            background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
                            backgroundSize: "100% 2px, 3px 100%"
                        }}
                    />
                    <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)]" />

                    {/* 2. Logo Container (Relative flow) */}
                    <div ref={logoGroupRef} className="relative w-64 h-48 z-20 mb-4 will-change-transform opacity-0 invisible"
                        style={{ visibility: "hidden" }} // Inline safety
                    >
                        <svg viewBox="0 0 300 200" className="w-full h-full overflow-visible">
                            <defs>
                                <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#fff" />
                                    <stop offset="50%" stopColor="#b0c4de" />
                                    <stop offset="100%" stopColor="#fff" />
                                </linearGradient>
                                <filter id="glowIntense" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                    <feGaussianBlur stdDeviation="15" result="coloredBlurLarge" in="SourceGraphic" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlurLarge" />
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            <g transformOrigin="center">
                                {/* F Path */}
                                <path ref={fPathRef} d="M90 50 H140 M90 50 V150 M90 100 H130"
                                    fill="none" stroke="url(#neonGradient)" strokeWidth="12" strokeLinecap="square" strokeLinejoin="miter"
                                    style={{ filter: "drop-shadow(0 0 10px #3b82f6)" }}
                                />
                                {/* C Path */}
                                <path ref={cPathRef} d="M210 70 C205 45 160 45 160 100 C160 155 205 155 210 130"
                                    fill="none" stroke="url(#neonGradient)" strokeWidth="12" strokeLinecap="square" strokeLinejoin="miter"
                                    style={{ filter: "drop-shadow(0 0 10px #ec4899)" }}
                                />
                            </g>
                        </svg>
                    </div>

                    {/* 3. Text (Holographic Shimmer) */}
                    <div
                        ref={introTextRef}
                        className="relative z-30 translate-y-10 will-change-transform opacity-0 invisible"
                        style={{ visibility: "hidden" }} // Inline safety
                    >
                        <h1 className="text-4xl md:text-5xl font-black tracking-[0.5em] uppercase text-center text-transparent bg-clip-text"
                            style={{
                                backgroundImage: "linear-gradient(to right, #ffffff 0%, #b0c4de 20%, #ffffff 40%, #ffffff 100%)",
                                backgroundSize: "200% auto",
                                fontFamily: "'Inter', sans-serif"
                            }}
                        >
                            Flyeng <span className="text-blue-500">Career</span>
                        </h1>
                    </div>
                </div>
            ) : (
                <>
                    {/* === ROUTE HTML === */}
                    <div ref={slideRef} className="absolute inset-0 bg-black z-0" />
                    <div ref={routeTextWrapperRef} className="z-10 relative overflow-hidden mix-blend-difference">
                        <h2 ref={routeTextRef} className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {loaderText?.replace("...", "") || "LOADING"} <span className="text-blue-500">.</span>
                        </h2>
                    </div>
                    <div className="absolute bottom-10 left-10 text-xs font-mono text-zinc-500 uppercase tracking-widest">
                        Flyeng Career &copy; 2026
                    </div>
                </>
            )}
        </div>
    )
}

"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react'
import { AuroraBackground } from "@/components/aurora-background"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger-container"
import { FloatingShapes } from "@/components/floating-shapes"
import { InteractiveParticles } from "@/components/interactive-particles"
import dynamic from "next/dynamic"

const HeroToolsMarquee = dynamic(() => import("@/components/hero-tools-marquee").then(mod => mod.HeroToolsMarquee), { ssr: false })
const SystemVisualizer = dynamic(() => import("@/components/system-visualizer").then(mod => mod.SystemVisualizer), { ssr: false })

export function Hero() {

    return (
        <section className="relative h-[100dvh] w-full overflow-hidden bg-black flex flex-col items-center justify-center perspective-[2000px]">

            {/* 1. Ethereal Aurora Background */}
            <AuroraBackground className="absolute inset-0 z-0" showRadialGradient={true}>

                {/* Grid Pattern for Texture - Mobile Only */}
                <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none md:hidden" />

                {/* 2. Micro-Interaction Particles (Stardust) - Enabled on Mobile */}
                {/* <div className="absolute inset-0 z-[5] pointer-events-none opacity-30">
                    <InteractiveParticles />
                </div> */}

                {/* 3. Deep Nebula (Background) - Enabled on Mobile */}
                {/* <div className="absolute inset-0 z-5 pointer-events-none opacity-40">
                    <FloatingShapes />
                </div> */}

                {/* 4. AI Tools Marquee (Midground - Blurred & Interactive) */}
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-70 hover:opacity-90 transition-opacity duration-700 pointer-events-none">
                    <HeroToolsMarquee />
                </div>

                {/* 4. The Singularity - Content */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">

                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.9,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{ willChange: 'transform, opacity' }}
                        className="relative z-20 flex flex-col gap-8 items-center justify-center px-4 max-w-5xl mx-auto"
                    >
                        <StaggerContainer className="flex flex-col items-center gap-8">
                        {/* Premium ID Badge */}
                        <StaggerItem>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:bg-white/10 transition-colors cursor-default">
                            <Sparkles className="w-4 h-4 text-cyan-400" />
                            <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">AI-Native Architecture</span>
                        </div>
                        </StaggerItem>

                        {/* Typography - Massive & Clean */}
                        <div className="text-center group cursor-default relative">

                            <StaggerItem>
                                <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-black text-white text-center leading-tight tracking-tighter">
                                    Build Your <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                                        Legacy
                                    </span>
                                </h1>
                            </StaggerItem>
                        </div>

                        {/* Subheadline */}
                        <StaggerItem>
                        <p className="font-light text-base sm:text-xl md:text-2xl text-blue-100/70 py-4 max-w-2xl text-center leading-relaxed px-4 md:px-0">
                            A complete ecosystem of clear-cut tools designed to <br className="hidden md:block" />
                            <span className="text-white font-medium">accelerate your career trajectory</span> into the stratosphere.
                        </p>
                        </StaggerItem>

                        {/* Magnetic CTAs */}
                        <StaggerItem>
                        <div className="flex flex-col sm:flex-row items-center gap-6 mt-2">
                            <MagneticButton>
                                <Button asChild className="h-14 sm:h-16 px-8 sm:px-10 rounded-full bg-white text-black hover:bg-blue-50 font-bold text-lg sm:text-xl transition-all shadow-lg border-none hover:scale-105">
                                    <Link href="/signup">
                                        Start Now
                                        <ArrowRight className="w-6 h-6 ml-2" />
                                    </Link>
                                </Button>
                            </MagneticButton>

                            <SystemVisualizer>
                                <Button aria-label="View system live demo" className="h-14 sm:h-16 px-6 sm:px-8 rounded-full border-2 border-white bg-black/50 hover:bg-white text-white hover:text-black font-bold text-base sm:text-lg backdrop-blur-md transition-all hover:scale-105 active:scale-95 group relative overflow-hidden">
                                     {/* Shining effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                    
                                    <div className="flex items-center gap-3 relative z-10">
                                        <PlayCircle className="w-6 h-6 text-white group-hover:text-black transition-colors fill-current/10" />
                                        <span className="tracking-wide">System Live</span>
                                    </div>
                                </Button>
                            </SystemVisualizer>
                        </div>
                        </StaggerItem>
                        </StaggerContainer>

                    </motion.div>
                </div>
            </AuroraBackground>

            {/* Scroll Indicator — static, no scroll-linked animation */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none">
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Scroll for Flux</div>
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            </div>
        </section>
    )
}
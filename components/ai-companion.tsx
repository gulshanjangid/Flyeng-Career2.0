"use client"

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import LazyVideo from "./lazy-video"
import Image from "next/image"
import { useRef, MouseEvent } from "react"

export function AiCompanion() {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-300, 300], [15, -15])
  const rotateY = useTransform(x, [-300, 300], [-15, 15])

  const springConfig = { damping: 20, stiffness: 150 }
  const rotateXSpring = useSpring(rotateX, springConfig)
  const rotateYSpring = useSpring(rotateY, springConfig)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    // Throttling using requestAnimationFrame logic inside the event handler wasn't here, 
    // but React's synthetic events might be frequent. 
    // Let's use a simple frame check or just proceed. 
    // Actually, let's use the same rAF pattern as FloatingShapes for consistency and performance.
    requestAnimationFrame(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        x.set(e.clientX - centerX)
        y.set(e.clientY - centerY)
    });
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[60px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
                Your AI Career Companion
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-[1.1]">
                Get matched with your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  perfect opportunity
                </span>
              </h2>

              <p className="text-lg text-white/60 mb-8 leading-relaxed max-w-xl">
                Our AI analyzes your profile and connects you with internships, projects, and jobs that match your skills and career goals.
              </p>

              <div className="flex items-center gap-4 text-sm font-medium text-white/40">
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                <span>Powered by advanced machine learning</span>
                <div className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent" />
              </div>
            </motion.div>

            {/* MacBook Mockup with Magnetic 3D Tilt & Holographic Sheen */}
            <div className="md:hidden relative w-full mb-8">
              <div className="relative bg-[#0d0d0d] rounded-[20px] p-[8px] border border-white/10 ring-1 ring-black shadow-2xl">
                 <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#1a1a1a] z-20 border border-white/5" />
                 <div className="relative aspect-[16/10] bg-black rounded-[6px] overflow-hidden border border-white/5">
                   {/* Mobile Optimization: Static Image instead of Video */}
                   <Image
                    src="/images/feature-interview-2.jpg"
                    alt="Dashboard Preview"
                    fill
                    className="object-cover scale-105 opacity-80"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                 </div>
              </div>
            </div>

            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hidden md:block relative perspective-[2000px] group will-change-transform"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="relative mx-auto w-full max-w-[600px] transform-gpu"
                style={{
                  rotateX: rotateXSpring,
                  rotateY: rotateYSpring,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* MacBook Screen - Optimized Shadow (Static base + simple dynamic opacity) */}
                <motion.div
                  className="relative bg-[#0d0d0d] rounded-[20px] p-[12px] border border-white/10 ring-1 ring-black shadow-2xl"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Camera Dot */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#1a1a1a] z-20 border border-white/5" />

                  {/* Screen Content */}
                  <div className="relative aspect-[16/10] bg-black rounded-[8px] overflow-hidden border border-white/5">
                    {/* Depth Layer 1 - Background */}
                    <motion.div
                      className="absolute inset-0 transform-gpu"
                      style={{
                        x: useTransform(rotateY, (val) => Number(val) * -0.5),
                        y: useTransform(rotateX, (val) => Number(val) * -0.5),
                        z: -30
                      }}
                    >
                      <LazyVideo
                        src="/videos/dashboard-demo.mp4"
                        className="w-full h-full object-cover scale-105"
                        autoplay={true}
                        loop={true}
                        muted={true}
                        playsInline={true}
                        poster="/images/feature-interview-2.jpg"
                      />
                    </motion.div>

                    {/* Holographic Sheen - Optimized (Opacity only, no Gradient recalc) */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                      style={{
                        transform: "translateZ(20px)",
                      }}
                    />

                    {/* Dynamic Light Reflection - Optimized (Opacity only) */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/10 to-transparent"
                      style={{
                        transform: "translateZ(1px)",
                      }}
                    />

                    {/* Screen Glare - Fixed */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                  </div>
                </motion.div>

                {/* Base (Keyboard area) */}
                <motion.div
                  className="relative h-[16px] bg-[#1a1a1a] rounded-b-[20px] mt-[-1px] border-x border-b border-white/10 shadow-lg mx-[2px] transform-gpu"
                  style={{
                    rotateX: useTransform(rotateX, (val) => Number(val) * 0.2),
                    z: -10
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[4px] bg-[#2a2a2a] rounded-b-md" />
                </motion.div>

                {/* Dynamic Shadow - Optimized (Scale/Opacity only) */}
                <motion.div
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-[40px] bg-blue-500/20 blur-[50px] rounded-full transform-gpu"
                  style={{
                    scale: useTransform(rotateX, [-15, 15], [0.9, 1.1]),
                    opacity: useTransform(rotateX, [-15, 15], [0.4, 0.6]),
                    x: useTransform(rotateY, (val) => Number(val) * 0.5),
                  }}
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

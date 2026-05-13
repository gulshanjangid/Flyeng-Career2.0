"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import React from "react"

export function Features() {
  return (
    <section id="features" className="container mx-auto px-4 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6"
          >
            From Campus to Company <br />
            <span className="text-blue-500">
              in Record Time
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Discover our unique approach to placement that puts you ahead of the curve.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Card 1: DSA & Tech Stack */}
          <SpotlightCard delay={0.2}>
            <CardHeader>
              <p className="text-[11px] tracking-widest text-blue-400 font-bold uppercase">DSA & Tech Stack</p>
              <CardTitle className="mt-1 text-2xl text-white">Master Data Structures & Algorithms with AI-driven roadmaps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <ParallaxImage src="/images/feature-dsa.jpg" alt="DSA Progress Dashboard" />
                <ParallaxImage src="/images/feature-dsa-2.jpg" alt="Tech Stack Analytics" delay={0.1} />
              </div>
            </CardContent>
          </SpotlightCard>

          {/* Card 2: AI Mock Interviews */}
          <SpotlightCard delay={0.3}>
            <CardHeader>
              <p className="text-[11px] tracking-widest text-purple-400 font-bold uppercase">AI Mock Interviews</p>
              <CardTitle className="mt-1 text-2xl text-white">
                "Cracked Google & Amazon. The AI mock rounds were spot on."
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <p className="text-sm text-white/80 mb-2 font-medium">— Aryan Gupta, IIT Bombay</p>
                <p className="text-xs text-white/60 mb-4">SDE-1 at Google</p>
                <div className="flex items-center gap-2 bg-white/5 w-fit px-3 py-1.5 rounded-full border border-white/5">
                  <div className="text-sm font-bold text-white">4.9</div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <ParallaxImage src="/images/feature-interview.png" alt="AI Mock Interview Interface" height="h-40" />
                <ParallaxImage src="/images/feature-interview-2.jpg" alt="Career transformation" height="h-40" delay={0.1} />
              </div>
            </CardContent>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}

function SpotlightCard({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = React.useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.currentTarget) return
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="h-full"
    >
      <Card
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="h-full bg-white/5 border-white/10 overflow-hidden group backdrop-blur-sm relative"
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
          }}
        />
        <div className="relative z-10 h-full flex flex-col justify-between">
          {children}
        </div>
      </Card>
    </motion.div>
  )
}

function ParallaxImage({ src, alt, height = "aspect-[3/4]", delay = 0 }: { src: string, alt: string, height?: string, delay?: number }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, delay }}
      className={`relative ${height} overflow-hidden rounded-xl border border-white/10 group-hover:border-white/20 transition-colors`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(min-width: 768px) 240px, 45vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
    </motion.div>
  )
}

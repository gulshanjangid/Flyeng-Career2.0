"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X, Zap, Brain, Target, Code2, FileText, Users, Sparkles, Copy, Frown, Search, Trophy, MousePointer2 } from 'lucide-react'

// --- Visual Effects Components ---

import { BorderBeam } from "@/components/ui/border-beam"

function SubtleWarpCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Reduced stiffness and damping for a smoother, slower feel
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 })

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    // Reduced multiplier for subtle effect
    x.set(distanceX * 0.05)
    y.set(distanceY * 0.05)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  // Very subtle skew range
  const skewX = useTransform(mouseX, [-100, 100], [-1, 1])
  const skewY = useTransform(mouseY, [-100, 100], [-1, 1])
  const scale = useTransform(mouseX, [-100, 100], [1, 1.01])

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: mouseX, y: mouseY, skewX, skewY, scale }}
      className={`relative transition-colors duration-200 ${className}`}
    >
      {children}
    </motion.div>
  )
}

// --- Main Page Component ---

const storyStages = [
  {
    id: "frustrated",
    title: "The Struggle",
    desc: "Endless applications. Zero replies. The feeling of being lost in a crowded job market.",
    color: "text-red-500",
    image: "/story-frustrated.png"
  },
  {
    id: "discovery",
    title: "The Discovery",
    desc: "Finding Flyeng Career. AI tools that finally make sense of the chaos.",
    color: "text-cyan-500",
    image: "/story-discovery.png"
  },
  {
    id: "success",
    title: "The Triumph",
    desc: "Landing the dream job. Confidence restored. A future secured.",
    color: "text-yellow-500",
    image: "/story-success.png"
  }
]

const bentoItems = [
  {
    title: "AI Resume Builder",
    desc: "Beat the ATS with AI-optimized resumes.",
    icon: FileText,
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
    border: "border-blue-500/20"
  },
  {
    title: "Mock Interviews",
    desc: "Practice with an AI that adapts to you.",
    icon: Users,
    colSpan: "md:col-span-1",
    bg: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
    border: "border-purple-500/20"
  },
  {
    title: "Code Explainer",
    desc: "Understand complex algorithms instantly.",
    icon: Code2,
    colSpan: "md:col-span-1",
    bg: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
    border: "border-green-500/20"
  },
  {
    title: "Career Roadmap",
    desc: "Your personalized path to success.",
    icon: Target,
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
    border: "border-orange-500/20"
  },
]

export default function FeaturesPage() {
  const [currentStage, setCurrentStage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % storyStages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#030014] text-white overflow-hidden selection:bg-cyan-500/30 flex flex-col">
      <SiteHeader />

      <main className="relative z-10 pt-24 flex-1">
        {/* Hero */}
        <section className="container mx-auto px-4 text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">Supercharge Your Prep</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-400">
              Features that <br /> Set You Apart
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A complete suite of AI-powered tools designed to give you the unfair advantage in your placement journey.
            </p>
          </motion.div>
        </section>

        {/* 3D Deck Story Animation */}
        <section className="container mx-auto px-4 mb-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left: 3D Card Stack */}
            <div className="relative h-[400px] w-full perspective-1000">
              <AnimatePresence mode="popLayout">
                {storyStages.map((stage, index) => {
                  if (index !== currentStage) return null

                  return (
                    <motion.div
                      key={stage.id}
                      initial={{ opacity: 0, rotateY: -90, x: -100 }}
                      animate={{ opacity: 1, rotateY: 0, x: 0 }}
                      exit={{ opacity: 0, rotateY: 90, x: 100 }}
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                    >
                      <Image
                        src={stage.image}
                        alt={stage.title}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className={`text-3xl font-bold mb-2 ${stage.color}`}>{stage.title}</h3>
                        <p className="text-gray-300 text-lg">{stage.desc}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
                {storyStages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentStage(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentStage === idx ? 'bg-white w-8' : 'bg-white/20 hover:bg-white/50'}`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Context */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold leading-tight">
                From <span className="text-red-500 line-through decoration-red-500/50">Struggle</span> to <span className="text-yellow-500">Success</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                See how Flyeng Career transforms the chaotic job hunt into a streamlined, confident journey towards your dream role.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">3x</div>
                  <div className="text-sm text-gray-400">Faster Prep</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">90%</div>
                  <div className="text-sm text-gray-400">Interview Clearance</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subtle Warp Bento Grid */}
        <section className="container mx-auto px-4 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bentoItems.map((item, i) => (
              <div key={i} className={`${item.colSpan}`}>
                <SubtleWarpCard className="h-full">
                  <Card className={`h-full bg-[#0a0a0a] border-white/10 overflow-hidden hover:border-white/20 transition-colors shadow-2xl group`}>
                    <div className={`absolute inset-0 ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <CardContent className="p-8 relative h-full flex flex-col justify-between z-10">
                      <div>
                        <div className={`w-12 h-12 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="mt-8 flex justify-end">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </SubtleWarpCard>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table with Border Beam */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why We Are Different</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden border border-white/10 group">
              <BorderBeam duration={12} delay={9} />
              <div className="grid grid-cols-3 p-6 border-b border-white/10 bg-white/5 relative z-10">
                <div className="col-span-1 font-bold text-gray-400">Feature</div>
                <div className="col-span-1 font-bold text-center text-white">Flyeng Career</div>
                <div className="col-span-1 font-bold text-center text-gray-500">Others</div>
              </div>
              {[
                "AI-Powered Personalization",
                "Real-time Interview Feedback",
                "Unlimited Resume Parsing",
                "Custom Learning Roadmap",
                "24/7 Mentor Access"
              ].map((feature, i) => (
                <div key={i} className="grid grid-cols-3 p-6 border-b border-white/5 hover:bg-white/5 transition-colors group/row relative z-10">
                  <div className="col-span-1 text-gray-300 flex items-center group-hover/row:text-white transition-colors">{feature}</div>
                  <div className="col-span-1 flex justify-center items-center">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.2)] group-hover/row:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-shadow">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                  <div className="col-span-1 flex justify-center items-center">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <X className="w-4 h-4 text-red-500/50" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </div>
  )
}

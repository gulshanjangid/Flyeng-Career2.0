"use client"

import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { AuroraBackground } from "@/components/aurora-background"
import { StatsSection } from "@/components/stats-section"
import { ValueSection } from "@/components/value-section"
import { motion } from "framer-motion"
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger-container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Users, Globe, Award, Sparkles } from "lucide-react"
import { BackgroundBeams } from "@/components/background-beams"
import { TeamSection } from "@/components/team-section"

export default function AboutPage() {
  return (
    <AuroraBackground>
      <div className="relative min-h-screen text-white selection:bg-purple-500/30 flex flex-col w-full">
        <BackgroundBeams />
        <SiteHeader />

        <main className="relative z-10 flex-1 pt-32 pb-20">
          {/* Hero Section */}
          <div className="container mx-auto px-4 mb-24">
            <StaggerContainer className="text-center max-w-4xl mx-auto">
              <StaggerItem>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                    Revolutionizing Career Prep
                  </span>
                </div>
              </StaggerItem>
              <StaggerItem>
                <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter mix-blend-overlay opacity-90">
                  Architecting <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">Your Ambition</span>
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="text-xl text-blue-100/70 leading-relaxed max-w-2xl mx-auto font-light">
                  Building the bridge between today&apos;s effort and tomorrow&apos;s achievement. Flyeng Career is your AI-powered co-pilot for professional success.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Mission Grid */}
          <div className="container mx-auto px-4 mb-32">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Global Vision",
                  desc: "Democratizing access to world-class career guidance for every student, everywhere.",
                  color: "text-cyan-400",
                  bg: "bg-cyan-500/10"
                },
                {
                  icon: Users,
                  title: "Student Centric",
                  desc: "Designed by students, for students. We understand the pressure and the potential.",
                  color: "text-purple-400",
                  bg: "bg-purple-500/10"
                },
                {
                  icon: Award,
                  title: "Excellence Driven",
                  desc: "Pushing the boundaries of what's possible with AI in education tech.",
                  color: "text-pink-400",
                  bg: "bg-pink-500/10"
                }
              ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-6`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <TeamSection />

          {/* Stats Section */}
          <StatsSection />

          {/* Story Section */}
          <section className="container mx-auto px-4 py-20 relative">
             <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl font-bold">Our Story</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        It started with a simple observation: Talent is universal, but opportunity is not. We realized that millions of capable students miss out on their dream careers simply because they lack the right guidance at the right time.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Flyeng Career was born to solve this. By combining cutting-edge AI with proven pedagogical methods, we've created a platform that adapts to you. It's not just about finding a job—it's about finding <em>your</em> calling.
                    </p>
                    <Button asChild className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-100 font-bold text-lg">
                        <Link href="/contact">
                            Join Our Journey <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-[100px] opacity-20" />
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square bg-grid-white/[0.02] flex items-center justify-center">
                        <div className="text-center">
                            <span className="text-9xl font-black text-white/5">2024</span>
                            <p className="text-gray-500 font-mono mt-4">ESTABLISHED</p>
                        </div>
                    </div>
                </div>
             </div>
          </section>

          {/* Value Section Import */}
          <ValueSection />

        </main>

        <EnhancedFooter />
      </div>
    </AuroraBackground>
  )
}

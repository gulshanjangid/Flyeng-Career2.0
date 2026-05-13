"use client"

import { motion } from "framer-motion"
import { CheckCircle, Zap, Shield, Target } from "lucide-react"

const values = [
  {
    title: "AI Personalization",
    description: "Every recommendation adapts to your skills, goals, and learning pace.",
    icon: Target
  },
  {
    title: "Real Simulations",
    description: "Practice with AI that behaves like actual recruiters from top companies.",
    icon: Zap
  },
  {
    title: "Placement Support",
    description: "24/7 mentor network ready to review your profile and applications.",
    icon: Shield
  },
  {
    title: "1000+ Job Matches",
    description: "Daily-updated opportunities from startups to Fortune 500 companies.",
    icon: CheckCircle
  },
]

export function ValueSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 relative z-10">

      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Why Flyeng?
        </motion.h2>
        <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
          Join thousands of Indian students who&apos;ve transformed their careers with our AI co-pilot.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {values.map((value, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.05] transition-colors overflow-hidden"
          >
            <div className="relative z-10 flex items-start gap-5">
              <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                <value.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.description}</p>
              </div>
            </div>

            {/* Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

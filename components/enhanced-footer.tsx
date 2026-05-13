"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Youtube, ArrowRight, Sparkles } from 'lucide-react'
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "Empowering Indian students to secure their dream placements with AI-powered tools.",
  copyright: "© 2026 Flyeng Career",
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 }
    const xPos = clientX - (left + width / 2)
    const yPos = clientY - (top + height / 2)
    x.set(xPos)
    y.set(yPos)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseXSpring, y: mouseYSpring }}
    >
      {children}
    </motion.div>
  )
}

export function EnhancedFooter({ showCta = true }: { showCta?: boolean }) {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <footer className="relative bg-[#020202] border-t border-white/10 text-white overflow-hidden pt-20 pb-10 shadow-[0_-20px_60px_-15px_rgba(0,0,0,1)] z-40">
      {/* Massive Glowing Background Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none opacity-[0.03]">
        <div className="text-[15vw] font-black text-center whitespace-nowrap text-white leading-none tracking-tighter mix-blend-overlay" aria-hidden="true">
          FLYENG
        </div>
      </div>

      {/* Background Gradients - Reduced opacity for cleaner look */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Main CTA Section */}
        {showCta && (
          <div className="flex flex-col items-center justify-center text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-3 h-3" />
              Ready to Launch?
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Your dream career <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                starts here.
              </span>
            </h2>

            <MagneticButton>
              <Button
                asChild
                className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-lg transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-105"
              >
                <Link href="/signup" className="flex items-center gap-2">
                  Start For Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </MagneticButton>
          </div>
        )}

        <div className="border-t border-white/10 pt-16 pb-8">
          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">

            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <Image src="/icons/skitbit-white.svg" alt="Flyeng Career" fill className="object-contain" />
                </div>
                <span className="text-xl font-bold tracking-tight">Flyeng Career</span>
              </div>
              <p className="text-neutral-400 max-w-sm leading-relaxed">
                {content.tagline}
              </p>
              <div className="flex gap-4">
                {[{ icon: Twitter, href: "#", name: "Twitter" }, { icon: Instagram, href: "#", name: "Instagram" }, { icon: Youtube, href: "#", name: "YouTube" }].map((social, i) => (
                  <MagneticButton key={i}>
                    <a
                      href={social.href}
                      aria-label={`Follow us on ${social.name}`}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-bold mb-6 text-white text-lg">Platform</h4>
              <ul className="space-y-4 text-neutral-400 font-medium">
                {['Features', 'Pricing Plans', 'Testimonials', 'FAQ'].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white text-lg">Resources</h4>
              <ul className="space-y-4 text-neutral-400 font-medium">
                {['Blog', 'Community', 'Career Guide', 'Help Center'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-blue-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white text-lg">Legal</h4>
              <ul className="space-y-4 text-neutral-400 font-medium">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-blue-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-sm text-neutral-400 font-medium">
          <p>{content.copyright}</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500 animate-pulse">❤</span> in India
          </p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react'
import LazyVideo from "./lazy-video"
import Image from "next/image"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "Empowering Indian students to secure their dream placements with AI-powered tools.",
  copyright: "© 2026 Flyeng Career",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
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
    <section className="text-white">
      <div className="container mx-auto px-4 pt-12 sm:pt-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center">From campus to company — faster than ever</h2>
          <Button
            asChild
            className="rounded-full bg-blue-500 px-8 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:bg-blue-600"
          >
            <a href="#contact">
              Start Free
            </a>
          </Button>
        </div>
      </div>

      {/* Download the app */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-cyan-300">YOUR AI CAREER COMPANION</p>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Get matched with your perfect opportunity
              </h3>
              <p className="mt-2 max-w-prose text-sm text-neutral-400">
                Our AI analyzes your profile and connects you with internships, projects, and jobs that match your skills and career goals.
              </p>
            </div>

            {/* Right mockup removed for performance */}
            <div className="hidden md:block"></div>
          </div>
        </Card>
      </div>

      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <Image src="/icons/skitbit-white.svg" alt="Flyeng Career logo" width={24} height={24} className="h-6 w-6" />
                <span className="text-xl font-semibold text-white">Flyeng Career</span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">{content.tagline}</p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Navigation</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {["Home", "Features", "Pricing", "Blog", "About"].map((item) => (
                    <li key={item}>
                      <Link href={`#${item.toLowerCase()}`} className="hover:text-cyan-300">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Company</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {["About", "Contact", "Team"].map((item) => (
                    <li key={item}>
                      <Link href={`#${item.toLowerCase()}`} className="hover:text-purple-300">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Resources & Support */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Resources</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {["Success Stories", "Placement Report", "Free Templates"].map((item) => (
                    <li key={item}>
                      <Link href="#" className="hover:text-purple-300">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Support</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {["Help Center", "Privacy Policy", "Terms"].map((item) => (
                    <li key={item}>
                      <Link href="#" className="hover:text-purple-300">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-center gap-2 border-t border-white/10 pt-6 text-xs text-neutral-500">
            <p>Made in India 🇮🇳 with ❤️ by ex-Google, Microsoft & IIT alumni</p>
            <p>{content.copyright}</p>
          </div>
        </div>
      </footer>
    </section>
  )
}

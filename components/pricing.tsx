"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckCircle2, Zap, Flame, Crown } from 'lucide-react'
import { ExamplesDialog } from "./examples-dialog"

type Feature = { text: string; muted?: boolean; icon?: React.ReactNode }

const ACCENT = "#00D9FF"

function FeatureItem({ text, muted = false, icon }: Feature) {
  return (
    <li className="flex items-start gap-2 group hover:translate-x-1 transition-transform">
      {icon || <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: ACCENT }} />}
      <span className={`text-sm ${muted ? "text-neutral-300" : "text-neutral-100"}`}>{text}</span>
    </li>
  )
}

type Currency = "INR" | "USD"

const PRICES: Record<Currency, { free: string; pro: string; premium: string }> = {
  INR: {
    free: "₹0",
    pro: "₹99",
    premium: "₹299",
  },
  USD: {
    free: "$0",
    pro: "$1.20",
    premium: "$3.60",
  },
}

function guessLocalCurrency(): Currency {
  const lang = typeof navigator !== "undefined" ? navigator.language : ""
  const tz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : ""
  if (/-(IN|PK|BD)\b/i.test(lang) || /(Kolkata|Karachi|Dhaka)/i.test(tz || "")) return "INR"
  return "USD"
}

export function Pricing() {
  const [openPlan, setOpenPlan] = useState<null | "Free" | "Pro" | "Premium">(null)
  const [currency, setCurrency] = useState<Currency>("INR")

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const res = await fetch("/api/geo", { cache: "no-store" })
        if (!res.ok) throw new Error("geo failed")
        const data = await res.json()
        if (!cancelled) setCurrency(data?.currency === "INR" ? "INR" : "USD")
      } catch {
        if (!cancelled) setCurrency(guessLocalCurrency())
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  const plans = [
    {
      name: "Free",
      price: PRICES[currency].free,
      duration: "forever",
      icon: Zap,
      description: "Perfect for getting started",
      features: [
        "Basic AI tools + community",
        "Limited tool access",
        "Community support",
        "Monthly newsletters",
        "Join 25K+ students"
      ],
      highlighted: false
    },
    {
      name: "Pro",
      price: PRICES[currency].pro,
      duration: "/month",
      icon: Flame,
      description: "Most popular choice",
      features: [
        "Everything unlimited + priority matching",
        "All 8 AI tools",
        "Real-time job matching",
        "Resume optimization",
        "Interview prep",
        "Priority email support",
        "Monthly insights report"
      ],
      highlighted: true
    },
    {
      name: "Premium",
      price: PRICES[currency].premium,
      duration: "/month",
      icon: Crown,
      description: "For serious achievers",
      features: [
        "Everything in Pro + guaranteed results",
        "Monthly 1:1 mentor calls",
        "Guaranteed shortlists",
        "Career roadmap",
        "24/7 support access",
        "Custom interview coaching",
        "Direct recruiter connections"
      ],
      highlighted: false
    }
  ]

  return (
    <section id="pricing" className="text-white py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: "rgba(0, 217, 255, 0.1)", border: `1px solid ${ACCENT}` }}
          >
            Transparent Pricing
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            Plans that scale with your ambition
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-300">
            Start free and unlock unlimited potential as you grow.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <Card
                key={plan.name}
                className={`relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.highlighted
                    ? 'liquid-glass-enhanced border-cyan-500/60 shadow-[0_0_40px_rgba(0,217,255,0.4)] ring-1 ring-cyan-500/50'
                    : 'liquid-glass hover:border-cyan-500/40'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-1 rounded-full text-[10px] font-bold text-black">
                    Most Popular
                  </div>
                )}

                <CardHeader className="space-y-4 pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="h-5 w-5" style={{ color: ACCENT }} />
                        <div className="text-sm font-semibold text-neutral-100">{plan.name}</div>
                      </div>
                      <p className="text-xs text-neutral-400">{plan.description}</p>
                    </div>
                  </div>

                  <div className="flex items-end gap-2 text-white">
                    <div className="text-3xl font-bold tracking-tight" style={{ color: ACCENT }}>
                      {plan.price}
                    </div>
                    <span className="pb-1 text-[11px] text-neutral-300">{plan.duration}</span>
                  </div>

                  <Button
                    className={`w-full rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:shadow-lg hover:shadow-cyan-500/50'
                        : 'bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/50'
                    }`}
                  >
                    {plan.name === "Free" ? "Get Started" : "Upgrade Now"}
                  </Button>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="grid gap-3">
                    {plan.features.map((feature, idx) => (
                      <FeatureItem key={idx} text={feature} icon={<CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: ACCENT }} />} />
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-400">
            All plans include 7-day free trial. No credit card required.{" "}
            <Link href="#" className="text-cyan-300 hover:text-cyan-200 transition-colors">
              See detailed comparison
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

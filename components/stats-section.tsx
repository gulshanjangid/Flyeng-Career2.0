"use client"

import { motion, useInView, useSpring, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

const stats = [
  { number: 25000, suffix: "+", label: "Students Helped" },
  { number: 95, suffix: "%", label: "Placement Rate" },
  { number: 60, suffix: " Days", label: "Avg. to First Offer" },
  { number: 4.9, suffix: "/5", label: "Student Rating" },
]

export function StatsSection() {
  return (
    <section className="py-20 relative">
      {/* Gradient Separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <Counter key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ stat, index }: { stat: any, index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const count = useMotionValue(0)
  const rounded = useSpring(count, { duration: 2.5, bounce: 0 })
  const display = useTransform(rounded, (latest) => {
    if (stat.number % 1 !== 0) return latest.toFixed(1) // Float
    return Math.round(latest).toLocaleString() // Int with commas
  })

  useEffect(() => {
    if (isInView) {
      count.set(stat.number)
    }
  }, [isInView, count, stat.number])

  return (
    <div ref={ref} className="text-center group cursor-default">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.1, duration: 0.8 }}
        className="text-4xl sm:text-5xl font-black bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-500"
      >
        <motion.span>{display}</motion.span>{stat.suffix}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 + index * 0.1 }}
        className="text-sm uppercase tracking-widest text-cyan-400 font-medium"
      >
        {stat.label}
      </motion.div>
    </div>
  )
}

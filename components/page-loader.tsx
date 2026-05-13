'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <div className="relative flex flex-col items-center justify-center">
            {/* Glowing Background Orb */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0.3 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              className="absolute w-40 h-40 rounded-full bg-cyan-500 blur-[60px]"
            />

            {/* Corrected SVG for FC Side by Side */}
            <div className="relative z-10 flex gap-2">
              <svg width="160" height="120" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                {/* F */}
                <motion.path
                  d="M30 20 V80 M30 20 H60 M30 50 H55"
                  stroke="url(#gradient-f)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                {/* C */}
                <motion.path
                  d="M130 25 C125 20 110 15 95 25 C80 35 80 65 95 75 C110 85 125 80 130 75"
                  stroke="url(#gradient-c)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="gradient-f" x1="30" y1="20" x2="60" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#06b6d4" />
                    <stop offset="1" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="gradient-c" x1="80" y1="20" x2="130" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#a855f7" />
                    <stop offset="1" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

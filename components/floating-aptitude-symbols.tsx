"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function FloatingAptitudeSymbols() {
  const [elements, setElements] = useState<any[]>([])

  useEffect(() => {
    // Math, Logic, and Reasoning symbols
    const symbols = ["∑", "∫", "∞", "π", "√", "±", "θ", "μ", "Δ", "λ", "{;}", "</>", "&&", "||", "XOR"]
    
    // Generate random positions only on client to avoid hydration mismatch
    const generated = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      scale: 0.5 + Math.random() * 2,
      duration: 15 + Math.random() * 30, // Extremely slow float
      delay: Math.random() * -30, // Start instantly mid-animation
      opacityVal: 0.15 + Math.random() * 0.35, // Increased opacity
      color: Math.random() > 0.6 ? '#a855f7' : '#22d3ee' // Mix of cyan and purple
    }))
    
    setElements(generated)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((el) => (
        <motion.div
           key={el.id}
           className="absolute font-mono font-black select-none pointer-events-none"
           style={{ 
             left: el.left, 
             top: el.top, 
             fontSize: `${2.5 * el.scale}rem`,
             color: el.color,
             textShadow: `0 0 25px ${el.color}`
           }}
           animate={{
             y: [0, -100 * el.scale, 0],
             x: [0, 30 * el.scale, -30 * el.scale, 0],
             opacity: [el.opacityVal, el.opacityVal * 2, el.opacityVal],
             rotate: [0, 45, -45, 0]
           }}
           transition={{
             duration: el.duration,
             repeat: Infinity,
             delay: el.delay,
             ease: "easeInOut"
           }}
        >
          {el.symbol}
        </motion.div>
      ))}
    </div>
  )
}

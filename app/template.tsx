"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Transforms and filters break `position: fixed` relative to the viewport.
  // The dashboard relies on `fixed` sidebars, so we disable the animation wrapper there.
  if (pathname?.startsWith('/dashboard')) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

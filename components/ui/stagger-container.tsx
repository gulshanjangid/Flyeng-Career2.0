"use client"

import { motion } from "framer-motion"

export const StaggerContainer = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const StaggerItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
            }}
        >
            {children}
        </motion.div>
    )
}

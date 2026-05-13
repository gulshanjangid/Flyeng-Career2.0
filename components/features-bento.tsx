"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { FileText, Map, Mic, Briefcase, Code, Lightbulb, Zap, Shield, Globe } from "lucide-react"

const features = [
    {
        title: "AI Resume Architect",
        desc: "ATS-proof templates generated in seconds.",
        icon: FileText,
        color: "bg-blue-500",
        size: "h-[350px]"
    },
    {
        title: "Global Job Matcher",
        desc: "Scans 50+ boards for your perfect role.",
        icon: Globe,
        color: "bg-cyan-500",
        size: "h-[200px]"
    },
    {
        title: "Interview Simulator",
        desc: "Real-time voice coaching with feedback.",
        icon: Mic,
        color: "bg-rose-500",
        size: "h-[300px]"
    },
    {
        title: "Career Roadmap",
        desc: "Step-by-step path to your dream job.",
        icon: Map,
        color: "bg-purple-500",
        size: "h-[250px]"
    },
    {
        title: "Code Analysis",
        desc: "Optimize your GitHub portfolio.",
        icon: Code,
        color: "bg-yellow-500",
        size: "h-[300px]"
    },
    {
        title: "Salary Negotiator",
        desc: "AI script generator for higher pay.",
        icon: Shield,
        color: "bg-emerald-500",
        size: "h-[200px]"
    }
]

export function FeaturesBento() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    // Optimized Parallax: Reduced movement range for smoother 60fps
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 50])

    return (
        <section ref={ref} className="relative py-24 bg-black overflow-hidden flex flex-col items-center">

            {/* Header */}
            <div className="text-center mb-16 relative z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                    <span className="text-sm font-medium text-white/80">Capabilities</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6"
                >
                    The Neural Grid.
                </motion.h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto">
                    A suite of interconnected AI tools designed to accelerate your career trajectory.
                </p>
            </div>

            {/* Grid Container */}
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10 will-change-transform">

                {/* Column 1 */}
                <motion.div style={{ y: y1 }} className="flex flex-col gap-5">
                    {features.slice(0, 2).map((feat, i) => (
                        <FeatureCard key={i} feature={feat} />
                    ))}
                </motion.div>

                {/* Column 2 */}
                <motion.div style={{ y: y2 }} className="flex flex-col gap-5 pt-8 md:pt-16">
                    {features.slice(2, 4).map((feat, i) => (
                        <FeatureCard key={i} feature={feat} />
                    ))}
                </motion.div>

                {/* Column 3 */}
                <motion.div style={{ y: y3 }} className="flex flex-col gap-5">
                    {features.slice(4, 6).map((feat, i) => (
                        <FeatureCard key={i} feature={feat} />
                    ))}
                </motion.div>

            </div>

            {/* Background Elements - Static for performance */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
        </section>
    )
}

function FeatureCard({ feature }: { feature: any }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={`relative w-full ${feature.size} rounded-2xl p-6 overflow-hidden group border border-white/10 bg-neutral-900/50 backdrop-blur-md transition-colors hover:border-white/20`}
        >
            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className={`w-10 h-10 rounded-lg ${feature.color} bg-opacity-20 flex items-center justify-center border border-white/10 mb-4`}>
                    <feature.icon className="w-5 h-5 text-white" />
                </div>

                <div>
                    <h3 className="text-xl font-bold text-white mb-1.5">{feature.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
                </div>
            </div>

            {/* Hover Glow - Simplified for Performance */}
            <div className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full ${feature.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
        </motion.div>
    )
}

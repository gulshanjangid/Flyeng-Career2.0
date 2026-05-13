"use client"

import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Sparkles, Zap, Target, CheckCircle2, PenTool, Star, Quote, Command } from 'lucide-react'
import Link from "next/link"
import { useRef, useState } from "react"

export default function CoverLetterLandingPage() {
    const containerRef = useRef(null)
    const examplesRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const scrollToExamples = () => {
        examplesRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="min-h-screen bg-black text-zinc-100 overflow-hidden font-sans selection:bg-purple-500/30" ref={containerRef}>
            <SiteHeader />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-20">
                {/* Refined Aurora Background */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
                    <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-pink-500/5 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-[8000ms]" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-md mb-8 hover:bg-zinc-800/50 transition-colors"
                            >
                                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                                <span className="text-xs font-medium text-zinc-300">Intelligent Narrative Engine</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                                className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500"
                            >
                                Craft the Perfect
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x inline-block mt-2">
                                    Application Story.
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed font-medium max-w-xl"
                            >
                                Transform your resume into a compelling narrative. Our engine perfectly synthesizes your experience with the job description to output application letters that command attention.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                className="flex flex-col sm:flex-row items-center sm:items-start gap-4"
                            >
                                <Link href="/ai-tools/cover-letter/app" className="w-full sm:w-auto group">
                                    <Button className="w-full sm:w-auto h-14 px-8 bg-zinc-100 text-black hover:bg-white rounded-xl text-base font-semibold transition-all hover:scale-[1.02] active:scale-95 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                        <Command className="w-4 h-4 mr-2" />
                                        Initialize Engine Free
                                    </Button>
                                </Link>
                                <Button
                                    variant="ghost"
                                    className="w-full sm:w-auto h-14 px-8 rounded-xl text-base font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all"
                                    onClick={scrollToExamples}
                                >
                                    <CheckCircle2 className="w-4 h-4 mr-2" />
                                    View Output Logs
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                                className="mt-16 flex items-center gap-4 text-xs font-mono text-zinc-500 justify-center sm:justify-start"
                            >
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-7 h-7 rounded-full border border-black bg-zinc-800" />
                                    ))}
                                </div>
                                <span className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/80 animate-pulse" />
                                    12,400+ LETTERS GENERATED
                                </span>
                            </motion.div>
                        </div>

                        {/* 3D Tilt Card Component */}
                        <div className="relative perspective-1000 hidden lg:flex justify-end">
                            <TiltCard />
                        </div>
                    </div>
                </div>
            </section>

            {/* Seamless Infinite Marquee */}
            <section className="py-8 border-y border-zinc-900 bg-black/50 backdrop-blur-xl overflow-hidden">
                <div className="flex gap-16 animate-marquee whitespace-nowrap opacity-40 mix-blend-screen">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-16 items-center">
                            {["Vercel", "Linear", "Raycast", "Supabase", "Stripe", "Figma", "OpenAI", "Anthropic"].map((company) => (
                                <span key={company} className="text-xl font-bold text-zinc-500 uppercase tracking-[0.2em] font-mono">
                                    {company}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* Premium Bento Grid Features */}
            <section className="py-32 relative z-10 bg-black">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Engineered for Success</h2>
                        <p className="text-zinc-400 text-lg">Precision tools that give you an unfair advantage.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Target,
                                title: "ATS Architecture",
                                desc: "Algorithms inherently format and inject critical semantic keywords to bypass automated filtering systems.",
                                color: "text-blue-400",
                                glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]"
                            },
                            {
                                icon: Zap,
                                title: "Sub-second Generation",
                                desc: "High-throughput inference API computes tailored narratives faster than you can open a blank document.",
                                color: "text-yellow-400",
                                glow: "group-hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)]"
                            },
                            {
                                icon: Star,
                                title: "Adaptive Tonality",
                                desc: "Dynamically adjust the linguistic style from highly rigorous to energetic, adapting perfectly to startup culture or enterprise.",
                                color: "text-purple-400",
                                glow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]"
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                className={`p-8 rounded-3xl bg-zinc-950 border border-zinc-900 hover:bg-zinc-900/80 hover:border-zinc-800 transition-all duration-500 group relative overflow-hidden ${feature.glow}`}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                
                                <div className={`w-12 h-12 rounded-xl bg-black border border-zinc-800 flex items-center justify-center mb-6 ${feature.color} shadow-inner`}>
                                    <feature.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 tracking-tight text-zinc-100">{feature.title}</h3>
                                <p className="text-zinc-400 leading-relaxed text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clean Examples Interface */}
            <section ref={examplesRef} className="py-32 relative z-10 bg-zinc-950 border-t border-zinc-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">System Output Logs</h2>
                        <p className="text-zinc-400">Review unaltered generations from the language model applied to real tech roles.</p>
                    </div>
                    <ExamplesTabs />
                </div>
            </section>

            <EnhancedFooter />
        </div>
    )
}

function TiltCard() {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 400, damping: 90 })
    const mouseY = useSpring(y, { stiffness: 400, damping: 90 })

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect()
        x.set(clientX - left - width / 2)
        y.set(clientY - top - height / 2)
    }

    const rotateX = useTransform(mouseY, [-300, 300], [12, -12])
    const rotateY = useTransform(mouseX, [-300, 300], [-12, 12])

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={onMouseMove}
            onMouseLeave={() => {
                x.set(0)
                y.set(0)
            }}
            className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2rem] bg-zinc-950 border border-zinc-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden group cursor-pointer ring-1 ring-white/5"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative h-full p-8 flex flex-col transform-gpu translate-z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20 ring-1 ring-white/20">
                        <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                        <div className="h-3 w-32 bg-white/10 rounded-md mb-2" />
                        <div className="h-2 w-20 bg-zinc-800 rounded-md" />
                    </div>
                </div>

                {/* Skeleton Document */}
                <div className="space-y-4 flex-1">
                    <div className="flex gap-2 mb-6">
                        <div className="h-2 w-1/3 bg-zinc-800 rounded-full" />
                        <div className="h-2 w-1/4 bg-zinc-800 rounded-full" />
                    </div>
                    <div className="h-2 w-full bg-zinc-800/80 rounded-full" />
                    <div className="h-2 w-full bg-zinc-800/80 rounded-full" />
                    <div className="h-2 w-5/6 bg-zinc-800/80 rounded-full" />
                    <div className="h-2 w-11/12 bg-zinc-800/80 rounded-full" />
                    
                    <div className="mt-8 p-4 rounded-xl bg-black/60 border border-zinc-800/80 backdrop-blur-md relative transform group-hover:translate-x-2 transition-transform duration-500">
                        <div className="absolute -left-2 top-1/2 -mt-1 w-1 h-2 bg-purple-500 rounded-full" />
                        <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold mb-2 ml-2">
                            <Zap className="w-3 h-3" /> SYNTHESIS ENGINE
                        </div>
                        <p className="text-[11px] font-mono text-zinc-400 leading-relaxed ml-2">
                            &gt; Mapped internal leadership metrics to highly correlate with {"{TARGET_ROLE}"} requirements. Tone optimized...
                        </p>
                    </div>
                </div>

                <div className="mt-auto pt-6 border-t border-zinc-900 flex justify-between items-center font-mono text-[10px]">
                    <div className="flex items-center gap-3 text-zinc-500">
                        <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> TOKENS: 1024</span>
                        <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> LATENCY: 85ms</span>
                    </div>
                    <div className="px-2 py-1 rounded bg-zinc-900 text-zinc-400">READY</div>
                </div>
            </div>
        </motion.div>
    )
}

function ExamplesTabs() {
    const [activeTab, setActiveTab] = useState("frontend")

    const examples = {
        frontend: {
            role: "Senior Frontend Engineer",
            company: "Vercel",
            content: `Dear Hiring Manager,

I am writing to express my strong interest in the Senior Frontend Engineer position at Vercel. As a developer who has built high-performance web applications using Next.js for the past four years, I have long admired Vercel's commitment to improving the developer experience and web performance.

In my current role at TechFlow, I led the migration of our legacy e-commerce platform to a modern Next.js architecture, resulting in a 40% improvement in Core Web Vitals and a 25% increase in conversion rates. I am particularly proud of implementing a custom edge caching strategy that reduced global latency by 150ms.

Your job description emphasizes a need for deep expertise in React Server Components and edge computing. I have been experimenting with RSCs since their beta release and recently deployed a production dashboard that leverages streaming to reduce initial load time by 60%.

I am excited about the opportunity to contribute to the platform that powers the modern web. Thank you for considering my application.

Best regards,
[Your Name]`
        },
        product: {
            role: "Product Manager",
            company: "Linear",
            content: `Dear Hiring Team,

Linear has set a new standard for software craftsmanship, and I am thrilled to apply for the Product Manager role. I believe that productivity tools should not just be functional but also delightful—a philosophy that Linear embodies perfectly.

At my current startup, I managed the roadmap for our core collaboration tool, growing our daily active users from 5k to 50k in 18 months. I achieved this by implementing a "quality-first" approach, prioritizing polish and performance over feature bloat. I also introduced a customer feedback loop that reduced churn by 15%.

I noticed you are looking for someone who can bridge the gap between engineering and design. With my background in CS and my experience working closely with design systems, I thrive in that intersection. I am passionate about building tools that respect the user's time and focus.

I would love to discuss how I can help Linear continue to define the future of issue tracking.

Sincerely,
[Your Name]`
        },
        intern: {
            role: "Software Engineering Intern",
            company: "Google",
            content: `Dear Google Recruiting Team,

I am a final-year Computer Science student at [University Name] with a passion for distributed systems and scalable infrastructure. I am writing to apply for the Software Engineering Intern position for Summer 2026.

Through my academic projects and previous internships, I have developed a strong foundation in algorithms and data structures. Last summer, I interned at a fintech startup where I optimized a high-frequency trading algorithm in C++, reducing execution time by 12%. I also built a distributed file system in Go for my capstone project, handling node failures and data replication.

Google's work on Spanner and Kubernetes has been a major inspiration for my studies. I am eager to learn from the world's best engineers and contribute to solving complex problems at scale. I am a quick learner, a collaborative team player, and I am ready to tackle the challenges of a large-scale engineering environment.

Thank you for your time and consideration.

Best,
[Your Name]`
        }
    }

    return (
        <div className="max-w-4xl mx-auto">
            {/* Minimalist Tabs */}
            <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-4 no-scrollbar">
                {Object.keys(examples).map((key) => (
                    <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeTab === key
                                ? "bg-white text-black shadow-md shadow-white/10"
                                : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                            }`}
                    >
                        {examples[key as keyof typeof examples].role}
                    </button>
                ))}
            </div>

            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-black border border-zinc-800/80 rounded-2xl md:rounded-3xl p-6 md:p-10 relative shadow-2xl group"
            >
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none text-white">
                    <Quote className="w-32 h-32" />
                </div>
                
                {/* Modern Header block */}
                <div className="flex flex-col md:flex-row md:items-center gap-5 mb-8 relative z-10 pb-6 border-b border-zinc-900">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl font-bold text-zinc-300 shadow-inner">
                        {examples[activeTab as keyof typeof examples].company[0]}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-zinc-100">{examples[activeTab as keyof typeof examples].role}</h3>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-zinc-500">Target Company:</span>
                            <span className="text-xs font-medium text-zinc-300 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                                {examples[activeTab as keyof typeof examples].company}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="font-serif text-base md:text-[1.05rem] leading-loose text-zinc-300 whitespace-pre-wrap relative z-10 max-w-3xl selection:bg-purple-500/30">
                    {examples[activeTab as keyof typeof examples].content}
                </div>
                
                <div className="mt-8 pt-4 flex justify-between items-center relative z-10">
                    <div className="flex gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-pulse" />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}


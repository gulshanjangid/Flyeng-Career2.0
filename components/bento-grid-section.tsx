import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    ScanLine,
    Mic,
    Code2,
    Users,
    Globe2,
    TrendingUp,
    ArrowUpRight,
    Zap,
    Cpu,
    Layout,
    BrainCircuit,
    Terminal,
    Network,
    Radar,
    Sparkles
} from "lucide-react";
import Link from "next/link";
import { FeatureCard } from "@/components/feature-card";

// Font classes referenced from layout.tsx global system — no inline font loads
const oswald = { className: "font-heading" } // mapped to Outfit (heading font)
const inter = { className: "font-body" }     // mapped to Plus Jakarta Sans (body font)

// === OPTIMIZED CARD COMPONENT ===
function BentoCard({ children, className = "", gradient = "from-white/5 to-transparent", href }: { children: React.ReactNode; className?: string, gradient?: string, href?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const Content = (
        <>
            {/* Hover Gradient Background */}
            <div className={cn("absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[0.2,0.4,0.2,1]", gradient)} />

            {/* Mouse Spotlight - Desktop Only */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 hidden md:block"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                        600px circle at ${mouseX}px ${mouseY}px,
                        rgba(255,255,255,0.08),
                        transparent 40%
                        )
                    `,
                }}
            />

            {/* Content Container */}
            <div className="relative h-full z-20 flex flex-col">{children}</div>
        </>
    );

    const containerClass = cn(
        "group relative bg-[#050505] overflow-hidden rounded-[24px] border border-white/5 block h-full will-change-transform transform-gpu",
        className
    );

    if (href) {
        return (
            <Link href={href} className={containerClass} onMouseMove={handleMouseMove}>
                {Content}
            </Link>
        );
    }

    return (
        <div className={containerClass} onMouseMove={handleMouseMove}>
            {Content}
        </div>
    );
}

// === HOVER-TRIGGERED ANIMATIONS ===

// 1. Resume Hologram
function ResumeHologram() {
    return (
        <div className="absolute right-0 bottom-0 w-[45%] h-[55%] md:w-[60%] md:h-[70%] pointer-events-none opacity-80 md:opacity-60 group-hover:opacity-100 transition-opacity duration-500">
            <div className="relative w-full h-full bg-[#0a0a0a] rounded-tl-xl border-l border-t border-white/10 shadow-2xl p-4 flex flex-col gap-3 group-hover:-translate-y-2 transition-transform duration-700 ease-[0.2,0.4,0.2,1]">
                {/* ... (UI Content) ... */}
                <div className="flex gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-cyan-900/40" />
                    <div className="space-y-1">
                        <div className="w-20 h-2 bg-white/10 rounded-full" />
                        <div className="w-12 h-1.5 bg-white/5 rounded-full" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="w-full h-1.5 bg-white/5 rounded-full" />
                    <div className="w-full h-1.5 bg-white/5 rounded-full" />
                </div>
                <div className="mt-auto flex justify-between items-center text-cyan-400">
                    <span className="text-[10px] font-bold">ATS SCORE</span>
                    <span className="text-xl font-bold">99%</span>
                </div>
                {/* Laser only moves on hover */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)] opacity-0 group-hover:opacity-100"
                    animate={{ translateY: ["0%", "100%", "0%"] }}
                    transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                    style={{ willChange: 'transform' }}
                />
            </div>
        </div>
    )
}

// 2. Portfolio Engine (Self-Building Website)
function PortfolioVisual() {
    const itemVariants = {
        hidden: { scale: 0.8, opacity: 0, y: 10 },
        visible: (i: number) => ({
            scale: 1,
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.4, ease: "backOut" as any }
        })
    }

    return (
        <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="relative w-48 h-32 border border-white/10 rounded-lg bg-black flex flex-col overflow-hidden">
                <div className="h-4 border-b border-white/5 bg-white/5 flex items-center px-2 gap-1">
                    <div className="w-1 h-1 rounded-full bg-slate-500" />
                    <div className="w-1 h-1 rounded-full bg-slate-500" />
                </div>
                {/* Constructing UI - variants trigger on parent hover because we'll use motion.div with whileHover on parent or just CSS based stagger? 
                    Actually framer motion requires 'animate' prop change. We can use parent 'group-hover' to trigger css or simpler framer logic.
                    Let's use a continuous animation that only plays when hovered? Or just play loop.
                    Sticking to loop for visibility but opacity change for focus.
                */}
                <motion.div
                    className="p-2 grid grid-cols-3 gap-1"
                    initial="hidden"
                    whileInView="visible" // Autoplay for demo, but opacity handles the "reveal"
                >
                    <motion.div variants={itemVariants} custom={0} className="col-span-3 h-8 bg-blue-900/20 rounded border border-blue-500/20" />
                    <motion.div variants={itemVariants} custom={1} className="col-span-1 h-12 bg-purple-900/20 rounded border border-purple-500/20" />
                    <motion.div variants={itemVariants} custom={2} className="col-span-2 h-12 bg-white/5 rounded" />
                </motion.div>

                {/* Cursor construction effect */}
                <motion.div
                    className="absolute w-3 h-3 border-l border-t border-white z-10 opacity-0 group-hover:opacity-100"
                    animate={{ x: [10, 100, 40], y: [10, 50, 80] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </div>
        </div>
    )
}

// 3. DSA Visualizer (Active Tree)
function DSAVisual() {
    return (
        <div className="absolute right-4 bottom-4 w-24 h-24 opacity-60 group-hover:opacity-100 transition-opacity">
            <div className="relative w-full h-full">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-500 border border-yellow-300 shadow-[0_0_10px_rgba(234,179,8,0.5)] z-10" />

                {/* Edges expanding on hover */}
                <motion.div className="absolute top-2 left-1/2 w-px bg-white/40 origin-top h-0 group-hover:h-8 transition-all duration-500 ease-out -rotate-45" />
                <motion.div className="absolute top-2 left-1/2 w-px bg-white/40 origin-top h-0 group-hover:h-8 transition-all duration-500 ease-out rotate-45" />

                {/* Nodes popping */}
                <motion.div className="absolute top-8 left-2 w-3 h-3 rounded-full bg-slate-700 border border-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 delay-100" />
                <motion.div className="absolute top-8 right-2 w-3 h-3 rounded-full bg-slate-700 border border-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 delay-100" />
            </div>
        </div>
    )
}

// 4. Job Radar
function RadarScan() {
    return (
        <div className="absolute right-[-20px] bottom-[-40px] w-48 h-48 opacity-20 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none">
            <div className="relative w-full h-full rounded-full border border-emerald-500/30">
                <div className="absolute inset-[20%] border border-emerald-500/20 rounded-full" />
                <div className="absolute inset-[40%] border border-emerald-500/10 rounded-full" />
                {/* Sweep */}
                <motion.div
                    className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(16,185,129,0.5)_360deg)] rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                />
                {/* Blip */}
                <motion.div
                    className="absolute top-[20%] right-[20%] w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </div>
        </div>
    )
}

// 5. Tech Stack
function TechStackBadges() {
    return (
        <div className="flex flex-wrap gap-2 mt-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            {["DSA", "C++", "JAVA", "PYTHON", "GENAI"].map((tech, i) => (
                <span key={i} className="px-2 py-1 rounded border border-white/10 bg-white/5 text-[10px] font-mono text-white/60 group-hover:text-white group-hover:border-white/30 transition-colors">
                    {tech}
                </span>
            ))}
        </div>
    )
}

// 6. Mentor Avatars Hover
function MentorHover() {
    return (
        <div className="flex-1 flex flex-col justify-center gap-3">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                    <div className="w-8 h-8 rounded-full bg-slate-700 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20" />
                    </div>
                    <div className="flex-1 h-2 bg-white/10 rounded-full group-hover:bg-blue-400/20 transition-colors" />
                </div>
            ))}
        </div>
    )
}

// === MAIN SECTION ===
export function BentoGridSection() {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1, y: 0,
            transition: { delay: i * 0.05, duration: 0.6, ease: "easeInOut" as any }
        })
    };

    return (
        <section className={cn("py-20 md:py-32 bg-[#020202] relative overflow-hidden", inter.className)}>

            {/* Atmosphere */}
            <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-900/10 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={cn("text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4", oswald.className)}
                    >
                        THE COMPLETE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 block sm:inline">
                            CAREER ARSENAL.
                        </span>
                    </motion.h2>
                    <p className="text-white/40 text-lg max-w-xl">
                        Everything you need to go from student to hired. Powered by AI.
                    </p>
                </div>

                {/* THE GRID */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[minmax(220px,auto)]"
                >

                    {/* 1. RESUME ARCHITECT */}
                    <motion.div custom={0} variants={fadeIn} className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 min-h-[260px] md:h-full">
                        <FeatureCard className="h-full">
                        <BentoCard href="/ai-tools/resume-builder" gradient="from-cyan-900/20 to-transparent" className="h-full p-8 flex flex-col justify-between">
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <ScanLine className="w-6 h-6 text-cyan-400" />
                                </div>
                                <h3 className={cn("text-2xl md:text-3xl font-bold text-white mb-2", oswald.className)}>Resume Architect</h3>
                                <p className="text-white/50 max-w-xs text-sm">
                                    Beat the ATS. Our AI parses and rebuilds your resume to match job descriptions perfectly.
                                </p>
                            </div>
                            <ResumeHologram />
                        </BentoCard>
                        </FeatureCard>
                    </motion.div>

                    {/* 2. INSTANT PORTFOLIO ENGINE (Renamed) */}
                    <motion.div custom={1} variants={fadeIn} className="col-span-1 md:col-span-2 row-span-1 min-h-[180px] md:h-full">
                        <FeatureCard className="h-full">
                        <BentoCard href="/ai-tools/website-builder" gradient="from-pink-900/20 to-transparent" className="h-full p-6 flex flex-row items-center justify-between pointer-events-none md:pointer-events-auto">
                            <div className="relative z-10 max-w-[200px]">
                                <div className="flex items-center gap-2 mb-2">
                                    <Layout className="w-5 h-5 text-pink-400" />
                                    <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">New</span>
                                </div>
                                <h3 className={cn("text-xl font-bold text-white mb-1", oswald.className)}>Instant Portfolio Engine</h3>
                                <p className="text-white/50 text-xs">
                                    Generates a live, deployed portfolio website from your resume in seconds.
                                </p>
                            </div>
                            <div className="relative w-32 h-24 hidden sm:block">
                                <PortfolioVisual />
                            </div>
                        </BentoCard>
                        </FeatureCard>
                    </motion.div>

                    {/* 3. NEURAL VOICE AI */}
                    <motion.div custom={2} variants={fadeIn} className="col-span-1 md:col-span-1 row-span-1 md:row-span-2 min-h-[220px] md:h-full">
                        <FeatureCard className="h-full">
                        <BentoCard href="/ai-tools/mock-interview" gradient="from-fuchsia-900/20 to-transparent" className="h-full p-6 flex flex-col relative overflow-hidden">
                            <div className="relative z-10 mb-4">
                                <Mic className="w-8 h-8 text-fuchsia-400 mb-4 group-hover:scale-110 transition-transform duration-500" />
                                <h3 className={cn("text-2xl font-bold text-white mb-2 leading-none", oswald.className)}>Neural Voice AI</h3>
                                <p className="text-white/50 text-xs">Mock interviews with real-time audio feedback.</p>
                            </div>
                            <div className="mt-auto flex gap-1 justify-center h-16 items-end pb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                {[...Array(6)].map((_, i) => (
                                    <motion.div key={i} className="w-1.5 bg-fuchsia-500/50 rounded-full"
                                        style={{ height: '100%', willChange: 'transform', transformOrigin: 'bottom' }}
                                        animate={{ scaleY: [0.2, 1, 0.2] }}
                                        transition={{ duration: 0.5 + Math.random(), repeat: Infinity }}
                                    />
                                ))}
                            </div>
                        </BentoCard>
                        </FeatureCard>
                    </motion.div>

                    {/* 4. MENTOR NETWORK */}
                    <motion.div custom={3} variants={fadeIn} className="col-span-1 md:col-span-1 row-span-1 md:row-span-2 min-h-[220px] md:h-full">
                        <BentoCard href="/ai-tools" gradient="from-blue-900/20 to-transparent" className="h-full p-6 flex flex-col">
                            <Users className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-500" />
                            <h3 className={cn("text-2xl font-bold text-white mb-2 leading-none", oswald.className)}>Mentor Network</h3>
                            <p className="text-white/50 text-xs mb-6">1:1 access to MAANG engineers.</p>
                            <MentorHover />
                        </BentoCard>
                    </motion.div>

                    {/* 5. ALGO DOJO */}
                    <motion.div custom={4} variants={fadeIn} className="col-span-1 md:col-span-2 row-span-1 min-h-[170px] md:h-full">
                        <BentoCard href="/ai-tools/compiler" gradient="from-green-900/20 to-transparent" className="h-full p-6 flex flex-col">
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <Code2 className="w-5 h-5 text-green-400" />
                                        <h3 className={cn("text-xl font-bold text-white", oswald.className)}>Algo Dojo</h3>
                                    </div>
                                    <p className="text-white/50 text-xs">Interactive Code Execution Environment.</p>
                                </div>
                            </div>
                            <TechStackBadges />
                        </BentoCard>
                    </motion.div>

                    {/* 6. AI QUIZ GENERATOR */}
                    <motion.div custom={5} variants={fadeIn} className="col-span-1 md:col-span-1 row-span-1 min-h-[160px] md:h-full">
                        <BentoCard href="/ai-tools/quiz-generator" gradient="from-indigo-900/20 to-transparent" className="h-full p-5 flex flex-col justify-between group">
                            <BrainCircuit className="w-8 h-8 text-indigo-400 group-hover:rotate-12 transition-transform duration-500" />
                            <div>
                                <h3 className={cn("text-lg font-bold text-white leading-none mb-1", oswald.className)}>AI Quiz Gen</h3>
                                <div className="flex gap-1 mt-2">
                                    <div className="w-2 h-2 rounded bg-white/20 group-hover:bg-green-500 transition-colors duration-300 delay-100" />
                                    <div className="w-2 h-2 rounded bg-white/20 group-hover:bg-red-500 transition-colors duration-300 delay-200" />
                                    <div className="w-2 h-2 rounded bg-white/20 group-hover:bg-white transition-colors duration-300 delay-300" />
                                </div>
                            </div>
                        </BentoCard>
                    </motion.div>

                    {/* 7. DSA VISUALIZER */}
                    <motion.div custom={6} variants={fadeIn} className="col-span-1 md:col-span-1 row-span-1 min-h-[160px] md:h-full">
                        <BentoCard href="/ai-tools/dsa-visualizer" gradient="from-yellow-900/20 to-transparent" className="h-full p-5 relative">
                            <Network className="w-8 h-8 text-yellow-400 mb-2 relative z-10" />
                            <h3 className={cn("text-lg font-bold text-white leading-none relative z-10", oswald.className)}>DSA Visualizer</h3>
                            <DSAVisual />
                        </BentoCard>
                    </motion.div>

                    {/* 8. GLOBAL CAREER RADAR */}
                    <motion.div custom={7} variants={fadeIn} className="col-span-1 md:col-span-2 row-span-1 min-h-[170px] md:h-full">
                        <BentoCard href="/ai-tools/job-market" className="h-full p-6 flex items-center justify-between">
                            <div className="flex items-center gap-4 relative z-10">
                                <Radar className="w-10 h-10 text-emerald-500" />
                                <div>
                                    <h3 className={cn("text-2xl font-bold text-white", oswald.className)}>Global Opportunity Radar</h3>
                                    <p className="text-emerald-400 text-xs font-mono">500+ NEW ROLES ADDED TODAY</p>
                                </div>
                            </div>
                            <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-white transition-colors relative z-10" />
                            <RadarScan />
                        </BentoCard>
                    </motion.div>

                    {/* 9. SYSTEM EXPANSION (Coming Soon) */}
                    <motion.div custom={8} variants={fadeIn} className="col-span-1 md:col-span-2 row-span-1 min-h-[170px] md:h-full">
                        <BentoCard className="h-full p-6 flex items-center justify-center border-dashed border-white/10 bg-white/[0.01]" gradient="from-white/5 to-transparent">
                            <div className="text-center space-y-3 relative z-10">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 mb-2 group-hover:rotate-180 transition-transform duration-700">
                                    <Sparkles className="w-5 h-5 text-white/40" />
                                </div>
                                <div>
                                    <h3 className={cn("text-xl font-bold text-white/60 group-hover:text-white transition-colors", oswald.className)}>More Coming Soon</h3>
                                    <p className="text-white/30 text-xs font-mono mt-1">NEW TOOLS ARRIVING WEEKLY</p>
                                </div>

                                {/* Loading Bar */}
                                <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden mx-auto">
                                    <motion.div
                                        className="h-full bg-white/40"
                                        animate={{ translateX: ["-100%", "100%"] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                        style={{ willChange: 'transform' }}
                                    />
                                </div>
                            </div>
                        </BentoCard>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}

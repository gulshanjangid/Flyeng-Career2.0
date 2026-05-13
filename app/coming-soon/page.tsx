"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import { ArrowLeft, Rocket, Zap, Mail, ChevronRight, Lock, Code2, Sparkles, Cpu, Layers, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

// 3D Tilt Card Component
const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const cardRef = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useTransform(x, [-0.5, 0.5], [15, -15])
    const mouseYSpring = useTransform(y, [-0.5, 0.5], [-15, 15])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateY: mouseXSpring, rotateX: mouseYSpring, transformStyle: "preserve-3d" }}
            className={cn("relative transition-all duration-200 ease-out", className)}
        >
            {children}
        </motion.div>
    )
}

export default function ComingSoonPage() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")
    const controls = useAnimation()

    useEffect(() => {
        controls.start({
            background: [
                "radial-gradient(ellipse at center, rgba(6,182,212,0.12) 0%, rgba(0,0,0,0) 60%)",
                "radial-gradient(ellipse at center, rgba(168,85,247,0.12) 0%, rgba(0,0,0,0) 60%)",
                "radial-gradient(ellipse at center, rgba(59,130,246,0.12) 0%, rgba(0,0,0,0) 60%)",
            ],
            transition: { duration: 12, repeat: Infinity, repeatType: "mirror" }
        })
    }, [controls])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return
        setStatus("loading")
        setTimeout(() => {
            setStatus("success")
            toast.success("Spot secured! Welcome to the bleeding edge.")
            setTimeout(() => {
                setStatus("idle")
                setEmail("")
            }, 3000)
        }, 1500)
    }

    return (
        <motion.div animate={controls} className="min-h-screen bg-[#020617] text-white overflow-hidden relative flex flex-col items-center justify-center font-sans tracking-tight perspective-[2000px]">
            
            {/* Ambient Background & Grid */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-30" />
                <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-cyan-500/10 blur-[130px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-purple-500/10 blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
            </div>

            {/* Navigation */}
            <div className="absolute top-6 left-6 z-50">
                <Link href="/dashboard">
                    <Button variant="ghost" className="text-white/40 hover:text-white hover:bg-white/5 transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Command Center
                    </Button>
                </Link>
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
                
                {/* 3D Floating Elements */}
                <motion.div 
                    animate={{ y: [0, -20, 0], rotateZ: [0, 5, 0] }} 
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 opacity-20 hidden lg:block"
                >
                    <Globe className="w-32 h-32" />
                </motion.div>
                <motion.div 
                    animate={{ y: [0, 20, 0], rotateZ: [0, -10, 0] }} 
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-40 right-10 opacity-20 hidden lg:block"
                >
                    <Layers className="w-40 h-40" />
                </motion.div>

                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-xs font-bold uppercase tracking-[0.2em] text-white border-b-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-xl group hover:bg-white/[0.05] transition-all cursor-default relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Sparkles className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors" />
                        Initiative "Future Labs"
                    </div>
                </motion.div>

                {/* Main Heading Sequence */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                    className="space-y-6 max-w-5xl mb-14"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] font-black tracking-tight leading-[1.05]">
                        <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Building the future, </span>
                        <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-500 drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                            one tool at a time.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed font-medium">
                        Future Labs is our experimental incubator. We are crafting bleeding-edge AI utilities, automation systems, and profound career tools designed to give you an unfair advantage.
                    </p>
                </motion.div>

                {/* Secure Waitlist Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
                    className="w-full max-w-lg relative z-20 mb-28"
                >
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-[28px] blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                    <div className="relative p-2.5 bg-[#050b14]/80 backdrop-blur-2xl border border-white/10 rounded-[24px] shadow-2xl">
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                            <div className="relative flex-1 group/input">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within/input:text-cyan-400 transition-colors" />
                                <input
                                    type="email"
                                    placeholder="Enter your email to request beta access..."
                                    className="w-full h-14 bg-white/[0.03] border border-transparent rounded-[18px] pl-14 pr-4 text-white placeholder:text-white/30 outline-none focus:bg-white/10 transition-all font-medium text-sm"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={status !== "idle"}
                                    required
                                />
                            </div>
                            <Button 
                                type="submit" 
                                disabled={status !== "idle"}
                                className="h-14 px-8 rounded-[18px] bg-white text-black hover:bg-cyan-50 font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                            >
                                {status === "loading" ? (
                                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                ) : status === "success" ? (
                                    <div className="flex items-center gap-2 text-green-600">
                                        <Sparkles className="w-4 h-4" /> Priority Access Granted
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2 text-base">
                                        Join Waitlist <ChevronRight className="w-4 h-4" />
                                    </div>
                                )}
                            </Button>
                        </form>
                    </div>
                </motion.div>

                {/* 3D Features Grid */}
                <div className="w-full max-w-5xl">
                    <div className="flex items-center gap-4 mb-10 w-full opacity-60">
                        <div className="h-px bg-gradient-to-r from-transparent to-white/20 flex-1" />
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-white">In Active Development</span>
                        <div className="h-px bg-gradient-to-l from-transparent to-white/20 flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        {/* Card 1 */}
                        <TiltCard>
                            <div className="p-8 rounded-[24px] bg-[#0a0f25]/80 backdrop-blur-md border border-white/10 flex flex-col h-full relative overflow-hidden group shadow-2xl" style={{ transform: "translateZ(50px)" }}>
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(168,85,247,0.2)] relative z-10">
                                    <Globe className="w-6 h-6 text-purple-400" />
                                </div>

                                <div className="mt-auto relative z-10" style={{ transform: "translateZ(30px)" }}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <h3 className="text-xl font-black text-white tracking-tight">AI Website Builder</h3>
                                        <div className="px-2 py-0.5 rounded-full bg-white/10 text-[9px] font-bold uppercase tracking-wider text-white/50 backdrop-blur-md">Locked</div>
                                    </div>
                                    <p className="text-white/40 text-sm font-medium mb-6 leading-relaxed">
                                        Generate stunning, fully functional portfolios directly from your resume in seconds.
                                    </p>
                                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-4">
                                        <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 w-[60%] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                    </div>
                                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-white/30 group-hover:text-purple-400 transition-colors">
                                        <span>Progress</span>
                                        <span>60%</span>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>

                        {/* Card 2 */}
                        <TiltCard>
                            <div className="p-8 rounded-[24px] bg-[#0a0f25]/80 backdrop-blur-md border border-white/10 flex flex-col h-full relative overflow-hidden group shadow-2xl" style={{ transform: "translateZ(50px)" }}>
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(6,182,212,0.2)] relative z-10">
                                    <br className="hidden" />
                                    <Zap className="w-6 h-6 text-cyan-400" />
                                </div>

                                <div className="mt-auto relative z-10" style={{ transform: "translateZ(30px)" }}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <h3 className="text-xl font-black text-white tracking-tight">Salary Negotiator</h3>
                                        <div className="px-2 py-0.5 rounded-full bg-white/10 text-[9px] font-bold uppercase tracking-wider text-white/50 backdrop-blur-md">Locked</div>
                                    </div>
                                    <p className="text-white/40 text-sm font-medium mb-6 leading-relaxed">
                                        AI-driven scripts and role-play to help you negotiate maximum compensation confidently.
                                    </p>
                                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-4">
                                        <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 w-[35%] rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                                    </div>
                                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-white/30 group-hover:text-cyan-400 transition-colors">
                                        <span>Progress</span>
                                        <span>35%</span>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>

                        {/* Card 3 */}
                        <TiltCard>
                            <div className="p-8 rounded-[24px] bg-[#0a0f25]/80 backdrop-blur-md border border-white/10 flex flex-col h-full relative overflow-hidden group shadow-2xl" style={{ transform: "translateZ(50px)" }}>
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(16,185,129,0.2)] relative z-10">
                                    <Cpu className="w-6 h-6 text-emerald-400" />
                                </div>

                                <div className="mt-auto relative z-10" style={{ transform: "translateZ(30px)" }}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <h3 className="text-xl font-black text-white tracking-tight">AI Code Mentor</h3>
                                        <div className="px-2 py-0.5 rounded-full bg-white/10 text-[9px] font-bold uppercase tracking-wider text-white/50 backdrop-blur-md">Locked</div>
                                    </div>
                                    <p className="text-white/40 text-sm font-medium mb-6 leading-relaxed">
                                        A hyper-personalized mentor that analyzes your GitHub and teaches you 10x faster.
                                    </p>
                                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-4">
                                        <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 w-[15%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                    </div>
                                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-white/30 group-hover:text-emerald-400 transition-colors">
                                        <span>Progress</span>
                                        <span>15%</span>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>

                    </div>
                </div>

            </div>
        </motion.div>
    )
}

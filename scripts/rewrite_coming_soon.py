import os

def rewrite_coming_soon():
    target = r"c:\Users\hp\Desktop\Flyeng Career\Final Folder\app\coming-soon\page.tsx"
    
    new_content = '''"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { ArrowLeft, Rocket, Zap, Mail, ChevronRight, Lock, Code2, Sparkles, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export default function ComingSoonPage() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")
    const controls = useAnimation()
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useEffect(() => {
        controls.start({
            background: [
                "radial-gradient(ellipse at center, rgba(6,182,212,0.15) 0%, rgba(0,0,0,0) 70%)",
                "radial-gradient(ellipse at center, rgba(168,85,247,0.15) 0%, rgba(0,0,0,0) 70%)",
                "radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)",
            ],
            transition: { duration: 10, repeat: Infinity, repeatType: "mirror" }
        })
    }, [controls])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return
        setStatus("loading")
        setTimeout(() => {
            setStatus("success")
            toast.success("Secured your spot! You'll be the first to know.")
            setTimeout(() => {
                setStatus("idle")
                setEmail("")
            }, 3000)
        }, 1500)
    }

    const features = [
        { icon: Code2, color: "cyan", title: "Visual IDE", desc: "Drag & drop components with real code generation instantly." },
        { icon: Cpu, color: "purple", title: "AI Assistant", desc: "Let our AI write the boring parts while you focus on logic." },
        { icon: Rocket, color: "blue", title: "One-Click Deploy", desc: "Ship to production instantly on Edge networks." }
    ]

    return (
        <motion.div animate={controls} className="min-h-screen bg-[#020617] text-white overflow-hidden relative flex flex-col items-center justify-center font-sans tracking-tight">
            
            {/* Interactive Cursor Glow */}
            <motion.div 
                className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-50 mix-blend-screen"
                animate={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168,85,247,0.06), transparent 40%)`
                }}
            />

            {/* Huge Glowing Background Orbs */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-cyan-500/10 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-purple-500/10 blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full bg-blue-600/10 blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
                
                {/* Custom Noise Overlay */}
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
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

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20 flex flex-col items-center text-center">
                
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-bold uppercase tracking-widest text-cyan-400 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)] group hover:border-cyan-500/30 transition-colors cursor-default">
                        <span className="relative flex h-2 w-2 mr-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Project "Web Builder" in active development
                    </div>
                </motion.div>

                {/* Main Heading Sequence */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6 max-w-4xl mb-12"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[1.1]">
                        <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Build the web, </span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-500 drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                            at lightspeed.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium">
                        A revolutionary AI-native website builder designed for the next generation of engineers. 
                        Stop writing boilerplate, start shipping magic.
                    </p>
                </motion.div>

                {/* Secure Waitlist Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-md relative z-20 mb-24"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-[24px] blur-lg opacity-20" />
                    <div className="relative p-2 bg-[#050b14]/80 backdrop-blur-xl border border-white/10 rounded-[24px] shadow-2xl">
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                            <div className="relative flex-1 group/input">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within/input:text-cyan-400 transition-colors" />
                                <input
                                    type="email"
                                    placeholder="Enter your email to get early access..."
                                    className="w-full h-14 bg-white/5 border border-transparent rounded-[18px] pl-12 pr-4 text-white placeholder:text-white/30 outline-none focus:bg-white/10 transition-all font-medium text-sm"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={status !== "idle"}
                                    required
                                />
                            </div>
                            <Button 
                                type="submit" 
                                disabled={status !== "idle"}
                                className="h-14 px-8 rounded-[18px] bg-white text-black hover:bg-cyan-50 font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto overflow-hidden relative"
                            >
                                {status === "loading" ? (
                                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                ) : status === "success" ? (
                                    <div className="flex items-center gap-2 text-green-600">
                                        <Sparkles className="w-4 h-4" /> Secured
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2 text-base">
                                        Join Waitlist <ChevronRight className="w-4 h-4" />
                                    </div>
                                )}
                            </Button>
                        </form>
                        <div className="flex items-center justify-center gap-2 mt-3 mb-1 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                            <Lock className="w-3 h-3" /> Spam-free • Invites rolling out soon
                        </div>
                    </div>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl"
                >
                    {features.map((feature, i) => (
                        <div key={i} className={`p-6 md:p-8 rounded-[24px] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all group hover:-translate-y-1 relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-transform group-hover:scale-110 bg-${feature.color}-500/10`}>
                                <div className={`absolute inset-0 rounded-2xl blur-md bg-${feature.color}-500/20 opacity-0 group-hover:opacity-100 transition-opacity`} />
                                <feature.icon className={`w-6 h-6 text-${feature.color}-400 relative z-10`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-cyan-100 transition-colors">{feature.title}</h3>
                            <p className="text-white/40 leading-relaxed text-sm font-medium relative z-10 group-hover:text-white/60 transition-colors">{feature.desc}</p>
                        </div>
                    ))}
                </motion.div>

            </div>
        </motion.div>
    )
}
'''
    with open(target, "w", encoding="utf-8") as f:
        f.write(new_content)

if __name__ == "__main__":
    rewrite_coming_soon()
    print("Coming soon page overhaul complete")

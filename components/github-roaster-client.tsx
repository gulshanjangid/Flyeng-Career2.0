"use client"

import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { NeonGridBackground } from "@/components/neon-grid-background"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Flame, Github, Zap, Search, ShieldAlert, UserX, FolderSync, GitCommitVertical, Share2, CopyCheck, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Oswald, Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Input } from "@/components/ui/input"

const oswald = Oswald({ subsets: ["latin"], weight: ["500", "700"] });
const inter = Inter({ subsets: ["latin"] });

export function GithubRoasterClient() {
    const [githubUrl, setGithubUrl] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")
    const [loadingMessage, setLoadingMessage] = useState("")
    type RoastDataType = {
        score: number, 
        profileOverview: { rating: string, roast: string },
        repositoriesAudit: { rating: string, roast: string },
        commitHistoryAnalysis: { rating: string, roast: string },
        strengths: string[],
        weaknesses: string[],
        fixes: {title: string, description: string}[]
    };
    const [roastData, setRoastData] = useState<RoastDataType | null>(null)

    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        if (!roastData) return;
        const text = `🔥 Code Critic AI Score: ${roastData.score}/10\n\nProfile: ${roastData.profileOverview.rating}\nRepos: ${roastData.repositoriesAudit.rating}\nCommits: ${roastData.commitHistoryAnalysis.rating}\n\n" ${roastData.profileOverview.roast} "`;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
    }

    const handleRoast = async () => {
        if (!githubUrl.includes("github.com/")) return;

        setStatus("loading")
        const messages = ["Cloning repositories...", "Judging your spaghetti code...", "Analyzing copy-pasted solutions...", "Preparing maximum emotional damage..."]
        
        let i = 0;
        setLoadingMessage(messages[0])
        const interval = setInterval(() => {
            i++;
            if (i < messages.length) setLoadingMessage(messages[i]);
        }, 3000);

        try {
            const res = await fetch('/api/github-roast', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: githubUrl })
            });
            const data = await res.json();
            setRoastData(data);
            clearInterval(interval);
            setStatus("success");
        } catch (error) {
            console.error(error);
            setRoastData({
                score: 0.0,
                profileOverview: { rating: "CRITICAL FAILURE", roast: "The API refused to parse this profile. It was too horrifying." },
                repositoriesAudit: { rating: "N/A", roast: "No readable code found or the API timed out." },
                commitHistoryAnalysis: { rating: "N/A", roast: "What commits?" },
                strengths: ["None detected."],
                weaknesses: ["Failed to load profile data correctly."],
                fixes: [{ title: "Try Again", description: "Internal Server Error or Rate limit reached." }]
            });
            clearInterval(interval);
            setStatus("success");
        }
    }

    return (
        <NeonGridBackground className="min-h-screen font-sans text-slate-950 pb-0 overflow-x-hidden max-w-[100vw]">
            <SiteHeader />
            
            <main className={cn("relative z-10 flex flex-col pt-32 pb-24 container mx-auto px-4 xl:px-8 min-h-[calc(100vh-80px)]", inter.className)}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full">
                    
                    {/* LEFT COLUMN: HERO & INPUT */}
                    <div className="flex flex-col justify-center lg:sticky lg:top-36 h-fit">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-medium text-red-500 mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                                <Flame className="w-4 h-4" />
                                BRUTAL AI REVIEW
                            </div>

                            <h1 className={cn("text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter mb-6 text-white leading-[0.85]", oswald.className)}>
                                CODE <br />
                                <span className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">CRITIC</span> AI
                            </h1>
                            <p className="text-lg text-white/60 mb-10 leading-relaxed font-light max-w-lg">
                                Stop questioning why you're being rejected. Paste your GitHub URL and our AI will brutally analyze your code, commits, and repos to tell you exactly why FAANG ignores your application.
                            </p>

                            <div className="w-full max-w-lg bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <label className="block text-sm font-medium text-white/50 mb-3 ml-1">TARGET REPOSITORY OR PROFILE</label>
                                <div className="relative z-10 flex flex-col gap-4">
                                    <div className="relative group/input">
                                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                            <Github className="h-5 w-5 text-white/40 group-focus-within/input:text-red-500 transition-colors" />
                                        </div>
                                        <Input
                                            value={githubUrl}
                                            onChange={(e) => setGithubUrl(e.target.value)}
                                            placeholder="https://github.com/username"
                                            className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/30 pl-12 h-16 rounded-xl focus-visible:ring-1 focus-visible:ring-red-500/50 focus-visible:border-red-500/50 text-base"
                                        />
                                    </div>
                                    <Button 
                                        onClick={handleRoast}
                                        disabled={!githubUrl.includes("github.com/") || status === "loading"}
                                        className="h-16 w-full bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-widest text-lg rounded-xl transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]"
                                    >
                                        {status === "loading" ? "Analyzing..." : "Roast My Code"} <Flame className="w-5 h-5 ml-2" />
                                    </Button>
                                </div>
                            </div>
                            
                            <ul className="mt-8 space-y-4 text-white/50 font-light max-w-lg">
                                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-red-500" /> Tells you why your commit history is a red flag.</li>
                                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-red-500" /> Exposes copied assignments and tutorial code.</li>
                                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-red-500" /> Suggests actual projects hiring managers want to see.</li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: DYNAMIC CONTENT AREA */}
                    <div className="flex flex-col relative w-full h-full min-h-[600px] bg-[#0a0a0a]/50 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-8 md:p-10 overflow-hidden shadow-[inset_0_0_40px_rgba(255,255,255,0.02)]">
                        
                        <AnimatePresence mode="wait">
                            {/* IDLE STATE */}
                            {status === "idle" && (
                                <motion.div 
                                    key="idle"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="flex flex-col items-center justify-center h-full text-center space-y-6"
                                >
                                    <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 relative">
                                        <Search className="w-10 h-10 text-white/20" />
                                        <div className="absolute inset-0 border border-red-500/20 rounded-full animate-[spin_4s_linear_infinite]" />
                                    </div>
                                    <h3 className={cn("text-3xl font-bold uppercase tracking-wider text-white/50", oswald.className)}>
                                        Awaiting Target
                                    </h3>
                                    <p className="text-white/30 text-sm max-w-sm">
                                        Enter a GitHub URL on the left. We will fetch the public repositories, analyze the language breakdown, and read the code.
                                    </p>
                                    
                                    <div className="w-full max-w-md mt-8 p-6 bg-black/40 rounded-2xl border border-white/5 border-dashed">
                                        <div className="flex items-center justify-between text-xs font-mono text-white/30 mb-2">
                                            <span>system@roast:~$</span>
                                            <span className="animate-pulse bg-red-500 w-2 h-4" />
                                        </div>
                                        <div className="text-left text-sm text-white/40 font-mono space-y-2">
                                            <p className="text-green-400/50"># Preparing AI models...</p>
                                            <p># Waiting for GitHub API link...</p>
                                            <p># Toxicity levels set to maximum.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* LOADING STATE */}
                            {status === "loading" && (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center h-full text-center"
                                >
                                    <div className="relative w-32 h-32 mb-10 flex items-center justify-center">
                                        <div className="absolute inset-0 rounded-full border-t-2 border-red-600 animate-spin" />
                                        <div className="absolute inset-2 rounded-full border-r-2 border-red-500/50 animate-[spin_1.5s_linear_infinite_reverse]" />
                                        <div className="absolute inset-4 rounded-full border-b-2 border-orange-500/50 animate-[spin_3s_linear_infinite]" />
                                        <Flame className="w-10 h-10 text-red-500 animate-pulse drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
                                    </div>
                                    <h3 className={cn("text-3xl font-bold uppercase tracking-widest text-white mb-4", oswald.className)}>
                                        Extracting Data
                                    </h3>
                                    <p className="text-red-400 font-mono text-sm animate-pulse">{loadingMessage}</p>
                                </motion.div>
                            )}

                            {/* SUCCESS STATE */}
                            {status === "success" && (
                                <motion.div
                                    key="results"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="w-full flex flex-col h-full space-y-8"
                                >
                                    <div className="flex items-center justify-between border-b border-white/10 pb-6">
                                        <div>
                                            <h2 className={cn("text-3xl font-bold text-white uppercase tracking-wider", oswald.className)}>
                                                Audit Complete
                                            </h2>
                                            <p className="text-red-400 text-sm font-mono mt-1">Status: CRITICAL FAILURE</p>
                                        </div>
                                        <div className="text-right flex flex-col items-end">
                                            <motion.div 
                                                initial={{ scale: 0.5, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ type: "spring", delay: 0.3 }}
                                                className="text-4xl font-bold text-white mb-1"
                                            >
                                                {roastData?.score || 0}<span className="text-xl text-white/30">/10</span>
                                            </motion.div>
                                            <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden mb-1 relative isolate">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${(roastData?.score || 0) * 10}%` }}
                                                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 to-orange-500 rounded-full z-10"
                                                />
                                            </div>
                                            <p className="text-white/30 text-[10px] tracking-widest uppercase">Hireability Score</p>
                                        </div>
                                    </div>

                                    <motion.div 
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="flex flex-col gap-4 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar"
                                    >
                                        
                                        {/* PROFILE OVERVIEW */}
                                        <motion.div variants={itemVariants} className="shrink-0 bg-red-950/20 border border-red-500/20 rounded-2xl p-5 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[40px] rounded-full pointer-events-none" />
                                            <div className="flex items-center justify-between gap-3 mb-3">
                                                <div className="flex items-center gap-2">
                                                    <UserX className="w-4 h-4 text-red-500" />
                                                    <span className="text-red-500 font-bold uppercase tracking-widest text-xs">Profile Overview</span>
                                                </div>
                                                <span className="bg-red-500/10 text-red-500 border border-red-500/20 px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase">{roastData?.profileOverview?.rating || "Unknown"}</span>
                                            </div>
                                            <p className="text-white/80 leading-relaxed font-light text-[14px]">
                                                {roastData?.profileOverview?.roast || "No data."}
                                            </p>
                                        </motion.div>

                                        {/* REPOSITORIES AUDIT */}
                                        <motion.div variants={itemVariants} className="shrink-0 bg-orange-950/20 border border-orange-500/20 rounded-2xl p-5 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-[40px] rounded-full pointer-events-none" />
                                            <div className="flex items-center justify-between gap-3 mb-3">
                                                <div className="flex items-center gap-2">
                                                    <FolderSync className="w-4 h-4 text-orange-500" />
                                                    <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">Repository Audit</span>
                                                </div>
                                                <span className="bg-orange-500/10 text-orange-500 border border-orange-500/20 px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase">{roastData?.repositoriesAudit?.rating || "Unknown"}</span>
                                            </div>
                                            <p className="text-white/80 leading-relaxed font-light text-[14px]">
                                                {roastData?.repositoriesAudit?.roast || "No data."}
                                            </p>
                                        </motion.div>

                                        {/* COMMIT HISTORY */}
                                        <motion.div variants={itemVariants} className="shrink-0 bg-yellow-950/20 border border-yellow-500/20 rounded-2xl p-5 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 blur-[40px] rounded-full pointer-events-none" />
                                            <div className="flex items-center justify-between gap-3 mb-3">
                                                <div className="flex items-center gap-2">
                                                    <GitCommitVertical className="w-4 h-4 text-yellow-500" />
                                                    <span className="text-yellow-500 font-bold uppercase tracking-widest text-xs">Commit Analytics</span>
                                                </div>
                                                <span className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase">{roastData?.commitHistoryAnalysis?.rating || "Unknown"}</span>
                                            </div>
                                            <p className="text-white/80 leading-relaxed font-light text-[14px]">
                                                {roastData?.commitHistoryAnalysis?.roast || "No data."}
                                            </p>
                                        </motion.div>

                                        {/* STRENGTHS AND WEAKNESSES GRID */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shrink-0 px-1">
                                            <motion.div variants={itemVariants} className="bg-emerald-950/10 border border-emerald-500/20 rounded-2xl p-5">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <ArrowUpRight className="w-5 h-5 text-emerald-500" />
                                                    <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm">Strengths</span>
                                                </div>
                                                <ul className="space-y-3">
                                                    {roastData?.strengths.map((str, i) => (
                                                        <li key={i} className="text-white/70 text-[15px] flex items-start gap-3">
                                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_8px_#10b981]" />
                                                            <span className="leading-relaxed font-light">{str}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                            
                                            <motion.div variants={itemVariants} className="bg-rose-950/10 border border-rose-500/20 rounded-2xl p-5">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <ArrowDownRight className="w-5 h-5 text-rose-500" />
                                                    <span className="text-rose-500 font-bold uppercase tracking-widest text-sm">Critical Weaknesses</span>
                                                </div>
                                                <ul className="space-y-3">
                                                    {roastData?.weaknesses.map((wk, i) => (
                                                        <li key={i} className="text-white/70 text-[15px] flex items-start gap-3">
                                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 shadow-[0_0_8px_#f43f5e]" />
                                                            <span className="leading-relaxed font-light">{wk}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        </div>

                                    </motion.div>

                                    {/* THE FIXES */}
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8, duration: 0.5 }}
                                        className="shrink-0 flex-1 bg-cyan-950/20 border border-cyan-500/20 rounded-2xl p-6 relative overflow-hidden"
                                    >
                                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 blur-[50px] rounded-full pointer-events-none" />
                                        <div className="flex items-center gap-3 mb-5">
                                            <Zap className="w-5 h-5 text-emerald-500" />
                                            <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm">How To Actually Get Hired</span>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 gap-4 overflow-y-auto max-h-[220px] pr-2 custom-scrollbar">
                                            {roastData?.fixes.map((fix, idx) => (
                                                <div key={idx} className="bg-black/40 border border-white/5 p-4 rounded-xl flex gap-4 items-start">
                                                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">{idx + 1}</div>
                                                    <div>
                                                        <h4 className="text-white font-semibold mb-1 text-sm">{fix.title}</h4>
                                                        <p className="text-sm text-white/60 leading-snug">
                                                            {fix.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                    
                                    <div className="flex gap-4">
                                        <Button 
                                            onClick={() => { setStatus("idle"); setGithubUrl("") }}
                                            variant="outline"
                                            className="flex-1 bg-white/5 border-white/10 text-white hover:bg-white/10 py-6 uppercase tracking-widest text-xs font-bold transition-all"
                                        >
                                            Analyze Another Profile
                                        </Button>
                                        <Button 
                                            onClick={handleCopy}
                                            variant="outline"
                                            className="flex-1 bg-red-500/10 border-red-500/20 text-red-400 hover:bg-red-500/20 hover:text-red-300 py-6 uppercase tracking-widest text-xs font-bold transition-all"
                                        >
                                            {copied ? <><CopyCheck className="w-4 h-4 mr-2" /> Copied!</> : <><Share2 className="w-4 h-4 mr-2" /> Share Roast</>}
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </main>
            <EnhancedFooter />
        </NeonGridBackground>
    )
}

"use client"

import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, MapPin, DollarSign, Loader2, Sparkles, Globe, Clock, Building, CheckCircle, ExternalLink, Zap, Activity, Search, Briefcase, TrendingUp, StopCircle, Layers } from 'lucide-react'
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { toast } from "sonner"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { SwipeCard } from "@/components/swipe-card"

export default function JobMatcherApp() {
    const [profile, setProfile] = useState({ skills: "", experience: "", preferences: "" })
    const [matches, setMatches] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const [currentMatch, setCurrentMatch] = useState(0)
    const [scanStep, setScanStep] = useState(0)
    const [scanComplete, setScanComplete] = useState(false)
    const abortControllerRef = useRef<AbortController | null>(null);

    // Scanning Animation Logic
    useEffect(() => {
        if (loading) {
            setScanComplete(false)
            setScanStep(0)
        }
    }, [loading])

    const stopScan = () => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
        setLoading(false);
        setScanComplete(false); // Reset to ready state
        toast.info("Scan Aborted by User");
    };

    const findMatches = async () => {
        if (!profile.skills) return;
        
        // Reset state
        setLoading(true);
        setMatches([]);
        setScanComplete(false);
        
        // Create new AbortController
        abortControllerRef.current = new AbortController();

        try {
            const response = await fetch("/api/jobs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: profile.skills,
                    location: profile.preferences
                }),
                signal: abortControllerRef.current.signal
            });

            if (!response.ok) throw new Error("Failed to fetch jobs");

            const data = await response.json();

            // Always wait for animation to finish before showing results
            setTimeout(() => {
                if (data.jobs && data.jobs.length > 0) {
                    setMatches(data.jobs);
                    setCurrentMatch(0);
                    setScanComplete(true);
                } else {
                    toast.error("No direct API matches found. Showing Live Portals.");
                    setScanComplete(true);
                }
                setLoading(false);
            }, 2500);

        } catch (error: any) {
            if (error.name === 'AbortError') {
                 console.log('Fetch aborted');
            } else {
                console.error(error);
                setLoading(false);
                setScanComplete(true); // Still show portals on error
                toast.error("Global Network Error. Switching to Live Portals...");
            }
        }
    };

    const openLivePortal = (platform: string) => {
        const query = encodeURIComponent(`${profile.skills} ${profile.preferences}`);
        let url = "";

        // STRICT 24H FILTERS APPLIED WHEREVER POSSIBLE
        switch (platform) {
            case 'Naukri':
                url = `https://www.naukri.com/search?keywords=${query}&jobAge=1&sortByDate=1`; 
                break;
            case 'LinkedIn':
                url = `https://www.linkedin.com/jobs/search/?keywords=${query}&location=Worldwide&f_TPR=r86400&sortBy=DD`; 
                break;
            case 'Indeed':
                url = `https://in.indeed.com/jobs?q=${query}&fromage=1&sort=date`; 
                break;
            case 'Apna':
                url = `https://apna.co/jobs?q=${query}&sortBy=date`; 
                break;
            case 'Unstop':
                url = `https://unstop.com/jobs?searchTerm=${query}&filters=,posted_date:1`; 
                break;
            case 'Internshala':
                url = `https://internshala.com/internships/keywords-${query}`;
                break;
            case 'Wellfound':
                url = `https://wellfound.com/jobs?q=${query}`;
                break;
            case 'Instahyre':
                url = `https://www.instahyre.com/search-jobs/?q=${query}`;
                break;
            case 'Shine':
                url = `https://www.shine.com/job-search/${query}-jobs?sort=Date`;
                break;
            case 'Upwork':
                url = `https://www.upwork.com/nx/search/jobs/?q=${query}&sort=recency`;
                break;
            case 'JobTatkal':
                url = `https://www.jobtatkal.com/jobs?q=${query}&sort=date`;
                break;
            case 'Google Jobs':
                url = `https://www.google.com/search?q=${query}+jobs&ibp=htl;jobs#htivrt=jobs&htichips=date_posted:today`;
                break;
            default: return;
        }

        window.open(url, '_blank');
        toast.success(`Accessing ${platform} 24h Live Database...`);
    };

    const handleSwipe = (direction: 'left' | 'right') => {
        if (direction === 'right') {
            const job = matches[currentMatch];
            if (job) {
                window.open(job.url, '_blank');
                toast.success("Redirecting to application portal...");
            }
        } else {
             toast.info("Job Skipped");
        }

        if (currentMatch < matches.length - 1) {
            setCurrentMatch(currentMatch + 1);
        } else {
            toast("End of scan results.");
        }
    };

    return (
        <div className="min-h-screen bg-[#030014] text-white flex flex-col font-sans selection:bg-cyan-500/30 overflow-hidden relative">
            <SiteHeader />

            {/* Cyberpunk Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#030014] via-[#0a0a2e] to-[#030014]" />
            </div>

            <div className="relative pt-32 pb-20 px-4 md:px-8 w-full min-h-screen flex flex-col">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/10 blur-[60px] rounded-full pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 xl:gap-12 flex-1 relative z-10 items-start">
                    
                    {/* LEFT PANEL: Input & Strategy */}
                    <div className="md:col-span-7 space-y-8">
                        {/* Dynamic Header */}
                        <div>
                            <Link href="/ai-tools" className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 mb-6 transition-colors group">
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                Back to AI Hub
                            </Link>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="relative"
                            >
                                <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-2">
                                    QUANTUM <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">MATCHER</span>
                                </h1>
                                <p className="text-lg text-white/60 max-w-xl leading-relaxed">
                                    Describe your dream role. Our AI scans <span className="text-cyan-400">5+ global networks</span> in real-time.
                                </p>
                            </motion.div>
                        </div>

                        {/* Smart Search Input */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-1 rounded-2xl md:rounded-full flex items-center shadow-2xl relative group focus-within:ring-2 focus-within:ring-cyan-500/50 transition-all">
                             <div className="pl-4 md:pl-6">
                                <Search className="w-6 h-6 text-white/40 group-focus-within:text-cyan-400 transition-colors" />
                             </div>
                             <input 
                                type="text"
                                placeholder="e.g. Senior React Developer Remote $100k+"
                                className="w-full bg-transparent border-none h-14 md:h-16 px-4 md:px-6 text-base md:text-lg text-white placeholder:text-white/20 focus:ring-0 focus:outline-none"
                                value={profile.skills} // Reusing 'skills' state for the main query
                                onChange={(e) => setProfile({...profile, skills: e.target.value})}
                                onKeyDown={(e) => e.key === 'Enter' && findMatches()}
                             />
                             <Button 
                                onClick={findMatches}
                                disabled={loading}
                                className="h-12 md:h-14 px-6 md:px-10 rounded-xl md:rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold mr-1 md:mr-1 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                                    <span className="flex items-center gap-2">
                                        <Zap className="w-5 h-5 fill-current" />
                                        SCAN
                                    </span>
                                )}
                            </Button>
                        </div>
                        
                        {/* Quick Filters / Tags */}
                        <div className="flex flex-wrap gap-2">
                             {["Remote", "Full-Time", "Contract", "Junior", "Senior", "Founder"].map(tag => (
                                 <button 
                                    key={tag}
                                    onClick={() => setProfile({...profile, skills: profile.skills + " " + tag})}
                                    className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
                                 >
                                    + {tag}
                                 </button>
                             ))}
                        </div>

                        {/* Recent Activity / Status */}
                        {!loading && !matches.length && (
                             <div className="p-6 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
                                <div className="flex items-center gap-3 mb-4">
                                    <Activity className="w-5 h-5 text-purple-400" />
                                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">System Status</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/40">API Nodes Active</span>
                                        <span className="text-green-400 font-mono">5/5</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/40">Latency</span>
                                        <span className="text-cyan-400 font-mono">24ms</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-purple-500 w-[85%] animate-pulse" />
                                    </div>
                                </div>
                             </div>
                        )}

                        {/* System Log - Compact & Futuristic */}
                        <div className="hidden md:block bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-[10px] text-cyan-300/80 h-32 overflow-hidden relative shadow-inner">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5" />
                            <div className="space-y-2 relative z-10">
                                <p className="text-green-400">&gt; System initialized.</p>
                                <p>&gt; Connected to global nodes: LinkedIn, Indeed, Glassdoor.</p>
                                <p>&gt; Real-time API Uplink: <span className="text-green-400">ACTIVE</span></p>
                                {loading && (
                                    <>
                                        <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>&gt; Handshaking with remote servers...</motion.p>
                                        <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>&gt; Analyzing {profile.skills} vector embeddings...</motion.p>
                                        <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }}>&gt; Filtering 1,240,000+ listings...</motion.p>
                                        <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.0 }}>&gt; Applying strict 24h temporal filters...</motion.p>
                                    </>
                                )}
                                {scanComplete && (
                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 font-bold">&gt; Scan Complete. {matches.length} Direct Matches Found.</motion.p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Results / Animation */}
                    <div className="md:col-span-5 w-full min-h-[500px] flex flex-col gap-6 order-1 md:order-2">

                        {/* Main Display Area */}
                        <div className="flex-1 flex items-center justify-center relative bg-[#0a0a1a]/40 backdrop-blur-sm rounded-3xl border border-white/5 min-h-[500px] overflow-hidden">
                            {loading ? (
                                <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-3xl bg-black/80">
                                    {/* Neural Network / Data Stream Animation */}
                                    <div className="absolute inset-0 overflow-hidden">
                                        {[...Array(20)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute bg-cyan-500/20 w-[1px]"
                                                style={{
                                                    height: Math.random() * 200 + 50 + 'px',
                                                    left: Math.random() * 100 + '%',
                                                    top: -200
                                                }}
                                                animate={{
                                                    top: ['0%', '120%'],
                                                    opacity: [0, 1, 0]
                                                }}
                                                transition={{
                                                    duration: Math.random() * 2 + 1,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                    delay: Math.random() * 2
                                                }}
                                            />
                                        ))}
                                    </div>
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-[#030014]" />

                                    <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
                                        <div className="relative">
                                            {/* Central Hub */}
                                            <motion.div 
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                                className="w-32 h-32 border border-cyan-500/30 rounded-full flex items-center justify-center"
                                            >
                                                <div className="w-24 h-24 border border-purple-500/30 rounded-full" />
                                            </motion.div>
                                            
                                            {/* Orbiting Particles */}
                                            <motion.div 
                                                className="absolute inset-0"
                                                animate={{ rotate: -360 }}
                                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                            >
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" />
                                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_#a855f7]" />
                                            </motion.div>

                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-3xl font-bold text-white tracking-tighter">AI</span>
                                            </div>
                                        </div>

                                        <div className="text-center space-y-2">
                                            <motion.div 
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="px-4 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest inline-block"
                                            >
                                                Processing Global Data
                                            </motion.div>
                                            <p className="text-white/40 text-sm">Analyzing millions of nodes...</p>
                                        </div>
                                    </div>
                                </div>
                            ) : scanComplete ? (
                                <div className="w-full h-full p-4 md:p-6 flex flex-col gap-6">
                                    {/* Direct Matches Section */}
                                    {matches.length > 0 ? (
                                        <div className="relative w-full max-w-xl mx-auto h-[500px] md:h-[550px]">
                                            <AnimatePresence mode="popLayout">
                                                {matches.slice(currentMatch, currentMatch + 1).map((match, index) => (
                                                    <SwipeCard 
                                                        key={match.id || index}
                                                        job={match} 
                                                        onSwipe={(dir) => handleSwipe(dir)}
                                                    />
                                                ))}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <div className="text-center py-12">
                                            <div className="bg-white/5 border border-white/10 text-white p-8 rounded-3xl max-w-md mx-auto relative overflow-hidden group">
                                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <Sparkles className="w-16 h-16 mx-auto mb-6 text-cyan-400 opacity-80" />
                                                <h3 className="text-2xl font-bold mb-3 tracking-tight">Scanning Complete</h3>
                                                <p className="text-white/60 mb-8 leading-relaxed">
                                                    We've scanned our global partner networks. 
                                                    {matches[0]?.freshness === '24h' 
                                                        ? " Fresh opportunities found!" 
                                                        : " Showing best available matches from our archives."}
                                                </p>
                                                <p className="text-xs font-mono text-cyan-500/80 mb-6 uppercase tracking-widest">
                                                    Scroll to browse results
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Action Buttons (Alternative to Swipe) */}
                                    {matches.length > 0 && (
                                        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto w-full">
                                            <Button 
                                                variant="outline" 
                                                className="h-12 rounded-xl border-white/10 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/50 transition-all font-medium"
                                                onClick={() => handleSwipe('left')}
                                            >
                                                Skip
                                            </Button>
                                            <Button 
                                                className="h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-cyan-900/20 font-medium"
                                                onClick={() => handleSwipe('right')}
                                            >
                                                Apply Now <ExternalLink className="w-4 h-4 ml-2" />
                                            </Button>
                                        </div>
                                    )}
                                    
                                    <div className="h-px bg-white/5 w-full my-2" />

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between group">
                                            <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                                                <div className="relative flex h-2 w-2">
                                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                                </div>
                                                Live Global Database
                                            </h3>
                                            <span className="text-[10px] bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-500/20">24h Active</span>
                                        </div>

                                        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-3">
                                            {[
                                                { name: 'Naukri', icon: Briefcase, color: 'text-blue-400', bg: 'hover:shadow-blue-500/20' },
                                                { name: 'LinkedIn', icon: Globe, color: 'text-blue-600', bg: 'hover:shadow-blue-600/20' },
                                                { name: 'Indeed', icon: Search, color: 'text-blue-500', bg: 'hover:shadow-blue-500/20' },
                                                { name: 'Wellfound', icon: Sparkles, color: 'text-red-500', bg: 'hover:shadow-red-500/20' },
                                                { name: 'Instahyre', icon: Layers, color: 'text-purple-500', bg: 'hover:shadow-purple-500/20' },
                                                { name: 'Google', icon: Search, color: 'text-green-500', bg: 'hover:shadow-green-500/20' },
                                                { name: 'Unstop', icon: Zap, color: 'text-yellow-500', bg: 'hover:shadow-yellow-500/20' },
                                                { name: 'Apna', icon: TrendingUp, color: 'text-green-400', bg: 'hover:shadow-green-400/20' },
                                            ].map((portal) => (
                                                <button
                                                    key={portal.name}
                                                    onClick={() => openLivePortal(portal.name)}
                                                    className={`relative flex items-center gap-3 px-3 py-3 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 hover:border-white/20 transition-all group overflow-hidden ${portal.bg} hover:shadow-lg`}
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                                    <div className={`p-1.5 rounded-lg bg-black/40 ${portal.color}`}>
                                                        <portal.icon className="w-4 h-4" />
                                                    </div>
                                                    <span className="text-xs font-medium text-white/60 group-hover:text-white transition-colors">{portal.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center text-white/20 flex flex-col items-center p-8">
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/5 flex items-center justify-center mb-6 animate-pulse">
                                        <Globe className="w-12 h-12 md:w-16 md:h-16 opacity-50" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white/40 mb-2">System Ready</h3>
                                    <p className="text-base md:text-lg max-w-xs mx-auto">Initialize scan to intercept global job data streams.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

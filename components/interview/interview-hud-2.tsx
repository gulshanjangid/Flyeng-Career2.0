'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

interface InterviewHUDProps {
    status: string;
    role: string;
    round: number;
    totalRounds: number;
    transcript: string;
    emotion: string;
    confidence: number;
    isAISpeaking: boolean;
    audioManager: any;
    latestFeedback?: any;
    conceptClarity?: number;
    tip?: string | null;
    hideMetrics?: boolean;
    currentQuestion?: string;
}

export function InterviewHUD2({
    status,
    role,
    round,
    totalRounds,
    transcript,
    emotion,
    confidence,
    isAISpeaking,
    audioManager,
    latestFeedback,
    tip,
    hideMetrics = true,
    currentQuestion
}: InterviewHUDProps) {
    const [elapsed, setElapsed] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setElapsed(e => e + 1), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (sec: number) => {
        const mins = Math.floor(sec / 60);
        const secs = sec % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const getStatusInfo = () => {
        switch (status) {
            case 'LISTENING': return { label: 'Listening', dot: 'bg-emerald-500 shadow-[0_0_8px_#10b981]', pill: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' };
            case 'PROCESSING': return { label: 'Thinking', dot: 'bg-amber-500', pill: 'border-amber-500/30 bg-amber-500/10 text-amber-400' };
            case 'QUESTIONING': return { label: 'Speaking', dot: 'bg-cyan-500', pill: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400' };
            default: return { label: status, dot: 'bg-white/40', pill: 'border-white/10 bg-white/5 text-white/60' };
        }
    };

    const statusInfo = getStatusInfo();

    return (
        <div className="absolute inset-0 pointer-events-none z-50 flex flex-col justify-between overflow-hidden font-sans">
            
            {/* TOP BAR — scoped to AI frame (left half) */}
            <header className="flex justify-between items-center px-4 py-3 md:px-6 md:py-4 pointer-events-auto select-none md:w-1/2">
                <div className="flex items-center gap-2 md:gap-3">
                    {/* Status pill with animated border */}
                    <motion.div
                        className={cn(
                            "backdrop-blur-xl border px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg text-[10px] md:text-xs font-mono tracking-widest uppercase font-bold transition-all duration-300",
                            statusInfo.pill
                        )}
                        animate={status === 'LISTENING' ? { boxShadow: ['0 0 0px rgba(16,185,129,0)', '0 0 12px rgba(16,185,129,0.3)', '0 0 0px rgba(16,185,129,0)'] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", statusInfo.dot)} />
                        {statusInfo.label}
                    </motion.div>

                    {/* Round counter with progress */}
                    <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                        <span className="text-[10px] md:text-xs uppercase tracking-wider text-white/50 font-bold">
                            {round}/{totalRounds}
                        </span>
                        <div className="h-1.5 w-14 md:w-24 bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
                                animate={{ width: `${(round / totalRounds) * 100}%` }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Timer — on AI frame side */}
                <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-md" />
                    <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-1.5 md:px-5 md:py-2 rounded-full font-mono text-sm md:text-base text-white/90 shadow-lg tracking-wider">
                        {formatTime(elapsed)}
                    </div>
                </div>
            </header>
        </div>
    )
}

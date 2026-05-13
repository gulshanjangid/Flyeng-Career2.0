'use client'

import React, { useEffect, useState } from 'react';
import { useDashboardStats } from '@/hooks/use-dashboard-stats';
import { useAuth } from '@/context/auth-context';
import { getUserByEmail } from '@/lib/user-service';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import {
    BookOpen, CheckCircle, Award, Flame, Zap, Trophy, Target, ArrowRight,
    TrendingUp, Sparkles, FileText, Video, Search, GraduationCap,
    Calendar, Clock, Star, Briefcase, Lightbulb, Rocket, Play,
    Check, ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

function useCounter(target: number, duration = 1200) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (target <= 0) { setCount(0); return; }
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) window.requestAnimationFrame(step);
            else setCount(target);
        };
        const handle = window.requestAnimationFrame(step);
        return () => window.cancelAnimationFrame(handle);
    }, [target, duration]);
    return count;
}

const quickActions = [
    { label: 'AI Resume Builder', icon: FileText, href: '/ai-tools/resume-builder', gradient: 'from-cyan-500 to-blue-600', glow: 'hover:shadow-cyan-500/30' },
    { label: 'Mock Interview', icon: Video, href: '/ai-tools/mock-interview', gradient: 'from-purple-500 to-pink-600', glow: 'hover:shadow-purple-500/30' },
    { label: 'Job Matcher', icon: Search, href: '/ai-tools/job-matcher', gradient: 'from-amber-500 to-orange-600', glow: 'hover:shadow-amber-500/30' },
    { label: 'Explore Courses', icon: GraduationCap, href: '/courses', gradient: 'from-emerald-500 to-teal-600', glow: 'hover:shadow-emerald-500/30' },
];

function getPersonalizedTips(goals: string[]): { title: string, tip: string; icon: any; color: string }[] {
    const tips: { title: string, tip: string; icon: any; color: string }[] = [];
    const goalStr = goals.join(' ').toLowerCase();

    if (goalStr.includes('faang') || goalStr.includes('google') || goalStr.includes('sde')) {
        tips.push({ title: 'System Design Patterns', tip: 'Distributed caching is asked in 80% of senior interviews now. Study Memcached architectures.', icon: Target, color: 'purple' });
        tips.push({ title: 'Behavioral Interviews', tip: 'Amazon LP questions require the STAR format. Prepare 5 versatile core stories.', icon: Briefcase, color: 'emerald' });
    }
    if (goalStr.includes('react') || goalStr.includes('frontend')) {
        tips.push({ title: 'React 19 Readiness', tip: 'Start using React Compiler and useActionState to stay ahead of the curve.', icon: Rocket, color: 'cyan' });
    }
    if (goalStr.includes('dsa') || goalStr.includes('algorithm')) {
        tips.push({ title: 'Algorithm Mastery', tip: 'Stop memorizing. Focus on underlying patterns like Sliding Window and Two Pointers.', icon: TrendingUp, color: 'orange' });
    }

    // Modern General Tips 2026
    if (tips.length < 2) {
        tips.push(
            { title: 'AI-Enhanced Coding', tip: 'Master prompt engineering. Generating scaffold code saves hours.', icon: Sparkles, color: 'blue' },
            { title: 'The 10x Engineer', tip: 'Focus on code architecture & soft skills, not just typing speed.', icon: Lightbulb, color: 'amber' }
        );
    }
    return tips.slice(0, 2);
}

function getRecommendedCourses(goals: string[]): { title: string, meta: string, icon: string, gradient: string, hoverBorder: string, blurBg: string, textHover: string, btnHover: string }[] {
    const courses = [];
    const goalStr = goals.join(' ').toLowerCase();

    if (goalStr.includes('faang') || goalStr.includes('backend') || goalStr.includes('sde')) {
        courses.push({ title: 'System Design 2026', meta: '8 Modules • Expert', icon: 'SD', gradient: 'from-blue-500 to-indigo-600', hoverBorder: 'hover:border-blue-500/30', blurBg: 'bg-blue-500/10 group-hover:bg-blue-500/20', textHover: 'group-hover:text-blue-400', btnHover: 'hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:border-blue-500' });
    }
    if (goalStr.includes('react') || goalStr.includes('frontend')) {
        courses.push({ title: 'React 19 Server Comps', meta: '6 Modules • Expert', icon: 'RE', gradient: 'from-cyan-500 to-blue-600', hoverBorder: 'hover:border-cyan-500/30', blurBg: 'bg-cyan-500/10 group-hover:bg-cyan-500/20', textHover: 'group-hover:text-cyan-400', btnHover: 'hover:bg-cyan-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:border-cyan-500' });
    }
    if (goalStr.includes('data') || goalStr.includes('python') || goalStr.includes('ai')) {
        courses.push({ title: 'AI Engineering Python', meta: '5 Modules • Advanced', icon: 'PY', gradient: 'from-amber-500 to-orange-600', hoverBorder: 'hover:border-orange-500/30', blurBg: 'bg-orange-500/10 group-hover:bg-orange-500/20', textHover: 'group-hover:text-orange-400', btnHover: 'hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:border-orange-500' });
    }
    
    // Defaults if goals don't match or aren't set
    if (courses.length === 0) {
        courses.push({ title: 'Advanced Async JS', meta: '4 Modules • Advanced', icon: 'JS', gradient: 'from-purple-500 to-indigo-600', hoverBorder: 'hover:border-purple-500/30', blurBg: 'bg-purple-500/10 group-hover:bg-purple-500/20', textHover: 'group-hover:text-purple-400', btnHover: 'hover:bg-purple-600 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:border-purple-500' });
        courses.push({ title: 'Algorithmic Thinking', meta: '10 Modules • Intermediate', icon: 'Algo', gradient: 'from-emerald-500 to-teal-600', hoverBorder: 'hover:border-emerald-500/30', blurBg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20', textHover: 'group-hover:text-emerald-400', btnHover: 'hover:bg-emerald-600 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:border-emerald-500' });
    }
    
    // Add a filler if we only have 1
    if (courses.length === 1) {
        courses.push({ title: 'Fullstack Next.js', meta: '7 Modules • Advanced', icon: 'NX', gradient: 'from-slate-700 to-slate-900', hoverBorder: 'hover:border-slate-500/30', blurBg: 'bg-slate-500/10 group-hover:bg-slate-500/20', textHover: 'group-hover:text-slate-400', btnHover: 'hover:bg-slate-700 hover:shadow-[0_0_20px_rgba(100,116,139,0.4)] hover:border-slate-500' });
    }

    return courses.slice(0, 2);
}

function calcProfileCompletion(user: any, dbUser: any): number {
    if (!user) return 0;
    let score = 20; // base
    const meta = user.user_metadata || {};
    const name = dbUser?.name || meta.name || meta.full_name;
    const photo = dbUser?.photo || meta.avatar_url || meta.picture;
    const role = dbUser?.role || meta.role;
    const goals = dbUser?.goals || [];
    const college = dbUser?.college;
    const bio = dbUser?.bio;

    if (name) score += 15;
    if (user.email) score += 10;
    if (photo) score += 15;
    if (role) score += 10;
    if (bio && bio.length > 5) score += 10;
    if (college) score += 10;
    if (goals.length > 0) score += 10;

    return Math.min(score, 100);
}

function generateWeeklyActivity(stats: any) {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const completed = stats.coursesCompleted || 2;
    const hours = stats.totalLearningHours || 6.5;
    const avgHoursPerDay = hours > 0 ? hours / 7 : 1.2;
    const avgTasksPerDay = completed > 0 ? Math.max(1, Math.round(completed / 7)) : 1;

    return days.map((day, i) => {
        // Deterministic pseudo-randomness based on day index so chart doesn't constantly jump
        const variance = 0.5 + ((i * 1.5) % 1) * 0.8;
        return {
            day,
            hours: Math.max(0, Math.round(avgHoursPerDay * variance * 10) / 10),
            tasks: Math.max(0, Math.round(avgTasksPerDay * variance)),
        };
    });
}

export function DashboardMain() {
    const { user } = useAuth();
    const { stats, loading } = useDashboardStats();
    const [profileScore, setProfileScore] = useState(0);
    const [dbUser, setDbUser] = useState<any>(null);
    const [userGoals, setUserGoals] = useState<string[]>([]);
    const [weeklyActivity, setWeeklyActivity] = useState<any[]>([]);
    const [questCompleted, setQuestCompleted] = useState(false);

    useEffect(() => {
        let mounted = true;
        const fetchProfile = async () => {
            if (!user?.email) return;
            try {
                // Try from local storage first for instant hydration
                let localProfile = null;
                try {
                    const stored = localStorage.getItem('flyeng_user');
                    if (stored) localProfile = JSON.parse(stored);
                } catch { }

                // Optimistic UI update
                if (localProfile && mounted) {
                    setDbUser(localProfile);
                    setProfileScore(calcProfileCompletion(user, localProfile));
                    setUserGoals(localProfile.goals || []);
                }

                const profile = await getUserByEmail(user.email);
                if (mounted && profile) {
                    setDbUser(profile);
                    setProfileScore(calcProfileCompletion(user, profile));
                    setUserGoals(profile.goals || []);
                    // Keep local storage in sync with DB
                    localStorage.setItem('flyeng_user', JSON.stringify({ ...localProfile, ...profile }));
                }
            } catch {
                if (mounted) {
                    setProfileScore(calcProfileCompletion(user, null));
                    try {
                        const stored = JSON.parse(localStorage.getItem('flyeng_user') || '{}');
                        setUserGoals(stored.goals || []);
                    } catch { }
                }
            }
            
            // Rehydrate quest status
            if (localStorage.getItem('flyeng_daily_quest_done') === new Date().toDateString()) {
                if (mounted) setQuestCompleted(true);
            }
        };

        fetchProfile();

        // Listen for profile updates from settings page
        window.addEventListener('storage', fetchProfile);
        return () => {
            mounted = false;
            window.removeEventListener('storage', fetchProfile);
        };
    }, [user]);

    useEffect(() => {
        if (!loading) {
            setWeeklyActivity(generateWeeklyActivity(stats));
        }
    }, [loading, stats]);

    const handleQuestComplete = () => {
        if (questCompleted) return;
        toast.success("Challenge Completed! +1 Day Streak 🔥");
        setQuestCompleted(true);
        localStorage.setItem('flyeng_daily_quest_done', new Date().toDateString());
        
        // Dynamic confetti simulation
        const Confetti = require('react-confetti').default;
        toast(
            <div className="flex flex-col gap-2">
                <span className="font-bold">Awesome solving!</span>
                <span className="text-xs text-white/50">Your streak is safe. Keep it up tomorrow!</span>
            </div>
        , { duration: 4000, icon: "🔥" });
    }

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 18) return "Good Afternoon";
        return "Good Evening";
    };

    const animInProgress = useCounter(stats.coursesInProgress);
    const animCompleted = useCounter(stats.coursesCompleted);
    const animCerts = useCounter(stats.certificatesEarned);
    const animStreak = useCounter(stats.currentStreak + (questCompleted ? 1 : 0));

    if (loading) {
        return (
            <div className="w-full h-96 flex items-center justify-center">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-cyan-500/20 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-cyan-500 rounded-full animate-spin"></div>
                    <div className="absolute top-2 left-2 w-12 h-12 border-4 border-transparent border-t-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                </div>
            </div>
        )
    }

    const displayName = dbUser?.name || user?.user_metadata?.name || user?.user_metadata?.full_name || user?.email || 'Engineer';
    const firstName = displayName.split(' ')[0];
    const avatarUrl = dbUser?.photo || user?.user_metadata?.avatar_url || user?.user_metadata?.picture;
    const personalizedTips = getPersonalizedTips(userGoals);
    const recommendedCourses = getRecommendedCourses(userGoals);

    return (
        <div className="space-y-5 lg:space-y-8 max-w-7xl mx-auto pb-8">

            {/* ═══════ HERO HEADER - PREMIUM REDESIGN ═══════ */}
            <motion.div
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl lg:rounded-[2.5rem] bg-[#030014]/90 border border-white/5 p-6 sm:p-8 lg:p-12 shadow-2xl group hover:border-cyan-500/20 transition-all duration-700"
            >
                {/* Immersive Background Decorations (Static for Performance) */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-bl from-cyan-500/20 to-blue-600/10 rounded-full blur-[80px] pointer-events-none hidden lg:block" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[700px] h-[700px] bg-gradient-to-tr from-purple-500/10 to-pink-600/5 rounded-full blur-[80px] pointer-events-none hidden lg:block" />

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 h-full">
                    <div className="flex items-center gap-6">
                        {/* Premium Avatar */}
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5, delay: 0.2 }} className="relative shrink-0">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-3xl overflow-hidden ring-4 ring-cyan-500/10 ring-offset-4 ring-offset-[#030014] shadow-[0_0_40px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] transition-shadow duration-500">
                                {avatarUrl ? (
                                    <img src={avatarUrl} alt={firstName} className="w-full h-full object-cover transform scale-110" />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-[#06b6d4] to-[#a855f7] flex items-center justify-center text-white font-black text-3xl sm:text-4xl">
                                        {firstName[0]?.toUpperCase()}
                                    </div>
                                )}
                            </div>
                            <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-[#050505] rounded-full border border-white/10 flex items-center gap-2 shadow-lg z-10">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Online</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xl">🚀</span>
                                <span className="text-xs sm:text-sm font-bold text-cyan-400 uppercase tracking-[0.2em]">{getGreeting()}</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
                                Ready to build, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-sm">{firstName}</span>?
                            </h1>
                            <p className="text-white/50 text-sm sm:text-base lg:text-lg max-w-xl font-medium leading-relaxed">
                                Your algorithms are waiting. A new daily challenge is active, and your profile is looking sharp. Let's make today count.
                            </p>
                        </motion.div>
                    </div>

                    {/* Quick Call to Actions */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 shrink-0 mt-6 lg:mt-0">
                        <Link href="/courses" className="w-full">
                            <button className="h-12 lg:h-14 px-4 sm:px-6 lg:px-8 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold hover:from-cyan-400 hover:to-purple-500 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 text-xs sm:text-sm lg:text-base w-full whitespace-nowrap">
                                <Zap className="w-4 h-4" fill="currentColor" /> Jump Back In
                            </button>
                        </Link>
                        <Link href="/ai-tools" className="w-full">
                            <button className="h-12 lg:h-14 px-4 sm:px-6 lg:px-8 rounded-2xl bg-white/[0.03] text-white font-bold border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-cyan-300 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm lg:text-base w-full hover:scale-105 active:scale-95 whitespace-nowrap">
                                <Sparkles className="w-4 h-4" /> Explore AI Center
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            {/* ═══════ STAT CARDS ═══════ */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
                {[
                    { icon: <BookOpen className="w-5 h-5 lg:w-6 lg:h-6" />, label: "In Progress", value: stats.coursesInProgress, color: "cyan", delay: 0.1 },
                    { icon: <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6" />, label: "Completed", value: stats.coursesCompleted, color: "emerald", delay: 0.2 },
                    { icon: <Award className="w-5 h-5 lg:w-6 lg:h-6" />, label: "Certificates", value: stats.certificatesEarned, color: "purple", delay: 0.3 },
                    { icon: <Flame className="w-5 h-5 lg:w-6 lg:h-6" />, label: "Day Streak", value: stats.currentStreak, suffix: "🔥", color: "orange", delay: 0.4 },
                ].map((stat) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: stat.delay, duration: 0.6, ease: "easeOut" }}
                        className={cn(
                            "group relative overflow-hidden p-5 lg:p-6 rounded-3xl border backdrop-blur-2xl hover:-translate-y-2 transition-all duration-500 cursor-default shadow-lg",
                            stat.color === "cyan" && "bg-cyan-500/[0.02] border-cyan-500/10 hover:bg-cyan-500/[0.05] hover:border-cyan-400/30 hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)]",
                            stat.color === "emerald" && "bg-emerald-500/[0.02] border-emerald-500/10 hover:bg-emerald-500/[0.05] hover:border-emerald-400/30 hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)]",
                            stat.color === "purple" && "bg-purple-500/[0.02] border-purple-500/10 hover:bg-purple-500/[0.05] hover:border-purple-400/30 hover:shadow-[0_15px_40px_rgba(168,85,247,0.15)]",
                            stat.color === "orange" && "bg-orange-500/[0.02] border-orange-500/10 hover:bg-orange-500/[0.05] hover:border-orange-400/30 hover:shadow-[0_15px_40px_rgba(249,115,22,0.15)]",
                        )}
                    >
                        <div className={cn(
                            "w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
                            stat.color === "cyan" && "bg-cyan-500/10 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)] border border-cyan-500/20",
                            stat.color === "emerald" && "bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] border border-emerald-500/20",
                            stat.color === "purple" && "bg-purple-500/10 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.2)] border border-purple-500/20",
                            stat.color === "orange" && "bg-orange-500/10 text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.2)] border border-orange-500/20",
                        )}>
                            {stat.icon}
                        </div>
                        
                        <div className="relative z-10">
                            <p className="text-3xl lg:text-4xl font-black text-white tracking-tighter">
                                {stat.value}{stat.suffix && <span className="ml-1.5 text-xl lg:text-2xl">{stat.suffix}</span>}
                            </p>
                            <p className={cn(
                                "text-[11px] lg:text-xs font-bold uppercase tracking-widest mt-2",
                                stat.color === "cyan" && "text-cyan-400/70",
                                stat.color === "emerald" && "text-emerald-400/70",
                                stat.color === "purple" && "text-purple-400/70",
                                stat.color === "orange" && "text-orange-400/70",
                            )}>{stat.label}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ═══════ MAIN GRID SYSTEM ═══════ */}
            <div className="grid lg:grid-cols-12 gap-5 lg:gap-6">

                {/* LEFT COLUMN (Wider content) - 7 Cols */}
                <div className="lg:col-span-7 space-y-5 lg:space-y-6">

                    {/* QUICK ACTIONS */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <h3 className="text-xs sm:text-sm font-black text-white/50 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-cyan-400" /> Command Center
                        </h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                            {quickActions.map((action, i) => (
                                <Link key={action.label} href={action.href}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.1 }}
                                        className={cn(
                                            "group relative p-4 lg:p-5 rounded-[20px] bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] hover:bg-white/[0.05] transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-1 shadow-lg",
                                            action.glow
                                        )}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className={cn("inline-flex p-2.5 rounded-xl bg-gradient-to-br mb-3 shadow-lg relative z-10", action.gradient)}>
                                            <action.icon className="w-5 h-5 text-white drop-shadow-md" />
                                        </div>
                                        <p className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">{action.label}</p>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        {/* Daily Quest - Moved to focus area on mobile */}
                        <div className="p-6 lg:p-8 rounded-[24px] bg-gradient-to-br from-orange-950/40 to-[#0A0505] border border-orange-500/20 relative overflow-hidden group shadow-xl">
                            <div className="absolute -right-10 -top-10 w-64 h-64 bg-[radial-gradient(circle,rgba(249,115,22,0.15)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle,rgba(249,115,22,0.25)_0%,transparent_70%)] transition-all pointer-events-none" />

                            <div className="flex items-start justify-between mb-4 relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                                    <Flame className="w-6 h-6 animate-pulse" />
                                </div>
                                <span className="text-[10px] font-black text-orange-400 uppercase tracking-[0.2em] bg-orange-500/10 px-3 py-1.5 rounded-lg border border-orange-500/20">Daily Quest</span>
                            </div>

                            <h3 className="text-xl font-black text-white mb-2 relative z-10 tracking-tight">Algorithm Master</h3>
                            <p className="text-white/50 text-sm mb-6 relative z-10 font-medium leading-relaxed">
                                {questCompleted 
                                    ? "Great job! You inverted the binary tree and saved your streak." 
                                    : "Solve \"Invert Binary Tree\" to keep your streak alive."}
                            </p>

                            {questCompleted ? (
                                <div className="w-full h-12 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg relative z-10 flex items-center justify-center gap-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 cursor-default">
                                    <Check className="w-4 h-4" /> Quest Completed
                                </div>
                            ) : (
                                <Link 
                                    href="/dashboard/algorithm-master" 
                                    className="w-full h-12 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] relative z-10 flex items-center justify-center gap-2 group/btn bg-orange-600 text-white hover:bg-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] active:scale-95 block"
                                >
                                    Start Challenge <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            )}
                        </div>
                    </motion.div>
                </div>


                {/* RIGHT COLUMN - 5 Cols */}
                <div className="lg:col-span-5 space-y-5 lg:space-y-6">

                    {/* DYNAMIC PROFILE STRENGTH */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}
                        className="p-6 lg:p-8 rounded-[24px] bg-[#050B14] border border-white/[0.05] hover:border-cyan-500/20 transition-all relative overflow-hidden shadow-xl"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(6,182,212,0.1)_0%,transparent_70%)] pointer-events-none" />
                        <h3 className="text-xs font-black text-white/50 uppercase tracking-[0.2em] mb-6 flex items-center gap-2 relative z-10">
                            <Target className="w-4 h-4 text-emerald-400" /> Assessment Score
                        </h3>

                        <div className="flex flex-col items-center relative z-10">
                            {/* Clean SVG Ring */}
                            <div className="relative w-36 h-36 mb-6 group">
                                <div className="absolute inset-0 rounded-full rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]" />
                                <svg className="w-full h-full transform -rotate-90 drop-shadow-2xl" viewBox="0 0 120 120">
                                    <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="10" />
                                    <motion.circle
                                        cx="60" cy="60" r="52" fill="none"
                                        stroke="url(#strongProfileGrad)" strokeWidth="10" strokeLinecap="round"
                                        strokeDasharray={2 * Math.PI * 52}
                                        initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                                        animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - profileScore / 100) }}
                                        transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    />
                                    <defs>
                                        <linearGradient id="strongProfileGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#06b6d4" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-4xl font-black text-white tracking-tighter">{profileScore}%</span>
                                    <span className="text-[10px] text-white/50 font-bold uppercase tracking-[0.2em] mt-1">COMPLETE</span>
                                </div>
                            </div>

                            {profileScore < 100 ? (
                                <Link href="/dashboard/settings" className="w-full">
                                    <Button className="w-full h-12 rounded-xl text-xs font-bold bg-white/5 text-white hover:bg-white/10 border border-white/10 transition-all">Fill Missing Details →</Button>
                                </Link>
                            ) : (
                                <div className="w-full p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"><CheckCircle className="w-4 h-4"/> Perfect Profile</div>
                            )}
                        </div>
                    </motion.div>




                    {/* PERSONALIZED TIPS */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65 }}
                        className="p-6 rounded-[24px] bg-[#050B14] border border-white/[0.05] relative overflow-hidden shadow-xl"
                    >
                        <h3 className="text-[10px] font-black text-white/50 uppercase tracking-[0.25em] mb-5 flex items-center gap-2">
                            <Lightbulb className="w-4 h-4 text-emerald-400" /> Career Intel
                        </h3>
                        <div className="space-y-4">
                            {personalizedTips.map((tip, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-[16px] bg-[#0A101C] border border-white/[0.04] hover:bg-[#0D1526] hover:border-white/10 transition-colors group">
                                    <div className="mt-0.5">
                                        <div className={cn(
                                            "w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:-rotate-12",
                                            tip.color === 'cyan' && "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
                                            tip.color === 'purple' && "bg-purple-500/10 text-purple-400 border border-purple-500/20",
                                            tip.color === 'amber' && "bg-amber-500/10 text-amber-400 border border-amber-500/20",
                                            tip.color === 'emerald' && "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
                                            tip.color === 'orange' && "bg-orange-500/10 text-orange-400 border border-orange-500/20",
                                            tip.color === 'blue' && "bg-blue-500/10 text-blue-400 border border-blue-500/20",
                                        )}>
                                            <tip.icon className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-1 tracking-wide group-hover:text-emerald-400 transition-colors">{tip.title}</h4>
                                        <p className="text-[11px] text-white/50 leading-relaxed font-medium">{tip.tip}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

// Quick placeholder for missing 'Code' icon from lucide that wasn't imported initially
const Code = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

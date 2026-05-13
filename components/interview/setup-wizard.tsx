    'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
    Mic, Video, CheckCircle2, Cpu, ChevronRight, ChevronLeft, Rocket, Target,
    Sparkles, Zap, Settings, Search, Shuffle
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { AuroraBackground } from "@/components/aurora-background";
import {
    INTERVIEWERS,
    INTERVIEW_TYPES,
    ROLES,
    LEVELS,
    DURATIONS,
    FOCUS_AREAS,
    INTERVIEW_PACES,
    DIFFICULTY_MODES,
    COMPANY_TARGETS,
    SPECIFIC_COMPANIES,
    INTERVIEW_ROUNDS,
} from '@/app/interview/lib/constants';

// --- Types ---
type WizardStep =
    | 'HARDWARE'
    | 'MODE_SELECT'
    // Role-Based path
    | 'ROLE_SELECT'
    | 'COMPANY_TARGET'
    | 'SPECIFIC_COMPANY'
    | 'ROUND_SELECT'
    // Custom path
    | 'PERSONA'
    | 'INTERVIEW_TYPE'
    | 'MISSION'
    // Shared
    | 'LAUNCH';

type InterviewMode = 'quick' | 'custom' | null;

interface InterviewConfig {
    role: string;
    level: string;
    topic: string;
    questions: number;
    persona: string;
    interviewType: string;
    pace: string;
    difficulty: string;
}

// Role categories for the grouped grid
const ROLE_CATEGORIES: Record<string, string[]> = {
    '💻 Software & Web': [
        'Software Engineer', 'Full Stack Engineer', 'Frontend Developer', 'Backend Engineer',
        'MERN Stack Developer', 'React Developer', 'Angular Developer', 'Vue.js Developer',
        'Next.js Developer', 'Node.js Developer', 'PHP / Laravel Developer',
    ],
    '🐍 Languages & Systems': [
        'Python Developer', 'Java Developer', 'Go Developer', 'Rust Developer',
        'C++ Developer', 'Embedded Systems Engineer', 'Firmware Engineer',
    ],
    '📱 Mobile': [
        'iOS Developer (Swift)', 'Android Developer (Kotlin)', 'Flutter / React Native Developer',
    ],
    '🧠 AI / ML / Data': [
        'Data Analyst', 'Data Scientist', 'Data Engineer', 'Data Architect',
        'Machine Learning Engineer', 'MLOps Engineer', 'AI / ML Researcher',
        'NLP Engineer', 'Computer Vision Engineer', 'Prompt Engineer', 'Research Scientist',
    ],
    '☁️ DevOps & Cloud': [
        'DevOps / SRE', 'Site Reliability Engineer', 'Platform Engineer',
        'Cloud Architect', 'Solutions Architect',
        'Database Administrator', 'Network Engineer',
    ],
    '🔒 Security': [
        'Security Engineer', 'Cybersecurity Analyst', 'Ethical Hacker / Pentester',
    ],
    '🎨 Design & Product': [
        'Product Manager', 'Product Designer', 'UI/UX Designer',
    ],
    '🏗️ Emerging Tech': [
        'Blockchain Developer', 'Web3 Developer', 'Game Developer',
        'AR / VR Developer', 'IoT Developer', 'Robotics Engineer',
    ],
    '🧪 QA & Testing': [
        'QA / Test Engineer', 'Automation Engineer',
    ],
    '👔 Leadership & Others': [
        'Engineering Manager', 'Technical Lead', 'CTO / VP Engineering',
        'Technical Program Manager', 'Scrum Master',
        'Business Analyst', 'Project Manager', 'Technical Writer',
        'Salesforce Developer', 'SAP Consultant', 'ERP Consultant', 'IT Support Engineer',
    ],
};

// Best interviewer match — randomized from a pool of suitable candidates
function pickBestInterviewer(role: string, companyType: string): string {
    const r = role.toLowerCase();
    const pick = (pool: string[]) => pool[Math.floor(Math.random() * pool.length)];
    
    // Leadership roles
    if (r.includes('manager') || r.includes('lead') || r.includes('cto') || r.includes('vp')) return pick(['raj', 'vikram', 'atlas']);
    // Design/Product
    if (r.includes('design') || r.includes('ux') || r.includes('ui')) return pick(['maya', 'leo']);
    if (r.includes('product')) return pick(['sofia', 'emily']);
    // Security
    if (r.includes('security') || r.includes('cyber')) return pick(['chen', 'marcus']);
    // DevOps/SRE/Cloud
    if (r.includes('devops') || r.includes('sre') || r.includes('cloud') || r.includes('network') || r.includes('database')) return pick(['david', 'kavya']);
    // AI/ML/Data
    if (r.includes('ai') || r.includes('ml') || r.includes('data') || r.includes('machine learning')) return pick(['aditya', 'nina']);
    // System Design / Architecture
    if (r.includes('architect') || r.includes('system') || companyType === 'unicorn') return pick(['atlas', 'arjun']);
    // QA / Testing
    if (r.includes('qa') || r.includes('test') || r.includes('automation')) return pick(['zara', 'meera']);
    // FAANG
    if (companyType === 'faang') return pick(['marcus', 'arjun', 'alex']);
    // Startup
    if (companyType === 'startup') return pick(['dev', 'meera']);
    // Indian service companies
    if (companyType === 'service' || companyType === 'government') return pick(['meera', 'arjun', 'kavya']);
    // HR / Culture / Internship
    if (companyType === 'internship' || companyType === 'remote') return pick(['sarah', 'emily', 'meera']);
    // Mobile
    if (r.includes('ios') || r.includes('android') || r.includes('flutter') || r.includes('react native')) return pick(['leo', 'alex', 'meera']);
    // Frontend
    if (r.includes('frontend') || r.includes('react') || r.includes('angular') || r.includes('vue') || r.includes('next')) return pick(['leo', 'alex', 'meera']);
    // Backend
    if (r.includes('backend') || r.includes('node') || r.includes('java') || r.includes('python') || r.includes('go')) return pick(['alex', 'arjun', 'dev', 'marcus']);
    // Default — random from a broad pool
    return pick(['alex', 'arjun', 'meera', 'marcus', 'dev', 'priya', 'kavya']);
}

function pickLevel(companyType: string): string {
    if (companyType === 'internship') return 'Intern';
    if (companyType === 'faang' || companyType === 'unicorn') return 'Senior';
    if (companyType === 'government') return 'Mid-Level';
    return 'Junior';
}

export function SetupWizard() {
    const router = useRouter();
    const [step, setStep] = useState<WizardStep>('HARDWARE');
    const [mode, setMode] = useState<InterviewMode>(null);
    // Randomize initial persona so it's never always Alex
    const [config, setConfig] = useState<InterviewConfig>(() => {
        const randomPersonas = ['alex', 'arjun', 'meera', 'marcus', 'dev', 'kavya', 'sarah', 'maya', 'priya', 'aditya'];
        const randomPick = randomPersonas[Math.floor(Math.random() * randomPersonas.length)];
        return {
            role: 'Software Engineer',
            level: 'Junior',
            topic: 'General / Mixed',
            questions: 5,
            persona: randomPick,
            interviewType: 'Technical',
            pace: 'normal',
            difficulty: 'standard'
        };
    });
    const [selectedCompanyTarget, setSelectedCompanyTarget] = useState<string | null>(null);
    const [selectedSpecificCompany, setSelectedSpecificCompany] = useState<string | null>(null);
    const [selectedRound, setSelectedRound] = useState<string | null>(null);
    const [roleSearch, setRoleSearch] = useState('');
    const [companySearch, setCompanySearch] = useState('');

    // Hardware State
    const [checks, setChecks] = useState({ camera: false, mic: false });
    const videoRef = useRef<HTMLVideoElement>(null);

    // --- Steps per mode ---
    const getSteps = (): WizardStep[] => {
        if (mode === 'quick') return ['HARDWARE', 'MODE_SELECT', 'ROLE_SELECT', 'COMPANY_TARGET', 'SPECIFIC_COMPANY', 'ROUND_SELECT', 'LAUNCH'];
        if (mode === 'custom') return ['HARDWARE', 'MODE_SELECT', 'PERSONA', 'INTERVIEW_TYPE', 'MISSION', 'LAUNCH'];
        return ['HARDWARE', 'MODE_SELECT'];
    };

    const STEPS = getSteps();
    const currentIndex = STEPS.indexOf(step);

    // --- Hardware Check Logic ---
    useEffect(() => {
        let stream: MediaStream | null = null;

        async function initHardware() {
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play().catch(() => {});
                }
                setChecks({ camera: true, mic: true });
            } catch (e) {
                console.error("Hardware check failed", e);
                setChecks({ camera: false, mic: false });
            }
        }

        if (step === 'HARDWARE') {
            initHardware();
        }

        return () => {
            if (stream) stream.getTracks().forEach(t => t.stop());
        };
    }, [step]);

    // --- Filtered roles for search ---
    const filteredCategories = useMemo(() => {
        if (!roleSearch.trim()) return ROLE_CATEGORIES;
        const q = roleSearch.toLowerCase();
        const result: Record<string, string[]> = {};
        for (const [cat, roles] of Object.entries(ROLE_CATEGORIES)) {
            const matched = roles.filter(r => r.toLowerCase().includes(q));
            if (matched.length > 0) result[cat] = matched;
        }
        return result;
    }, [roleSearch]);

    const handleNext = () => {
        const nextIdx = currentIndex + 1;
        if (nextIdx < STEPS.length) setStep(STEPS[nextIdx]);
    };

    const handleBack = () => {
        const prevIdx = currentIndex - 1;
        if (prevIdx >= 0) {
            const prevStep = STEPS[prevIdx];
            // If going back to MODE_SELECT, reset mode
            if (prevStep === 'MODE_SELECT') setMode(null);
            setStep(prevStep);
        }
    };

    const selectMode = (m: InterviewMode) => {
        setMode(m);
        if (m === 'quick') setStep('ROLE_SELECT');
        else setStep('PERSONA');
    };

    const selectCompanyTarget = (targetId: string) => {
        setSelectedCompanyTarget(targetId);
        const target = COMPANY_TARGETS.find(t => t.id === targetId);
        if (target) {
            const bestPersona = pickBestInterviewer(config.role, targetId);
            const level = pickLevel(targetId);
            setConfig(prev => ({
                ...prev,
                persona: bestPersona,
                interviewType: target.autoSettings.interviewType,
                difficulty: target.autoSettings.difficulty,
                pace: target.autoSettings.pace,
                topic: target.autoSettings.focusArea,
                questions: target.autoSettings.questions,
                level,
            }));
        }
    };

    const startInterview = () => {
        const params = new URLSearchParams();
        params.set('role', config.role);
        params.set('level', config.level);
        params.set('questions', config.questions.toString());
        params.set('persona', config.persona);
        params.set('type', config.interviewType);
        params.set('topic', config.topic);
        params.set('pace', config.pace);
        params.set('difficulty', config.difficulty);
        if (selectedSpecificCompany) params.set('company', selectedSpecificCompany);
        if (selectedRound) params.set('round', selectedRound);
        router.push(`/interview/live?${params.toString()}`);
    };

    // ==================== RENDER STEPS ====================

    const renderHardware = () => (
        <motion.div
            key="hardware"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="space-y-8 w-full max-w-5xl mx-auto"
        >
            <div className="text-center space-y-3">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-2"
                >
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Pre-Flight Check</span>
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                    System Check
                </h2>
                <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto">
                    Verify your camera & microphone before we begin.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* Camera Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className={cn(
                        "group relative overflow-hidden rounded-2xl backdrop-blur-md border transition-all duration-500",
                        checks.camera 
                            ? "bg-cyan-500/5 border-cyan-500/20 shadow-lg shadow-cyan-500/5" 
                            : "bg-white/5 border-white/10 hover:border-white/20"
                    )}
                >
                    <div className="relative z-10 p-5 flex flex-col h-[310px] md:h-[390px]">
                        <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-4">
                            <Video className={cn("w-5 h-5 transition-colors", checks.camera ? "text-cyan-400" : "text-zinc-500")} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">Camera</h3>
                        <p className="text-white/40 text-xs leading-relaxed mb-4">
                            Ensure good lighting and face visibility.
                        </p>
                        <div className="mt-auto relative rounded-xl overflow-hidden bg-black/30 border border-white/5 aspect-video">
                            {checks.camera ? (
                                <>
                                    <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover transform scale-x-[-1]" />
                                    <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-green-500/30">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[9px] uppercase font-bold text-green-400">Live</span>
                                    </div>
                                </>
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-6 h-6 rounded-full border-2 border-white/10 border-t-white/50 animate-spin" />
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Mic Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={cn(
                        "group relative overflow-hidden rounded-2xl backdrop-blur-md border transition-all duration-500",
                        checks.mic 
                            ? "bg-purple-500/5 border-purple-500/20 shadow-lg shadow-purple-500/5" 
                            : "bg-white/5 border-white/10 hover:border-white/20"
                    )}
                >
                    <div className="relative z-10 p-5 flex flex-col h-[310px] md:h-[390px]">
                        <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-4">
                            <Mic className={cn("w-5 h-5 transition-colors", checks.mic ? "text-purple-400" : "text-zinc-500")} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">Microphone</h3>
                        <p className="text-white/40 text-xs leading-relaxed mb-4">
                            AI will listen continuously. Speak naturally.
                        </p>
                        <div className="mt-auto h-20 flex items-center justify-center gap-1">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        height: checks.mic ? [8, 35, 12, 42, 18] : 3,
                                        opacity: checks.mic ? 1 : 0.2
                                    }}
                                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                                    className={cn("w-1.5 rounded-full", checks.mic ? "bg-purple-500" : "bg-white/10")}
                                />
                            ))}
                        </div>
                        <div className={cn("text-center text-[10px] font-mono mt-2", checks.mic ? "text-purple-400" : "text-white/20")}>
                            {checks.mic ? "INPUT DETECTED" : "NO AUDIO"}
                        </div>
                    </div>
                </motion.div>

                {/* Status Card — Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={cn(
                        "group relative overflow-hidden rounded-2xl backdrop-blur-md border transition-all duration-500",
                        checks.camera && checks.mic
                            ? "bg-green-500/5 border-green-500/20 shadow-lg shadow-green-500/5"
                            : "bg-white/5 border-white/10 hover:border-white/20"
                    )}
                >
                    <div className="relative z-10 p-5 flex flex-col h-[310px] md:h-[390px]">
                        <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-3">
                            <Cpu className={cn("w-5 h-5 transition-colors", checks.camera && checks.mic ? "text-green-400" : "text-zinc-500")} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">System Status</h3>
                        <p className="text-white/40 text-xs leading-relaxed mb-2">
                            All systems must be online to proceed.
                        </p>
                        <div className="mt-auto space-y-1.5">
                            {/* Camera check */}
                            <div className={cn("flex items-center gap-3 p-2.5 rounded-xl border transition-all",
                                checks.camera ? "bg-green-500/10 border-green-500/20" : "bg-white/5 border-white/5"
                            )}>
                                <CheckCircle2 className={cn("w-4 h-4", checks.camera ? "text-green-400" : "text-white/20")} />
                                <span className={cn("text-sm font-medium flex-1", checks.camera ? "text-green-400" : "text-white/30")}>Camera</span>
                                {checks.camera && <span className="text-[9px] text-green-500/60 font-mono">720p+</span>}
                            </div>
                            {/* Mic check */}
                            <div className={cn("flex items-center gap-3 p-2.5 rounded-xl border transition-all",
                                checks.mic ? "bg-green-500/10 border-green-500/20" : "bg-white/5 border-white/5"
                            )}>
                                <CheckCircle2 className={cn("w-4 h-4", checks.mic ? "text-green-400" : "text-white/20")} />
                                <span className={cn("text-sm font-medium flex-1", checks.mic ? "text-green-400" : "text-white/30")}>Microphone</span>
                                {checks.mic && <span className="text-[9px] text-green-500/60 font-mono">Active</span>}
                            </div>
                            {/* Network */}
                            <div className="flex items-center gap-3 p-2.5 rounded-xl border bg-green-500/10 border-green-500/20 transition-all">
                                <CheckCircle2 className="w-4 h-4 text-green-400" />
                                <span className="text-sm font-medium flex-1 text-green-400">Network</span>
                                <span className="text-[9px] text-green-500/60 font-mono">Online</span>
                            </div>
                            {/* AI Engine */}
                            <div className="flex items-center gap-3 p-2.5 rounded-xl border bg-cyan-500/10 border-cyan-500/20 transition-all">
                                <Sparkles className="w-4 h-4 text-cyan-400" />
                                <span className="text-sm font-medium flex-1 text-cyan-400">AI Engine</span>
                                <span className="text-[9px] text-cyan-500/60 font-mono">Ready</span>
                            </div>
                            {/* All systems status */}
                            {checks.camera && checks.mic && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-2.5 rounded-xl bg-gradient-to-r from-green-500/15 to-emerald-500/15 border border-green-500/30 text-center"
                                >
                                    <span className="font-bold text-green-400 text-sm">✓ All 4 Systems Go</span>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );

    // ==================== MODE SELECT ====================
    const renderModeSelect = () => (
        <motion.div
            key="mode-select"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="w-full max-w-4xl mx-auto space-y-8"
        >
            <div className="text-center space-y-3">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                    Choose Your Path
                </h2>
                <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
                    Quick launch with smart defaults, or customize every detail.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Quick Start Card */}
                <motion.button
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => selectMode('quick')}
                    className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/40 p-6 md:p-8 text-left transition-all duration-500"
                >
                    {/* Glow effect */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10 space-y-5">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                                <Zap className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-black text-white">Quick Start</h3>
                                <p className="text-cyan-400/80 text-xs font-bold uppercase tracking-wider">Role-Based</p>
                            </div>
                        </div>

                        <p className="text-white/50 text-sm leading-relaxed">
                            Select your target role and company type — we'll automatically match you with the <span className="text-cyan-300 font-semibold">perfect interviewer</span>, difficulty, and focus area.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {['Auto Interviewer', 'Smart Defaults', '50+ Roles', '25+ Companies'].map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300/80 border border-cyan-500/20">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm pt-2">
                            <Shuffle className="w-4 h-4" /> Get started in 2 clicks
                            <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </motion.button>

                {/* Custom Interview Card */}
                <motion.button
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => selectMode('custom')}
                    className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-600/10 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/40 p-6 md:p-8 text-left transition-all duration-500"
                >
                    {/* Glow effect */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10 space-y-5">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                                <Settings className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-black text-white">Custom Interview</h3>
                                <p className="text-purple-400/80 text-xs font-bold uppercase tracking-wider">Full Control</p>
                            </div>
                        </div>

                        <p className="text-white/50 text-sm leading-relaxed">
                            Handpick your interviewer, interview type, difficulty, pace, focus area, and every other setting for a <span className="text-purple-300 font-semibold">fully tailored</span> experience.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {['15 Interviewers', '9 Types', 'Pace Control', '25 Focus Areas'].map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300/80 border border-purple-500/20">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-purple-400 font-bold text-sm pt-2">
                            <Target className="w-4 h-4" /> Complete customization
                            <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </motion.button>
            </div>
        </motion.div>
    );

    // ==================== ROLE SELECT (Quick Path) ====================
    const renderRoleSelect = () => (
        <motion.div
            key="role-select"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="w-full max-w-4xl mx-auto space-y-6"
        >
            <div className="text-center space-y-2">
                <h2 className="text-3xl md:text-4xl font-black text-white">What's Your Target Role?</h2>
                <p className="text-white/50 text-sm md:text-base">Pick the role you're preparing for — we'll optimize everything around it.</p>
            </div>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                    type="text"
                    placeholder="Search roles..."
                    value={roleSearch}
                    onChange={(e) => setRoleSearch(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/30"
                />
            </div>

            {/* Categorized Role Grid */}
            <div className="max-h-[55vh] overflow-y-auto pr-1 custom-scrollbar space-y-5">
                {Object.entries(filteredCategories).map(([category, roles]) => (
                    <div key={category}>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white/30 mb-2 ml-1">{category}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                            {roles.map(role => (
                                <button
                                    key={role}
                                    onClick={() => setConfig({ ...config, role })}
                                    className={cn(
                                        "px-4 py-3 rounded-xl border text-left text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98]",
                                        config.role === role
                                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-transparent text-white shadow-lg shadow-cyan-500/20"
                                            : "bg-white/5 border-white/10 hover:bg-white/10 text-white/70 hover:text-white"
                                    )}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="truncate">{role}</span>
                                        {config.role === role && <CheckCircle2 className="w-4 h-4 shrink-0 ml-2" />}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
                {Object.keys(filteredCategories).length === 0 && (
                    <div className="text-center py-10 text-white/30 text-sm">No roles found for "{roleSearch}"</div>
                )}
            </div>
        </motion.div>
    );

    // ==================== COMPANY TARGET (Quick Path) ====================
    const renderCompanyTarget = () => (
        <motion.div
            key="company-target"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="w-full max-w-4xl mx-auto space-y-6"
        >
            <div className="text-center space-y-2">
                <h2 className="text-3xl md:text-4xl font-black text-white">Where Are You Targeting?</h2>
                <p className="text-white/50 text-sm md:text-base">
                    We'll auto-tune difficulty, pace, and interviewer style to match <span className="text-cyan-400 font-semibold">{config.role}</span> at your target company type.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[55vh] overflow-y-auto pr-1 custom-scrollbar">
                {COMPANY_TARGETS.map(target => {
                    const isSelected = selectedCompanyTarget === target.id;
                    return (
                        <motion.button
                            key={target.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => selectCompanyTarget(target.id)}
                            className={cn(
                                "relative overflow-hidden p-5 rounded-2xl border text-left transition-all duration-300",
                                isSelected
                                    ? `bg-gradient-to-br ${target.gradient} border-transparent shadow-xl text-white`
                                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white/70"
                            )}
                        >
                            {/* Subtle glow on selected */}
                            {isSelected && (
                                <div className="absolute inset-0 bg-white/5 rounded-2xl" />
                            )}

                            <div className="relative z-10 space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl">{target.icon}</span>
                                    <div className="flex-1 min-w-0">
                                        <h3 className={cn("font-bold text-base", isSelected ? "text-white" : "text-white/90")}>{target.label}</h3>
                                        <p className={cn("text-xs truncate", isSelected ? "text-white/80" : "text-white/40")}>{target.description}</p>
                                    </div>
                                    {isSelected && (
                                        <div className="bg-white/20 p-1 rounded-full shrink-0"><CheckCircle2 className="w-4 h-4" /></div>
                                    )}
                                </div>

                                {/* Auto settings preview */}
                                <div className={cn("flex flex-wrap gap-1.5 text-[9px] font-bold uppercase tracking-wider",
                                    isSelected ? "opacity-100" : "opacity-0 h-0"
                                )}>
                                    <span className="px-2 py-0.5 rounded-full bg-white/20">{target.autoSettings.difficulty}</span>
                                    <span className="px-2 py-0.5 rounded-full bg-white/20">{target.autoSettings.pace}</span>
                                    <span className="px-2 py-0.5 rounded-full bg-white/20">{target.autoSettings.interviewType}</span>
                                    <span className="px-2 py-0.5 rounded-full bg-white/20">{target.autoSettings.questions}Q</span>
                                </div>
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </motion.div>
    );

    // ==================== SPECIFIC COMPANY (Quick Path — Optional) ====================
    const filteredCompanies = useMemo(() => {
        if (!companySearch.trim()) return SPECIFIC_COMPANIES;
        const q = companySearch.toLowerCase();
        return SPECIFIC_COMPANIES.filter(c => c.name.toLowerCase().includes(q) || c.category.toLowerCase().includes(q));
    }, [companySearch]);

    const companyCategories = useMemo(() => {
        const grouped: Record<string, typeof SPECIFIC_COMPANIES> = {};
        for (const c of filteredCompanies) {
            if (!grouped[c.category]) grouped[c.category] = [];
            grouped[c.category].push(c);
        }
        return grouped;
    }, [filteredCompanies]);

    const selectSpecificCompany = (companyId: string) => {
        setSelectedSpecificCompany(companyId);
        const company = SPECIFIC_COMPANIES.find(c => c.id === companyId);
        if (company) {
            setConfig(prev => ({
                ...prev,
                persona: company.autoSettings.interviewer,
                interviewType: company.autoSettings.interviewType,
                difficulty: company.autoSettings.difficulty,
                pace: company.autoSettings.pace,
                topic: company.autoSettings.focusArea,
                questions: company.autoSettings.questions,
            }));
        }
    };

    const renderSpecificCompany = () => (
        <motion.div
            key="specific-company"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="w-full max-w-4xl mx-auto space-y-5"
        >
            <div className="text-center space-y-2">
                <h2 className="text-2xl md:text-4xl font-black text-white">Targeting a Specific Company?</h2>
                <p className="text-white/50 text-xs md:text-sm">
                    Optional — pick a company for tailored questions, or skip to continue with <span className="text-cyan-400 font-semibold">{COMPANY_TARGETS.find(t => t.id === selectedCompanyTarget)?.label}</span> defaults.
                </p>
            </div>

            <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                    type="text"
                    placeholder="Search companies..."
                    value={companySearch}
                    onChange={(e) => setCompanySearch(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-2.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/30"
                />
            </div>

            <div className="max-h-[50vh] overflow-y-auto pr-1 custom-scrollbar space-y-5">
                {Object.entries(companyCategories).map(([category, companies]) => (
                    <div key={category}>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white/30 mb-2 ml-1">{category}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                            {companies.map(company => {
                                const isSelected = selectedSpecificCompany === company.id;
                                return (
                                    <button
                                        key={company.id}
                                        onClick={() => selectSpecificCompany(company.id)}
                                        className={cn(
                                            "p-3 rounded-xl border text-left transition-all hover:scale-[1.02] active:scale-[0.98]",
                                            isSelected
                                                ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-cyan-500/40 shadow-lg shadow-cyan-500/10"
                                                : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                                        )}
                                    >
                                        <div className="flex items-start gap-2.5">
                                            <span className="text-xl mt-0.5">{company.logo}</span>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <h3 className={cn("font-bold text-sm", isSelected ? "text-cyan-300" : "text-white/90")}>{company.name}</h3>
                                                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                                                </div>
                                                <p className={cn("text-[10px] mt-0.5 line-clamp-2 leading-relaxed", isSelected ? "text-white/60" : "text-white/30")}>{company.description}</p>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
                {Object.keys(companyCategories).length === 0 && (
                    <div className="text-center py-8 text-white/30 text-sm">No companies found for &quot;{companySearch}&quot;</div>
                )}
            </div>
        </motion.div>
    );

    // Round-specific gradients for the setup step
    const ROUND_CARD_THEMES: Record<string, { gradient: string; selectedGradient: string; accent: string; shadow: string }> = {
        technical: { gradient: 'from-blue-500/5 to-cyan-500/5', selectedGradient: 'from-blue-500/20 to-cyan-600/20', accent: 'text-cyan-300', shadow: 'shadow-cyan-500/10' },
        hr: { gradient: 'from-rose-500/5 to-pink-500/5', selectedGradient: 'from-rose-500/20 to-pink-600/20', accent: 'text-rose-300', shadow: 'shadow-rose-500/10' },
        gd: { gradient: 'from-violet-500/5 to-purple-500/5', selectedGradient: 'from-violet-500/20 to-purple-600/20', accent: 'text-violet-300', shadow: 'shadow-violet-500/10' },
        f2f: { gradient: 'from-amber-500/5 to-yellow-500/5', selectedGradient: 'from-amber-500/20 to-yellow-600/20', accent: 'text-amber-300', shadow: 'shadow-amber-500/10' },
        virtual: { gradient: 'from-emerald-500/5 to-teal-500/5', selectedGradient: 'from-emerald-500/20 to-teal-600/20', accent: 'text-emerald-300', shadow: 'shadow-emerald-500/10' },
        managerial: { gradient: 'from-orange-500/5 to-amber-500/5', selectedGradient: 'from-orange-500/20 to-amber-600/20', accent: 'text-orange-300', shadow: 'shadow-orange-500/10' },
        system_design: { gradient: 'from-slate-500/5 to-emerald-500/5', selectedGradient: 'from-slate-500/20 to-emerald-600/20', accent: 'text-emerald-300', shadow: 'shadow-emerald-500/10' },
        case_study: { gradient: 'from-indigo-500/5 to-sky-500/5', selectedGradient: 'from-indigo-500/20 to-sky-600/20', accent: 'text-indigo-300', shadow: 'shadow-indigo-500/10' },
        aptitude: { gradient: 'from-yellow-500/5 to-amber-500/5', selectedGradient: 'from-yellow-500/20 to-amber-600/20', accent: 'text-yellow-300', shadow: 'shadow-yellow-500/10' },
        coding: { gradient: 'from-green-500/5 to-lime-500/5', selectedGradient: 'from-green-500/20 to-lime-600/20', accent: 'text-green-300', shadow: 'shadow-green-500/10' },
        pair_programming: { gradient: 'from-cyan-500/5 to-blue-500/5', selectedGradient: 'from-cyan-500/20 to-blue-600/20', accent: 'text-cyan-300', shadow: 'shadow-cyan-500/10' },
        final: { gradient: 'from-gold-500/5 to-amber-500/5', selectedGradient: 'from-amber-500/20 to-yellow-600/20', accent: 'text-amber-300', shadow: 'shadow-amber-500/10' },
    };

    // ==================== ROUND SELECT (Quick Path — Optional) ====================
    const renderRoundSelect = () => (
        <motion.div
            key="round-select"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="w-full max-w-3xl mx-auto space-y-6"
        >
            <div className="text-center space-y-2">
                <h2 className="text-2xl md:text-4xl font-black text-white">Interview Round</h2>
                <p className="text-white/50 text-xs md:text-sm">
                    Optional — select a specific round type, or skip for the auto-selected format.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[55vh] overflow-y-auto pr-1 custom-scrollbar">
                {INTERVIEW_ROUNDS.map((round, idx) => {
                    const isSelected = selectedRound === round.id;
                    const theme = ROUND_CARD_THEMES[round.id] || ROUND_CARD_THEMES.technical;
                    return (
                        <motion.button
                            key={round.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                setSelectedRound(round.id);
                                const typeMap: Record<string, string> = {
                                    technical: 'Technical', hr: 'HR', gd: 'Behavioral',
                                    f2f: 'Technical', virtual: 'Technical', managerial: 'Managerial',
                                    system_design: 'System Design', case_study: 'Case Study'
                                };
                                if (typeMap[round.id]) {
                                    setConfig(prev => ({ ...prev, interviewType: typeMap[round.id] }));
                                }
                            }}
                            className={cn(
                                "relative p-4 rounded-2xl border text-left transition-all duration-300 overflow-hidden",
                                isSelected
                                    ? `bg-gradient-to-r ${theme.selectedGradient} border-white/20 shadow-lg ${theme.shadow}`
                                    : `bg-gradient-to-r ${theme.gradient} border-white/10 hover:border-white/20`
                            )}
                        >
                            {/* Hover glow */}
                            <div className={cn(
                                "absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl transition-opacity duration-500",
                                isSelected ? "opacity-30" : "opacity-0 group-hover:opacity-10"
                            )} style={{ background: 'currentColor' }} />
                            
                            <div className="relative z-10 flex items-center gap-3">
                                <div className={cn(
                                    "w-11 h-11 rounded-xl flex items-center justify-center text-xl transition-all",
                                    isSelected ? "bg-white/15 backdrop-blur-sm" : "bg-white/5"
                                )}>
                                    {round.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className={cn("font-bold text-sm", isSelected ? theme.accent : "text-white/90")}>{round.label}</h3>
                                    <p className={cn("text-[10px] mt-0.5 leading-relaxed", isSelected ? "text-white/60" : "text-white/30")}>{round.description}</p>
                                </div>
                                {isSelected && (
                                    <motion.div 
                                        initial={{ scale: 0 }} 
                                        animate={{ scale: 1 }} 
                                        className="bg-white/15 p-1 rounded-full shrink-0 backdrop-blur-sm"
                                    >
                                        <CheckCircle2 className={cn("w-4 h-4", theme.accent)} />
                                    </motion.div>
                                )}
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </motion.div>
    );

    // ==================== PERSONA (Custom Path) ====================
    const renderPersona = () => (
        <motion.div
            key="persona"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="w-full max-w-2xl mx-auto space-y-6"
        >
            <div className="text-center space-y-2">
                <h2 className="text-3xl md:text-4xl font-black text-white">Choose Your Interviewer</h2>
                <p className="text-white/50 text-sm md:text-base">Each persona has a unique style and focus area.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto pr-1 custom-scrollbar">
                {INTERVIEWERS.map(p => (
                    <button
                        key={p.id}
                        onClick={() => setConfig({ ...config, persona: p.id })}
                        className={cn(
                            "relative p-4 rounded-2xl border text-left transition-all hover:scale-[1.02] active:scale-[0.98]",
                            config.persona === p.id
                                ? `bg-gradient-to-r ${p.color} border-transparent shadow-lg text-white`
                                : "bg-white/5 border-white/10 hover:bg-white/10 text-white/60"
                        )}
                    >
                        <div className="flex items-start gap-3">
                            <div className="text-2xl bg-white/10 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm shrink-0">
                                {p.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className={cn("font-bold text-base", config.persona === p.id ? "text-white" : "text-white/90")}>{p.name}</h3>
                                <p className={cn("text-xs", config.persona === p.id ? "text-white/80" : "text-white/40")}>{p.role}</p>
                                <p className={cn("text-[10px] mt-1 line-clamp-2", config.persona === p.id ? "text-white/70" : "text-white/30")}>
                                    {p.description}
                                </p>
                            </div>
                            {config.persona === p.id && (
                                <div className="bg-white/20 p-1 rounded-full shrink-0"><CheckCircle2 className="w-4 h-4" /></div>
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </motion.div>
    );

    // ==================== INTERVIEW TYPE (Custom Path) ====================
    const renderInterviewType = () => (
        <motion.div
            key="interviewtype"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="w-full max-w-2xl mx-auto space-y-6"
        >
            <div className="text-center space-y-2">
                <h2 className="text-3xl md:text-4xl font-black text-white">Interview Type</h2>
                <p className="text-white/50 text-sm md:text-base">What kind of interview do you want to practice?</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto pr-1 custom-scrollbar">
                {INTERVIEW_TYPES.map(type => (
                    <button
                        key={type.id}
                        onClick={() => setConfig({ ...config, interviewType: type.id })}
                        className={cn(
                            "relative p-4 rounded-2xl border text-left transition-all hover:scale-[1.02] active:scale-[0.98]",
                            config.interviewType === type.id
                                ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-transparent shadow-lg text-white"
                                : "bg-white/5 border-white/10 hover:bg-white/10 text-white/60"
                        )}
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">{type.icon}</span>
                            <div>
                                <h3 className={cn("font-bold text-base", config.interviewType === type.id ? "text-white" : "text-white/90")}>
                                    {type.label}
                                </h3>
                                <p className={cn("text-xs", config.interviewType === type.id ? "text-white/80" : "text-white/40")}>
                                    {type.description}
                                </p>
                            </div>
                            {config.interviewType === type.id && (
                                <div className="ml-auto bg-white/20 p-1 rounded-full"><CheckCircle2 className="w-4 h-4" /></div>
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </motion.div>
    );

    // ==================== MISSION (Custom Path) ====================
    const renderMission = () => (
        <motion.div
            key="mission"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="w-full max-w-2xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-5 md:p-8 shadow-2xl space-y-5"
        >
            <div className="text-center space-y-2">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-1"
                >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">⚙️ Configure</span>
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">Mission Brief</h2>
                <p className="text-white/50 text-sm">Fine-tune every parameter of your interview.</p>
            </div>

            <div className="space-y-4">
                {/* Role */}
                <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-white/40 font-bold ml-1">Target Role</label>
                    <select
                        value={config.role}
                        onChange={(e) => setConfig({ ...config, role: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 appearance-none"
                    >
                        {ROLES.map(r => <option key={r} value={r} className="bg-slate-900">{r}</option>)}
                    </select>
                </div>

                {/* Level & Questions Grid */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-wider text-white/40 font-bold ml-1">Level</label>
                        <select
                            value={config.level}
                            onChange={(e) => setConfig({ ...config, level: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 appearance-none"
                        >
                            {LEVELS.map(l => <option key={l} value={l} className="bg-slate-900">{l}</option>)}
                        </select>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-wider text-white/40 font-bold ml-1">Duration</label>
                        <select
                            value={config.questions}
                            onChange={(e) => setConfig({ ...config, questions: parseInt(e.target.value) })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 appearance-none"
                        >
                            {DURATIONS.map(d => <option key={d.questions} value={d.questions} className="bg-slate-900">{d.label}</option>)}
                        </select>
                    </div>
                </div>

                {/* Focus Area */}
                <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-white/40 font-bold ml-1">Focus Area</label>
                    <select
                        value={config.topic}
                        onChange={(e) => setConfig({ ...config, topic: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 appearance-none"
                    >
                        {FOCUS_AREAS.map(t => <option key={t} value={t} className="bg-slate-900">{t}</option>)}
                    </select>
                </div>

                {/* Pace & Difficulty Grid */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-wider text-white/40 font-bold ml-1">Pace</label>
                        <select
                            value={config.pace}
                            onChange={(e) => setConfig({ ...config, pace: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 appearance-none"
                        >
                            {INTERVIEW_PACES.map(p => <option key={p.id} value={p.id} className="bg-slate-900">{p.label}</option>)}
                        </select>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-wider text-white/40 font-bold ml-1">Difficulty</label>
                        <select
                            value={config.difficulty}
                            onChange={(e) => setConfig({ ...config, difficulty: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 appearance-none"
                        >
                            {DIFFICULTY_MODES.map(d => <option key={d.id} value={d.id} className="bg-slate-900">{d.label}</option>)}
                        </select>
                    </div>
                </div>

                {/* Selected Interviewer Preview */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-lg">
                        {INTERVIEWERS.find(p => p.id === config.persona)?.icon || '👤'}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-white">{INTERVIEWERS.find(p => p.id === config.persona)?.name || 'Interviewer'}</p>
                        <p className="text-[10px] text-white/40 truncate">{INTERVIEWERS.find(p => p.id === config.persona)?.role || ''}</p>
                    </div>
                    <span className="text-[9px] text-cyan-400 font-mono bg-cyan-400/10 px-2 py-0.5 rounded-full border border-cyan-400/20">AI SELECTED</span>
                </div>

                {/* Response Style Chips */}
                <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-white/40 font-bold ml-1">Response Style</label>
                    <div className="flex flex-wrap gap-2">
                        {[
                            { id: 'standard', label: '⚖️ Balanced', desc: 'Mix of theory & practice' },
                            { id: 'deep', label: '🔬 Deep Dive', desc: 'Detailed technical probing' },
                            { id: 'rapid', label: '⚡ Rapid Fire', desc: 'Quick, punchy questions' },
                            { id: 'scenario', label: '🎭 Scenario-Based', desc: 'Real-world situations' },
                        ].map(s => (
                            <button
                                key={s.id}
                                onClick={() => setConfig({ ...config, pace: s.id === 'rapid' ? 'intense' : s.id === 'deep' ? 'relaxed' : config.pace })}
                                className={cn(
                                    "px-3 py-1.5 rounded-xl text-[11px] font-medium border transition-all",
                                    "bg-white/5 border-white/10 text-white/60 hover:border-white/20 hover:text-white/80"
                                )}
                            >
                                {s.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* AI Features Banner */}
                <div className="p-3 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-purple-500/10 border border-purple-500/20 rounded-xl space-y-2">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                        <span className="text-[11px] font-bold text-purple-300">AI-Powered Features</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px] text-white/40">
                        <span>🎤 Real-time Speech Recognition</span>
                        <span>🗣️ Natural Voice Synthesis</span>
                        <span>📊 Live Confidence Tracking</span>
                        <span>🧠 Adaptive Follow-ups</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    // ==================== LAUNCH (Both Paths) ====================
    const renderLaunch = () => {
        const selectedPersona = INTERVIEWERS.find(p => p.id === config.persona);
        const selectedType = INTERVIEW_TYPES.find(t => t.id === config.interviewType);
        const selectedTarget = COMPANY_TARGETS.find(t => t.id === selectedCompanyTarget);
        const selectedCompany = SPECIFIC_COMPANIES.find(c => c.id === selectedSpecificCompany);
        const selectedRoundInfo = INTERVIEW_ROUNDS.find(r => r.id === selectedRound);

        return (
            <motion.div
                key="launch"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-lg mx-auto space-y-6"
            >
                {/* Hero card */}
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/8 to-white/3 border border-white/15 rounded-3xl p-8 md:p-10 shadow-2xl text-center overflow-hidden">
                    {/* Animated glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10 rounded-3xl" />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-cyan-500/20 rounded-full blur-3xl"
                    />

                    <div className="relative z-10 space-y-5">
                        {/* Interviewer avatar */}
                        <div className="flex flex-col items-center gap-3">
                            <div className={cn("w-20 h-20 rounded-3xl bg-gradient-to-br flex items-center justify-center text-4xl shadow-2xl", selectedPersona?.color || 'from-cyan-500 to-blue-600')}>
                                {selectedPersona?.icon}
                            </div>
                            <div>
                                <p className="text-white/40 text-xs uppercase tracking-wider font-bold">Your Interviewer</p>
                                <h3 className="text-xl font-black text-white">{selectedPersona?.name} <span className="text-white/40 font-normal text-sm">— {selectedPersona?.role}</span></h3>
                            </div>
                        </div>

                        <div className="border-t border-white/8" />

                        <div className="space-y-1">
                            <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Ready to Begin</h2>
                            <p className="text-white/40 text-sm">
                                {mode === 'quick' && selectedCompany
                                    ? `${config.questions} questions optimized for ${config.role} at ${selectedCompany.name}`
                                    : mode === 'quick' && selectedTarget
                                        ? `${config.questions} questions for ${config.role} at ${selectedTarget.label}`
                                        : `${config.questions} custom questions — ${config.interviewType} format`}
                            </p>
                        </div>

                        {/* Config Summary — terminal style */}
                        <div className="flex flex-col gap-1.5 text-sm text-white/40 font-mono bg-black/40 p-4 rounded-2xl border border-white/8 text-left">
                            {[
                                { label: 'ROLE', value: config.role, color: 'text-cyan-400' },
                                { label: 'LEVEL', value: config.level, color: 'text-yellow-400' },
                                { label: 'TYPE', value: selectedType?.label, color: 'text-green-400' },
                                { label: 'PACE', value: config.pace, color: 'text-pink-400' },
                                { label: 'DIFFICULTY', value: config.difficulty, color: 'text-red-400' },
                                { label: 'QUESTIONS', value: config.questions, color: 'text-white/80' },
                                ...(selectedCompany ? [{ label: 'COMPANY', value: `${selectedCompany.logo} ${selectedCompany.name}`, color: 'text-blue-400' }] : []),
                                ...(selectedRoundInfo ? [{ label: 'ROUND', value: `${selectedRoundInfo.icon} ${selectedRoundInfo.label}`, color: 'text-indigo-400' }] : []),
                            ].map(row => (
                                <div key={row.label} className="flex justify-between gap-2">
                                    <span className="opacity-40">&gt; {row.label}</span>
                                    <span className={cn("text-right truncate", row.color)}>{row.value}</span>
                                </div>
                            ))}
                        </div>

                        {mode === 'quick' && (
                            <p className="text-[11px] text-white/30 flex items-center justify-center gap-1.5">
                                <Sparkles className="w-3 h-3 text-purple-400" /> AI selected <span className="text-purple-400 font-semibold">{selectedPersona?.name}</span> as the best match for this role
                            </p>
                        )}

                        <motion.button
                            onClick={startInterview}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="relative w-full overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black py-4 rounded-2xl text-base shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] transition-shadow flex items-center justify-center gap-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
                            <Rocket className="w-5 h-5" />
                            INITIATE SESSION
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        );
    };

    // ==================== LAYOUT & NAVIGATION ====================
    const stepLabelsMap: Record<WizardStep, string> = {
        'HARDWARE': 'System Check',
        'MODE_SELECT': 'Choose Path',
        'ROLE_SELECT': 'Role',
        'COMPANY_TARGET': 'Target',
        'SPECIFIC_COMPANY': 'Company',
        'ROUND_SELECT': 'Round',
        'PERSONA': 'Interviewer',
        'INTERVIEW_TYPE': 'Type',
        'MISSION': 'Configure',
        'LAUNCH': 'Launch',
    };

    const canProceed = () => {
        if (step === 'HARDWARE') return checks.camera && checks.mic;
        if (step === 'MODE_SELECT') return false;
        if (step === 'ROLE_SELECT') return !!config.role;
        if (step === 'COMPANY_TARGET') return !!selectedCompanyTarget;
        if (step === 'SPECIFIC_COMPANY') return true; // Optional step
        if (step === 'ROUND_SELECT') return true; // Optional step
        return true;
    };

    return (
        <div className="min-h-screen bg-black text-white relative font-sans overflow-hidden">
            {/* Aurora Background */}
            <div className="absolute inset-0 z-0">
                <AuroraBackground>
                    <div className="absolute inset-0 bg-black/60" />
                </AuroraBackground>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col min-h-screen">
                {/* Progress Bar (Top) — Premium Stepper */}
                {step !== 'LAUNCH' && step !== 'MODE_SELECT' && (
                    <div className="pt-6 pb-4 px-4 max-w-2xl mx-auto w-full">
                        {/* Animated Progress Line */}
                        <div className="relative flex items-center justify-between mb-1">
                            {/* Background track */}
                            <div className="absolute top-[14px] left-[20px] right-[20px] h-[3px] rounded-full bg-white/5" />
                            {/* Animated gradient progress */}
                            <motion.div
                                className="absolute top-[14px] left-[20px] h-[3px] rounded-full"
                                style={{
                                    background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)',
                                    boxShadow: '0 0 12px rgba(34,211,238,0.3)',
                                }}
                                animate={{
                                    width: `${Math.max(0, (currentIndex / Math.max(1, STEPS.filter(s => s !== 'LAUNCH').length - 1)) * 100)}%`,
                                }}
                                transition={{ duration: 0.6, ease: 'easeInOut' }}
                            />
                            {STEPS.filter(s => s !== 'LAUNCH').map((s, i) => {
                                const isActive = s === step;
                                const isPast = currentIndex > i;
                                return (
                                    <button
                                        key={s}
                                        onClick={() => isPast ? setStep(s) : undefined}
                                        className={cn("relative z-10 flex flex-col items-center gap-1.5 group transition-all", isPast && "cursor-pointer")}
                                    >
                                        {/* Glow ring for active */}
                                        {isActive && (
                                            <motion.div
                                                className="absolute -inset-2 rounded-full"
                                                style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.25) 0%, transparent 70%)' }}
                                                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                            />
                                        )}
                                        <motion.div
                                            layout
                                            className={cn(
                                                "relative w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-500 border-2",
                                                isActive
                                                    ? "bg-gradient-to-br from-cyan-400 to-blue-500 border-cyan-300/50 text-white shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                                                    : isPast
                                                        ? "bg-gradient-to-br from-cyan-600/60 to-blue-700/60 border-cyan-500/30 text-cyan-200"
                                                        : "bg-white/5 border-white/10 text-white/20"
                                            )}
                                        >
                                            {isPast ? (
                                                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300 }}>✓</motion.span>
                                            ) : (
                                                i + 1
                                            )}
                                        </motion.div>
                                        <span className={cn(
                                            "text-[8px] font-bold tracking-widest uppercase transition-colors whitespace-nowrap",
                                            isActive ? "text-cyan-300" : isPast ? "text-white/35" : "text-white/10"
                                        )}>
                                            {stepLabelsMap[s]}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex-1 flex items-center justify-center p-4">
                    <div className="w-full max-w-6xl">
                        <AnimatePresence mode="wait">
                            {step === 'HARDWARE' && renderHardware()}
                            {step === 'MODE_SELECT' && renderModeSelect()}
                            {step === 'ROLE_SELECT' && renderRoleSelect()}
                            {step === 'COMPANY_TARGET' && renderCompanyTarget()}
                            {step === 'SPECIFIC_COMPANY' && renderSpecificCompany()}
                            {step === 'ROUND_SELECT' && renderRoundSelect()}
                            {step === 'PERSONA' && renderPersona()}
                            {step === 'INTERVIEW_TYPE' && renderInterviewType()}
                            {step === 'MISSION' && renderMission()}
                            {step === 'LAUNCH' && renderLaunch()}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bottom Navigation */}
                {step !== 'LAUNCH' && step !== 'MODE_SELECT' && (
                    <div className="flex justify-between items-center px-6 pb-6 pt-2 max-w-5xl mx-auto w-full">
                        <button
                            onClick={handleBack}
                            disabled={currentIndex === 0}
                            className={cn(
                                "flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all",
                                currentIndex === 0
                                    ? "opacity-0 pointer-events-none"
                                    : "text-white/60 hover:text-white hover:bg-white/10 border border-white/10"
                            )}
                        >
                            <ChevronLeft className="w-4 h-4" /> Back
                        </button>

                        <motion.button
                            onClick={handleNext}
                            disabled={!canProceed()}
                            whileHover={canProceed() ? { scale: 1.05 } : {}}
                            whileTap={canProceed() ? { scale: 0.95 } : {}}
                            className={cn(
                                "relative px-8 py-3 font-bold rounded-full text-sm transition-all overflow-hidden",
                                !canProceed()
                                    ? "bg-white/10 text-white/30 cursor-not-allowed"
                                    : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_35px_rgba(34,211,238,0.4)]"
                            )}
                        >
                            {canProceed() && (
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
                            )}
                            <span className="relative flex items-center gap-2">
                                CONTINUE <ChevronRight className="w-4 h-4" />
                            </span>
                        </motion.button>
                    </div>
                )}
            </div>
        </div>
    );
}

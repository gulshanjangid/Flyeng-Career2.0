
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FileText, Sparkles, Plus, ChevronRight, ArrowLeft, Code, Target, Brain, Server, Layers, Coffee, Database, Bot, Rocket } from 'lucide-react';
import { toast } from "sonner";
import { ResumeData } from "@/lib/types";
import { initialResumeState } from "@/lib/resume-builder-constants";
import { useState } from "react";

interface StartOptionsModalProps {
    showStartOptions: boolean;
    setShowStartOptions: (show: boolean) => void;
    setShowLanding: (show: boolean) => void;
    setResume: (data: ResumeData) => void;
    setIsUnsavedImport: (isUnsaved: boolean) => void;
    setMode: (mode: 'builder' | 'analyzer') => void;
}

export const StartOptionsModal = ({
    showStartOptions,
    setShowStartOptions,
    setShowLanding,
    setResume,
    setIsUnsavedImport,
    setMode
}: StartOptionsModalProps) => {
    const [modalStep, setModalStep] = useState<'main' | 'samples'>('main');

    return (
        <AnimatePresence>
            {showStartOptions && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-32 p-4">
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/70 backdrop-blur-md"
                        onClick={() => { setShowStartOptions(false); setModalStep('main'); }}
                    />
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                        className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-2xl overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />

                        {/* STEP 1: MAIN CHOICE */}
                        {modalStep === 'main' && (
                            <>
                                <h2 className="text-2xl font-bold mb-2">How would you like to start?</h2>
                                <p className="text-slate-400 mb-8">Choose a starting point for your resume.</p>

                                <div className="grid gap-4">
                                    <button
                                        onClick={() => {
                                            setShowStartOptions(false);
                                            setShowLanding(false);
                                            toast.success("Loaded your last session");
                                        }}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all group text-left"
                                    >
                                        <div className="p-3 rounded-lg bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">Continue Last Session</h3>
                                            <p className="text-sm text-slate-400">Pick up where you left off</p>
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => setModalStep('samples')}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all group text-left"
                                    >
                                        <div className="p-3 rounded-lg bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                                            <Sparkles className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">Use Sample Resume</h3>
                                            <p className="text-sm text-slate-400">Select a role template (Engineer, PM, etc.)</p>
                                        </div>
                                        <ChevronRight className="ml-auto w-5 h-5 text-slate-500 group-hover:text-white" />
                                    </button>

                                    <button
                                        onClick={() => {
                                            setResume(initialResumeState);
                                            setIsUnsavedImport(true);
                                            setShowStartOptions(false);
                                            setShowLanding(false);
                                            toast.success("Started fresh resume");
                                        }}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-white/10 transition-all group text-left"
                                    >
                                        <div className="p-3 rounded-lg bg-green-500/20 text-green-400 group-hover:scale-110 transition-transform">
                                            <Plus className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">Create Blank Resume</h3>
                                            <p className="text-sm text-slate-400">Start from scratch</p>
                                        </div>
                                    </button>
                                </div>
                            </>
                        )}

                        {/* STEP 2: ROLE SELECTION */}
                        {modalStep === 'samples' && (
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex items-center justify-between mb-6">
                                    <button onClick={() => setModalStep('main')} className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                                        <div className="p-2 rounded-full bg-white/5 border border-white/5 group-hover:bg-white/10 transition-all">
                                            <ArrowLeft className="w-4 h-4" />
                                        </div>
                                        <span>Back</span>
                                    </button>
                                    <div className="text-right">
                                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400">Select a Role</h2>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Premium Samples</p>
                                    </div>
                                </div>

                                <div className="grid gap-3 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar scroll-smooth pb-4">
                                    {[
                                        { id: 'software-engineer', name: 'Software Engineer', icon: Code, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
                                        { id: 'product-manager', name: 'Product Manager', icon: Target, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
                                        { id: 'data-scientist', name: 'Data Scientist', icon: Brain, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
                                        { id: 'devops', name: 'DevOps Engineer', icon: Server, color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
                                        { id: 'full-stack', name: 'Full Stack Developer', icon: Layers, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
                                        { id: 'java-developer', name: 'Java Developer', icon: Coffee, color: 'text-orange-600', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
                                        { id: 'data-analyst', name: 'Data Analyst', icon: Database, color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
                                        { id: 'ai-ml', name: 'AI/ML Engineer', icon: Bot, color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
                                        { id: 'founder', name: 'Startup Founder', icon: Rocket, color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' }
                                    ].map((role) => (
                                        <button
                                            key={role.id}
                                            onClick={async () => {
                                                const { SAMPLE_RESUMES } = await import('@/lib/sample-resumes');
                                                if (SAMPLE_RESUMES[role.id]) {
                                                    setResume(SAMPLE_RESUMES[role.id]);
                                                    setIsUnsavedImport(true);
                                                    setMode('builder');
                                                    setShowStartOptions(false);
                                                    setShowLanding(false);
                                                    toast.success(`Loaded ${role.name} Profile`);
                                                }
                                            }}
                                            className={`group relative flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#111] hover:bg-white/5 hover:border-white/10 transition-all duration-300 text-left overflow-hidden`}
                                        >
                                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 pointer-events-none`} />

                                            <div className={`p-3 rounded-xl ${role.bg} ${role.color} border ${role.border} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                                <role.icon className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1 z-10">
                                                <h3 className="font-semibold text-gray-200 group-hover:text-white transition-colors">{role.name}</h3>
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all text-cyan-400">
                                                <ChevronRight className="w-4 h-4" />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

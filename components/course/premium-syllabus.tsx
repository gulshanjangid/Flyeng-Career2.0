'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, PlayCircle, Lock, BookOpen, Clock, CheckCircle2 } from 'lucide-react';

interface SyllabusProps {
    course: any; // Type this properly if possible
}

export function PremiumSyllabus({ course }: SyllabusProps) {
    const [openModule, setOpenModule] = useState<string | null>(course.modules[0]?.id || null);

    return (
        <div className="w-full max-w-5xl mx-auto py-24 px-6">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Curriculum</span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto text-lg">
                    A structured roadmap designed to take you from beginner to industry-ready.
                    {course.total_modules} Modules • {course.total_lessons} Lessons • {course.duration_hours} Hours
                </p>
            </div>

            <div className="space-y-6">
                {course.modules.map((module: any, index: number) => (
                    <ModuleItem
                        key={module.id || index}
                        module={module}
                        index={index}
                        isOpen={openModule === (module.id || `mod-${index}`)}
                        onToggle={() => setOpenModule(openModule === (module.id || `mod-${index}`) ? null : (module.id || `mod-${index}`))}
                    />
                ))}
            </div>
        </div>
    );
}

const ModuleItem = React.memo(function ModuleItem({ module, index, isOpen, onToggle }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }} // reduced distance
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }} // better viewport trigger
            transition={{ delay: index * 0.03, duration: 0.3 }} // faster stagger
            className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${isOpen ? 'bg-white/5 border-cyan-500/50' : 'bg-transparent border-white/5 hover:border-white/10'}`}
        >
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left active:scale-[0.99] transition-transform"
            >
                <div className="flex items-center gap-5">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-base font-bold transition-colors ${isOpen ? 'bg-cyan-500 text-black' : 'bg-white/5 text-white/50'}`}>
                        {index + 1}
                    </div>
                    <div>
                        <h3 className={`text-lg font-bold mb-0.5 transition-colors ${isOpen ? 'text-white' : 'text-white/80'}`}>
                            {module.title}
                        </h3>
                        <p className="text-xs text-white/40 flex items-center gap-3 font-medium">
                            <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {module.lessons.length} Lessons</span>
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {module.duration || '2h 15m'}</span>
                        </p>
                    </div>
                </div>
                <div className={`p-1.5 rounded-full border transition-all duration-200 ${isOpen ? 'rotate-180 bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'bg-transparent border-white/10 text-white/40'}`}>
                    <ChevronDown className="w-4 h-4" />
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "circOut" }} // Much faster (0.2s) and snappy easing
                        className="overflow-hidden bg-black/20 will-change-[height]"
                    >
                        <div className="p-5 md:p-6 pt-0 space-y-2">
                            {module.lessons.map((lesson: any, i: number) => (
                                <div key={i} className="group flex items-center justify-between p-3.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-white/10 cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="min-w-[2rem] w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                                            <PlayCircle className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm text-white/70 group-hover:text-white transition-colors font-medium line-clamp-1">
                                            {lesson.title}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 shrink-0">
                                        <span className="text-[10px] text-white/30 group-hover:text-white/50 font-mono">{lesson.duration || '10m'}</span>
                                        {i === 0 && index === 0 ? (
                                            <LockOpenIcon className="w-3.5 h-3.5 text-green-400" />
                                        ) : (
                                            <Lock className="w-3.5 h-3.5 text-white/10" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
});

// Helper for unlocked icon
function LockOpenIcon({ className }: { className?: string }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 9.9-1" />
        </svg>
    )
}
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, PlayCircle, Lock, ChevronDown, ChevronRight, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

interface CourseContentSidebarProps {
    course: any;
    courseId: string; // Added courseId prop
    currentLessonId: string;
    isOpen: boolean;
    onClose: () => void;
}

export function CourseContentSidebar({ course, courseId, currentLessonId, isOpen, onClose }: CourseContentSidebarProps) {
    const pathname = usePathname();
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);
    
    // Load progress
    useEffect(() => {
        const storageKey = `flyeng_progress_${courseId}`;
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            setCompletedLessons(JSON.parse(saved));
        }
    }, [courseId]);

    // Close on route change (mobile mostly)
    useEffect(() => {
        const handleResize = () => {
             if (window.innerWidth >= 1024) {
                 // optionally auto-open or keep open on desktop if we wanted a permanent sidebar
             }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when open on mobile
    useEffect(() => {
        if (isOpen && window.innerWidth < 1024) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:bg-black/40 touch-none"
                    />

                    {/* Sidebar Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full max-h-[100dvh] w-full sm:w-96 bg-[#0a0a0a] border-l border-white/10 z-[100] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-5 border-b border-white/5 bg-[#0a0a0a] shrink-0">
                            <div>
                                <h3 className="text-lg font-bold text-white tracking-tight">Course Content</h3>
                                <p className="text-xs text-gray-500 font-mono uppercase tracking-widest truncate max-w-[200px]">{course.title}</p>
                            </div>
                            <button 
                                onClick={onClose}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content List - Added better scroll handling */}
                        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 p-4 space-y-6 overscroll-contain">
                            {course.modules.map((module: any, mIdx: number) => (
                                <div key={module.id || mIdx} className="space-y-3">
                                    <div className="flex items-center gap-2 px-2">
                                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-gray-500 font-mono border border-white/5 shrink-0">
                                            {mIdx + 1}
                                        </div>
                                        <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider">{module.title}</h4>
                                    </div>

                                    <div className="space-y-1 pl-3 border-l border-white/5 ml-3">
                                        {module.lessons.map((lesson: any, lIdx: number) => {
                                            const isActive = lesson.id === currentLessonId;
                                            const isCompleted = completedLessons.includes(lesson.id);

                                            return (
                                                <Link
                                                    key={lesson.id}
                                                    href={`/courses/${courseId}/${lesson.id}`}
                                                    onClick={() => {
                                                        if (window.innerWidth < 1024) onClose();
                                                    }}
                                                    className={cn(
                                                        "group flex items-center gap-3 p-3 rounded-xl transition-all duration-200 border border-transparent relative overflow-hidden",
                                                        isActive 
                                                            ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400" 
                                                            : "hover:bg-white/5 hover:border-white/5 text-gray-400 hover:text-gray-200"
                                                    )}
                                                >
                                                    {/* Active Indicator */}
                                                    {isActive && (
                                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500" />
                                                    )}

                                                    <div className={cn(
                                                        "w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors",
                                                        isCompleted ? "text-emerald-500" : isActive ? "text-cyan-500" : "text-gray-600 group-hover:text-gray-500"
                                                    )}>
                                                        {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : <PlayCircle className="w-4 h-4" />}
                                                    </div>

                                                    <div className="flex-1 min-w-0">
                                                        <p className={cn(
                                                            "text-sm font-medium leading-tight truncate",
                                                            isActive && "font-bold"
                                                        )}>
                                                            {lesson.title}
                                                        </p>
                                                        <p className="text-[10px] text-gray-600 mt-1 font-mono uppercase tracking-wider group-hover:text-gray-500 transition-colors">
                                                            {lesson.duration || '10 min'}
                                                        </p>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer Progress */}
                        <div className="p-5 border-t border-white/5 bg-[#0a0a0a] shrink-0">
                            <div className="flex items-center justify-between text-xs mb-2">
                                <span className="text-gray-400 font-medium">Course Progress</span>
                                <span className="text-cyan-400 font-bold font-mono">
                                    {Math.round((completedLessons.length / course.modules.reduce((acc:any, m:any) => acc + m.lessons.length, 0)) * 100)}%
                                </span>
                            </div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                    style={{ width: `${(completedLessons.length / course.modules.reduce((acc:any, m:any) => acc + m.lessons.length, 0)) * 100}%` }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

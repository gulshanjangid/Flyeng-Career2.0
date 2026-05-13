"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ChevronLeft, PlayCircle, FileText, Code2, ChevronDown, CheckCircle2, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function CourseSidebar({ course, courseId }: { course: any; courseId: string }) {
    const params = useParams(); // Get active lessonId
    const currentLessonId = params.lessonId as string;

    const [completedLessons, setCompletedLessons] = useState<string[]>([]);
    const [activeModuleIndex, setActiveModuleIndex] = useState<number | null>(0);
    const [mounted, setMounted] = useState(false);

    // 1. Initial Load & Event Listeners
    useEffect(() => {
        setMounted(true);
        const loadProgress = () => {
            const saved = localStorage.getItem(`flyeng_progress_${courseId}`);
            if (saved) setCompletedLessons(JSON.parse(saved));
        };

        loadProgress();

        // Listen for custom event from LessonPage
        window.addEventListener('course-progress-update', loadProgress);
        window.addEventListener('storage', loadProgress);

        return () => {
            window.removeEventListener('course-progress-update', loadProgress);
            window.removeEventListener('storage', loadProgress);
        };
    }, [courseId]);

    // 2. Auto-Expand Logic
    useEffect(() => {
        if (!currentLessonId) return;
        course.modules.forEach((mod: any, index: number) => {
            const hasLesson = mod.lessons.some((l: any) => l.id === currentLessonId);
            if (hasLesson) setActiveModuleIndex(index);
        });
    }, [currentLessonId, course.modules]);

    const totalLessons = course.modules.reduce((acc: number, m: any) => acc + m.lessons.length, 0);
    const progressPercent = Math.round((completedLessons.length / totalLessons) * 100) || 0;

    if (!mounted) return null;

    return (
        <div className="hidden lg:flex w-80 h-full bg-[#050505] border-l border-white/10 flex-col font-sans">

            {/* Fixed Header */}
            <div className="p-6 border-b border-white/10 bg-[#050505] shrink-0 z-10">
                <div className="flex items-center justify-between mb-6">
                    <Link
                        href="/courses"
                        className="flex items-center text-[10px] font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest gap-1"
                    >
                        <ChevronLeft className="w-3 h-3" />
                        Hub
                    </Link>

                    {/* VISIBLE SEARCH BUTTON */}
                    <button
                        onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-[10px] uppercase font-bold text-gray-400 hover:text-white group"
                        title="Search Lessons (Cmd+K)"
                    >
                        <Search className="w-3 h-3" />
                        Search
                    </button>
                </div>

                <h2 className="font-bold text-white text-lg leading-tight mb-4 line-clamp-2">
                    {course.title}
                </h2>

                {/* Progress Circle & Percent */}
                <div className="bg-white/5 rounded-lg p-3 flex items-center gap-3 mb-4 border border-white/5">
                    <div className="relative w-8 h-8 flex-shrink-0">
                        <svg className="w-full h-full -rotate-90">
                            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-white/10" />
                            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-cyan-500 transition-all duration-1000 ease-out" strokeDasharray="87.96" strokeDashoffset={87.96 * (1 - progressPercent / 100)} strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[9px] uppercase font-bold text-gray-500 tracking-widest">Global Progress</span>
                        <span className="text-xs font-bold text-white transition-all key={progressPercent}">{progressPercent}% Complete</span>
                    </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
                        <div className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">Completed</div>
                        <div className="text-sm font-bold text-white font-mono">{completedLessons.length}/{totalLessons}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
                        <div className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">Streak</div>
                        <div className="text-sm font-bold text-orange-400 font-mono">🔥 3d</div>
                    </div>
                </div>
            </div>

            {/* Scrollable Modules */}
            <div
                className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent"
                data-lenis-prevent
            >
                <div className="flex flex-col pb-20">
                    {course.modules.map((module: any, i: number) => {
                        const isOpen = activeModuleIndex === i;

                        return (
                            <div key={i} className="border-b border-white/5">
                                <button
                                    onClick={() => setActiveModuleIndex(isOpen ? null : i)}
                                    className={`w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors ${isOpen ? 'bg-white/[0.02]' : ''}`}
                                >
                                    <span className={`text-[11px] font-bold uppercase tracking-widest ${isOpen ? 'text-white' : 'text-gray-500'}`}>
                                        {module.title}
                                    </span>
                                    <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden bg-[#030014]/50"
                                        >
                                            <div className="p-2 space-y-1 pb-4">
                                                {module.lessons.map((lesson: any) => {
                                                    const isCompleted = completedLessons.includes(lesson.id);
                                                    const isActive = currentLessonId === lesson.id;

                                                    return (
                                                        <Link
                                                            key={lesson.id}
                                                            href={`/courses/${courseId}/${lesson.id}`}
                                                            className={`flex items-start gap-3 p-2.5 rounded-lg transition-all group relative ${isActive ? 'bg-blue-500/10' : 'hover:bg-white/5'}`}
                                                        >
                                                            {isActive && <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-blue-500 rounded-r-full" />}

                                                            <div className="mt-0.5 min-w-[14px] z-10 text-gray-600">
                                                                {isCompleted ? (
                                                                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                                                                ) : (
                                                                    <>
                                                                        {lesson.type === 'video' && <PlayCircle className={`w-3.5 h-3.5 ${isActive ? 'text-blue-400' : 'group-hover:text-blue-400'}`} />}
                                                                        {lesson.type === 'article' && <FileText className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'group-hover:text-emerald-400'}`} />}
                                                                        {lesson.type === 'code' && <Code2 className={`w-3.5 h-3.5 ${isActive ? 'text-pink-400' : 'group-hover:text-pink-400'}`} />}
                                                                    </>
                                                                )}
                                                            </div>
                                                            <div className="max-w-[85%]">
                                                                <div className={`text-sm font-medium transition-colors leading-tight mb-1 ${isActive ? 'text-blue-200' : isCompleted ? 'text-gray-500 line-through decoration-white/20' : 'text-gray-400 group-hover:text-white'}`}>
                                                                    {lesson.title}
                                                                </div>
                                                                <div className="text-[9px] text-gray-700 font-mono tracking-wide">
                                                                    {lesson.duration}
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
}

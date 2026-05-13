"use client"

import { courseData } from '@/lib/course-data';
import { notFound, useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, CheckCircle2, BookOpen, Clock, Code2, Copy, Check, Star, HelpCircle, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { motion, AnimatePresence } from 'framer-motion';

// Quiz Integration
import { QuizEngine } from '@/components/quiz/quiz-engine';
import { QuizResults } from '@/components/quiz/quiz-results';
import { QuizQuestion, QuizResult } from '@/types/quiz';
import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';
import { CourseContentSidebar } from '@/components/course/course-content-sidebar';

// === MOCK QUIZ DATA FOR MODULE (10 Qs) ===
const MOCK_MODULE_QUIZ: QuizQuestion[] = Array(10).fill(null).map((_, i) => ({
    id: `mq-${i}`,
    question: `Module Knowledge Check ${i + 1}: What is the correct concept?`,
    options: ["Concept A", "Concept B", "Concept C", "Concept D"],
    correctAnswer: 0,
    explanation: "This is a basic check of the module concepts.",
    difficulty: "basic"
}));

// === MOCK EXAM DATA (20 Qs) ===
const MOCK_FINAL_EXAM: QuizQuestion[] = Array(20).fill(null).map((_, i) => ({
    id: `fq-${i}`,
    question: `Final Exam Question ${i + 1}: Comprehensive analysis required.`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Detailed explanation for final exam question.",
    difficulty: "intermediate"
}));


// === COMPONENT: SHORTCUTS MODAL ===
const ShortcutsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-xl shadow-2xl max-w-sm w-full" onClick={e => e.stopPropagation()}>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-gray-400" /> Keyboard Shortcuts
                </h3>
                <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Next Lesson</span>
                        <kbd className="px-2 py-1 bg-white/10 rounded text-gray-300 font-mono text-xs">RuleRight</kbd>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Previous Lesson</span>
                        <kbd className="px-2 py-1 bg-white/10 rounded text-gray-300 font-mono text-xs">RuleLeft</kbd>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function LessonPage({
    params
}: {
    params: { courseId: string; lessonId: string }
}) {
    const router = useRouter();
    const { user } = useAuth();
    const course = courseData[params.courseId];

    if (!course) return notFound();

    // 1. Data Retrieval
    const allLessons: any[] = [];
    let currentModuleIndex = -1;
    let currentLessonIndexInModule = -1;

    course.modules.forEach((mod: any, mIdx: number) => {
        mod.lessons.forEach((lesson: any, lIdx: number) => {
            allLessons.push({ ...lesson, moduleTitle: mod.title, moduleId: mod.id || `mod-${mIdx}` });
            if (lesson.id === params.lessonId) {
                currentModuleIndex = mIdx;
                currentLessonIndexInModule = lIdx;
            }
        });
    });

    const currentIndex = allLessons.findIndex(l => l.id === params.lessonId);
    if (currentIndex === -1) return notFound();

    const currentLesson = allLessons[currentIndex];
    const prevLesson = allLessons[currentIndex - 1];
    const nextLesson = allLessons[currentIndex + 1];

    // LOGIC: Is this the last lesson of the module?
    const currentModule = course.modules[currentModuleIndex];
    const isLastLessonInModule = currentLessonIndexInModule === currentModule.lessons.length - 1;

    // LOGIC: Is this the last lesson of the COURSE?
    const isLastLessonInCourse = currentIndex === allLessons.length - 1;

    // 2. State & effects
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [showShortcuts, setShowShortcuts] = useState(false);
    const articleRef = useRef<HTMLElement>(null);

    // QUIZ STATES
    const [isQuizMode, setIsQuizMode] = useState(false);
    const [quizType, setQuizType] = useState<'module' | 'final'>('module');
    const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

    // SIDEBAR STATE
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // -- QUIZ HANDLERS --
    const handleStartQuiz = (type: 'module' | 'final') => {
        setQuizType(type);
        setIsQuizMode(true);
    };

    const handleQuizComplete = (result: QuizResult) => {
        setQuizResult(result);
    };

    const handleGenerateCertificate = async () => {
        if (!user || !quizResult) return;
        try {
            const response = await fetch('/api/certificates/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: user.id,
                    courseId: params.courseId,
                    courseName: course.title,
                    studentName: user.user_metadata?.full_name || user.user_metadata?.name || 'Learner',
                    score: quizResult.score,
                    totalQuestions: quizResult.totalQuestions
                })
            });

            const data = await response.json();
            if (data.success) {
                router.push(`/verify/${data.certificate.certificate_number}`);
            } else {
                console.error("Cert generation failed", data.error);
            }
        } catch (e) {
            console.error("API Error", e);
        }
    };


    // -- SCROLL PROGRESS --
    useEffect(() => {
        const handleScroll = () => {
            if (isQuizMode) return;
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = window.innerHeight;
            if (scrollHeight <= clientHeight) {
                setScrollProgress(100);
                return;
            }
            const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setScrollProgress(Number.isNaN(scrolled) ? 0 : scrolled);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isQuizMode]);

    // -- BOOKMARKS --
    useEffect(() => {
        const bookmarks = JSON.parse(localStorage.getItem('flyeng_bookmarks') || '[]');
        setIsBookmarked(bookmarks.includes(currentLesson.id));
    }, [currentLesson.id]);

    const toggleBookmark = () => {
        const bookmarks = JSON.parse(localStorage.getItem('flyeng_bookmarks') || '[]');
        let newBookmarks;
        if (bookmarks.includes(currentLesson.id)) {
            newBookmarks = bookmarks.filter((id: string) => id !== currentLesson.id);
            setIsBookmarked(false);
        } else {
            newBookmarks = [...bookmarks, currentLesson.id];
            setIsBookmarked(true);
        }
        localStorage.setItem('flyeng_bookmarks', JSON.stringify(newBookmarks));
    };


    // -- CODE HIGHLIGHT & COPY --
    useEffect(() => {
        if (!articleRef.current || isQuizMode) return;
        const codeBlocks = articleRef.current.querySelectorAll('code');
        codeBlocks.forEach((block) => Prism.highlightElement(block));

        // Window wrapping logic (same as before)
        const allCodeElements = articleRef.current.querySelectorAll('code');
        allCodeElements.forEach((codeEl) => {
            const parent = codeEl.parentElement;
            const isPreWrapped = parent?.tagName === 'PRE';
            const hasNewlines = codeEl.innerText.includes('\n');
            const isBlock = codeEl.classList.contains('block') || hasNewlines || isPreWrapped;
            if (!isBlock) {
                codeEl.classList.add('px-1.5', 'py-0.5', 'rounded', 'bg-white/10', 'text-cyan-300', 'font-mono', 'text-sm');
                return;
            }
            const targetWrapper = isPreWrapped ? parent : codeEl;
            if (targetWrapper.parentElement?.classList.contains('code-window')) return;
            const wrapper = document.createElement('div');
            wrapper.className = 'code-window relative group rounded-xl overflow-hidden my-8 border border-white/10 bg-[#0a0a0a] shadow-2xl';
            targetWrapper.parentNode?.insertBefore(wrapper, targetWrapper);
            wrapper.appendChild(targetWrapper);
            if (isPreWrapped && parent) {
                parent.className = (parent.className || '') + ' !m-0 !p-6 !bg-transparent !text-sm !font-mono !leading-relaxed scrollbar-thin scrollbar-thumb-white/10';
            } else {
                codeEl.className = (codeEl.className || '') + ' block !p-6 !bg-transparent !text-sm !font-mono !leading-relaxed scrollbar-thin scrollbar-thumb-white/10 whitespace-pre overflow-x-auto';
            }
            // Header
            const header = document.createElement('div');
            header.className = 'flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5 select-none';
            header.innerHTML = `<div class="flex gap-2"><div class="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div><div class="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div><div class="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div></div><div class="flex items-center gap-2"><span class="text-[10px] uppercase font-bold text-gray-600 tracking-widest font-mono group-hover:text-gray-400 transition-colors">Terminal</span></div>`;
            wrapper.insertBefore(header, targetWrapper);
            // Copy
            const btn = document.createElement('button');
            btn.className = 'absolute top-2.5 right-3 p-1.5 bg-transparent hover:bg-white/10 rounded-md text-gray-500 hover:text-white transition-all z-20';
            btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
            btn.addEventListener('click', () => {
                navigator.clipboard.writeText(codeEl.innerText);
                btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="text-emerald-400" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
                setTimeout(() => { btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`; }, 2000);
            });
            header.appendChild(btn);
        });

    }, [currentLesson.content, isQuizMode]);

    const handleNext = (e: React.MouseEvent) => {
        if (e && e.preventDefault) e.preventDefault();
        const storageKey = `flyeng_progress_${params.courseId}`;
        const saved = localStorage.getItem(storageKey);
        const completed = saved ? JSON.parse(saved) : [];
        if (!completed.includes(currentLesson.id)) {
            const newCompleted = [...completed, currentLesson.id];
            localStorage.setItem(storageKey, JSON.stringify(newCompleted));
        }

        if (nextLesson) {
            router.push(`/courses/${params.courseId}/${nextLesson.id}`);
        } else {
            // If last lesson, maybe encourage final exam?
            if (isLastLessonInCourse) {
                handleStartQuiz('final');
            }
        }
    };


    // === RENDER ===

    if (isQuizMode) {
        return (
            <div className="w-full min-h-screen py-12 px-4 flex items-center justify-center">
                {!quizResult ? (
                    <QuizEngine
                        questions={quizType === 'final' ? MOCK_FINAL_EXAM : MOCK_MODULE_QUIZ}
                        title={quizType === 'final' ? `Final Exam: ${course.title}` : `Module Quiz: ${currentModule.title}`}
                        onComplete={handleQuizComplete}
                    />
                ) : (
                    <QuizResults
                        result={quizResult}
                        onRetake={() => {
                            setQuizResult(null);
                            setIsQuizMode(false); // Go back to lesson if they fail or want to review
                        }}
                        onGenerateCertificate={quizType === 'final' ? handleGenerateCertificate : undefined}
                    />
                )}
            </div>
        )
    }

    return (
        <div className="w-full relative">
            <ShortcutsModal isOpen={showShortcuts} onClose={() => setShowShortcuts(false)} />
            
            {/* COURSE CONTENT SIDEBAR */}
            <CourseContentSidebar 
                course={course} 
                courseId={params.courseId} // Pass implicit courseId
                currentLessonId={params.lessonId} 
                isOpen={isSidebarOpen} 
                onClose={() => setIsSidebarOpen(false)} 
            />

            {/* HEADER TOGGLE BUTTON (MOBILE & DESKTOP) */}
            <button 
                onClick={() => setIsSidebarOpen(true)}
                className="fixed top-24 right-4 z-[40] md:right-8 p-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full shadow-lg hover:bg-white/20 transition-all group"
                title="Course Content"
            >
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md group-hover:blur-lg transition-all opacity-0 group-hover:opacity-100" />
                <BookOpen className="w-6 h-6 text-white relative z-10" />
            </button>

            {/* FIXED PROGRESS BAR */}
            {!isQuizMode && (
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 z-[50]"
                    style={{ width: `${scrollProgress}%` }}
                    initial={{ transformOrigin: "0%" }}
                />
            )}

            <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">

                {/* Header Info */}
                <div className="mb-10 border-b border-white/5 pb-6">
                    <div className="flex items-center justify-between mb-6">
                        <Link
                            href={`/courses/${params.courseId}`}
                            className="flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
                        >
                            <BookOpen className="w-4 h-4" />
                            <span>{currentLesson.moduleTitle}</span>
                        </Link>

                        {/* UTILS: Bookmark & Shortcuts - NO EXAM BUTTON HERE */}
                        <div className="flex items-center gap-4">
                            <button onClick={toggleBookmark} className={`transition-colors ${isBookmarked ? 'text-yellow-400' : 'text-gray-600 hover:text-yellow-200'}`} title="Bookmark">
                                <Star className={`w-5 h-5 ${isBookmarked ? 'fill-yellow-400' : ''}`} />
                            </button>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
                        {currentLesson.title}
                    </h1>
                    {/* Stats ... */}
                </div>

                {/* Content Body */}
                <article ref={articleRef} className="w-full min-h-[50vh] text-base md:text-lg leading-relaxed text-gray-300 course-content">
                    <div dangerouslySetInnerHTML={{ __html: currentLesson.content }} />
                </article>

                {/* Footer Navigation */}
                <div className="mt-16 pt-8 border-t border-white/5 space-y-8">

                    {/* QUIZ CALL TO ACTION */}
                    {isLastLessonInModule && !isLastLessonInCourse && (
                        <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/30 flex items-center justify-between relative overflow-hidden group">
                            <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-2 text-purple-300 font-bold">
                                    <CheckCircle2 className="w-5 h-5" /> Module Complete
                                </div>
                                <h3 className="text-2xl font-bold text-white">Ready for a challenge?</h3>
                                <p className="text-white/60 text-sm mt-1">Test your knowledge of {currentModule.title} with 10 questions.</p>
                            </div>
                            <Button onClick={() => handleStartQuiz('module')} className="relative z-10 bg-white text-purple-900 hover:bg-purple-100 font-bold h-12 px-6 rounded-xl">
                                Take Module Quiz
                            </Button>
                        </div>
                    )}

                    {isLastLessonInCourse && (
                        <div className="p-10 rounded-3xl bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 text-center relative overflow-hidden">
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 animate-pulse">
                                    <Star className="w-8 h-8 fill-cyan-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">Course Completed!</h3>
                                <p className="text-white/60 max-w-md mx-auto mb-8">
                                    You've mastered the curriculum. Pass the Final Exam (20 Questions) to earn your verified certificate.
                                </p>
                                <Button onClick={() => handleStartQuiz('final')} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold h-14 px-10 text-lg rounded-full shadow-xl shadow-cyan-500/20 hover:scale-105 transition-transform">
                                    Start Final Exam
                                </Button>
                            </div>
                        </div>
                    )}


                    <div className="flex items-stretch justify-between gap-4">
                        {prevLesson ? (
                            <Link href={`/courses/${params.courseId}/${prevLesson.id}`} className="group flex-1 flex flex-col items-start gap-1 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all">
                                <span className="text-xs font-mono text-gray-500 group-hover:text-cyan-400 uppercase tracking-widest flex items-center gap-2"><ChevronLeft className="w-3 h-3" /> Previous Lesson</span>
                                <span className="text-lg font-bold text-white group-hover:text-cyan-100">{prevLesson.title}</span>
                            </Link>
                        ) : <div className="flex-1" />}

                        {nextLesson ? (
                            <button onClick={handleNext} className="group flex-1 flex flex-col items-end gap-1 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all text-right">
                                <span className="text-xs font-mono text-gray-500 group-hover:text-cyan-400 uppercase tracking-widest flex items-center gap-2">Next Lesson <ChevronRight className="w-3 h-3" /></span>
                                <span className="text-lg font-bold text-white group-hover:text-cyan-100">{nextLesson.title}</span>
                            </button>
                        ) : <div className="flex-1" />}
                    </div>
                </div>
                <div className="h-24" />
            </div>

            <style jsx global>{`
                /* Syntax Highlighting */
                code[class*="language-"], pre[class*="language-"] {
                    text-shadow: none !important;
                    font-family: 'JetBrains Mono', monospace !important;
                    font-size: 14px !important;
                }
                .token.comment { color: #5c6370; font-style: italic; }
                .token.keyword { color: #c678dd; }
                .token.string { color: #98c379; }
                .token.function { color: #61afef; }
                .token.number { color: #d19a66; }
                .token.operator { color: #56b6c2; }
            `}</style>
        </div>
    );
}

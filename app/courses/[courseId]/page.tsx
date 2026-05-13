"use client"
// Force rebuild timestamp: 2026-12-29

import { courseData } from '@/lib/course-data';
import { notFound, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    PlayCircle,
    Award,
    Clock,
    ArrowRight,
    CheckCircle2,
    BarChart3,
    Users,
    BookOpen,
    Star,
    Shield
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PremiumSyllabus } from '@/components/course/premium-syllabus';
import { CourseCertificatePreview } from '@/components/course/course-certificate-preview';

export default function CoursePage({ params }: { params: { courseId: string } }) {
    const course = courseData[params.courseId];

    if (!course) return notFound();

    // Determine entry point (First lesson)
    const firstLesson = course.modules[0]?.lessons[0];

    const scrollToSyllabus = () => {
        const el = document.getElementById('syllabus');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-full w-full bg-[#030014] relative font-sans selection:bg-cyan-500/30">
            {/* GLOBAL VFX */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px] pointer-events-none" />

            {/* Ambient Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse-slow" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

            {/* HERO SECTION */}
            <div className="relative z-10 pt-32 pb-24 px-6">
                <div className="max-w-6xl mx-auto text-center space-y-10">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl animate-fade-in-up">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                        </span>
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-[0.2em] font-bold">Premium Engineering Series</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 animate-fade-in-up delay-100 drop-shadow-2xl">
                        {course.title}
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-light">
                        {course.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8 animate-fade-in-up delay-300">
                        {firstLesson && (
                            <Link
                                href={`/courses/${params.courseId}/${firstLesson.id}`}
                                className="group relative px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-[0_0_50px_-15px_rgba(255,255,255,0.4)] overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors">
                                    Start Learning <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        )}
                        <button
                            onClick={scrollToSyllabus}
                            className="px-10 py-5 rounded-full border border-white/10 text-white font-bold text-lg hover:bg-white/5 hover:border-white/20 transition-all backdrop-blur-sm"
                        >
                            View Syllabus
                        </button>
                    </div>

                    {/* Glass Stats Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-24 p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <StatItem label="Duration" value="12h 40m" icon={Clock} color="text-cyan-400" />
                        <StatItem label="Lessons" value={`${course.modules.reduce((a: any, m: any) => a + m.lessons.length, 0)}+`} icon={BookOpen} color="text-purple-400" />
                        <StatItem label="Level" value="Advanced" icon={BarChart3} color="text-orange-400" />
                        <StatItem label="Certificate" value="Included" icon={Award} color="text-green-400" />
                    </div>
                </div>
            </div>

            {/* SYLLABUS SECTION */}
            <div id="syllabus" className="scroll-mt-24">
                <PremiumSyllabus course={course} />
            </div>

            {/* CERTIFICATE PREVIEW */}
            <CourseCertificatePreview courseName={course.title} />


        </div>
    );
}

function StatItem({ label, value, icon: Icon, color }: any) {
    return (
        <div className="flex flex-col items-center gap-2 group cursor-default">
            <div className={`p-3 rounded-2xl bg-white/5 ${color.replace('text-', 'bg-')}/10 mb-1 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-5 h-5 ${color}`} />
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">{value}</div>
            <div className="text-xs text-gray-500 uppercase tracking-[0.1em] font-medium">{label}</div>
        </div>
    );
}
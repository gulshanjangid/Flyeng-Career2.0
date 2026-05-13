"use client"

import { courseData } from '@/lib/course-data';
import { CurriculumModal } from "@/components/curriculum-modal";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CoursesHero } from "@/components/courses-hero";
import { 
    Database, 
    Cpu, 
    Server, 
    Brain, 
    Globe, 
    Layout, 
    ArrowRight,
    Zap,
    Code2,
    Terminal,
    Layers
} from 'lucide-react';

export default function CoursesPage() {
    const [isCurriculumOpen, setIsCurriculumOpen] = useState(false);

    const scrollToCourses = () => {
        const grid = document.getElementById('courses-grid');
        if (grid) {
            grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Icons mapping based on keys
    const icons: Record<string, any> = {
        dsa: Database,
        cpp: Cpu,
        java: Server,
        python: Brain,
        "system-design": Globe,
        frontend: Layout
    };

    // Featured Item (DSA)
    const featuredCourseResult = Object.entries(courseData).find(([key]) => key === 'dsa');
    const [featuredKey, featuredData] = featuredCourseResult || Object.entries(courseData)[0];
    const FeaturedIcon = icons[featuredKey] || Code2;

    // Other Items
    const otherCourses = Object.entries(courseData).filter(([key]) => key !== 'dsa');

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
            <SiteHeader />

            <main className="relative z-10 w-full pb-20">
                
                {/* HERO SECTION - LIGHTWEIGHT CSS ONLY */}
                <CoursesHero 
                    onStartLearning={scrollToCourses}
                    onViewCurriculum={() => setIsCurriculumOpen(true)}
                />

                <CurriculumModal isOpen={isCurriculumOpen} onClose={() => setIsCurriculumOpen(false)} />

                {/* BENTO GRID SECTION */}
                <div id="courses-grid" className="container mx-auto px-4 md:px-6 relative z-30 mt-10">
                    <BentoGrid>
                        {/* FEATURED ITEM - NOW STANDARD SIZE */}
                        <BentoGridItem
                            href={`/courses/${featuredKey}`}
                            title={featuredData.title}
                            description={featuredData.description}
                            tags={["Arrays", "Graphs", "DP", "Trees"]}
                            header={
                                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 items-center justify-center relative overflow-hidden group-hover/bento:border-cyan-500/50 transition-colors">
                                    <div className="absolute inset-0 bg-grid-white/[0.05]" />
                                    {/* Abstract 'Node' Pattern */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                       <div className="w-32 h-32 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                                       <div className="w-20 h-20 border border-cyan-500/20 rounded-full absolute animate-[spin_15s_linear_infinite_reverse]" />
                                    </div>
                                    
                                    <FeaturedIcon className="w-12 h-12 text-neutral-500 group-hover/bento:text-cyan-400 transition-colors duration-500 relative z-10" />
                                    
                                    <div className="absolute top-3 right-3 bg-cyan-950/30 text-cyan-400 text-[10px] font-mono uppercase px-2 py-0.5 rounded border border-cyan-500/20 flex items-center gap-1 backdrop-blur-sm">
                                        <Zap size={10} /> Top Rated
                                    </div>
                                </div>
                            }
                            className="md:col-span-1"
                            icon={<FeaturedIcon className="h-4 w-4 text-neutral-500" />}
                            gradientColor="#06b6d4" // DSA - Cyan
                            badge={
                                <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest mb-2 border border-cyan-500/20 bg-cyan-500/5 w-fit px-2 py-0.5 rounded">
                                    Foundation
                                </div>
                            }
                        />

                        {/* REMAINING COURSES */}
                        {otherCourses.map(([key, course]) => {
                            const Icon = icons[key] || Terminal;
                            
                            // Custom 'Tags' based on course key for simulation
                            const mockTags: Record<string, string[]> = {
                                "cpp": ["Pointers", "Memory", "STL"],
                                "java": ["Spring", "Microservices", "JVM"],
                                "python": ["Torch", "Pandas", "FastAPI"],
                                "system-design": ["Scale", "Load Balancers", "CAP"],
                                "frontend": ["React", "Next.js", "Tailwind"]
                            };

                            // Custom Visuals based on course key
                            const getHeaderVisual = (k: string) => {
                                 if (k === 'frontend') {
                                     return (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            {/* Precise Grid Layout */}
                                            <div className="w-[80%] h-[70%] border border-zinc-800 bg-zinc-900 rounded-md relative flex flex-col overflow-hidden shadow-sm">
                                                 <div className="h-4 border-b border-zinc-800 bg-zinc-800/50 flex items-center px-2 space-x-1">
                                                     <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                                                     <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                                                 </div>
                                                 <div className="flex-1 p-2 grid grid-cols-3 gap-1">
                                                     <div className="col-span-2 h-full bg-zinc-800/50 rounded-sm" />
                                                     <div className="col-span-1 h-full bg-zinc-800/30 rounded-sm" />
                                                 </div>
                                                 {/* Active Indicator */}
                                                 <div className="absolute bottom-1 right-1 w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                                            </div>
                                        </div>
                                     );
                                 }
                                 if (k === 'system-design' || k === 'java') {
                                     return (
                                         <div className="absolute inset-0 flex items-center justify-center">
                                             {/* Server/Database Schematic */}
                                             <div className="flex gap-2 opacity-80">
                                                 <div className="w-8 h-12 border border-zinc-700 bg-zinc-800/50 rounded-sm flex flex-col justify-around py-1 items-center">
                                                     <div className="w-4 h-0.5 bg-zinc-600" />
                                                     <div className="w-4 h-0.5 bg-zinc-600" />
                                                     <div className="w-4 h-0.5 bg-green-500/50 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                                                 </div>
                                                 <div className="w-8 h-12 border border-zinc-700 bg-zinc-800/50 rounded-sm flex flex-col justify-around py-1 items-center">
                                                     <div className="w-4 h-0.5 bg-zinc-600" />
                                                     <div className="w-4 h-0.5 bg-green-500/50 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                                                     <div className="w-4 h-0.5 bg-zinc-600" />
                                                 </div>
                                             </div>
                                             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:12px_12px]" />
                                         </div>
                                     );
                                 }
                                 return (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                         {/* Code/Terminal Abstract */}
                                         <div className="w-full max-w-[120px] space-y-1.5 opacity-60">
                                             <div className="h-1 w-full bg-zinc-800 rounded-full" />
                                             <div className="h-1 w-3/4 bg-zinc-800 rounded-full" />
                                             <div className="h-1 w-5/6 bg-zinc-800 rounded-full" />
                                             <div className="h-1 w-1/2 bg-zinc-700 rounded-full animate-pulse" />
                                         </div>
                                    </div>
                                 );
                            };

                            // 4. COLOR THEME PER COURSE
                            const courseColors: Record<string, string> = {
                                "cpp": "#3b82f6",     // Blue
                                "java": "#f97316",    // Orange
                                "python": "#eab308",  // Yellow
                                "system-design": "#a855f7", // Purple
                                "frontend": "#ec4899" // Pink
                            };
                            const accentColor = courseColors[key] || "#06b6d4"; // Default Cyan

                            return (
                                <BentoGridItem
                                    key={key}
                                    href={`/courses/${key}`}
                                    title={course.title}
                                    description={course.description}
                                    className="md:col-span-1"
                                    tags={mockTags[key] || ["Concept", "Practice"]}
                                    gradientColor={accentColor}
                                    header={
                                        <div className="flex flex-1 w-full h-full items-center justify-center relative overflow-hidden bg-zinc-900/0">
                                            {getHeaderVisual(key)}
                                        </div>
                                    }
                                    icon={<Icon className="h-4 w-4 text-neutral-500" />}
                                />
                            );
                        })}

                    </BentoGrid>
                </div>

            </main>
            <EnhancedFooter />
        </div>
    );
}

function ActivityIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  }
"use client";

import { FileText, Globe, Mic, Map, Code, Shield, Zap, Lightbulb, Target, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const toolsRow1 = [
    { icon: FileText, label: "Resume Architect", color: "text-blue-400" },
    { icon: Globe, label: "Job Matcher", color: "text-cyan-400" },
    { icon: Mic, label: "Interview Coach", color: "text-rose-400" },
    { icon: Map, label: "Career Roadmap", color: "text-purple-400" },
    { icon: Code, label: "Code Analysis", color: "text-yellow-400" },
];

const toolsRow2 = [
    { icon: Shield, label: "Salary Negotiator", color: "text-emerald-400" },
    { icon: Zap, label: "Skill Booster", color: "text-orange-400" },
    { icon: Lightbulb, label: "Idea Generator", color: "text-indigo-400" },
    { icon: Target, label: "Goal Tracker", color: "text-red-400" },
    { icon: TrendingUp, label: "Market Trends", color: "text-teal-400" },
];

export const HeroToolsMarquee = () => {
    return (
        <div className="absolute inset-0 hidden md:flex flex-col justify-center gap-16 overflow-hidden select-none pointer-events-auto">
            {/* Row 1 - Left Scroll */}
            <div className="flex w-max gap-8 animate-scroll-left">
                {[...toolsRow1, ...toolsRow1, ...toolsRow1, ...toolsRow1].map((tool, i) => (
                    <ToolCard key={`r1-${i}`} tool={tool} />
                ))}
            </div>

            {/* Row 2 - Right Scroll */}
            <div className="flex w-max gap-8 animate-scroll-right">
                {[...toolsRow2, ...toolsRow2, ...toolsRow2, ...toolsRow2].map((tool, i) => (
                    <ToolCard key={`r2-${i}`} tool={tool} />
                ))}
            </div>
        </div>
    );
};

function ToolCard({ tool }: { tool: any }) {
    return (
        <div className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 rounded-2xl bg-white/5 border border-white/5 min-w-[200px] md:min-w-[250px] transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.03] group cursor-default">
            <div className={cn("p-2 rounded-lg bg-white/5", tool.color)}>
                <tool.icon className="w-6 h-6" />
            </div>
            <span className="text-lg font-bold text-white/80 tracking-wide font-mono">
                {tool.label.toUpperCase()}
            </span>
        </div>
    )
}


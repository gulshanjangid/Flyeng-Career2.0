"use client";

import React from "react";
import { FileText, Globe, Mic, Map, Code, Shield, Zap, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const tools = [
    { icon: FileText, label: "Resume Architect", color: "text-blue-400", bg: "bg-blue-500", shadow: "shadow-blue-500" },
    { icon: Globe, label: "Job Matcher", color: "text-cyan-400", bg: "bg-cyan-500", shadow: "shadow-cyan-500" },
    { icon: Mic, label: "Interview Coach", color: "text-rose-400", bg: "bg-rose-500", shadow: "shadow-rose-500" },
    { icon: Map, label: "Career Roadmap", color: "text-purple-400", bg: "bg-purple-500", shadow: "shadow-purple-500" },
    { icon: Code, label: "Code Analysis", color: "text-yellow-400", bg: "bg-yellow-500", shadow: "shadow-yellow-500" },
    { icon: Shield, label: "Salary Negotiator", color: "text-emerald-400", bg: "bg-emerald-500", shadow: "shadow-emerald-500" },
    { icon: Zap, label: "Skill Booster", color: "text-orange-400", bg: "bg-orange-500", shadow: "shadow-orange-500" },
    { icon: Lightbulb, label: "Idea Generator", color: "text-indigo-400", bg: "bg-indigo-500", shadow: "shadow-indigo-500" },
];

export const OrbitalTools = () => {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center perspective-[1200px] overflow-visible pointer-events-none">

            {/* 
          SATURN RING LAYOUT 
          - Tilted 70deg on X to lay flat.
          - Rotates around Z axis.
      */}
            <div
                className="relative w-[600px] h-[600px] rounded-full animate-[spin_40s_linear_infinite] preserve-3d"
                style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(75deg)" // High tilt for horizontal look
                }}
            >
                {tools.map((tool, i) => {
                    const rotation = i * (360 / tools.length);
                    const radius = 350; // Wide radius to clear text

                    return (
                        <div
                            key={i}
                            className="absolute top-1/2 left-1/2 -ml-10 -mt-10 w-20 h-20 flex items-center justify-center p-4"
                            style={{
                                transform: `rotate(${rotation}deg) translate(${radius}px) rotate(-${rotation}deg) rotateX(-75deg)`, // Counter-rotate to stand upright
                            }}
                        >
                            {/* Card Container */}
                            <div
                                className={cn(
                                    "relative w-24 h-32 md:w-32 md:h-40 flex flex-col items-center justify-center gap-2 p-3",
                                    "rounded-2xl border border-white/20 backdrop-blur-md bg-black/60",
                                    "shadow-[0_0_20px_rgba(0,0,0,0.5)]",
                                    tool.shadow ? `shadow-[0_0_15px_-5px_rgba(255,255,255,0.3)]` : ""
                                )}
                            >
                                <div className={cn("p-3 rounded-full bg-white/10", tool.color)}>
                                    <tool.icon className="w-8 h-8 md:w-10 md:h-10" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

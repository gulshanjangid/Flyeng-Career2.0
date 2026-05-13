"use client"; // Ensure client-side for motion
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HoverSpotlight } from "./spotlight";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto ",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  badge,
  href,
  tags = [],
  gradientColor = "#06b6d4",
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  href?: string;
  tags?: string[];
  gradientColor?: string;
}) => {
  // 3D Tilt Logic
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Set CSS Variables for precise mouse tracking spotlights
    ref.current.style.setProperty("--mouse-x", `${mouseX}px`);
    ref.current.style.setProperty("--mouse-y", `${mouseY}px`);

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = href ? Link : "div";

  return (
    <Link href={href || "#"}
        className={cn(
            "row-span-1 rounded-xl group/bento transition duration-200 relative h-full bg-black border border-white/5 block",
            className
        )}
        style={{
             // @ts-ignore
            "--gradient-color": gradientColor
        } as React.CSSProperties}
    >
      {/* 0. BORDER BEAM - Continuous Edge Lighting */}
      <div className="absolute -inset-[1px] rounded-xl overflow-hidden z-0 pointer-events-none">
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover/bento:opacity-100 transition duration-500" 
             style={{ backgroundImage: `linear-gradient(to right, ${gradientColor}20, transparent, ${gradientColor}20)` }}
          />
          {/* Using a simpler spinning conic gradient for robust "beam" effect */}
          <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] opacity-0 group-hover/bento:opacity-100 transition duration-300" 
               style={{ 
                   background: `conic-gradient(from 90deg at 50% 50%, #000000 0%, #000000 60%, ${gradientColor} 100%)`,
                   mixBlendMode: 'screen' 
               }}
          />
      </div>
      
      {/* Main Content Container - over the beam */}
      <div className="relative z-10 h-full w-full rounded-xl bg-neutral-950 flex flex-col justify-between p-1 overflow-hidden">
        
        {/* 1. ENGINEERING GRID BACKGROUND WITH COLOR TINT */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-50" />
        <div 
             className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent pointer-events-none" 
        />
        {/* Subtle Ambient Color Wash */}
        <div className="absolute inset-0 opacity-0 group-hover/bento:opacity-20 transition duration-700 pointer-events-none"
             style={{ background: `radial-gradient(circle at center, ${gradientColor}, transparent 70%)` }}
        />

        {/* 2. HOVER SPOTLIGHT */}
        <div 
            className="absolute inset-0 opacity-0 group-hover/bento:opacity-100 transition duration-300 pointer-events-none"
            style={{
                background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${gradientColor}20, transparent 40%)`
            }} 
        />

        {/* HEADER AREA */}
        <div className="h-44 w-full relative overflow-hidden rounded-lg bg-neutral-900/50 border border-white/5 transition-colors duration-300"
             style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
            {/* Dynamic Border Color on Hover */}
            <div className="absolute inset-0 rounded-lg border border-transparent group-hover/bento:border-current transition-colors opacity-30 pointer-events-none"
                 style={{ color: gradientColor }}
            />

            {/* Inner scanline effect */}
            <div className="get-started-btn absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            <div className="transform scale-[0.98] group-hover/bento:scale-100 transition-transform duration-500 ease-out h-full w-full">
                {header}
            </div>
        </div>
        
        {/* TEXT CONTENT AREA */}
        <div className="p-5 relative z-30">
            <div className="flex items-center justify-between mb-3">
                {badge}
                <div className="text-zinc-600 transition-colors duration-300 group-hover/bento:text-[var(--gradient-color)]">
                    {icon}
                </div>
            </div>

            <h3 className="font-heading font-bold text-zinc-100 text-lg mb-2 leading-tight group-hover/bento:text-white transition-colors">
            {title}
            </h3>
            <div className="font-sans font-medium text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-2 group-hover/bento:text-zinc-400 transition-colors">
            {description}
            </div>

            {tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                    {tags.slice(0, 3).map((tag, i) => (
                        <span key={i} 
                              className="px-2 py-0.5 rounded text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-500 font-mono tracking-wide transition-colors duration-300 group-hover/bento:text-[var(--gradient-color)] group-hover/bento:border-[var(--gradient-color)]/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
      </div>
    </Link>
  );
};

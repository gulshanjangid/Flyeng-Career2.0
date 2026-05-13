"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  spotlightColor?: string;
  borderColor?: string;
}

export function SpotlightCard({
  href,
  className,
  children,
  spotlightColor = "rgba(255, 255, 255, 0.25)", // Increased base opacity
  borderColor = "rgba(255, 255, 255, 0.3)"      // Stronger default border
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <Link 
        href={href} 
        className="block h-full outline-none group"
    >
      <motion.div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 0.98 }}
        className={cn(
          "relative h-full overflow-hidden rounded-[20px] bg-[#050505] border border-white/10 shadow-lg shadow-black/80",
          className
        )}
      >
        {/* 
            SPOTLIGHT GRADIENT
            - Follows mouse position
            - Brighter and larger for "amazing" look
        */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
          }}
        />

        {/* 
            CONTENT CONTAINER 
            - Added noise texture for premium feel
            - Slightly darker backdrop
        */}
         <div className="relative h-full z-10 w-full rounded-[19px] bg-[#0c0c0c]/90 backdrop-blur-xl p-6 transition-colors duration-500 group-hover:bg-[#0c0c0c]/70 hover:shadow-[inset_0_0_80px_rgba(0,0,0,0.5)]">
             {/* NOISE TEXTURE */}
             <div 
                className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" 
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
             />
             
             {children}
         </div>

         {/* 
            BORDER HIGHLIGHT 
            - Crisp border reveal
         */}
         <div 
             className="absolute inset-0 rounded-[20px] pointer-events-none transition duration-300"
             style={{
                 opacity,
                 border: "1.5px solid transparent",
                 maskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black, transparent)`,
                 WebkitMaskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black, transparent)`,
                 borderColor: borderColor
             }}
         />
      </motion.div>
    </Link>
  );
}

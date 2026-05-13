"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface HolographicCardProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
  spotlightColor?: string;
}

export function HolographicCard({
  href,
  className,
  children,
  spotlightColor = "rgba(255, 255, 255, 0.2)"
}: HolographicCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (href) {
    return (
      <Link 
          href={href} 
          className="block h-full outline-none perspective-[1000px] group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? <MotionContent spotlightColor={spotlightColor} className={className}>{children}</MotionContent> : <StaticContent className={className}>{children}</StaticContent>}
      </Link>
    );
  }

  return (
    <div 
      className="block h-full outline-none perspective-[1000px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        {isHovered ? <MotionContent spotlightColor={spotlightColor} className={className}>{children}</MotionContent> : <StaticContent className={className}>{children}</StaticContent>}
    </div>
  );
}

// === Static version for fast FCP without heavy hooks ===
function StaticContent({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-[24px] bg-[#050505] border border-white/10 transition-all duration-200",
        className
      )}
    >
       <div className="relative h-full z-20 w-full rounded-[23px] bg-[#0a0a0a]/40 backdrop-blur-md p-6 border border-white/5">
           <div 
              className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-screen" 
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
           />
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30" />
           {children}
       </div>
    </div>
  )
}

// === Heavy Framer Motion version (only mounts on hover) ===
function MotionContent({ children, className, spotlightColor }: { children: React.ReactNode, className?: string, spotlightColor: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(0, { stiffness: 1200, damping: 40 });
  const mouseY = useSpring(0, { stiffness: 1200, damping: 40 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["3.5deg", "-3.5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-3.5deg", "3.5deg"]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;

    x.set(clientX - left);
    y.set(clientY - top);

    mouseX.set(xPct);
    mouseY.set(yPct);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ rotateX: 0, rotateY: 0 }}
      animate={{ rotateX: rotateX.get(), rotateY: rotateY.get() }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn(
        "relative h-full overflow-hidden rounded-[24px] bg-[#050505] border border-white/10 transition-all duration-200",
        "shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]", 
        className
      )}
    >
       <motion.div 
          className="absolute inset-0 z-0 opacity-100 transition-opacity duration-300"
          style={{
              background: useTransform(
                  [mouseX, mouseY],
                  ([x, y]: any[]) => `radial-gradient(400px circle at ${x * 400 + 200}px ${y * 400 + 200}px, ${spotlightColor}, transparent 40%)`
              )
          }}
       />

      <motion.div
        className="pointer-events-none absolute -inset-px opacity-100 transition duration-300 z-10 mix-blend-soft-light"
        style={{
          background: useTransform(
              [x, y],
              ([latestX, latestY]: any[]) => `radial-gradient(600px circle at ${latestX}px ${latestY}px, rgba(255,255,255,0.1), transparent 60%)`
          )
        }}
      />

       <div className="relative h-full z-20 w-full rounded-[23px] bg-[#0a0a0a]/30 backdrop-blur-md p-6 transition-all duration-300 transform-gpu translate-z-[12px] border border-white/10">
           <div 
              className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-screen" 
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
           />
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30" />
           {children}
       </div>
    </motion.div>
  )
}


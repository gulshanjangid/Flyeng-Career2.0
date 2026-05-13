"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface NeonGridBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function NeonGridBackground({
  className,
  children,
}: NeonGridBackgroundProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full bg-[#030303] overflow-hidden selection:bg-cyan-500/30 selection:text-white",
        className
      )}
    >
      {/* 
        GRID LAYER 
        - Using background-size and background-image for standard performant grid
        - No continuous JS animation hook
      */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 100%)",
        }}
      />

      {/* AMBIENT GLOWS - Static blurred ellipses for mood directly in CSS */}
      <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-cyan-900/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      {/* VIGNETTE */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black pointer-events-none opacity-80" />

      {/* CONTENT */}
      <div className="relative z-10 flex-1 flex flex-col h-full w-full">{children}</div>
    </div>
  );
}
"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  gradient?: string; // Optional internal gradient override
}

export function GlassCard({
  href,
  className,
  children,
  gradient,
}: GlassCardProps) {
  return (
    <Link href={href} className="block h-full group outline-none">
      <motion.div
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "relative h-full overflow-hidden rounded-[20px] border border-white/5 bg-[#0a0a0a]/60 backdrop-blur-md",
          "transition-colors duration-500 hover:border-white/20 hover:bg-[#0a0a0a]/80",
          "shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-black/60",
          className
        )}
      >
        {/*
          GLOW EFFECT layer
          - Absolutely positioned gradient that fades in on hover
        */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
            "bg-gradient-to-br from-white/5 to-transparent mix-blend-overlay",
            gradient
          )}
        />

        {/* 
          SHINE LINE
          - A subtle diagonal shine that passes through on hover
        */}
        <div 
          className="absolute -inset-[150%] w-[300%] h-[300%] bg-gradient-to-r from-transparent via-white/5 to-transparent -rotate-45 translate-x-[-100%] group-hover:animate-shine pointer-events-none" 
        />

        {/* CONTENT */}
        <div className="relative z-10 p-6 h-full flex flex-col">
            {children}
        </div>
      </motion.div>
    </Link>
  );
}

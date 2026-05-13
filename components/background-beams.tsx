"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 flex items-end justify-center pointer-events-none overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(100%_100%_at_50%_0%,white_0%,transparent_100%)] opacity-20"></div>
      <motion.div
        initial={{ opacity: 0.5, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-[120px] mix-blend-screen"
      />
      
      {/* Moving beams */}
      {[...Array(5)].map((_, i) => (
         <motion.div
            key={i}
            initial={{ 
                opacity: 0, 
                left: `${Math.random() * 100}%`,
                top: "100%",
                height: "20%" 
            }}
            animate={{ 
                opacity: [0, 1, 0],
                top: "-20%", 
                height: "60%" 
            }}
            transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
            }}
            className="absolute w-[1px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent blur-[1px]"
            style={{ willChange: "transform, opacity" }}
         />
      ))}
    </div>
  );
};


"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": delay,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        // Mask styles
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        className
      )}
    >
      <motion.div
        className={cn(
          "absolute aspect-square h-full bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent",
          "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:bg-[linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]"
        )}
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          delay: delay,
        }}
        style={{
            offsetPath: "rect(0 auto auto 0 round 0px)" // Standard rect path
        }}
      />
      
      {/* Fallback / Different Implementation for smooth corners if needed */}
       <div className="absolute inset-0 rounded-[inherit] overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-full animate-border-beam-mask" 
                style={{
                    background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 300deg, ${colorFrom} 330deg, ${colorTo} 360deg)`,
                    animationDuration: `${duration}s`,
                    animationDelay: `${delay}s`,
                }}
            />
       </div>
    </div>
  );
};

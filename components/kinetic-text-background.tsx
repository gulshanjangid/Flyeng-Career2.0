"use client";

import { motion, useScroll, useTransform, useSpring, useVelocity, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxProps {
    children: React.ReactNode;
    baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="flex flex-nowrap overflow-hidden whitespace-nowrap">
            <motion.div className="flex flex-nowrap gap-8 md:gap-16" style={{ x }}>
                {children}
                {children}
                {children}
                {children}
            </motion.div>
        </div>
    );
}

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function KineticTextBackground() {
    return (
        <div className="w-full flex flex-col justify-center gap-4 opacity-10 select-none pointer-events-none mix-blend-overlay">

            {/* Row 1: Core Features */}
            <ParallaxText baseVelocity={-2}>
                <span className="text-8xl md:text-[12rem] font-black tracking-tighter uppercase text-transparent stroke-white" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)" }}>
                    AI TOOLS • RESUME ANALYZER • MOCK INTERVIEWS •
                </span>
            </ParallaxText>

            {/* Row 2: Curriculum & Skills */}
            <ParallaxText baseVelocity={2}>
                <span className="text-8xl md:text-[12rem] font-black tracking-tighter uppercase text-transparent stroke-white" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)" }}>
                    PYTHON MASTERY • SYSTEM DESIGN • DSA •
                </span>
            </ParallaxText>

            {/* Row 3: Outcome & Vision */}
            <ParallaxText baseVelocity={-1.5}>
                <span className="text-8xl md:text-[12rem] font-black tracking-tighter uppercase text-transparent stroke-white" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)" }}>
                    CAREER ACCELERATION • TOP 1% ENGINEERING •
                </span>
            </ParallaxText>

        </div>
    );
}

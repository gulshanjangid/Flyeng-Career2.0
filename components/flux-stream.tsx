"use client";

import { useRef } from "react";
import {
    Server,
    Globe,
    Network,
    Database,
    Zap,
    Trophy,
    Target,
    Crown,
    Briefcase,
    Cpu,
    Rocket,
    CheckCircle2,
    Star,
    ShieldCheck
} from "lucide-react";
import {
    useScroll,
    useTransform,
    useMotionValue,
    useAnimationFrame,
    motion,
    useSpring,
    useVelocity
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Oswald, Inter } from "next/font/google";

// === FONTS: THE GOLD STANDARD ===
const oswald = Oswald({
    subsets: ["latin"],
    weight: ["500", "700"],
    variable: "--font-oswald"
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "800"],
    variable: "--font-inter"
});

// === TYPES ===
interface ParallaxProps {
    children: React.ReactNode;
    baseVelocity: number;
}

// === COMPONENT: PARALLAX TEXT ROW ===
function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    // Physics: "Executive" grade smoothness
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 75,
        stiffness: 400
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
    const directionFactor = useRef<number>(1);

    useAnimationFrame((t, delta) => {
        const cappedDelta = Math.min(delta, 32);
        let moveBy = directionFactor.current * baseVelocity * (cappedDelta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="flex flex-nowrap overflow-hidden whitespace-nowrap py-8 select-none relative z-10">
            <motion.div
                className="flex flex-nowrap gap-16 md:gap-32 items-center will-change-transform"
                style={{ x }}
            >
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center flex-nowrap shrink-0 transform-gpu translate-z-0 backface-hidden will-change-transform">
                        {children}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

// === UTILS ===
const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

// === SEPARATORS (Final Polish) ===
const TechPipe = () => <div className="h-8 md:h-24 w-[2px] md:w-[4px] bg-slate-800 mx-6 md:mx-12" />;
const Dot = () => <div className="w-1.5 h-1.5 md:w-4 md:h-4 rounded-full bg-slate-500 mx-4 md:mx-10" />;
const StarSep = () => <Star className="w-5 h-5 md:w-16 md:h-16 text-slate-700 mx-6 md:mx-12 fill-current opacity-50" />;


// === MAIN COMPONENT ===
export function FluxStream() {
    return (
        <section className={cn(
            "relative w-full py-16 md:py-48 overflow-hidden bg-[#0a0a0a] hidden md:flex flex-col justify-center gap-6 md:gap-10 border-y border-white/5",
            oswald.variable, inter.variable
        )}>

            {/* === ATMOSPHERE: SIGNATURE SERIES === */}
            <div className="absolute inset-0 z-[1] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none" />


            {/* === ROW 1: THE VISION (Solid White) === */}
            <ParallaxText baseVelocity={-1.5}>
                <div className={cn("flex items-center text-4xl sm:text-6xl md:text-[8rem] font-bold tracking-tight uppercase text-white", oswald.className)}>
                    <span className="flex items-center gap-6">
                        UNSTOPPABLE <ShieldCheck className="w-12 h-12 text-[#22c55e]" strokeWidth={2} />
                    </span>
                    <TechPipe />
                    <span className="flex items-center gap-6 text-slate-500">VISIONARY</span>
                    <TechPipe />
                    <span className="flex items-center gap-6">
                        PRECISION <CheckCircle2 className="w-12 h-12 text-blue-500" strokeWidth={2} />
                    </span>
                    <TechPipe />
                    <span className="flex items-center gap-6 text-slate-500">EXECUTION</span>
                    <TechPipe />
                    <span className="flex items-center gap-6">DOMINANCE</span>
                    <TechPipe />
                </div>
            </ParallaxText>

            {/* === ROW 2: THE TECH (Tactile Interaction) === */}
            <ParallaxText baseVelocity={1.5}>
                <div className={cn("flex items-center text-3xl sm:text-5xl md:text-[6rem] font-bold tracking-tight uppercase text-slate-500", inter.className)}>
                    <span className="flex items-center gap-6 group hover:skew-x-[-10deg] hover:text-white transition-all duration-300 cursor-default">
                        SYSTEM ARCH <Server className="w-14 h-14 md:w-16 md:h-16 opacity-60 group-hover:opacity-100 transition-all" />
                    </span>
                    <Dot />
                    <span className="flex items-center gap-6 group hover:skew-x-[-10deg] hover:text-white transition-all duration-300 cursor-default">
                        CLOUD NATIVE <Globe className="w-14 h-14 md:w-16 md:h-16 opacity-60 group-hover:opacity-100 transition-all" />
                    </span>
                    <Dot />
                    <span className="flex items-center gap-6 group hover:skew-x-[-10deg] hover:text-white transition-all duration-300 cursor-default">
                        SCALABILITY <Network className="w-14 h-14 md:w-16 md:h-16 opacity-60 group-hover:opacity-100 transition-all" />
                    </span>
                    <Dot />
                    <span className="flex items-center gap-6 group hover:skew-x-[-10deg] hover:text-white transition-all duration-300 cursor-default">
                        MICROSERVICES <Database className="w-14 h-14 md:w-16 md:h-16 opacity-60 group-hover:opacity-100 transition-all" />
                    </span>
                    <Dot />
                    <span className="flex items-center gap-6 group hover:skew-x-[-10deg] hover:text-white transition-all duration-300 cursor-default">
                        PERFORMANCE <Cpu className="w-14 h-14 md:w-16 md:h-16 opacity-60 group-hover:opacity-100 transition-all" />
                    </span>
                    <Dot />
                </div>
            </ParallaxText>

            {/* === ROW 3: THE GOLD STANDARD (Shimmering) === */}
            <ParallaxText baseVelocity={-1.5}>
                <div className={cn("flex items-center text-4xl sm:text-6xl md:text-[8rem] font-bold tracking-tight uppercase text-transparent", oswald.className)}
                    style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.2)" }}>
                    <span className="flex items-center gap-6 text-white">
                        TOP 1% ENGINEER <Trophy className="w-16 h-16 md:w-20 md:h-20 text-[#FFD700]" strokeWidth={1.5} />
                    </span>
                    <StarSep />
                    <span className="flex items-center gap-6 hover:text-white transition-colors duration-500 cursor-default">
                        MAANG READY <Briefcase className="w-16 h-16 md:w-20 md:h-20" strokeWidth={1.5} />
                    </span>
                    <StarSep />
                    <span className="flex items-center gap-6 hover:text-white transition-colors duration-500 cursor-default">
                        GLOBAL LEADER <Target className="w-16 h-16 md:w-20 md:h-20" strokeWidth={1.5} />
                    </span>
                    <StarSep />
                    <span className="flex items-center gap-6 hover:text-white transition-colors duration-500 cursor-default">
                        INNOVATOR <Rocket className="w-16 h-16 md:w-20 md:h-20" strokeWidth={1.5} />
                    </span>
                    <StarSep />
                    <span className="flex items-center gap-6 hover:text-white transition-colors duration-500 cursor-default">
                        FINANCIAL FREEDOM <Crown className="w-16 h-16 md:w-20 md:h-20 text-[#FFD700]" strokeWidth={1.5} />
                    </span>
                    <StarSep />
                </div>
            </ParallaxText>

            {/* === FINAL VIGNETTE === */}
            <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

        </section>
    );
}

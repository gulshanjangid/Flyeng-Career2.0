"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";


// Utility to wrap value within a range
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

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

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport.
   */
  return (
    <div className="flex flex-nowrap overflow-hidden whitespace-nowrap leading-[0.8]">
      <motion.div className="flex flex-nowrap gap-16 md:gap-32" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export function LogoMarquee() {
  const [showSuccessStories, setShowSuccessStories] = useState(false)

  const companiesRow1 = [
    { name: "Google", domain: "google.com", logoUrl: "https://www.vectorlogo.zone/logos/google/google-icon.svg" },
    { name: "Microsoft", domain: "microsoft.com" },
    { name: "Amazon", domain: "amazon.com" },
    { name: "Netflix", domain: "netflix.com" },
    { name: "Meta", domain: "meta.com" },
    { name: "Apple", domain: "apple.com" },
  ];

  const companiesRow2 = [
    { name: "OpenAI", domain: "openai.com" },
    { name: "Tesla", domain: "tesla.com" },
    { name: "Airbnb", domain: "airbnb.com" },
    { name: "Uber", domain: "uber.com" },
    { name: "Spotify", domain: "spotify.com" },
    { name: "Shopify", domain: "shopify.com" },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#030014] relative overflow-hidden flex flex-col justify-center">

      {/* Header */}
      <div className="container mx-auto px-4 mb-20 flex flex-col md:flex-row items-end justify-between gap-8 z-10 relative">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
            Trusted by <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
              Industry Visionaries
            </span>
          </h2>
          <p className="text-lg text-white/40 max-w-md">
            Our alumni are rewriting the code of the future at these powerhouses.
          </p>
        </div>
      </div>

      <div className="space-y-16 relative z-0">
        <ParallaxText baseVelocity={-0.7}>
          {companiesRow1.map((company, i) => (
            <LogoItem key={i} company={company} />
          ))}
        </ParallaxText>
        <ParallaxText baseVelocity={0.7}>
          {companiesRow2.map((company, i) => (
            <LogoItem key={i} company={company} />
          ))}
        </ParallaxText>
      </div>

      {/* Gradient Masks */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030014] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030014] to-transparent z-10 pointer-events-none" />
    </section>
  );
}

function LogoItem({ company }: { company: any }) {
  return (
    <div className="relative group w-32 h-16 sm:w-48 sm:h-20 md:w-64 md:h-24 flex items-center justify-center transition-all duration-500 cursor-pointer perspective-[1000px]">
      <Image
        src={(company as any).logoUrl || `https://unavatar.io/${company.domain}`}
        alt={company.name}
        fill
        className="object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-125 group-hover:-rotate-3 group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
        loading="lazy"
        sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, 256px"
      />
    </div>
  )
}

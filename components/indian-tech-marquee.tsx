"use client";

import { useRef } from "react";
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
    <div className="flex flex-nowrap overflow-hidden whitespace-nowrap leading-[0.8] mb-8">
      <motion.div className="flex flex-nowrap gap-16 md:gap-32 items-center" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export function IndianTechMarquee() {
  const companiesRow1 = [
    { name: "TCS", domain: "tcs.com" },
    { name: "Infosys", domain: "infosys.com" },
    { name: "Wipro", domain: "wipro.com" },
    { name: "Cognizant", domain: "cognizant.com" },
    { name: "Accenture", domain: "accenture.com" },
    { name: "Capgemini", domain: "capgemini.com" },
  ];

  const companiesRow2 = [
    { name: "Tech Mahindra", domain: "techmahindra.com" },
    { name: "HCLTech", domain: "hcltech.com" },
    { name: "IBM", domain: "ibm.com" },
    { name: "Deloitte", domain: "deloitte.com" },
    { name: "LTIMindtree", domain: "ltimindtree.com" },
    { name: "Mphasis", domain: "mphasis.com" },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden flex flex-col justify-center border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

      {/* Header */}
      <div className="container mx-auto px-4 mb-32 text-center z-10 relative">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Targeting the <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            Mass Recruiters
          </span>
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto font-light text-lg">
          Our curriculum is engineered specifically to bypass the brutal rejection rates of India's biggest tech giants.
        </p>
      </div>

      <div className="relative z-0">
        <ParallaxText baseVelocity={-1.5}>
          {companiesRow1.map((company, i) => (
            <LogoItem key={i} company={company} />
          ))}
        </ParallaxText>
        <ParallaxText baseVelocity={1.5}>
          {companiesRow2.map((company, i) => (
            <LogoItem key={i} company={company} />
          ))}
        </ParallaxText>
      </div>

      {/* Gradient Masks */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
}

function LogoItem({ company }: { company: { name: string, domain: string } }) {
  return (
    <div className="relative group flex items-center gap-4 transition-all duration-500 cursor-pointer mx-12 text-zinc-500/50 hover:text-white">
      <span className="text-4xl md:text-5xl lg:text-7xl font-black transition-all duration-500 tracking-tighter uppercase relative">
        {company.name}
        <div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </span>
    </div>
  )
}

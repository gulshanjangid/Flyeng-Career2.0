"use client";

import { useScroll, useTransform, motion, useSpring, useMotionValue, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Oswald, Inter } from "next/font/google";
import { Star, BadgeCheck, Quote } from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["500", "700"] });
const inter = Inter({ subsets: ["latin"] });

// === DATA: THE SUCCESS STORIES ===
const testimonials = [
    {
        name: "Arjun Mehta",
        role: "SDE-1 @ Amazon India",
        offer: "₹45 LPA Offer",
        text: "I was stuck at 8 LPA. The resume builder rephrased my projects to sound like system design achievements. Amazon HR called the next day.",
        avatar: "/testimonials/avatar_arjun.png",
        verified: true
    },
    {
        name: "Sneha Kapoor",
        role: "Frontend @ Swiggy",
        offer: "Joined Team",
        text: "The mock interview AI is scary good. It caught my 'umms' and lack of confidence. Fixed it in 3 days. Cleared Swiggy frontend round easily.",
        avatar: "/testimonials/avatar_sneha.png",
        verified: true
    },
    {
        name: "Rohan Das",
        role: "Backend @ Zomato",
        offer: "Senior Dev",
        text: "System Design was my weak point. The visualizer broke down 'Consistent Hashing' so well I could teach it. Nailing the Zomato interview was a breeze.",
        avatar: "/testimonials/avatar_rohan.png",
        verified: true
    },
    {
        name: "Ananya Singh",
        role: "Analyst @ Cred",
        offer: "Data Team",
        text: "I didn't have a portfolio. The builder made one for me in 5 minutes. The hiring manager was impressed by the 'live projects' section.",
        avatar: "/testimonials/avatar_ananya.png",
        verified: true
    },
    {
        name: "Vikram Malhotra",
        role: "SDE-2 @ Flipkart",
        offer: "₹52 LPA Pack",
        text: "Algo Dojo's test cases are harder than LeetCode. If you can pass these, you can pass anything. Flipkart OA felt easy.",
        avatar: "/testimonials/avatar_vikram.png",
        verified: true
    },
    {
        name: "Kavya Reddy",
        role: "DevOps @ PhonePe",
        offer: "Offer Accepted",
        text: "I needed a switch from Service to Product. Flyeng's roadmap showed me exactly what to learn effectively. Saved me months of aimless study.",
        avatar: "/testimonials/avatar_kavya.png",
        verified: true
    },
    {
        name: "Rahul Verma",
        role: "Intern @ Google BLR",
        offer: "PPO Received",
        text: "From Tier-3 to Google. The AI explained complex DP problems in simple hinglish examples. It really clicked for me.",
        avatar: "/testimonials/avatar_rahul.png",
        verified: true
    },
    {
        name: "Meera Iyer",
        role: "Product @ Razorpay",
        offer: "PM Role",
        text: "Not just for coders. The interview prep helped me structure my product thinking. Got the Senior PM role at Razorpay!",
        avatar: "/testimonials/avatar_meera.png",
        verified: true
    },
    {
        name: "Aditya Nair",
        role: "Full Stack @ Zerodha",
        offer: "Tech Lead",
        text: "The latency in the code execution environment is zero. It feels cleaner than VS Code. Practicing here is actually fun.",
        avatar: "/testimonials/avatar_aditya.png",
        verified: true
    },
    {
        name: "Pooja Sharma",
        role: "SDE @ Microsoft",
        offer: "Hyderabad Office",
        text: "The Resume Architect didn't just format, it optimized keywords. My ATS score went from 40 to 95. Got shortlisted instantly.",
        avatar: "/testimonials/avatar_pooja.png",
        verified: true
    },
    {
        name: "Karthik R",
        role: "Systems @ Atlassian",
        offer: "Remote Role",
        text: "Remote jobs are hard to find. The Global Radar found me a high paying remote gig in US time zone. Life changed.",
        avatar: "/testimonials/avatar_karthik.png",
        verified: true
    },
    {
        name: "Nisha Gupta",
        role: "AI Eng @ Fractal",
        offer: "GenAI Team",
        text: "The GenAI specific mock interviews were spot on. They asked about RAG and LLMs exactly like the interviewer did.",
        avatar: "/testimonials/avatar_nisha.png",
        verified: true
    }
];

// === COMPONENT: INFINITE SCROLL COLUMN ===
const Column = ({
    images,
    y,
    speed = 1
}: {
    images: typeof testimonials,
    y: any,
    speed?: number
}) => {
    return (
        <motion.div
            className="flex flex-col gap-6 w-full relative -top-[450px] will-change-transform transform-gpu"
            style={{ y }}
        >
            {/* Repeater for infinite illusion */}
            {[...images, ...images, ...images].map((user, i) => (
                <div key={i} className="group relative">
                    {/* Glow Behind */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative h-full bg-[#080808]/80 border border-white/5 p-6 rounded-2xl flex flex-col gap-4 overflow-hidden group-hover:border-white/10 transition-colors">
                        {/* Shiny Edge */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <Quote className="absolute top-4 right-6 w-8 h-8 text-white/5 fill-white/5 group-hover:text-white/10 transition-colors" />

                        <p className={cn("text-white/70 text-sm leading-relaxed relative z-10", inter.className)}>
                            "{user.text}"
                        </p>

                        <div className="flex items-center gap-3 mt-auto relative z-10">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                                    <Image src={user.avatar} alt={user.name} width={40} height={40} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" loading="lazy" />
                                </div>
                                {user.verified && (
                                    <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-[2px] border border-[#080808]">
                                        <BadgeCheck className="w-3 h-3 text-white" />
                                    </div>
                                )}
                            </div>
                            <div>
                                <h4 className={cn("text-white font-bold text-sm", inter.className)}>{user.name}</h4>
                                <p className="text-white/40 text-xs">{user.role}</p>
                            </div>
                        </div>

                        {/* Offer Badge */}
                        <div className="w-fit px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wide">
                            {user.offer}
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    )
}

// === MAIN SECTION ===
export function TestimonialsParallax() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -500]); // Reduced speed for readability
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 500]); // Reduced speed for readability
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -400]); // Reduced speed for readability

    return (
        <section
            ref={containerRef}
            className={cn("py-16 md:py-32 bg-[#020202] relative overflow-hidden min-h-[100vh] md:h-[120vh]", inter.className)}
        >
            {/* Atmosphere */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-blue-900/5 blur-[50px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 h-full flex flex-col items-center">

                {/* Minimal Header */}
                <div className="text-center mb-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-bold text-white uppercase tracking-widest">Wall of Love</span>
                    </motion.div>
                    <h2 className={cn("text-3xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4", oswald.className)}>
                        TRUSTED BY <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                            Top 1% Engineers.
                        </span>
                    </h2>
                </div>

                {/* Parallax Grid */}
                {/* Parallax Grid (Desktop) */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl h-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_5%,white_95%,transparent)]">
                    <Column images={testimonials.slice(0, 4)} y={y} speed={1} />
                    <Column images={testimonials.slice(4, 8)} y={y2} speed={1.2} />
                    <Column images={testimonials.slice(8, 12)} y={y3} speed={0.9} />
                </div>

                {/* Mobile Horizontal Carousel */}
                <div className="flex md:hidden w-full overflow-x-auto snap-x snap-mandatory gap-4 pb-8 px-4 scrollbar-hide">
                    {testimonials.map((user, i) => (
                        <div key={i} className="flex-shrink-0 w-[85vw] snap-center">
                            <div className="relative h-full bg-[#080808]/80 border border-white/5 p-6 rounded-2xl flex flex-col gap-4 overflow-hidden">
                                <Quote className="absolute top-4 right-6 w-8 h-8 text-white/5 fill-white/5" />
                                <p className={cn("text-white/70 text-sm leading-relaxed relative z-10", inter.className)}>
                                    "{user.text}"
                                </p>
                                <div className="flex items-center gap-3 mt-auto relative z-10">
                                    <div className="relative">
                                        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                                            <Image src={user.avatar} alt={user.name} width={40} height={40} className="w-full h-full object-cover" loading="lazy" />
                                        </div>
                                        {user.verified && (
                                            <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-[2px] border border-[#080808]">
                                                <BadgeCheck className="w-3 h-3 text-white" />
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className={cn("text-white font-bold text-sm", inter.className)}>{user.name}</h4>
                                        <p className="text-white/40 text-xs">{user.role}</p>
                                    </div>
                                </div>
                                <div className="w-fit px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wide">
                                    {user.offer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

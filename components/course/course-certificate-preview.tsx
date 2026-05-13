'use client'

import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { BadgeCheck, Shield, Zap, Sparkles, Award } from 'lucide-react';
import { CertificateTemplate } from '@/components/certificate-template';

export function CourseCertificatePreview({ courseName }: { courseName: string }) {
    // Mock Data
    const mockId = `CERT-${courseName.substring(0, 3).toUpperCase()}-${new Date().getFullYear()}-001`;

    // 3D Mouse Move Effect Variables
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for the tilt
    const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 150, damping: 20 });

    // Dynamic glare position
    const glareX = useSpring(useTransform(x, [-100, 100], [0, 100]), { stiffness: 150, damping: 20 });
    const glareY = useSpring(useTransform(y, [-100, 100], [0, 100]), { stiffness: 150, damping: 20 });

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <section className="py-12 relative overflow-hidden bg-[#030014]">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left: Marketing Copy */}
                <div className="space-y-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest"
                    >
                        <Sparkles className="w-3 h-3" /> Official Credential
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
                            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#C19A6B]">Gold Standard</span> of Mastery.
                        </h2>
                        <p className="text-lg text-white/50 leading-relaxed max-w-lg">
                            Don't just learn. <span className="text-white font-semibold">Prove it.</span> Upon completion, you'll earn a cryptographically verified certificate that employers trust.
                        </p>
                    </motion.div>

                    <div className="space-y-6 pt-2">
                        {[
                            { icon: Shield, title: "Blockchain Verified", desc: "Tamper-proof digital credentials." },
                            { icon: BadgeCheck, title: "Employer Ready", desc: "One-click add to LinkedIn profile." },
                            { icon: Zap, title: "Instant Issuance", desc: "Available immediately after passing." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + (i * 0.1) }}
                                className="flex items-start gap-4"
                            >
                                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-base">{item.title}</h3>
                                    <p className="text-white/40 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right: 3D Floating Certificate */}
                <div
                    className="relative w-full perspective-2000 py-10 flex justify-center"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* The Floating Container */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                            y: [0, -15, 0],
                            opacity: 1
                        }}
                        transition={{
                            y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                            opacity: { duration: 0.8 }
                        }}
                        style={{ rotateX, rotateY }}
                        className="relative z-20 transform-preserve-3d cursor-pointer"
                    >
                        {/* Shadow / Glow beneath - Optimized */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-blue-600/20 blur-xl rounded-[30px] opacity-75 will-change-transform" />

                        {/* The Actual Card Container */}
                        <div className="relative rounded-lg overflow-hidden shadow-2xl bg-[#0a0a0a] border border-white/10 ring-1 ring-white/20 will-change-transform">

                            {/* Scaled Certificate Component */}
                            <div style={{ width: '500px', height: '375px', overflow: 'hidden' }}>
                                <div style={{ transform: 'scale(0.625)', transformOrigin: 'top left', width: '800px', height: '600px' }}>
                                    <CertificateTemplate
                                        studentName="Your Name"
                                        courseName={courseName}
                                        score="20"
                                        totalQuestions="20"
                                        issuedDate="10th February, 2026"
                                        certificateId={mockId}
                                    />
                                </div>
                            </div>

                            {/* Cinematic Glare Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent z-50 pointer-events-none mix-blend-overlay"
                                style={{
                                    background: `linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.1) 50%, transparent 54%)`,
                                    x: useTransform(glareX, [0, 100], ['-100%', '100%']),
                                    y: useTransform(glareY, [0, 100], ['-100%', '100%']),
                                }}
                            />

                            {/* Static Shine for idle state */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 z-40 pointer-events-none animate-pulse" />

                        </div>
                    </motion.div>

                    {/* Floating Particles (Decor) */}
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -40, 0],
                                rotate: [0, 10, -10, 0],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 5 + i,
                                repeat: Infinity,
                                delay: i * 2
                            }}
                            className="absolute z-0 w-32 h-32 bg-amber-500/5 blur-[40px] rounded-full pointer-events-none will-change-transform"
                            style={{
                                top: `${20 + i * 20}%`,
                                right: `${10 - i * 10}%`
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
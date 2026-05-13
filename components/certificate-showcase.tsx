'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Calendar, Award } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CertificateShowcase() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#050505] to-[#030014] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left: Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
                        <Award className="w-3 h-3" /> Industry Recognized
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Earn Credentials <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">That Matter.</span>
                    </h2>
                    <p className="text-xl text-white/60 leading-relaxed max-w-lg">
                        Prove your skills with verifiable, digitally signed certificates linked directly to your GitHub and LinkedIn profiles. Included with every course.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 shrink-0">
                                <BadgeCheck className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Blockchain Verified</h3>
                                <p className="text-white/40 text-sm">Tamper-proof signatures using HmacSHA256.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 shrink-0">
                                <Award className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Instant LinkedIn Share</h3>
                                <p className="text-white/40 text-sm">One-click add to profile with permanent link.</p>
                            </div>
                        </div>
                    </div>

                    <Link href="/courses">
                        <Button className="mt-8 h-14 px-8 bg-white text-black hover:bg-gray-100 rounded-full font-bold text-lg shadow-lg shadow-white/5">
                            Start Earning Now
                        </Button>
                    </Link>
                </div>

                {/* Right: The Certificate */}
                <div className="relative perspective-1000">
                    <motion.div
                        initial={{ rotateY: -10, rotateX: 5 }}
                        animate={{ rotateY: [-10, 10, -10], rotateX: [5, -5, 5] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="bg-white text-black p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden border-8 border-double border-gray-200 aspect-[1.414/1] w-full max-w-[600px] mx-auto transform-gpu"
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                        {/* Content */}
                        <div className="relative z-10 text-center flex flex-col items-center justify-between h-full py-4">
                            <div className="flex justify-center mb-4">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl md:text-2xl">FC</div>
                            </div>

                            <div className="space-y-2">
                                <p className="text-gray-500 uppercase tracking-widest text-[10px] md:text-xs">Certificate of Achievement</p>
                                <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                                    Sachin Gurjar
                                </h1>
                                <p className="text-gray-600 text-sm md:text-base max-w-xs mx-auto">
                                    Has successfully mastered the curriculum and passed the rigorous assessment for
                                </p>
                                <h2 className="text-xl md:text-2xl font-bold text-blue-900 mt-2">Data Structures & Algorithms</h2>
                            </div>

                            <div className="grid grid-cols-3 gap-4 w-full border-t border-b border-gray-100 py-4 mt-4">
                                <div>
                                    <p className="text-gray-400 text-[10px] uppercase mb-1">Score</p>
                                    <p className="font-bold text-sm md:text-lg">20 / 20</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-[10px] uppercase mb-1">Issued</p>
                                    <p className="font-bold text-sm md:text-lg">Dec 24, 2026</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-[10px] uppercase mb-1">ID</p>
                                    <p className="font-mono text-[10px] md:text-xs text-ellipsis overflow-hidden">CERT-SG-DSA-001</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-end w-full pt-4">
                                <div className="text-left">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-black/5 rounded-lg flex items-center justify-center">
                                        {/* Mock QR */}
                                        <div className="w-full h-full p-1 opacity-50 bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=FlyengCareer')] bg-cover"></div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="w-24 md:w-32 border-b-2 border-black mb-1">
                                        <div className="w-full text-center font-cursive text-xs opacity-60">Signed</div>
                                    </div>
                                    <p className="font-bold text-xs md:text-sm">Flyeng Career</p>
                                </div>
                            </div>
                        </div>

                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -skew-x-12 translate-x-[-100%] animate-shine" />
                    </motion.div>

                    {/* Floating Elements (Decoration) */}
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg flex items-center justify-center transform rotate-12 z-20"
                    >
                        <div className="text-center text-black font-bold leading-tight">
                            <span className="text-3xl">Top</span><br />
                            <span className="text-sm">1% Talent</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

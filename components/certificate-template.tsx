'use client'

import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

interface CertificateTemplateProps {
    studentName: string;
    courseName: string;
    score: number | string;
    totalQuestions?: number | string;
    issuedDate: string;
    certificateId: string;
    qrCodeUrl?: string;
}

export function CertificateTemplate({
    studentName,
    courseName,
    score,
    totalQuestions = 20,
    issuedDate,
    certificateId,
    qrCodeUrl
}: CertificateTemplateProps) {
    return (
        /* 
           FIXED DIMENSION: 800px x 600px (4:3)
           This gives us more vertical room than A4 Landscape.
        */
        <div
            style={{ width: '800px', height: '600px' }}
            className="bg-white relative overflow-hidden shadow-2xl text-[#1e293b] select-none flex-shrink-0 font-sans"
        >
            {/* --- DECORATIVE ELEMENTS --- */}

            {/* Right Side Accent (Navy) */}
            <div className="absolute top-0 bottom-0 right-0 w-[240px] bg-[#0f172a] transform skew-x-[-12deg] origin-bottom-right translate-x-20 z-0">
                <div className="absolute inset-0 bg-[#1e293b] opacity-50"
                    style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                />
            </div>

            {/* Gold Strip */}
            <div className="absolute top-0 bottom-0 right-[220px] w-[12px] bg-[#d4af37] transform skew-x-[-12deg] origin-bottom-right translate-x-20 z-10" />

            {/* --- CONTENT --- */}
            <div className="absolute inset-0 z-20 flex flex-col justify-between py-12 px-16">

                {/* 1. Header */}
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-[#0f172a] text-white rounded-lg flex items-center justify-center shadow-lg">
                            <span className="font-serif font-bold italic text-2xl">FC</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="uppercase tracking-[0.2em] font-bold text-[#0f172a] text-sm">
                                Flyeng Career
                            </h1>
                            <p className="text-[10px] text-[#64748b] tracking-wider uppercase">
                                Institute of Engineering
                            </p>
                        </div>
                    </div>

                    <div className="text-right text-white/90 z-20 mr-8 mt-2">
                        <p className="font-bold tracking-widest uppercase text-xs opacity-70">Certificate ID</p>
                        <p className="font-mono text-sm">{certificateId}</p>
                    </div>
                </div>

                {/* 2. Main Body */}
                <div className="flex-1 flex flex-col justify-center max-w-[500px]">
                    <p className="font-serif italic text-2xl text-[#64748b] mb-4">
                        This certifies that
                    </p>

                    <div className="border-l-4 border-[#d4af37] pl-6 py-2 mb-8">
                        <h2 className="font-serif font-bold text-[#0f172a] text-5xl leading-tight text-wrap">
                            {studentName}
                        </h2>
                    </div>

                    <p className="font-serif italic text-xl text-[#64748b] mb-2">
                        Has successfully demonstrated proficiency in
                    </p>

                    <h3 className="font-bold text-[#0f172a] text-3xl uppercase tracking-wide leading-tight">
                        {courseName}
                    </h3>

                    <div className="mt-6 flex items-center gap-3">
                        <div className="bg-[#f1f5f9] px-4 py-2 rounded-lg border border-[#e2e8f0] flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-bold text-[#0f172a]">Verified Score: {score}/{totalQuestions}</span>
                        </div>
                    </div>
                </div>

                {/* 3. Footer */}
                <div className="flex items-end justify-between max-w-[500px] border-t border-[#e2e8f0] pt-6">

                    <div>
                        <p className="font-bold text-[#0f172a] text-lg">
                            {issuedDate}
                        </p>
                        <p className="text-[10px] uppercase tracking-widest text-[#94a3b8] font-bold mt-1">
                            Date Issued
                        </p>
                    </div>

                    <div className="text-right">
                        <div className="h-10 mb-1 flex justify-end">
                            <p className="font-cursive text-3xl text-[#0f172a] pr-2">Flyeng Director</p>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-[#94a3b8] font-bold">
                            Authorized Signature
                        </p>
                    </div>
                </div>

                {/* Gold Seal (Absolute Positioned Bottom Right area) */}
                <div className="absolute bottom-12 right-12 z-30">
                    <div className="relative w-32 h-32 rounded-full bg-white shadow-2xl p-1.5 flex items-center justify-center">
                        <div className="w-full h-full rounded-full border-[4px] border-[#d4af37] border-double flex items-center justify-center bg-[#fffbf0]">
                            <div className="text-center transform rotate-[-10deg]">
                                <Award className="w-8 h-8 text-[#d4af37] mx-auto mb-1" />
                                <p className="font-bold text-[#0f172a] text-[10px] uppercase tracking-widest leading-none">Official</p>
                                <p className="font-serif font-bold text-[#0f172a] text-lg leading-none">Seal</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* QR Code (Absolute Bottom Right Corner) */}
                {qrCodeUrl && (
                    <div className="absolute top-[200px] right-12 z-30 bg-white p-2 rounded-lg shadow-sm">
                        <img src={qrCodeUrl} alt="QR" className="w-20 h-20" />
                    </div>
                )}

            </div>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Great+Vibes&family=Inter:wght@300;400;600;800&display=swap');
                
                .font-serif { font-family: 'Playfair Display', serif; }
                .font-cursive { font-family: 'Great Vibes', cursive; }
                .font-sans { font-family: 'Inter', sans-serif; }
            `}</style>
        </div>
    );
}

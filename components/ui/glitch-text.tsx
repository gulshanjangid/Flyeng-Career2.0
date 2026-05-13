'use client';

import { motion } from 'framer-motion';

interface GlitchTextProps {
    text: string;
    className?: string;
}

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
    return (
        <div className={`relative inline-block group ${className}`}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-100 ease-in-out">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyan-500 opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-100 ease-in-out">
                {text}
            </span>
            
            {/* CSS Animation for continuous subtle glitch if desired, but hover is cleaner for 'lighter' feel */}
            <style jsx>{`
                @keyframes glitch-anim-1 {
                    0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
                    20% { clip-path: inset(60% 0 1% 0); transform: translate(1px, -1px); }
                    40% { clip-path: inset(40% 0 20% 0); transform: translate(-1px, 2px); }
                    60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
                    80% { clip-path: inset(10% 0 60% 0); transform: translate(1px, 1px); }
                    100% { clip-path: inset(30% 0 50% 0); transform: translate(-2px, -1px); }
                }
            `}</style>
        </div>
    );
};

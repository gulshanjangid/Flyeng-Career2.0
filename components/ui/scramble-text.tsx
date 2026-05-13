"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const CIPHER_CHARS = "-_~=+*&^%$#@!0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface ScrambleTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    revealDuration?: number; // Time per character to settle
}

export function ScrambleText({
    text,
    className = "",
    delay = 0,
    duration = 2000
}: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState(text.split("").map(() => " "));
    const [isAnimating, setIsAnimating] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView && !isAnimating) {
            startAnimation();
        }
    }, [isInView]);

    const startAnimation = () => {
        setIsAnimating(true);
        let startTime = Date.now();
        let frameId: number;

        const animate = () => {
            let now = Date.now();
            let progress = Math.min((now - startTime - (delay * 1000)) / duration, 1);

            if (now - startTime < delay * 1000) {
                frameId = requestAnimationFrame(animate);
                return;
            }

            if (progress < 1) {
                let nextText = text.split("").map((char, i) => {
                    // If we are past the progress point for this char, show real char
                    // Simple ease-in reveal: characters reveal from left to right as progress increases
                    const charProgress = i / text.length;
                    if (progress > charProgress) {
                        return char;
                    }
                    // Otherwise show random char
                    if (char === " ") return " ";
                    return CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
                });
                setDisplayText(nextText);
                frameId = requestAnimationFrame(animate);
            } else {
                setDisplayText(text.split(""));
                setIsAnimating(false);
            }
        };

        frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    };

    return (
        <span ref={ref} className={className}>
            {displayText.map((char, i) => (
                <span key={i} className="inline-block w-[0.6em] text-center">{char}</span>
            ))}
        </span>
    );
}

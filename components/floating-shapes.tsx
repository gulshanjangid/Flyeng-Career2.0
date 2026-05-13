"use client";

import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export function FloatingShapes() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth mouse movement with slightly increased damping for less frequent updates
    const smoothX = useSpring(mouseX, { stiffness: 40, damping: 25 });
    const smoothY = useSpring(mouseY, { stiffness: 40, damping: 25 });

    useEffect(() => {
        let frameId: number;
        const handleMouseMove = (e: MouseEvent) => {
             // Throttling via requestAnimationFrame
            if (frameId) return;
            frameId = requestAnimationFrame(() => {
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;
                const x = clientX / innerWidth;
                const y = clientY / innerHeight;
                mouseX.set(x);
                mouseY.set(y);
                frameId = 0;
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (frameId) cancelAnimationFrame(frameId);
        };
    }, [mouseX, mouseY]);

    // Parallax transforms - Reduced range for subtlety and performance
    const x1 = useTransform(smoothX, [0, 1], [15, -15]);
    const y1 = useTransform(smoothY, [0, 1], [15, -15]);

    const x2 = useTransform(smoothX, [0, 1], [-20, 20]);
    const y2 = useTransform(smoothY, [0, 1], [-20, 20]);

    const x3 = useTransform(smoothX, [0, 1], [10, -10]);
    const y3 = useTransform(smoothY, [0, 1], [-10, 10]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ transform: 'translate3d(0,0,0)' }}>
            {/* Shape 1: Cyan Glow - Reduced Blur */}
            <motion.div
                style={{ x: x1, y: y1 }}
                animate={{
                    scale: [1, 1.1, 1], // Reduced scale range
                    opacity: [0.1, 0.15, 0.1], // Reduced opacity range
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[60px] will-change-transform translate-z-0"
            />

            {/* Shape 2: Purple Nebula - Reduced Blur & Animation Complexity */}
            <motion.div
                style={{ x: x2, y: y2 }}
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.05, 0.1, 0.05],
                    rotate: [0, 45, 0], // Reduced rotation range
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-[80px] will-change-transform translate-z-0"
            />

            {/* Shape 3: Blue Deep - Reduced Blur */}
            <motion.div
                style={{ x: x3, y: y3 }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.08, 0.15, 0.08],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[40%] left-[60%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[50px] will-change-transform translate-z-0"
            />
        </div>
    );
}

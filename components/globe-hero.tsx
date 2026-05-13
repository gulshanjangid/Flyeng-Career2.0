"use client"

import React, { useEffect, useRef } from 'react';

export const GlobeHero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.parentElement?.clientWidth || window.innerWidth;
        let height = canvas.parentElement?.clientHeight || 600;
        canvas.width = width;
        canvas.height = height;

        const DOTS_AMOUNT = 1000;
        const DOT_RADIUS = 1.5;
        const GLOBE_RADIUS = width < 768 ? 150 : 250;
        const PROJECTION_CENTER_X = width / 2;
        const PROJECTION_CENTER_Y = height / 2;
        const FIELD_OF_VIEW = 800;

        class Dot {
            x: number;
            y: number;
            z: number;
            xProject: number;
            yProject: number;
            sizeProjection: number;
            theta: number;
            phi: number;

            constructor() {
                this.theta = Math.random() * 2 * Math.PI;
                this.phi = Math.acos((Math.random() * 2) - 1);
                this.x = 0;
                this.y = 0;
                this.z = 0;
                this.xProject = 0;
                this.yProject = 0;
                this.sizeProjection = 0;
            }

            project(sin: number, cos: number) {
                const rotX = GLOBE_RADIUS * Math.sin(this.phi) * Math.cos(this.theta);
                const rotY = GLOBE_RADIUS * Math.cos(this.phi);
                const rotZ = GLOBE_RADIUS * Math.sin(this.phi) * Math.sin(this.theta) + GLOBE_RADIUS;

                // Rotation around Y axis
                this.x = rotX * cos - rotZ * sin;
                this.y = rotY;
                this.z = rotZ * cos + rotX * sin;

                const scale = FIELD_OF_VIEW / (FIELD_OF_VIEW + this.z);
                this.xProject = (this.x * scale) + PROJECTION_CENTER_X;
                this.yProject = (this.y * scale) + PROJECTION_CENTER_Y;
                this.sizeProjection = scale;
            }

            draw(sin: number, cos: number) {
                this.project(sin, cos);
                if (!ctx) return;

                const alpha = Math.max(0, (this.sizeProjection * 0.6) - 0.2); // Fade far dots
                ctx.fillStyle = `rgba(6, 182, 212, ${alpha})`; // Cyan

                ctx.beginPath();
                ctx.arc(this.xProject, this.yProject, DOT_RADIUS * this.sizeProjection, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const dots: Dot[] = [];
        for (let i = 0; i < DOTS_AMOUNT; i++) {
            dots.push(new Dot());
        }

        let rotation = 0;
        let animationId: number;

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            rotation += 0.003;
            const sineRotation = Math.sin(rotation);
            const cosineRotation = Math.cos(rotation);

            for (let i = 0; i < dots.length; i++) {
                dots[i].draw(sineRotation, cosineRotation);
            }

            animationId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = canvas.parentElement?.clientWidth || window.innerWidth;
            height = canvas.parentElement?.clientHeight || 600;
            canvas.width = width;
            canvas.height = height;
        }

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-black" />
            {/* Glow behind globe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full" />
            <canvas ref={canvasRef} className="relative z-10" />
        </div>
    );
};

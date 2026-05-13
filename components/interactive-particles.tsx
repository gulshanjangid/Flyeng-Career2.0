"use client"

import { useEffect, useRef } from "react"

export function InteractiveParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d", { alpha: true })
        if (!ctx) return

        let animationFrameId: number
        let particles: {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            baseX: number;
            baseY: number;
            density: number;
        }[] = []

        let width = 0
        let height = 0
        let mouse = { x: -1000, y: -1000, radius: 100 }

        // Config: Micro-interactions
        const particleCount = 25 // Reduced from 50 for better performance
        const connectionDistance = 80 // Short range
        const mouseRadius = 80 // Tight interaction

        const resize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
            initParticles()
        }

        const initParticles = () => {
            particles = []
            // Reduce particles on mobile for performance
            const isMobile = width < 768;
            
            // optimization: reduce count on mobile instead of stopping
            const activeParticleCount = isMobile ? 20 : particleCount;

            for (let i = 0; i < activeParticleCount; i++) {
                const x = Math.random() * width
                const y = Math.random() * height
                particles.push({
                    x,
                    y,
                    baseX: x,
                    baseY: y,
                    vx: (Math.random() - 0.5) * 0.2, // Slower
                    vy: (Math.random() - 0.5) * 0.2,
                    size: Math.random() * 1.5 + 0.1, // Tiny stars
                    density: (Math.random() * 30) + 1
                })
            }
        }

        const onMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouse.x = e.clientX - rect.left
            mouse.y = e.clientY - rect.top
        }

        const draw = () => {
            // Optimization: Don't animate if no particles
            if (particles.length === 0) return

            ctx.clearRect(0, 0, width, height)

            // Update and Draw Particles
            ctx.fillStyle = "rgba(6, 182, 212, 0.2)" // Deep Cyan, Low Opacity

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i]

                // Mouse Interaction
                const dx = mouse.x - p.x
                const dy = mouse.y - p.y
                const distance = Math.sqrt(dx * dx + dy * dy)

                let forceDirectionX = dx / distance
                let forceDirectionY = dy / distance
                let force = (mouseRadius - distance) / mouseRadius

                // Repulsion
                if (distance < mouseRadius) {
                    const directionX = forceDirectionX * force * p.density
                    const directionY = forceDirectionY * force * p.density
                    p.x -= directionX
                    p.y -= directionY
                } else {
                    // Return to base (Elasticity)
                    if (p.x !== p.baseX) {
                        let dx = p.x - p.baseX
                        p.x -= dx / 20
                    }
                    if (p.y !== p.baseY) {
                        let dy = p.y - p.baseY
                        p.y -= dy / 20
                    }
                }

                // Base drift
                // p.x += p.vx
                // p.y += p.vy

                // Draw
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fill()
            }

            // Draw Connections (Constellations)
            // Only close ones
            /*
            ctx.strokeStyle = "rgba(100, 200, 255, 0.05)"
            ctx.lineWidth = 0.5
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x
                    let dy = particles[a].y - particles[b].y
                    let distance = Math.sqrt(dx * dx + dy * dy)
                    if (distance < connectionDistance) {
                        ctx.beginPath()
                        ctx.moveTo(particles[a].x, particles[a].y)
                        ctx.lineTo(particles[b].x, particles[b].y)
                        ctx.stroke()
                    }
                }
            }
            */

            animationFrameId = requestAnimationFrame(draw)
        }

        // Initialize
        window.addEventListener("resize", resize)
        window.addEventListener("mousemove", onMouseMove)
        resize()
        draw()

        return () => {
            window.removeEventListener("resize", resize)
            window.removeEventListener("mousemove", onMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            style={{ mixBlendMode: 'screen' }}
        />
    )
}

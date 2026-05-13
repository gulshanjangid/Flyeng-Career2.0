"use client"

import { useEffect, useRef } from "react"

export function CinematicBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d", { alpha: false })
        if (!ctx) return

        let animationFrameId: number
        let particles: { x: number; y: number; vx: number; vy: number; size: number }[] = []
        let width = 0
        let height = 0

        // Config
        const particleCount = 100 // Smooth performance count
        const connectionDistance = 150
        const speedBase = 0.2

        const resize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
            initParticles()
        }

        const initParticles = () => {
            particles = []
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * speedBase,
                    vy: (Math.random() - 0.5) * speedBase,
                    size: Math.random() * 2 + 1,
                })
            }
        }

        const draw = () => {
            // 1. Clear with deep fade for "trail" feel, or solid for crispness. 
            // Solid is better for "Elegant/Sharp" look.
            ctx.fillStyle = "#030014"
            ctx.fillRect(0, 0, width, height)

            // 2. Update and Draw Particles
            ctx.strokeStyle = "rgba(100, 200, 255, 0.15)"
            ctx.lineWidth = 0.5

            for (let i = 0; i < particleCount; i++) {
                const p = particles[i]

                // Move
                p.x += p.vx
                p.y += p.vy

                // Bounce
                if (p.x < 0 || p.x > width) p.vx *= -1
                if (p.y < 0 || p.y > height) p.vy *= -1

                // Draw Particle
                ctx.fillStyle = "rgba(200, 240, 255, 0.5)"
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fill()

                // Connect Neighbors (Neural Network)
                // Optimization: Single loop nested, but check only forward indices to avoid double draw
                for (let j = i + 1; j < particleCount; j++) {
                    const p2 = particles[j]
                    const dx = p.x - p2.x
                    const dy = p.y - p2.y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < connectionDistance) {
                        const opacity = 1 - dist / connectionDistance
                        ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.2})`
                        ctx.beginPath()
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                }
            }

            animationFrameId = requestAnimationFrame(draw)
        }

        // Initialize
        window.addEventListener("resize", resize)
        resize()
        draw()

        return () => {
            window.removeEventListener("resize", resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ background: "#030014" }}
        />
    )
}

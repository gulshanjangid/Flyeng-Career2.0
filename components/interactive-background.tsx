'use client'

import { useEffect, useRef } from 'react'

export function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []
        let mouse = { x: 0, y: 0 }

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initParticles()
        }

        class Particle {
            x: number
            y: number
            size: number
            speedX: number
            speedY: number
            color: string

            constructor() {
                this.x = Math.random() * canvas!.width
                this.y = Math.random() * canvas!.height
                this.size = Math.random() * 2 + 0.5
                this.speedX = Math.random() * 1 - 0.5
                this.speedY = Math.random() * 1 - 0.5
                // Cyan/Blue/Purple theme colors
                const colors = ['rgba(6,182,212,', 'rgba(59,130,246,', 'rgba(168,85,247,']
                this.color = colors[Math.floor(Math.random() * colors.length)]
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                if (this.x > canvas!.width) this.x = 0
                if (this.x < 0) this.x = canvas!.width
                if (this.y > canvas!.height) this.y = 0
                if (this.y < 0) this.y = canvas!.height

                // Mouse interaction
                const dx = mouse.x - this.x
                const dy = mouse.y - this.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                if (distance < 100) {
                    const forceDirectionX = dx / distance
                    const forceDirectionY = dy / distance
                    const force = (100 - distance) / 100
                    const directionX = forceDirectionX * force * 2
                    const directionY = forceDirectionY * force * 2
                    this.x -= directionX
                    this.y -= directionY
                }
            }

            draw() {
                if (!ctx) return
                ctx.fillStyle = this.color + '0.5)'
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        const initParticles = () => {
            particles = []
            const numberOfParticles = (canvas.width * canvas.height) / 15000
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle())
            }
        }

        const animate = () => {
            if (!ctx) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw connections
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x
                    const dy = particles[a].y - particles[b].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance / 1000})`
                        ctx.lineWidth = 1
                        ctx.beginPath()
                        ctx.moveTo(particles[a].x, particles[a].y)
                        ctx.lineTo(particles[b].x, particles[b].y)
                        ctx.stroke()
                    }
                }
                particles[a].update()
                particles[a].draw()
            }
            animationFrameId = requestAnimationFrame(animate)
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.x
            mouse.y = e.y
        }

        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', handleMouseMove)

        resize()
        animate()

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-40"
            style={{ background: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)' }}
        />
    )
}

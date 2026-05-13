"use client"

import { useEffect, useRef } from "react"

export function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const colors = ["#06b6d4", "#a855f7", "#ffffff", "#f59e0b", "#ec4899"]

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      color: string
      size: number
      life: number
      
      constructor() {
        this.x = canvas!.width / 2
        this.y = canvas!.height / 2
        this.vx = (Math.random() - 0.5) * 20
        this.vy = (Math.random() - 0.5) * 20
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.size = Math.random() * 5 + 2
        this.life = 100
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.vy += 0.5 // gravity
        this.life -= 1
        this.size *= 0.96
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.life / 100
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    const createExplosion = () => {
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle())
      }
    }

    createExplosion()

    const animate = () => {
        if (!canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update()
        particles[i].draw(ctx)
        
        if (particles[i].life <= 0) {
          particles.splice(i, 1)
        }
      }

      if (particles.length > 0) {
        requestAnimationFrame(animate)
      }
    }

    animate()

    const handleResize = () => {
        if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[100]"
    />
  )
}

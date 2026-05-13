"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue } from "framer-motion"

export function VoidTunnel() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let width = window.innerWidth
        let height = window.innerHeight

        const stars: Array<{ x: number, y: number, z: number }> = []
        const numStars = 1000 // Optimized count
        const speed = 2

        // Init stars
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width - width / 2,
                y: Math.random() * height - height / 2,
                z: Math.random() * width
            })
        }

        const handleResize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
        }
        window.addEventListener("resize", handleResize)
        handleResize()

        const handleMouseMove = (e: MouseEvent) => {
            // Parallax shift target
            const cx = width / 2;
            const cy = height / 2;
            mouseX.set((e.clientX - cx) * 0.5)
            mouseY.set((e.clientY - cy) * 0.5)
        }
        window.addEventListener("mousemove", handleMouseMove)

        const render = () => {
            const mx = mouseX.get()
            const my = mouseY.get()

            ctx.fillStyle = "black"
            ctx.fillRect(0, 0, width, height)

            ctx.fillStyle = "white"
            const cx = width / 2
            const cy = height / 2

            for (let i = 0; i < numStars; i++) {
                const star = stars[i]

                // Move Star
                star.z -= speed
                if (star.z <= 0) {
                    star.x = Math.random() * width - width / 2
                    star.y = Math.random() * height - height / 2
                    star.z = width
                }

                // Project
                const k = 128.0 / star.z
                const px = star.x * k + cx + mx * (k * 2)
                const py = star.y * k + cy + my * (k * 2)

                if (px >= 0 && px <= width && py >= 0 && py <= height) {
                    const size = (1 - star.z / width) * 2.5
                    const alpha = (1 - star.z / width)
                    ctx.globalAlpha = alpha
                    ctx.beginPath()
                    ctx.arc(px, py, size, 0, Math.PI * 2)
                    ctx.fill()
                }
            }
            animationFrameId = requestAnimationFrame(render)
        }
        render()

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("mousemove", handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 w-full h-full opacity-60"
        />
    )
}

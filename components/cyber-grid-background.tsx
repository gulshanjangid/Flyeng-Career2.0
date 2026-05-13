"use client"
import { useEffect, useRef } from "react"

export function CyberGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", resize)

    const gridSize = 50
    let scannerY = 0

    const anim = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)"
      ctx.fillRect(0, 0, w, h)

      // Grid Lines
      ctx.strokeStyle = "rgba(34, 211, 238, 0.07)" // Cyan grid
      ctx.lineWidth = 1

      ctx.beginPath()
      for(let x = 0; x < w; x += gridSize) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
      }
      for(let y = 0; y < h; y += gridSize) {
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
      }
      ctx.stroke()

      // Scanner Sweep
      scannerY += 1.5
      if (scannerY > h + 200) scannerY = -200

      const scanGradient = ctx.createLinearGradient(0, scannerY - 100, 0, scannerY)
      scanGradient.addColorStop(0, "rgba(34, 211, 238, 0)")
      scanGradient.addColorStop(0.8, "rgba(34, 211, 238, 0.1)")
      scanGradient.addColorStop(1, "rgba(34, 211, 238, 0.6)")

      ctx.fillStyle = scanGradient
      ctx.fillRect(0, scannerY - 100, w, 100)
      
      // Scanner focal line
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
      ctx.fillRect(0, scannerY - 1, w, 2)
      
      // Data Nodes popping at intersections
      for(let i=0; i<15; i++){
         if (Math.random() > 0.8) {
           let nx = Math.floor(Math.random() * (w/gridSize)) * gridSize
           let ny = Math.floor(Math.random() * (h/gridSize)) * gridSize
           ctx.fillStyle = "rgba(34, 211, 238, 0.9)"
           ctx.shadowBlur = 10;
           ctx.shadowColor = "rgba(34, 211, 238, 1)";
           ctx.beginPath()
           ctx.arc(nx, ny, 3, 0, Math.PI * 2)
           ctx.fill()
           ctx.shadowBlur = 0;
         }
      }

      requestAnimationFrame(anim)
    }
    const id = requestAnimationFrame(anim)
    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(id)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-[0.35]"
    />
  )
}

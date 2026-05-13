'use client'

import { useEffect, useState, useRef } from 'react'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const mousePos = useRef({ x: 0, y: 0 })
  const currentRingPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `* { cursor: none !important; }`
    document.head.appendChild(style)

    const handleMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      setPos({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseOut = () => {
      setIsVisible(false)
    }

    // Smooth ring animation with lerp
    const animateRing = () => {
      currentRingPos.current.x += (mousePos.current.x - currentRingPos.current.x) * 0.2
      currentRingPos.current.y += (mousePos.current.y - currentRingPos.current.y) * 0.2
      
      setRingPos({
        x: currentRingPos.current.x,
        y: currentRingPos.current.y,
      })
      
      requestAnimationFrame(animateRing)
    }

    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    
    animateRing()

    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.head.removeChild(style)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main Dot - Instant */}
      <div
        className="pointer-events-none fixed z-50 mix-blend-difference"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="h-2 w-2 rounded-full bg-white" />
      </div>

      {/* Trailing Ring - Smooth with faster easing */}
      <div
        className="pointer-events-none fixed z-50 transition-transform duration-100 ease-out"
        style={{
          left: `${ringPos.x}px`,
          top: `${ringPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`,
        }}
      >
        <div
          className={`h-8 w-8 rounded-full border border-white/50 transition-all duration-200 ${
            isHovering ? 'bg-white/20 border-white/80' : ''
          }`}
        />
      </div>
    </>
  )
}

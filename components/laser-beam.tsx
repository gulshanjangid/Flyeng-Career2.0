"use client"

import React, { useEffect, useRef } from "react"
import { Renderer, Program, Mesh, Triangle } from "ogl"

export function LaserBeam() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const renderer = new Renderer({ alpha: true, dpr: 2 })
        const gl = renderer.gl
        const canvas = gl.canvas
        containerRef.current.appendChild(canvas)
        canvas.style.cssText = "width: 100%; height: 100%; display: block; object-fit: cover;"

        const geometry = new Triangle(gl)

        const vertex = `
      attribute vec2 uv;
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
      }
    `

        const fragment = `
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;
      varying vec2 vUv;

      // Random / Noise functions
      float random(in vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      float noise(in vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      float fbm(in vec2 st) {
          float v = 0.0;
          float a = 0.5;
          for (int i = 0; i < 5; i++) {
              v += a * noise(st);
              st = st * 2.0;
              a *= 0.5;
          }
          return v;
      }

      void main() {
          vec2 uv = vUv;
          
          // Center the beam (x-axis)
          float x = uv.x - 0.5;
          
          // Vertical movement for the noise (smoke rising)
          float time = uTime * 0.5;
          
          // Noise fields using FBM
          // 1. Core beam distortion
          float beamNoise = fbm(vec2(x * 20.0, uv.y * 5.0 - time * 2.0));
          
          // 2. Rising Wisps/Smoke
          float smokeNoise = fbm(vec2(x * 8.0, uv.y * 3.0 - time));
          
          // Beam Intensity Logic
          // Base beam is 1/abs(x) essentially, but we soften it
          float width = 0.002; // Thinner for "laser" look
          float intensity = width / (abs(x) + 0.001);
          
          // Modulate intensity with noise
          intensity *= (0.8 + 0.5 * beamNoise);
          
          // Add "wisps" heavily concentrated near the bottom
          float bottomFade = smoothstep(0.0, 0.3, 1.0 - uv.y); // Stronger at bottom
          intensity += smokeNoise * bottomFade * 0.5 * (1.0 - abs(x) * 4.0);
          
          // Color Mapping
          // Deep Blue / Purple Core -> Cyan / White Hot Center
          vec3 coreColor = vec3(0.1, 0.3, 1.0); // Blue
          vec3 hotColor = vec3(0.8, 0.9, 1.0); // White/Cyan
          
          // Mix colors based on intensity
          vec3 finalColor = mix(vec3(0.0), coreColor, smoothstep(0.0, 0.5, intensity));
          finalColor = mix(finalColor, hotColor, smoothstep(0.5, 2.0, intensity));
          
          // Add a global vertical fade (beam shoots up)
          float verticalFade = smoothstep(0.0, 0.2, uv.y); // Fade in at very bottom
          finalColor *= verticalFade;

          gl_FragColor = vec4(finalColor, 1.0);
      }
    `

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: new Float32Array([gl.canvas.width, gl.canvas.height]) },
            },
        })

        const mesh = new Mesh(gl, { geometry, program })

        // Resize handler
        const resize = () => {
            renderer.setSize(containerRef.current?.offsetWidth || window.innerWidth, containerRef.current?.offsetHeight || window.innerHeight)
            program.uniforms.uResolution.value = new Float32Array([gl.canvas.width, gl.canvas.height])
        }
        window.addEventListener("resize", resize)
        resize()

        // Animation Loop
        let animationId: number
        const update = (t: number) => {
            animationId = requestAnimationFrame(update)
            program.uniforms.uTime.value = t * 0.001
            renderer.render({ scene: mesh })
        }
        animationId = requestAnimationFrame(update)

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener("resize", resize)
            containerRef.current?.removeChild(canvas)
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className="absolute inset-x-0 bottom-0 h-[120%] w-full pointer-events-none mix-blend-screen opacity-90 z-0"
            style={{ maskImage: "linear-gradient(to top, black 80%, transparent 100%)" }}
        />
    )
}

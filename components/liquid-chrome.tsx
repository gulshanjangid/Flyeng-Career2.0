"use client"

import { Renderer, Camera, Transform, Plane, Program, Mesh, Vec2 } from "ogl"
import { useEffect, useRef } from "react"

const vertex = `
    attribute vec3 position;
    attribute vec2 uv;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`

const fragment = `
    precision highp float;
    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec2 uMouse;
    varying vec2 vUv;

    // Simplex noise function
    vec3 hash33(vec3 p3) {
        p3 = fract(p3 * vec3(.1031, .1030, .0973));
        p3 += dot(p3, p3.yxz + 33.33);
        return fract((p3.xxy + p3.yxx) * p3.zyx);
    }

    float noise(vec3 p) {
        const float K1 = 0.333333333;
        const float K2 = 0.166666667;
        vec3 i = floor(p + (p.x + p.y + p.z) * K1);
        vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
        vec3 e = step(vec3(0.0), d0 - d0.yzx);
        vec3 i1 = e * (1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy * (1.0 - e);
        vec3 d1 = d0 - i1 + K2;
        vec3 d2 = d0 - i2 + 2.0 * K2;
        vec3 d3 = d0 - 1.0 + 3.0 * K2;
        vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);
        vec4 n = h * h * h * h * vec4(dot(d0, hash33(i)), dot(d1, hash33(i + i1)), dot(d2, hash33(i + i2)), dot(d3, hash33(i + 1.0)));
        return dot(vec4(31.316), n);
    }

    void main() {
        vec2 uv = vUv;
        float time = uTime * 0.2;
        
        // Mouse interaction (Fluid Distortion)
        float dist = distance(uv, uMouse);
        float mouseForce = smoothstep(0.5, 0.0, dist);
        vec2 distortion = (uv - uMouse) * mouseForce * 2.0;

        // Layered Noise with distortion
        float n1 = noise(vec3(uv * 3.0 + distortion, time));
        float n2 = noise(vec3(uv * 6.0 + n1 * 2.0 - distortion * 0.5, time * 1.5));
        
        // Color Palette (Deep Cosmos / Iridescent Pearl)
        vec3 c1 = vec3(0.1, 0.0, 0.3); // Deep Violet
        vec3 c2 = vec3(0.6, 0.1, 0.7); // Magenta
        vec3 c3 = vec3(0.0, 0.8, 0.9); // Electric Cyan
        vec3 c4 = vec3(0.9, 0.9, 1.0); // Pearl White
        
        float finalNoise = n1 * 0.5 + n2 * 0.5;
        
        vec3 col = mix(c1, c2, smoothstep(-0.2, 0.2, finalNoise));
        col = mix(col, c3, smoothstep(0.2, 0.6, finalNoise));
        col = mix(col, c4, smoothstep(0.6, 0.9, finalNoise));
        
        // Specular Highlights (Chrome Liquid)
        float highlight = smoothstep(0.4, 0.42, finalNoise + mouseForce * 0.2) - smoothstep(0.42, 0.45, finalNoise + mouseForce * 0.2);
        col += vec3(1.0) * highlight * 0.8;

        gl_FragColor = vec4(col, 1.0);
    }
`

export function LiquidChrome() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const renderer = new Renderer({ alpha: true, dpr: 1 })
        const gl = renderer.gl
        containerRef.current.appendChild(gl.canvas)
        gl.clearColor(0, 0, 0, 0)

        const camera = new Camera(gl)
        camera.position.z = 1

        const resize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight)
            camera.perspective({ aspect: gl.canvas.width / gl.canvas.height })
        }
        window.addEventListener('resize', resize, false)
        resize()

        const scene = new Transform()
        const geometry = new Plane(gl, { width: 2, height: 2 })

        const mouse = new Vec2(0.5, 0.5)

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: new Float32Array([gl.canvas.width, gl.canvas.height]) },
                uMouse: { value: mouse }
            },
        })

        const mesh = new Mesh(gl, { geometry, program })
        mesh.setParent(scene)

        const onMouseMove = (e: MouseEvent) => {
            mouse.set(e.clientX / gl.canvas.width, 1.0 - e.clientY / gl.canvas.height)
        }
        window.addEventListener("mousemove", onMouseMove)

        let animationId: number
        const update = (t: number) => {
            animationId = requestAnimationFrame(update)
            program.uniforms.uTime.value = t * 0.001
            renderer.render({ scene, camera })
        }
        animationId = requestAnimationFrame(update)

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener("mousemove", onMouseMove)
            cancelAnimationFrame(animationId)
            if (containerRef.current && containerRef.current.contains(gl.canvas)) {
                containerRef.current.removeChild(gl.canvas)
            }
        }
    }, [])

    return <div ref={containerRef} className="absolute inset-0 w-full h-full" />
}

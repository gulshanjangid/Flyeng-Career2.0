'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { INTERVIEWERS } from '../lib/constants'

type InterviewState = 'IDLE' | 'INTRO' | 'QUESTIONING' | 'LISTENING' | 'PROCESSING' | 'FEEDBACK' | 'COMPLETED'

interface AudioVisualizerProps {
    status: InterviewState
    isAISpeaking: boolean
    audioManager: any
    emotion?: string
    confidence?: number
    personaId?: string
}

// Per-persona visual traits for unique, human-like avatars
const PERSONA_VISUALS: Record<string, {
    skinTone: string; skinHighlight: string; skinShadow: string;
    hairColor: string; hairHighlight: string; hairStyle: 'short' | 'slicked' | 'curly' | 'long' | 'bun' | 'buzz' | 'wavy' | 'parted';
    eyeColor: string; lipColor: string; lipDark: string;
    shirtColor: string; shirtAccent: string;
    hasBeard: boolean; beardColor: string;
    hasGlasses: boolean; glassesColor: string;
    facialStructure: 'round' | 'oval' | 'angular' | 'square';
    browThickness: number; noseWidth: number;
}> = {
    alex: { skinTone: '#E8B89D', skinHighlight: '#F5CEAF', skinShadow: '#D49B7B', hairColor: '#3B2314', hairHighlight: '#5B3A24', hairStyle: 'short', eyeColor: '#4A6741', lipColor: '#C4706B', lipDark: '#A35550', shirtColor: '#2563EB', shirtAccent: '#1D4ED8', hasBeard: false, beardColor: '', hasGlasses: false, glassesColor: '', facialStructure: 'oval', browThickness: 2, noseWidth: 4 },
    sarah: { skinTone: '#F5D0B5', skinHighlight: '#FCDFC8', skinShadow: '#E0B898', hairColor: '#8B4513', hairHighlight: '#A0522D', hairStyle: 'long', eyeColor: '#4169E1', lipColor: '#D4697A', lipDark: '#B8556A', shirtColor: '#7C3AED', shirtAccent: '#6D28D9', hasBeard: false, beardColor: '', hasGlasses: false, glassesColor: '', facialStructure: 'oval', browThickness: 1.4, noseWidth: 3.5 },
    marcus: { skinTone: '#8D6347', skinHighlight: '#A07558', skinShadow: '#6E4E38', hairColor: '#1A1A1A', hairHighlight: '#333333', hairStyle: 'buzz', eyeColor: '#3D2B1F', lipColor: '#8B5E5E', lipDark: '#704A4A', shirtColor: '#1F2937', shirtAccent: '#111827', hasBeard: true, beardColor: '#1A1A1A', hasGlasses: false, glassesColor: '', facialStructure: 'square', browThickness: 2.2, noseWidth: 5 },
    maya: { skinTone: '#C8946E', skinHighlight: '#D9A57F', skinShadow: '#B07D5A', hairColor: '#0D0D0D', hairHighlight: '#2A2A2A', hairStyle: 'bun', eyeColor: '#2C1810', lipColor: '#C06060', lipDark: '#A04848', shirtColor: '#EC4899', shirtAccent: '#DB2777', hasBeard: false, beardColor: '', hasGlasses: false, glassesColor: '', facialStructure: 'oval', browThickness: 1.5, noseWidth: 3.8 },
    raj: { skinTone: '#B07040', skinHighlight: '#C48252', skinShadow: '#8E5B33', hairColor: '#1A1A1A', hairHighlight: '#333333', hairStyle: 'parted', eyeColor: '#2C1810', lipColor: '#9E5555', lipDark: '#804040', shirtColor: '#0F766E', shirtAccent: '#0D5F58', hasBeard: true, beardColor: '#252525', hasGlasses: true, glassesColor: '#333333', facialStructure: 'angular', browThickness: 2.0, noseWidth: 4.5 },
    sofia: { skinTone: '#EDCAAB', skinHighlight: '#F8D8BF', skinShadow: '#D4AF91', hairColor: '#654321', hairHighlight: '#7B5230', hairStyle: 'wavy', eyeColor: '#228B22', lipColor: '#D06868', lipDark: '#B55050', shirtColor: '#DC2626', shirtAccent: '#B91C1C', hasBeard: false, beardColor: '', hasGlasses: false, glassesColor: '', facialStructure: 'round', browThickness: 1.3, noseWidth: 3.5 },
    chen: { skinTone: '#F0C9A0', skinHighlight: '#F8D8B2', skinShadow: '#D9B28A', hairColor: '#0D0D0D', hairHighlight: '#1A1A2E', hairStyle: 'slicked', eyeColor: '#1A1A1A', lipColor: '#B06060', lipDark: '#904848', shirtColor: '#475569', shirtAccent: '#334155', hasBeard: false, beardColor: '', hasGlasses: true, glassesColor: '#1F2937', facialStructure: 'angular', browThickness: 1.6, noseWidth: 3.8 },
    david: { skinTone: '#E0A880', skinHighlight: '#EDB992', skinShadow: '#C8916A', hairColor: '#B8860B', hairHighlight: '#DAA520', hairStyle: 'short', eyeColor: '#4682B4', lipColor: '#B56666', lipDark: '#955050', shirtColor: '#EA580C', shirtAccent: '#C2410C', hasBeard: true, beardColor: '#9B7230', hasGlasses: false, glassesColor: '', facialStructure: 'square', browThickness: 2.0, noseWidth: 4.5 },
    atlas: { skinTone: '#D4A574', skinHighlight: '#E2B688', skinShadow: '#BE8F5E', hairColor: '#4A4A4A', hairHighlight: '#666666', hairStyle: 'slicked', eyeColor: '#556B2F', lipColor: '#A05858', lipDark: '#884040', shirtColor: '#374151', shirtAccent: '#1F2937', hasBeard: true, beardColor: '#555555', hasGlasses: true, glassesColor: '#292929', facialStructure: 'angular', browThickness: 2.2, noseWidth: 4.8 },
    emily: { skinTone: '#FDDCB5', skinHighlight: '#FEE8CC', skinShadow: '#E7C49A', hairColor: '#D4A746', hairHighlight: '#E6BE5A', hairStyle: 'long', eyeColor: '#6495ED', lipColor: '#D07070', lipDark: '#B85858', shirtColor: '#059669', shirtAccent: '#047857', hasBeard: false, beardColor: '', hasGlasses: false, glassesColor: '', facialStructure: 'round', browThickness: 1.3, noseWidth: 3.2 },
    // Indian interviewers
    arjun: { skinTone: '#B07040', skinHighlight: '#C28252', skinShadow: '#8E5B33', hairColor: '#1A1A1A', hairHighlight: '#2A2A2A', hairStyle: 'short', eyeColor: '#2C1810', lipColor: '#8E5050', lipDark: '#704040', shirtColor: '#4F46E5', shirtAccent: '#4338CA', hasBeard: false, beardColor: '', hasGlasses: true, glassesColor: '#1F2937', facialStructure: 'oval', browThickness: 2.0, noseWidth: 4.5 },
    kavya: { skinTone: '#C8946E', skinHighlight: '#D9A580', skinShadow: '#B07D5A', hairColor: '#0D0D0D', hairHighlight: '#222222', hairStyle: 'long', eyeColor: '#2C1810', lipColor: '#C06060', lipDark: '#A04848', shirtColor: '#0284C7', shirtAccent: '#0369A1', hasBeard: false, beardColor: '', hasGlasses: false, glassesColor: '', facialStructure: 'oval', browThickness: 1.4, noseWidth: 3.5 },
    vikram: { skinTone: '#B88050', skinHighlight: '#CA9262', skinShadow: '#9A6A3E', hairColor: '#1A1A1A', hairHighlight: '#333333', hairStyle: 'parted', eyeColor: '#2C1810', lipColor: '#9E5555', lipDark: '#804040', shirtColor: '#334155', shirtAccent: '#1E293B', hasBeard: true, beardColor: '#252525', hasGlasses: false, glassesColor: '', facialStructure: 'square', browThickness: 2.0, noseWidth: 4.5 },
    meera: { skinTone: '#C0885A', skinHighlight: '#D29A6C', skinShadow: '#A87348', hairColor: '#0D0D0D', hairHighlight: '#1A1A2E', hairStyle: 'bun', eyeColor: '#2C1810', lipColor: '#C06868', lipDark: '#A85050', shirtColor: '#0D9488', shirtAccent: '#0F766E', hasBeard: false, beardColor: '', hasGlasses: false, glassesColor: '', facialStructure: 'round', browThickness: 1.4, noseWidth: 3.8 },
    aditya: { skinTone: '#B8885A', skinHighlight: '#CA9A6C', skinShadow: '#A07348', hairColor: '#1A1A1A', hairHighlight: '#2E2E2E', hairStyle: 'short', eyeColor: '#2C1810', lipColor: '#9E5858', lipDark: '#804040', shirtColor: '#7C3AED', shirtAccent: '#6D28D9', hasBeard: false, beardColor: '', hasGlasses: true, glassesColor: '#292929', facialStructure: 'angular', browThickness: 1.8, noseWidth: 4.2 },
}

const DEFAULT_VISUAL = PERSONA_VISUALS.alex;

function PersonaAvatar({ 
    personaId, 
    isSpeaking, 
    audioLevel, 
    status 
}: { 
    personaId: string
    isSpeaking: boolean
    audioLevel: number
    status: InterviewState
}) {
    const persona = INTERVIEWERS.find(p => p.id === personaId) || INTERVIEWERS[1]
    const v = PERSONA_VISUALS[personaId] || DEFAULT_VISUAL;
    const [blinkState, setBlinkState] = useState(false)
    const [headNod, setHeadNod] = useState(0)
    const [breathe, setBreathe] = useState(0)
    const [idleSway, setIdleSway] = useState(0)
    const [microExpr, setMicroExpr] = useState(0) // smile micro-animation
    
    // Natural blink cycle
    useEffect(() => {
        let timeout: NodeJS.Timeout
        const scheduleBlink = () => {
            timeout = setTimeout(() => {
                setBlinkState(true)
                const isDoubleBlink = Math.random() > 0.7
                setTimeout(() => {
                    setBlinkState(false)
                    if (isDoubleBlink) {
                        setTimeout(() => {
                            setBlinkState(true)
                            setTimeout(() => setBlinkState(false), 90)
                        }, 140)
                    }
                }, 80 + Math.random() * 50)
                scheduleBlink()
            }, 2500 + Math.random() * 4000)
        }
        scheduleBlink()
        return () => clearTimeout(timeout)
    }, [])

    // Head nodding while listening
    useEffect(() => {
        if (status !== 'LISTENING') { setHeadNod(0); return }
        const interval = setInterval(() => {
            setHeadNod(Math.sin(Date.now() / 800) * 2)
        }, 60)
        return () => clearInterval(interval)
    }, [status])

    // Breathing + idle sway + micro expressions
    useEffect(() => {
        const interval = setInterval(() => {
            const t = Date.now()
            setBreathe(Math.sin(t / 2200) * 1.2)
            setIdleSway(Math.sin(t / 4500) * 0.6 + Math.cos(t / 3800) * 0.3)
            setMicroExpr(Math.sin(t / 5000) * 0.5)
        }, 50)
        return () => clearInterval(interval)
    }, [])

    const safeAudioLevel = audioLevel || 0;
    const mouthOpen = isSpeaking ? Math.min(10, Math.max(0, safeAudioLevel / 6)) : 0;
    const safeMouthOpen = mouthOpen || 0;
    const eyeScaleY = blinkState ? 0.04 : 1;
    const accentHex = persona.accentColor || '#3B82F6';
    const headTilt = status === 'LISTENING' ? Math.sin(Date.now() / 3000) * 1.2 : 0;
    const safeHeadTilt = headTilt || 0;
    const safeIdleSway = idleSway || 0;
    const safeHeadNod = headNod || 0;
    const safeBreathe = breathe || 0;
    const safeMicroExpr = microExpr || 0;

    // Face shape path based on facial structure
    const getFacePath = () => {
        switch (v.facialStructure) {
            case 'round': return 'M -28 -8 C -28 -38 28 -38 28 -8 C 28 18 20 30 0 32 C -20 30 -28 18 -28 -8 Z'
            case 'angular': return 'M -26 -10 C -26 -40 26 -40 26 -10 C 26 14 22 28 0 32 C -22 28 -26 14 -26 -10 Z'
            case 'square': return 'M -28 -8 C -28 -36 28 -36 28 -8 C 28 16 24 30 0 32 C -24 30 -28 16 -28 -8 Z'
            default: return 'M -27 -8 C -27 -38 27 -38 27 -8 C 27 16 21 31 0 33 C -21 31 -27 16 -27 -8 Z'
        }
    }

    // Hair paths per style
    const renderHair = () => {
        const id = `hair-grad-${personaId}`;
        switch (v.hairStyle) {
            case 'short':
                return (<>
                    <defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={v.hairHighlight} /><stop offset="100%" stopColor={v.hairColor} /></linearGradient></defs>
                    <ellipse cx="0" cy="-28" rx="30" ry="15" fill={`url(#${id})`} />
                    <path d="M -28 -18 C -30 -38 30 -38 28 -18" fill={v.hairColor} />
                    <ellipse cx="-24" cy="-20" rx="6" ry="12" fill={v.hairColor} opacity="0.6" />
                    <ellipse cx="24" cy="-20" rx="6" ry="12" fill={v.hairColor} opacity="0.6" />
                </>)
            case 'slicked':
                return (<>
                    <path d="M -28 -15 C -28 -42 28 -42 28 -15 L 30 -10 C 30 -40 -30 -40 -30 -10 Z" fill={v.hairColor} />
                    <path d="M -5 -40 C 0 -42 5 -40 3 -35" fill={v.hairHighlight} opacity="0.3" />
                </>)
            case 'curly':
                return (<>
                    <ellipse cx="0" cy="-28" rx="32" ry="18" fill={v.hairColor} />
                    {[-25, -18, -10, -2, 6, 14, 22].map(x => (
                        <circle key={x} cx={x} cy={-36 + Math.sin(x) * 3} r={5 + Math.random()} fill={v.hairHighlight} opacity="0.5" />
                    ))}
                    <ellipse cx="-27" cy="-14" rx="8" ry="14" fill={v.hairColor} opacity="0.7" />
                    <ellipse cx="27" cy="-14" rx="8" ry="14" fill={v.hairColor} opacity="0.7" />
                </>)
            case 'long':
                return (<>
                    <path d="M -28 -18 C -28 -42 28 -42 28 -18 L 30 10 C 32 20 28 28 26 30 L 26 -5 C 26 -35 -26 -35 -26 -5 L -26 30 C -28 28 -32 20 -30 10 Z" fill={v.hairColor} />
                    <path d="M -15 -38 C -10 -42 10 -42 15 -38" fill={v.hairHighlight} opacity="0.25" />
                </>)
            case 'bun':
                return (<>
                    <path d="M -28 -18 C -28 -40 28 -40 28 -18" fill={v.hairColor} />
                    <circle cx="0" cy="-42" r="12" fill={v.hairColor} />
                    <circle cx="0" cy="-42" r="8" fill={v.hairHighlight} opacity="0.2" />
                    <ellipse cx="-25" cy="-18" rx="5" ry="10" fill={v.hairColor} opacity="0.6" />
                    <ellipse cx="25" cy="-18" rx="5" ry="10" fill={v.hairColor} opacity="0.6" />
                </>)
            case 'buzz':
                return (<>
                    <path d="M -27 -12 C -27 -38 27 -38 27 -12" fill={v.hairColor} opacity="0.9" />
                    <path d="M -25 -14 C -25 -34 25 -34 25 -14" fill={v.hairHighlight} opacity="0.15" />
                </>)
            case 'wavy':
                return (<>
                    <path d="M -28 -15 C -28 -42 28 -42 28 -15 L 28 0 C 30 8 26 16 22 18 L 22 -10 C 22 -35 -22 -35 -22 -10 L -22 18 C -26 16 -30 8 -28 0 Z" fill={v.hairColor} />
                    <path d="M -8 -40 C -2 -44 8 -42 12 -38" fill={v.hairHighlight} opacity="0.2" />
                </>)
            case 'parted':
                return (<>
                    <path d="M -28 -15 C -28 -40 28 -40 28 -15" fill={v.hairColor} />
                    <path d="M -5 -40 L -5 -20" stroke={v.skinTone} strokeWidth="2" opacity="0.3" />
                    <ellipse cx="-24" cy="-18" rx="6" ry="12" fill={v.hairColor} opacity="0.6" />
                    <ellipse cx="24" cy="-18" rx="6" ry="12" fill={v.hairColor} opacity="0.6" />
                </>)
        }
    }

    return (
        <div className="relative flex flex-col items-center gap-3">
            <div className="relative">
                {/* Ambient glow — reacts to speaking */}
                <motion.div 
                    className="absolute -inset-6 rounded-full"
                    style={{ 
                        background: `radial-gradient(circle, ${accentHex}20 0%, ${accentHex}08 50%, transparent 70%)`,
                    }}
                    animate={{ 
                        scale: isSpeaking ? [1, 1.15, 1.05, 1.12, 1] : status === 'PROCESSING' ? [1, 1.06, 1] : [1, 1.03, 1],
                        opacity: isSpeaking ? [0.6, 0.9, 0.7] : status === 'PROCESSING' ? [0.3, 0.5, 0.3] : [0.2, 0.35, 0.2]
                    }}
                    transition={{ duration: isSpeaking ? 0.3 : 2.5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Processing rings */}
                {status === 'PROCESSING' && (
                    <>
                        <motion.div
                            className="absolute -inset-8 rounded-full border-2 border-dashed"
                            style={{ borderColor: `${accentHex}30` }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        />
                    </>
                )}

                <svg
                    viewBox="-65 -70 130 150"
                    className="w-48 h-48 md:w-64 md:h-64 relative z-10"
                    style={{ 
                        transform: `rotate(${safeHeadTilt + safeIdleSway}deg) translateY(${safeHeadNod + safeBreathe * 0.3}px)`,
                        transition: 'transform 0.12s ease-out'
                    }}
                >
                    <defs>
                        <radialGradient id={`skin-${personaId}`} cx="0.4" cy="0.35" r="0.65">
                            <stop offset="0%" stopColor={v.skinHighlight} />
                            <stop offset="60%" stopColor={v.skinTone} />
                            <stop offset="100%" stopColor={v.skinShadow} />
                        </radialGradient>
                        <linearGradient id={`lip-${personaId}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={v.lipColor} />
                            <stop offset="100%" stopColor={v.lipDark} />
                        </linearGradient>
                        <linearGradient id={`shirt-${personaId}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={v.shirtColor} />
                            <stop offset="100%" stopColor={v.shirtAccent} />
                        </linearGradient>
                        <radialGradient id={`nose-shadow-${personaId}`} cx="0.5" cy="0.3" r="0.6">
                            <stop offset="0%" stopColor={v.skinShadow} stopOpacity="0.15" />
                            <stop offset="100%" stopColor={v.skinShadow} stopOpacity="0" />
                        </radialGradient>
                    </defs>

                    {/* Accent ring */}
                    <circle cx="0" cy="5" r="58" fill="none" stroke={accentHex} strokeWidth="0.5" opacity="0.15" />

                    {/* Shoulders + Shirt */}
                    <path d="M -35 48 C -35 38 -20 32 0 32 C 20 32 35 38 35 48 L 40 70 L -40 70 Z" fill={`url(#shirt-${personaId})`} />
                    {/* Collar */}
                    <path d="M -8 32 L 0 42 L 8 32" fill="none" stroke="white" strokeWidth="0.8" opacity="0.3" />

                    {/* Neck */}
                    <rect x="-8" y="26" width="16" height="12" rx="6" fill={v.skinTone} />
                    {/* Neck shadow */}
                    <ellipse cx="0" cy="32" rx="8" ry="3" fill={v.skinShadow} opacity="0.15" />

                    {/* Head */}
                    <path d={getFacePath()} fill={`url(#skin-${personaId})`} />
                    
                    {/* Jaw shadow */}
                    <ellipse cx="0" cy="24" rx="18" ry="6" fill={v.skinShadow} opacity="0.08" />

                    {/* Ears */}
                    <ellipse cx="-27" cy="-4" rx="4.5" ry="7" fill={v.skinTone} />
                    <ellipse cx="-27" cy="-4" rx="2.5" ry="4" fill={v.skinShadow} opacity="0.12" />
                    <ellipse cx="27" cy="-4" rx="4.5" ry="7" fill={v.skinTone} />
                    <ellipse cx="27" cy="-4" rx="2.5" ry="4" fill={v.skinShadow} opacity="0.12" />

                    {/* Hair */}
                    {renderHair()}

                    {/* Beard */}
                    {v.hasBeard && (
                        <>
                            <path d="M -16 12 C -18 18 -14 28 0 30 C 14 28 18 18 16 12" fill={v.beardColor} opacity="0.35" />
                            <path d="M -12 14 C -14 20 -10 26 0 28 C 10 26 14 20 12 14" fill={v.beardColor} opacity="0.2" />
                        </>
                    )}

                    {/* Eyebrows */}
                    <motion.path 
                        d={`M -18 ${-18} Q -13 ${-21} -7 ${-19}`}
                        fill="none" stroke={v.hairColor} strokeWidth={v.browThickness} strokeLinecap="round" opacity="0.75"
                        animate={{ y: isSpeaking ? [0, -1.5, 0] : 0 }}
                        transition={{ duration: 0.7, repeat: isSpeaking ? Infinity : 0 }}
                    />
                    <motion.path 
                        d={`M 7 ${-19} Q 13 ${-21} 18 ${-18}`}
                        fill="none" stroke={v.hairColor} strokeWidth={v.browThickness} strokeLinecap="round" opacity="0.75"
                        animate={{ y: isSpeaking ? [0, -1.5, 0] : 0 }}
                        transition={{ duration: 0.7, repeat: isSpeaking ? Infinity : 0 }}
                    />

                    {/* Eyes */}
                    <g>
                        {/* Left eye — almond shape */}
                        <path d={`M -17 -11 Q -12 ${-15 * eyeScaleY - 4} -7 -11 Q -12 ${-7 + (1 - eyeScaleY) * 4} -17 -11`} fill="white" />
                        {!blinkState && <>
                            {/* Left iris */}
                            <motion.circle cx="-12" cy="-11" r="3.2" fill={v.eyeColor}
                                animate={{ cx: status === 'LISTENING' ? [-13, -11, -12] : [-12, -12.5, -12] }}
                                transition={{ duration: status === 'LISTENING' ? 3 : 5, repeat: Infinity, ease: "easeInOut" }}
                            />
                            {/* Left pupil */}
                            <motion.circle cx="-12" cy="-11" r="1.6" fill="#0a0a0a"
                                animate={{ cx: status === 'LISTENING' ? [-13, -11, -12] : [-12, -12.5, -12] }}
                                transition={{ duration: status === 'LISTENING' ? 3 : 5, repeat: Infinity, ease: "easeInOut" }}
                            />
                            {/* Left highlight */}
                            <circle cx="-10.5" cy="-12.5" r="1.1" fill="white" opacity="0.85" />
                            <circle cx="-13" cy="-10" r="0.5" fill="white" opacity="0.4" />
                        </>}
                        {/* Left eyelid line */}
                        <path d={`M -17 -11 Q -12 ${-15 * Math.min(eyeScaleY, 1) - 4} -7 -11`} fill="none" stroke={v.skinShadow} strokeWidth="0.6" opacity="0.4" />

                        {/* Right eye — almond shape */}
                        <path d={`M 7 -11 Q 12 ${-15 * eyeScaleY - 4} 17 -11 Q 12 ${-7 + (1 - eyeScaleY) * 4} 7 -11`} fill="white" />
                        {!blinkState && <>
                            <motion.circle cx="12" cy="-11" r="3.2" fill={v.eyeColor}
                                animate={{ cx: status === 'LISTENING' ? [11, 13, 12] : [12, 12.5, 12] }}
                                transition={{ duration: status === 'LISTENING' ? 3 : 5, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.circle cx="12" cy="-11" r="1.6" fill="#0a0a0a"
                                animate={{ cx: status === 'LISTENING' ? [11, 13, 12] : [12, 12.5, 12] }}
                                transition={{ duration: status === 'LISTENING' ? 3 : 5, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <circle cx="13.5" cy="-12.5" r="1.1" fill="white" opacity="0.85" />
                            <circle cx="11" cy="-10" r="0.5" fill="white" opacity="0.4" />
                        </>}
                        <path d={`M 7 -11 Q 12 ${-15 * Math.min(eyeScaleY, 1) - 4} 17 -11`} fill="none" stroke={v.skinShadow} strokeWidth="0.6" opacity="0.4" />
                    </g>

                    {/* Glasses */}
                    {v.hasGlasses && (
                        <g opacity="0.7">
                            <rect x="-19" y="-17" width="15" height="13" rx="3" fill="none" stroke={v.glassesColor} strokeWidth="1.2" />
                            <rect x="4" y="-17" width="15" height="13" rx="3" fill="none" stroke={v.glassesColor} strokeWidth="1.2" />
                            <line x1="-4" y1="-11" x2="4" y2="-11" stroke={v.glassesColor} strokeWidth="1" />
                            <line x1="-19" y1="-11" x2="-27" y2="-9" stroke={v.glassesColor} strokeWidth="0.8" />
                            <line x1="19" y1="-11" x2="27" y2="-9" stroke={v.glassesColor} strokeWidth="0.8" />
                        </g>
                    )}

                    {/* Nose — volumetric */}
                    <path d={`M 0 -6 L ${-v.noseWidth * 0.4} 3 Q 0 5 ${v.noseWidth * 0.4} 3 Z`} fill={`url(#nose-shadow-${personaId})`} />
                    <path d={`M -1 -4 Q 0 4 -${v.noseWidth * 0.3} 3`} fill="none" stroke={v.skinShadow} strokeWidth="0.6" opacity="0.3" strokeLinecap="round" />
                    {/* Nostrils */}
                    <ellipse cx={-v.noseWidth * 0.25} cy="3.5" rx="1.5" ry="1" fill={v.skinShadow} opacity="0.12" />
                    <ellipse cx={v.noseWidth * 0.25} cy="3.5" rx="1.5" ry="1" fill={v.skinShadow} opacity="0.12" />

                    {/* Mouth \u2014 realistic with upper/lower lip */}
                    {isSpeaking ? (
                        <g>
                            {/* Open mouth background (dark) */}
                            <motion.ellipse
                                cx="0" cy={11 + safeMouthOpen * 0.3}
                                rx="7" ry={Math.max(0.1, 1 + safeMouthOpen * 0.5)}
                                fill="#3A1515"
                                animate={{
                                    ry: [
                                        Math.max(0.1, 1 + safeMouthOpen * 0.3), 
                                        Math.max(0.1, 1 + safeMouthOpen * 0.7), 
                                        Math.max(0.1, 1 + safeMouthOpen * 0.2), 
                                        Math.max(0.1, 1 + safeMouthOpen * 0.6), 
                                        Math.max(0.1, 1 + safeMouthOpen * 0.3)
                                    ],
                                }}
                                transition={{ duration: 0.18, repeat: Infinity, ease: "easeInOut" }}
                            />
                            {/* Teeth hint */}
                            <motion.rect
                                x="-5" y="10"
                                width="10" height={Math.max(0, Math.min(3, safeMouthOpen * 0.3))}
                                rx="1" fill="white" opacity="0.6"
                                animate={{
                                    height: [
                                        Math.max(0, safeMouthOpen * 0.15), 
                                        Math.max(0, safeMouthOpen * 0.35), 
                                        Math.max(0, safeMouthOpen * 0.1), 
                                        Math.max(0, safeMouthOpen * 0.3), 
                                        Math.max(0, safeMouthOpen * 0.15)
                                    ],
                                }}
                                transition={{ duration: 0.18, repeat: Infinity }}
                            />
                            {/* Upper lip */}
                            <path d={`M -8 10 Q -4 8.5 0 9 Q 4 8.5 8 10`} fill={v.lipColor} stroke={v.lipDark} strokeWidth="0.4" />
                            {/* Lower lip */}
                            <motion.path
                                fill={v.lipColor}
                                stroke={v.lipDark}
                                strokeWidth="0.4"
                                animate={{
                                    d: [
                                        `M -8 10 Q 0 ${13 + safeMouthOpen * 0.3} 8 10`,
                                        `M -8 10 Q 0 ${13 + safeMouthOpen * 0.8} 8 10`,
                                        `M -8 10 Q 0 ${13 + safeMouthOpen * 0.2} 8 10`,
                                        `M -8 10 Q 0 ${13 + safeMouthOpen * 0.6} 8 10`,
                                    ]
                                }}
                                transition={{ duration: 0.18, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </g>
                    ) : (
                        <g>
                            {/* Closed mouth \u2014 cupid's bow upper lip + lower */}
                            <path d={`M -7 10 Q -3.5 9 0 9.5 Q 3.5 9 7 10`} fill={v.lipColor} stroke={v.lipDark} strokeWidth="0.5" />
                            <path d={`M -7 10 Q 0 ${12 + safeMicroExpr} 7 10`} fill={v.lipColor} stroke={v.lipDark} strokeWidth="0.5" />
                        </g>
                    )}

                    {/* Cheek blush */}
                    <circle cx="-17" cy="2" r="5" fill="#E88888" opacity="0.05" />
                    <circle cx="17" cy="2" r="5" fill="#E88888" opacity="0.05" />

                    {/* Nasolabial folds (subtle) */}
                    <path d="M -10 1 Q -12 8 -9 12" fill="none" stroke={v.skinShadow} strokeWidth="0.3" opacity="0.12" />
                    <path d="M 10 1 Q 12 8 9 12" fill="none" stroke={v.skinShadow} strokeWidth="0.3" opacity="0.12" />
                </svg>
            </div>
        </div>
    )
}


export function AudioVisualizer({ status, isAISpeaking, audioManager, emotion = 'neutral', confidence = 50, personaId = 'alex' }: AudioVisualizerProps) {
    const [audioLevel, setAudioLevel] = useState(0)
    const animationRef = useRef<number>()

    useEffect(() => {
        const animate = () => {
            if (status === 'LISTENING') {
                setAudioLevel(prev => {
                     const target = Math.random() * 40 + 10;
                     return prev + (target - prev) * 0.1;
                })
            } else if (isAISpeaking) {
                setAudioLevel(prev => {
                     const target = Math.random() * 80 + 20;
                     return prev + (target - prev) * 0.25;
                })
            } else if (status === 'PROCESSING') {
                 setAudioLevel(prev => {
                     const target = Math.sin(Date.now() / 200) * 20 + 30;
                     return prev + (target - prev) * 0.1;
                })
            } else {
                setAudioLevel(prev => {
                     const target = Math.sin(Date.now() / 1000) * 10 + 10;
                     return prev + (target - prev) * 0.05;
                })
            }
            animationRef.current = requestAnimationFrame(animate)
        }
        
        animationRef.current = requestAnimationFrame(animate)
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
        }
    }, [status, isAISpeaking])

    return (
        <div className="flex flex-col items-center gap-2">
            <PersonaAvatar 
                personaId={personaId}
                isSpeaking={isAISpeaking}
                audioLevel={audioLevel}
                status={status}
            />
            
            {/* Audio waveform bars — below avatar */}
            <div className="flex items-center justify-center gap-[2px] h-6 w-32 md:w-40">
                {Array.from({ length: 20 }).map((_, i) => {
                    const barHeight = isAISpeaking 
                        ? 4 + Math.sin((Date.now() / 100) + i * 0.5) * (audioLevel / 12) + Math.random() * 3
                        : status === 'PROCESSING'
                            ? 2 + Math.sin((Date.now() / 300) + i * 0.3) * 4
                            : 1 + Math.sin((Date.now() / 800) + i * 0.2) * 1.5;
                    
                    return (
                        <motion.div
                            key={i}
                            className="rounded-full"
                            style={{ 
                                width: '2px',
                                backgroundColor: isAISpeaking 
                                    ? `hsl(200, 80%, ${55 + Math.sin(i * 0.3) * 15}%)`
                                    : status === 'PROCESSING'
                                        ? 'rgba(168, 162, 250, 0.5)'
                                        : 'rgba(255,255,255,0.15)',
                                height: `${barHeight}px`,
                                transition: 'height 0.08s ease-out'
                            }}
                        />
                    );
                })}
            </div>
        </div>
    )
}
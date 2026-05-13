"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Mic, Video, BrainCircuit, Play, ShieldCheck, AlertCircle, Loader2, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
    {
        id: 1,
        title: "Protocol Initiated",
        description: "Welcome to the Flyeng Intelligence Assessment. You are about to undergo a comprehensive AI-driven evaluation. Please comply with all system protocols.",
        icon: <ShieldCheck className="w-12 h-12 text-cyan-400" />,
        color: "bg-zinc-900/80 border-cyan-500/20",
        accent: "text-cyan-400",
        ring: "ring-cyan-500/20"
    },
    {
        id: 2,
        title: "Environment Scan",
        description: "Ensure you are in a quiet, well-lit environment. Your face must be clearly visible for biometric analysis. Minimize background noise.",
        icon: <Video className="w-12 h-12 text-blue-400" />,
        color: "bg-zinc-900/80 border-blue-500/20",
        accent: "text-blue-400",
         ring: "ring-blue-500/20"
    },
    {
        id: 3,
        title: "Audio Link",
        description: "Speak clearly and confidently. The AI utilizes continuous listening technology. Avoid long pauses unless you have finished your response.",
        icon: <Mic className="w-12 h-12 text-purple-400" />,
        color: "bg-zinc-900/80 border-purple-500/20",
        accent: "text-purple-400",
         ring: "ring-purple-500/20"
    },
    {
        id: 4,
        title: "Hardware Sync",
        description: "We must verify your sensors before proceeding. Please initialize your camera and microphone connection now.",
        icon: <BrainCircuit className="w-12 h-12 text-emerald-400" />,
        color: "bg-zinc-900/80 border-emerald-500/20",
        accent: "text-emerald-400",
         ring: "ring-emerald-500/20"
    }
]

export function InstructionsCarousel() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    
    // Permission State
    const [permissionStatus, setPermissionStatus] = React.useState<'idle' | 'checking' | 'granted' | 'denied'>('idle');
    const [stream, setStream] = React.useState<MediaStream | null>(null);

    React.useEffect(() => {
        if (!api) return
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", () => setCurrent(api.selectedScrollSnap() + 1))
    }, [api])

    // Cleanup stream on unmount
    React.useEffect(() => {
        return () => {
            if (stream) {
                stream.getTracks().forEach(t => t.stop());
            }
        }
    }, [stream]);

    const initializeSensors = async () => {
        setPermissionStatus('checking');
        try {
            let mediaStream: MediaStream;
             try {
                mediaStream = await navigator.mediaDevices.getUserMedia({
                    video: { width: { ideal: 1280 }, height: { ideal: 720 } },
                    audio: true
                });
            } catch (err) {
                 console.warn("HD failed in pre-check, trying standard", err);
                 mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            }
            
            setStream(mediaStream);
            setPermissionStatus('granted');
        } catch (error) {
            console.error("Permission check failed", error);
            setPermissionStatus('denied');
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-4">
            <Carousel setApi={setApi} className="w-full" opts={{ align: "center", loop: false }}>
                <CarouselContent className="-ml-4 pb-8">
                    {slides.map((slide, index) => (
                        <CarouselItem key={slide.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <div className="h-full pt-4 px-1">
                                <motion.div 
                                    className={cn(
                                        "relative flex flex-col items-start text-left p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 h-[450px] overflow-hidden group shadow-lg bg-zinc-950",
                                        slide.color,
                                        // Highlight active slide
                                        current === index + 1 
                                            ? `border-opacity-100 ${slide.ring} shadow-xl scale-[1.02]` 
                                            : "border-opacity-30 opacity-80 scale-95 grayscale-[0.3]" 
                                    )}
                                >
                                    
                                    <div className="flex items-center gap-4 mb-6 w-full">
                                        <div className={cn("p-4 rounded-xl bg-black/50 border border-white/5 shadow-inner", slide.accent)}>
                                            {slide.icon}
                                        </div>
                                        <div className="h-px flex-1 bg-white/10" />
                                        <span className="text-xs font-mono text-zinc-500 font-bold bg-zinc-900 px-2 py-1 rounded">
                                            0{slide.id}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
                                        {slide.title}
                                    </h2>

                                    <p className="text-zinc-300 leading-relaxed font-normal text-base text-opacity-90">
                                        {slide.description}
                                    </p>

                                    {/* Slide 4 Content */}
                                    {slide.id === 4 && (
                                        <div className="mt-auto w-full pt-6">
                                             {permissionStatus === 'idle' && (
                                                <Button 
                                                    onClick={initializeSensors}
                                                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold tracking-wide h-14 text-base rounded-xl shadow-lg shadow-emerald-900/20 overflow-hidden"
                                                >
                                                    <BrainCircuit className="w-5 h-5 mr-2 animate-pulse" /> START SYSTEM CHECK
                                                </Button>
                                             )}
                                             
                                              {permissionStatus === 'checking' && (
                                                <div className="flex items-center justify-center gap-3 text-emerald-300 font-mono text-xs p-4 bg-emerald-950/30 rounded-xl border border-emerald-500/20 h-14">
                                                    <Loader2 className="w-4 h-4 animate-spin" /> ESTABLISHING CONNECTION...
                                                </div>
                                             )}

                                             {permissionStatus === 'granted' && (
                                                 <div className="space-y-2">
                                                    <div className="flex items-center gap-3 text-emerald-400 font-semibold text-sm bg-emerald-950/40 p-3 rounded-lg border border-emerald-500/30">
                                                        <Video className="w-4 h-4" /> Camera Online <CheckCircle2 className="w-4 h-4 ml-auto text-emerald-500" />
                                                    </div>
                                                    <div className="flex items-center gap-3 text-emerald-400 font-semibold text-sm bg-emerald-950/40 p-3 rounded-lg border border-emerald-500/30">
                                                        <Mic className="w-4 h-4" /> Microphone Online <CheckCircle2 className="w-4 h-4 ml-auto text-emerald-500" />
                                                    </div>
                                                 </div>
                                             )}

                                            {permissionStatus === 'denied' && (
                                                 <div className="space-y-3">
                                                     <div className="text-center p-3 bg-red-950/40 border border-red-500/30 rounded-xl">
                                                        <p className="text-red-400 text-sm font-bold flex items-center justify-center gap-2">
                                                            <AlertCircle className="w-4 h-4" /> Access Denied
                                                        </p>
                                                     </div>
                                                     <Button 
                                                        variant="outline" 
                                                        className="w-full border-red-500/30 text-red-300 hover:bg-red-950/50 hover:text-red-200 h-10"
                                                        onClick={initializeSensors}
                                                    >
                                                        Retry Connection
                                                    </Button>
                                                 </div>
                                             )}
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation Controls - Always Visible */}
                <div className="hidden md:flex justify-between w-full absolute top-1/2 -translate-y-1/2 pointer-events-none px-4 max-w-6xl left-1/2 -translate-x-1/2 z-0">
                     <CarouselPrevious className="pointer-events-auto relative left-0 translate-x-0 bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:text-white w-14 h-14 rounded-full shadow-xl" />
                     <CarouselNext className="pointer-events-auto relative right-0 translate-x-0 bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:text-white w-14 h-14 rounded-full shadow-xl" />
                </div>
                
                {/* Mobile Navigation */}
                <div className="flex md:hidden justify-center gap-6 mt-2 pb-6">
                     <CarouselPrevious className="static translate-y-0 bg-zinc-800 border-zinc-700 text-white w-12 h-12 rounded-full" />
                     <CarouselNext className="static translate-y-0 bg-zinc-800 border-zinc-700 text-white w-12 h-12 rounded-full" />
                </div>

                <div className="flex justify-center gap-2 mt-4">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-300",
                                current === index + 1 
                                    ? "w-8 bg-cyan-500" 
                                    : "w-2 bg-zinc-700"
                            )}
                        />
                    ))}
                </div>
            </Carousel>

            {/* Bottom Action Area */}
            <div className="mt-8 flex justify-center h-20 items-center">
                <AnimatePresence mode="wait">
                    {current === count ? (
                        <motion.div
                            key="action-btn"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="w-full max-w-sm"
                        >
                            {permissionStatus === 'granted' ? (
                                <Link href="/interview/config" onClick={() => {
                                    if (stream) {
                                        stream.getTracks().forEach(t => t.stop());
                                        setStream(null);
                                    }
                                }}>
                                    <Button size="lg" className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-lg h-14 rounded-xl shadow-xl shadow-cyan-900/30 transition-all hover:scale-105 border border-white/10">
                                        CONFIGURE SESSION <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                            ) : (
                                <Button
                                    onClick={() => api?.scrollTo(slides.length - 1)}
                                    className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 h-14 rounded-xl font-medium tracking-wide"
                                >
                                    <AlertCircle className="w-5 h-5 mr-2 text-amber-400" /> Complete System Check
                                </Button>
                            )}
                        </motion.div>
                    ) : (
                        <motion.button
                            key="skip-btn"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-zinc-500 hover:text-white text-sm font-medium tracking-wider uppercase hover:underline underline-offset-4 transition-all"
                            onClick={() => api?.scrollTo(slides.length - 1)}
                        >
                            Skip to Verification
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

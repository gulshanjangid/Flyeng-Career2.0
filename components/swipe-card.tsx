"use client"

import { motion, PanInfo, useMotionValue, useTransform } from "framer-motion"
import { Building, MapPin, DollarSign, ExternalLink, Clock, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Job {
    id: string | number
    title: string
    company: string
    location: string
    salary?: string
    url: string
    logo?: string
    postedAt?: string
    type?: string
    description?: string // Added description
    freshness?: string // Added freshness label
}

interface SwipeCardProps {
    job: Job
    onSwipe: (direction: 'left' | 'right') => void
}

export function SwipeCard({ job, onSwipe }: SwipeCardProps) {
    const x = useMotionValue(0)
    const rotate = useTransform(x, [-200, 200], [-25, 25])
    const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0])
    const background = useTransform(
        x,
        [-200, 0, 200],
        ["rgba(239, 68, 68, 0.2)", "rgba(25 now, 255, 255, 0.05)", "rgba(34, 197, 94, 0.2)"]
    )

    const handleDragEnd = (event: any, info: PanInfo) => {
        if (info.offset.x > 100) {
            onSwipe('right')
        } else if (info.offset.x < -100) {
            onSwipe('left')
        }
    }

    return (
        <motion.div
            style={{ x, rotate, opacity, background }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="absolute top-0 left-0 w-full h-full rounded-3xl border border-white/10 p-6 shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing backdrop-blur-md bg-black/60"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-2xl font-bold uppercase text-white/80 border border-white/10 relative overflow-hidden">
                            {job.logo ? (
                                <img src={job.logo} alt={job.company} className="w-full h-full object-cover rounded-2xl" />
                            ) : (
                                job.company.charAt(0)
                            )}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white leading-tight mb-1 line-clamp-2">{job.title}</h3>
                            <div className="flex items-center text-white/60 text-sm gap-2">
                                <Building className="w-4 h-4" />
                                <span>{job.company}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        {job.freshness && (
                             <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                                job.freshness === '24h' 
                                ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                                : job.freshness === '3d'
                                ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                                : 'bg-red-500/20 text-red-400 border-red-500/30'
                             }`}>
                                {job.freshness === 'All Time' ? 'Archived' : job.freshness}
                             </span>
                        )}
                        {job.postedAt && (
                             <span className="text-xs font-mono text-cyan-400">
                                {job.postedAt}
                             </span>
                        )}
                    </div>
                </div>

                {/* Tags / Info */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-white/70 bg-white/5 p-2 rounded-lg border border-white/5">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        <span className="truncate">{job.location || 'Remote'}</span>
                    </div>
                    {job.salary && (
                         <div className="flex items-center gap-2 text-sm text-white/70 bg-white/5 p-2 rounded-lg border border-white/5">
                            <DollarSign className="w-4 h-4 text-green-400" />
                            <span className="truncate">{job.salary}</span>
                        </div>
                    )}
                    <div className="flex items-center gap-2 text-sm text-white/70 bg-white/5 p-2 rounded-lg border border-white/5">
                        <Globe className="w-4 h-4 text-blue-400" />
                        <span className="truncate">{job.type || 'Full-time'}</span>
                    </div>
                </div>

                {/* Description Snippet (Optional) */}
                <div className="flex-1 overflow-hidden relative mb-6">
                    <p className="text-white/60 text-sm leading-relaxed line-clamp-[8]">
                        {job.description || "No description provided. Swipe right to view full details on the application portal."}
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0a0a1a] to-transparent" />
                </div>

                {/* Actions Hint */}
                <div className="flex justify-between items-center text-xs font-medium text-white/40 uppercase tracking-widest mt-auto">
                    <span className="flex items-center gap-1 group-hover:text-red-400 transition-colors">
                        ← Swipe Left to Skip
                    </span>
                    <span className="flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                        Swipe Right to Apply →
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

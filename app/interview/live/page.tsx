'use client'
// Force rebuild: v2

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

const LiveInterviewClient = dynamic(
    () => import('./live-interview-client'),
    { 
        ssr: false
    }
)

function LoadingScreen({ message }: { message: string }) {
    return (
        <div className="h-screen w-full bg-black text-white flex flex-col items-center justify-center gap-4 relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
             <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 flex flex-col items-center gap-4"
             >
                 <div className="w-16 h-16 rounded-full border-4 border-white/10 border-t-purple-500 animate-spin" />
                 <p className="text-white/60 font-mono text-sm tracking-widest uppercase animate-pulse">{message}</p>
             </motion.div>
        </div>
    )
}

export default function LiveInterviewPage() {
    return (
        <Suspense fallback={<LoadingScreen message="Establishing Secure Connection..." />}>
            <LiveInterviewClient />
        </Suspense>
    )
}

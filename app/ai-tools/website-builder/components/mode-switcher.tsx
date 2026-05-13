// app/ai-tools/website-builder/components/mode-switcher.tsx
"use client";

import { useBuilderStore } from '@/lib/stores/builder-store';
import { motion } from 'framer-motion';

export function ModeSwitcher() {
    const { mode, setMode } = useBuilderStore();

    return (
        <div className="hidden md:flex bg-slate-800/50 p-1 rounded-lg border border-slate-700/50 relative">
            <div className="absolute inset-0 flex p-1">
                <motion.div
                    layoutId="active-mode"
                    className="w-1/2 h-full bg-slate-700 rounded-md shadow-sm"
                    initial={false}
                    animate={{ x: mode === 'ai' ? '0%' : '100%' }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            </div>

            <button
                onClick={() => setMode('ai')}
                className={`flex-1 relative z-10 text-xs font-semibold py-1.5 text-center transition-colors ${mode === 'ai' ? 'text-white' : 'text-slate-400'}`}
            >
                AI Mode
            </button>
            <button
                onClick={() => setMode('drag')}
                className={`flex-1 relative z-10 text-xs font-semibold py-1.5 text-center transition-colors ${mode === 'drag' ? 'text-white' : 'text-slate-400'}`}
            >
                Drag & Drop
            </button>
        </div>
    );
}

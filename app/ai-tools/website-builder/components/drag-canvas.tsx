"use client";

import React from 'react';
import { useBuilderStore } from '@/lib/stores/builder-store';
import { motion, AnimatePresence } from 'framer-motion';

export function DragDropCanvas() {
    const { isDraggingComponent } = useBuilderStore();

    return (
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col p-4 gap-4">
            <AnimatePresence>
                {isDraggingComponent && (
                    <>
                        {/* Top Drop Zone */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="h-24 w-full border-2 border-dashed border-violet-500/30 bg-violet-500/5 rounded-xl flex items-center justify-center backdrop-blur-[2px] transition-colors hover:bg-violet-500/10 hover:border-violet-500/60"
                        >
                            <span className="font-bold text-violet-300 text-sm tracking-widest uppercase">Drop Header</span>
                        </motion.div>

                        {/* Main Drop Zone */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex-1 w-full border-2 border-dashed border-white/10 bg-transparent rounded-xl flex items-center justify-center"
                        >
                            <span className="font-medium text-white/20">Drop Component Here</span>
                        </motion.div>

                        {/* Bottom Drop Zone */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="h-24 w-full border-2 border-dashed border-violet-500/30 bg-violet-500/5 rounded-xl flex items-center justify-center backdrop-blur-[2px] transition-colors hover:bg-violet-500/10 hover:border-violet-500/60"
                        >
                            <span className="font-bold text-violet-300 text-sm tracking-widest uppercase">Drop Footer</span>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

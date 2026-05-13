"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Sidebar } from "./sidebar"
import { Canvas } from "./canvas"
import { PropertiesPanel } from "./properties-panel"
import { useBuilder } from "../builder-context"

/**
 * VisualEditorView
 * 
 * The main layout for the visual editing experience.
 * Orchestrates the Sidebar, Canvas, and Properties Panel.
 */
export function VisualEditorView() {
    const { state } = useBuilder()

    return (
        <div className="flex-1 flex overflow-hidden pt-14 h-screen">
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="h-full z-40"
                >
                    <Sidebar />
                </motion.div>
            </AnimatePresence>

            <Canvas />

            <AnimatePresence mode="wait">
                {state.selectedId && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="h-full z-40"
                    >
                        <PropertiesPanel />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

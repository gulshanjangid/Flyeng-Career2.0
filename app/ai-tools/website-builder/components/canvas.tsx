"use client"

import { motion, Reorder } from "framer-motion"
import { Plus, Monitor, Tablet, Smartphone, Scan } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

import { useBuilder } from "../builder-context"
import { RenderComponent } from "./render-component"

export function Canvas() {
    const { state, dispatch } = useBuilder()

    // Calculate width based on device
    const width = state.device === 'mobile' ? '375px' : state.device === 'tablet' ? '768px' : '100%'

    return (
        <div className="flex-1 bg-[#050505] relative overflow-hidden flex flex-col">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Canvas Toolbar */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/10 p-1.5 rounded-full shadow-2xl">
                <div className="flex items-center gap-1 px-2 border-r border-white/10 mr-1">
                    <button
                        onClick={() => dispatch({ type: 'SET_DEVICE', payload: 'desktop' })}
                        className={cn("p-2 rounded-full transition-colors", state.device === 'desktop' ? "bg-white text-black" : "text-white/40 hover:text-white hover:bg-white/10")}
                        title="Desktop View"
                    >
                        <Monitor className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => dispatch({ type: 'SET_DEVICE', payload: 'tablet' })}
                        className={cn("p-2 rounded-full transition-colors", state.device === 'tablet' ? "bg-white text-black" : "text-white/40 hover:text-white hover:bg-white/10")}
                        title="Tablet View"
                    >
                        <Tablet className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => dispatch({ type: 'SET_DEVICE', payload: 'mobile' })}
                        className={cn("p-2 rounded-full transition-colors", state.device === 'mobile' ? "bg-white text-black" : "text-white/40 hover:text-white hover:bg-white/10")}
                        title="Mobile View"
                    >
                        <Smartphone className="w-4 h-4" />
                    </button>
                </div>
                <button
                    onClick={() => dispatch({ type: 'TOGGLE_XRAY' })}
                    className={cn("p-2 rounded-full transition-colors flex items-center gap-2 px-3", state.xrayMode ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50" : "text-white/40 hover:text-white hover:bg-white/10")}
                    title="Toggle X-Ray Mode"
                >
                    <Scan className="w-4 h-4" />
                    <span className="text-xs font-medium hidden md:block">X-Ray</span>
                </button>
            </div>

            <ScrollArea className="flex-1 relative z-10">
                <div id="builder-canvas" className="min-h-full flex justify-center p-12">
                    <motion.div
                        layout
                        style={{ width }}
                        className={cn(
                            "transition-all duration-500 ease-in-out relative group/canvas",
                            state.device === 'mobile' ? "min-h-[800px] rounded-[3rem] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden bg-white" :
                                state.device === 'tablet' ? "min-h-[1024px] rounded-[2rem] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden bg-white" :
                                    "min-h-full w-full bg-white shadow-2xl"
                        )}
                    >
                        {/* Mobile Notch */}
                        {state.device === 'mobile' && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-xl z-50 flex items-center justify-center">
                                <div className="w-12 h-1 bg-[#333] rounded-full" />
                            </div>
                        )}

                        {state.components.length === 0 ? (
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 flex-col gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
                                    <Plus className="w-8 h-8 text-gray-300" />
                                </div>
                                <p>Drag components here or ask AI to build it</p>
                            </div>
                        ) : (
                            <Reorder.Group axis="y" values={state.components} onReorder={(newOrder) => dispatch({ type: 'REORDER_COMPONENTS', payload: newOrder })}>
                                {state.components.map((comp) => (
                                    <Reorder.Item key={comp.id} value={comp}>
                                        <RenderComponent component={comp} isSelected={state.selectedId === comp.id} />
                                    </Reorder.Item>
                                ))}
                            </Reorder.Group>
                        )}
                    </motion.div>
                </div>
            </ScrollArea>
        </div>
    )
}

"use client"

import { useContext } from "react"
import { Sparkles, MousePointer2, Monitor, Tablet, Smartphone, Undo, Redo, Trash2, Eye, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
// Ensure correct import path - assuming we are in app/ai-tools/website-builder/components
import { useBuilder } from "../builder-context"

interface TopBarProps {
    onPreview: () => void
    onPublish: () => void
    onClear: () => void
}

export function TopBar({ onPreview, onPublish, onClear }: TopBarProps) {
    const { state, dispatch } = useBuilder()

    return (
        <header className="h-14 border-b border-white/10 bg-[#0a0a0a]/50 backdrop-blur-md flex items-center justify-between px-4 z-50">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        FC <span className="font-light">Builder</span>
                    </span>
                </div>
                <div className="h-6 w-px bg-white/10 mx-2" />
                <div className="flex bg-white/5 rounded-full p-1 border border-white/5">
                    <button
                        onClick={() => dispatch({ type: 'SET_MODE', payload: 'ai' })}
                        className={cn("px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2", state.mode === 'ai' ? "bg-cyan-500/20 text-cyan-300 shadow-sm ring-1 ring-cyan-500/50" : "text-white/60 hover:text-white hover:bg-white/5")}
                    >
                        <Sparkles className="w-3.5 h-3.5" /> AI Architect
                    </button>
                    <button
                        onClick={() => dispatch({ type: 'SET_MODE', payload: 'visual' })}
                        className={cn("px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2", state.mode === 'visual' ? "bg-purple-500/20 text-purple-300 shadow-sm ring-1 ring-purple-500/50" : "text-white/60 hover:text-white hover:bg-white/5")}
                    >
                        <MousePointer2 className="w-3.5 h-3.5" /> Visual Editor
                    </button>
                </div>
                <div className="h-6 w-px bg-white/10 mx-2" />
                <div className="flex bg-white/5 rounded-lg p-1 border border-white/5">
                    <button
                        onClick={() => dispatch({ type: 'SET_DEVICE', payload: 'desktop' })}
                        className={cn("px-3 py-1 rounded-md text-xs font-medium transition-all", state.device === 'desktop' ? "bg-white/10 text-white shadow-sm" : "text-white/60 hover:text-white hover:bg-white/5")}
                    >
                        <Monitor className="w-3.5 h-3.5" />
                    </button>
                    <button
                        onClick={() => dispatch({ type: 'SET_DEVICE', payload: 'tablet' })}
                        className={cn("px-3 py-1 rounded-md text-xs font-medium transition-all", state.device === 'tablet' ? "bg-white/10 text-white shadow-sm" : "text-white/60 hover:text-white hover:bg-white/5")}
                    >
                        <Tablet className="w-3.5 h-3.5" />
                    </button>
                    <button
                        onClick={() => dispatch({ type: 'SET_DEVICE', payload: 'mobile' })}
                        className={cn("px-3 py-1 rounded-md text-xs font-medium transition-all", state.device === 'mobile' ? "bg-white/10 text-white shadow-sm" : "text-white/60 hover:text-white hover:bg-white/5")}
                    >
                        <Smartphone className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-white/60 hover:text-white" onClick={() => dispatch({ type: 'UNDO' })}><Undo className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-white/60 hover:text-white" onClick={() => dispatch({ type: 'REDO' })}><Redo className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-white/60 hover:text-red-400 hover:bg-red-500/10" onClick={onClear} title="Clear Canvas"><Trash2 className="w-4 h-4" /></Button>
                <div className="h-6 w-px bg-white/10 mx-2" />
                <Button
                    className="h-8 bg-white text-black hover:bg-gray-200 text-xs font-semibold gap-2"
                    onClick={onPreview}
                >
                    <Eye className="w-3.5 h-3.5" /> Preview
                </Button>
                <Button
                    className="h-8 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0 text-xs font-semibold gap-2 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    onClick={onPublish}
                >
                    <Download className="w-3.5 h-3.5" /> Publish
                </Button>
            </div>
        </header>
    )
}

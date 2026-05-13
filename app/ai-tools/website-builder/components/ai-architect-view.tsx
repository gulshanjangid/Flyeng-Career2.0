"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Monitor, Smartphone, Tablet, ChevronLeft, Send, Sparkles, Folder, FileCode, Check, Copy, RefreshCw, X, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

import { useBuilder } from "../builder-context"

// Mock AI Service (Replace with actual API call)
const mockGenerateCode = async (prompt: string, currentFiles: any[]) => {
    return new Promise(resolve => setTimeout(() => {
        resolve({
            files: [
                {
                    name: 'index.html',
                    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Generated Site</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-black text-white">
    <nav class="p-6 flex justify-between items-center backdrop-blur-md fixed w-full z-50">
        <div class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Logo</div>
        <div class="space-x-4">
            <a href="#" class="hover:text-blue-400 transition-colors">Home</a>
            <a href="#" class="hover:text-blue-400 transition-colors">About</a>
            <a href="#" class="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">Contact</a>
        </div>
    </nav>
    <main class="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-0"></div>
        <div class="text-center z-10 p-4">
            <h1 class="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                ${prompt.includes('portfolio') ? 'Creative Developer' : 'Build Something Amazing'}
            </h1>
            <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                AI-driven development for the modern web. Experience the future of coding today.
            </p>
            <div class="flex gap-4 justify-center">
                <button class="px-8 py-3 bg-blue-600 rounded-full font-medium hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                    Get Started
                </button>
                <button class="px-8 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors">
                    Learn More
                </button>
            </div>
        </div>
    </main>
</body>
</html>`
                },
                {
                    name: 'style.css',
                    content: `/* Custom Styles */
body {
    font-family: 'Inter', sans-serif;
}
.glass {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}`
                }
            ],
            message: "I've generated a modern landing page structure based on your request. Let me know if you want to tweak colors or layout."
        })
    }, 2000))
}

export function AIArchitectView() {
    const { state, dispatch } = useBuilder()
    const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([
        { role: 'ai', content: "Hello! I'm your AI Architect. I can write code, create files, and build complex features. What are we building today?" }
    ])
    const [input, setInput] = useState("")
    const [isGenerating, setIsGenerating] = useState(false)
    const [activeFile, setActiveFile] = useState<string | null>('index.html')
    const [previewKey, setPreviewKey] = useState(0)

    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    // Initialize files if empty
    useEffect(() => {
        if (state.files.length === 0) {
            dispatch({
                type: 'SET_FILES', payload: [
                    {
                        name: 'public', type: 'folder', children: [
                            { name: 'index.html', type: 'file', content: '<!-- Start building -->\n<h1>Hello World</h1>' },
                            { name: 'style.css', type: 'file', content: 'body { background: #000; color: #fff; }' }
                        ]
                    }
                ]
            })
        }
    }, [])

    const handleSend = async () => {
        if (!input.trim()) return

        const userMsg = input
        setMessages(prev => [...prev, { role: 'user', content: userMsg }])
        setInput("")
        setIsGenerating(true)

        try {
            // In a real app, we would send the full file context here
            const response: any = await mockGenerateCode(userMsg, state.files)

            setMessages(prev => [...prev, { role: 'ai', content: response.message }])

            // Update files structure
            // Simplified: finding the public folder and updating its children
            const newFiles = [...state.files]
            const publicFolder = newFiles.find(f => f.name === 'public')
            if (publicFolder) {
                response.files.forEach((newFile: any) => {
                    const existingIdx = publicFolder.children.findIndex((c: any) => c.name === newFile.name)
                    if (existingIdx >= 0) {
                        publicFolder.children[existingIdx].content = newFile.content
                    } else {
                        publicFolder.children.push({ name: newFile.name, type: 'file', content: newFile.content })
                    }
                })
            }
            dispatch({ type: 'SET_FILES', payload: newFiles })
            setPreviewKey(k => k + 1) // Force refresh iframe

        } catch (error) {
            toast.error("Failed to generate code")
        } finally {
            setIsGenerating(false)
        }
    }

    const getFileContent = (filename: string) => {
        const publicFolder = state.files.find(f => f.name === 'public')
        return publicFolder?.children?.find((c: any) => c.name === filename)?.content || ''
    }

    return (
        <div className="flex h-screen bg-[#050505] text-white overflow-hidden pt-14">
            {/* Sidebar: File Tree & Chat */}
            <div className="w-[400px] flex flex-col border-r border-white/10 bg-[#0a0a0a]">
                <div className="flex-1 flex flex-col min-h-0">
                    {/* File Explorer Section */}
                    <div className="p-4 border-b border-white/10">
                        <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2 flex items-center gap-2">
                            <Folder className="w-3 h-3" /> Explorer
                        </h3>
                        <div className="space-y-1">
                            {state.files.map((item, i) => (
                                <div key={i} className="pl-2">
                                    <div className="flex items-center gap-2 py-1 px-2 rounded hover:bg-white/5 text-sm text-white/80">
                                        <Folder className="w-4 h-4 text-blue-400" /> {item.name}
                                    </div>
                                    <div className="pl-4 border-l border-white/10 ml-2 space-y-0.5 mt-1">
                                        {item.children?.map((child: any, j: number) => (
                                            <div
                                                key={j}
                                                onClick={() => setActiveFile(child.name)}
                                                className={cn(
                                                    "flex items-center gap-2 py-1 px-2 rounded cursor-pointer text-sm transition-colors",
                                                    activeFile === child.name ? "bg-cyan-500/10 text-cyan-400" : "text-white/60 hover:bg-white/5 hover:text-white"
                                                )}
                                            >
                                                <FileCode className="w-4 h-4 opacity-70" /> {child.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chat Section */}
                    <div className="flex-1 flex flex-col min-h-0">
                        <div className="p-3 border-b border-white/10 bg-white/5 backdrop-blur">
                            <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider flex items-center gap-2">
                                <Sparkles className="w-3 h-3 text-purple-400" /> Architect AI
                            </h3>
                        </div>
                        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                            <div className="space-y-4">
                                {messages.map((msg, i) => (
                                    <div key={i} className={cn("flex gap-3", msg.role === 'user' ? "flex-row-reverse" : "")}>
                                        <div className={cn(
                                            "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border",
                                            msg.role === 'ai' ? "bg-purple-500/10 border-purple-500/20 text-purple-400" : "bg-white/10 border-white/20 text-white"
                                        )}>
                                            {msg.role === 'ai' ? <Sparkles className="w-4 h-4" /> : <div className="text-xs font-bold">You</div>}
                                        </div>
                                        <div className={cn(
                                            "p-3 rounded-2xl max-w-[85%] text-sm leading-relaxed",
                                            msg.role === 'ai' ? "bg-white/5 border border-white/10 text-white/90" : "bg-cyan-600/20 border border-cyan-500/20 text-cyan-100"
                                        )}>
                                            {msg.content}
                                        </div>
                                    </div>
                                ))}
                                {isGenerating && (
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border bg-purple-500/10 border-purple-500/20 text-purple-400">
                                            <Sparkles className="w-4 h-4 animate-spin" />
                                        </div>
                                        <div className="flex gap-1 h-8 items-center p-3 rounded-2xl bg-white/5 border border-white/10">
                                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </ScrollArea>
                        <div className="p-4 border-t border-white/10 bg-black/40">
                            <div className="relative">
                                <Input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask Architect to change code..."
                                    className="pr-10 bg-white/5 border-white/10 focus:border-purple-500/50"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={isGenerating || !input.trim()}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-purple-500 text-white hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <Send className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Code / Preview Area */}
            <div className="flex-1 flex flex-col bg-[#050505] relative overflow-hidden">
                {/* Tabs */}
                <div className="flex items-center justify-between px-4 border-b border-white/10 h-10 bg-[#0a0a0a]">
                    <div className="flex h-full">
                        {['Code', 'Preview'].map((tab) => (
                            <button
                                key={tab}
                                // Since we are doing a split view, this toggles focus or could handle mode switching
                                // For now, let's keep it simple
                                className="px-4 h-full text-xs font-medium border-b-2 border-transparent hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2 text-white/60"
                            >
                                {tab === 'Code' ? <FileCode className="w-3 h-3" /> : <Play className="w-3 h-3" />} {tab}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => setPreviewKey(k => k + 1)} className="p-1.5 text-white/40 hover:text-white transition-colors" title="Reload Preview"><RefreshCw className="w-3 h-3" /></button>
                    </div>
                </div>

                <div className="flex-1 flex">
                    {/* Editor Pane */}
                    <div className="flex-1 border-r border-white/10 bg-[#0c0c0c] flex flex-col">
                        <div className="text-xs text-white/30 px-4 py-2 bg-[#080808] font-mono border-b border-white/5">{activeFile || 'No file selected'}</div>
                        <textarea
                            className="flex-1 w-full bg-transparent p-4 font-mono text-sm text-white/80 resize-none focus:outline-none leading-relaxed"
                            value={getFileContent(activeFile || '')}
                            readOnly // Simple read-only for now, full editor is complex
                            spellCheck={false}
                        />
                    </div>

                    {/* Preview Pane */}
                    <div className="flex-1 bg-white relative">
                        <iframe
                            key={previewKey}
                            title="Preview"
                            className="w-full h-full border-none"
                            srcDoc={(() => {
                                const html = getFileContent('index.html')
                                const css = getFileContent('style.css')
                                // Inject CSS into HTML
                                return html.replace('</head>', `<style>${css}</style></head>`)
                            })()}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

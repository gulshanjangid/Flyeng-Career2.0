"use client"

import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, FileText, Copy, Loader2, AlignLeft, Upload, Zap, Layers, Sparkles, File, Activity, BrainCircuit } from 'lucide-react'
import Link from "next/link"
import { useState, useRef } from "react"
import { useToast } from "@/components/ui/use-toast"

export default function SummarizerApp() {
    const [text, setText] = useState("")
    const [file, setFile] = useState<File | null>(null)
    const [summary, setSummary] = useState("")
    const [loading, setLoading] = useState(false)
    const [options, setOptions] = useState({
        length: "medium",
        format: "bullet"
    })
    const { toast } = useToast()
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleSummarize = async () => {
        if (!text && !file) {
            toast({
                title: "Error",
                description: "Please enter text or upload a file.",
                variant: "destructive"
            })
            return
        }
        setLoading(true)
        setSummary("")

        try {
            const formData = new FormData()
            if (file) {
                formData.append('file', file)
            } else {
                formData.append('text', text)
            }
            formData.append('length', options.length)
            formData.append('format', options.format)

            const response = await fetch("/api/summarizer/generate", {
                method: "POST",
                body: formData
            })

            const data = await response.json()

            if (!response.ok) throw new Error(data.error || "Failed to generate")

            setTimeout(() => {
                setLoading(false)

                // Liquid typing effect
                let i = 0
                const resultText = data.content
                const interval = setInterval(() => {
                    setSummary(prev => resultText.slice(0, i))
                    i += 8
                    if (i > resultText.length) {
                        clearInterval(interval)
                        setSummary(resultText)
                    }
                }, 10)
            }, 2000)

        } catch (error: any) {
            console.error(error)
            if (error?.message?.includes('413') || error?.message?.toLowerCase().includes('large')) {
                toast({
                    title: "File Too Large",
                    description: "Please upload a document strictly under 2MB.",
                    variant: "destructive"
                })
            } else {
                toast({
                    title: "Error",
                    description: error?.message || "Failed to generate summary.",
                    variant: "destructive"
                })
            }
            setLoading(false)
        }
    }

    const handleFileUpload = (e: any) => {
        e.preventDefault()
        e.stopPropagation()
        
        let selectedFile: File | undefined | null = null;
        
        if ('dataTransfer' in e) {
            selectedFile = e.dataTransfer.files?.[0]
        } else {
            selectedFile = e.target.files?.[0]
        }
        
        if (!selectedFile) return

        const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

        if (selectedFile.size > MAX_FILE_SIZE) {
            toast({
                title: "Size Limit Exceeded",
                description: `File is too large! ${(selectedFile.size / 1024 / 1024).toFixed(2)}MB exceeds the 2MB limit.`,
                variant: "destructive"
            })
            if (fileInputRef.current) fileInputRef.current.value = ""
            return
        }

        if (
            selectedFile.type === "application/pdf" || 
            selectedFile.type === "text/plain" ||
            selectedFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
            selectedFile.name.endsWith(".docx")
        ) {
            setFile(selectedFile)
            setText("") // Clear text if file is uploaded
            toast({
                title: "File Attached",
                description: `Successfully loaded ${selectedFile.name}`,
            })
        } else {
            toast({
                title: "Invalid Format",
                description: "Only PDF, TXT, and DOCX files are supported.",
                variant: "destructive"
            })
            if (fileInputRef.current) fileInputRef.current.value = ""
        }
    }

    const clearInput = () => {
        setText("")
        setFile(null)
        if (fileInputRef.current) fileInputRef.current.value = ""
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(summary)
        toast({
            title: "Copied!",
            description: "Summary copied to clipboard."
        })
    }

    return (
        <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-indigo-500/30 flex flex-col overflow-hidden relative">
            <SiteHeader />

            {/* Ambient Lighting */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            <main 
                className="flex-1 container mx-auto px-4 pt-20 md:pt-24 pb-6 flex flex-col relative z-10 max-w-7xl overflow-hidden"
                onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onDragEnter={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onDragLeave={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onDrop={handleFileUpload}
            >
                {/* Header Area */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <Link href="/ai-tools/summarizer" className="text-white/40 hover:text-white flex items-center gap-2 transition-colors group font-medium text-sm w-fit mb-4">
                            <div className="p-1.5 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                            </div>
                            Back to Overview
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                            Summarize.
                        </h1>
                    </div>
                </div>

                {/* Main Split Interface */}
                <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0 pb-4">
                    
                    {/* LEFT COLUMN - INPUT */}
                    <div className="flex-1 flex flex-col bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl relative min-h-[500px] max-w-full lg:max-w-[50%]">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50" />
                        
                        {/* Section Header */}
                        <div className="px-6 py-4 flex items-center justify-between border-b border-white/5 bg-black/20">
                            <h2 className="text-sm font-bold flex items-center gap-3 text-white uppercase tracking-wider">
                                <FileText className="w-4 h-4 text-indigo-400" />
                                Source Data
                            </h2>
                            <div className="flex gap-2 relative">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-8 text-xs font-medium bg-transparent border-white/10 text-white/70 hover:text-white hover:bg-white/5 rounded-lg relative overflow-hidden"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (fileInputRef.current) {
                                            fileInputRef.current.click();
                                        }
                                    }}
                                >
                                    <Upload className="w-3.5 h-3.5 mr-2" /> Upload File (Max 2MB)
                                </Button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    accept=".pdf,.txt,.docx"
                                    onChange={handleFileUpload}
                                />
                                {(text || file) && (
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="h-8 text-xs font-medium text-white/40 hover:text-red-400 hover:bg-red-400/10 rounded-lg"
                                        onClick={clearInput}
                                    >
                                        Clear
                                    </Button>
                                )}
                            </div>
                        </div>

                        {/* Input Area */}
                        <div 
                            className="flex-1 relative p-6 bg-black/10"
                            onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                            onDragEnter={(e) => { e.preventDefault(); e.stopPropagation(); }}
                            onDragLeave={(e) => { e.preventDefault(); e.stopPropagation(); }}
                            onDrop={handleFileUpload}
                        >
                            {file ? (
                                <div className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-indigo-500/20 rounded-2xl bg-indigo-500/5 hover:bg-indigo-500/10 transition-colors group">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <File className="w-8 h-8 text-indigo-400" />
                                    </div>
                                    <p className="text-lg font-semibold text-white mb-1">{file.name}</p>
                                    <p className="text-sm text-white/40 mb-4">{(file.size / 1024 / 1024).toFixed(2)} MB • {file.type.split('/')[1].toUpperCase()}</p>
                                    <Button variant="outline" size="sm" onClick={clearInput} className="bg-transparent border-white/10 hover:bg-white/5 text-white/70">
                                        Remove File
                                    </Button>
                                </div>
                            ) : (
                                <Textarea
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    className="w-full h-full bg-transparent border-none resize-none text-base md:text-lg leading-relaxed text-white/90 placeholder:text-white/20 focus:ring-0 p-0 font-light"
                                    placeholder="Paste the text you want to condense here, or drag and drop a PDF/TXT file directly into this area."
                                />
                            )}
                        </div>

                        {/* Settings & Action */}
                        <div className="p-6 bg-black/40 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4">
                            <div className="flex gap-4 w-full sm:w-auto">
                                <Select value={options.length} onValueChange={(val) => setOptions({ ...options, length: val })}>
                                    <SelectTrigger className="h-12 bg-white/5 border-white/10 rounded-xl text-sm w-full sm:w-[130px] text-white hover:bg-white/10 transition-colors focus:ring-indigo-500/50">
                                        <SelectValue placeholder="Length" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#111] border-white/10 text-white rounded-xl">
                                        <SelectItem value="short">Short</SelectItem>
                                        <SelectItem value="medium">Medium</SelectItem>
                                        <SelectItem value="long">Detailed</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select value={options.format} onValueChange={(val) => setOptions({ ...options, format: val })}>
                                    <SelectTrigger className="h-12 bg-white/5 border-white/10 rounded-xl text-sm w-full sm:w-[130px] text-white hover:bg-white/10 transition-colors focus:ring-indigo-500/50">
                                        <SelectValue placeholder="Format" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#111] border-white/10 text-white rounded-xl">
                                        <SelectItem value="bullet">Bullets</SelectItem>
                                        <SelectItem value="paragraph">Paragraphs</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            
                            <Button
                                className="w-full sm:flex-1 h-12 bg-white text-black hover:bg-slate-200 rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 group relative overflow-hidden"
                                onClick={handleSummarize}
                                disabled={loading || (!text && !file)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                {loading ? (
                                    <div className="flex items-center gap-2">
                                        <Loader2 className="w-4 h-4 animate-spin" /> Processing Data...
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2 relative z-10">
                                        <Zap className="w-4 h-4" /> Extract Insights
                                    </div>
                                )}
                            </Button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - OUTPUT */}
                    <div className="flex-1 flex flex-col bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl relative min-h-[500px] max-w-full lg:max-w-[50%]">
                        {summary && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-50" />}
                        
                        {/* Section Header */}
                        <div className="px-6 py-4 flex items-center justify-between border-b border-white/5 bg-black/20">
                            <h2 className="text-sm font-bold flex items-center gap-3 text-white uppercase tracking-wider">
                                <AlignLeft className="w-4 h-4 text-emerald-400" />
                                Extracted Summary
                            </h2>
                            {summary && (
                                <Button size="sm" variant="outline" className="h-8 text-xs font-medium bg-transparent border-white/10 text-white/70 hover:text-white hover:bg-white/5 rounded-lg" onClick={copyToClipboard}>
                                    <Copy className="w-3.5 h-3.5 mr-2" /> Copy Result
                                </Button>
                            )}
                        </div>

                        {/* Output Area */}
                        <div className="flex-1 relative p-6 md:p-8 bg-black/10 overflow-hidden flex flex-col">
                            <AnimatePresence mode="wait">
                                {loading ? (
                                    <motion.div
                                        key="loading"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex flex-col items-center justify-center bg-transparent backdrop-blur-sm z-10"
                                    >
                                        <div className="relative w-24 h-24 mb-6">
                                            <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full" />
                                            <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                                            <div className="absolute inset-0 flex items-center justify-center text-indigo-400">
                                                <BrainCircuit className="w-8 h-8 animate-pulse" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Synthesizing...</h3>
                                        <p className="text-sm text-indigo-300/60 font-medium tracking-widest uppercase">Running NLP Models</p>
                                    </motion.div>
                                ) : summary ? (
                                    <motion.div
                                        key="result"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full overflow-y-auto custom-scrollbar pr-4"
                                    >
                                        <div className="prose prose-invert max-w-none">
                                            <div className="whitespace-pre-wrap leading-relaxed text-white/90 text-[15px] md:text-base font-medium">
                                                {summary}
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="empty"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="absolute inset-0 flex flex-col items-center justify-center text-white/20"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                            <Layers className="w-10 h-10 opacity-50" />
                                        </div>
                                        <p className="text-xl font-medium tracking-tight text-white/40">Awaiting your input</p>
                                        <p className="text-sm font-light mt-2 max-w-xs text-center">Summary will perfectly formulate here once processed.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

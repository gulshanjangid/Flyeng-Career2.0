"use client"

import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Code2, Terminal, Loader2, Play, Copy, Check } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { generateAIResponse } from "@/lib/ai-helper"
import { toast } from "sonner"
import ReactMarkdown from 'react-markdown'

export default function CodeExplainerApp() {
    const [code, setCode] = useState("")
    const [explanation, setExplanation] = useState("")
    const [loading, setLoading] = useState(false)
    const [copied, setCopied] = useState(false)

    const handleExplain = async () => {
        if (!code) return;
        setLoading(true);
        try {
            const result = await generateAIResponse(
                `Explain this code snippet simply and clearly:\n\n${code}`,
                "You are a senior developer explaining code to a junior. Use markdown."
            );
            setExplanation(result);
        } catch (error) {
            toast.error("Failed to explain code.");
        } finally {
            setLoading(false);
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(explanation);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        toast.success("Explanation copied!");
    }

    return (
        <div className="min-h-screen bg-[#0d1117] text-green-400 flex flex-col font-mono selection:bg-green-900 selection:text-white">
            <SiteHeader />

            {/* Matrix Background */}
            <div className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(34, 197, 94, .3) 25%, rgba(34, 197, 94, .3) 26%, transparent 27%, transparent 74%, rgba(34, 197, 94, .3) 75%, rgba(34, 197, 94, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(34, 197, 94, .3) 25%, rgba(34, 197, 94, .3) 26%, transparent 27%, transparent 74%, rgba(34, 197, 94, .3) 75%, rgba(34, 197, 94, .3) 76%, transparent 77%, transparent)`,
                    backgroundSize: '50px 50px'
                }}
            />

            <main className="flex-1 pt-20 flex flex-col md:flex-row h-[calc(100vh-5rem)] relative z-10">
                {/* Code Input */}
                <div className="w-full md:w-1/2 p-6 border-r border-green-900/30 flex flex-col bg-[#0d1117]">
                    <div className="flex items-center gap-4 mb-6">
                        <Link href="/ai-tools/code-explainer">
                            <Button variant="ghost" size="icon" className="text-green-600 hover:text-green-400 hover:bg-green-900/20">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <h1 className="text-xl font-bold flex items-center gap-2">
                            <Terminal className="w-5 h-5" /> INPUT_SOURCE
                        </h1>
                    </div>

                    <div className="flex-1 relative rounded-lg overflow-hidden border border-green-900/50 bg-[#010409]">
                        <div className="absolute top-0 left-0 right-0 h-8 bg-green-900/10 flex items-center px-4 gap-2 border-b border-green-900/30">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <Textarea
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="w-full h-full bg-transparent border-none resize-none p-4 pt-12 font-mono text-sm text-slate-300 focus-visible:ring-0"
                            placeholder="// Paste your code snippet here..."
                        />
                        <div className="absolute bottom-4 right-4">
                            <Button
                                onClick={handleExplain}
                                disabled={!code || loading}
                                className="bg-green-600 hover:bg-green-700 text-black font-bold px-6 py-2 rounded-sm"
                            >
                                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 mr-2" />}
                                RUN_EXPLAINER
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Output */}
                <div className="w-full md:w-1/2 p-6 bg-[#0d1117] flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-xl font-bold flex items-center gap-2">
                            <Code2 className="w-5 h-5" /> OUTPUT_LOG
                        </h1>
                        {explanation && (
                            <Button
                                onClick={copyToClipboard}
                                variant="ghost"
                                className="text-green-600 hover:text-green-400 hover:bg-green-900/20"
                            >
                                {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                                {copied ? "COPIED" : "COPY"}
                            </Button>
                        )}
                    </div>

                    <div className="flex-1 bg-[#010409] border border-green-900/50 rounded-lg p-6 overflow-y-auto font-mono text-sm">
                        {explanation ? (
                            <div className="prose prose-invert prose-p:text-slate-300 prose-headings:text-green-400 prose-code:text-yellow-400 max-w-none">
                                <ReactMarkdown>{explanation}</ReactMarkdown>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-green-900/50">
                                <Terminal className="w-16 h-16 mb-4 opacity-20" />
                                <p>WAITING_FOR_INPUT...</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}

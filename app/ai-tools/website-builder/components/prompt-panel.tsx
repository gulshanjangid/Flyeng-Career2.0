// app/ai-tools/website-builder/components/prompt-panel.tsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useBuilderStore } from '@/lib/stores/builder-store';
import { Send, Sparkles, Loader2, StopCircle, Check, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function PromptPanel() {
    const { prompt, setPrompt, isGenerating, setIsGenerating, setFiles, setCurrentTab, files, triggerGeneration, setTriggerGeneration } = useBuilderStore();
    const [streamData, setStreamData] = useState<string[]>([]);
    const [showSuccess, setShowSuccess] = useState(false);
    const [isEnhancing, setIsEnhancing] = useState(false);
    const abortControllerRef = useRef<AbortController | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const submitRef = useRef<HTMLFormElement>(null); // Ref to trigger submit

    // Auto-trigger generation (Auto-Heal)
    useEffect(() => {
        if (triggerGeneration && prompt.trim()) {
            setTriggerGeneration(false);
            // Use timeout to ensure state update propagates
            setTimeout(() => {
                submitRef.current?.requestSubmit();
            }, 100);
        }
    }, [triggerGeneration, prompt, setTriggerGeneration]);

    // Auto-scroll to bottom of stream
    // ... (keep logic)

    const handleEnhance = async () => {
        if (!prompt.trim() || isEnhancing) return;
        setIsEnhancing(true);
        try {
            const res = await fetch('/api/enhance-prompt', {
                method: 'POST',
                body: JSON.stringify({ prompt }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await res.json();
            if (data.enhancedPrompt) {
                setPrompt(data.enhancedPrompt);
            }
        } catch (e) {
            console.error("Enhance failed", e);
        } finally {
            setIsEnhancing(false);
        }
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [streamData]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim() || isGenerating) return;

        setIsGenerating(true);
        setCurrentTab('code'); // Switch to code view to show "matrix" build effect
        setStreamData([]);

        // Get current code for iteration
        const currentCode = files.find(f => f.name === 'App.jsx' || f.name === 'App.tsx')?.content || '';

        // Abort controller for cancellation
        const controller = new AbortController();
        abortControllerRef.current = controller;

        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt, currentCode }),
                signal: controller.signal
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || `Generation failed: ${response.statusText}`);
            }

            const reader = response.body?.getReader();
            if (!reader) throw new Error('No reader available');

            const decoder = new TextDecoder();
            let buffer = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                buffer += chunk;

                const lines = buffer.split('\n');
                // The last element is the potential incomplete line, keep it in buffer
                // If the stream ended with \n, the last element is empty string, which is fine to buffer.
                buffer = lines.pop() || '';

                for (const line of lines) {
                    if (!line.trim()) continue;
                    try {
                        const data = JSON.parse(line);
                        // console.log("Stream Data:", data.type); 

                        if (data.type === 'token') {
                            setStreamData(prev => {
                                // Keep manageable history, but allow seeing progress
                                const newHistory = [...prev, data.content];
                                return newHistory.slice(-50); // Keep last 50 chunks
                            });
                        } else if (data.type === 'complete') {
                            console.log("Generation Complete. Updating files...");
                            // Update files in store
                            const { files } = data; // Expected { "name": "content", ... }

                            // Transform files to BuilderStore format
                            const newFiles = Object.entries(files).map(([name, content]) => ({
                                name,
                                language: name.endsWith('.css') ? 'css' : name.endsWith('.html') ? 'html' : 'javascript',
                                content: String(content)
                            }));

                            // Important: Set files AND turn off generating
                            setFiles(newFiles);
                            setCurrentTab('visual');
                            setIsGenerating(false);

                            // Trigger Success Animation
                            setShowSuccess(true);
                            setTimeout(() => setShowSuccess(false), 3000);
                        }
                    } catch (e) {
                        console.warn("JSON Parse Error on line:", line, e);
                    }
                }
            }
        } catch (error: any) {
            if (error.name !== 'AbortError') {
                console.error(error);
                alert("Failed to generate: " + error.message);
            }
        } finally {
            setIsGenerating(false);
            abortControllerRef.current = null;
        }
    };

    const handleStop = () => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            setIsGenerating(false);
        }
    };

    return (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-30">
            <AnimatePresence>
                {isGenerating && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="mb-4 bg-slate-900/90 backdrop-blur border border-slate-700 rounded-lg p-4 font-mono text-xs text-green-400 shadow-2xl overflow-hidden"
                    >
                        <div className="flex items-center gap-2 mb-2 text-slate-400">
                            <Loader2 className="animate-spin h-3 w-3" />
                            <span>Generating logic...</span>
                        </div>
                        <div className="break-all whitespace-pre-wrap h-16 overflow-y-auto">
                            {streamData.join('')}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <form ref={submitRef} onSubmit={handleSubmit} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity" />

                <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl shadow-indigo-500/10 flex items-center p-2 gap-2 overflow-hidden">
                    <AnimatePresence>
                        {showSuccess && (
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-100%" }}
                                className="absolute inset-0 z-20 bg-emerald-500/90 backdrop-blur-md flex items-center justify-center gap-3"
                            >
                                <div className="bg-white rounded-full p-1 shadow">
                                    <Check size={16} className="text-emerald-600" strokeWidth={3} />
                                </div>
                                <span className="font-bold text-white tracking-wide text-sm">Website Generated!</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div className="pl-3 text-slate-400">
                        <Sparkles size={18} />
                    </div>

                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={handleEnhance}
                        disabled={isEnhancing || isGenerating || !prompt.trim()}
                        className="h-8 w-8 text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10"
                        title="Enhance with AI"
                    >
                        {isEnhancing ? <Loader2 className="animate-spin" size={14} /> : <Wand2 size={14} />}
                    </Button>

                    {isGenerating ? (
                        // AI Output / Status Area
                        <div ref={scrollRef} className="flex-1 overflow-hidden p-4 relative font-mono text-[10px] md:text-xs leading-relaxed overflow-y-auto custom-scrollbar">
                            <div className="text-slate-500 mb-2">// Initializing Neural Link...</div>
                            {streamData.map((chunk, i) => (
                                <span key={i} className={
                                    chunk.includes('import') ? 'text-pink-400' :
                                        chunk.includes('function') ? 'text-blue-400' :
                                            chunk.includes('return') ? 'text-purple-400' :
                                                chunk.includes('<') || chunk.includes('/>') ? 'text-slate-600' :
                                                    'text-indigo-300'
                                }>
                                    {chunk}
                                </span>
                            ))}
                            <span className="inline-block w-2 h-4 bg-indigo-500 animate-pulse align-middle ml-1" />
                        </div>
                    ) : (
                        <input
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Describe your dream website (e.g. 'A futuristic agency landing page with neon gradients')..."
                            className="flex-1 bg-transparent border-none outline-none text-slate-200 placeholder:text-slate-500 h-10 px-2"
                            disabled={isGenerating}
                        />
                    )}


                    {isGenerating ? (
                        <Button
                            type="button"
                            onClick={handleStop}
                            size="sm"
                            variant="destructive"
                            className="rounded-lg h-9 px-3"
                        >
                            <StopCircle size={16} />
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            size="sm"
                            className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg h-9 px-4 disabled:opacity-50"
                            disabled={!prompt.trim()}
                        >
                            <Send size={16} />
                        </Button>
                    )}
                </div>
            </form >
        </div >
    );
}

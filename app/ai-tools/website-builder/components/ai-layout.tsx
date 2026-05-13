// app/ai-tools/website-builder/components/ai-layout.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Settings, Share2, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBuilderStore } from '@/lib/stores/builder-store';
import { FilesSidebar } from './files-sidebar';

export function AIBuilderLayout({ children }: { children: React.ReactNode }) {
    const { projectName, currentTab, setCurrentTab } = useBuilderStore();
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="h-screen w-full bg-[#000000]" />; // Prevent flash of unstyled content
    }

    return (
        <div className="h-screen w-full bg-[#000000] text-white flex flex-col font-sans overflow-hidden relative selection:bg-purple-500/30">
            {/* Hypnotic Aurora Background */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/10 blur-[150px] pointer-events-none animate-pulse duration-[8s]"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-900/10 blur-[150px] pointer-events-none animate-pulse duration-[10s]"></div>

            {/* Matrix Digital Noise */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,23,0)_2px,transparent_2px),linear-gradient(90deg,rgba(18,18,23,0)_2px,transparent_2px)] bg-[size:100%_3px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] opacity-20 pointer-events-none"></div>

            {/* Suspended Holographic Header */}
            <header className="h-14 border-b border-white/5 bg-[#0a0a0f]/60 backdrop-blur-2xl flex items-center justify-between px-4 z-50">
                <div className="flex items-center gap-4">
                    <Link href="/ai-tools/website-builder" className="group flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/5">
                        <ArrowLeft size={16} className="text-slate-400 group-hover:text-purple-300 transition-colors" />
                    </Link>
                    <div className="h-6 w-px bg-white/10"></div>
                    <div className="flex items-center gap-2">
                        <span className="font-bold tracking-tight text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">FC Agent</span>
                    </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/5">
                        <span className="text-xs text-slate-400 font-mono">PROJECT:</span>
                        <span className="text-xs text-white font-medium">{projectName}</span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex items-center bg-white/5 rounded-lg p-1 border border-white/5 mr-2">
                        <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setCurrentTab('code')}
                            className={`h-7 px-3 text-xs font-medium rounded-md transition-all ${currentTab === 'code'
                                ? 'bg-purple-500/20 text-purple-300 shadow-[0_0_10px_-3px_rgba(168,85,247,0.4)]'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <span className="mr-1.5 opacity-70">&lt;/&gt;</span>
                            Code
                        </Button>
                        <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setCurrentTab('visual')}
                            className={`h-7 px-3 text-xs font-medium rounded-md transition-all ${currentTab === 'visual'
                                ? 'bg-purple-500/20 text-purple-300 shadow-[0_0_10px_-3px_rgba(168,85,247,0.4)]'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <span className="mr-1.5 opacity-70">◎</span>
                            Preview
                        </Button>
                    </div>

                    <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="h-8 w-8 text-slate-400 hover:text-white"
                    >
                        {sidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
                    </Button>
                    <Button size="sm" className="h-8 bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium px-4 rounded-lg shadow-[0_0_15px_-3px_rgba(147,51,234,0.5)]">
                        DEPLOY
                    </Button>
                </div>
            </header>

            {/* Main Workspace */}
            <main className="flex-1 flex overflow-hidden relative">
                {/* Sidebar */}
                <div
                    className={`h-full transition-all duration-300 ease-in-out border-r border-white/5 relative z-40 ${sidebarOpen ? 'w-80' : 'w-0 opacity-0 overflow-hidden'}`}
                >
                    <FilesSidebar />
                </div>

                {/* Content Area */}
                <div className="flex-1 bg-[#050508] relative overflow-hidden flex flex-col">
                    {/* Corner Accents for Premium Feel */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/5 blur-3xl pointer-events-none"></div>

                    <div className="flex-1 p-4 overflow-hidden">
                        <div className="w-full h-full rounded-2xl border border-white/10 bg-[#0a0a0f]/40 backdrop-blur-sm shadow-2xl relative overflow-hidden">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}


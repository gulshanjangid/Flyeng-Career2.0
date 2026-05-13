// app/ai-tools/website-builder/components/builder-layout.tsx
"use client";

import React from 'react';
import { useBuilderStore } from '@/lib/stores/builder-store';
import { motion } from 'framer-motion';
import {
    Layout,
    Code,
    Wand2,
    Settings,
    Download,
    Share2,
    Monitor,
    Smartphone,
    Tablet,
    Play
} from 'lucide-react';
import { ModeSwitcher } from './mode-switcher';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { toast } from 'sonner';

export function BuilderLayout({ children }: { children: React.ReactNode }) {
    const {
        mode, setMode,
        currentTab, setCurrentTab,
        device, setDevice,
        projectName, setProjectName
    } = useBuilderStore();

    const handleExport = () => {
        toast.promise(new Promise(resolve => setTimeout(resolve, 1000)), {
            loading: 'Preparing download...',
            success: 'Project exported as ZIP',
            error: 'Export failed'
        });
    };

    const handlePublish = () => {
        toast.success("Project published to Vercel (Simulated)");
    };

    return (
        <div className="h-screen w-full bg-[#0a0a0f] text-slate-100 flex overflow-hidden font-sans">
            {/* Sidebar Navigation */}
            <div className="w-16 md:w-64 bg-[#0a0a0f] border-r border-white/5 flex flex-col justify-between z-20 transition-all duration-300">
                <div className="p-4 flex flex-col gap-6">
                    {/* Logo Area */}
                    <Link href="/ai-tools" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow">
                            <span className="font-bold text-sm">FC</span>
                        </div>
                        <span className="hidden md:block font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                            Builder.ai
                        </span>
                    </Link>

                    <ModeSwitcher />

                    <nav className="flex flex-col gap-2 mt-2">
                        <h3 className="text-[10px] font-bold text-white/20 uppercase px-2 hidden md:block tracking-widest mb-1">Tools</h3>

                        <SidebarItem
                            icon={<Wand2 size={18} />}
                            label="AI Generator"
                            active={mode === 'ai'}
                            onClick={() => setMode('ai')}
                        />
                        <SidebarItem
                            icon={<Layout size={18} />}
                            label="Drag & Drop"
                            active={mode === 'drag'}
                            onClick={() => setMode('drag')}
                        />
                        <h3 className="text-[10px] font-bold text-white/20 uppercase px-2 hidden md:block tracking-widest mt-4 mb-1">View</h3>
                        <SidebarItem
                            icon={<Monitor size={18} />}
                            label="Preview"
                            active={currentTab === 'visual'}
                            onClick={() => setCurrentTab('visual')}
                        />
                        <SidebarItem
                            icon={<Code size={18} />}
                            label="Code Editor"
                            active={currentTab === 'code'}
                            onClick={() => setCurrentTab('code')}
                        />
                    </nav>
                </div>

                <div className="p-4 border-t border-white/5">
                    <button className="flex items-center gap-3 w-full p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
                        <Settings size={18} />
                        <span className="hidden md:block text-sm font-medium">Settings</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full relative">
                {/* Header */}
                <header className="h-16 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl flex items-center justify-between px-6 z-10">
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                            <input
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                                className="bg-transparent border-none text-sm font-medium text-white focus:outline-none focus:ring-0 placeholder-white/20 w-40 md:w-auto"
                                placeholder="Untitled Project"
                            />
                            <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span>
                                Draft Auto-saved
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Device Toggles */}
                        <div className="hidden md:flex bg-white/5 rounded-lg p-1 border border-white/5">
                            <DeviceButton
                                icon={<Monitor size={16} />}
                                active={device === 'desktop'}
                                onClick={() => setDevice('desktop')}
                                label="Desktop"
                            />
                            <DeviceButton
                                icon={<Tablet size={16} />}
                                active={device === 'tablet'}
                                onClick={() => setDevice('tablet')}
                                label="Tablet"
                            />
                            <DeviceButton
                                icon={<Smartphone size={16} />}
                                active={device === 'mobile'}
                                onClick={() => setDevice('mobile')}
                                label="Mobile"
                            />
                        </div>

                        <div className="h-6 w-px bg-white/10 mx-2 hidden sm:block"></div>

                        <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost" className="hidden sm:flex h-8 gap-2 text-slate-400 hover:text-white hover:bg-white/5">
                                <Share2 size={16} />
                            </Button>
                            <Button size="sm" variant="outline" onClick={handleExport} className="h-8 gap-2 border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20">
                                <Download size={16} /> <span className="hidden lg:inline">Export</span>
                            </Button>
                            <Button
                                size="sm"
                                onClick={handlePublish}
                                className="h-8 gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/20 border-0"
                            >
                                <Play size={14} fill="currentColor" /> <span className="hidden sm:inline">Publish</span>
                            </Button>
                        </div>
                    </div>
                </header>

                {/* Canvas Area */}
                <main className="flex-1 overflow-hidden relative bg-[#0a0a0f]">
                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                            backgroundSize: '24px 24px'
                        }}>
                    </div>
                    {children}
                </main>
            </div>
        </div>
    );
}

function SidebarItem({ icon, label, active, onClick }: any) {
    return (
        <button
            onClick={onClick}
            className={`
                flex items-center gap-3 p-2.5 rounded-lg transition-all w-full relative group
                ${active
                    ? 'bg-violet-500/10 text-violet-300'
                    : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                }
            `}
        >
            {active && (
                <motion.div
                    layoutId="active-sidebar"
                    className="absolute left-0 w-1 h-6 bg-violet-500 rounded-r-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            )}
            <div className="relative z-10 flex items-center gap-3">
                {icon}
                <span className="hidden md:block text-sm font-medium">{label}</span>
            </div>
            {active && (
                <div className="absolute inset-0 bg-violet-500/5 rounded-lg blur-sm"></div>
            )}
        </button>
    )
}

function DeviceButton({ icon, active, onClick }: any) {
    return (
        <button
            onClick={onClick}
            className={`p-1.5 rounded-md transition-all ${active ? 'bg-white/10 text-white shadow-sm' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
        >
            {icon}
        </button>
    )
}

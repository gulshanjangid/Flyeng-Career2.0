"use client";

import React, { useState } from 'react';
import {
    Folder, FileCode, LayoutTemplate, Box, ChevronRight, ChevronDown,
    Search, Plus, MoreHorizontal, Sparkles, FileJson, FileType
} from 'lucide-react';
import { useBuilderStore, type File } from '@/lib/stores/builder-store';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

// --- MOCK DATA FOR TEMPLATES & COMPONENTS ---
const TEMPLATES = [
    { id: 't1', name: 'Modern SaaS', category: 'Landing Page', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500' },
    { id: 't2', name: 'Creative Portfolio', category: 'Portfolio', image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=500' },
    { id: 't3', name: 'E-commerce Stark', category: 'Shop', image: 'https://images.unsplash.com/photo-1472851294608-415522f96319?auto=format&fit=crop&q=80&w=500' },
    { id: 't4', name: 'Neo-Brutalist', category: 'Blog', image: 'https://images.unsplash.com/photo-1499750310159-52f013065c75?auto=format&fit=crop&q=80&w=500' },
];

const COMPONENTS = [
    { id: 'c1', name: 'Hero Section', icon: <LayoutTemplate size={16} /> },
    { id: 'c2', name: 'Feature Grid', icon: <Box size={16} /> },
    { id: 'c3', name: 'Testimonials', icon: <Sparkles size={16} /> },
    { id: 'c4', name: 'Pricing Table', icon: <FileJson size={16} /> },
];

// --- FILE ICONS HELPER ---
const getFileIcon = (name: string) => {
    if (name.endsWith('.html')) return <FileType size={14} className="text-orange-400" />;
    if (name.endsWith('.css')) return <FileType size={14} className="text-blue-400" />;
    if (name.endsWith('.js') || name.endsWith('.jsx')) return <FileCode size={14} className="text-yellow-400" />;
    if (name.endsWith('.ts') || name.endsWith('.tsx')) return <FileCode size={14} className="text-blue-500" />;
    if (name.endsWith('.json')) return <FileJson size={14} className="text-green-400" />;
    return <FileCode size={14} className="text-slate-400" />;
};

export function Sidebar() {
    const { files, activeFile, setActiveFile, addFile } = useBuilderStore();
    const [activeTab, setActiveTab] = useState<'files' | 'templates' | 'components'>('files');
    const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({ 'src': true, 'public': true });

    const toggleFolder = (folder: string) => {
        setExpandedFolders(prev => ({ ...prev, [folder]: !prev[folder] }));
    };

    return (
        <div className="w-80 h-full border-r border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl flex flex-col z-20">
            {/* --- HEADER TABS --- */}
            <div className="flex items-center p-2 border-b border-white/5 gap-1">
                {[
                    { id: 'files', icon: Folder, label: 'Files' },
                    { id: 'templates', icon: LayoutTemplate, label: 'Templates' },
                    { id: 'components', icon: Box, label: 'Components' },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={cn(
                            "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium transition-all",
                            activeTab === tab.id
                                ? "bg-white/10 text-white shadow-inner"
                                : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                        )}
                    >
                        <tab.icon size={14} />
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* --- CONTENT AREA --- */}
            <ScrollArea className="flex-1 p-4">
                <AnimatePresence mode="wait">
                    {activeTab === 'files' && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="space-y-1"
                            key="files-panel"
                        >
                            <div className="flex items-center justify-between text-xs text-slate-500 mb-4 px-2 tracking-widest uppercase font-bold">
                                <span>Explorer</span>
                                <Plus size={14} className="cursor-pointer hover:text-white transition-colors" />
                            </div>

                            {/* PROJECT ROOT */}
                            <div className="text-sm font-medium text-slate-300 flex items-center gap-2 px-2 py-1 bg-white/5 rounded-md mb-2">
                                <ChevronDown size={14} />
                                <span className="font-bold tracking-tight">PROJECT-ROOT</span>
                            </div>

                            {/* FILES LIST */}
                            <div className="pl-2 space-y-0.5">
                                {files.map((file) => (
                                    <div
                                        key={file.name}
                                        onClick={() => setActiveFile(file.name)}
                                        className={cn(
                                            "flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-sm transition-all group",
                                            activeFile === file.name
                                                ? "bg-purple-500/20 text-purple-300 border border-purple-500/20"
                                                : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                                        )}
                                    >
                                        {getFileIcon(file.name)}
                                        <span className="truncate flex-1 font-mono text-[13px]">{file.name}</span>
                                        {activeFile === file.name && <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></div>}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'templates' && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="space-y-4"
                            key="templates-panel"
                        >
                            <div className="relative">
                                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                                <input
                                    type="text"
                                    placeholder="Search templates..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-9 pr-3 text-xs text-slate-300 focus:outline-none focus:border-purple-500/50 transition-colors"
                                />
                            </div>

                            <div className="grid gap-3">
                                {TEMPLATES.map((t) => (
                                    <div key={t.id} className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-purple-500/50 transition-all hover:shadow-[0_0_20px_-10px_rgba(168,85,247,0.5)]">
                                        <img src={t.image} alt={t.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-3 flex flex-col justify-end">
                                            <span className="text-white font-bold text-xs">{t.name}</span>
                                            <span className="text-slate-400 text-[10px]">{t.category}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'components' && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="space-y-3"
                            key="components-panel"
                        >
                            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">Draggable Elements</div>
                            {COMPONENTS.map((c) => (
                                <div
                                    key={c.id}
                                    draggable
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 cursor-grab active:cursor-grabbing transition-all hover:translate-x-1"
                                >
                                    <div className="h-8 w-8 rounded-lg bg-black/40 flex items-center justify-center text-slate-400">
                                        {c.icon}
                                    </div>
                                    <span className="text-sm text-slate-300 font-medium">{c.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </ScrollArea>
        </div>
    );
}

"use client";

import React, { useState } from 'react';
import {
    Folder, FileCode, ChevronDown, Plus, FileJson, FileType, Search
} from 'lucide-react';
import { useBuilderStore } from '@/lib/stores/builder-store';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

// --- FILE ICONS HELPER ---
const getFileIcon = (name: string) => {
    if (name.endsWith('.html')) return <FileType size={14} className="text-orange-400" />;
    if (name.endsWith('.css')) return <FileType size={14} className="text-blue-400" />;
    if (name.endsWith('.js') || name.endsWith('.jsx')) return <FileCode size={14} className="text-yellow-400" />;
    if (name.endsWith('.ts') || name.endsWith('.tsx')) return <FileCode size={14} className="text-blue-500" />;
    if (name.endsWith('.json')) return <FileJson size={14} className="text-green-400" />;
    return <FileCode size={14} className="text-slate-400" />;
};

export function FilesSidebar() {
    const { files, activeFile, setActiveFile } = useBuilderStore();

    return (
        <div className="w-80 h-full border-r border-white/10 bg-[#0a0a0f]/80 backdrop-blur-2xl flex flex-col z-20 shadow-[10px_0_30px_-10px_rgba(0,0,0,0.5)]">
            {/* --- HEADER --- */}
            <div className="h-14 flex items-center justify-between px-4 border-b border-white/5 bg-white/5">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></div>
                    <span className="text-xs font-bold text-white tracking-[0.2em]">SYSTEM_FILES</span>
                </div>
                <div className="flex gap-2">
                    <div className="p-1.5 hover:bg-white/10 rounded cursor-pointer transition-colors"><Search size={12} className="text-slate-400" /></div>
                    <div className="p-1.5 hover:bg-white/10 rounded cursor-pointer transition-colors"><Plus size={12} className="text-slate-400" /></div>
                </div>
            </div>

            {/* --- CONTENT AREA --- */}
            <ScrollArea className="flex-1 p-3">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                >
                    {/* ROOT FOLDER */}
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 px-2 py-1 text-xs font-bold text-slate-500 uppercase tracking-widest bg-white/5 rounded mx-1 mb-2">
                            <ChevronDown size={10} />
                            <span>Root</span>
                        </div>

                        <div className="pl-3 space-y-0.5 border-l border-white/5 ml-3">
                            {/* Static Folders for visuals */}
                            {['src', 'assets', 'components'].map(folder => (
                                <div key={folder} className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer group">
                                    <Folder size={14} className="text-indigo-400 group-hover:text-indigo-300" />
                                    <span className="text-[13px] font-medium">{folder}</span>
                                </div>
                            ))}

                            {/* Actual Files */}
                            <div className="pt-2">
                                {files.map((file) => (
                                    <div
                                        key={file.name}
                                        onClick={() => setActiveFile(file.name)}
                                        className={cn(
                                            "flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer text-sm transition-all group border border-transparent mb-1",
                                            activeFile === file.name
                                                ? "bg-gradient-to-r from-purple-500/20 to-blue-500/10 text-white border-white/10 shadow-lg shadow-purple-900/20"
                                                : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                                        )}
                                    >
                                        {getFileIcon(file.name)}
                                        <div className="flex-1 flex flex-col min-w-0">
                                            <span className={cn("truncate font-mono text-[13px] leading-none mb-0.5", activeFile === file.name && "font-bold text-purple-200")}>{file.name}</span>
                                            <span className="text-[9px] text-slate-600 font-mono">{Math.floor(Math.random() * 50) + 1}KB</span>
                                        </div>
                                        {activeFile === file.name && (
                                            <div className="flex items-center gap-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </ScrollArea>

            {/* --- STATUS FOOTER --- */}
            <div className="h-8 border-t border-white/5 bg-[#050508] flex items-center justify-between px-3 text-[10px] font-mono text-slate-500">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span>SYNCED</span>
                </div>
                <div className="flex gap-3">
                    <span>RAM: 42%</span>
                    <span>CPU: 12%</span>
                </div>
            </div>
        </div>
    );
}

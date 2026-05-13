// app/ai-tools/website-builder/components/code-editor.tsx
"use client";
import React from 'react';
import { useBuilderStore } from '@/lib/stores/builder-store';

import { CodeTypewriter } from './ui/code-typewriter';

export function CodeEditorPanel() {
    const { files, activeFile, updateFile } = useBuilderStore();

    const file = files.find(f => f.name === activeFile);

    if (!file) {
        return (
            <div className="flex items-center justify-center h-full text-slate-500 bg-[#0a0a0f]">
                Select a file to edit
            </div>
        );
    }

    return (
        <div className="h-full w-full bg-[#0a0a0f] flex overflow-hidden">


            <div className="flex-1 flex flex-col min-w-0">
                {/* Editor Header */}
                <div className="h-10 bg-[#0a0a0f] border-b border-white/5 flex items-center px-4 justify-between">
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-violet-500/50"></span>
                        {file.name}
                    </span>
                    <span className="text-[10px] text-slate-600 uppercase tracking-wider">
                        {file.language}
                    </span>
                </div>

                <div className="flex-1 relative">
                    <CodeTypewriter
                        language={file.language === 'jsx' ? 'javascript' : file.language}
                        value={file.content}
                        filename={file.name}
                        onChange={(val) => updateFile(file.name, val || '')}
                    />
                </div>
            </div>
        </div>
    );
}
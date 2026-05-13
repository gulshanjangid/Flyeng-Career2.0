// app/ai-tools/website-builder/canvas/page.tsx
"use client";

import { useEffect } from 'react';
import { CanvasLayout } from '../components/canvas-layout';
import { useBuilderStore } from '@/lib/stores/builder-store';
import { BuilderSidebar } from '../components/builder-sidebar';
import { InteractiveCanvas } from '../components/interactive-canvas';
import { BuilderProvider } from '../builder-context';

export default function CanvasBuilderPage() {
    return (
        <BuilderProvider>
            <CanvasBuilderContent />
        </BuilderProvider>
    );
}

function CanvasBuilderContent() {
    const { setMode } = useBuilderStore();

    useEffect(() => {
        setMode('drag');
    }, [setMode]);

    return (
        <CanvasLayout>
            <div className="flex w-full h-full">
                {/* Sidebar - Builder Specific */}
                <div className="w-80 h-full border-r border-white/5 flex-shrink-0">
                    <BuilderSidebar />
                </div>

                {/* Main Interactive Canvas Area */}
                <div className="flex-1 h-full bg-[#050508] min-w-0">
                    <InteractiveCanvas />
                </div>
            </div>
        </CanvasLayout>
    );
}

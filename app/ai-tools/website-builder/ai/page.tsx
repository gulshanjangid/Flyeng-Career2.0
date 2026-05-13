"use client";

import { useEffect } from 'react';
import { AIBuilderLayout } from '../components/ai-layout';
import { PromptPanel } from '../components/prompt-panel';
import { useBuilderStore } from '@/lib/stores/builder-store';
import { PreviewPanel } from '../components/preview-panel';
import { CodeEditorPanel } from '../components/code-editor';
import { BuilderProvider } from '../builder-context';

export default function AIBuilderPage() {
    return (
        <BuilderProvider>
            <AIBuilderContent />
        </BuilderProvider>
    );
}

function AIBuilderContent() {
    const { setMode, currentTab, setPrompt } = useBuilderStore();

    useEffect(() => {
        setMode('ai');

        const handleMessage = (event: MessageEvent) => {
            if (event.data?.type === 'AUTO_HEAL_REQUEST') {
                const errorMsg = event.data.error;
                setPrompt(`Fix this error: ${errorMsg}`);
                useBuilderStore.getState().setTriggerGeneration(true);
                console.log("Auto-heal requested for:", errorMsg);
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [setMode, setPrompt]);

    return (
        <AIBuilderLayout>
            <div className="absolute inset-0 z-0">
                {/* Main Viewport */}
                {currentTab === 'visual' ? (
                    <PreviewPanel />
                ) : (
                    <CodeEditorPanel />
                )}

                {/* AI Overlay */}
                <PromptPanel />
            </div>
        </AIBuilderLayout>
    );
}

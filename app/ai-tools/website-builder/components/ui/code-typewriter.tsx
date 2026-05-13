"use client";

import React, { useEffect, useState, useRef } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';

interface CodeTypewriterProps {
    value: string;
    language: string;
    onChange: (value: string) => void;
    filename?: string;
}

export function CodeTypewriter({ value, language, onChange, filename }: CodeTypewriterProps) {
    const [displayedCode, setDisplayedCode] = useState(value);
    const [isTyping, setIsTyping] = useState(false);
    const editorRef = useRef<any>(null);
    const lastValueRef = useRef(value);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Typing speed configuration
    const TYPING_SPEED = 2; // ms per chunk
    const CHUNK_SIZE = 4;   // chars per chunk

    useEffect(() => {
        // If values match, do nothing (initial load or internal update)
        if (value === lastValueRef.current) return;

        const diff = Math.abs(value.length - lastValueRef.current.length);
        const isSignificantChange = diff > 20; // Semantic override heuristic

        if (isSignificantChange && !isTyping) {
            // Trigger Typing Effect
            setIsTyping(true);
            setDisplayedCode('');
            let currentIndex = 0;

            if (timeoutRef.current) clearInterval(timeoutRef.current);

            timeoutRef.current = setInterval(() => {
                if (currentIndex >= value.length) {
                    if (timeoutRef.current) clearInterval(timeoutRef.current);
                    setIsTyping(false);
                    setDisplayedCode(value);
                    lastValueRef.current = value;
                    editorRef.current?.getAction('editor.action.formatDocument')?.run();
                    return;
                }

                const chunk = value.slice(currentIndex, currentIndex + CHUNK_SIZE);
                setDisplayedCode(prev => prev + chunk);
                currentIndex += CHUNK_SIZE;

                // Auto-scroll to bottom while typing
                if (editorRef.current) {
                    editorRef.current.revealLine(editorRef.current.getModel().getLineCount());
                }

            }, TYPING_SPEED);

        } else if (!isTyping) {
            // Normal user typing or small change
            setDisplayedCode(value);
        }

        lastValueRef.current = value;
        return () => {
            if (timeoutRef.current) clearInterval(timeoutRef.current);
        };
    }, [value]);

    const handleEditorDidMount: OnMount = (editor, monaco) => {
        editorRef.current = editor;

        // Define Custom Theme (Galaxy inspired)
        monaco.editor.defineTheme('galaxy', {
            base: 'vs-dark',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': '#0a0a0f', // Deep Galaxy Blue/Black
                'editor.lineHighlightBackground': '#ffffff08',
                'editorCursor.foreground': '#8b5cf6', // Violet cursor
                'editor.selectionBackground': '#8b5cf633'
            }
        });
        monaco.editor.setTheme('galaxy');
    };

    return (
        <div className="relative w-full h-full group">
            <Editor
                height="100%"
                defaultLanguage={language}
                language={language}
                path={filename} // Cache busting or file tracking
                value={displayedCode}
                onChange={(val) => {
                    if (!isTyping) onChange(val || '');
                }}
                onMount={handleEditorDidMount}
                options={{
                    readOnly: isTyping, // Lock while animating
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineHeight: 22,
                    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                    fontLigatures: true,
                    padding: { top: 20, bottom: 20 },
                    scrollBeyondLastLine: false,
                    smoothScrolling: true,
                    cursorBlinking: 'smooth',
                    renderLineHighlight: 'all',
                    // Hide scrollbar if not needed or style it
                    overviewRulerLanes: 0,
                    hideCursorInOverviewRuler: true,
                    scrollbar: {
                        vertical: 'visible',
                        horizontal: 'visible',
                        verticalScrollbarSize: 10,
                        useShadows: false
                    }
                }}
            />

            {/* Typing Indicator Overlay */}
            {isTyping && (
                <div className="absolute bottom-4 right-4 bg-violet-600/20 border border-violet-500/30 text-violet-300 text-xs px-2 py-1 rounded-full flex items-center gap-2 backdrop-blur-md animate-pulse pointer-events-none">
                    <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce"></div>
                    AI Generating...
                </div>
            )}
        </div>
    );
}

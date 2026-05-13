// lib/stores/builder-store.ts
import { create } from 'zustand';

export type File = {
  name: string;
  language: string; // 'html' | 'css' | 'javascript' | 'typescript' | 'json';
  content: string;
}

interface BuilderState {
  mode: 'ai' | 'drag';
  currentTab: 'visual' | 'code';

  // UI State
  device: 'desktop' | 'tablet' | 'mobile';
  projectName: string;
  showLanding: boolean;

  // Virtual File System
  files: File[];
  activeFile: string | null; // Filename

  // AI State
  prompt: string;
  isGenerating: boolean;
  triggerGeneration: boolean; // For auto-healing

  // Actions
  setMode: (mode: 'ai' | 'drag') => void;
  setCurrentTab: (tab: 'visual' | 'code') => void;
  setDevice: (device: 'desktop' | 'tablet' | 'mobile') => void;
  setProjectName: (name: string) => void;
  setShowLanding: (show: boolean) => void;

  setPrompt: (prompt: string) => void;
  setIsGenerating: (isGenerating: boolean) => void;
  setTriggerGeneration: (trigger: boolean) => void;

  // File Actions
  setFiles: (files: File[]) => void;
  updateFile: (name: string, content: string) => void;
  setActiveFile: (name: string) => void;
  addFile: (file: File) => void;

  // Drag & Canvas State
  isDraggingComponent?: boolean;
  setIsDraggingComponent: (isDragging: boolean) => void;

  // Canvas State
  canvasElements: any[];
  setCanvasElements: (elements: any[]) => void;
  addCanvasElement: (element: any) => void;
  removeCanvasElement: (id: string) => void;
  updateCanvasElement: (id: string, updates: any) => void;

  selectedElement: any | null;
  setSelectedElement: (element: any | null) => void;
}

export const useBuilderStore = create<BuilderState>((set) => ({
  mode: 'ai',
  currentTab: 'visual',
  device: 'desktop',
  projectName: 'Untitled Project',
  showLanding: true,

  // Default Files (React Boilerplate)
  files: [
    {
      name: 'index.html',
      language: 'html',
      content: '<div id="root"></div>'
    },
    {
      name: 'App.jsx',
      language: 'javascript',
      content: `
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#0a0a0f] text-white">
      <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
            AI Builder Ready
          </h1>
          <p className="text-slate-400 text-lg">Enter a prompt to start generating...</p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
`
    },
    {
      name: 'styles.css',
      language: 'css',
      content: `
/* 
  Tailwind CSS is available automatically via CDN.
  You can add custom CSS here if needed.
*/
:root {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
}

body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  font-family: 'Inter', sans-serif;
  margin: 0;
  -webkit-font-smoothing: antialiased;
}
`
    }
  ],
  activeFile: 'App.jsx',

  prompt: '',
  isGenerating: false,
  triggerGeneration: false,
  selectedElement: null,
  canvasElements: [],

  setCanvasElements: (elements) => set({ canvasElements: elements }),
  addCanvasElement: (element) => set((state) => ({
    canvasElements: [...state.canvasElements, element],
    selectedElement: element
  })),
  removeCanvasElement: (id) => set((state) => ({
    canvasElements: state.canvasElements.filter(el => el.id !== id),
    selectedElement: state.selectedElement?.id === id ? null : state.selectedElement
  })),
  updateCanvasElement: (id, updates) => set((state) => {
    const newElements = state.canvasElements.map(el =>
      el.id === id ? { ...el, ...updates } : el
    );
    const newSelected = state.selectedElement?.id === id
      ? { ...state.selectedElement, ...updates }
      : state.selectedElement;
    return { canvasElements: newElements, selectedElement: newSelected };
  }),

  setMode: (mode) => set({ mode }),
  setCurrentTab: (currentTab) => set({ currentTab }),
  setDevice: (device) => set({ device }),
  setProjectName: (projectName) => set({ projectName }),
  setShowLanding: (showLanding) => set({ showLanding }),
  setIsDraggingComponent: (isDragging) => set({ isDraggingComponent: isDragging }),
  setSelectedElement: (selectedElement) => set({ selectedElement }),

  setPrompt: (prompt) => set({ prompt }),
  setIsGenerating: (isGenerating) => set({ isGenerating }),
  setTriggerGeneration: (trigger) => set({ triggerGeneration: trigger }),

  setFiles: (files) => set({
    files,
    activeFile: files.length > 0
      ? (files.find(f => f.name.endsWith('jsx') || f.name.endsWith('tsx'))?.name || files[0].name)
      : null
  }),

  updateFile: (name, content) => set((state) => ({
    files: state.files.map(f => f.name === name ? { ...f, content } : f)
  })),

  setActiveFile: (name) => set({ activeFile: name }),

  addFile: (file) => set((state) => ({
    files: [...state.files, file],
    activeFile: file.name
  }))
}));

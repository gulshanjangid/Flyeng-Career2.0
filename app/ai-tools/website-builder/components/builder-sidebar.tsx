"use client";
import React, { useState } from 'react';
import {
    LayoutTemplate, Box, Search, Folder, Layers, Monitor, Image as ImageIcon, Move, Type
} from 'lucide-react';
import { useBuilderStore } from '@/lib/stores/builder-store';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

// --- MOCK DATA FOR TEMPLATES & COMPONENTS ---
// --- 2026 TEMPLATES ---
// --- 2026 TEMPLATES (Updated) ---
const TEMPLATES = [
    { id: 't1', name: 'Nexus AI', category: 'SaaS Platform', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=500' },
    { id: 't2', name: 'Lumina', category: 'Creative Agency', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=500' },
    { id: 't3', name: 'Alex.Design', category: 'Portfolio', image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=500' },
    { id: 't4', name: 'DeFi Chain', category: 'Web3 / Crypto', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=500' },
    { id: 't5', name: 'VOGUE 2026', category: 'Fashion', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=500' },
    { id: 't6', name: 'Launchpad', category: 'Startup', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=500' },
];

// --- 2026 COMPONENTS ---
const COMPONENTS = [
    // Layouts
    { id: 'c1', name: 'Section', icon: <Box size={16} />, type: 'section' },
    { id: 'c2', name: 'Container', icon: <Box size={16} />, type: 'container' },
    { id: 'c3', name: 'Two Col', icon: <LayoutTemplate size={16} />, type: 'row' },
    { id: 'c4', name: 'Grid 3', icon: <LayoutTemplate size={16} />, type: 'grid' },

    // Primitives
    { id: 'c5', name: 'Text', icon: <Type size={16} />, type: 'text' },
    { id: 'c6', name: 'Heading', icon: <Type size={16} />, type: 'text' },
    { id: 'c7', name: 'Image', icon: <ImageIcon size={16} />, type: 'image' },
    { id: 'c8', name: 'Button', icon: <Move size={16} />, type: 'button' },
];

export function BuilderSidebar() {
    const { setIsDraggingComponent, setCanvasElements } = useBuilderStore();
    const [activeTab, setActiveTab] = useState<'components' | 'templates'>('components');
    const [searchQuery, setSearchQuery] = useState('');

    // --- ATOMIC TEMPLATE PRESETS (2026 Designs) ---
    const TEMPLATE_PRESETS: Record<string, any[]> = {
        't1': [ // Nexus AI (Atomic)
            {
                id: 'sec-1', type: 'section', content: { padding: '80px 20px', backgroundColor: '#000000', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000' },
                children: [
                    {
                        id: 'con-1', type: 'container', content: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', textAlign: 'center' },
                        children: [
                            { id: 'txt-1', type: 'text', content: { text: "NEXUS INTELLIGENCE", fontSize: '12', color: '#4ade80', fontWeight: '700', letterSpacing: '2px' } },
                            { id: 'txt-2', type: 'text', content: { text: "The Future of AGI", fontSize: '72', color: '#ffffff', fontWeight: '800', lineHeight: '1.1' } },
                            { id: 'txt-3', type: 'text', content: { text: "Deploy autonomous agents in seconds. No code required.", fontSize: '20', color: '#94a3b8', width: '600px' } },
                            {
                                id: 'row-1', type: 'row', content: { justifyContent: 'center', gap: '16px' },
                                children: [
                                    { id: 'btn-1', type: 'button', content: { text: 'Get Started', backgroundColor: '#ffffff', color: '#000000', padding: '16px 32px', borderRadius: '100px', fontWeight: '600' } },
                                    { id: 'btn-2', type: 'button', content: { text: 'View Demo', backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff', padding: '16px 32px', borderRadius: '100px', fontWeight: '600', border: '1px solid rgba(255,255,255,0.2)' } }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 'sec-2', type: 'section', content: { padding: '80px 20px', backgroundColor: '#050508' },
                children: [
                    {
                        id: 'grid-1', type: 'grid', content: { gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' },
                        children: [
                            { id: 'c-1', type: 'container', content: { backgroundColor: '#111', padding: '32px', borderRadius: '16px' }, children: [{ id: 't-1', type: 'text', content: { text: 'Speed', fontSize: '24', color: '#fff' } }] },
                            { id: 'c-2', type: 'container', content: { backgroundColor: '#111', padding: '32px', borderRadius: '16px' }, children: [{ id: 't-2', type: 'text', content: { text: 'Scale', fontSize: '24', color: '#fff' } }] },
                            { id: 'c-3', type: 'container', content: { backgroundColor: '#111', padding: '32px', borderRadius: '16px' }, children: [{ id: 't-3', type: 'text', content: { text: 'Secure', fontSize: '24', color: '#fff' } }] }
                        ]
                    }
                ]
            }
        ],
        't2': [ // Lumina (Atomic)
            {
                id: 'sec-l1', type: 'section', content: { padding: '100px 20px', backgroundColor: '#fff', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000' },
                children: [
                    {
                        id: 'con-l1', type: 'container', content: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '32px' },
                        children: [
                            { id: 'txt-l1', type: 'text', content: { text: "LUMINA AGENCY", fontSize: '14', color: '#fff', fontWeight: '700', letterSpacing: '4px' } },
                            { id: 'txt-l2', type: 'text', content: { text: "We Build Digital Empires.", fontSize: '80', color: '#fff', fontWeight: '900', lineHeight: '1' } },
                            { id: 'btn-l1', type: 'button', content: { text: 'OUR WORK', backgroundColor: '#000', color: '#fff', padding: '24px 48px', fontWeight: 'bold' } }
                        ]
                    }
                ]
            }
        ],
        't5': [ // Vogue (Atomic)
            {
                id: 'sec-v1', type: 'section', content: { padding: '0', backgroundColor: '#fff', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000' },
                children: [
                    {
                        id: 'con-v1', type: 'container', content: { height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '64px' },
                        children: [
                            { id: 'txt-v1', type: 'text', content: { text: "SUMMER 2026", fontSize: '120', color: '#fff', fontWeight: '900', letterSpacing: '-5px' } },
                            { id: 'btn-v1', type: 'button', content: { text: 'EXPLORE COLLECTION', backgroundColor: '#e11d48', color: '#fff', padding: '20px 40px', fontWeight: 'bold' } }
                        ]
                    }
                ]
            }
        ],
        't3': [
            { id: 't3-sec', type: 'section', content: { padding: '50px', backgroundColor: '#111' }, children: [{ id: 't3-txt', type: 'text', content: { text: 'Portfolio Template', color: '#fff' } }] }
        ],
        't4': [
            { id: 't4-sec', type: 'section', content: { padding: '50px', backgroundColor: '#050508' }, children: [{ id: 't4-txt', type: 'text', content: { text: 'DeFi Template', color: '#fff' } }] }
        ],
        't6': [
            { id: 't6-sec', type: 'section', content: { padding: '50px', backgroundColor: '#fff' }, children: [{ id: 't6-txt', type: 'text', content: { text: 'Startup Template', color: '#000' } }] }
        ]
    };

    const handleTemplateClick = (id: string) => {
        const preset = TEMPLATE_PRESETS[id];
        if (preset) {
            if (confirm(`Load ${id === 't1' ? 'SaaS' : id === 't2' ? 'Portfolio' : 'Template'}?`)) {
                setCanvasElements(JSON.parse(JSON.stringify(preset)));
            }
        } else {
            // Fallback for others
            if (confirm('Load Default Template?')) {
                setCanvasElements(JSON.parse(JSON.stringify(TEMPLATE_PRESETS['t1'])));
            }
        }
    };

    const filteredComponents = COMPONENTS.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredTemplates = TEMPLATES.filter(t =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDragStart = (e: React.DragEvent, type: string) => {
        setIsDraggingComponent(true);
        e.dataTransfer.setData('componentType', type);
    };

    const handleDragEnd = () => {
        setIsDraggingComponent(false);
    };

    return (
        <div className="w-full h-full flex flex-col bg-[#0a0a0f]/80 backdrop-blur-xl border-r border-white/10 z-20">
            {/* --- HEADER TABS --- */}
            <div className="flex items-center p-2 border-b border-white/5 gap-1 shrink-0">
                {[
                    { id: 'components', icon: Box, label: 'Components' },
                    { id: 'templates', icon: LayoutTemplate, label: 'Templates' },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={cn(
                            "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium transition-all",
                            activeTab === tab.id
                                ? "bg-purple-600/20 text-purple-300 shadow-inner border border-purple-500/20"
                                : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                        )}
                    >
                        <tab.icon size={14} />
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* --- SEARCH BAR --- */}
            <div className="p-3 pb-0 shrink-0">
                <div className="relative">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                        type="text"
                        placeholder={`Search ${activeTab}...`}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-9 pr-3 text-xs text-slate-300 focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-slate-600"
                    />
                </div>
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="flex-1 overflow-y-auto p-3 custom-scrollbar min-h-0 pb-32">
                <AnimatePresence mode="wait">
                    {activeTab === 'templates' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-4 pb-4"
                            key="templates-panel"
                        >
                            <div className="grid gap-3">
                                {filteredTemplates.map((t) => (
                                    <div
                                        key={t.id}
                                        onClick={() => handleTemplateClick(t.id)}
                                        className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-purple-500/50 transition-all hover:shadow-[0_0_20px_-10px_rgba(168,85,247,0.5)] bg-slate-900"
                                    >
                                        <img src={t.image} alt={t.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-3 flex flex-col justify-end">
                                            <span className="text-white font-bold text-xs">{t.name}</span>
                                            <span className="text-slate-400 text-[10px]">{t.category}</span>
                                            <span className="text-[9px] text-purple-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click to Load</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'components' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-2 pb-4"
                            key="components-panel"
                        >
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-2 px-1 opacity-70">
                                {filteredComponents.length} Elements
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {filteredComponents.map((c) => (
                                    <div
                                        key={c.id}
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, c.type)}
                                        onDragEnd={handleDragEnd}
                                        className="group flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-purple-500/30 cursor-grab active:cursor-grabbing transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
                                    >
                                        <div className="h-8 w-8 rounded-lg bg-black/40 flex items-center justify-center text-slate-400 group-hover:text-purple-400 transition-colors mb-2">
                                            {c.icon}
                                        </div>
                                        <span className="text-[11px] text-slate-300 font-medium group-hover:text-white text-center leading-tight">{c.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

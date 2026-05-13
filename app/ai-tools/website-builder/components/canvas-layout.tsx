"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, MousePointer2, Move, Layers, Type, Image as ImageIcon, Monitor, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBuilderStore } from '@/lib/stores/builder-store';

export function CanvasLayout({ children }: { children: React.ReactNode }) {
    const { device, setDevice, selectedElement, updateCanvasElement } = useBuilderStore();

    const handleUpdate = (field: string, value: string) => {
        if (!selectedElement) return;
        updateCanvasElement(selectedElement.id, {
            content: { ...selectedElement.content, [field]: value }
        });
    };

    return (
        <div className="h-screen w-full bg-[#050505] text-white flex flex-col font-sans overflow-hidden selection:bg-cyan-500/30">
            {/* ... Header ... */}
            <header className="absolute top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-6 bg-gradient-to-b from-[#050505]/90 via-[#050505]/50 to-transparent pointer-events-none">
                <div className="pointer-events-auto flex items-center gap-4 bg-[#0a0a0f]/60 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 shadow-2xl shadow-black/50 mt-4">
                    <Link href="/ai-tools/website-builder" className="p-1 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white">
                        <ArrowLeft size={18} />
                    </Link>
                    <div className="w-px h-4 bg-white/10"></div>
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                            <MousePointer2 size={12} className="text-white" />
                        </div>
                        <span className="font-medium text-sm tracking-wide text-slate-200">Visual Canvas</span>
                    </div>
                </div>

                {/* Suspended Glass Toolbar */}
                <div className="pointer-events-auto absolute left-1/2 top-8 -translate-x-1/2 flex items-center gap-1 bg-[#121216]/80 backdrop-blur-2xl shadow-[0_0_40px_-5px_rgba(0,0,0,0.7)] rounded-2xl p-1.5 border border-white/10 ring-1 ring-white/5">
                    <ToolButton icon={<Move size={16} />} active={true} tooltip="Move (V)" />
                    <ToolButton icon={<Layers size={16} />} tooltip="Layers (L)" />
                    <ToolButton icon={<Type size={16} />} tooltip="Text (T)" />
                    <ToolButton icon={<ImageIcon size={16} />} tooltip="Image (I)" />
                    <div className="w-px h-5 bg-white/10 mx-2"></div>
                    <ToolButton icon={<Monitor size={16} />} active={device === 'desktop'} onClick={() => setDevice('desktop')} tooltip="Desktop" />
                    <ToolButton icon={<Smartphone size={16} />} active={device === 'mobile'} onClick={() => setDevice('mobile')} tooltip="Mobile" />
                </div>

                <div className="pointer-events-auto flex items-center gap-3 mt-4">
                    <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest hidden md:block">Auto-Sync On</span>
                    <Button size="sm" className="h-9 bg-white text-black hover:bg-slate-200 px-5 font-semibold rounded-full shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95">
                        Publish Site
                    </Button>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden relative">

                {/* Canvas Area */}
                <div className="flex-1 relative z-10 bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
                    {/* Living Grid Background */}
                    <div className="absolute inset-0 pointer-events-none opacity-20"
                        style={{
                            backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)',
                            backgroundSize: '32px 32px',
                        }}>
                    </div>
                    {/* Vignette */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)] pointer-events-none"></div>

                    {/* Children contains Preview + DragCanvas */}
                    <div className="relative w-full h-full p-0 pt-20">
                        {children}
                    </div>
                </div>

                {/* Right Sidebar (Glass Properties) */}
                <div className="w-[320px] bg-[#0a0a0f]/90 backdrop-blur-2xl border-l border-white/5 h-full flex flex-col z-20 shadow-[-10px_0_40px_-10px_rgba(0,0,0,0.5)] pt-20">
                    {selectedElement ? (
                        <>
                            <div className="p-5 border-b border-white/5">
                                <div className="flex items-center justify-between mb-1">
                                    <div className="text-[10px] font-bold text-cyan-500/80 uppercase tracking-widest">Selected Element</div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                                </div>
                                <h3 className="text-base font-medium text-white capitalize">{selectedElement?.type || 'Element'}</h3>
                                <p className="text-xs text-slate-500 mt-1 font-mono">{selectedElement?.id}</p>
                            </div>

                            <div className="p-5 space-y-8 overflow-y-auto custom-scrollbar">
                                {/* Content Section */}
                                <div className="space-y-4">
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Content</div>
                                    <div className="space-y-2">
                                        <PropertyInput label="Text" value={selectedElement.content?.title || ''} onChange={(v: string) => handleUpdate('title', v)} />
                                        <PropertyInput label="Sub" value={selectedElement.content?.description || ''} onChange={(v: string) => handleUpdate('description', v)} />
                                        <PropertyInput label="Btn" value={selectedElement.content?.buttonText || ''} onChange={(v: string) => handleUpdate('buttonText', v)} />
                                    </div>
                                </div>

                                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                                {/* Layout Section */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-medium text-slate-400">Layout & Position</span>
                                        <span className="text-xs text-slate-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md">Relative</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <PropertyInput label="W" value={selectedElement.content?.width || '100%'} onChange={(v: string) => handleUpdate('width', v)} />
                                        <PropertyInput label="H" value={selectedElement.content?.height || 'Auto'} onChange={(v: string) => handleUpdate('height', v)} />
                                        <PropertyInput label="Pad" value={selectedElement.content?.padding || '0px'} onChange={(v: string) => handleUpdate('padding', v)} />
                                        <PropertyInput label="Rad" value={selectedElement.content?.borderRadius || '0px'} onChange={(v: string) => handleUpdate('borderRadius', v)} />
                                    </div>
                                </div>

                                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                                {/* Typography Section */}
                                <div className="space-y-4">
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Typography</div>

                                    {/* Font Select */}
                                    <div className="group flex flex-col gap-1.5">
                                        <span className="text-[10px] text-slate-500 font-bold uppercase">Font Family</span>
                                        <select
                                            className="w-full bg-[#050505] border border-white/10 rounded-lg p-2 text-xs text-slate-300 outline-none focus:border-cyan-500/50 transition-colors cursor-pointer"
                                            value={selectedElement.content?.fontFamily || 'Inter'}
                                            onChange={(e) => handleUpdate('fontFamily', e.target.value)}
                                        >
                                            <option value="Inter">Inter (Sans)</option>
                                            <option value="'Roboto', sans-serif">Roboto</option>
                                            <option value="'Playfair Display', serif">Playfair (Serif)</option>
                                            <option value="'JetBrains Mono', monospace">Mono</option>
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <PropertyInput label="Size" value={selectedElement.content?.fontSize || '16'} suffix="px" onChange={(v: string) => handleUpdate('fontSize', v)} />
                                        <PropertyInput label="Wt" value={selectedElement.content?.fontWeight || '400'} onChange={(v: string) => handleUpdate('fontWeight', v)} />
                                        <PropertyInput label="Col" value={selectedElement.content?.color || '#ffffff'} onChange={(v: string) => handleUpdate('color', v)} />
                                        <PropertyInput label="Align" value={selectedElement.content?.textAlign || 'left'} onChange={(v: string) => handleUpdate('textAlign', v)} />
                                    </div>
                                </div>

                                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                                {/* Visuals Section */}
                                <div className="space-y-4">
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Visuals</div>
                                    <div className="space-y-3">
                                        <PropertyInput label="Img" value={selectedElement.content?.image || ''} placeholder="https://..." onChange={(v: string) => handleUpdate('image', v)} />
                                        <PropertyInput label="Bg" value={selectedElement.content?.backgroundColor || ''} placeholder="#000000" onChange={(v: string) => handleUpdate('backgroundColor', v)} />
                                    </div>
                                </div>

                                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                                {/* Effects Section */}
                                <div className="space-y-4">
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Effects & Animation</div>

                                    {/* Animation Select */}
                                    <div className="group flex flex-col gap-1.5">
                                        <span className="text-[10px] text-slate-500 font-bold uppercase">Entry Animation</span>
                                        <select
                                            className="w-full bg-[#050505] border border-white/10 rounded-lg p-2 text-xs text-slate-300 outline-none focus:border-cyan-500/50 transition-colors cursor-pointer"
                                            value={selectedElement.content?.animation || 'none'}
                                            onChange={(e) => handleUpdate('animation', e.target.value)}
                                        >
                                            <option value="none">None</option>
                                            <option value="fade-in">Fade In</option>
                                            <option value="slide-up">Slide Up</option>
                                            <option value="zoom-in">Zoom In</option>
                                            <option value="bounce">Bounce</option>
                                        </select>
                                    </div>

                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-medium text-slate-400">Opacity</span>
                                        <span className="text-xs text-white">{selectedElement.content?.opacity || 100}%</span>
                                    </div>
                                    <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className="absolute top-0 left-0 h-full bg-cyan-500"
                                            style={{ width: `${selectedElement.content?.opacity || 100}%` }}
                                        ></div>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            value={selectedElement.content?.opacity || 100}
                                            onChange={(e) => handleUpdate('opacity', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-slate-500 p-8 text-center opacity-60">
                            <MousePointer2 size={32} className="mb-4 text-slate-700" />
                            <p className="text-sm">Select an element on the canvas to edit properties.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function ToolButton({ icon, active, onClick, tooltip }: any) {
    return (
        <button onClick={onClick} title={tooltip} className={`p-2.5 rounded-xl transition-all relative group ${active ? 'bg-gradient-to-b from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
            {icon}
            {active && <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20"></div>}
        </button>
    )
}

function PropertyInput({ label, value, suffix, onChange, ...props }: any) {
    return (
        <div className="flex items-center gap-2 bg-[#050505] border border-white/10 rounded-lg p-2 hover:border-white/20 transition-all cursor-text group focus-within:border-cyan-500/50 focus-within:shadow-[0_0_0_2px_rgba(34,211,238,0.1)]">
            <span className="text-[10px] text-slate-500 font-bold group-hover:text-cyan-500 transition-colors uppercase w-4">{label}</span>
            <input
                className="text-xs text-slate-200 flex-1 text-right outline-none bg-transparent font-mono min-w-0 placeholder:text-slate-700"
                value={value}
                placeholder={props.placeholder}
                onChange={(e) => onChange && onChange(e.target.value)}
            />
            {suffix && <span className="text-[10px] text-slate-600">{suffix}</span>}
        </div>
    )
}
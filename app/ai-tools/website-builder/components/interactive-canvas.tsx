"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useBuilderStore } from '@/lib/stores/builder-store';
import { LayoutTemplate, Trash2, Plus, Type, Image as ImageIcon, Box } from 'lucide-react';
import { cn } from '@/lib/utils';

// Enhanced Element Definition
export type CanvasElement = {
    id: string;
    type: string;
    content?: any;
    children?: CanvasElement[];
};

export function InteractiveCanvas() {
    const {
        isDraggingComponent,
        canvasElements,
        addCanvasElement,
        removeCanvasElement,
        setSelectedElement,
        selectedElement
    } = useBuilderStore();

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const type = e.dataTransfer.getData('componentType') || 'text';

        // Factory for new atomic elements
        const newElement: CanvasElement = {
            id: `el-${Date.now()}`,
            type: type,
            content: getDefaultContent(type),
            children: getDefaultChildren(type)
        };

        addCanvasElement(newElement);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleBackgroundClick = () => {
        setSelectedElement(null);
    };

    return (
        <div
            className="w-full h-full bg-[#050508] p-8 overflow-y-auto relative"
            onClick={handleBackgroundClick}
        >
            <div className="max-w-6xl mx-auto min-h-[800px] bg-white rounded-xl shadow-2xl relative transition-all overflow-hidden border border-white/10 group bg-clip-content">

                {/* Canvas Render Area */}
                <div
                    className="flex flex-col min-h-full bg-white relative"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    {canvasElements.length === 0 && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 m-4 rounded-xl pointer-events-none">
                            <div className="p-4 rounded-full bg-slate-50 mb-4 animate-pulse">
                                <Plus className="text-slate-300" size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-400">Drag & Drop or Click a Template</h3>
                        </div>
                    )}

                    {canvasElements.map((el) => (
                        <ElementRenderer
                            key={el.id}
                            element={el}
                            selectedId={selectedElement?.id}
                            onSelect={setSelectedElement}
                            onRemove={removeCanvasElement}
                        />
                    ))}

                    {/* Ghost Drop Indicator */}
                    {isDraggingComponent && (
                        <div className="h-24 m-4 border-2 border-dashed border-purple-500 bg-purple-500/5 rounded-xl flex items-center justify-center pointer-events-none">
                            <span className="text-xs font-bold text-purple-500 uppercase tracking-widest">Drop Element Here</span>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

// --- HELPER FACTORIES ---
function getDefaultContent(type: string) {
    switch (type) {
        case 'text': return { text: 'Double click to edit', fontSize: '16', color: '#000000', textAlign: 'left' };
        case 'button': return { text: 'Click Me', backgroundColor: '#000000', color: '#ffffff', padding: '12px 24px', borderRadius: '8px' };
        case 'image': return { image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe', width: '100%', height: 'auto' };
        case 'section': return { padding: '64px 24px', backgroundColor: '#ffffff' };
        case 'container': return { padding: '24px', backgroundColor: 'transparent' };
        default: return {};
    }
}

function getDefaultChildren(type: string) {
    if (type === 'section') return [{ id: `child-${Date.now()}`, type: 'container', children: [] }];
    return undefined;
}

// --- RECURSIVE RENDERER ---
function ElementRenderer({
    element,
    selectedId,
    onSelect,
    onRemove
}: {
    element: CanvasElement,
    selectedId?: string,
    onSelect: (el: CanvasElement) => void,
    onRemove: (id: string) => void
}) {
    const isSelected = element.id === selectedId;
    const { type, content, children } = element;

    const handleSelect = (e: React.MouseEvent) => {
        e.stopPropagation();
        onSelect(element);
    };

    // Construct Styles
    const style: React.CSSProperties = {
        padding: content?.padding,
        margin: content?.margin,
        backgroundColor: content?.backgroundColor,
        backgroundImage: content?.image && (type === 'section' || type === 'container') ? `url(${content.image})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: content?.color,
        fontSize: content?.fontSize ? `${content.fontSize}px` : undefined,
        fontWeight: content?.fontWeight,
        textAlign: content?.textAlign as any,
        borderRadius: content?.borderRadius,
        width: content?.width,
        height: content?.height,
        opacity: content?.opacity ? Number(content.opacity) / 100 : undefined,
        // Flex/Grid styles
        display: content?.display || (type === 'row' || type === 'container' ? 'flex' : 'block'),
        flexDirection: content?.flexDirection || (type === 'row' ? 'row' : 'column'),
        justifyContent: content?.justifyContent,
        alignItems: content?.alignItems,
        gap: content?.gap || '16px',
        gridTemplateColumns: content?.gridTemplateColumns,
    };

    // Animation props
    const anim = content?.animation && content.animation !== 'none' ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    } : {};

    // Render Children
    const renderedChildren = children?.map(child => (
        <ElementRenderer
            key={child.id}
            element={child}
            selectedId={selectedId}
            onSelect={onSelect}
            onRemove={onRemove}
        />
    ));

    // Base Wrapper
    const Wrapper = ({ children: c, className = "" }: any) => (
        <motion.div
            onClick={handleSelect}
            className={cn(
                "relative group transition-all border border-transparent",
                className,
                isSelected ? "border-blue-500 ring-1 ring-blue-500 z-20" : "hover:border-blue-300/30"
            )}
            style={style}
            {...anim}
        >
            {c}

            {/* Hover/Selection Actions */}
            {(isSelected) && (
                <div className="absolute -top-3 -right-3 flex gap-1 z-50">
                    <button
                        onClick={(e) => { e.stopPropagation(); onRemove(element.id); }}
                        className="p-1.5 bg-red-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
                    >
                        <Trash2 size={12} />
                    </button>
                    <div className="px-2 py-0.5 bg-blue-500 text-white text-[9px] font-bold uppercase rounded-full shadow-lg flex items-center">
                        {type}
                    </div>
                </div>
            )}
        </motion.div>
    );

    // --- ATOMIC RENDERERS ---
    switch (type) {
        case 'image':
            return (
                <Wrapper className="overflow-hidden inline-block min-w-[50px] min-h-[50px]">
                    <img src={content?.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"} alt="visual" className="w-full h-full object-cover" />
                </Wrapper>
            );
        case 'text':
        case 'heading':
            return (
                <Wrapper className="cursor-text min-h-[20px]">
                    {content?.text || 'Text Block'}
                </Wrapper>
            );
        case 'button':
            return (
                <Wrapper className="cursor-pointer inline-flex items-center justify-center">
                    {content?.text || 'Button'}
                </Wrapper>
            );
        case 'container':
            return (
                <Wrapper className="w-full h-full min-h-[50px]">
                    {renderedChildren}
                </Wrapper>
            );
        case 'grid':
            return (
                <Wrapper className="grid w-full">
                    {renderedChildren}
                </Wrapper>
            );
        case 'row':
            return (
                <Wrapper className="flex flex-wrap w-full">
                    {renderedChildren}
                </Wrapper>
            );
        case 'col':
            return (
                <Wrapper className="flex flex-col min-w-0">
                    {renderedChildren}
                </Wrapper>
            );
        case 'section':
        default:
            return (
                <Wrapper className="w-full relative min-h-[100px]">
                    {renderedChildren}
                </Wrapper>
            );
    }
}

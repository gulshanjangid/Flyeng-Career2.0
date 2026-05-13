"use client"

import { motion, AnimatePresence } from "framer-motion"
import { VisualizationState, Algorithm } from "../algorithms"
import { Card } from "@/components/ui/card"

// Update VisualizationBoard signature to accept className
interface VisualizationBoardProps {
    currentStep: VisualizationState | null;
    currentAlgo: Algorithm;
    className?: string;
}

export function VisualizationBoard({ currentStep, currentAlgo, className }: VisualizationBoardProps) {
    if (!currentAlgo) return null;

    return (
        <Card className={`bg-[#0a0a0a]/50 border-white/10 p-4 md:p-8 flex flex-col relative overflow-hidden group transition-all ${className || 'min-h-[300px] md:min-h-[400px]'}`}>
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />

            <div className="flex-1 flex items-center justify-center gap-0.5 md:gap-1 relative z-10 h-[200px] md:h-[300px] w-full px-2 md:px-4">
                {(!currentStep || (currentStep.type === 'array' && currentStep.array.length === 0)) && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/50">
                        No data to visualize
                    </div>
                )}

                {/* Array Visualization (Sorting - Bars) */}
                {currentStep?.type === 'array' && currentAlgo.type === 'sorting' && (
                    <div className="flex items-end justify-center gap-0.5 md:gap-1 h-full w-full">
                        {currentStep.array.map((value, index) => {
                            const heightPx = Math.max(value * 2, 10); // Smaller multiplier for mobile
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ height: 0 }}
                                    animate={{
                                        height: heightPx,
                                        backgroundColor: currentStep.activeIndices.includes(index)
                                            ? '#EAB308' // Yellow (Compare)
                                            : currentStep.sortedIndices.includes(index)
                                                ? '#22C55E' // Green (Sorted)
                                                : currentStep.swapIndices.includes(index)
                                                    ? '#EF4444' // Red (Swap)
                                                    : '#3B82F6', // Blue (Default)
                                    }}
                                    className="w-2 sm:w-4 md:w-6 lg:w-8 rounded-t-sm md:rounded-t-md relative group"
                                >
                                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {value}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>
                )}

                {/* Array Visualization (Searching/Operations - Boxes) */}
                {currentStep?.type === 'array' && (currentAlgo.type === 'searching' || currentAlgo.type === 'data-structure') && (
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                        {currentStep.array.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{
                                    scale: 1,
                                    opacity: 1,
                                    backgroundColor: currentStep.activeIndices.includes(index)
                                        ? '#EAB308' // Yellow (Active)
                                        : currentStep.sortedIndices.includes(index) // Reusing sortedIndices for 'found' in search
                                            ? '#22C55E' // Green (Found)
                                            : '#1e293b', // Dark Slate (Default)
                                    borderColor: currentStep.activeIndices.includes(index)
                                        ? '#EAB308'
                                        : currentStep.sortedIndices.includes(index)
                                            ? '#22C55E'
                                            : 'rgba(255,255,255,0.1)',
                                }}
                                className="w-12 h-12 flex items-center justify-center rounded-lg border-2 text-white font-bold text-lg relative"
                            >
                                {value}
                                <span className="absolute -bottom-6 text-[10px] text-white/40">
                                    {index}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Stack Visualization */}
                {currentStep?.type === 'stack' && (
                    <div className="flex flex-col-reverse items-center justify-start border-b-4 border-x-4 border-white/20 rounded-b-lg w-24 sm:w-28 md:w-32 h-[200px] md:h-[280px] p-1 md:p-2 bg-white/5 relative">
                        <div className="absolute -right-16 md:-right-24 top-1/2 -translate-y-1/2 text-[10px] md:text-xs text-white/40 rotate-90">STACK (LIFO)</div>
                        <AnimatePresence mode="popLayout">
                            {currentStep.stack.map((value, index) => (
                                <motion.div
                                    key={`${index}-${value}`}
                                    initial={{ opacity: 0, y: -50, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className={`w-full h-10 md:h-12 mb-1 rounded flex items-center justify-center font-bold text-sm md:text-base text-white border border-white/10
                                        ${index === currentStep.stack.length - 1 ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 'bg-white/10'}
                                    `}
                                >
                                    {value}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        {currentStep.stack.length === 0 && (
                            <div className="text-white/20 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Empty</div>
                        )}
                    </div>
                )}

                {/* Queue Visualization */}
                {currentStep?.type === 'queue' && (
                    <div className="flex items-center justify-start border-y-4 border-white/20 h-16 md:h-24 w-full max-w-2xl px-2 md:px-4 bg-white/5 relative overflow-x-auto">
                        <div className="absolute -top-5 md:-top-6 left-2 md:left-4 text-[10px] md:text-xs text-white/40">FRONT</div>
                        <div className="absolute -top-5 md:-top-6 right-2 md:right-4 text-[10px] md:text-xs text-white/40">REAR</div>
                        <AnimatePresence mode="popLayout">
                            {currentStep.queue.map((value, index) => (
                                <motion.div
                                    key={`${index}-${value}`}
                                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -50, scale: 0.8 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className={`h-12 w-12 md:h-16 md:w-16 min-w-[48px] md:min-w-[64px] mx-0.5 md:mx-1 rounded flex items-center justify-center font-bold text-sm md:text-base text-white border border-white/10
                                        ${index === 0 ? 'bg-green-600 shadow-[0_0_15px_rgba(34,197,94,0.5)]' : 'bg-white/10'}
                                    `}
                                >
                                    {value}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        {currentStep.queue.length === 0 && (
                            <div className="text-white/20 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Empty Queue</div>
                        )}
                    </div>
                )}

                {/* Linked List Visualization */}
                {currentStep?.type === 'linked-list' && (
                    <div className="flex items-center justify-start gap-1 md:gap-2 w-full overflow-x-auto p-2 md:p-4 pt-8 md:pt-12">
                        <AnimatePresence mode="popLayout">
                            {currentStep.nodes.map((node, index) => (
                                <motion.div
                                    key={node.id}
                                    initial={{ opacity: 0, scale: 0.5, x: -20 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    className="flex items-center"
                                >
                                    <div className={`
                                        w-16 h-16 rounded-full flex items-center justify-center border-2 font-bold text-lg relative z-10 transition-colors duration-300
                                        ${node.highlight === 'active' ? 'bg-yellow-500 border-yellow-300 text-black shadow-[0_0_20px_rgba(234,179,8,0.6)]' :
                                            node.highlight === 'match' ? 'bg-green-500 border-green-300 text-black shadow-[0_0_20px_rgba(34,197,94,0.6)]' :
                                                node.highlight === 'mismatch' ? 'bg-red-500 border-red-300 text-white shadow-[0_0_20px_rgba(239,68,68,0.6)]' :
                                                    node.id === currentStep.headId ? 'bg-blue-600 border-blue-400 text-white' :
                                                        'bg-[#1a1a1a] border-white/20 text-white'}
                                    `}>
                                        {node.value}
                                        {node.id === currentStep.headId && (
                                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600/20 text-blue-300 px-2 py-0.5 rounded text-[10px] font-bold border border-blue-500/30">HEAD</span>
                                        )}
                                    </div>
                                    {node.nextId && (
                                        <div className="w-6 md:w-12 h-0.5 bg-white/20 relative mx-0.5 md:mx-1">
                                            <div className="absolute right-0 -top-1 w-1.5 h-1.5 md:w-2 md:h-2 border-t-2 border-r-2 border-white/20 rotate-45" />
                                        </div>
                                    )}
                                    {!node.nextId && (
                                        <div className="ml-1 md:ml-2 text-white/20 text-[10px] md:text-xs font-mono">NULL</div>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                {/* Tree Visualization */}
                {currentStep?.type === 'tree' && (
                    <div className="relative w-full h-full min-h-[200px] md:min-h-[300px] flex items-start justify-center pt-4 md:pt-8 overflow-x-auto">
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                            {currentStep.nodes.map((node) => {
                                const children = [];
                                if (node.leftId) children.push(currentStep.nodes.find(n => n.id === node.leftId));
                                if (node.rightId) children.push(currentStep.nodes.find(n => n.id === node.rightId));

                                return children.map((child) => {
                                    if (!child) return null;
                                    return (
                                        <motion.line
                                            key={`${node.id}-${child.id}`}
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{
                                                pathLength: 1,
                                                opacity: 1,
                                                stroke: 'rgba(255,255,255,0.2)'
                                            }}
                                            transition={{ duration: 0.5 }}
                                            x1={`calc(50% + ${node.x * 3}px)`}
                                            y1={node.y + 40 + 20}
                                            x2={`calc(50% + ${child.x * 3}px)`}
                                            y2={child.y + 40 + 20}
                                            strokeWidth="2"
                                        />
                                    );
                                });
                            })}
                        </svg>
                        <AnimatePresence>
                            {currentStep.nodes.map((node) => (
                                <motion.div
                                    key={node.id}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                        x: node.x * 3,
                                        y: node.y
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="absolute top-10 flex flex-col items-center"
                                    style={{ left: '50%' }}
                                >
                                    <div className={`
                                        w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold text-sm relative z-10 bg-[#0a0a0a]
                                        ${node.highlight === 'active' ? 'border-yellow-500 text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]' :
                                            node.highlight === 'visited' ? 'border-blue-500 text-blue-500' :
                                                node.highlight === 'found' ? 'border-green-500 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]' :
                                                    'border-white/20 text-white'}
                                    `}>
                                        {node.value}
                                    </div>
                                    {node.id === currentStep.rootId && (
                                        <span className="absolute -top-6 text-[10px] text-purple-400 font-bold">ROOT</span>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                {/* Graph Visualization */}
                {currentStep?.type === 'graph' && (
                    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            {currentStep.edges.map((edge, i) => {
                                const source = currentStep.nodes.find(n => n.id === edge.source);
                                const target = currentStep.nodes.find(n => n.id === edge.target);
                                if (!source || !target) return null;
                                return (
                                    <motion.line
                                        key={`${edge.source}-${edge.target}-${i}`}
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{
                                            pathLength: 1,
                                            opacity: 1,
                                            stroke: edge.highlight === 'active' ? '#EAB308' : edge.highlight === 'visited' ? '#22C55E' : 'rgba(255,255,255,0.2)',
                                            strokeWidth: edge.highlight === 'active' ? 3 : 2
                                        }}
                                        transition={{ duration: 0.5 }}
                                        x1={source.x}
                                        y1={source.y}
                                        x2={target.x}
                                        y2={target.y}
                                        strokeLinecap="round"
                                    />
                                );
                            })}
                        </svg>
                        <AnimatePresence>
                            {currentStep.nodes.map((node) => (
                                <motion.div
                                    key={node.id}
                                    layout
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                        backgroundColor: node.highlight === 'active' ? '#EAB308' :
                                            node.highlight === 'visited' ? 'rgba(59, 130, 246, 0.5)' :
                                                node.highlight === 'found' ? '#16A34A' :
                                                    node.highlight === 'match' ? '#22C55E' :
                                                        '#1a1a1a',
                                        borderColor: node.highlight === 'active' ? '#FDE047' :
                                            node.highlight === 'visited' ? '#60A5FA' :
                                                node.highlight === 'found' ? '#4ADE80' :
                                                    node.highlight === 'match' ? '#86EFAC' :
                                                        'rgba(255,255,255,0.2)'
                                    }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`absolute w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold text-sm z-10
                                        ${node.highlight === 'active' ? 'text-black shadow-[0_0_20px_rgba(234,179,8,0.5)]' :
                                            node.highlight === 'visited' ? 'text-white' :
                                                node.highlight === 'found' ? 'text-white shadow-[0_0_20px_rgba(22,163,74,0.5)]' :
                                                    node.highlight === 'match' ? 'text-black shadow-[0_0_20px_rgba(34,197,94,0.5)]' :
                                                        'text-white'}
                                    `}
                                    style={{ left: node.x - 20, top: node.y - 20 }}
                                >
                                    {node.value || node.id}
                                    {node.value && typeof node.value === 'string' && node.value.includes(':') && (
                                        <span className="absolute -bottom-6 text-[10px] bg-black/50 px-1 rounded text-white/70 whitespace-nowrap">
                                            {node.value.split(':')[1]}
                                        </span>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                {/* String Visualization */}
                {currentStep?.type === 'string' && (
                    <div className="flex items-center justify-center gap-2 h-full perspective-1000">
                        {currentStep.indices.map((char, i) => (
                            <motion.div
                                key={`${i}-${char.index}`}
                                initial={{ scale: 0.5, opacity: 0, y: 20, rotateX: -90 }}
                                animate={{
                                    scale: 1,
                                    opacity: 1,
                                    y: 0,
                                    rotateX: 0,
                                    backgroundColor: char.highlight === 'active' ? 'rgba(234, 179, 8, 0.2)' :
                                        char.highlight === 'match' ? 'rgba(34, 197, 94, 0.2)' :
                                            char.highlight === 'mismatch' ? 'rgba(239, 68, 68, 0.2)' :
                                                'rgba(30, 41, 59, 0.5)',
                                    borderColor: char.highlight === 'active' ? '#EAB308' :
                                        char.highlight === 'match' ? '#22C55E' :
                                            char.highlight === 'mismatch' ? '#EF4444' :
                                                'rgba(255, 255, 255, 0.1)',
                                    boxShadow: char.highlight === 'active' ? '0 0 20px rgba(234, 179, 8, 0.3)' :
                                        char.highlight === 'match' ? '0 0 20px rgba(34, 197, 94, 0.3)' :
                                            'none'
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 25, delay: i * 0.05 }}
                                className="w-14 h-16 flex flex-col items-center justify-center rounded-xl border-2 font-mono text-2xl font-bold relative backdrop-blur-md"
                            >
                                <span className="text-white drop-shadow-md">{currentStep.value[i]}</span>
                                <span className="absolute -bottom-6 text-[10px] font-sans text-white/40 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                                    {char.index}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Heap Visualization */}
                {currentStep?.type === 'heap' && (
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <div className="flex gap-1 mb-8">
                            {currentStep.array.map((val, i) => (
                                <div key={i} className="w-8 h-8 flex items-center justify-center bg-white/10 rounded border border-white/10 text-xs">
                                    {val}
                                </div>
                            ))}
                        </div>
                        <div className="relative w-full flex-1 min-h-[200px]">
                            <AnimatePresence>
                                {currentStep.tree.nodes.map((node) => (
                                    <motion.div
                                        key={node.id}
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: 1,
                                            x: node.x,
                                            y: node.y
                                        }}
                                        className="absolute top-0 left-1/2 flex flex-col items-center"
                                    >
                                        <div className={`
                                            w-8 h-8 rounded-full flex items-center justify-center border-2 font-bold text-xs relative z-10
                                            ${node.highlight === 'active' ? 'bg-yellow-500 border-yellow-300 text-black' : 'bg-purple-600 border-purple-400 text-white'}
                                        `}>
                                            {node.value}
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                )}

                {/* Grid Visualization (DP) */}
                {currentStep?.type === 'grid' && (
                    <div className="flex flex-col items-center justify-center w-full h-full overflow-auto p-4">
                        <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${currentStep.cols}, minmax(40px, 1fr))` }}>
                            {currentStep.grid.map((row, rowIndex) => (
                                row.map((cell, colIndex) => {
                                    const highlight = currentStep.highlights.find(h => h.row === rowIndex && h.col === colIndex);
                                    return (
                                        <motion.div
                                            key={`${rowIndex}-${colIndex}`}
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{
                                                scale: 1,
                                                opacity: 1,
                                                backgroundColor: highlight?.color === 'active' ? 'rgba(234, 179, 8, 0.3)' :
                                                    highlight?.color === 'match' ? 'rgba(34, 197, 94, 0.3)' :
                                                        highlight?.color === 'mismatch' ? 'rgba(239, 68, 68, 0.3)' :
                                                            highlight?.color === 'found' ? 'rgba(34, 197, 94, 0.5)' :
                                                                'rgba(255, 255, 255, 0.05)',
                                                borderColor: highlight?.color === 'active' ? '#EAB308' :
                                                    highlight?.color === 'match' ? '#22C55E' :
                                                        highlight?.color === 'mismatch' ? '#EF4444' :
                                                            highlight?.color === 'found' ? '#22C55E' :
                                                                'rgba(255, 255, 255, 0.1)'
                                            }}
                                            className="w-10 h-10 flex items-center justify-center border rounded text-sm font-mono text-white relative"
                                        >
                                            {cell}
                                        </motion.div>
                                    );
                                })
                            ))}
                        </div>
                    </div>
                )}

                {/* Tower of Hanoi Visualization */}
                {currentStep?.type === 'hanoi' && (
                    <div className="flex items-end justify-center gap-12 w-full h-full pb-8 px-8">
                        {currentStep.rods.map((rod, rodIndex) => (
                            <div key={rodIndex} className="relative flex flex-col-reverse items-center w-32 h-64 border-b-4 border-white/20">
                                {/* Rod Pole */}
                                <div className="absolute bottom-0 w-2 h-full bg-white/10 rounded-t-full -z-10" />
                                <div className="absolute -bottom-8 text-white/40 font-bold">
                                    {String.fromCharCode(65 + rodIndex)}
                                </div>

                                <AnimatePresence mode="popLayout">
                                    {rod.map((diskSize, diskIndex) => (
                                        <motion.div
                                            key={diskSize}
                                            layoutId={`disk-${diskSize}`}
                                            initial={{ y: -200, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -200, opacity: 0 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                            className={`h-6 rounded-full mb-1 border border-white/20 shadow-lg flex items-center justify-center text-[10px] font-bold text-white/80 z-10
                                                ${diskSize === 1 ? 'bg-cyan-500 w-12' :
                                                    diskSize === 2 ? 'bg-blue-500 w-20' :
                                                        diskSize === 3 ? 'bg-indigo-500 w-28' :
                                                            'bg-purple-500 w-32'}
                                            `}
                                        >
                                            {diskSize}
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="mt-4 md:mt-6 text-center h-6 md:h-8 relative z-20">
                <p className="text-white/80 font-mono text-xs md:text-sm bg-white/5 inline-block px-3 md:px-4 py-1 rounded-full border border-white/10">
                    {currentStep?.description || "Ready"}
                </p>
                <p className="text-[8px] md:text-[10px] text-white/20 mt-1 md:mt-2">
                    {currentStep && currentStep.type === 'array' ? `Array: ${currentStep.array.length} items` :
                        currentStep && currentStep.type === 'stack' ? `Stack Size: ${currentStep.stack.length}` :
                            currentStep && currentStep.type === 'queue' ? `Queue Size: ${currentStep.queue.length}` :
                                currentStep && currentStep.type === 'linked-list' ? `Nodes: ${currentStep.nodes.length}` :
                                    currentStep && currentStep.type === 'tree' ? `Nodes: ${currentStep.nodes.length}` : 'Ready'}
                </p>
            </div>
        </Card>
    );
}

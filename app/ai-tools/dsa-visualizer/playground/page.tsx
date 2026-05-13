"use client"

import { useState, useEffect, useRef } from "react"
import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, RotateCcw, Pause, Info, Code, Zap, ArrowLeft, Settings2, X, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { algorithms, VisualizationState } from "../algorithms"
import Link from "next/link"
import { VisualizationBoard } from "../components/visualization-board"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function DSAVisualizerPlayground() {
    const [selectedLanguage, setSelectedLanguage] = useState<'javascript' | 'python' | 'java' | 'cpp'>('javascript')
    const [selectedAlgoId, setSelectedAlgoId] = useState("bubble-sort")


    const [isPlaying, setIsPlaying] = useState(false)
    const [array, setArray] = useState<number[]>([])
    const [speed, setSpeed] = useState(50) // ms delay
    const [currentStep, setCurrentStep] = useState<VisualizationState | null>(null)
    const [generator, setGenerator] = useState<Generator<VisualizationState> | null>(null)
    const [isSorted, setIsSorted] = useState(false)

    const [isInteractive, setIsInteractive] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [indexValue, setIndexValue] = useState("")
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const currentAlgo = algorithms.find(a => a.id === selectedAlgoId) || algorithms[0]

    useEffect(() => {
        if (currentAlgo) {
            resetArray()
        }
    }, [selectedAlgoId, currentAlgo])

    useEffect(() => {
        if (isPlaying) {
            timerRef.current = setInterval(stepForward, 1000 - speed * 9) // Map 1-100 to delay
        } else {
            if (timerRef.current) clearInterval(timerRef.current)
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [isPlaying, speed, generator])

    const resetArray = () => {
        if (!currentAlgo) return;

        setIsPlaying(false)
        setIsSorted(false)

        let gen: Generator<VisualizationState>;
        let initialStep: VisualizationState;

        if (currentAlgo.type === 'data-structure') {
            // Data structures generate their own data
            gen = currentAlgo.run();
            // We need to advance once to get the initial state
            const next = gen.next();
            if (!next.done) {
                initialStep = next.value;
                setGenerator(gen);
                setCurrentStep(initialStep);
                setArray([]); // Not used for DS
            }
        } else {
            // Sorting/Searching need an initial array
            const size = currentAlgo.type === 'searching' ? 15 : 30;
            const newArray = Array.from({ length: size }, () => Math.floor(Math.random() * 90) + 10);
            setArray(newArray);

            gen = currentAlgo.run(newArray);
            setGenerator(gen);

            initialStep = {
                type: 'array',
                array: newArray,
                activeIndices: [],
                swapIndices: [],
                sortedIndices: [],
                description: "Ready to start"
            };
            setCurrentStep(initialStep);
        }
    }

    const stepForward = () => {
        if (!generator) return

        const next = generator.next()
        if (next.done) {
            setIsPlaying(false)
            setIsSorted(true)
        } else {
            setCurrentStep(next.value)
            // We don't need to update 'array' state here, currentStep has the data
        }
    }

    const togglePlay = () => {
        if (isSorted) {
            resetArray()
            setTimeout(() => setIsPlaying(true), 100)
        } else {
            setIsPlaying(!isPlaying)
        }
    }

    // Interactive Handlers
    const handleStackOp = (op: 'push' | 'pop' | 'peek') => {
        if (!currentStep || currentStep.type !== 'stack') return;
        const newStack = [...currentStep.stack];
        let desc = "";

        if (op === 'push') {
            const val = parseInt(inputValue);
            if (isNaN(val)) return;
            newStack.push(val);
            desc = `Pushed ${val}`;
            setInputValue("");
        } else if (op === 'pop') {
            if (newStack.length === 0) return;
            const val = newStack.pop();
            desc = `Popped ${val}`;
        } else {
            desc = `Peek: ${newStack[newStack.length - 1]}`;
        }

        setCurrentStep({ ...currentStep, stack: newStack, description: desc, operation: op });
    };

    const handleQueueOp = (op: 'enqueue' | 'dequeue' | 'peek') => {
        if (!currentStep || currentStep.type !== 'queue') return;
        const newQueue = [...currentStep.queue];
        let desc = "";

        if (op === 'enqueue') {
            const val = parseInt(inputValue);
            if (isNaN(val)) return;
            newQueue.push(val);
            desc = `Enqueued ${val}`;
            setInputValue("");
        } else if (op === 'dequeue') {
            if (newQueue.length === 0) return;
            const val = newQueue.shift();
            desc = `Dequeued ${val}`;
        } else {
            desc = `Peek: ${newQueue[0]}`;
        }

        setCurrentStep({ ...currentStep, queue: newQueue, description: desc, operation: op });
    };

    const handleArrayOp = (op: 'set' | 'insert' | 'delete' | 'max' | 'min' | 'rotate' | 'reverse') => {
        if (!currentStep || currentStep.type !== 'array') return;
        let newArray = [...currentStep.array];
        let desc = "";

        if (op === 'set') {
            const val = parseInt(inputValue);
            const idx = parseInt(indexValue);
            if (!isNaN(val) && !isNaN(idx) && idx >= 0 && idx < newArray.length) {
                newArray[idx] = val;
                desc = `Set index ${idx} to ${val}`;
            }
        } else if (op === 'insert') {
            const val = parseInt(inputValue);
            if (!isNaN(val)) {
                newArray.push(val);
                desc = `Inserted ${val}`;
            }
        } else if (op === 'delete') {
            const idx = parseInt(indexValue);
            if (!isNaN(idx) && idx >= 0 && idx < newArray.length) {
                const val = newArray.splice(idx, 1)[0];
                desc = `Deleted ${val} at index ${idx}`;
            }
        } else if (op === 'max') {
            const max = Math.max(...newArray);
            desc = `Maximum value is ${max}`;
        } else if (op === 'min') {
            const min = Math.min(...newArray);
            desc = `Minimum value is ${min}`;
        } else if (op === 'rotate') {
            const k = parseInt(inputValue) || 1;
            for (let i = 0; i < k; i++) {
                const popped = newArray.pop();
                if (popped !== undefined) newArray.unshift(popped);
            }
            desc = `Rotated array by ${k}`;
        } else if (op === 'reverse') {
            newArray.reverse();
            desc = "Reversed array";
        }

        setCurrentStep({ ...currentStep, array: newArray, description: desc });
        setInputValue("");
        setIndexValue("");
    };

    const handleLinkedListOp = (op: 'add-head' | 'add-tail' | 'remove-head' | 'reverse' | 'loop') => {
        if (!currentStep || currentStep.type !== 'linked-list') return;
        let newNodes = [...currentStep.nodes];
        let headId = currentStep.headId;
        let desc = "";
        let idCounter = Date.now();

        if (op === 'add-head') {
            const val = parseInt(inputValue);
            if (isNaN(val)) return;
            const newNode = { id: `node-${idCounter}`, value: val, nextId: headId, highlight: 'none' as const };
            newNodes.unshift(newNode);
            headId = newNode.id;
            desc = `Added ${val} to Head`;
            setInputValue("");
        } else if (op === 'add-tail') {
            const val = parseInt(inputValue);
            if (isNaN(val)) return;
            const newNode = { id: `node-${idCounter}`, value: val, nextId: null, highlight: 'none' as const };
            if (!headId) {
                headId = newNode.id;
                newNodes.push(newNode);
            } else {
                const tail = newNodes.find(n => !n.nextId);
                if (tail) tail.nextId = newNode.id;
                newNodes.push(newNode);
            }
            desc = `Added ${val} to Tail`;
            setInputValue("");
        } else if (op === 'remove-head') {
            if (headId) {
                const head = newNodes.find(n => n.id === headId);
                if (head) {
                    headId = head.nextId;
                    newNodes = newNodes.filter(n => n.id !== head.id);
                    desc = `Removed Head (${head.value})`;
                }
            }
        } else if (op === 'reverse') {
            let prev = null;
            let current = headId;
            let newNodesMap = new Map(newNodes.map(n => [n.id, { ...n }]));

            while (current) {
                let node = newNodesMap.get(current);
                if (!node) break;
                let next = node.nextId;
                node.nextId = prev;
                prev = current;
                current = next;
            }
            headId = prev;
            newNodes = Array.from(newNodesMap.values());
            // Re-order array to match list order for visualization
            let orderedNodes = [];
            let curr = headId;
            while (curr) {
                let node = newNodes.find(n => n.id === curr);
                if (node) {
                    orderedNodes.push(node);
                    curr = node.nextId;
                } else break;
            }
            newNodes = orderedNodes;
            desc = "Reversed Linked List";
        } else if (op === 'loop') {
            // Create a loop for demo
            if (newNodes.length > 2) {
                const tail = newNodes[newNodes.length - 1];
                tail.nextId = newNodes[1].id; // Loop to 2nd node
                desc = "Created Loop (Tail -> 2nd Node)";
            } else {
                desc = "Need at least 3 nodes to create a loop";
            }
        }

        setCurrentStep({ ...currentStep, nodes: newNodes, headId: headId, description: desc });
    };

    const handleStringOp = (op: 'set' | 'reverse' | 'palindrome') => {
        if (!currentStep || currentStep.type !== 'string') return;
        let val = currentStep.value;
        let desc = "";

        if (op === 'set') {
            val = inputValue || "Hello";
            desc = `Set string to "${val}"`;
            setInputValue("");
        } else if (op === 'reverse') {
            val = val.split('').reverse().join('');
            desc = `Reversed string to "${val}"`;
        } else if (op === 'palindrome') {
            const isPalindrome = val === val.split('').reverse().join('');
            desc = `"${val}" is ${isPalindrome ? 'a Palindrome' : 'NOT a Palindrome'}`;
        }

        setCurrentStep({
            ...currentStep,
            value: val,
            indices: val.split('').map((_, i) => ({ index: i, highlight: 'none' })),
            description: desc
        });
    };

    const handleGraphOp = (op: 'add-node' | 'add-edge' | 'bfs' | 'dfs') => {
        if (!currentStep || currentStep.type !== 'graph') return;
        let newNodes = [...currentStep.nodes];
        let newEdges = [...currentStep.edges];
        let desc = "";
        let idCounter = Date.now();

        if (op === 'add-node') {
            const val = parseInt(inputValue);
            if (isNaN(val)) return;
            // Random position for now
            const newNode = {
                id: val.toString(), // Using value as ID for simplicity in this demo
                label: `Node ${val}`,
                value: val,
                x: (Math.random() - 0.5) * 300,
                y: (Math.random() - 0.5) * 200
            };
            if (!newNodes.find(n => n.id === newNode.id)) {
                newNodes.push(newNode);
                desc = `Added Node ${val}`;
            } else {
                desc = `Node ${val} already exists`;
            }
            setInputValue("");
        } else if (op === 'add-edge') {
            // Expecting format "u,v" in inputValue
            const [u, v] = inputValue.split(',').map(Number);
            if (!isNaN(u) && !isNaN(v)) {
                if (newNodes.find(n => n.id === u.toString()) && newNodes.find(n => n.id === v.toString())) {
                    newEdges.push({ source: u.toString(), target: v.toString() });
                    desc = `Added Edge ${u}-${v}`;
                } else {
                    desc = `Nodes ${u} or ${v} not found`;
                }
            }
            setInputValue("");
        } else if (op === 'bfs' || op === 'dfs') {
            // Trigger BFS/DFS animation (would ideally reset generator with new graph)
            // For this interactive mode, we'll just show a message as full algo run is complex to trigger from here without resetting
            desc = `${op.toUpperCase()} started (visualization reset required for full animation)`;
        }

        setCurrentStep({ ...currentStep, nodes: newNodes, edges: newEdges, description: desc });
    };

    const handleHeapOp = (op: 'insert' | 'extract') => {
        if (!currentStep || currentStep.type !== 'heap') return;
        let newArray = [...currentStep.array];
        let desc = "";

        if (op === 'insert') {
            const val = parseInt(inputValue);
            if (isNaN(val)) return;
            newArray.push(val);

            // Bubble Up (Min Heap)
            let idx = newArray.length - 1;
            while (idx > 0) {
                let parentIdx = Math.floor((idx - 1) / 2);
                if (newArray[idx] < newArray[parentIdx]) {
                    [newArray[idx], newArray[parentIdx]] = [newArray[parentIdx], newArray[idx]];
                    idx = parentIdx;
                } else {
                    break;
                }
            }
            desc = `Inserted ${val}`;
            setInputValue("");
        } else if (op === 'extract') {
            if (newArray.length === 0) return;
            const min = newArray[0];
            const last = newArray.pop();
            if (newArray.length > 0 && last !== undefined) {
                newArray[0] = last;
                // Sink Down
                let idx = 0;
                const length = newArray.length;
                while (true) {
                    let leftChildIdx = 2 * idx + 1;
                    let rightChildIdx = 2 * idx + 2;
                    let swapIdx = null;

                    if (leftChildIdx < length) {
                        if (newArray[leftChildIdx] < newArray[idx]) {
                            swapIdx = leftChildIdx;
                        }
                    }
                    if (rightChildIdx < length) {
                        if ((swapIdx === null && newArray[rightChildIdx] < newArray[idx]) ||
                            (swapIdx !== null && newArray[rightChildIdx] < newArray[leftChildIdx])) {
                            swapIdx = rightChildIdx;
                        }
                    }

                    if (swapIdx === null) break;
                    [newArray[idx], newArray[swapIdx]] = [newArray[swapIdx], newArray[idx]];
                    idx = swapIdx;
                }
            }
            desc = `Extracted Min: ${min}`;
        }

        // Rebuild Tree from Array
        const nodes = newArray.map((v, i) => {
            const depth = Math.floor(Math.log2(i + 1));
            const offset = i - Math.pow(2, depth) + 1;
            const spacing = 120 / (depth + 1);
            return {
                id: `node-${i}`,
                value: v,
                leftId: null,
                rightId: null,
                x: (offset - Math.pow(2, depth) / 2 + 0.5) * spacing,
                y: depth * 60
            };
        });

        setCurrentStep({
            ...currentStep,
            array: newArray,
            tree: { nodes, rootId: nodes.length > 0 ? nodes[0].id : null, type: 'tree', description: 'Heap Tree' },
            description: desc
        });
    };

    const handleTreeOp = (op: 'insert') => {
        if (!currentStep || currentStep.type !== 'tree') return;
        const val = parseInt(inputValue);
        if (isNaN(val)) return;

        let newNodes = [...currentStep.nodes];
        let rootId = currentStep.rootId;
        let idCounter = Date.now();

        const createNode = (v: number, x: number, y: number) => ({
            id: `node-${idCounter}`, value: v, leftId: null, rightId: null, x, y
        });

        if (!rootId) {
            const newNode = createNode(val, 0, 0);
            newNodes.push(newNode);
            rootId = newNode.id;
        } else {
            // Simple BST insert logic (without animation steps, just result)
            let currentId = rootId;
            let depth = 0;
            let width = 100;

            while (true) {
                const current = newNodes.find(n => n.id === currentId)!;
                if (val < current.value) {
                    if (current.leftId) {
                        currentId = current.leftId;
                        depth++;
                        width /= 2;
                    } else {
                        const newNode = createNode(val, current.x - 60 / (depth + 1), current.y + 60);
                        newNodes.push(newNode);
                        current.leftId = newNode.id;
                        break;
                    }
                } else {
                    if (current.rightId) {
                        currentId = current.rightId;
                        depth++;
                        width /= 2;
                    } else {
                        const newNode = createNode(val, current.x + 60 / (depth + 1), current.y + 60);
                        newNodes.push(newNode);
                        current.rightId = newNode.id;
                        break;
                    }
                }
            }
        }

        setCurrentStep({ ...currentStep, nodes: newNodes, rootId: rootId, description: `Inserted ${val}` });
        setInputValue("");
    };

    const handleTreeTraversal = (mode: 'inorder' | 'preorder' | 'postorder') => {
        if (!currentAlgo) return;

        setIsPlaying(false);
        setIsSorted(false);

        const gen = currentAlgo.run({ mode });
        const next = gen.next();

        if (!next.done) {
            setGenerator(gen);
            setCurrentStep(next.value);
            setTimeout(() => setIsPlaying(true), 100);
        }
    };

    if (!currentAlgo) {
        return <div className="min-h-screen flex items-center justify-center text-white">Loading algorithms...</div>
    }

    return (
        <div className="min-h-screen lg:min-h-screen bg-[#030014] text-white flex flex-col font-sans selection:bg-blue-500/30 overflow-x-hidden">
            <SiteHeader />

            <main className="flex-1 container mx-auto px-3 md:px-4 py-4 md:py-8 flex flex-col overflow-hidden lg:overflow-visible">
                <div className="mb-3 md:mb-6 flex items-center gap-3">
                    <Link href="/ai-tools/dsa-visualizer" className="text-white/50 hover:text-white flex items-center gap-1.5 transition-colors text-xs md:text-sm">
                        <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </Link>
                    <h1 className="text-base md:text-xl font-bold">DSA Playground</h1>
                </div>

                {/* Mobile: Visualization first, Controls second */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-6 overflow-auto lg:overflow-visible">

                    {/* Left Panel: Controls & Info - Moves below on mobile */}
                    <div className="lg:col-span-1 space-y-3 md:space-y-4 order-2 lg:order-1">
                        {/* Mobile Settings Drawer Trigger (Hidden on Desktop usually, but here we can make it specialized) 
                            Actually, for Mobile, we likely want a "Settings" button in the header or floating.
                            But sticking to the user approved plan: "Action: Settings/Menu Icon (Opens Algorithm Selection Drawer)"
                        */}
                        <div className="lg:hidden mb-4 flex justify-between items-center">
                            <span className="text-sm text-white/60">Current: <span className="text-white font-medium">{currentAlgo.name}</span></span>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="sm" className="h-8 border-white/20 bg-white/5 mx-1">
                                        <Settings2 className="w-4 h-4 mr-2" /> Settings
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="bottom" className="h-[85vh] bg-[#0a0a0a] border-t border-white/10 text-white p-0 flex flex-col rounded-t-2xl">
                                    <SheetHeader className="p-4 border-b border-white/10">
                                        <SheetTitle className="text-white">Settings</SheetTitle>
                                        <SheetDescription className="text-white/50">Choose algorithm and adjust visualization</SheetDescription>
                                    </SheetHeader>
                                    <div className="flex-1 overflow-y-auto p-4 space-y-6">
                                        <div className="space-y-4">
                                            <div>
                                                <label className="text-sm font-medium text-amber-200/80 mb-2 block">Popular / Interview Questions</label>
                                                <Select
                                                    value={algorithms.find(a => a.id === selectedAlgoId && a.category === 'popular') ? selectedAlgoId : ""}
                                                    onValueChange={(val) => { if (val) setSelectedAlgoId(val); }}
                                                >
                                                    <SelectTrigger className="w-full bg-amber-500/10 border-amber-500/20 text-amber-200 h-12 mb-6 ring-offset-0 focus:ring-amber-500/20">
                                                        <SelectValue placeholder="Select Popular Problem" />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-[#1a1a1a] border-amber-500/20 text-white">
                                                        {algorithms.filter(a => a.category === 'popular').map(a => (
                                                            <SelectItem key={a.id} value={a.id} className="text-amber-200/90 focus:text-amber-100 focus:bg-amber-500/20">{a.name}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>

                                                <label className="text-sm font-medium text-white/60 mb-2 block">Algorithms</label>
                                                <Select
                                                    value={algorithms.find(a => a.id === selectedAlgoId && (a.type === 'sorting' || a.type === 'searching')) ? selectedAlgoId : ""}
                                                    onValueChange={(val) => { if (val) setSelectedAlgoId(val); }}
                                                >
                                                    <SelectTrigger className="w-full bg-white/5 border-white/10 text-white h-12 mb-4">
                                                        <SelectValue placeholder="Select Algorithm" />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
                                                        <div className="px-2 py-1.5 text-xs font-semibold text-white/40">Sorting</div>
                                                        {algorithms.filter(a => a.type === 'sorting').map(a => (
                                                            <SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>
                                                        ))}
                                                        <div className="px-2 py-1.5 text-xs font-semibold text-white/40 mt-2">Searching</div>
                                                        {algorithms.filter(a => a.type === 'searching').map(a => (
                                                            <SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>

                                                <label className="text-sm font-medium text-white/60 mb-2 block">Data Structures</label>
                                                <Select
                                                    value={algorithms.find(a => a.id === selectedAlgoId && a.type === 'data-structure') ? selectedAlgoId : ""}
                                                    onValueChange={(val) => { if (val) setSelectedAlgoId(val); }}
                                                >
                                                    <SelectTrigger className="w-full bg-white/5 border-white/10 text-white h-12">
                                                        <SelectValue placeholder="Select Data Structure" />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
                                                        {algorithms.filter(a => a.type === 'data-structure' && a.category !== 'popular').map(a => (
                                                            <SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            {!isInteractive && (
                                                <div>
                                                    <label className="text-sm font-medium text-white/60 mb-2 block">Animation Speed</label>
                                                    <Slider value={[speed]} onValueChange={(val) => setSpeed(val[0])} max={100} step={1} className="py-4" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>

                        {/* Desktop Side Panel (Visible on LG+) */}
                        <Card className="hidden lg:block bg-[#0a0a0a]/80 backdrop-blur-xl border-white/10 p-4 lg:sticky lg:top-24">
                            <div className="space-y-6">
                                <div>
                                    <label className="text-sm font-medium text-amber-200/80 mb-2 block">Popular / Interview Questions</label>
                                    <Select
                                        value={algorithms.find(a => a.id === selectedAlgoId && a.category === 'popular') ? selectedAlgoId : ""}
                                        onValueChange={(val) => { if (val) setSelectedAlgoId(val); }}
                                    >
                                        <SelectTrigger className="w-full bg-amber-500/10 border-amber-500/20 text-amber-200 h-12 mb-6 ring-offset-0 focus:ring-amber-500/20">
                                            <SelectValue placeholder="Select Popular Problem" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#1a1a1a] border-amber-500/20 text-white">
                                            {algorithms.filter(a => a.category === 'popular').map(a => (
                                                <SelectItem key={a.id} value={a.id} className="text-amber-200/90 focus:text-amber-100 focus:bg-amber-500/20">{a.name}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>

                                    <label className="text-sm font-medium text-white/60 mb-2 block">Algorithms</label>
                                    <Select
                                        value={algorithms.find(a => a.id === selectedAlgoId && (a.type === 'sorting' || a.type === 'searching')) ? selectedAlgoId : ""}
                                        onValueChange={(val) => { if (val) setSelectedAlgoId(val); }}
                                    >
                                        <SelectTrigger className="w-full bg-white/5 border-white/10 text-white h-12 mb-4">
                                            <SelectValue placeholder="Select Algorithm" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
                                            <div className="px-2 py-1.5 text-xs font-semibold text-white/40">Sorting</div>
                                            {algorithms.filter(a => a.type === 'sorting').map(a => (
                                                <SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>
                                            ))}
                                            <div className="px-2 py-1.5 text-xs font-semibold text-white/40 mt-2">Searching</div>
                                            {algorithms.filter(a => a.type === 'searching').map(a => (
                                                <SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>

                                    <label className="text-sm font-medium text-white/60 mb-2 block">Data Structures</label>
                                    <Select
                                        value={algorithms.find(a => a.id === selectedAlgoId && a.type === 'data-structure') ? selectedAlgoId : ""}
                                        onValueChange={(val) => { if (val) setSelectedAlgoId(val); }}
                                    >
                                        <SelectTrigger className="w-full bg-white/5 border-white/10 text-white h-12">
                                            <SelectValue placeholder="Select Data Structure" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
                                            {algorithms.filter(a => a.type === 'data-structure' && a.category !== 'popular').map(a => (
                                                <SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <label className="text-sm font-medium text-white/60">Interactive Mode</label>
                                        <div
                                            className={`w-10 h-6 rounded-full p-1 cursor-pointer transition-colors ${isInteractive ? 'bg-blue-600' : 'bg-white/10'}`}
                                            onClick={() => { setIsInteractive(!isInteractive); setIsPlaying(false); }}
                                        >
                                            <div className={`w-4 h-4 rounded-full bg-white transition-transform ${isInteractive ? 'translate-x-4' : ''}`} />
                                        </div>
                                    </div>

                                    {!isInteractive && (
                                        <div>
                                            <label className="text-sm font-medium text-white/60 mb-2 block">Animation Speed</label>
                                            <Slider value={[speed]} onValueChange={(val) => setSpeed(val[0])} max={100} step={1} className="py-4" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Right Panel: Visualization & Details */}
                    <div className="lg:col-span-2 space-y-4 md:space-y-6 order-1 lg:order-2 flex flex-col">
                        <VisualizationBoard currentStep={currentStep} currentAlgo={currentAlgo} className="flex-1 min-h-[350px]" />
                        
                        {/* Playback Controls Box (Mobile & Desktop) */}
                         <div className="flex gap-2 flex-col">
                            {!isInteractive ? (
                                <div className="flex gap-2">
                                    <Button
                                        onClick={togglePlay}
                                        className={`flex-1 h-12 text-base font-semibold transition-all ${isPlaying ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-blue-600 hover:bg-blue-700'}`}
                                    >
                                        {isPlaying ? (
                                            <><Pause className="w-5 h-5 mr-2" /> Pause</>
                                        ) : (
                                            <><Play className="w-5 h-5 mr-2" /> {isSorted ? 'Replay' : 'Start'}</>
                                        )}
                                    </Button>
                                    <Button onClick={resetArray} variant="outline" className="h-12 w-12 px-0 border-white/10 bg-black hover:bg-black/80 text-white">
                                        <RotateCcw className="w-5 h-5" />
                                    </Button>
                                    {/* Speed indicator for mobile since slider is in settings */}
                                    <div className="lg:hidden h-12 px-3 flex items-center justify-center bg-white/5 rounded-md border border-white/10">
                                        <span className="text-xs font-mono text-white/60">{speed}%</span>
                                    </div>
                                </div>
                            ) : null}
                         </div>

                        <Tabs defaultValue="controls" className="w-full flex-1 flex flex-col">
                            <TabsList className="bg-white/5 border border-white/10 p-1 flex-wrap h-auto w-full justify-start">
                                <TabsTrigger value="controls" className="data-[state=active]:bg-blue-600 text-white data-[state=active]:text-white text-xs md:text-sm">
                                    <Settings2 className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Controls
                                </TabsTrigger>
                                <TabsTrigger value="description" className="data-[state=active]:bg-blue-600 text-white data-[state=active]:text-white text-xs md:text-sm">
                                    <Info className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Info
                                </TabsTrigger>
                                <TabsTrigger value="code" className="data-[state=active]:bg-blue-600 text-white data-[state=active]:text-white text-xs md:text-sm">
                                    <Code className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Code
                                </TabsTrigger>
                            </TabsList>

                            <div className="mt-4 flex-1">
                                <TabsContent value="controls">
                                     <div className="space-y-3 p-4 bg-white/5 rounded-lg border border-white/10">
                                        
                                        {/* Setup Interactive toggle here too for mobile access if not in drawer? No, drawer is fine. 
                                            But let's put the Op Inputs here.
                                        */}
                                        <div className="flex items-center justify-between mb-2 lg:hidden">
                                             <label className="text-sm font-medium text-white/60">Interactive Mode</label>
                                             <div
                                                className={`w-10 h-6 rounded-full p-1 cursor-pointer transition-colors ${isInteractive ? 'bg-blue-600' : 'bg-white/10'}`}
                                                onClick={() => { setIsInteractive(!isInteractive); setIsPlaying(false); }}
                                            >
                                                <div className={`w-4 h-4 rounded-full bg-white transition-transform ${isInteractive ? 'translate-x-4' : ''}`} />
                                            </div>
                                        </div>

                                        <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Operations</div>
                                        <div className="flex gap-2">
                                            <input
                                                type={currentStep?.type === 'string' || currentStep?.type === 'graph' ? "text" : "number"}
                                                placeholder={currentStep?.type === 'graph' && inputValue.includes(',') ? "u,v" : (currentStep?.type === 'string' ? "Text" : "Value")}
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                className="flex-1 bg-black/20 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-all focus:ring-1 focus:ring-blue-500/50"
                                            />
                                            {currentStep?.type === 'array' && (
                                                <input
                                                    type="number"
                                                    placeholder="Idx"
                                                    value={indexValue}
                                                    onChange={(e) => setIndexValue(e.target.value)}
                                                    className="w-16 bg-black/20 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-all focus:ring-1 focus:ring-blue-500/50"
                                                />
                                            )}
                                        </div>

                                        <div className="grid grid-cols-2 gap-2">
                                            {currentStep?.type === 'stack' && (
                                                <>
                                                    <Button onClick={() => handleStackOp('push')} size="sm" className="bg-blue-600 hover:bg-blue-700">Push</Button>
                                                    <Button onClick={() => handleStackOp('pop')} size="sm" variant="destructive">Pop</Button>
                                                </>
                                            )}
                                            {currentStep?.type === 'queue' && (
                                                <>
                                                    <Button onClick={() => handleQueueOp('enqueue')} size="sm" className="bg-blue-600 hover:bg-blue-700">Enqueue</Button>
                                                    <Button onClick={() => handleQueueOp('dequeue')} size="sm" variant="destructive">Dequeue</Button>
                                                </>
                                            )}
                                            {currentStep?.type === 'linked-list' && (
                                                <>
                                                    <Button onClick={() => handleLinkedListOp('add-head')} size="sm" className="bg-blue-600 hover:bg-blue-700">Add Head</Button>
                                                    <Button onClick={() => handleLinkedListOp('add-tail')} size="sm" className="bg-blue-600 hover:bg-blue-700">Add Tail</Button>
                                                    <Button onClick={() => handleLinkedListOp('remove-head')} size="sm" variant="destructive">Remove Head</Button>
                                                    <Button onClick={() => handleLinkedListOp('reverse')} size="sm" className="bg-purple-600 hover:bg-purple-700">Reverse</Button>
                                                    <Button onClick={() => handleLinkedListOp('loop')} size="sm" className="bg-yellow-600 hover:bg-yellow-700 col-span-2">Create Loop</Button>
                                                </>
                                            )}
                                            {currentStep?.type === 'array' && (
                                                <>
                                                    <Button onClick={() => handleArrayOp('set')} size="sm" className="bg-blue-600 hover:bg-blue-700">Set</Button>
                                                    <Button onClick={() => handleArrayOp('insert')} size="sm" className="bg-green-600 hover:bg-green-700">Insert</Button>
                                                    <Button onClick={() => handleArrayOp('delete')} size="sm" variant="destructive">Delete</Button>
                                                    <Button onClick={() => handleArrayOp('max')} size="sm" className="bg-purple-600 hover:bg-purple-700">Max</Button>
                                                    <Button onClick={() => handleArrayOp('min')} size="sm" className="bg-purple-600 hover:bg-purple-700">Min</Button>
                                                    <Button onClick={() => handleArrayOp('rotate')} size="sm" className="bg-yellow-600 hover:bg-yellow-700">Rotate</Button>
                                                    <Button onClick={() => handleArrayOp('reverse')} size="sm" className="bg-yellow-600 hover:bg-yellow-700 col-span-2">Reverse</Button>
                                                </>
                                            )}
                                            {currentStep?.type === 'string' && (
                                                <>
                                                    <Button onClick={() => handleStringOp('set')} size="sm" className="bg-blue-600 hover:bg-blue-700 col-span-2">Set String</Button>
                                                    <Button onClick={() => handleStringOp('reverse')} size="sm" className="bg-purple-600 hover:bg-purple-700">Reverse</Button>
                                                    <Button onClick={() => handleStringOp('palindrome')} size="sm" className="bg-yellow-600 hover:bg-yellow-700">Check Palindrome</Button>
                                                </>
                                            )}
                                            {currentStep?.type === 'tree' && (
                                                <>
                                                    <Button onClick={() => handleTreeOp('insert')} size="sm" className="bg-blue-600 hover:bg-blue-700 col-span-2">Insert</Button>
                                                    <Button onClick={() => handleTreeTraversal('inorder')} size="sm" className="bg-purple-600 hover:bg-purple-700">Inorder</Button>
                                                    <Button onClick={() => handleTreeTraversal('preorder')} size="sm" className="bg-purple-600 hover:bg-purple-700">Preorder</Button>
                                                    <Button onClick={() => handleTreeTraversal('postorder')} size="sm" className="bg-purple-600 hover:bg-purple-700 col-span-2">Postorder</Button>
                                                </>
                                            )}
                                            {currentStep?.type === 'graph' && (
                                                <>
                                                    <Button onClick={() => handleGraphOp('add-node')} size="sm" className="bg-blue-600 hover:bg-blue-700">Add Node</Button>
                                                    <Button onClick={() => handleGraphOp('add-edge')} size="sm" className="bg-blue-600 hover:bg-blue-700">Add Edge (u,v)</Button>
                                                    <Button onClick={() => handleGraphOp('bfs')} size="sm" className="bg-green-600 hover:bg-green-700">BFS</Button>
                                                    <Button onClick={() => handleGraphOp('dfs')} size="sm" className="bg-purple-600 hover:bg-purple-700">DFS</Button>
                                                </>
                                            )}
                                            {currentStep?.type === 'heap' && (
                                                <>
                                                    <Button onClick={() => handleHeapOp('insert')} size="sm" className="bg-blue-600 hover:bg-blue-700">Insert</Button>
                                                    <Button onClick={() => handleHeapOp('extract')} size="sm" variant="destructive">Extract Min</Button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="description">
                                    <div className="space-y-4">
                                        <Card className="bg-white/5 border-white/10 p-4">
                                            <h3 className="text-lg font-bold mb-3 text-white">{currentAlgo.name}</h3>
                                            <div className="text-white/80 leading-relaxed whitespace-pre-wrap font-sans text-sm">
                                                {currentAlgo.description.split('\n').map((line, i) => {
                                                    if (line.startsWith('### ')) return <h4 key={i} className="text-lg font-semibold text-blue-400 mt-4 mb-2">{line.replace('### ', '')}</h4>
                                                    if (line.startsWith('✅')) return <div key={i} className="text-green-400 mt-1">{line}</div>
                                                    if (line.startsWith('❌')) return <div key={i} className="text-red-400 mt-1">{line}</div>
                                                    return <p key={i} className="mb-1">{line}</p>
                                                })}
                                            </div>
                                        </Card>
                                        <div className="grid grid-cols-2 gap-3">
                                            <Card className="bg-white/5 border-white/10 p-3">
                                                <h4 className="text-xs text-white/50 uppercase tracking-wider mb-1">Time</h4>
                                                <p className="text-lg font-mono text-blue-400">{currentAlgo.timeComplexity}</p>
                                            </Card>
                                            <Card className="bg-white/5 border-white/10 p-3">
                                                <h4 className="text-xs text-white/50 uppercase tracking-wider mb-1">Space</h4>
                                                <p className="text-lg font-mono text-purple-400">{currentAlgo.spaceComplexity}</p>
                                            </Card>
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="code">
                                    <Card className="bg-[#0a0a0a] border-white/10 p-0 overflow-hidden">
                                        <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
                                            <Select value={selectedLanguage} onValueChange={(val: any) => setSelectedLanguage(val)}>
                                                <SelectTrigger className="w-[140px] h-8 text-xs bg-transparent border-none focus:ring-0 focus:ring-offset-0 text-white">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
                                                    <SelectItem value="javascript">JavaScript</SelectItem>
                                                    <SelectItem value="python">Python</SelectItem>
                                                    <SelectItem value="java">Java</SelectItem>
                                                    <SelectItem value="cpp">C++</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <Button variant="ghost" size="sm" className="h-6 text-xs text-white/40 hover:text-white" onClick={() => {
                                                navigator.clipboard.writeText(typeof currentAlgo.code === 'string' ? currentAlgo.code : currentAlgo.code[selectedLanguage])
                                            }}>
                                                Copy
                                            </Button>
                                        </div>
                                        <pre className="p-4 text-sm font-mono text-blue-300 overflow-x-auto">
                                            {typeof currentAlgo.code === 'string' ? currentAlgo.code : currentAlgo.code[selectedLanguage]}
                                        </pre>
                                    </Card>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </main >
            <EnhancedFooter />
        </div >
    )
}
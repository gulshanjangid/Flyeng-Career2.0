// app/ai-tools/website-builder/components/file-explorer.tsx
"use client";

import React from 'react';
import { useBuilderStore } from '@/lib/stores/builder-store';
import { FolderOpen, FileCode, FileJson, FileType, ChevronRight, Plus } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming generic utility exists, else standard string concat

export function FileExplorer() {
    const { files, activeFile, setActiveFile } = useBuilderStore();

    const getIcon = (name: string) => {
        if (name.endsWith('.html')) return <FileCode size={14} className="text-orange-400" />;
        if (name.endsWith('.css')) return <FileType size={14} className="text-blue-400" />;
        if (name.endsWith('.js') || name.endsWith('.jsx')) return <FileCode size={14} className="text-yellow-400" />;
        if (name.endsWith('.json')) return <FileJson size={14} className="text-green-400" />;
        return <FileCode size={14} className="text-slate-400" />;
    };

    // Helper: Build Tree Structure
    type TreeNode = {
        name: string;
        type: 'file' | 'folder';
        path: string;
        children?: TreeNode[];
    };

    const buildTree = (files: { name: string }[]): TreeNode[] => {
        const root: TreeNode[] = [];

        files.forEach(file => {
            const parts = file.name.split('/');
            let currentLevel = root;

            parts.forEach((part, index) => {
                const isFile = index === parts.length - 1;
                const path = parts.slice(0, index + 1).join('/');

                let existingNode = currentLevel.find(node => node.name === part);

                if (!existingNode) {
                    const newNode: TreeNode = {
                        name: part,
                        type: isFile ? 'file' : 'folder',
                        path: path,
                        children: isFile ? undefined : []
                    };
                    currentLevel.push(newNode);
                    existingNode = newNode;
                }

                if (!isFile && existingNode.children) {
                    currentLevel = existingNode.children;
                }
            });
        });

        // Recursive sort: Folders first, then alphabetical
        const sortTree = (nodes: TreeNode[]) => {
            nodes.sort((a, b) => {
                if (a.type !== b.type) return a.type === 'folder' ? -1 : 1;
                return a.name.localeCompare(b.name);
            });
            nodes.forEach(node => {
                if (node.children) sortTree(node.children);
            });
        };

        sortTree(root);
        return root;
    };

    const treeData = buildTree(files);

    const FileTreeItem = ({ node, level }: { node: TreeNode, level: number }) => {
        const [isOpen, setIsOpen] = React.useState(true);
        const { activeFile, setActiveFile } = useBuilderStore();

        if (node.type === 'folder') {
            return (
                <div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-1.5 w-full py-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 rounded-md transition-colors text-xs font-medium select-none"
                        style={{ paddingLeft: `${level * 12 + 8}px` }}
                    >
                        <ChevronRight size={14} className={cn("transition-transform duration-200", isOpen ? "rotate-90" : "")} />
                        <FolderOpen size={14} className="text-indigo-400" />
                        <span>{node.name}</span>
                    </button>
                    {isOpen && (
                        <div>
                            {node.children?.map(child => (
                                <FileTreeItem key={child.path} node={child} level={level + 1} />
                            ))}
                        </div>
                    )}
                </div>
            );
        }

        return (
            <button
                onClick={() => setActiveFile(node.path)}
                className={cn(
                    "flex items-center gap-2 w-full py-1.5 text-sm transition-colors text-left border-l-2",
                    activeFile === node.path
                        ? "bg-indigo-500/10 text-indigo-300 border-indigo-500"
                        : "text-slate-400 hover:bg-slate-800 hover:text-slate-200 border-transparent ml-[2px]" // compensate for border replacement
                )}
                style={{ paddingLeft: `${level * 12 + 12}px` }}
            >
                {getIcon(node.name)}
                <span className="truncate">{node.name}</span>
            </button>
        );
    };

    return (
        <div className="flex flex-col h-full bg-slate-950 border-r border-slate-800 w-64">
            <div className="p-3 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <FolderOpen size={14} />
                    Files
                </span>
                <button className="text-slate-500 hover:text-white transition-colors p-1 hover:bg-slate-800 rounded">
                    <Plus size={14} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto py-2">
                <div className="px-2 pb-2">
                    <div className="text-[10px] font-semibold text-slate-600 mb-2 px-2">PROJECT ROOT</div>
                    {treeData.map(node => (
                        <FileTreeItem key={node.path} node={node} level={0} />
                    ))}
                </div>
            </div>
        </div>
    );
}

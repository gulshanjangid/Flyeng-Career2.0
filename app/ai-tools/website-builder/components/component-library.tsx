// app/ai-tools/website-builder/components/component-library.tsx
import React from 'react';
import {
    Layout,
    Type,
    Image as ImageIcon,
    FormInput,
    Box,
    Menu,
    CreditCard,
    Users,
    HelpCircle,
    Table
} from 'lucide-react';

export function SidebarComponentLibrary() {
    return (
        <div className="h-full w-full flex flex-col bg-slate-900 overflow-hidden">
            <div className="p-4 border-b border-slate-800">
                <h3 className="text-sm font-semibold text-white">Premium Components</h3>
                <p className="text-xs text-slate-500 mt-1">Drag and drop to canvas</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-700">
                <Category title="Layout" icon={<Layout size={14} />}>
                    <ComponentItem label="Gradient Hero" />
                    <ComponentItem label="Bento Grid" />
                    <ComponentItem label="Sidebar Navigation" />
                    <ComponentItem label="Sticky Footer" />
                </Category>

                <Category title="Data Display" icon={<Table size={14} />}>
                    <ComponentItem label="Advanced Charts" />
                    <ComponentItem label="Data Table" />
                    <ComponentItem label="Kanban Board" />
                    <ComponentItem label="Stats Cards" />
                </Category>

                <Category title="Interactive" icon={<Box size={14} />}>
                    <ComponentItem label="Modal / Dialog" />
                    <ComponentItem label="Testimonial Carousel" />
                    <ComponentItem label="Accordion" />
                    <ComponentItem label="Tabs System" />
                </Category>

                <Category title="Forms" icon={<FormInput size={14} />}>
                    <ComponentItem label="Multi-step Form" />
                    <ComponentItem label="File Upload" />
                    <ComponentItem label="Rich Text Editor" />
                    <ComponentItem label="Date Picker" />
                </Category>

                <Category title="Marketing" icon={<CreditCard size={14} />}>
                    <ComponentItem label="Pricing Comparison" />
                    <ComponentItem label="Newsletter Signup" />
                    <ComponentItem label="Social Proof" />
                </Category>
            </div>
        </div>
    );
}

function Category({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) {
    return (
        <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">
                {icon}
                <span>{title}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
                {children}
            </div>
        </div>
    )
}

function ComponentItem({ label }: { label: string }) {
    return (
        <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 hover:border-indigo-500 hover:bg-slate-750 transition-all cursor-grab active:cursor-grabbing group">
            <div className="w-full h-8 bg-slate-700/50 rounded mb-2 group-hover:bg-indigo-500/20 transition-colors" />
            <span className="text-xs text-slate-300 group-hover:text-white font-medium">{label}</span>
        </div>
    )
}

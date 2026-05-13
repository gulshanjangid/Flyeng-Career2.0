"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Settings, Sliders, Type, Layout, Image as ImageIcon, Palette, ChevronDown, Check } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useBuilder } from "../builder-context"

// Helper for color picker (simplified)
const ColorPicker = ({ value, onChange, label }: { value: string, onChange: (val: string) => void, label: string }) => (
    <div className="space-y-2">
        <Label className="text-xs text-white/60">{label}</Label>
        <div className="flex bg-white/5 border border-white/10 rounded-lg p-1 gap-2">
            <div className="w-8 h-8 rounded-md border border-white/10 relative overflow-hidden">
                <input
                    type="color"
                    value={value || "#000000"}
                    onChange={(e) => onChange(e.target.value)}
                    className="absolute inset-[-50%] w-[200%] h-[200%] cursor-pointer p-0 border-0"
                />
            </div>
            <Input
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
                className="flex-1 bg-transparent border-none h-8 text-xs font-mono"
                placeholder="#000000"
            />
        </div>
    </div>
)

export function PropertiesPanel() {
    const { state, dispatch } = useBuilder()
    const selectedComponent = state.components.find(c => c.id === state.selectedId)

    if (!selectedComponent) {
        return (
            <div className="w-80 border-l border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl flex flex-col items-center justify-center text-white/40 gap-4">
                <Settings className="w-12 h-12 opacity-20" />
                <p className="text-sm">Select a component to edit</p>
            </div>
        )
    }

    const updateStyles = (updates: any) => {
        dispatch({
            type: 'UPDATE_COMPONENT',
            payload: {
                id: selectedComponent.id,
                updates: { styles: { ...selectedComponent.styles, ...updates } }
            }
        })
    }

    const updateContent = (updates: any) => {
        dispatch({
            type: 'UPDATE_COMPONENT',
            payload: {
                id: selectedComponent.id,
                updates: { content: { ...selectedComponent.content, ...updates } }
            }
        })
    }

    return (
        <div className="w-80 border-l border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl flex flex-col z-40">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-cyan-500/10 text-cyan-400">
                        <Settings className="w-4 h-4" />
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-white">Properties</div>
                        <div className="text-xs text-white/40 capitalize">{selectedComponent.type} Component</div>
                    </div>
                </div>
            </div>

            <ScrollArea className="flex-1">
                <Tabs defaultValue="content" className="w-full">
                    <div className="px-4 pt-4">
                        <TabsList className="w-full bg-white/5 p-1 h-9">
                            <TabsTrigger value="content" className="flex-1 text-xs h-7 data-[state=active]:bg-white/10">Content</TabsTrigger>
                            <TabsTrigger value="style" className="flex-1 text-xs h-7 data-[state=active]:bg-white/10">Style</TabsTrigger>
                            <TabsTrigger value="layout" className="flex-1 text-xs h-7 data-[state=active]:bg-white/10">Layout</TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="p-4 space-y-6">
                        <TabsContent value="content" className="space-y-6 m-0 focus-visible:ring-0">
                            {/* Dynamic Content Fields based on Component Type */}
                            {selectedComponent.type === 'hero' && (
                                <>
                                    <div className="space-y-2">
                                        <Label>Title</Label>
                                        <Input
                                            value={selectedComponent.content.title}
                                            onChange={(e) => updateContent({ title: e.target.value })}
                                            className="bg-white/5 border-white/10"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Subtitle</Label>
                                        <textarea
                                            value={selectedComponent.content.subtitle}
                                            onChange={(e) => updateContent({ subtitle: e.target.value })}
                                            className="w-full h-24 rounded-md bg-white/5 border border-white/10 p-2 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Button Text</Label>
                                        <Input
                                            value={selectedComponent.content.buttonText}
                                            onChange={(e) => updateContent({ buttonText: e.target.value })}
                                            className="bg-white/5 border-white/10"
                                        />
                                    </div>
                                </>
                            )}

                            {selectedComponent.type === 'text' && (
                                <div className="space-y-2">
                                    <Label>Text Content</Label>
                                    <textarea
                                        value={selectedComponent.content.text}
                                        onChange={(e) => updateContent({ text: e.target.value })}
                                        className="w-full h-32 rounded-md bg-white/5 border border-white/10 p-2 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                                    />
                                </div>
                            )}

                            {selectedComponent.type === 'image' && (
                                <div className="space-y-4">
                                    <div className="aspect-video rounded-lg overflow-hidden bg-black/40 border border-white/10 relative group">
                                        <img src={selectedComponent.content.src} alt="Preview" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <Button variant="secondary" size="sm" onClick={() => {
                                                // Trigger image generation or upload
                                                updateContent({ src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80' })
                                            }}>Regenerate AI</Button>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Image URL</Label>
                                        <Input
                                            value={selectedComponent.content.src}
                                            onChange={(e) => updateContent({ src: e.target.value })}
                                            className="bg-white/5 border-white/10"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Alt Text</Label>
                                        <Input
                                            value={selectedComponent.content.alt}
                                            onChange={(e) => updateContent({ alt: e.target.value })}
                                            className="bg-white/5 border-white/10"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Generic Fallback for other types or complex nested content could be added here */}
                            {['features', 'testimonials', 'pricing', 'gallery', 'navbar', 'footer', 'cta'].includes(selectedComponent.type) && (
                                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-200 text-xs">
                                    Complex component content editing is simplified for this demo. You can switch to AI mode to request specific content changes.
                                </div>
                            )}
                        </TabsContent>

                        <TabsContent value="style" className="space-y-6 m-0 focus-visible:ring-0">
                            <div className="space-y-4">
                                <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider flex items-center gap-2">
                                    <Palette className="w-3 h-3" /> Colors
                                </h3>
                                <ColorPicker
                                    label="Background"
                                    value={selectedComponent.styles.background || ''}
                                    onChange={(val) => updateStyles({ background: val })}
                                />
                                <ColorPicker
                                    label="Text Color"
                                    value={selectedComponent.styles.textColor || ''}
                                    onChange={(val) => updateStyles({ textColor: val })}
                                />
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider flex items-center gap-2">
                                    <Type className="w-3 h-3" /> Typography
                                </h3>
                                <div className="space-y-2">
                                    <Label>Font Family</Label>
                                    <Select
                                        value={selectedComponent.styles.fontFamily}
                                        onValueChange={(val) => updateStyles({ fontFamily: val })}
                                    >
                                        <SelectTrigger className="bg-white/5 border-white/10">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Inter">Inter</SelectItem>
                                            <SelectItem value="Playfair Display">Playfair Display</SelectItem>
                                            <SelectItem value="Roboto Mono">Roboto Mono</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Text Align</Label>
                                    <div className="flex bg-white/5 border border-white/10 rounded-md p-1">
                                        {['left', 'center', 'right', 'justify'].map((align) => (
                                            <button
                                                key={align}
                                                onClick={() => updateStyles({ textAlign: align })}
                                                className={cn(
                                                    "flex-1 p-1.5 rounded transition-colors",
                                                    selectedComponent.styles.textAlign === align ? "bg-white/20 text-white" : "text-white/40 hover:text-white"
                                                )}
                                            >
                                                <div className={cn("w-4 h-0.5 bg-current rounded-full mx-auto",
                                                    align === 'left' ? "bg-gradient-to-r from-current to-transparent" :
                                                        align === 'right' ? "bg-gradient-to-l from-current to-transparent" : ''
                                                )} />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="layout" className="space-y-6 m-0 focus-visible:ring-0">
                            <div className="space-y-4">
                                <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider flex items-center gap-2">
                                    <Layout className="w-3 h-3" /> Spacing
                                </h3>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <Label>Padding Top</Label>
                                            <span className="text-xs text-white/40">{selectedComponent.styles.paddingTop}</span>
                                        </div>
                                        <Slider
                                            value={[parseInt(selectedComponent.styles.paddingTop || '0')]}
                                            max={200}
                                            step={4}
                                            onValueChange={([val]) => updateStyles({ paddingTop: `${val}px` })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <Label>Padding Bottom</Label>
                                            <span className="text-xs text-white/40">{selectedComponent.styles.paddingBottom}</span>
                                        </div>
                                        <Slider
                                            value={[parseInt(selectedComponent.styles.paddingBottom || '0')]}
                                            max={200}
                                            step={4}
                                            onValueChange={([val]) => updateStyles({ paddingBottom: `${val}px` })}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider flex items-center gap-2">
                                    <Box className="w-3 h-3" /> Borders
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <Label>Border Radius</Label>
                                        <span className="text-xs text-white/40">{selectedComponent.styles.borderRadius}</span>
                                    </div>
                                    <Slider
                                        value={[parseInt(selectedComponent.styles.borderRadius || '0')]}
                                        max={100}
                                        step={2}
                                        onValueChange={([val]) => updateStyles({ borderRadius: `${val}px` })}
                                    />
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </ScrollArea>
        </div>
    )
}

function Box(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
        </svg>
    )
}

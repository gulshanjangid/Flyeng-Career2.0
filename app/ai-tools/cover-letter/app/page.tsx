"use client"

import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Copy, Download, RefreshCw, Briefcase, User, Loader2, Sparkles, Code2, Search, Zap, BrainCircuit, Terminal, Command, CheckCircle2, Hash, PlaySquare, FileText, Settings, Eye, PenTool } from 'lucide-react'
import Link from "next/link"
import { useState, useEffect, memo } from "react"
import { toast } from "sonner"
import { useDropzone } from "react-dropzone"
import * as pdfjsLib from "pdfjs-dist"
import mammoth from "mammoth"

// Setup PDF worker
if (typeof window !== "undefined") {
    pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`
}
// --- Extracted Subcomponents ---

const ElegantInput = memo(({ label, icon: Icon, value, onChange, placeholder, suggestions }: any) => {
    const [focused, setFocused] = useState(false)
    return (
        <div className="flex flex-col gap-1.5 w-full">
            <div className={`relative bg-[#030305] border rounded-xl overflow-hidden transition-all duration-300 ${focused ? 'border-indigo-500/50 ring-1 ring-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.1)]' : 'border-white/10 hover:border-white/20'}`}>
                <div className="px-3 md:px-4 pt-2 md:pt-3 flex items-center justify-between">
                    <label className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/40 font-semibold">{label}</label>
                    {Icon && <Icon className="w-3.5 h-3.5 text-white/20" />}
                </div>
                <Input 
                    className="border-0 bg-transparent focus-visible:ring-0 rounded-none h-10 md:h-11 px-3 md:px-4 pb-2 md:pb-3 text-sm md:text-base text-white/90 font-medium placeholder:text-white/20" 
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
            {suggestions && suggestions.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-0.5">
                    {suggestions.map((s: string, i: number) => (
                        <button
                            key={i}
                            onClick={() => onChange({ target: { value: s } })}
                            className="text-[9px] md:text-[10px] px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors border border-white/5 hover:border-white/10 text-left whitespace-nowrap"
                        >
                            {s}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
})
ElegantInput.displayName = 'ElegantInput'

const ElegantTextarea = memo(({ label, icon: Icon, className = "", value, onChange, placeholder, suggestions }: any) => {
    const [focused, setFocused] = useState(false)
    return (
        <div className="flex flex-col gap-1.5 w-full">
            <div className={`relative bg-[#030305] border rounded-xl overflow-hidden transition-all duration-300 flex flex-col ${focused ? 'border-indigo-500/50 ring-1 ring-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.1)]' : 'border-white/10 hover:border-white/20'}`}>
                <div className="px-3 md:px-4 pt-2 md:pt-3 flex items-center justify-between shrink-0">
                    <label className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/40 font-semibold">{label}</label>
                    {Icon && <Icon className="w-3.5 h-3.5 text-white/20" />}
                </div>
                <Textarea 
                    className={`border-0 bg-transparent focus-visible:ring-0 rounded-none px-3 md:px-4 flex-1 pb-2 md:pb-3 pt-1 text-sm md:text-base text-white/80 placeholder:text-white/20 resize-none ${className}`}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
            {suggestions && suggestions.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-0.5">
                    {suggestions.map((s: string, i: number) => (
                        <button
                            key={i}
                            onClick={() => onChange({ target: { value: s } })}
                            className="text-[9px] md:text-[10px] px-2.5 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300/80 hover:text-indigo-200 transition-colors border border-indigo-500/20 hover:border-indigo-500/40 text-left leading-relaxed max-w-full"
                        >
                            <Sparkles className="w-3 h-3 inline-block mr-1.5 -translate-y-[1px]" />
                            {s.length > 60 ? s.substring(0, 60) + "..." : s}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
})
ElegantTextarea.displayName = 'ElegantTextarea'

const ElegantFileUpload = memo(({ label, value, onChange, className = "" }: any) => {
    const [focused, setFocused] = useState(false)
    const [isExtracting, setIsExtracting] = useState(false)
    const [fileName, setFileName] = useState("")

    const extractPdfText = async (file: File) => {
        const arrayBuffer = await file.arrayBuffer()
        const pdf = await pdfjsLib.getDocument(arrayBuffer).promise
        let fullText = ""
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i)
            const textContent = await page.getTextContent()
            const pageText = textContent.items.map((item: any) => item.str).join(" ")
            fullText += pageText + "\n"
        }
        return fullText
    }

    const extractDocxText = async (file: File) => {
        const arrayBuffer = await file.arrayBuffer()
        const result = await mammoth.extractRawText({ arrayBuffer })
        return result.value
    }

    const onDrop = async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0]
        if (!file) return

        setIsExtracting(true)
        setFileName(file.name)
        try {
            let extractedText = ""
            if (file.type === "application/pdf") {
                extractedText = await extractPdfText(file)
            } else if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
                extractedText = await extractDocxText(file)
            } else if (file.type === "text/plain") {
                extractedText = await file.text()
            } else {
                toast.error("Unsupported file type. Please upload a PDF, DOCX, or TXT file.")
                setIsExtracting(false)
                return
            }
            
            onChange(extractedText)
            toast.success("Resume text extracted successfully!")
        } catch (error) {
            console.error("Error extracting text:", error)
            toast.error("Failed to extract text from file.")
            setFileName("")
        } finally {
            setIsExtracting(false)
        }
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
            'text/plain': ['.txt']
        },
        maxFiles: 1
    })

    return (
        <div className={`relative bg-[#030305] border rounded-xl overflow-hidden transition-all duration-300 flex flex-col ${focused || isDragActive ? 'border-indigo-500/50 ring-1 ring-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.1)]' : 'border-white/10 hover:border-white/20'} ${className}`}>
            <div className="px-3 md:px-4 pt-2 md:pt-3 flex items-center justify-between shrink-0">
                <label className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/40 font-semibold">{label}</label>
                <User className="w-3.5 h-3.5 text-white/20" />
            </div>
            
            <div className="flex-1 px-3 md:px-4 pb-2 md:pb-3 pt-1 flex flex-col gap-2">
                <div 
                    {...getRootProps()} 
                    className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors flex-1 flex flex-col items-center justify-center min-h-[80px] ${isDragActive ? 'border-indigo-500 bg-indigo-500/10' : 'border-white/10 hover:border-white/20 hover:bg-white/5'}`}
                >
                    <input {...getInputProps()} />
                    {isExtracting ? (
                        <div className="flex flex-col items-center gap-2">
                            <Loader2 className="w-5 h-5 text-indigo-400 animate-spin" />
                            <span className="text-xs text-white/60">Extracting text...</span>
                        </div>
                    ) : value ? (
                        <div className="flex flex-col items-center gap-1">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            <span className="text-xs text-white/80 font-medium truncate max-w-[200px]">
                                {fileName || "Resume uploaded"}
                            </span>
                            <span className="text-[10px] text-white/40">Drop another file to replace, or edit text below</span>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-1">
                            <FileText className="w-5 h-5 text-white/40 mb-1" />
                            <span className="text-xs text-white/60">Drag & drop resume (PDF, DOCX)</span>
                            <span className="text-[10px] text-white/40">or click to browse</span>
                        </div>
                    )}
                </div>
                
                <Textarea 
                    className="border border-white/5 bg-black/50 focus-visible:ring-1 focus-visible:ring-indigo-500/30 rounded-lg px-3 py-2 text-xs md:text-sm text-white/80 placeholder:text-white/20 resize-y min-h-[80px]"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    value={value}
                    onChange={(e) => {
                        onChange(e.target.value)
                        if (!e.target.value) setFileName("") // Clear filename if user clears text manually
                    }}
                    placeholder="...or paste your resume/experience text here directly"
                />
            </div>
        </div>
    )
})
ElegantFileUpload.displayName = 'ElegantFileUpload'

const ElegantSelect = memo(({ label, value, onChange }: any) => {
    const [focused, setFocused] = useState(false)
    return (
        <div className={`relative bg-[#030305] border rounded-xl overflow-hidden transition-all duration-300 ${focused ? 'border-indigo-500/50 ring-1 ring-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.1)]' : 'border-white/10 hover:border-white/20'}`}>
            <div className="px-3 md:px-4 pt-2 md:pt-3">
                <label className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/40 font-semibold">{label}</label>
            </div>
            <Select value={value} onValueChange={onChange} onOpenChange={setFocused}>
                <SelectTrigger className="border-0 bg-transparent focus:ring-0 focus:ring-offset-0 rounded-none h-10 md:h-11 px-3 md:px-4 pb-2 md:pb-3 text-sm md:text-base text-white/90 font-medium w-full shadow-none focus-visible:ring-0">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#0A0A0C] border-white/10 text-white rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] p-1">
                    <SelectItem value="professional" className="focus:bg-white/5 rounded-lg py-2 cursor-pointer transition-colors">Professional & Polished</SelectItem>
                    <SelectItem value="enthusiastic" className="focus:bg-white/5 rounded-lg py-2 cursor-pointer transition-colors">Enthusiastic & Passionate</SelectItem>
                    <SelectItem value="confident" className="focus:bg-white/5 rounded-lg py-2 cursor-pointer transition-colors">Confident & Direct</SelectItem>
                    <SelectItem value="creative" className="focus:bg-white/5 rounded-lg py-2 cursor-pointer transition-colors">Creative & Unique</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
})
ElegantSelect.displayName = 'ElegantSelect'

// --- Main App Component ---

const loadingStages = [
    { text: "ESTABLISHING NEURAL LINK...", icon: Terminal },
    { text: "INGESTING CANDIDATE VECTORS...", icon: User },
    { text: "CROSS-REFERENCING ROLE REQS...", icon: Search },
    { text: "SYNTHESIZING NARRATIVE...", icon: BrainCircuit },
    { text: "APPLYING LINGUISTIC POLISH...", icon: Zap },
]

const WorkspaceCanvasInner = memo(({ loading, loadingStage, step, generatedLetter, copyToClipboard, downloadPDF, handleGenerate }: any) => {
    return (
        <div className="h-full relative flex flex-col bg-[#030305] overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none opacity-50" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none opacity-50" />
            
            {/* Subtle Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-30" />

            <div data-lenis-prevent="true" className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col items-center py-8 md:py-16 relative z-10 custom-scrollbar">
                <AnimatePresence mode="wait">
                    {loading ? (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="w-full max-w-sm md:max-w-md bg-[#09090b] border border-white/5 rounded-2xl shadow-2xl p-6 md:p-8 relative overflow-hidden my-auto"
                        >
                            <div className="absolute top-0 inset-x-0 h-1 bg-white/5 overflow-hidden">
                                <motion.div 
                                    className="h-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${((loadingStage + 1) / loadingStages.length) * 100}%` }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                            
                            <div className="flex justify-between items-center mb-6 md:mb-8">
                                <div className="flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 md:w-5 md:h-5 text-indigo-400 animate-spin" />
                                    <span className="text-[10px] md:text-[11px] font-mono text-white/50 tracking-wider">SYNTHESIS_ENGINE_V2</span>
                                </div>
                                <span className="text-[10px] md:text-[11px] font-mono text-indigo-400">{Math.round(((loadingStage + 1) / loadingStages.length) * 100)}%</span>
                            </div>

                            <div className="space-y-4 md:space-y-5">
                                {loadingStages.map((stage, i) => {
                                    const isActive = i === loadingStage
                                    const isPast = i < loadingStage
                                    return (
                                        <div key={i} className={`flex items-center gap-3 md:gap-4 text-[10px] md:text-xs font-mono tracking-wide transition-all duration-300 ${isActive ? 'text-white translate-x-1' : isPast ? 'text-white/30' : 'text-white/10'}`}>
                                            {isPast ? <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500 shrink-0" /> : isActive ? <PlaySquare className="w-3.5 h-3.5 md:w-4 md:h-4 text-indigo-400 animate-pulse shrink-0" /> : <Hash className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />}
                                            {stage.text}
                                        </div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    ) : step === 1 && !generatedLetter ? (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center text-center max-w-sm md:max-w-md mx-auto my-auto"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-6 md:mb-8 relative">
                                <div className="absolute inset-0 bg-indigo-500/10 blur-xl rounded-2xl md:rounded-3xl" />
                                <Command className="w-6 h-6 md:w-8 md:h-8 text-white/30 z-10" />
                            </div>
                            <h3 className="text-lg md:text-xl font-medium text-white/80 mb-2 md:mb-3 tracking-tight">System Awaiting Configuration</h3>
                            <p className="text-xs md:text-sm text-white/40 leading-relaxed px-4">
                                Input the candidate profile and target role details in the parameters panel to structure the optimal response node. 
                            </p>
                            <div className="mt-8 md:mt-10 flex flex-wrap justify-center items-center gap-3 md:gap-4 text-[10px] md:text-[11px] font-mono text-white/30">
                                <span className="flex items-center gap-1.5 md:gap-2 uppercase tracking-widest"><kbd className="px-1.5 md:px-2 py-0.5 md:py-1 rounded-md bg-white/5 border border-white/10 text-white/50">TAB</kbd> Nav</span>
                                <span className="hidden md:flex items-center gap-1.5 md:gap-2 uppercase tracking-widest"><kbd className="px-1.5 md:px-2 py-0.5 md:py-1 rounded-md bg-white/5 border border-white/10 text-white/50">⌘</kbd> + <kbd className="px-1.5 md:px-2 py-0.5 md:py-1 rounded-md bg-white/5 border border-white/10 text-white/50">⏎</kbd> Execute</span>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-full max-w-4xl bg-[#09090b] border border-white/10 rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.5)] flex flex-col relative overflow-hidden my-auto shrink-0"
                        >
                            {/* Editor Header */}
                            <div className="h-12 md:h-14 px-4 md:px-5 border-b border-white/10 flex items-center justify-between bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-20">
                                <div className="flex items-center gap-2 md:gap-3">
                                    <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
                                        <FileText className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                    </div>
                                    <span className="text-xs md:text-sm font-medium text-white/80 tracking-wide">output_node.md</span>
                                </div>
                                <div className="flex gap-2">
                                    <Button size="sm" variant="ghost" className="h-7 md:h-8 text-[10px] md:text-xs font-medium px-2 md:px-3 text-white/50 hover:text-white" onClick={copyToClipboard}>
                                        <Copy className="w-3 h-3 md:w-3.5 md:h-3.5 md:mr-2 mr-1" /> <span className="hidden md:inline">Copy</span>
                                    </Button>
                                    <Button size="sm" variant="outline" className="h-7 md:h-8 text-[10px] md:text-xs font-medium px-2 md:px-3 border-white/10 bg-white/5 hover:bg-white/10 text-white" onClick={downloadPDF}>
                                        <Download className="w-3 h-3 md:w-3.5 md:h-3.5 md:mr-2 mr-1" /> <span className="hidden md:inline">Export</span>
                                    </Button>
                                </div>
                            </div>

                            {/* Canvas Content */}
                            <div className="w-full px-5 md:px-6 py-6 md:py-10 lg:px-12 lg:py-16 text-sm md:text-[15px] leading-[1.8] text-white/80 font-sans tracking-wide selection:bg-indigo-500/30 whitespace-pre-wrap bg-gradient-to-b from-[#09090b] to-[#030305] min-h-[300px] md:min-h-[500px]">
                                {generatedLetter}
                                {loading && <span className="inline-block w-2 md:w-2.5 h-4 md:h-5 bg-indigo-400 ml-1 translate-y-1 animate-pulse" />}
                            </div>

                            {/* Canvas Footer */}
                            <div className="p-3 md:p-4 px-4 md:px-6 bg-[#030305] border-t border-white/10 flex justify-between items-center text-[9px] md:text-[11px] font-mono text-white/40 uppercase tracking-widest shrink-0">
                                <p className="flex items-center gap-1.5 md:gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]" />
                                    Transmission OK
                                </p>
                                <Button variant="ghost" onClick={handleGenerate} className="text-white/40 hover:text-white p-0 h-auto font-mono text-[9px] md:text-[11px] tracking-widest hover:bg-transparent uppercase">
                                    <RefreshCw className="w-3 h-3 mr-1.5 md:mr-2" /> Recalculate
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
})
WorkspaceCanvasInner.displayName = 'WorkspaceCanvasInner'

export default function CoverLetterApp() {
    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [generatedLetter, setGeneratedLetter] = useState("")
    const [loadingStage, setLoadingStage] = useState(0)
    const [activeTab, setActiveTab] = useState("input")
    const [formData, setFormData] = useState({
        resumeText: "",
        jobDescription: "",
        companyName: "",
        jobTitle: "",
        tone: "professional"
    })

    // loadingStages moved outside

    useEffect(() => {
        let interval: NodeJS.Timeout
        if (loading) {
            setLoadingStage(0)
            interval = setInterval(() => {
                setLoadingStage(prev => (prev < loadingStages.length - 1 ? prev + 1 : prev))
            }, 700)
        }
        return () => clearInterval(interval)
    }, [loading])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
                if (!loading && formData.resumeText && formData.jobDescription) {
                    handleGenerate()
                }
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [formData, loading])

    const handleGenerate = async () => {
        if (!formData.resumeText || !formData.jobDescription) {
            toast.error("Please fill in both your resume and the job description.")
            return
        }

        setLoading(true)
        setStep(2)
        setActiveTab("preview")

        try {
            const response = await fetch("/api/cover-letter/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (!response.ok) throw new Error(data.error || "Failed to generate")

            setTimeout(() => {
                setLoading(false)

                let i = 0
                const text = data.content
                setGeneratedLetter("")

                const typeInterval = setInterval(() => {
                    setGeneratedLetter(prev => text.slice(0, i))
                    i += 8
                    if (i > text.length) {
                        clearInterval(typeInterval)
                        setGeneratedLetter(text)
                    }
                }, 10)
            }, 3800) 

        } catch (error) {
            console.error(error)
            toast.error("Failed to generate cover letter. Please try again.")
            setLoading(false)
            setStep(1)
            setActiveTab("input")
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedLetter)
        toast.success("Copied to clipboard!")
    }

    const downloadPDF = () => {
        const element = document.createElement("a");
        const file = new Blob([generatedLetter], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "cover-letter.txt";
        document.body.appendChild(element);
        element.click();
        toast.success("Downloaded as text file")
    }

    // Pass necessary props so we don't recreate the subcomponents
    return (
        <div className="h-screen bg-[#030305] text-white font-sans selection:bg-indigo-500/30 flex flex-col overflow-hidden">
            <div className="shrink-0 bg-transparent">
                <SiteHeader />
            </div>

            <main className="flex-1 lg:mt-0 mt-[80px] lg:pt-[80px] border-t border-white/5 flex flex-col min-h-0 bg-[#0A0A0C]">
                {/* Mobile View: Tabs */}
                <div className="lg:hidden h-full flex flex-col min-h-0">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col min-h-0">
                        <div className="p-3 md:p-4 border-b border-white/5 shrink-0 bg-[#0A0A0C] z-30 sticky top-0">
                            <TabsList className="grid w-full grid-cols-2 bg-[#030305] h-12 md:h-14 rounded-xl border border-white/5 p-1">
                                <TabsTrigger value="input" className="rounded-lg text-xs md:text-sm data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/50 data-[state=active]:shadow-lg">
                                    <Settings className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2" /> Context Node
                                </TabsTrigger>
                                <TabsTrigger value="preview" className="rounded-lg text-xs md:text-sm data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/50 data-[state=active]:shadow-lg">
                                    <Eye className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2" /> Canvas
                                </TabsTrigger>
                            </TabsList>
                        </div>
                        <TabsContent value="input" className="flex-1 min-h-0 data-[state=inactive]:hidden m-0 border-0 p-0 overflow-y-auto custom-scrollbar">
                             <div className="flex flex-col h-full bg-[#0A0A0C] border-none relative z-20">
                                {/* Form Body */}
                                <div data-lenis-prevent="true" className="flex-1 p-4 md:p-6 space-y-4 md:space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <ElegantInput 
                                            label="Target Role" 
                                            icon={Briefcase}
                                            placeholder="e.g. Design Engineer"
                                            value={formData.jobTitle}
                                            onChange={(e: any) => setFormData({ ...formData, jobTitle: e.target.value })}
                                            suggestions={["Software Engineer", "Backend Developer", "Full Stack Developer", "Java Developer", "GenAI Engineer", "Data Analyst"]}
                                        />
                                        <ElegantInput 
                                            label="Company" 
                                            placeholder="e.g. Acme Corp."
                                            value={formData.companyName}
                                            onChange={(e: any) => setFormData({ ...formData, companyName: e.target.value })}
                                            suggestions={["TCS", "Accenture", "Infosys", "Wipro", "Celebal Technologies", "Cognizant"]}
                                        />
                                    </div>
                                    
                                        <ElegantTextarea 
                                            label="Job Description"
                                            icon={Code2}
                                            className="min-h-[140px] md:min-h-[160px]"
                                            placeholder="Paste the role requirements here..."
                                            value={formData.jobDescription}
                                            onChange={(e: any) => setFormData({ ...formData, jobDescription: e.target.value })}
                                            suggestions={[
                                                "Looking for a motivated Fresher with strong knowledge of Java, Spring Boot, and SQL. Must have good problem-solving skills and 1+ personal projects...", 
                                                "Hiring Junior Full Stack Developer. Required skills: MERN stack, REST APIs, basic understanding of cloud platforms. Open to fresh graduates...",
                                                "Entry-level GenAI Engineer: Looking for freshers with python, knowledge of LangChain, and eagerness to learn LLM integrations."
                                            ]}
                                        />
                                    
                                    <ElegantFileUpload 
                                        label="Candidate Profile"
                                        className="min-h-[160px] md:min-h-[220px]"
                                        value={formData.resumeText}
                                        onChange={(text: string) => setFormData({ ...formData, resumeText: text })}
                                    />
                                    
                                    <ElegantSelect 
                                        label="Linguistic Tone"
                                        value={formData.tone}
                                        onChange={(val: string) => setFormData({ ...formData, tone: val })}
                                    />
                                </div>

                                {/* Footer action */}
                                <div className="p-4 md:p-6 pt-0 shrink-0 sticky bottom-0 bg-[#0A0A0C]">
                                    <Button 
                                        className="w-full h-12 bg-white text-black hover:bg-zinc-200 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
                                        onClick={handleGenerate}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Compiling Matrix...</>
                                        ) : (
                                            <>
                                                <Sparkles className="w-4 h-4 text-indigo-600" />
                                                Initialize Synthesis
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="preview" className="flex-1 min-h-0 data-[state=inactive]:hidden m-0 border-0 p-0 overflow-y-auto">
                            <WorkspaceCanvasInner 
                                loading={loading}
                                loadingStage={loadingStage}
                                step={step}
                                generatedLetter={generatedLetter}
                                copyToClipboard={copyToClipboard}
                                downloadPDF={downloadPDF}
                                handleGenerate={handleGenerate}
                            />
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Desktop View: Split Layout */}
                <div className="hidden lg:flex w-full h-full min-h-0 overflow-hidden bg-[#0A0A0C]">
                    <div className="w-[420px] xl:w-[480px] shrink-0 h-full overflow-hidden flex flex-col bg-[#0A0A0C] border-r border-white/5 relative z-20">
                         {/* Header */}
                        <div className="h-16 px-6 border-b border-white/5 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-4">
                                <Link href="/ai-tools/cover-letter" className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group">
                                    <ArrowLeft className="w-4 h-4 text-white/50 group-hover:text-white/90 transition-colors" />
                                </Link>
                                <span className="font-medium text-[15px] text-white/90">Context Node</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                                </span>
                                <span className="text-[10px] font-mono text-emerald-500/80 uppercase tracking-widest hidden sm:inline-block">System Ready</span>
                            </div>
                        </div>

                        {/* Form Body */}
                        <div data-lenis-prevent="true" className="flex-1 overflow-y-auto p-6 space-y-5 custom-scrollbar">
                            <div className="grid grid-cols-2 gap-4">
                                <ElegantInput 
                                    label="Target Role" 
                                    icon={Briefcase}
                                    placeholder="e.g. Design Engineer"
                                    value={formData.jobTitle}
                                    onChange={(e: any) => setFormData({ ...formData, jobTitle: e.target.value })}
                                    suggestions={["Software Engineer", "Backend Developer", "Full Stack Developer", "Java Developer", "GenAI Engineer", "Data Analyst"]}
                                />
                                <ElegantInput 
                                    label="Company" 
                                    placeholder="e.g. Acme Corp."
                                    value={formData.companyName}
                                    onChange={(e: any) => setFormData({ ...formData, companyName: e.target.value })}
                                    suggestions={["TCS", "Accenture", "Infosys", "Wipro", "Celebal Technologies", "Cognizant"]}
                                />
                            </div>
                            
                            <ElegantTextarea 
                                label="Job Description"
                                icon={Code2}
                                className="min-h-[160px]"
                                placeholder="Paste the role requirements here..."
                                value={formData.jobDescription}
                                onChange={(e: any) => setFormData({ ...formData, jobDescription: e.target.value })}
                                suggestions={[
                                    "Looking for a motivated Fresher with strong knowledge of Java, Spring Boot, and SQL. Must have good problem-solving skills and 1+ personal projects...", 
                                    "Hiring Junior Full Stack Developer. Required skills: MERN stack, REST APIs, basic understanding of cloud platforms. Open to fresh graduates...",
                                    "Entry-level GenAI Engineer: Looking for freshers with python, knowledge of LangChain, and eagerness to learn LLM integrations."
                                ]}
                            />
                            
                            <ElegantFileUpload 
                                label="Candidate Profile"
                                className="min-h-[160px] flex-1"
                                value={formData.resumeText}
                                onChange={(text: string) => setFormData({ ...formData, resumeText: text })}
                            />
                            
                            <ElegantSelect 
                                label="Linguistic Tone"
                                value={formData.tone}
                                onChange={(val: string) => setFormData({ ...formData, tone: val })}
                            />
                        </div>

                        {/* Footer action */}
                        <div className="p-6 pt-0 shrink-0">
                            <Button 
                                className="w-full h-12 bg-white text-black hover:bg-zinc-200 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
                                onClick={handleGenerate}
                                disabled={loading}
                            >
                                {loading ? (
                                    <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Compiling Matrix...</>
                                ) : (
                                    <>
                                        <Sparkles className="w-4 h-4 text-indigo-600" />
                                        Initialize Synthesis
                                        <div className="hidden md:flex items-center gap-0.5 px-2 py-0.5 rounded-md bg-black/10 text-black/60 text-[10px] font-mono ml-auto tracking-widest leading-none">
                                            ⌘⏎
                                        </div>
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 h-full overflow-hidden">
                        <WorkspaceCanvasInner 
                            loading={loading}
                            loadingStage={loadingStage}
                            step={step}
                            generatedLetter={generatedLetter}
                            copyToClipboard={copyToClipboard}
                            downloadPDF={downloadPDF}
                            handleGenerate={handleGenerate}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}

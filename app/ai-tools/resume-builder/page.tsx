
"use client"

import { Button } from "@/components/ui/button"
import {
    Printer, Save,
    User, FileText, Briefcase, GraduationCap, Code, LayoutTemplate, Award, Trophy, Heart,
    Loader2, Search, Zap, CheckCircle2, ChevronDown, ChevronUp, Sparkles, AlertTriangle
} from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState, useEffect, useRef } from "react"
import { toast } from "sonner"
import { motion } from "framer-motion"
import Link from "next/link"

// --- TYPES & CONSTANTS ---
import { ResumeData } from "@/lib/types"
import { initialResumeState, placeholderData, DashboardData } from "@/lib/resume-builder-constants"
import { RESUME_THEMES, ResumeTheme } from "@/lib/resume-themes"

// --- COMPONENTS ---
import { ResumePreview } from "@/components/resume-builder/resume-preview"
import { ResumeLandingPage } from "@/components/resume-builder/resume-landing"
import { ResumeAnalysisDashboard } from "@/components/resume-builder/resume-analysis-dashboard"
import { ResumeAnalyzer } from "@/components/resume-builder/resume-analyzer"
import { StartOptionsModal } from "@/components/resume-builder/start-options-modal"
import { ResumeForm } from "@/components/resume-builder/resume-form"

// --- LOGIC / HELPERS ---
import { calculateATSLogic, generateSummaryLogic, enhanceDescriptionLogic, enhanceProjectDescriptionLogic } from "@/lib/ai-helper"
import { handleImportResumeLogic } from "@/lib/resume-import"
import { ImportScanningModal } from "@/components/resume-builder/import-scanning-modal"

export default function ResumeBuilder() {
    const [mode, setMode] = useState<'builder' | 'analyzer'>('builder');
    const [mobileTab, setMobileTab] = useState("editor"); // Added state for mobile tab
    const [resume, setResume] = useState<ResumeData>(initialResumeState);
    const [loadingAI, setLoadingAI] = useState<string | null>(null);
    const [showLanding, setShowLanding] = useState(true);
    const [currentStep, setCurrentStep] = useState(1);
    const [currentTheme, setCurrentTheme] = useState<ResumeTheme>('modern');
    const [customColor, setCustomColor] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [atsScore, setAtsScore] = useState(0);
    // Removed unused state vars for ATS individual items if they are in dashboardData
    const [zoom, setZoom] = useState(0.85);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    
    // Analyzed Data
    const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
    const [showAtsDashboard, setShowAtsDashboard] = useState(false);

    // --- Persistence & Onboarding ---
    const [isUnsavedImport, setIsUnsavedImport] = useState(false);

    // --- Browser History / Back Button Management ---
    useEffect(() => {
        if (!showLanding) {
            window.history.pushState({ builder: true }, "", window.location.href);
        }

        const handlePopState = (event: PopStateEvent) => {
            if (!showLanding) {
                event.preventDefault();
                setShowLanding(true);
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [showLanding]);

    useEffect(() => {
        const CURRENT_VERSION = 'v2.0-nikhil';
        const savedVersion = localStorage.getItem('flyeng-resume-version');

        if (savedVersion !== CURRENT_VERSION) {
            localStorage.removeItem('flyeng-resume-data');
            localStorage.setItem('flyeng-resume-version', CURRENT_VERSION);
        }

        const savedData = localStorage.getItem('flyeng-resume-data');
        const savedTheme = localStorage.getItem('flyeng-resume-theme');

        let dataToSet = placeholderData;

        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                if (parsed && typeof parsed === 'object') {
                    const badNames = ["Professional Summary", "Technical Skills", "Work Experience", "Summary", "Resume", "Curriculum Vitae"];
                    const nameLower = (parsed.personalInfo?.fullName || "").toLowerCase();
                    const isBad = badNames.some(b => nameLower.includes(b.toLowerCase()));

                    if (isBad || !parsed.personalInfo?.fullName) {
                        console.log("Detected bad data in localStorage. Reverting to default.");
                        localStorage.removeItem('flyeng-resume-data');
                        dataToSet = placeholderData;
                    } else {
                        dataToSet = parsed;
                    }
                }
            } catch (e) {
                console.error("Failed to load saved resume", e);
            }
        }

        // AGGRESSIVE DEDUPLICATION logic
        const normalize = (str: string | undefined) => (str || "").toLowerCase().replace(/\s+/g, "");

        const cleanArray = (arr: any[], keyFn: (item: any) => string) => {
            if (!Array.isArray(arr)) return [];
            const seenKeys = new Set();
            const seenObjects = new Set(); // also verify full object string to be safe

            return arr.filter(item => {
                const key = keyFn(item);
                const objStr = JSON.stringify(item);

                if (seenKeys.has(key) || seenObjects.has(objStr)) {
                    return false;
                }
                seenKeys.add(key);
                seenObjects.add(objStr);
                return true;
            });
        };

        const getExpKey = (e: any) => `${normalize(e.title)}|${normalize(e.company)}|${normalize(e.startDate)}`;
        const getProjKey = (p: any) => `${normalize(p.name)}|${normalize(p.tech)}`;
        const getCertKey = (c: any) => `${normalize(c.name)}|${normalize(c.issuer)}`;
        const getAchKey = (a: any) => `${normalize(a.title)}|${normalize(a.desc).substring(0, 20)}`;
        const getVolKey = (v: any) => `${normalize(v.role)}|${normalize(v.organization)}`;

        const cleanedData = {
            ...dataToSet,
            experience: cleanArray(dataToSet.experience, getExpKey),
            projects: cleanArray(dataToSet.projects, getProjKey),
            certifications: cleanArray(dataToSet.certifications || [], getCertKey),
            achievements: cleanArray(dataToSet.achievements || [], getAchKey),
            volunteer: cleanArray(dataToSet.volunteer || [], getVolKey)
        };

        setResume(cleanedData);
        if (!savedData) setShowLanding(true);

        if (savedTheme) {
            setCurrentTheme(savedTheme as ResumeTheme);
        }
    }, []);

    useEffect(() => {
        if (!showLanding && !isUnsavedImport) {
            localStorage.setItem('flyeng-resume-data', JSON.stringify(resume));
            localStorage.setItem('flyeng-resume-theme', currentTheme);
        }
    }, [resume, currentTheme, showLanding, isUnsavedImport]);

    // --- AI ATS Logic ---
    const calculateATS = async () => {
        setIsGenerating(true);
        setLoadingAI("ats");
        await calculateATSLogic(resume, setDashboardData, setAtsScore, setShowAtsDashboard, toast);
        setIsGenerating(false);
        setLoadingAI(null);
    };

    // --- AI Features ---
    const generateSummary = async () => {
        setIsGenerating(true);
        setLoadingAI("summary");
        await generateSummaryLogic(resume, setResume, toast);
        setIsGenerating(false);
        setLoadingAI(null);
    };

    const enhanceDescription = async (id: string, text: string) => {
        setIsGenerating(true);
        setLoadingAI(`desc-${id}`);
        await enhanceDescriptionLogic(resume, id, text, setResume, toast);
        setIsGenerating(false);
        setLoadingAI(null);
    };

    const enhanceProjectDescription = async (id: string, text: string) => {
        setIsGenerating(true);
        setLoadingAI(`proj-desc-${id}`);
        await enhanceProjectDescriptionLogic(resume, id, text, setResume, toast);
        setIsGenerating(false);
        setLoadingAI(null);
    };

    // --- Responsive Zoom Management ---
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                // Standard A4 width is ~794px. We add some padding calculation.
                // Mobile screen width minus padding (32px) divided by 800px base width
                const scale = (window.innerWidth - 32) / 800;
                setZoom(Math.max(0.35, Math.min(scale, 0.6))); // Clamp between 0.35 and 0.6 for mobile
            } else {
                 // Reset to comfortable desktop zoom only if it was a mobile-adjusted value (optional, but good for resizing)
                 if (zoom < 0.6) setZoom(0.85); 
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // --- Interaction ---
    const handleSectionClick = (sectionId: string) => {
        const map: any = {
            'personal': 1, 'summary': 2, 'experience': 3, 'education': 4,
            'skills': 5, 'projects': 6, 'certifications': 7,
            'achievements': 8, 'volunteer': 9
        };
        if (map[sectionId]) {
            setCurrentStep(map[sectionId]);
            toast.info(`Editing ${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`, { duration: 1000 });
        }
    };

    const handleSave = () => {
        setIsUnsavedImport(false);
        setIsSaving(true);
        setTimeout(() => {
            localStorage.setItem('flyeng-resume-data', JSON.stringify(resume));
            setIsSaving(false);
            toast.success("Resume saved successfully!");
        }, 800);
    };

    // --- Helpers ---
    const updateInfo = (f: string, v: string) => {
        setResume(p => ({ ...p, personalInfo: { ...p.personalInfo, [f]: v } }));
        setIsUnsavedImport(false);
    }

    const addItem = (section: 'experience' | 'education' | 'skills' | 'projects' | 'certifications' | 'achievements' | 'volunteer') => {
        setIsUnsavedImport(false);
        const id = Math.random().toString(36).substr(2, 9);
        let newItem: any = { id };

        switch (section) {
            case 'skills': newItem = { ...newItem, name: '' }; break;
            case 'certifications': newItem = { ...newItem, name: '', issuer: '', date: '' }; break;
            case 'achievements': newItem = { ...newItem, title: '', desc: '' }; break;
            case 'volunteer': newItem = { ...newItem, role: '', organization: '', startDate: '', endDate: '', desc: '' }; break;
            default: newItem = { ...newItem, title: '', company: '', school: '', name: '', desc: '', startDate: '', endDate: '' };
        }

        setResume(prev => ({ ...prev, [section]: [...prev[section], newItem] }));
        toast.success(`Added new ${section.slice(0, -1)} item`);
    };

    const updateItem = (section: string, id: string, field: string, value: string) => {
        setIsUnsavedImport(false);
        setResume(prev => ({
            ...prev,
            [section]: (prev[section as keyof ResumeData] as any[]).map((item: any) => item.id === id ? { ...item, [field]: value } : item)
        }));
    };

    const deleteItem = (section: string, id: string) => {
        setIsUnsavedImport(false);
        setResume(prev => ({
            ...prev,
            [section]: (prev[section as keyof ResumeData] as any[]).filter((item: any) => item.id !== id)
        }));
        toast.error("Item removed");
    };

    // --- Import Resume Handler ---
    const [isImporting, setIsImporting] = useState(false);
    const handleImportResume = () => {
        handleImportResumeLogic(
            setResume,
            setIsUnsavedImport,
            setMode,
            setShowLanding,
            setIsImporting,
            setIsGenerating,
            setLoadingAI
        );
    };

    const handlePrint = () => {
        window.print();
    };

    // --- Start Options Modal Logic ---
    const [showStartOptions, setShowStartOptions] = useState(false);


    if (showLanding) {
        return (
            <>
                <ResumeLandingPage
                    onGetStarted={() => setShowStartOptions(true)}
                    onSelectTemplate={(themeId) => {
                        setCurrentTheme(themeId as ResumeTheme);
                        setShowStartOptions(true);
                    }}
                    onImportResume={handleImportResume}
                />
                <ImportScanningModal isOpen={isImporting} />
                <StartOptionsModal 
                    showStartOptions={showStartOptions}
                    setShowStartOptions={setShowStartOptions}
                    setShowLanding={setShowLanding}
                    setResume={setResume}
                    setIsUnsavedImport={setIsUnsavedImport}
                    setMode={setMode}
                />
            </>
        );
    }

    return (
        <div className="flex flex-col h-screen bg-[#050505] text-white font-sans overflow-hidden">
            <ImportScanningModal isOpen={isImporting} />
            <StartOptionsModal 
                showStartOptions={showStartOptions}
                setShowStartOptions={setShowStartOptions}
                setShowLanding={setShowLanding}
                setResume={setResume}
                setIsUnsavedImport={setIsUnsavedImport}
                setMode={setMode}
            />

            {/* Header  */}
            <header className="h-14 md:h-16 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md flex items-center justify-between px-4 md:px-6 z-50 print:hidden shrink-0">
                <div className="flex items-center gap-3 md:gap-4">
                    {!showLanding ? (
                        <button
                            onClick={() => setShowLanding(true)}
                            className="text-slate-400 hover:text-white transition-colors p-1"
                        >
                            <User className="w-5 h-5 hidden" /> {/* Hidden icon for alignment if needed, keeping simple back arrow */}
                            <Link href="/ai-tools" className="text-slate-400 hover:text-white transition-colors p-1 flex items-center">
                                <User className="w-5 h-5 mr-2" /> <span className="hidden md:inline">Resume</span>
                            </Link>
                        </button>
                    ) : (
                        <Link href="/ai-tools" className="text-slate-400 hover:text-white transition-colors p-1">
                            Home
                        </Link>
                    )}
                     {/* Better Back Navigation Re-implementation */}
                     {!showLanding && (
                        <button
                            onClick={() => setShowLanding(true)}
                            className="text-slate-400 hover:text-white transition-colors p-1 md:hidden"
                        >
                            <ChevronDown className="w-5 h-5 rotate-90" />
                        </button>
                    )}

                    <div className="h-6 w-px bg-white/10 mx-2 hidden md:block" />
                    <h1 className="text-base md:text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hidden md:block">FC Resume Hub</h1>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-bold border border-cyan-500/20">PRO</span>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-white/5 p-1 rounded-lg flex items-center gap-1 border border-white/10 ml-2 md:ml-4">
                        <button
                            onClick={() => setMode('builder')}
                            className={`flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1.5 rounded-md text-[10px] md:text-xs font-medium transition-all ${mode === 'builder' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <Code className="w-3 h-3 md:w-3.5 md:h-3.5" /> Builder
                        </button>
                        <button
                            onClick={() => setMode('analyzer')}
                            className={`flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1.5 rounded-md text-[10px] md:text-xs font-medium transition-all ${mode === 'analyzer' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <Search className="w-3 h-3 md:w-3.5 md:h-3.5" /> Analyzer
                        </button>
                    </div>
                </div>

                {mode === 'builder' && (
                    <div className="flex items-center gap-4">
                        <Button size="sm" onClick={handlePrint} className="bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-all hover:border-white/30">
                            <Printer className="w-4 h-4 mr-2" /> Save PDF
                        </Button>
                        <Button
                            size="sm"
                            onClick={handleSave}
                            disabled={isSaving}
                            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
                        >
                            {isSaving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                            {isSaving ? "Saving..." : "Save"}
                        </Button>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-1 flex overflow-hidden relative print:hidden flex-col md:flex-row">
                {mode === 'analyzer' ? (
                    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 h-full w-full" data-lenis-prevent>
                        <ResumeAnalyzer />
                    </div>
                ) : (
                    /* Builder Logic (Split View) */
                    <>
                        {/* Mobile Tab Switcher */}
                        <div className="md:hidden shrink-0 bg-[#0A0A0A] border-b border-white/10 px-4 py-2">
                             <Tabs value={mobileTab} onValueChange={setMobileTab} className="w-full">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="editor">Editor</TabsTrigger>
                                    <TabsTrigger value="preview">Preview</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>

                        {/* Left: Editor */}
                        <div className={`${mobileTab === 'editor' ? 'flex' : 'hidden'} md:flex w-full md:w-1/2 flex-col border-r border-white/10 bg-[#0A0A0A] print:hidden h-full`}>
                            {/* Steps Nav */}
                            <div className="h-14 border-b border-white/10 flex items-center px-6 gap-6 overflow-x-auto scrollbar-hide bg-[#0A0A0A] shrink-0">
                                {[
                                    { id: 1, label: "Personal", icon: User },
                                    { id: 2, label: "Summary", icon: FileText },
                                    { id: 3, label: "Experience", icon: Briefcase },
                                    { id: 4, label: "Education", icon: GraduationCap },
                                    { id: 5, label: "Skills", icon: Code },
                                    { id: 6, label: "Projects", icon: LayoutTemplate },
                                    { id: 7, label: "Certifications", icon: Award },
                                    { id: 8, label: "Achievements", icon: Trophy },
                                    { id: 9, label: "Volunteer", icon: Heart },
                                ].map((step) => (
                                    <button
                                        key={step.id}
                                        onClick={() => setCurrentStep(step.id)}
                                        className={`flex items-center gap-2 text-xs font-medium uppercase tracking-wider transition-colors whitespace-nowrap relative py-4 ${currentStep === step.id ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-300'}`}
                                    >
                                        <step.icon className="w-3.5 h-3.5" />
                                        {step.label}
                                        {currentStep === step.id && <motion.div layoutId="underline" className="absolute bottom-0 h-0.5 bg-cyan-400 w-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />}
                                    </button>
                                ))}
                            </div>

                            {/* Editor Form - SCROLLABLE */}
                            <div className="flex-1 overflow-y-auto p-4 md:p-8 builder-scroll pb-20 md:pb-8" data-lenis-prevent>
                                <ResumeForm 
                                    currentStep={currentStep}
                                    resume={resume}
                                    setResume={setResume}
                                    fileInputRef={fileInputRef}
                                    updateInfo={updateInfo}
                                    generateSummary={generateSummary}
                                    isGenerating={isGenerating}
                                    loadingAI={loadingAI}
                                    addItem={addItem}
                                    updateItem={updateItem}
                                    deleteItem={deleteItem}
                                    enhanceDescription={enhanceDescription}
                                    enhanceProjectDescription={enhanceProjectDescription}
                                />
                            </div>
                        </div>

                        {/* Right: Preview (Split View) */}
                        <div className={`${mobileTab === 'preview' ? 'flex' : 'hidden'} md:flex w-full md:w-1/2 bg-[#101010] relative flex-col h-full print:hidden`}>
                            {/* Toolbar */}
                            <div className="h-14 border-b border-white/10 flex items-center justify-between px-4 md:px-6 bg-[#101010] shrink-0 overflow-x-auto scrollbar-hide gap-4">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 shrink-0">
                                     Live Preview
                                </span>
                                <div className="flex items-center gap-4 shrink-0">
                                    <div className="flex items-center gap-2 border-r border-white/10 pr-4">
                                        <Select value={currentTheme} onValueChange={(v: ResumeTheme) => setCurrentTheme(v)}>
                                            <SelectTrigger className="w-[120px] md:w-[140px] h-8 bg-white/5 border-white/10 text-xs shadow-none focus:ring-0">
                                                <SelectValue placeholder="Theme" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#111] border-white/10 text-white">
                                                {Object.entries(RESUME_THEMES).map(([key, theme]) => (
                                                    <SelectItem key={key} value={key} className="text-xs">{theme.name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="flex items-center gap-3 border-r border-white/10 pr-4">
                                        <Button
                                            size="sm"
                                            onClick={() => calculateATS()}
                                            disabled={isGenerating && loadingAI === 'ats'}
                                            className={`h-8 text-xs font-semibold transition-all rounded-full px-4 ${dashboardData
                                                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-500/25'
                                                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'}`}
                                        >
                                            {isGenerating && loadingAI === 'ats' ? (
                                                <Loader2 className="w-3.5 h-3.5 animate-spin md:mr-2" />
                                            ) : (
                                                <Sparkles className="w-3.5 h-3.5 md:mr-2" />
                                            )}
                                            <span className="hidden md:inline">{dashboardData ? `ATS: ${dashboardData.score}%` : 'Analyze'}</span>
                                            <span className="md:hidden">{dashboardData ? `${dashboardData.score}%` : 'ATS'}</span>
                                        </Button>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <div className="relative group hidden md:block">
                                            <div className="w-6 h-6 rounded-full border border-white/20 overflow-hidden cursor-pointer" style={{ backgroundColor: customColor || '#ffffff' }}>
                                                <input
                                                    type="color"
                                                    value={customColor}
                                                    onChange={(e) => setCustomColor(e.target.value)}
                                                    className="opacity-0 w-full h-full cursor-pointer absolute inset-0"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-px h-4 bg-white/10 mx-2 hidden md:block"></div>
                                        <button onClick={() => setZoom(Math.max(0.5, zoom - 0.1))} className="p-1.5 text-slate-400 hover:text-white bg-white/5 rounded-md"><ChevronDown className="w-3 h-3" /></button>
                                        <span className="text-xs font-mono w-8 md:w-10 text-center text-slate-500">{(zoom * 100).toFixed(0)}%</span>
                                        <button onClick={() => setZoom(Math.min(1.5, zoom + 0.1))} className="p-1.5 text-slate-400 hover:text-white bg-white/5 rounded-md"><ChevronUp className="w-3 h-3" /></button>
                                    </div>
                                </div>
                            </div>

                            {/* Preview Canvas - SCROLLABLE */}
                            <div className="flex-1 overflow-auto p-4 md:p-12 flex justify-center bg-[#101010] relative scrollbar-hide print:p-0 print:m-0 print:block pb-20 md:pb-12" data-lenis-prevent>
                                <div id="resume-preview-container" className="print:w-full transition-all duration-300 origin-top ats-single-page">
                                    <ResumePreview
                                        data={(() => {
                                            const normalize = (str: string | undefined) => (str || "").toLowerCase().replace(/\s+/g, "");
                                            const cleanDesc = (desc: string) => {
                                                if (!desc) return "";
                                                const normalized = desc.replace(/•/g, '\n');
                                                const lines = normalized.split('\n').map(b => b.trim()).filter(Boolean);
                                                const uniqueLines = Array.from(new Set(lines));
                                                return uniqueLines.map(b => `• ${b}`).join('\n');
                                            };
                                            const cleanArray = (arr: any[], keyFn: (item: any) => string) => {
                                                if (!Array.isArray(arr)) return [];
                                                const seenKeys = new Set();
                                                return arr.filter(item => {
                                                    const key = keyFn(item);
                                                    if (seenKeys.has(key)) return false;
                                                    seenKeys.add(key);
                                                    return true;
                                                });
                                            };
                                            return {
                                                ...resume,
                                                experience: cleanArray(resume.experience, e => `${normalize(e.title)}|${normalize(e.company)}|${normalize(e.startDate)}`)
                                                    .map(e => ({ ...e, desc: cleanDesc(e.desc) })),
                                                projects: cleanArray(resume.projects, p => `${normalize(p.name)}|${normalize(p.tech)}`),
                                                certifications: cleanArray(resume.certifications || [], c => `${normalize(c.name)}|${normalize(c.issuer)}`),
                                                volunteer: cleanArray(resume.volunteer || [], v => `${normalize(v.role)}|${normalize(v.organization)}`)
                                            };
                                        })()}
                                        theme={currentTheme}
                                        scale={zoom}
                                        customColor={customColor}
                                        onSectionClick={handleSectionClick}
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </main>

            {/* FULL SCREEN DASHBOARD */}
            {
                dashboardData && (
                    <ResumeAnalysisDashboard
                        isOpen={showAtsDashboard}
                        onClose={() => setShowAtsDashboard(false)}
                        data={dashboardData}
                    />
                )
            }

            {/* DEDICATED PRINT RENDERER (Hidden until print) */}
            <div id="print-only-root" className="hidden print:block fixed inset-0 z-[9999] bg-white ats-single-page">
                <ResumePreview
                    data={resume}
                    theme={currentTheme}
                    scale={1}
                    customColor={customColor}
                />
            </div>
        </div >
    )
}
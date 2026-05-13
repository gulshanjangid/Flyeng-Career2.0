"use client"

import { useState, useEffect, memo } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    UploadCloud, FileText, CheckCircle2, AlertCircle, RefreshCw,
    Smartphone, Monitor, BrainCircuit, Cpu, Shield, Zap, TrendingUp,
    Compass, Target, AlertTriangle, Fingerprint, Layers, Award,
    BarChart3, Hash, MousePointer2, Briefcase, GraduationCap, Info,
    User, Clock, DollarSign, Eye, ShieldCheck, Sparkles
} from 'lucide-react';
import { generateAIObject } from '@/lib/ai-helper';
import { toast } from 'sonner';
// Removed static imports of mammoth and pdfjs-dist to optimize bundle size
import { motion, AnimatePresence } from 'framer-motion';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";


// --- MEGA SCHEMA ---
interface DetailedAnalysisResult {
    isValidResume: boolean;
    fileCategory: string; // "Resume" | "Cover Letter" | "Random Text" | "Code"

    // 1. Core Scores
    overallScore: number;
    categoryScores: {
        atsCompatibility: number;
        contentQuality: number;
        technicalSkills: number;
        presentation: number;
        impact: number;
    };

    // 2. High Level
    verdict: string; // "Top 1%", "Competitive", "Needs Work", "Unusable"
    executiveSummary: string;
    candidatePersona: {
        archetype: string; // "The Specialist", "The Generalist", "The Leader"
        oneLiner: string; // "A deep technical expert with narrow focus..."
    };
    recruiterSimulation: {
        timeToReadSeconds: number; // e.g., 45
        firstImpression: "Positive" | "Neutral" | "Negative";
        hiringManagerThought: string; // "Great technical depth but lacks leadership examples..."
    };
    marketValue: { min: number; max: number; currency: string, roleLevel: string };

    // 3. Modules
    atsModule: {
        parsingSuccessful: boolean;
        keywordsFound: string[];
        keywordsMissing: string[];
        formattingIssues: string[]; // "Tables detected", "Header unsafe"
    };

    contentModule: {
        actionVerbsStrength: "High" | "Medium" | "Low";
        quantificationScore: number; // 0-100
        clichesDetected: string[]; // "Hard worker"
        repetitionIssues: string[];
    };

    structureModule: {
        wordCount: number;
        pageCountEstimate: number;
        sectionOrdering: "Optimal" | "Suboptimal" | "Chaotic";
        issues: string[]; // "Education before Experience for Senior role"
    };

    redFlags: { severity: "CRITICAL" | "WARNING", issue: string }[];

    improvements: {
        section: string;
        current: string;
        suggestion: string;
        impact: "HIGH" | "MEDIUM";
    }[];
}

// Tooltip Definitions
const METRIC_DEFINITIONS: Record<string, { desc: string, factors: string[] }> = {
    "ATS Ready": {
        desc: "Measures how easily Applicant Tracking Systems can parse your resume.",
        factors: ["Keyword Density", "Standard Headings", "File Formatting (PDF/Docx)", "No Tables/Columns"]
    },
    "Content": {
        desc: "Evaluates the quality and strength of your writing and professional narrative.",
        factors: ["Action Verb Strength", "Active Voice", "Clarity/Brevity", "Buzzword Avoidance"]
    },
    "Skills": {
        desc: "Assesses the relevance and demand of your technical and soft skills.",
        factors: ["Tech Stack Recency", "Role Alignment", "Hard Skill Count", "Tool Proficiency"]
    },
    "Impact": {
        desc: "Quantifies your achievements using data and metrics.",
        factors: ["Start-to-End Metrics", "Revenue/Growth %", "Scalability Evidence", "Leadership Scope"]
    }
};

// ----------------------------------------------------------------------
// HELPER COMPONENTS
// ----------------------------------------------------------------------

const RadarChart = ({ scores }: { scores: DetailedAnalysisResult['categoryScores'] }) => {
    const size = 300;
    const center = size / 2;
    const radius = 100;
    const metrics = [
        { label: 'ATS', val: scores.atsCompatibility },
        { label: 'CONTENT', val: scores.contentQuality },
        { label: 'SKILLS', val: scores.technicalSkills },
        { label: 'IMPACT', val: scores.impact },
        { label: 'PRESENTATION', val: scores.presentation }
    ];

    const points = metrics.map((m, i) => {
        const angle = (Math.PI * 2 * i) / metrics.length - Math.PI / 2;
        const r = (m.val / 100) * radius;
        return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
    }).join(' ');

    const fullPolygon = metrics.map((m, i) => {
        const angle = (Math.PI * 2 * i) / metrics.length - Math.PI / 2;
        return `${center + radius * Math.cos(angle)},${center + radius * Math.sin(angle)}`;
    }).join(' ');

    return (
        <div className="relative flex items-center justify-center p-4 w-full h-full">
            <svg viewBox={`0 0 ${size} ${size}`} className="overflow-visible w-full h-auto max-w-[300px]">
                {/* Background Polygons */}
                {[0.25, 0.5, 0.75, 1].map((scale) => {
                    const bgPoints = metrics.map((_, i) => {
                        const angle = (Math.PI * 2 * i) / metrics.length - Math.PI / 2;
                        const r = radius * scale;
                        return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
                    }).join(' ');
                    return <polygon key={scale} points={bgPoints} fill="none" stroke="#333" strokeOpacity="0.5" strokeWidth="1" />;
                })}

                {/* Axes */}
                {metrics.map((_, i) => {
                    const angle = (Math.PI * 2 * i) / metrics.length - Math.PI / 2;
                    return <line key={i} x1={center} y1={center} x2={center + radius * Math.cos(angle)} y2={center + radius * Math.sin(angle)} stroke="#333" strokeOpacity="0.5" strokeWidth="1" />;
                })}

                {/* Data Polygon */}
                <motion.polygon
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    points={points}
                    fill="rgba(6, 182, 212, 0.2)"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />

                {/* Labels */}
                {metrics.map((m, i) => {
                    const angle = (Math.PI * 2 * i) / metrics.length - Math.PI / 2;
                    const x = center + (radius + 25) * Math.cos(angle);
                    const y = center + (radius + 20) * Math.sin(angle);
                    return (
                        <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fill="#94a3b8" className="text-[10px] font-bold tracking-widest">
                            {m.label}
                        </text>
                    );
                })}
            </svg>
        </div>
    );
};


// ----------------------------------------------------------------------
// ISOLATED SCANNER COMPONENT (Zero Parent Re-renders)
// ----------------------------------------------------------------------
const ScannerUI = memo(() => {
    const [phase, setPhase] = useState("INITIALIZING DEEP SCAN...");
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(p => {
                if (p >= 92) return 92;
                return p + (Math.random() * 1.5);
            });
        }, 50);

        const phases = [
            { t: 0, m: "INITIALIZING QUANTUM CORE..." },
            { t: 1000, m: "DECODING DOCUMENT STRUCTURE..." },
            { t: 2500, m: "RUNNING ATS COMPATIBILITY MATRIX..." },
            { t: 4000, m: "ANALYZING IMPACT METRICS..." },
            { t: 5500, m: "DETECTING RED FLAGS & RISKS..." },
            { t: 7000, m: "FINALIZING EXECUTIVE REPORT..." }
        ];

        const timeouts = phases.map(p => setTimeout(() => setPhase(p.m), p.t));

        return () => {
            clearInterval(interval);
            timeouts.forEach(clearTimeout);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-[#000] flex flex-col items-center justify-center p-8 overflow-hidden font-mono text-cyan-500">
            {/* STATIC GRID CSS BACKGROUND */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                }}
            />

            {/* SPINNER */}
            <div className="relative w-48 h-48 mb-12">
                <div className="absolute inset-0 border-4 border-cyan-900 rounded-full opacity-30"></div>
                <div className="absolute inset-0 border-4 border-cyan-500 rounded-full border-t-transparent animate-spin"></div>
                <div className="absolute inset-4 border-2 border-purple-500 rounded-full border-b-transparent animate-spin-reverse opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Fingerprint className="w-16 h-16 text-cyan-400 animate-pulse" />
                </div>
            </div>

            {/* TEXT */}
            <div className="z-10 text-center space-y-4 max-w-md w-full">
                <h3 className="text-xl font-bold tracking-[0.2em] text-cyan-400 animate-pulse">{phase}</h3>

                <div className="h-2 w-full bg-cyan-900/30 rounded-full overflow-hidden border border-cyan-900/50">
                    <div
                        className="h-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"
                        style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
                    />
                </div>

                <div className="flex justify-between text-[10px] text-cyan-700 uppercase tracking-widest">
                    <span>Deep_Scan_v3.0</span>
                    <span>{Math.floor(progress)}% Processed</span>
                </div>
            </div>

            <style jsx>{`
                @keyframes spin-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                .animate-spin-reverse {
                    animation: spin-reverse 3s linear infinite;
                }
            `}</style>
        </div>
    );
});
ScannerUI.displayName = "ScannerUI";


// ----------------------------------------------------------------------
// MAIN ANALYZER COMPONENT
// ----------------------------------------------------------------------
export function ResumeAnalyzer() {
    const router = useRouter();
    const [active, setActive] = useState<'upload' | 'scanning' | 'results'>('upload');
    const [result, setResult] = useState<DetailedAnalysisResult | null>(null);
    const [fileLocal, setFileLocal] = useState<File | null>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0];
        if (f) {
            setFileLocal(f);
            setResult(null);
        }
    };

    const startAnalysis = async () => {
        if (!fileLocal) return;
        setActive('scanning');

        try {
            // 1. EXTRACT TEXT
            let text = "";
            let extractionError = false;

            try {
                // DYNAMIC IMPORT HEAVY LIBS
                const [pdfjsModule, mammothModule] = await Promise.all([
                    import('pdfjs-dist'),
                    import('mammoth')
                ]);
                
                const pdfjsLib = pdfjsModule;
                const mammoth = mammothModule.default || mammothModule;

                // Init Worker
                if (typeof window !== 'undefined' && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
                     pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
                }

                if (fileLocal.type === "application/pdf") {
                    const buff = await fileLocal.arrayBuffer();
                    const doc = await pdfjsLib.getDocument({ data: buff }).promise;
                    for (let i = 1; i <= doc.numPages; i++) {
                        text += (await (await doc.getPage(i)).getTextContent()).items.map((i: any) => i.str).join(" ");
                    }
                } else if (fileLocal.type?.includes("word") || fileLocal.name.endsWith(".docx")) {
                    text = (await mammoth.extractRawText({ arrayBuffer: await fileLocal.arrayBuffer() })).value;
                } else {
                    text = await fileLocal.text();
                }

                if (text.length < 50) throw new Error("File empty/unreadable");
            } catch (e: any) {
                console.error("Text Extraction Error", e);
                extractionError = true;
                throw new Error("Could not parse resume text. Please use a standard PDF.");
            }

            // 2. AI REQUEST - MEGA MODE
            const schema = `{
                "isValidResume": true,
                "fileCategory": "Resume",
                "overallScore": 0,
                "categoryScores": { "atsCompatibility": 0, "contentQuality": 0, "technicalSkills": 0, "presentation": 0, "impact": 0 },
                "verdict": "string",
                "executiveSummary": "string",
                "candidatePersona": { "archetype": "string", "oneLiner": "string" },
                "recruiterSimulation": { "timeToReadSeconds": 0, "firstImpression": "Positive", "hiringManagerThought": "string" },
                "marketValue": { "min": 0, "max": 0, "currency": "USD", "roleLevel": "string" },
                "atsModule": { 
                    "parsingSuccessful": true, 
                    "keywordsFound": ["string"], 
                    "keywordsMissing": ["string"], 
                    "formattingIssues": ["string"] 
                },
                "contentModule": {
                    "actionVerbsStrength": "High",
                    "quantificationScore": 0,
                    "clichesDetected": ["string"],
                    "repetitionIssues": ["string"]
                },
                "structureModule": {
                    "wordCount": 0,
                    "pageCountEstimate": 0,
                    "sectionOrdering": "Optimal",
                    "issues": ["string"]
                },
                "redFlags": [ { "severity": "CRITICAL", "issue": "string" } ],
                "improvements": [ 
                    { "section": "string", "current": "string", "suggestion": "string", "impact": "HIGH" } 
                ]
            }`;

            const prompt = `
            YOU ARE A WORLD-CLASS RESUME AUDITOR (Former Google & Apple Hiring Committee Lead).
            TASK: Perform a "BRUTAL & FORENSIC" deep-dive audit of this resume.
            MODE: "Ruthless, Specific, Data-Driven, & Industry-Compliant".
            
            1. **VALIDATION**: First, determine if this is a Resume/CV. If it's code, a novel, or random text, set "isValidResume": false and "fileCategory" accordingly. STOP THERE.

            2. **STRICT SCORING PROTOCOL**:
               - Overall Score: 0-100. (Curve: 50=Average, 75=Good, 90+=Top 1% Elite). BE STINGY.
               - ATS: Penalize for tables, columns, graphics, or non-standard headers.
               - Impact: Penalize for "responsible for" or "managed". Reward only for "Achieved X resulting in Y...".
            
            3. **ANALYSIS MODULES**:
               - **Persona**: Define their archetype (e.g. "The Specialist", "The Generalist").
               - **Recruiter Scan**: Simulate the first 6 seconds. What's the gut reaction?
               - **Market Value**: Estimate Salary Range & Seniority (e.g. "Senior L5", "Junior L3").
            
            4. **MANDATORY DEEP DIVE (DO NOT RETURN EMPTY ARRAYS)**:
               - **Content Audit**: You MUST analyze the "Action Verbs" and "Cliches". Identify at least 3-5 weak words or repetitive phrases.
               - **Red Flags**: You MUST find at least 1 risk (e.g., job hopping, gaps, typo, lack of metrics, generic summary). If no major risks, look for minor formatting issues.
               - **Improvements**: Provide 3 completely rewritten bullet points that turn weak text into strong, metric-heavy text.

            INPUT TEXT: "${text.substring(0, 8000)}"
            
            OUTPUT: Valid JSON only matching the Schema. Ensure "redFlags" and "contentModule" are FULLY POPULATED.
            `;

            // Minimum wait time for the animation (4s for deep scan feel)
            const [data] = await Promise.all([
                generateAIObject<DetailedAnalysisResult>(prompt, schema),
                new Promise(r => setTimeout(r, 4000))
            ]);

            setResult(data);
            setActive('results');
            toast.success("Deep Audit Complete");

        } catch (e: any) {
            toast.error(e.message || "Analysis failed");
            setActive('upload');
        }
    };

    return (
        <div className="min-h-full flex flex-col p-6 max-w-7xl mx-auto w-full relative">
            <AnimatePresence>
                {active === 'scanning' && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50"><ScannerUI /></motion.div>}
            </AnimatePresence>

            {/* ERROR STATE FOR INVALID FILES */}
            {active === 'results' && result && !result.isValidResume && (
                <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 animate-in zoom-in">
                    <AlertTriangle className="w-24 h-24 text-yellow-500 mb-4" />
                    <h2 className="text-4xl font-bold text-white">Invalid File Type Detected</h2>
                    <p className="text-slate-400 text-xl max-w-xl">
                        Our Deep Scan detected this file as <strong>"{result.fileCategory}"</strong>.
                        Please upload a valid professional resume/CV to proceed with the audit.
                    </p>
                    <Button onClick={() => { setFileLocal(null); setResult(null); setActive('upload'); }} variant="outline" className="mt-8 border-white/10 hover:bg-white/5">
                        <RefreshCw className="mr-2 w-4 h-4" /> Try Again
                    </Button>
                </div>
            )}

            {!result && active === 'upload' ? (
                /* Upload UI - Enhanced */
                <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] space-y-10 animate-in fade-in zoom-in duration-500">
                    <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 ring-1 ring-cyan-500/30 shadow-2xl relative group">
                            <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                            <Target className="w-9 h-9 text-cyan-400 relative z-10" />
                        </div>
                        <h2 className="text-5xl lg:text-6xl font-black text-white tracking-tight">AI Resume Audit</h2>
                        <p className="text-slate-400 max-w-md mx-auto text-lg font-light">
                            Get instant ATS scoring, recruiter insights, and improvement suggestions
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center gap-3 pt-4">
                            {[
                                { icon: ShieldCheck, label: "ATS Check" },
                                { icon: TrendingUp, label: "Impact Score" },
                                { icon: Eye, label: "Recruiter View" },
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">
                                    <feature.icon className="w-3.5 h-3.5 text-cyan-400" />
                                    {feature.label}
                                </div>
                            ))}
                        </div>
                    </div>

                    <Card
                        className="w-full max-w-xl h-56 border-2 border-dashed border-white/10 bg-[#0A0A0A]/50 hover:bg-[#0A0A0A] hover:border-cyan-500/40 transition-all rounded-3xl flex flex-col items-center justify-center relative cursor-pointer group overflow-hidden"
                        onClick={() => document.getElementById('resume-upload')?.click()}
                    >
                        <input id="resume-upload" type="file" onChange={handleFileUpload} accept=".pdf,.docx,.txt" className="hidden" />

                        {/* Hover glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                        {fileLocal ? (
                            <div className="flex flex-col items-center gap-5 z-20">
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                                    <FileText className="w-6 h-6 text-cyan-400" />
                                </div>
                                <span className="text-lg font-bold text-white max-w-md truncate px-4">{fileLocal.name}</span>
                                <Button
                                    onClick={(e) => { e.stopPropagation(); startAnalysis(); }}
                                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 px-8 h-12 rounded-full font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
                                >
                                    <Sparkles className="w-4 h-4 mr-2" /> Start Analysis
                                </Button>
                            </div>
                        ) : (
                            <div className="space-y-4 text-center z-20 pointer-events-none">
                                <UploadCloud className="w-12 h-12 text-slate-500 mx-auto group-hover:text-cyan-400 transition-colors" />
                                <div>
                                    <p className="text-lg font-bold text-white mb-1">Drop your resume here</p>
                                    <p className="text-sm text-slate-500">or click to browse</p>
                                </div>
                                <p className="text-xs text-slate-600 uppercase tracking-widest">PDF • DOCX • TXT</p>
                            </div>
                        )}
                    </Card>
                </div>
            ) : null}

            {result && result.isValidResume && (
                /* MEGA RESULTS UI */
                <TooltipProvider>
                    <div className="flex-1 space-y-8 animate-in slide-in-from-bottom-8 duration-700 pb-20">
                        {/* 1. HERO SECTION */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            {/* Score Card */}
                            <Card className="lg:col-span-8 p-8 bg-[#080808] border-white/10 relative overflow-hidden rounded-[2.5rem]">
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-cyan-900/10 to-transparent rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
                                    <div className="flex-1 space-y-6 text-center md:text-left">
                                        <Badge className={`${result.overallScore >= 70 ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'} border-none px-3 py-1 uppercase tracking-widest self-start`}>
                                            {result.verdict}
                                        </Badge>
                                        <h1 className="text-5xl font-black text-white tracking-tighter">Analysis Report</h1>

                                        {/* Graphic Visualizer */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/5 rounded-2xl p-6 border border-white/5">
                                            <div className="space-y-4">
                                                <RadarChart scores={result.categoryScores} />
                                            </div>
                                            <div className="space-y-4">
                                                <p className="text-slate-300 text-sm font-light leading-relaxed mb-4">{result.executiveSummary}</p>

                                                {/* VISUAL SALARY RANGE */}
                                                <div className="space-y-2">
                                                    <div className="flex justify-between text-xs text-slate-500 uppercase tracking-widest">
                                                        <span>Market Value</span>
                                                        <span>{result.marketValue.currency}</span>
                                                    </div>
                                                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden relative">
                                                        {/* Range Bar */}
                                                        <div className="absolute left-[20%] right-[20%] h-full bg-cyan-500/30" />
                                                        {/* Indicator */}
                                                        <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                                                    </div>
                                                    <div className="flex justify-between text-[10px] font-mono text-cyan-400">
                                                        <span>{result.marketValue.min.toLocaleString()}</span>
                                                        <span className="text-white font-bold">{result.marketValue.roleLevel}</span>
                                                        <span>{result.marketValue.max.toLocaleString()}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* NEW: RECRUITER SIMULATION ROW */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/5 pt-6 mt-2">
                                            {/* Persona Card */}
                                            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex gap-4 items-center">
                                                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                                                    <User className="w-5 h-5 text-purple-400" />
                                                </div>
                                                <div>
                                                    <div className="text-[10px] uppercase tracking-widest text-slate-500">Candidate Archetype</div>
                                                    <div className="text-sm font-bold text-white">{result.candidatePersona?.archetype || "Generalist"}</div>
                                                </div>
                                            </div>

                                            {/* Recruiter Scan */}
                                            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex gap-4 items-center">
                                                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                                                    <Eye className="w-5 h-5 text-orange-400" />
                                                </div>
                                                <div>
                                                    <div className="text-[10px] uppercase tracking-widest text-slate-500">Recruiter Impression (~{result.recruiterSimulation?.timeToReadSeconds || 45}s)</div>
                                                    <div className="text-sm font-bold text-white">{result.recruiterSimulation?.firstImpression || "Neutral"}</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="w-40 h-40 shrink-0 relative flex items-center justify-center flex-col gap-2">
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            <svg className="w-full h-full transform -rotate-90">
                                                <circle cx="80" cy="80" r="70" className="stroke-white/5" strokeWidth="12" fill="transparent" />
                                                <circle cx="80" cy="80" r="70" className={result.overallScore >= 70 ? 'stroke-cyan-500' : 'stroke-orange-500'} strokeWidth="12" fill="transparent" strokeDasharray={440} strokeDashoffset={440 - (440 * result.overallScore) / 100} strokeLinecap="round" />
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span className="text-5xl font-black text-white">{result.overallScore}</span>
                                            </div>
                                        </div>
                                        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Overall Score</span>
                                    </div>
                                </div>
                            </Card>

                            {/* Quick Stats Grid with Tooltips */}
                            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                                {[
                                    { l: "ATS Ready", s: result.categoryScores.atsCompatibility, i: Cpu },
                                    { l: "Content", s: result.categoryScores.contentQuality, i: FileText },
                                    { l: "Skills", s: result.categoryScores.technicalSkills, i: BrainCircuit },
                                    { l: "Impact", s: result.categoryScores.impact, i: TrendingUp }
                                ].map((m, idx) => (
                                    <Tooltip key={idx} delayDuration={0}>
                                        <TooltipTrigger asChild>
                                            <Card className="bg-[#080808] border-white/10 p-5 rounded-[2rem] flex flex-col justify-between group hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all cursor-help relative overflow-hidden">
                                                <m.i className="w-6 h-6 text-slate-600 group-hover:text-cyan-400 transition-colors mb-2 relative z-10" />
                                                <div className="relative z-10">
                                                    <div className="text-3xl font-bold text-white">{m.s}%</div>
                                                    <div className="text-xs text-slate-500 uppercase tracking-widest flex items-center gap-1">
                                                        {m.l} <Info className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                </div>
                                                <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden relative z-10">
                                                    <div className="h-full bg-cyan-500" style={{ width: `${m.s}%` }} />
                                                </div>
                                            </Card>
                                        </TooltipTrigger>
                                        <TooltipContent side="left" className="bg-[#1a1a1a] border-white/10 p-4 max-w-xs backdrop-blur-xl">
                                            <div className="space-y-2">
                                                <p className="font-bold text-cyan-400 text-xs uppercase tracking-widest">{m.l}</p>
                                                <p className="text-slate-300 text-xs leading-relaxed">{METRIC_DEFINITIONS[m.l]?.desc}</p>
                                                <div className="flex flex-wrap gap-1">
                                                    {METRIC_DEFINITIONS[m.l]?.factors.map((f, i) => (
                                                        <Badge key={i} variant="outline" className="text-[9px] border-white/10 text-slate-500">{f}</Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </TooltipContent>
                                    </Tooltip>
                                ))}
                            </div>
                        </div>

                        {/* 2. DETAILED TABS - Presurved */}
                        <Tabs defaultValue="overview" className="space-y-8">
                            <TabsList className="bg-[#080808] border border-white/10 p-1 h-16 rounded-full inline-flex md:flex w-full md:w-auto overflow-x-auto">
                                {[
                                    { id: "overview", label: "Overview" },
                                    { id: "ats", label: "ATS Analysis" },
                                    { id: "content", label: "Content Audit" },
                                    { id: "issues", label: "Red Flags" },
                                    { id: "improvements", label: "Improvements" }
                                ].map(tab => (
                                    <TabsTrigger
                                        key={tab.id}
                                        value={tab.id}
                                        className="rounded-full px-8 h-12 text-sm font-bold data-[state=active]:bg-white data-[state=active]:text-black transition-all"
                                    >
                                        {tab.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {/* CONTENT: OVERVIEW */}
                            <TabsContent value="overview" className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Card className="p-8 bg-[#080808] border-white/10 rounded-[2.5rem]">
                                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2"><Target className="w-5 h-5 text-cyan-400" /> Key Strengths</h3>
                                        <div className="space-y-4">
                                            <div className="text-slate-400 text-sm">
                                                Found <span className="text-white font-bold">{result.atsModule.keywordsFound.length}</span> critical industry keywords.
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {result.atsModule.keywordsFound.slice(0, 8).map((k, i) => (
                                                    <Badge key={i} variant="outline" className="border-green-500/20 text-green-400 bg-green-500/5">{k}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </Card>
                                    <Card className="p-8 bg-[#080808] border-white/10 rounded-[2.5rem]">
                                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2"><AlertCircle className="w-5 h-5 text-orange-400" /> Critical Areas</h3>
                                        <div className="space-y-4">
                                            {result.redFlags.slice(0, 3).map((flag, i) => (
                                                <div key={i} className="flex gap-3 items-start p-3 bg-red-500/5 border border-red-500/10 rounded-xl">
                                                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                                    <p className="text-xs text-red-200">{flag.issue}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                </div>
                            </TabsContent>

                            {/* CONTENT: ATS */}
                            <TabsContent value="ats" className="space-y-6">
                                <Card className="p-8 bg-[#080808] border-white/10 rounded-[2.5rem]">
                                    <h3 className="text-xl font-bold text-white mb-6">ATS Compatibility Matrix</h3>
                                    <div className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                                                <div className="text-xs text-slate-500 uppercase tracking-widest mb-2">Parsing Status</div>
                                                <Badge className={result.atsModule.parsingSuccessful ? "bg-green-500 text-black" : "bg-red-500"}>
                                                    {result.atsModule.parsingSuccessful ? "SUCCESS" : "FAILED"}
                                                </Badge>
                                            </div>
                                            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                                                <div className="text-xs text-slate-500 uppercase tracking-widest mb-2">Formatting Score</div>
                                                <div className="text-2xl font-bold text-white">{result.categoryScores.presentation}/100</div>
                                            </div>
                                            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                                                <div className="text-xs text-slate-500 uppercase tracking-widest mb-2">Keyword Match</div>
                                                <div className="text-2xl font-bold text-white">{result.atsModule.keywordsFound.length} Detected</div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-widest">Formatting Issues detected</h4>
                                            {result.atsModule.formattingIssues.length > 0 ? (
                                                <ul className="space-y-2">
                                                    {result.atsModule.formattingIssues.map((issue, i) => (
                                                        <li key={i} className="text-sm text-red-300 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> {issue}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <div className="text-green-400 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> No critical formatting errors found.</div>
                                            )}
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-widest">Missing Keywords</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {result.atsModule.keywordsMissing.map((k, i) => (
                                                    <Badge key={i} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700">{k}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </TabsContent>

                            {/* CONTENT: CONTENT AUDIT */}
                            <TabsContent value="content" className="space-y-6">
                                <Card className="p-8 bg-[#080808] border-white/10 rounded-[2.5rem]">
                                    <h3 className="text-xl font-bold text-white mb-6">Content Impact Audit</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm font-bold text-slate-400">
                                                    <span>Action Verb Strength</span>
                                                    <span className={result.contentModule.actionVerbsStrength === 'High' ? 'text-green-400' : 'text-yellow-400'}>{result.contentModule.actionVerbsStrength}</span>
                                                </div>
                                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                    <div className={`h-full ${result.contentModule.actionVerbsStrength === 'High' ? 'bg-green-500' : result.contentModule.actionVerbsStrength === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: result.contentModule.actionVerbsStrength === 'High' ? '90%' : result.contentModule.actionVerbsStrength === 'Medium' ? '60%' : '30%' }} />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm font-bold text-slate-400">
                                                    <span>Quantification Score</span>
                                                    <span className="text-cyan-400">{result.contentModule.quantificationScore}%</span>
                                                </div>
                                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                    <div className="h-full bg-cyan-500" style={{ width: `${result.contentModule.quantificationScore}%` }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Language Patterns</h4>
                                            {result.contentModule.clichesDetected.length > 0 ? (
                                                <div className="space-y-2">
                                                    <p className="text-xs text-slate-400">We detected these overused clichés:</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {result.contentModule.clichesDetected.map((c, i) => (
                                                            <Badge key={i} variant="outline" className="border-yellow-500/30 text-yellow-500 bg-yellow-500/5">{c}</Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2 text-green-400 text-sm"><CheckCircle2 className="w-4 h-4" /> No major buzzwords detected.</div>
                                            )}

                                            {result.contentModule.repetitionIssues.length > 0 && (
                                                <div className="space-y-2 mt-4">
                                                    <p className="text-xs text-slate-400">Repetitive phrasing found:</p>
                                                    <ul className="list-disc list-inside text-xs text-slate-300">
                                                        {result.contentModule.repetitionIssues.map((r, i) => (
                                                            <li key={i}>{r}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Card>
                            </TabsContent>

                            {/* CONTENT: RED FLAGS */}
                            <TabsContent value="issues" className="space-y-6">
                                <Card className="p-8 bg-[#080808] border-white/10 rounded-[2.5rem]">
                                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                        <Shield className="w-6 h-6 text-red-500" /> Risk Assessment
                                    </h3>
                                    <div className="space-y-4">
                                        {result.redFlags.length === 0 ? (
                                            <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-4">
                                                <CheckCircle2 className="w-8 h-8 text-green-400" />
                                                <div>
                                                    <h4 className="text-lg font-bold text-white">Clean Record</h4>
                                                    <p className="text-slate-400">No critical red flags or employment risks detected.</p>
                                                </div>
                                            </div>
                                        ) : (
                                            result.redFlags.map((flag, i) => (
                                                <div key={i} className={`p-4 rounded-xl border flex gap-4 ${flag.severity === 'CRITICAL' ? 'bg-red-500/10 border-red-500/30' : 'bg-yellow-500/10 border-yellow-500/30'}`}>
                                                    <AlertTriangle className={`w-5 h-5 shrink-0 mt-0.5 ${flag.severity === 'CRITICAL' ? 'text-red-500' : 'text-yellow-500'}`} />
                                                    <div className="space-y-1">
                                                        <div className="flex items-center gap-2">
                                                            <Badge className={`${flag.severity === 'CRITICAL' ? 'bg-red-500' : 'bg-yellow-500'} text-black font-bold text-[10px]`}>{flag.severity}</Badge>
                                                        </div>
                                                        <p className="text-slate-200 text-sm font-medium">{flag.issue}</p>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </Card>
                            </TabsContent>

                            {/* CONTENT: IMPROVEMENTS */}
                            <TabsContent value="improvements" className="space-y-6">
                                <Card className="p-8 bg-[#080808] border-white/10 rounded-[2.5rem]">
                                    <h3 className="text-xl font-bold text-white mb-6">Tactical Improvements</h3>
                                    <div className="space-y-6">
                                        {result.improvements.map((imp, i) => (
                                            <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all">
                                                <div className="flex items-start justify-between mb-4">
                                                    <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 uppercase tracking-widest text-[10px]">{imp.section}</Badge>
                                                    <Badge className={imp.impact === 'HIGH' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-black'}>{imp.impact} IMPACT</Badge>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <div className="space-y-2 opacity-60">
                                                        <div className="text-xs uppercase font-bold text-red-400 flex items-center gap-2"><AlertCircle className="w-3 h-3" /> Current</div>
                                                        <p className="text-sm font-mono text-slate-300 strike-through line-through decorative">{imp.current}</p>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="text-xs uppercase font-bold text-green-400 flex items-center gap-2"><CheckCircle2 className="w-3 h-3" /> Recommended</div>
                                                        <p className="text-sm font-medium text-white shadow-[0_0_30px_rgba(34,197,94,0.1)]">{imp.suggestion}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </TabsContent>

                        </Tabs>

                        <div className="flex justify-center pt-8 gap-4">
                            <Button variant="outline" onClick={() => { setFileLocal(null); setResult(null); setActive('upload'); }} className="h-14 px-10 rounded-full border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-all">
                                <RefreshCw className="w-5 h-5 mr-3" /> Run New Audit
                            </Button>

                            <Button onClick={() => router.push('/ai-tools/cover-letter')} className="h-14 px-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold tracking-widest shadow-xl hover:scale-105 transition-all">
                                <FileText className="w-5 h-5 mr-3" /> Generate Cover Letter
                            </Button>
                        </div>
                    </div>
                </TooltipProvider>
            )}
        </div>
    )
}
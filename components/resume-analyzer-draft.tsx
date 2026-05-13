"use client"

import { useState, useRef, useEffect, memo } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UploadCloud, FileText, CheckCircle2, AlertCircle, RefreshCw, ScanLine, BrainCircuit, Cpu, Zap, TrendingUp, Briefcase } from 'lucide-react';
import { generateAIObject } from '@/lib/ai-helper';
import { toast } from 'sonner';
import mammoth from 'mammoth';
import * as pdfjsLib from 'pdfjs-dist';
import { motion, AnimatePresence } from 'framer-motion';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

interface AnalysisResult {
    score: number;
    verdict: string;
    executiveSummary: string;
    marketValue: { min: number; max: number; currency: string };
    recruiterPersona: { startup: string; corporate: string };
    technicalGaps: string[];
    improvements: string[];
    keywordDensity: { word: string; count: number }[];
    breakdown: { impact: number; keywords: number; formatting: number; brevity: number };
    strengths: string[];
    missingKeywords: string[];
}

// ----------------------------------------------------------------------
// ISOLATED SCANNER COMPONENT (Zero Parent Re-renders)
// ----------------------------------------------------------------------
const ScannerUI = memo(() => {
    // We use internal state for messages to keep the parent clean
    const [phase, setPhase] = useState("INITIALIZING DEEP SCAN...");
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Independent progress loop
        const interval = setInterval(() => {
            setProgress(p => (p < 95 ? p + (Math.random() * 3) : 95));
        }, 100);

        // Independent phase loop
        const phases = [
            { t: 1000, m: "DECODING BINARY STRUCTURE..." },
            { t: 2500, m: "EXTRACTING SEMANTIC TOKENS..." },
            { t: 4000, m: "COMPARING TO FAANG DATASET..." },
            { t: 5500, m: "DETECTING CRITICAL GAPS..." },
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
            {/* STATIC GRID CSS BACKGROUND (No React rendering cost) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                }}
            />

            {/* SPINNER (Pure CSS Animation) */}
            <div className="relative w-48 h-48 mb-12">
                <div className="absolute inset-0 border-4 border-cyan-900 rounded-full opacity-30"></div>
                <div className="absolute inset-0 border-4 border-cyan-500 rounded-full border-t-transparent animate-spin"></div>
                <div className="absolute inset-4 border-2 border-purple-500 rounded-full border-b-transparent animate-spin-reverse opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Cpu className="w-16 h-16 text-cyan-400 animate-pulse" />
                </div>
            </div>

            {/* TEXT */}
            <div className="z-10 text-center space-y-4 max-w-md w-full">
                <h3 className="text-xl font-bold tracking-[0.2em] text-cyan-400 animate-pulse">{phase}</h3>

                <div className="h-2 w-full bg-cyan-900/30 rounded-full overflow-hidden border border-cyan-900/50">
                    <div
                        className="h-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"
                        style={{ width: `${progress}%`, transition: 'width 0.2s linear' }}
                    />
                </div>

                <div className="flex justify-between text-[10px] text-cyan-700 uppercase tracking-widest">
                    <span>System_Active</span>
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
    const [active, setActive] = useState<'upload' | 'scanning' | 'results'>('upload');
    const [result, setResult] = useState<AnalysisResult | null>(null);
    const [file, setFile] = useState<File | null>(null);

    const start = async () => {
        if (!file) return;
        setActive('scanning');

        try {
            // 1. EXTRACT TEXT
            let text = "";
            if (file.type === "application/pdf") {
                const buff = await file.arrayBuffer();
                const doc = await pdfjsLib.getDocument({ data: buff }).promise;
                for (let i = 1; i <= doc.numPages; i++) {
                    text += (await (await doc.getPage(i)).getTextContent()).items.map((i: any) => i.str).join(" ");
                }
            } else if (file.type.includes("word") || file.name.endsWith(".docx")) {
                text = (await mammoth.extractRawText({ arrayBuffer: await file.arrayBuffer() })).value;
            } else {
                text = await file.text();
            }

            if (text.length < 50) throw new Error("File empty/unreadable");

            // 2. AI REQUEST
            // Prompt: Ultra-Strict Mode
            // Prompt: Ultra-Strict Mode
            const prompt = `
YOU ARE A RUTHLESS FAANG HIRING MANAGER.
TASK: Audit this resume for a generic tech role. 
STYLE: Brutal, data-driven, direct. No fluff.

Resume Text: "${text.substring(0, 6000)}"

OUTPUT JSON STRICTLY:
{
  "score": (Number 0-100. Be Harsh. 60=Average, 90=Google L5+),
  "verdict": (String, max 3 words, e.g. "REJECT - TOO JUNIOR"),
  "executiveSummary": (String, 3 sentences analyzing career trajectory and impact),
  "marketValue": { "min": (Number), "max": (Number), "currency": "USD" },
  "recruiterPersona": {
     "startup": (String: How a YC founder sees this. Focus on hustle/speed.),
     "corporate": (String: How a Fortune 500 HR sees this. Focus on risk/tenure.)
  },
  "technicalGaps": [(String array: Missing modern stacks for their role. e.g. "Missing CI/CD", "No Cloud info")],
  "improvements": [(String array: 3 specific tactical fixes)],
  "missingKeywords": [(String array: 5 key industry terms missing from this text)],
  "strengths": [(String array: 3 best things)],
  "breakdown": { "impact": (0-100), "keywords": (0-100), "formatting": (0-100), "brevity": (0-100) },
  "keywordDensity": [{ "word": "String", "count": Number }]
}`;

            // Wait minimum time to show off the fancy animation (2s)
            const [data] = await Promise.all([
                generateAIObject<AnalysisResult>(prompt, {
                    score: 0, verdict: "", executiveSummary: "", marketValue: { min: 0, max: 0, currency: "$" },
                    recruiterPersona: { startup: "", corporate: "" }, technicalGaps: [], improvements: [], missingKeywords: [],
                    strengths: [], breakdown: { impact: 0, keywords: 0, formatting: 0, brevity: 0 }, keywordDensity: []
                }),
                new Promise(r => setTimeout(r, 2500))
            ]);

            setResult(data);
            setActive('results');

        } catch (e: any) {
            toast.error(e.message);
            setActive('upload');
        }
    };

    // ... RENDER LOGIC with the new result format ...
    // (I will fill this in the actual write_to_file tool)
    return <div>...</div>
}

// ... rest of UI ...

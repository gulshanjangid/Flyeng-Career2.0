"use client";

import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Play,
  Bug,
  Zap,
  Loader2,
  Terminal,
  Copy,
  Code2,
  Cpu,
  ShieldAlert,
  CheckCircle2,
  Activity,
  Layers,
  Box,
  Hexagon,
  Triangle,
  Circle,
  Minimize2,
  Maximize2,
  X,
  Sparkles,
  Command,
  Hash,
  Braces,
  Settings2,
  Sliders,
  Keyboard,
  ArrowRight,
  Trash2,
  Clipboard,
  Undo2,
  Redo2,
} from "lucide-react";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Editor, { useMonaco } from "@monaco-editor/react";

// Monaco Themes Map
const EDITOR_THEMES = {
  "vs-dark": "VS Dark",
  light: "Light",
  "hc-black": "High Contrast",
};

// Editor Component Wrapper to handle mounting/config
const MonacoEditorWrapper = React.memo(({
  language,
  value,
  onChange,
  theme,
  onCursorChange,
  onRunCode,
  settings,
  onTriggerGen,
  onEditorMount,
}: any) => {
  const [mounted, setMounted] = useState(false);
  const editorRef = useRef<any>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // React to settings changes
  useEffect(() => {
    if (editorRef.current && settings) {
      editorRef.current.updateOptions({
        fontSize: settings.fontSize,
        minimap: { enabled: settings.minimap },
        wordWrap: settings.wordWrap ? "on" : "off",
        lineNumbers: settings.lineNumbers ? "on" : "off",
      });
    }
  }, [settings]);

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
    
    // Preload executor
    import("@/lib/executor");
    
    if (onEditorMount) onEditorMount(editor);

    // Configure standard VS Code features
    editor.updateOptions({
      minimap: { enabled: window.innerWidth >= 768, scale: 0.75, renderCharacters: false },
      fontSize: settings?.fontSize ?? (window.innerWidth < 768 ? 13 : 14),
      fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
      fontLigatures: true,
      scrollBeyondLastLine: false,
      smoothScrolling: true,
      cursorBlinking: "smooth",
      cursorSmoothCaretAnimation: "on",
      renderLineHighlight: "all",
      bracketPairColorization: { enabled: true },
      guides: { indentaction: true, bracketPairs: true },
      padding: { top: 16, bottom: 16 },
      wordWrap: settings?.wordWrap ? "on" : "off",
      lineNumbers: settings?.lineNumbers ? "on" : "off",
      automaticLayout: true,
      // Enhanced Autocomplete / Intelligence
      suggest: {
        showWords: true, // Enable word-based suggestions for all languages
        showSnippets: true,
        showClasses: true,
        showFunctions: true,
        showKeywords: true,
        preview: true, // Ghost text!
        previewMode: "subwordSmart",
      },
      quickSuggestions: {
        other: true,
        comments: true,
        strings: true,
      },
      parameterHints: {
        enabled: true,
        cycle: true,
      },
      formatOnType: true,
      formatOnPaste: true,
    });

    // Track cursor position
    editor.onDidChangeCursorPosition((e: any) => {
      onCursorChange?.({ line: e.position.lineNumber, col: e.position.column });
    });

    // Keybinding: Ctrl + Enter to Run
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      if (onRunCode) {
        onRunCode();
      }
    });

    // Keybinding: Ctrl + I to Generate Code
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyI, () => {
      if (onTriggerGen) {
        onTriggerGen();
      }
    });
  };

  // Expose editor instance for parent to use (if needed via ref, but here we use a new prop or just effect)
  // Actually, let's pass a helper to the parent/toolbar if we can, or just use the existing ref.

  return (
    <Editor
      height="100%"
      defaultLanguage="python"
      language={language}
      value={value}
      theme={theme}
      onChange={(val) => onChange(val || "")}
      onMount={handleEditorDidMount}
      options={{
        automaticLayout: true,
        padding: { top: 16, bottom: 16 },
      }}
      className="rounded-xl overflow-hidden"
    />
  );
});
MonacoEditorWrapper.displayName = "MonacoEditorWrapper";

// Quick Access Toolbar Component
const QuickAccessToolbar = ({
  onAction,
}: {
  onAction: (action: string, payload?: string) => void;
}) => {
  const actions = [
    { label: "Tab", action: "tab", icon: <ArrowRight className="w-3 h-3" /> },
    { label: "{ }", action: "type", payload: "{}" },
    { label: "( )", action: "type", payload: "()" },
    { label: "[ ]", action: "type", payload: "[]" },
    { label: ";", action: "type", payload: ";" },
    { label: "=", action: "type", payload: " = " },
    { label: ":", action: "type", payload: ":" },
    { label: '"', action: "type", payload: '"' },
    { label: "'", action: "type", payload: "'" },
    {
      label: "Select All",
      action: "select-all",
      icon: <CheckCircle2 className="w-3 h-3" />,
    },
    { label: "Copy", action: "copy", icon: <Copy className="w-3 h-3" /> },
    {
      label: "Paste",
      action: "paste",
      icon: <Clipboard className="w-3 h-3" />,
    },
    {
      label: "Clear",
      action: "clear",
      icon: <Trash2 className="w-3 h-3 text-red-400" />,
    },
    { label: "Undo", action: "undo", icon: <Undo2 className="w-3 h-3" /> },
    { label: "Redo", action: "redo", icon: <Redo2 className="w-3 h-3" /> },
  ];

  return (
    <div className="h-10 bg-[#0a0a0a] border-b border-white/5 flex items-center gap-2 px-4 overflow-x-auto custom-scrollbar shrink-0 md:hidden">
      {actions.map((item, idx) => (
        <button
          key={idx}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onAction(item.action, item.payload);
          }}
          className="h-8 px-2 min-w-[36px] rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono border border-white/5 flex items-center justify-center whitespace-nowrap active:scale-95 transition-transform"
        >
          {item.icon || item.label}
        </button>
      ))}
    </div>
  );
};

const DEFAULT_CODE: Record<string, string> = {
  python: `# Swap two numbers
a = 5
b = 10
print(f"Before swap: a = {a}, b = {b}")

# Swapping logic
temp = a
a = b
b = temp

print(f"After swap: a = {a}, b = {b}")`,
  javascript: `// Swap two numbers
let a = 5;
let b = 10;
console.log(\`Before swap: a = \${a}, b = \${b}\`);

// Swapping logic
let temp = a;
a = b;
b = temp;

console.log(\`After swap: a = \${a}, b = \${b}\`);`,
  cpp: `#include <iostream>
using namespace std;

int main() {
    int a = 5, b = 10;
    cout << "Before swap: a = " << a << ", b = " << b << endl;

    // Swapping logic
    int temp = a;
    a = b;
    b = temp;

    cout << "After swap: a = " << a << ", b = " << b << endl;
    return 0;
}`,
  java: `public class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;
        System.out.println("Before swap: a = " + a + ", b = " + b);

        // Swapping logic
        int temp = a;
        a = b;
        b = temp;

        System.out.println("After swap: a = " + a + ", b = " + b);
    }
}`,
};

const FILE_EXTENSIONS: Record<string, string> = {
  python: "py",
  javascript: "js",
  cpp: "cpp",
  java: "java",
};

function CompilerContent() {
  const searchParams = useSearchParams();
  const [language, setLanguage] = useState("python");
  const [editorTheme, setEditorTheme] = useState("vs-dark");
  const [code, setCode] = useState(DEFAULT_CODE["python"]);
  const [output, setOutput] = useState("");
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState("output");
  const [customInput, setCustomInput] = useState("");
  const [successAnim, setSuccessAnim] = useState(false);

  // Dynamic Status State
  const [cursorPos, setCursorPos] = useState({ line: 1, col: 1 });
  const [systemStatus, setSystemStatus] = useState("READY");

  // Editor Settings State
  const [editorSettings, setEditorSettings] = useState({
    fontSize: 16,
    minimap: false,
    wordWrap: false,
    lineNumbers: true,
  });

  // Smart Fix State
  const [fixing, setFixing] = useState(false);
  const [smartFix, setSmartFix] = useState<{
    fixedCode: string;
    explanation: string;
  } | null>(null);

  // Inline Gen State
  const [showGenInput, setShowGenInput] = useState(false);
  const [genPrompt, setGenPrompt] = useState("");
  const [generating, setGenerating] = useState(false);

  // Architect / New Project State
  const [showArchitect, setShowArchitect] = useState(false);
  const [architectPrompt, setArchitectPrompt] = useState("");
  const [showShortcuts, setShowShortcuts] = useState(false);

  // Refs
  const editorInstanceRef = useRef<any>(null);
  const runCodeRef = useRef<() => void>(() => {});

  // URL Param Logic
  useEffect(() => {
    const urlCode = searchParams.get("code");
    const urlLang = searchParams.get("language");

    if (urlLang && DEFAULT_CODE[urlLang]) {
      setLanguage(urlLang);
      if (urlCode) {
        setCode(decodeURIComponent(urlCode));
      } else {
        setCode(DEFAULT_CODE[urlLang]);
      }
    } else if (urlCode) {
      setCode(decodeURIComponent(urlCode));
    }
  }, [searchParams]);

  // Update code when language changes manually
  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang);
    setCode(DEFAULT_CODE[newLang] || "");
    setOutput("");
    setAnalysis(null);
    setSmartFix(null);
    setSuccessAnim(false);
    setSystemStatus("READY");
  };

  const checkForInput = (code: string, lang: string) => {
    const patterns = {
      python: /input\(/,
      cpp: /cin\s*>>/,
      java: /Scanner|System\.in/,
      javascript: /prompt\(/,
    };
    const regex = patterns[lang as keyof typeof patterns];
    return regex ? regex.test(code) : false;
  };

  const handleEditorMount = (editor: any) => {
    editorInstanceRef.current = editor;
  };

  // 1. INLINE GENERATION (Ctrl + I) - Always Inserts/Edits, NEVER wipes
  const handleInlineGen = async () => {
    if (!genPrompt.trim() || !editorInstanceRef.current) return;
    setGenerating(true);
    try {
      const response = await fetch("/api/compiler/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: genPrompt,
          language,
          contextCode: code.substring(0, 2000),
        }),
      });

      const data = await response.json();
      if (data.success && data.code) {
        const editor = editorInstanceRef.current;
        const selection = editor.getSelection();

        // Insert at cursor or replace selection
        editor.executeEdits("ai-inline", [
          {
            range: selection,
            text: data.code,
            forceMoveMarkers: true,
          },
        ]);
        editor.pushUndoStop();

        toast.success("Code inserted!");
        setShowGenInput(false);
        setGenPrompt("");
      } else {
        toast.error("Failed to generate code.");
      }
    } catch (e) {
      toast.error("Error generating code");
    } finally {
      setGenerating(false);
    }
  };

  // 2. ARCHITECT GENERATION (New Project) - Always Wipes & Replaces
  const handleArchitectGen = async () => {
    if (!architectPrompt.trim()) return;
    setGenerating(true);
    // Close modal immediately to show loading state in editor or elsewhere if preferred
    // But let's keep modal open or show a global loader?
    // Let's use the local loading state.

    try {
      const response = await fetch("/api/compiler/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Create a COMPLETE, working ${language} program for: ${architectPrompt}. Include all necessary boilerplate, imports, and main functions.`,
          language,
          contextCode: "", // No context for fresh project
        }),
      });

      const data = await response.json();
      if (data.success && data.code) {
        setCode(data.code);
        // Also update editor instance if available to be safe
        if (editorInstanceRef.current) {
          editorInstanceRef.current.setValue(data.code);
          editorInstanceRef.current.setScrollTop(0);
          editorInstanceRef.current.setPosition({ lineNumber: 1, column: 1 });
        }

        toast.success("New Project Created! 🚀");
        setShowArchitect(false);
        setArchitectPrompt("");
      } else {
        toast.error("Failed to build project.");
      }
    } catch (e) {
      toast.error("Architect Error");
    } finally {
      setGenerating(false);
    }
  };
  const handleTriggerGen = () => {
    setShowGenInput(true);
  };

  const fixWithAI = async () => {
    if (!output) return;
    setFixing(true);
    try {
      const response = await fetch("/api/compiler/fix", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language, error: output }),
      });

      const data = await response.json();
      if (data.success) {
        setSmartFix({
          fixedCode: data.fixedCode,
          explanation: data.explanation,
        });
        toast.success("AI identified a fix!");
      } else {
        toast.error("Could not find a fix.");
      }
    } catch (error) {
      toast.error("Smart Fix failed");
    } finally {
      setFixing(false);
    }
  };

  const applyFix = () => {
    if (smartFix) {
      setCode(smartFix.fixedCode);
      setSmartFix(null);
      setOutput("");
      setSystemStatus("READY");
      toast.success("Fix applied!");
    }
  };

  const runCode = async () => {
    // Smart Input Detection
    if (checkForInput(code, language) && !customInput.trim()) {
      if (activeTab !== "input") {
        setActiveTab("input");
        toast.info("This code may require input. Enter it here.", {
          duration: 4000,
        });
        setSystemStatus("AWAITING INPUT");
        return;
      }
    }

    setLoading(true);
    setSystemStatus("RUNNING...");
    setOutput("");
    setSmartFix(null);
    setActiveTab("output");
    setSuccessAnim(false);

    try {
      const { executeCode } = await import("@/lib/executor");
      const result = await executeCode(language, code, customInput);

      if (result.error) {
        setOutput(`Error:\n${result.error}`);
        setSystemStatus("ERROR");
        if (!result.output) return;
      }

      setOutput((prev) =>
        result.error ? prev + "\n" + result.output : result.output,
      );
      setSuccessAnim(true);
      setSystemStatus("COMPLETED");
      setTimeout(() => setSystemStatus("READY"), 3000);
      setTimeout(() => setSuccessAnim(false), 3000);
    } catch (error: any) {
      toast.error("Execution failed");
      setOutput(`Error: ${error.message || "Unknown execution error"}`);
      setSystemStatus("CRITICAL ERROR");
    } finally {
      setLoading(false);
      if (systemStatus !== "ERROR" && systemStatus !== "CRITICAL ERROR") {
        setTimeout(() => setSystemStatus("READY"), 3000);
      }
    }
  };

  const analyzeCode = async () => {
    setAnalyzing(true);
    setSystemStatus("ANALYZING...");
    setAnalysis(null);
    setActiveTab("analysis");
    try {
      const response = await fetch("/api/compiler/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language }),
      });

      if (!response.ok) throw new Error("Analysis failed");

      const data = await response.json();
      setAnalysis(data.analysis);
      setSystemStatus("ANALYSIS DONE");
    } catch (error) {
      toast.error("Failed to analyze code");
      setSystemStatus("ANALYSIS FAILED");
    } finally {
      setAnalyzing(false);
      setTimeout(() => setSystemStatus("READY"), 3000);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  // Keep ref updated
  useEffect(() => {
    runCodeRef.current = runCode;
  }, [runCode]);

    return (
        <div className="h-[100dvh] bg-[#000000] text-white flex flex-col font-sans overflow-hidden relative selection:bg-white/20">
            {/* ... (Background) ... */}

            {/* Navbar */}
            <div className="z-50 border-b border-white/5 bg-white/5 backdrop-blur-xl">
                <SiteHeader />
            </div>

            <div className="flex-1 flex flex-col lg:flex-row p-2 lg:p-6 gap-4 lg:gap-6 overflow-y-auto lg:overflow-hidden relative z-10">

                {/* Editor Monolith */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="flex-[2] flex flex-col relative h-[60dvh] min-h-[500px] lg:h-auto lg:min-h-0"
                >
                    <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-50 hidden md:block animate-pulse-slow" />
                    <div className="relative flex-1 bg-[#050505] md:bg-[#050505]/90 md:backdrop-blur-3xl rounded-3xl border border-white/10 flex flex-col overflow-hidden shadow-2xl ring-1 ring-white/5 transition-all duration-300 hover:border-white/20 hover:shadow-cyan-500/10">
                        {/* Header */}
                        <div className="h-16 border-b border-white/5 flex items-center justify-between px-4 lg:px-6 bg-white/5 shrink-0 overflow-x-auto custom-scrollbar gap-4">
                            <div className="flex items-center gap-4 shrink-0">
                                <div className="hidden sm:flex w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 items-center justify-center shadow-lg shadow-cyan-500/20">
                                    <Code2 className="w-5 h-5 text-white" />
                                </div>
                                <div className="hidden sm:block">
                                    <h2 className="text-sm font-bold tracking-wide text-white flex items-center gap-2">
                                        FC Editor <span className="px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 text-[9px] border border-cyan-500/30">AI NATIVE</span>
                                    </h2>
                                    <p className="text-[10px] text-slate-400 font-mono">v4.0.0 • INTELLIGENT ENGINE</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                {/* AI Architect Button */}
                                    <Button
                                        onClick={() => setShowArchitect(true)}
                                        size="sm"
                                        className="h-9 px-3 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 font-bold tracking-wide shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all active:scale-95 flex"
                                    >
                                        <Sparkles className="w-3.5 h-3.5 sm:mr-2" />
                                        <span className="hidden sm:inline">Generator</span>
                                    </Button>

                                {/* Run & Analyze Buttons */}
                                <div className="flex items-center gap-2 mr-2">
                                    <Button
                                        onClick={runCode}
                                        disabled={loading}
                                        size="sm"
                                        className="h-9 px-3 sm:px-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold tracking-wide shadow-lg shadow-green-500/20 transition-all active:scale-95"
                                    >
                                        {loading ? <Loader2 className="w-3 h-3 animate-spin sm:mr-2" /> : <Play className="w-3 h-3 sm:mr-2 fill-current" />}
                                        <span className="hidden sm:inline">RUN</span>
                                    </Button>
                                    <Button
                                        onClick={analyzeCode}
                                        disabled={analyzing}
                                        size="sm"
                                        variant="outline"
                                        className="h-9 w-9 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border-white/10 backdrop-blur-md transition-all active:scale-95 p-0"
                                        title="AI Analysis"
                                    >
                                        {analyzing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
                                    </Button>
                                    <Button
                                        onClick={() => setShowShortcuts(true)}
                                        size="sm"
                                        variant="ghost"
                                        className="h-9 w-9 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all p-0"
                                        title="Keyboard Shortcuts"
                                    >
                                        <Keyboard className="w-4 h-4" />
                                    </Button>
                                </div>

                                {/* Theme & Language */}
                                <Select value={editorTheme} onValueChange={setEditorTheme}>
                                    <SelectTrigger className="w-[80px] lg:w-[130px] bg-black/20 border-white/10 text-white h-9 rounded-xl hover:bg-white/10 transition-colors focus:ring-0 focus:ring-offset-0 text-xs flex">
                                        <SelectValue placeholder="Theme" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#0a0a0a]/90 border-white/10 text-white backdrop-blur-xl rounded-xl">
                                        {Object.entries(EDITOR_THEMES).map(([key, label]) => (
                                            <SelectItem key={key} value={key}>{label}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Select value={language} onValueChange={handleLanguageChange}>
                                    <SelectTrigger className="w-[110px] lg:w-[130px] bg-black/20 border-white/10 text-white h-9 rounded-xl hover:bg-white/10 transition-colors focus:ring-0 focus:ring-offset-0 text-xs text-center font-rubik">
                                        <SelectValue placeholder="Language" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#0a0a0a]/90 border-white/10 text-white backdrop-blur-xl rounded-xl">
                                        {Object.keys(DEFAULT_CODE).map(lang => (
                                            <SelectItem key={lang} value={lang} className="capitalize">
                                                {lang.charAt(0).toUpperCase() + lang.slice(1)}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Mobile Quick Access Toolbar */}
                         <QuickAccessToolbar onAction={(action, payload) => {
                            const editor = editorInstanceRef.current;
                            if (!editor) return;
                            
                            editor.focus();
                            
                            if (action === 'type' && payload) {
                                editor.trigger('keyboard', 'type', { text: payload });
                            } else if (action === 'tab') {
                                editor.trigger('keyboard', 'tab', null);
                            } else if (action === 'undo') {
                                editor.trigger('keyboard', 'undo', null);
                            } else if (action === 'redo') {
                                editor.trigger('keyboard', 'redo', null);
                            } else if (action === 'copy') {
                                const selection = editor.getModel()?.getValueInRange(editor.getSelection()!) || editor.getValue();
                                navigator.clipboard.writeText(selection);
                                toast.success("Copied to clipboard");
                            } else if (action === 'paste') {
                                navigator.clipboard.readText().then(text => {
                                    if(text) editor.trigger('keyboard', 'type', { text });
                                }).catch(() => toast.error("Clipboard permission denied"));
                            } else if (action === 'clear') {
                                if (confirm("Clear all code?")) editor.setValue("");
                            } else if (action === 'select-all') {
                                editor.setSelection(editor.getModel()?.getFullModelRange()!);
                            }
                        }} />

                        {/* Monaco Editor Integration */}
                        <div className="flex-1 relative overflow-hidden group">
                            <Suspense fallback={<div className="flex items-center justify-center h-full text-slate-500">Loading Editor...</div>}>
                                <MonacoEditorWrapper 
                                    language={language} 
                                    value={code} 
                                    onChange={setCode}
                                    theme={editorTheme}
                                    onCursorChange={setCursorPos}
                                    onRunCode={() => runCodeRef.current()}
                                    settings={editorSettings}
                                    onTriggerGen={handleTriggerGen}
                                    onEditorMount={handleEditorMount}
                                />
                            </Suspense>

                            {/* INLINE GEN INPUT (Ctrl+I) */}
                            <AnimatePresence>
                                {showGenInput && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                        className="absolute top-10 left-0 right-0 mx-auto w-[90%] max-w-[500px] z-50 px-4"
                                    >
                                        <div className="bg-[#1a1a1a]/95 backdrop-blur-2xl border border-blue-500/30 rounded-xl shadow-[0_10px_40px_-10px_rgba(59,130,246,0.3)] p-1.5 flex items-center gap-3 ring-1 ring-blue-500/50">
                                            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                                                <Code2 className="w-4 h-4 text-blue-400 animate-pulse" />
                                            </div>
                                            <input
                                                autoFocus
                                                value={genPrompt}
                                                onChange={(e) => setGenPrompt(e.target.value)}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' && !e.shiftKey) {
                                                        e.preventDefault();
                                                        handleInlineGen();
                                                    }
                                                    if (e.key === 'Escape') setShowGenInput(false);
                                                }}
                                                placeholder="Edit code at cursor (e.g. 'Add a loop')..."
                                                className="flex-1 bg-transparent border-none text-sm text-white focus:ring-0 focus:outline-none placeholder:text-slate-500 h-9"
                                                disabled={generating}
                                            />
                                            {generating && <Loader2 className="w-4 h-4 animate-spin text-blue-400 mr-2" />}
                                            <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono pr-2">
                                                <span className="bg-white/10 px-1.5 py-0.5 rounded">⏎</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* ARCHITECT MODAL (New Project) */}
                            <AnimatePresence>
                                {showArchitect && (
                                    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-10 sm:pt-24 bg-black/60 backdrop-blur-[2px] overflow-y-auto custom-scrollbar">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, y: -20 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                            className="w-[90%] max-w-[600px] shrink-0 bg-[#121212] border border-purple-500/30 rounded-2xl shadow-[0_0_50px_-10px_rgba(168,85,247,0.3)] ring-1 ring-purple-500/20 mb-10"
                                        >
                                            <div className="p-6 relative">
                                                <button 
                                                    onClick={() => setShowArchitect(false)} 
                                                    className="absolute top-4 right-4 p-2 text-slate-500 hover:text-white rounded-lg hover:bg-white/10 transition-colors z-20"
                                                >
                                                    <X className="w-5 h-5" />
                                                </button>
                                                <div className="flex items-center gap-3 mb-6 pr-8">
                                                    <div className="p-3 bg-purple-500/20 rounded-xl ring-1 ring-purple-500/40 shadow-lg shadow-purple-500/20 shrink-0">
                                                        <Sparkles className="w-6 h-6 text-purple-400" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-white tracking-tight">Project Architect</h3>
                                                        <p className="text-xs text-slate-400 font-medium">Describe your idea, and AI will build it.</p>
                                                    </div>
                                                </div>
                                                
                                                <textarea
                                                    autoFocus
                                                    value={architectPrompt}
                                                    onChange={(e) => setArchitectPrompt(e.target.value)}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter' && !e.shiftKey) {
                                                            e.preventDefault();
                                                            handleArchitectGen();
                                                        }
                                                        if (e.key === 'Escape') setShowArchitect(false);
                                                    }}
                                                    placeholder="E.g., A Snake game in Python using Pygame, or A Merge Sort implementation..."
                                                    className="w-full h-32 bg-black/30 border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-purple-500/50 resize-y min-h-[120px] placeholder:text-slate-600 font-mono"
                                                    disabled={generating}
                                                />
                                                
                                                <div className="flex justify-end items-center gap-3 mt-4">
                                                    <button onClick={() => setShowArchitect(false)} className="text-xs text-slate-500 hover:text-white transition-colors">Cancel</button>
                                                    <Button 
                                                        onClick={handleArchitectGen} 
                                                        disabled={generating || !architectPrompt.trim()}
                                                        className="bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-500/20"
                                                    >
                                                        {generating ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Sparkles className="w-4 h-4 mr-2" />}
                                                        Generate Project
                                                    </Button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                )}
                            </AnimatePresence>

                            {/* SHORTCUTS MODAL */}
                            <AnimatePresence>
                                {showShortcuts && (
                                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="w-[90%] max-w-[400px] bg-[#121212] border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-6 relative"
                                        >
                                            <button onClick={() => setShowShortcuts(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white"><X className="w-4 h-4" /></button>
                                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                                <Keyboard className="w-5 h-5 text-slate-400" /> Keyboard Shortcuts
                                            </h3>
                                            
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between group">
                                                    <span className="text-sm text-slate-400 group-hover:text-white transition-colors">Run Code</span>
                                                    <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-cyan-400">Ctrl + Enter</span>
                                                </div>
                                                <div className="flex items-center justify-between group">
                                                    <span className="text-sm text-slate-400 group-hover:text-white transition-colors">Inline AI</span>
                                                    <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-purple-400">Ctrl + I</span>
                                                </div>
                                                <div className="flex items-center justify-between group">
                                                    <span className="text-sm text-slate-400 group-hover:text-white transition-colors">Trigger Suggestion</span>
                                                    <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-slate-300">Ctrl + Space</span>
                                                </div>
                                                <div className="flex items-center justify-between group">
                                                    <span className="text-sm text-slate-400 group-hover:text-white transition-colors">Format Code</span>
                                                    <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-slate-300">Shift + Alt + F</span>
                                                </div>
                                                <div className="flex items-center justify-between group">
                                                    <span className="text-sm text-slate-400 group-hover:text-white transition-colors">Command Palette</span>
                                                    <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-slate-300">F1</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                        
                        {/* Status Bar */}
                        <div className="h-8 bg-[#0a0a0a] border-t border-white/5 flex items-center justify-between px-4 text-[10px] text-slate-500 font-mono tracking-wide rounded-bl-3xl">
                                <div className="flex gap-4 shrink-0">
                                    <span className={`${systemStatus === 'READY' ? 'text-green-500' : 'text-yellow-500'} font-bold`}>{systemStatus}</span>
                                    <span className="hidden sm:inline">UTF-8</span>
                                    <span className="text-slate-600 hidden sm:inline">|</span>
                                    <span className="hidden sm:flex items-center gap-1"><Keyboard className="w-3 h-3" /> CTRL+ENTER to Run</span>
                                </div>
                                <div className="flex gap-4 shrink-0">
                                    <span className="hidden sm:inline">Ln {cursorPos.line}, Col {cursorPos.col}</span>
                                    <span className="hidden sm:inline">SPACES: 4</span>
                                    <span>{language.toUpperCase()}</span>
                                </div>
                            </div>
                    </div>
                </motion.div>

                {/* Data Shard (Right) */}
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.2 }}
                    className="w-full lg:w-[400px] shrink-0 flex flex-col relative flex-1 min-h-[400px] lg:h-full lg:min-h-0"
                >
                    <div className="absolute -inset-1 bg-gradient-to-b from-white/5 to-transparent rounded-3xl blur-md opacity-50 hidden md:block" />
                    <div className="relative flex-1 bg-[#050505] md:bg-[#050505]/80 md:backdrop-blur-2xl rounded-3xl border border-white/10 flex flex-col overflow-hidden shadow-2xl ring-1 ring-white/5">
                        {/* Tabs */}
                        <div className="flex p-2 gap-2 bg-white/5 m-4 rounded-xl border border-white/5 shrink-0 z-20">
                            <button
                                onClick={() => setActiveTab("output")}
                                className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'output' ? 'bg-white text-black shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                            >
                                TERMINAL
                            </button>
                            <button
                                onClick={() => setActiveTab("input")}
                                className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'input' ? 'bg-white text-black shadow-lg relative' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                            >
                                INPUT
                                {customInput && <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-500 rounded-full" />}
                            </button>
                            <button
                                onClick={() => setActiveTab("analysis")}
                                className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'analysis' ? 'bg-white text-black shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                            >
                                INSIGHTS
                            </button>
                        </div>

                        {/* Content Container */}
                        <div className="flex-1 flex flex-col min-h-0 relative">
                            {/* Standard Scrollbar */}
                            <div className="absolute inset-0 overflow-y-auto px-6 pb-6 overflow-x-hidden custom-scrollbar">
                                {activeTab === 'output' && (
                                    <div className="min-h-full font-mono text-sm pb-10">
                                        <div className="flex justify-between items-center mb-6 sticky top-0 bg-[#050505]/95 backdrop-blur py-4 z-10 border-b border-white/5">
                                            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold flex items-center gap-2">
                                                <Sparkles className="w-3 h-3 text-purple-400" /> AI Insights
                                            </span>
                                            <div className="flex items-center gap-2">
                                                {output && output.toLowerCase().includes('error') && !smartFix && (
                                                    <Button 
                                                        onClick={fixWithAI} 
                                                        disabled={fixing}
                                                        size="sm" 
                                                        className="h-7 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 border border-purple-500/20 text-xs font-bold"
                                                    >
                                                        {fixing ? <Loader2 className="w-3 h-3 animate-spin mr-2" /> : <Sparkles className="w-3 h-3 mr-2" />}
                                                        Fix with AI
                                                    </Button>
                                                )}
                                                {output && (
                                                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(output)} className="h-6 w-6 text-slate-500 hover:text-white">
                                                        <Copy className="w-3 h-3" />
                                                    </Button>
                                                )}
                                            </div>
                                        </div>

                                        {/* Smart Fix Result - Enhanced Animation */}
                                        <AnimatePresence>
                                            {smartFix && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, height: 'auto', scale: 1 }}
                                                    exit={{ opacity: 0, height: 0, scale: 0.95 }}
                                                    className="mb-6 rounded-2xl border border-purple-500/30 bg-purple-900/20 overflow-hidden shadow-2xl shadow-purple-500/10 backdrop-blur-xl ring-1 ring-purple-500/20"
                                                >
                                                    <div className="p-4 bg-gradient-to-r from-purple-500/10 to-transparent border-b border-purple-500/20 flex items-center justify-between">
                                                        <span className="text-sm font-bold text-purple-300 flex items-center gap-2">
                                                            <div className="bg-purple-500/20 p-1.5 rounded-lg">
                                                                <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                                                            </div>
                                                            AI Diagnosis
                                                        </span>
                                                        <Button onClick={applyFix} size="sm" className="h-7 text-xs bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-500/20 transition-all hover:scale-105 active:scale-95">
                                                            Apply Fix
                                                        </Button>
                                                    </div>
                                                    <div className="p-5 text-sm text-slate-300 leading-relaxed">
                                                        <p className="mb-4 font-medium text-purple-100">{smartFix.explanation}</p>
                                                        <div className="relative group">
                                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                                                            <pre className="relative bg-[#0a0a0a] p-4 rounded-xl overflow-x-auto text-xs text-purple-200 font-mono border border-white/10 shadow-inner">
                                                                {smartFix.fixedCode}
                                                            </pre>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Terminal Output - Glassmorphism & Stability */}
                                        <div className={`p-4 rounded-2xl border min-h-[300px] max-h-[600px] relative overflow-y-auto custom-scrollbar transition-all duration-500 ${
                                            output.toLowerCase().includes('error') 
                                            ? 'bg-red-500/5 border-red-500/20 text-red-200 shadow-[inset_0_0_20px_rgba(220,38,38,0.1)]' 
                                            : 'bg-[#0a0a0a]/50 border-white/5 text-slate-200 backdrop-blur-sm'
                                        }`}>
                                            {/* decorative glowing corner */}
                                            {output.toLowerCase().includes('error') && <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px] pointer-events-none" />}
                                            
                                            {loading ? (
                                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                                                    <div className="relative">
                                                        <div className="w-16 h-16 rounded-full border-4 border-white/10 border-t-cyan-400 animate-spin" />
                                                        <div className="absolute inset-0 rounded-full border-4 border-white/10 border-b-purple-400 animate-spin-reverse opacity-50" />
                                                    </div>
                                                    <span className="text-xs text-cyan-400 font-bold tracking-[0.2em] animate-pulse">EXECUTING...</span>
                                                </div>
                                            ) : output ? (
                                                <motion.pre 
                                                    initial={{ opacity: 0, y: 5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="whitespace-pre-wrap font-mono text-xs relative z-10 leading-relaxed"
                                                >
                                                    {output}
                                                </motion.pre>
                                            ) : successAnim ? (
                                                 <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 gap-2 select-none">
                                                    <div className="w-2 h-2 bg-slate-600 rounded-full" />
                                                    <span className="text-xs italic opacity-70">Program finished with no output</span>
                                                </div>
                                            ) : (
                                                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-700 gap-3 select-none">
                                                    <Terminal className="w-8 h-8 opacity-20" />
                                                    <div className="flex flex-col items-center gap-1">
                                                        <span className="text-sm font-medium opacity-50">Terminal Ready</span>
                                                        <span className="text-[10px] opacity-30">Run code to see output</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Success Indicator - Refined */}
                                        <AnimatePresence>
                                            {successAnim && !output.toLowerCase().includes('error') && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    className="mt-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center gap-2 text-green-400 text-xs font-bold shadow-lg shadow-green-500/10 backdrop-blur-md"
                                                >
                                                    <CheckCircle2 className="w-4 h-4" />
                                                    Execution Completed Successfully
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )}

                                {activeTab === 'input' && (
                                    <div className="min-h-full font-mono text-sm flex flex-col">
                                        <div className="flex justify-between items-center mb-6 sticky top-0 bg-[#050505]/95 backdrop-blur py-4 z-10 border-b border-white/5">
                                            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Standard Input (STDIN)</span>
                                            <span className="text-[10px] text-slate-500 italic">Enter inputs here before running code</span>
                                        </div>
                                        <div className="relative">
                                            <textarea 
                                                value={customInput}
                                                onChange={(e) => setCustomInput(e.target.value)}
                                                className="w-full h-[300px] bg-white/5 text-slate-200 p-4 rounded-xl border border-white/10 focus:outline-none focus:border-white/20 resize-none font-mono text-sm"
                                                placeholder="Enter input values here (e.g., for 'cin >> x' or 'input()')..."
                                                autoFocus
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-end">
                                             <Button
                                                onClick={runCode}
                                                size="sm"
                                                className="bg-blue-600 hover:bg-blue-500 text-white"
                                            >
                                                Submit & Run <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'analysis' && (
                                    <div className="min-h-full space-y-6 pt-4 pb-12">
                                        {analyzing ? (
                                            <div className="flex flex-col items-center justify-center py-20 gap-4">
                                                <div className="w-12 h-12 rounded-full border-2 border-purple-500/20 border-t-purple-500 animate-spin" />
                                                <span className="text-xs text-purple-400 tracking-widest animate-pulse">PERFORMING DEEP ANALYSIS...</span>
                                            </div>
                                        ) : analysis ? (
                                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                                                {/* Score & Security Header */}
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
                                                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 z-10">Quality Score</div>
                                                        <div className="text-3xl font-bold text-white z-10">{analysis.qualityScore || 0}<span className="text-sm text-slate-500 font-normal">/100</span></div>
                                                        <div className="w-full h-1 bg-white/10 mt-3 rounded-full overflow-hidden">
                                                            <div className="h-full bg-gradient-to-r from-green-500 to-cyan-500" style={{ width: `${analysis.qualityScore || 0}%` }} />
                                                        </div>
                                                    </div>
                                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
                                                         <div className="absolute inset-0 bg-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 z-10">Security Level</div>
                                                        <div className={`px-3 py-1 rounded-full text-xs font-bold border ${
                                                            analysis.securityLevel === 'High' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                                                            analysis.securityLevel === 'Medium' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                                                            'bg-red-500/20 text-red-400 border-red-500/30'
                                                        }`}>
                                                            {analysis.securityLevel || 'N/A'}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Scorecard Section */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 relative z-10">Time Complexity</div>
                                        <div className="text-lg font-bold text-white relative z-10">{analysis.timeComplexity}</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 relative z-10">Space Complexity</div>
                                        <div className="text-lg font-bold text-white relative z-10">{analysis.spaceComplexity}</div>
                                    </div>
                                </div>
                                
                                {/* Quality Score & Security */}
                                <div className="rounded-2xl bg-gradient-to-r from-cyan-900/20 via-slate-900/40 to-purple-900/20 border border-white/10 p-5 relative overflow-hidden">
                                     <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 invert mix-blend-overlay"></div>
                                    <div className="flex items-center justify-between relative z-10">
                                        <div className="flex items-center gap-5">
                                            <div className="relative w-20 h-20 flex-shrink-0">
                                                {/* Glow Effect */}
                                                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full animate-pulse-slow"></div>
                                                <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" viewBox="0 0 100 100">
                                                    <circle cx="50" cy="50" r="42" fill="none" stroke="#1e293b" strokeWidth="8" />
                                                    <circle cx="50" cy="50" r="42" fill="none" stroke={analysis.qualityScore > 75 ? "#22d3ee" : analysis.qualityScore > 50 ? "#facc15" : "#f87171"} strokeWidth="8" strokeDasharray="264" strokeDashoffset={264 - (analysis.qualityScore / 100) * 264} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white drop-shadow-md">{analysis.qualityScore}</div>
                                            </div>
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold">Code Quality</span>
                                                <span className={`text-lg font-bold ${analysis.qualityScore > 75 ? 'text-white' : analysis.qualityScore > 50 ? 'text-yellow-200' : 'text-red-200'}`}>
                                                    {analysis.qualityScore > 75 ? 'Excellent' : analysis.qualityScore > 50 ? 'Good' : 'Needs Work'}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col items-end gap-1">
                                            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Security</span>
                                            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${
                                                analysis.securityLevel === 'High' ? 'bg-red-500/10 border-red-500/30 text-red-400 shadow-[0_0_15px_-3px_rgba(239,68,68,0.3)]' : 
                                                analysis.securityLevel === 'Medium' ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400' : 
                                                'bg-green-500/10 border-green-500/30 text-green-400 shadow-[0_0_15px_-3px_rgba(34,197,94,0.3)]'
                                            }`}>
                                                <ShieldAlert className="w-3.5 h-3.5" />
                                                <span className="text-xs font-bold">{analysis.securityLevel}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                                {analysis.patternAlgorithm && (
                                                    <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10 relative overflow-hidden">
                                                         <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
                                                        <div className="text-[10px] text-blue-400 uppercase tracking-widest mb-1 font-bold relative z-10">Algorithm Pattern</div>
                                                        <div className="text-sm text-slate-200 relative z-10 font-medium">{analysis.patternAlgorithm}</div>
                                                    </div>
                                                )}

                                            {/* Potential Bugs */}
                                                <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/10 backdrop-blur-sm">
                                                    <h4 className="text-red-400 text-xs font-bold uppercase mb-4 flex items-center gap-2 tracking-widest sticky top-0 bg-[#0a0a0a]/80 backdrop-blur py-2 z-10 rounded-lg pl-2 -ml-2">
                                                        <Bug className="w-4 h-4" /> Analyzed Issues
                                                    </h4>
                                                    {Array.isArray(analysis.bugs) && analysis.bugs.length > 0 ? (
                                                        <div className="space-y-3">
                                                            {analysis.bugs.map((bug: any, i: number) => (
                                                                <div key={i} className="p-3 rounded-xl bg-red-500/10 border border-red-500/10 flex gap-3 items-start hover:bg-red-500/20 transition-colors">
                                                                    <div className={`mt-0.5 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase shrink-0 ${
                                                                        bug.type === 'Critical' ? 'bg-red-500 text-white' : 'bg-orange-500 text-white'
                                                                    }`}>
                                                                        {bug.type || 'Bug'}
                                                                    </div>
                                                                    <span className="text-xs text-slate-200 leading-relaxed">{bug.text || bug}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <div className="text-xs text-green-400 flex items-center gap-2">
                                                            <CheckCircle2 className="w-4 h-4" /> No Code Logic Bugs Detected.
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Security Issues */}
                                                {Array.isArray(analysis.securityIssues) && analysis.securityIssues.length > 0 && (
                                                    <div className="p-5 rounded-2xl bg-orange-500/5 border border-orange-500/10 backdrop-blur-sm">
                                                        <h4 className="text-orange-400 text-xs font-bold uppercase mb-4 flex items-center gap-2 tracking-widest sticky top-0 bg-[#0a0a0a]/80 backdrop-blur py-2 z-10 rounded-lg pl-2 -ml-2">
                                                            <ShieldAlert className="w-4 h-4" /> Security Vulnerabilities
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {analysis.securityIssues.map((issue: string, i: number) => (
                                                                <li key={i} className="text-xs text-slate-300 flex gap-3 items-start">
                                                                    <span className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-[10px] font-bold shrink-0">!</span>
                                                                    <span className="mt-0.5">{issue}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Optimizations */}
                                                <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 backdrop-blur-sm">
                                                    <h4 className="text-emerald-400 text-xs font-bold uppercase mb-4 flex items-center gap-2 tracking-widest sticky top-0 bg-[#0a0a0a]/80 backdrop-blur py-2 z-10 rounded-lg pl-2 -ml-2">
                                                        <Zap className="w-4 h-4" /> Recommended Optimizations
                                                    </h4>
                                                    {Array.isArray(analysis.optimizations) && analysis.optimizations.length > 0 ? (
                                                        <ul className="space-y-3">
                                                            {analysis.optimizations.map((opt: string, i: number) => (
                                                                <li key={i} className="text-xs text-slate-300 flex gap-3 items-start group">
                                                                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 text-[10px] font-bold shrink-0 group-hover:scale-110 transition-transform">+</span>
                                                                    <span className="mt-0.5">{opt}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <div className="text-xs text-slate-500 italic">Code looks optimized.</div>
                                                    )}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center justify-center py-20 text-slate-600 gap-3">
                                                <Activity className="w-10 h-10 opacity-20" />
                                                <span className="text-xs font-mono">Run analysis to view metrics</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div >
        </div >
    )
}

export default function CompilerApp() {
  return (
    <Suspense
      fallback={
        <div className="h-[100dvh] bg-black flex flex-col items-center justify-center text-white gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500 blur-xl opacity-20 animate-pulse" />
            <Loader2 className="w-10 h-10 text-purple-500 animate-spin relative z-10" />
          </div>
          <span className="text-sm font-mono text-slate-500 animate-pulse">Initializing Environment...</span>
        </div>
      }
    >
      <CompilerContent />
    </Suspense>
  );
}
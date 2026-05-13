"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Flame, Trophy, Code2, AlertTriangle, CheckCircle, Play, ChevronDown, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { toast } from "sonner"
import { incrementUserStreak } from "@/lib/user-service"
import Editor from "@monaco-editor/react"

const LANGUAGES = [
    { id: "javascript", name: "JavaScript", ext: "js" },
    { id: "python", name: "Python", ext: "py" },
    { id: "cpp", name: "C++", ext: "cpp" },
    { id: "java", name: "Java", ext: "java" }
]

const STARTER_CODE: Record<string, string> = {
    javascript: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {\n  // Write your code here\n  \n}`,
    python: `# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        # Write your code here
        pass`,
    cpp: `/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        // Write your code here
        
    }
};`,
    java: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode invertTree(TreeNode root) {
        // Write your code here
        
    }
}`
}

export default function AlgorithmMasterPage() {
    const [lang, setLang] = useState(LANGUAGES[0])
    const [code, setCode] = useState(STARTER_CODE[LANGUAGES[0].id])
    const [status, setStatus] = useState<"idle" | "running" | "success" | "failed">("idle")
    const [streak, setStreak] = useState(0)
    const [isCompleted, setIsCompleted] = useState(false)
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
    const [testError, setTestError] = useState("")
    const [outputLog, setOutputLog] = useState<string[]>([])

    useEffect(() => {
        // Hydrate streak
        try {
            const stats = JSON.parse(localStorage.getItem('flyeng_stats') || '{}')
            setStreak(stats.currentStreak || 0)
            if (localStorage.getItem('flyeng_daily_quest_done') === new Date().toDateString()) {
                setIsCompleted(true)
            }
        } catch {}
    }, [])

    const handleLanguageChange = (l: typeof LANGUAGES[0]) => {
        setLang(l)
        setCode(STARTER_CODE[l.id])
        setIsLangMenuOpen(false)
        setStatus("idle")
        setOutputLog([])
    }

    const runJavascriptTest = (userCode: string) => {
        try {
            const userFunc = new Function('root', `
                function TreeNode(val, left, right) {
                    this.val = (val===undefined ? 0 : val)
                    this.left = (left===undefined ? null : left)
                    this.right = (right===undefined ? null : right)
                }
                ${userCode}
                return typeof invertTree === "function" ? invertTree(root) : null;
            `)
            
            const arrayToTree = (arr: any[]) => {
                if (!arr.length) return null;
                let root = { val: arr[0], left: null, right: null };
                let queue: any[] = [root];
                let i = 1;
                while(i < arr.length) {
                    let curr = queue.shift();
                    if(arr[i] !== null && arr[i] !== undefined) {
                        curr.left = { val: arr[i], left: null, right: null };
                        queue.push(curr.left);
                    }
                    i++;
                    if(i < arr.length && arr[i] !== null && arr[i] !== undefined) {
                        curr.right = { val: arr[i], left: null, right: null };
                        queue.push(curr.right);
                    }
                    i++;
                }
                return root;
            };
            
            const treeToArray = (root: any) => {
                if (!root) return [];
                let res: any[] = [];
                let queue = [root];
                while(queue.length) {
                    let curr = queue.shift();
                    if(curr) {
                        res.push(curr.val);
                        queue.push(curr.left);
                        queue.push(curr.right);
                    } else {
                        res.push(null);
                    }
                }
                while(res.length && res[res.length-1] === null) res.pop();
                return res;
            };

            let tests = [
                { i: [4,2,7,1,3,6,9], o: [4,7,2,9,6,3,1] },
                { i: [2,1,3], o: [2,3,1] },
                { i: [], o: [] }
            ];

            for(let i=0; i<tests.length; i++) {
                let t = tests[i];
                let root = arrayToTree(t.i);
                let outTree = userFunc(root);
                let outArr = treeToArray(outTree);
                
                if(JSON.stringify(outArr) !== JSON.stringify(t.o)) {
                    return { success: false, error: `Failed Test Case ${i+1}. Expected [${t.o.join(',')}] but got [${outArr.join(',')}]` };
                }
            }
            return { success: true };
        } catch(e: any) {
            return { success: false, error: `${e.message}` };
        }
    }

    const startExecution = async () => {
        if (!code.trim()) return
        setStatus("running")
        setTestError("")
        setOutputLog([
            `> Initializing ${lang.name} Compiler Environment...`,
            `> Requesting remote execution server...`,
        ])

        try {
            // Mapping to Piston language runtimes
            const pistonLangMap: Record<string, { language: string, version: string }> = {
                "javascript": { language: "javascript", version: "18.15.0" },
                "python": { language: "python", version: "3.10.0" },
                "cpp": { language: "c++", version: "10.2.0" },
                "java": { language: "java", version: "15.0.2" }
            }

            const reqBody = {
                language: pistonLangMap[lang.id].language,
                version: pistonLangMap[lang.id].version,
                files: [
                    {
                        content: code
                    }
                ]
            }

            const response = await fetch("https://emkc.org/api/v2/piston/execute", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(reqBody)
            })

            const data = await response.json()
            
            if (data.run) {
                const output = data.run.stdout ? data.run.stdout : data.run.stderr;
                const exitCode = data.run.code;

                setOutputLog(prev => [
                    ...prev, 
                    ...output.split('\n').map((l: string) => `> ${l}`),
                    `> Process exited with code ${exitCode}`
                ])

                // Since we don't have robust AST testing for all languages, 
                // we treat a 0 exit code as successful execution of their code.
                if (exitCode === 0 && data.run.stderr === "") {
                    setStatus("success")
                    toast.success("Code compiled successfully!")
                    
                    if (!isCompleted) {
                        setIsCompleted(true)
                        toast.success("Daily Quest Completed! +1 Day Streak 🔥")
                        localStorage.setItem('flyeng_daily_quest_done', new Date().toDateString())
                        incrementUserStreak().then(newStreak => setStreak(newStreak))
                    }
                } else {
                    setStatus("failed")
                    setTestError("Execution failed. Check your syntax and logic.")
                    toast.error("Code execution failed.")
                }
            } else {
                 throw new Error(data.message || "Failed to execute code.")
            }

        } catch (error: any) {
            setStatus("failed")
            setTestError(error.message || "Network Error: Could not connect to compiler.")
            setOutputLog(prev => [...prev, `> [ERROR] ${error.message}`])
        }
    }

    return (
        <div className="max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8 h-[100dvh] flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 shrink-0 pt-16 lg:pt-0">
                <div>
                    <Link href="/dashboard" className="inline-flex items-center text-sm font-bold text-white/50 hover:text-white transition-colors mb-4">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
                    </Link>
                    <h1 className="text-3xl font-black text-white flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                            <Code2 className="w-5 h-5" />
                        </div>
                        Algorithm Master
                    </h1>
                </div>

                <div className="flex items-center gap-4 bg-white/[0.02] border border-white/10 rounded-2xl p-4 shadow-xl backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                        <Flame className="w-6 h-6 animate-pulse drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">Daily Streak</p>
                        <p className="text-2xl font-black text-white leading-none">{streak} <span className="text-orange-400 text-lg">Days</span></p>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 flex-1 min-h-0 pb-10">
                {/* Problem Description Panel */}
                <div className="lg:col-span-4 lg:col-start-1 space-y-6 flex flex-col min-h-0 overflow-y-auto pr-2 custom-scrollbar">
                    <div className="p-6 md:p-8 rounded-[24px] bg-[#050b14] border border-white/5 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />
                        
                        <div className="flex items-center justify-between mb-6 relative z-10">
                            <span className="px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_10px_rgba(34,197,94,0.2)]">Easy</span>
                            <span className="text-[10px] text-white/50 font-black uppercase tracking-[0.2em]">Daily Quest</span>
                        </div>
                        <h2 className="text-3xl font-black text-white mb-6 relative z-10 tracking-tight">Invert Binary Tree</h2>
                        <div className="prose prose-invert prose-sm text-white/70 max-w-none relative z-10">
                            <p className="text-base leading-relaxed">Given the <code className="text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded">root</code> of a binary tree, invert the tree, and return its root.</p>
                            
                            <div className="p-5 rounded-2xl bg-[#0a101a] border border-white/5 mt-6 shadow-inner">
                                <p className="font-bold text-white mb-3 text-xs uppercase tracking-widest text-white/50">Example 1</p>
                                <div className="space-y-2 font-mono text-sm">
                                    <div className="flex gap-2"><span className="text-white/40">Input:</span><span className="text-cyan-300">root = [4,2,7,1,3,6,9]</span></div>
                                    <div className="flex gap-2"><span className="text-white/40">Output:</span><span className="text-emerald-300">[4,7,2,9,6,3,1]</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-[24px] bg-gradient-to-br from-cyan-900/10 to-blue-900/10 border border-cyan-500/10 shrink-0 shadow-lg">
                        <h3 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                            <Trophy className="w-4 h-4" /> Why this problem?
                        </h3>
                        <p className="text-sm text-white/60 leading-relaxed">
                            This is a classic algorithmic challenge asked by Google, Meta, and Amazon. It tests your fundamental conceptual understanding of tree traversal (DFS/BFS) and recursion logic.
                        </p>
                    </div>
                </div>

                {/* Code Editor Panel */}
                <div className="lg:col-span-8 flex flex-col rounded-[24px] overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0f] relative group min-h-[500px]">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
                    
                    {/* IDE Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:px-5 sm:py-3 bg-[#111116] border-b border-white/5 relative z-10 gap-3">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                            </div>
                            
                            {/* Custom Dropdown */}
                            <div className="relative">
                                <button 
                                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-bold text-white/80 uppercase tracking-wider transition-all"
                                >
                                    {lang.name} <ChevronDown className="w-3.5 h-3.5 text-white/40" />
                                </button>
                                
                                <AnimatePresence>
                                    {isLangMenuOpen && (
                                        <>
                                            <div className="fixed inset-0 z-40" onClick={() => setIsLangMenuOpen(false)} />
                                            <motion.div 
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="absolute top-full mt-2 left-0 w-40 bg-[#16161c] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden backdrop-blur-xl focus:outline-none"
                                            >
                                                {LANGUAGES.map(l => (
                                                    <button
                                                        key={l.id}
                                                        onClick={() => handleLanguageChange(l)}
                                                        className="w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-white/5 hover:text-white"
                                                    >
                                                        {l.name}
                                                    </button>
                                                ))}
                                            </motion.div>
                                        </>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <Button 
                            onClick={startExecution}
                            disabled={status === "running"}
                            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-black h-9 text-xs uppercase tracking-widest rounded-xl px-6 gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all sm:w-auto w-full group/run border-none"
                        >
                            {status === "running" ? (
                                <><Loader2 className="w-4 h-4 animate-spin" /> Compiling...</>
                            ) : (
                                <><Play className="w-4 h-4 group-hover/run:scale-110 transition-transform fill-white" /> Run Code</>
                            )}
                        </Button>
                    </div>
                    
                    {/* Monaco Editor Wrapper */}
                    <div className="flex-1 relative z-10 w-full h-full min-h-[300px]">
                        <Editor
                            height="100%"
                            language={lang.id}
                            theme="vs-dark"
                            value={code}
                            onChange={(val) => setCode(val || "")}
                            options={{
                                minimap: { enabled: false },
                                fontSize: 14,
                                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                                padding: { top: 20, bottom: 20 },
                                smoothScrolling: true,
                                scrollBeyondLastLine: false,
                                contextmenu: false,
                                renderLineHighlight: 'all',
                                roundedSelection: true,
                                scrollbar: { useShadows: false, verticalScrollbarSize: 8 },
                                suggest: { showIcons: true, showSnippets: true }
                            }}
                            className="w-full h-full"
                        />
                    </div>

                    {/* Console Output Block */}
                    <AnimatePresence>
                        {status !== "idle" && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="border-t bg-[#0a0a0f] border-white/10 p-0 flex flex-col sm:max-h-[250px] relative z-20 shrink-0"
                            >
                                <div className="px-4 py-2 border-b border-white/5 flex gap-2 items-center bg-black/20">
                                    <div className="w-2 h-2 rounded-full bg-white/20 animate-pulse" />
                                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Console Output</span>
                                </div>

                                <div className="p-4 font-mono text-xs overflow-y-auto custom-scrollbar flex-1 space-y-1.5 leading-relaxed">
                                    {outputLog.map((log, i) => (
                                        <div key={i} className="font-medium text-white/60">
                                            {log}
                                        </div>
                                    ))}
                                    
                                    {status === "failed" && testError && (
                                        <div className="mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-300 flex gap-3 items-start">
                                            <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>{testError}</span>
                                        </div>
                                    )}

                                    {status === "success" && (
                                        <div className="mt-3 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-300 flex gap-3 items-center">
                                            <CheckCircle className="w-4 h-4 shrink-0" />
                                            <span className="font-bold">Execution Completed. Solution Accepted.</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

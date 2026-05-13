import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, AlertTriangle, Download, RotateCcw } from 'lucide-react';
// import Confetti from 'react-confetti';
import { saveInterviewResult } from "@/lib/interview-service";
import { toast } from "sonner";
import { useAuth } from "@/context/auth-context";

interface ResultDashboardProps {
    data: any;
    onRestart: () => void;
}

export const ResultDashboard = ({ data, onRestart }: ResultDashboardProps) => {
    const { user } = useAuth();
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const finalize = async () => {
            try {
                // Calculate technical scores from history
                const technicalScores = data.history
                    .filter((h: any) => h.role === 'candidate' && h.feedback)
                    .map((h: any) => h.feedback.scoringBreakdown);

                const totalScore = technicalScores.reduce((acc: number, curr: any) => {
                    // Average of all breakdown scores
                    const vals = Object.values(curr || {}) as any[];
                    if (vals.length === 0) return acc;
                    const avg = vals.reduce((a: number, b: any) => a + (b.score || 0), 0) / vals.length;
                    return acc + avg;
                }, 0) / (technicalScores.length || 1);

                const res = await fetch('/api/interview/finalize', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        candidateName: "User", // Fetch real name if available
                        role: data.config.role,
                        totalScore: totalScore.toFixed(1),
                        rounds: data.history,
                        technicalScores,
                        proctoringData: { violations: data.violations }
                    })
                });
                const json = await res.json();
                setResult(json);

                // Save to Firestore
                const saved = await saveInterviewResult({
                    ...json,
                    rounds: data.history,
                    role: data.config.role,
                    level: data.config.level,
                    userId: user?.id || "anonymous_user" // Replace with actual user ID if auth is fully implemented
                });

                if (saved) {
                    toast.success("Interview result saved successfully!");
                } else {
                    toast.error("Failed to save result to cloud.");
                }
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        finalize();
    }, [data]);

    if (loading) return (
        <div className="flex-1 flex items-center justify-center text-white">
            <div className="text-center animate-pulse">
                <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-6" />
                <h2 className="text-2xl font-bold">Generating Hiring Decision...</h2>
                <p className="text-zinc-400">Analyzing compatibility, technical depth, and cultural fit.</p>
            </div>
        </div>
    );

    if (!result) return <div>Error loading results.</div>;

    const isHired = result.recommendedDecision === 'HIRE';

    return (
        <div className="flex-1 overflow-y-auto p-8 relative">
            {/* isHired && <Confetti numberOfPieces={200} recycle={false} /> */}

            <div className="max-w-5xl mx-auto space-y-8">
                {/* Header Verdict */}
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center mb-12">
                    <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border mb-6 ${isHired ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}>
                        {isHired ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                        <span className="text-xl font-bold tracking-widest uppercase">{result.recommendedDecision.replace('_', ' ')}</span>
                    </div>
                    <h1 className="text-5xl font-bold text-white mb-4">Interview Complete</h1>
                    <p className="text-xl text-zinc-400">Overall Score: <span className="text-white font-bold">{result.overallScore}/10</span></p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Key Findings */}
                    <Card className="bg-zinc-900/50 border-zinc-800 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-white mb-6">Key Findings</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">Confidence Match</h4>
                                <div className="text-3xl font-bold text-white">{(result.confidence * 100).toFixed(0)}%</div>
                                <div className="w-full h-2 bg-zinc-800 rounded-full mt-2 overflow-hidden">
                                    <div className="h-full bg-indigo-500" style={{ width: `${result.confidence * 100}%` }} />
                                </div>
                            </div>

                            {result.reasoning.redFlags && (
                                <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                                    <h4 className="flex items-center gap-2 text-red-400 font-bold mb-2"><AlertTriangle className="w-4 h-4" /> Red Flags</h4>
                                    <p className="text-sm text-zinc-300">{result.reasoning.redFlags}</p>
                                </div>
                            )}

                            <div>
                                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">Summary</h4>
                                <p className="text-zinc-300 leading-relaxed text-sm">{result.reasoning.technical} {result.reasoning.communication}</p>
                            </div>
                        </div>
                    </Card>

                    {/* Recommendations */}
                    <Card className="bg-zinc-900/50 border-zinc-800 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-white mb-6">Recommendations</h3>
                        <div className="space-y-4">
                            <div className="bg-black/20 p-4 rounded-lg">
                                <span className="block text-xs text-zinc-500 uppercase mb-1">If Hired</span>
                                <p className="text-sm text-zinc-300">{result.recommendations.ifHired}</p>
                            </div>
                            <div className="bg-black/20 p-4 rounded-lg">
                                <span className="block text-xs text-zinc-500 uppercase mb-1">Salary Range</span>
                                <p className="text-sm text-green-400 font-mono">{result.startingSalaryRecommendation || "Not specified"}</p>
                            </div>
                            <div className="bg-black/20 p-4 rounded-lg">
                                <span className="block text-xs text-zinc-500 uppercase mb-1">Role Match</span>
                                <p className="text-sm text-zinc-300">{result.recommendations.roleMatch}</p>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="flex justify-center gap-4 pt-10">
                    <Button onClick={onRestart} className="bg-white text-black hover:bg-zinc-200 px-8 py-6 rounded-xl flex items-center gap-2">
                        <RotateCcw className="w-4 h-4" /> Start New Session
                    </Button>
                    <Button variant="outline" className="border-white/10 text-white px-8 py-6 rounded-xl flex items-center gap-2 hover:bg-white/5">
                        <Download className="w-4 h-4" /> Download Report
                    </Button>
                </div>
            </div>
        </div>
    );
};

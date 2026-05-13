"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import {
    TrendingUp, MessageCircle, Clock, BarChart3,
    CheckCircle2, AlertTriangle, Target, Zap, ArrowLeft,
    ChevronDown, ChevronUp, Brain, Mic2, Sparkles, Save, CheckCircle,
    Loader2, Star, Activity, Hash, Gauge, Languages, Lightbulb
} from 'lucide-react';
import { cn } from "@/lib/utils";

interface CandidateReportProps {
  score: number;
  results: any[];
  role: string;
  interviewType?: string;
  persona?: string;
  sessionDuration?: number;
  allTranscripts?: string[];
  onSave?: () => Promise<boolean>;
}

const JARGON_WORDS = [
  "refactor",
  "microservices",
  "kubernetes",
  "docker",
  "ci/cd",
  "devops",
  "agile",
  "scrum",
  "sprint",
  "scalable",
  "distributed",
  "api",
  "rest",
  "graphql",
  "oauth",
  "jwt",
  "caching",
  "redis",
  "kafka",
  "rabbitmq",
  "sql",
  "nosql",
  "mongodb",
  "postgresql",
  "sharding",
  "indexing",
  "load balancer",
  "cdn",
  "latency",
  "throughput",
  "idempotent",
  "polymorphism",
  "abstraction",
  "encapsulation",
  "inheritance",
  "solid",
  "dry",
  "kiss",
  "mvp",
  "poc",
  "tdd",
  "bdd",
  "big-o",
  "complexity",
  "recursion",
  "dynamic programming",
  "memoization",
  "b-tree",
  "hash map",
  "linked list",
  "queue",
  "stack",
  "heap",
  "tree",
  "graph",
  "binary search",
  "machine learning",
  "neural network",
  "llm",
  "transformer",
  "embeddings",
  "vector database",
];

const FILLER_REGEX =
  /\b(um|uh|like|you know|basically|actually|literally|right|so yeah|kind of|sort of|i mean|you see)\b/gi;

export function CandidateReport({
  score,
  results,
  role,
  interviewType = "Technical",
  persona = "alex",
  sessionDuration = 0,
  allTranscripts = [],
  onSave,
}: CandidateReportProps) {
  const router = useRouter();
  const [expandedRound, setExpandedRound] = useState<number | null>(null);
  const [saveState, setSaveState] = useState<
    "idle" | "saving" | "saved" | "error"
  >("idle");
  const [activeTab, setActiveTab] = useState<
    "overview" | "questions" | "communication"
  >("overview");

  // --- Core Analytics ---
  const realResults = results.filter((r) => r.round > 0);
  const totalQuestions = realResults.length;
  const totalWords = realResults.reduce(
    (sum, r) => sum + (r.wordCount || 0),
    0,
  );
  const totalFillers = realResults.reduce(
    (sum, r) => sum + (r.fillerWords || 0),
    0,
  );
  const avgWordsPerQuestion =
    totalQuestions > 0 ? Math.round(totalWords / totalQuestions) : 0;
  const fillerRate =
    totalWords > 0 ? ((totalFillers / totalWords) * 100).toFixed(1) : "0";

  // Scores
  const scores = realResults.map((r) => {
    if (typeof r.roundScore === "number" && r.roundScore >= 0)
      return r.roundScore;
    return Math.min(100, Math.round((r.confidenceScore || 5) * 10));
  });

  // Filler word breakdown
  const fillerWordMap = useMemo(() => {
    const map: Record<string, number> = {};
    allTranscripts.forEach((t) => {
      const matches = t.match(FILLER_REGEX) || [];
      matches.forEach((m) => {
        const k = m.toLowerCase();
        map[k] = (map[k] || 0) + 1;
      });
    });
    return map;
  }, [allTranscripts]);

  // Jargon analysis
  const jargonMap = useMemo(() => {
    const map: Record<string, number> = {};
    const allText = allTranscripts.join(" ").toLowerCase();
    JARGON_WORDS.forEach((term) => {
      const regex = new RegExp(`\\b${term.replace(/[-+]/g, "\\$&")}\\b`, "gi");
      const count = (allText.match(regex) || []).length;
      if (count > 0) map[term] = count;
    });
    return map;
  }, [allTranscripts]);

  const jargonCount = Object.keys(jargonMap).length;
  const jargonUsage =
    jargonCount >= 8
      ? "Expert"
      : jargonCount >= 5
        ? "Good"
        : jargonCount >= 3
          ? "Moderate"
          : "Low";

  const allStrengths = realResults
    .flatMap((r) => r.strengths || [])
    .filter(Boolean);
  const allImprovements = realResults
    .flatMap((r) => r.areasForImprovement || [])
    .filter(Boolean);
  const uniqueStrengths = [...new Set(allStrengths)].slice(0, 5);
  const uniqueImprovements = [...new Set(allImprovements)].slice(0, 5);

  const highScores = scores.filter((s) => s >= 70).length;
  const midScores = scores.filter((s) => s >= 40 && s < 70).length;
  const lowScores = scores.filter((s) => s < 40).length;

  const avgConfidenceScoreRaw = realResults.reduce(
    (sum, r) => sum + (r.conceptClarity || r.confidenceScore || 5),
    0,
  );
  const avgConceptClarity =
    totalQuestions > 0
      ? Math.round((avgConfidenceScoreRaw / totalQuestions) * 10)
      : 50;

  const getRecommendation = () => {
    if (score >= 85)
      return {
        label: "Strong Hire",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10 border-emerald-500/30",
        icon: "🏆",
        detail: "Exceptional performance across all dimensions.",
      };
    if (score >= 70)
      return {
        label: "Hire",
        color: "text-green-400",
        bg: "bg-green-500/10 border-green-500/30",
        icon: "✅",
        detail: "Strong candidate with minor areas for growth.",
      };
    if (score >= 50)
      return {
        label: "Lean Hire",
        color: "text-yellow-400",
        bg: "bg-yellow-500/10 border-yellow-500/30",
        icon: "🤔",
        detail: "Some potential but needs more preparation.",
      };
    return {
      label: "Needs Practice",
      color: "text-red-400",
      bg: "bg-red-500/10 border-red-500/30",
      icon: "📚",
      detail: "Focus on fundamentals and structured responses.",
    };
  };

  const recommendation = getRecommendation();
  const formatTime = (sec: number) => `${Math.floor(sec / 60)}m ${sec % 60}s`;

  const getBestQuestion = () => {
    if (scores.length === 0) return null;
    const maxScore = Math.max(...scores);
    const idx = scores.indexOf(maxScore);
    return { question: realResults[idx]?.question, score: maxScore, idx };
  };

  const getWeakestQuestion = () => {
    if (scores.length === 0) return null;
    const minScore = Math.min(...scores);
    const idx = scores.indexOf(minScore);
    return { question: realResults[idx]?.question, score: minScore, idx };
  };

  const scoreTrend =
    scores.length > 1
      ? scores[scores.length - 1] > scores[0]
        ? "improving"
        : scores[scores.length - 1] < scores[0]
          ? "declining"
          : "steady"
      : "steady";

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: <BarChart3 className="w-3.5 h-3.5" />,
    },
    {
      id: "questions",
      label: "Questions",
      icon: <Brain className="w-3.5 h-3.5" />,
    },
    {
      id: "communication",
      label: "Communication",
      icon: <Mic2 className="w-3.5 h-3.5" />,
    },
  ] as const;

  return (
    <div className="min-h-screen bg-[#080812] text-white font-sans">
      {/* Ambient background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start justify-between"
        >
          <button
            onClick={() => router.push("/interview/config")}
            className="p-2 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white/60" />
          </button>
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
              Performance Report
            </h1>
            <p className="text-white/40 text-sm mt-1">
              {role} • {interviewType}{" "}
              {sessionDuration > 0 && `• ${formatTime(sessionDuration)}`}
            </p>
          </div>
          <div className="w-9" /> {/* Spacer */}
        </motion.div>

        {/* Hero Score Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="relative bg-gradient-to-br from-white/8 to-white/3 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl overflow-hidden"
        >
          {/* Glow */}
          <div
            className={cn(
              "absolute inset-0 opacity-20 rounded-3xl",
              score >= 70
                ? "bg-gradient-to-br from-emerald-500/30 to-transparent"
                : score >= 50
                  ? "bg-gradient-to-br from-amber-500/30 to-transparent"
                  : "bg-gradient-to-br from-red-500/30 to-transparent",
            )}
          />

          <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Score Ring */}
            <div className="relative w-40 h-40 shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={
                    score >= 70
                      ? "#10b981"
                      : score >= 50
                        ? "#f59e0b"
                        : "#ef4444"
                  }
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0 251" }}
                  animate={{ strokeDasharray: `${score * 2.51} 251` }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-5xl font-black"
                >
                  {score}
                </motion.span>
                <span className="text-white/40 text-xs uppercase tracking-wider">
                  / 100
                </span>
              </div>
            </div>

            <div className="flex-1 space-y-4 text-center md:text-left">
              <div>
                <div
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-bold mb-2",
                    recommendation.bg,
                  )}
                >
                  <span>{recommendation.icon}</span>
                  <span className={recommendation.color}>
                    {recommendation.label}
                  </span>
                </div>
                <p className="text-white/50 text-sm">{recommendation.detail}</p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    label: "Questions",
                    value: totalQuestions,
                    icon: <Target className="w-4 h-4" />,
                    color: "cyan",
                  },
                  {
                    label: "Duration",
                    value:
                      sessionDuration > 0 ? formatTime(sessionDuration) : "N/A",
                    icon: <Clock className="w-4 h-4" />,
                    color: "purple",
                  },
                  {
                    label: "Trend",
                    value:
                      scoreTrend === "improving"
                        ? "↑ Up"
                        : scoreTrend === "declining"
                          ? "↓ Down"
                          : "→ Flat",
                    icon: <TrendingUp className="w-4 h-4" />,
                    color:
                      scoreTrend === "improving"
                        ? "emerald"
                        : scoreTrend === "declining"
                          ? "red"
                          : "amber",
                  },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-2xl p-3 border border-white/8"
                  >
                    <div className={`text-${m.color}-400 mb-1`}>{m.icon}</div>
                    <p className="text-base font-bold">{m.value}</p>
                    <p className="text-[10px] text-white/30 uppercase tracking-wider">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-1 bg-white/5 p-1 rounded-2xl border border-white/8"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all",
                activeTab === tab.id
                  ? "bg-white text-black shadow-lg"
                  : "text-white/40 hover:text-white/70",
              )}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {/* OVERVIEW TAB */}
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {/* 4 Key Metric Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  {
                    label: "Avg Words/Q",
                    value: avgWordsPerQuestion,
                    icon: <MessageCircle className="w-4 h-4" />,
                    color: "text-violet-400",
                    sub: "Ideal: 80–150 words",
                  },
                  {
                    label: "Filler Rate",
                    value: `${fillerRate}%`,
                    icon: <Mic2 className="w-4 h-4" />,
                    color:
                      parseFloat(fillerRate) > 5
                        ? "text-red-400"
                        : "text-green-400",
                    sub:
                      parseFloat(fillerRate) > 5
                        ? "Too high — practice pausing"
                        : "Great control",
                  },
                  {
                    label: "Jargon Use",
                    value: jargonUsage,
                    icon: <Languages className="w-4 h-4" />,
                    color:
                      jargonCount >= 5 ? "text-emerald-400" : "text-amber-400",
                    sub: `${jargonCount} technical terms`,
                  },
                  {
                    label: "Concept Clarity",
                    value: `${avgConceptClarity}%`,
                    icon: <Brain className="w-4 h-4" />,
                    color:
                      avgConceptClarity >= 70
                        ? "text-emerald-400"
                        : "text-amber-400",
                    sub: "Across all answers",
                  },
                ].map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md hover:bg-white/8 transition-colors"
                  >
                    <div className={cn("mb-2", m.color)}>{m.icon}</div>
                    <p className="text-xl font-bold text-white">{m.value}</p>
                    <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold mt-0.5">
                      {m.label}
                    </p>
                    <p className="text-[10px] text-white/30 mt-1">{m.sub}</p>
                  </motion.div>
                ))}
              </div>

              {/* Score Distribution Chart */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
                <h3 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4 flex items-center gap-2">
                  <BarChart3 className="w-3.5 h-3.5 text-blue-400" /> Score
                  Distribution
                </h3>
                <div className="flex items-end gap-2 h-28">
                  {scores.map((s, i) => (
                    <div
                      key={i}
                      className="flex-1 flex flex-col items-center gap-1.5"
                    >
                      <span className="text-[9px] text-white/40 font-mono">
                        {s}
                      </span>
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${s}%` }}
                        transition={{
                          delay: 0.3 + i * 0.1,
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                        className={cn(
                          "w-full rounded-t-xl min-h-[4px]",
                          s >= 70
                            ? "bg-gradient-to-t from-emerald-600 to-emerald-400"
                            : s >= 40
                              ? "bg-gradient-to-t from-amber-600 to-amber-400"
                              : "bg-gradient-to-t from-red-600 to-red-400",
                        )}
                      />
                      <span className="text-[9px] text-white/30 font-mono">
                        Q{i + 1}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-3 text-[10px] text-white/30 font-mono">
                  <span className="text-emerald-400">Strong: {highScores}</span>
                  <span className="text-amber-400">Average: {midScores}</span>
                  <span className="text-red-400">Weak: {lowScores}</span>
                </div>
              </div>

              {/* Best / Worst Question */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {getBestQuestion() && (
                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        Best Answer — Q{getBestQuestion()!.idx + 1} (
                        {getBestQuestion()!.score}/100)
                      </span>
                    </div>
                    <p className="text-sm text-white/70 line-clamp-2">
                      {getBestQuestion()!.question}
                    </p>
                  </div>
                )}
                {getWeakestQuestion() && scores.length > 1 && (
                  <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-red-400">
                        Weakest Answer — Q{getWeakestQuestion()!.idx + 1} (
                        {getWeakestQuestion()!.score}/100)
                      </span>
                    </div>
                    <p className="text-sm text-white/70 line-clamp-2">
                      {getWeakestQuestion()!.question}
                    </p>
                  </div>
                )}
              </div>

              {/* Strengths & Improvements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white/5 border border-emerald-500/20 rounded-2xl p-5">
                  <h3 className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-3 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5" /> Strengths
                  </h3>
                  <ul className="space-y-2">
                    {uniqueStrengths.length > 0 ? (
                      uniqueStrengths.map((s, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-white/70"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          {s}
                        </li>
                      ))
                    ) : (
                      <li className="text-sm text-white/30 italic">
                        Complete more questions to generate insights.
                      </li>
                    )}
                  </ul>
                </div>
                <div className="bg-white/5 border border-amber-500/20 rounded-2xl p-5">
                  <h3 className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5" /> Areas to Improve
                  </h3>
                  <ul className="space-y-2">
                    {uniqueImprovements.length > 0 ? (
                      uniqueImprovements.map((s, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-white/70"
                        >
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          {s}
                        </li>
                      ))
                    ) : (
                      <li className="text-sm text-white/30 italic">
                        No major issues detected. Keep going!
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Action Items */}
              <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border border-indigo-500/20 rounded-2xl p-5">
                <h3 className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-3.5 h-3.5" /> Personalized Action Plan
                </h3>
                <div className="space-y-2">
                  {parseFloat(fillerRate) > 5 && (
                    <div className="flex items-start gap-3 text-sm text-white/70">
                      <span className="w-5 h-5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        1
                      </span>
                      <span>
                        Practice using deliberate pauses instead of "
                        {Object.keys(fillerWordMap)[0] || "um"}". Record
                        yourself and replay.
                      </span>
                    </div>
                  )}
                  {jargonCount < 3 && (
                    <div className="flex items-start gap-3 text-sm text-white/70">
                      <span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        2
                      </span>
                      <span>
                        Increase technical vocabulary. Use domain-specific terms
                        like "idempotent", "event-driven", "CAP theorem" where
                        appropriate.
                      </span>
                    </div>
                  )}
                  {avgWordsPerQuestion < 60 && (
                    <div className="flex items-start gap-3 text-sm text-white/70">
                      <span className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        3
                      </span>
                      <span>
                        Elaborate more on answers. Aim for the STAR method —
                        Situation, Task, Action, Result — to hit 100+ words per
                        answer.
                      </span>
                    </div>
                  )}
                  {lowScores > 0 && (
                    <div className="flex items-start gap-3 text-sm text-white/70">
                      <span className="w-5 h-5 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        4
                      </span>
                      <span>
                        Revisit your weak questions (marked in red). Prepare
                        structured answers using frameworks like STAR or Feynman
                        technique.
                      </span>
                    </div>
                  )}
                  {score >= 70 && (
                    <div className="flex items-start gap-3 text-sm text-white/70">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>
                        Excellent overall! Level up: attempt harder rounds
                        (System Design, Expert difficulty) to sharpen your edge.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* QUESTIONS TAB */}
          {activeTab === "questions" && (
            <motion.div
              key="questions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3"
            >
              {realResults.map((r, idx) => {
                const qScore =
                  typeof r.roundScore === "number" && r.roundScore >= 0
                    ? r.roundScore
                    : Math.min(100, Math.round((r.confidenceScore || 5) * 10));
                const isExpanded = expandedRound === idx;
                const qFillerCount =
                  (r.answer || "").match(FILLER_REGEX)?.length || 0;
                const qJargon = JARGON_WORDS.filter((j) =>
                  (r.answer || "").toLowerCase().includes(j),
                ).slice(0, 4);

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md"
                  >
                    <button
                      onClick={() => setExpandedRound(isExpanded ? null : idx)}
                      className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Score badge */}
                        <div
                          className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0",
                            qScore >= 70
                              ? "bg-emerald-500/20 text-emerald-400"
                              : qScore >= 40
                                ? "bg-amber-500/20 text-amber-400"
                                : "bg-red-500/20 text-red-400",
                          )}
                        >
                          {qScore}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-white/80 truncate">
                            Q{idx + 1}: {r.question}
                          </p>
                          <div className="flex items-center gap-3 mt-0.5">
                            <span className="text-[10px] text-white/30">
                              {r.wordCount || 0} words
                            </span>
                            <span className="text-[10px] text-white/30">•</span>
                            <span
                              className={cn(
                                "text-[10px]",
                                qFillerCount > 3
                                  ? "text-red-400"
                                  : "text-white/30",
                              )}
                            >
                              {qFillerCount} fillers
                            </span>
                            {qJargon.length > 0 && (
                              <>
                                <span className="text-[10px] text-white/30">
                                  •
                                </span>
                                <span className="text-[10px] text-emerald-400">
                                  {qJargon.length} tech terms
                                </span>
                              </>
                            )}
                            {r.communicationStyle && (
                              <>
                                <span className="text-[10px] text-white/30">
                                  •
                                </span>
                                <span className="text-[10px] text-violet-400">
                                  {r.communicationStyle}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-white/30 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-white/30 shrink-0" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="border-t border-white/5 overflow-hidden"
                        >
                          <div className="p-4 space-y-4">
                            {/* Your Answer */}
                            <div>
                              <p className="text-[10px] uppercase tracking-wider text-white/30 font-bold mb-1.5">
                                Your Answer
                              </p>
                              <p className="text-sm text-white/60 bg-black/20 p-3 rounded-xl leading-relaxed">
                                {r.answer || "No transcript available."}
                              </p>
                            </div>

                            {/* Tag row */}
                            {qJargon.length > 0 && (
                              <div>
                                <p className="text-[10px] uppercase tracking-wider text-white/30 font-bold mb-1.5">
                                  Technical terms used
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                  {qJargon.map((j) => (
                                    <span
                                      key={j}
                                      className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-mono"
                                    >
                                      {j}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Assessment */}
                            {r.overallAssessment && (
                              <div>
                                <p className="text-[10px] uppercase tracking-wider text-white/30 font-bold mb-1.5">
                                  Interviewer Assessment
                                </p>
                                <p className="text-sm text-white/70 italic">
                                  &ldquo;{r.overallAssessment}&rdquo;
                                </p>
                              </div>
                            )}

                            {/* Scoring Breakdown */}
                            {r.scoringBreakdown && (
                              <div>
                                <p className="text-[10px] uppercase tracking-wider text-white/30 font-bold mb-2">
                                  Scoring Breakdown
                                </p>
                                <div className="grid grid-cols-2 gap-2">
                                  {Object.entries(r.scoringBreakdown).map(
                                    ([key, val]: any) => (
                                      <div
                                        key={key}
                                        className="bg-white/5 rounded-xl p-3 border border-white/8"
                                      >
                                        <div className="flex justify-between items-center mb-1.5">
                                          <span className="text-[9px] uppercase tracking-wider text-white/40 font-bold capitalize">
                                            {key}
                                          </span>
                                          <div className="flex items-center gap-1">
                                            <div className="w-16 h-1 rounded-full bg-white/10 overflow-hidden">
                                              <motion.div
                                                initial={{ width: 0 }}
                                                animate={{
                                                  width: `${(val.score / 10) * 100}%`,
                                                }}
                                                transition={{ duration: 0.6 }}
                                                className={cn(
                                                  "h-full rounded-full",
                                                  val.score >= 7
                                                    ? "bg-emerald-400"
                                                    : val.score >= 5
                                                      ? "bg-amber-400"
                                                      : "bg-red-400",
                                                )}
                                              />
                                            </div>
                                            <span
                                              className={cn(
                                                "text-xs font-bold",
                                                val.score >= 7
                                                  ? "text-emerald-400"
                                                  : val.score >= 5
                                                    ? "text-amber-400"
                                                    : "text-red-400",
                                              )}
                                            >
                                              {val.score}/10
                                            </span>
                                          </div>
                                        </div>
                                        <p className="text-[10px] text-white/40 leading-relaxed">
                                          {val.feedback}
                                        </p>
                                      </div>
                                    ),
                                  )}
                                </div>
                              </div>
                            )}

                            {/* Alternative Approach */}
                            {r.alternativeApproach && (
                              <div className="p-3 rounded-xl bg-blue-500/8 border border-blue-500/20">
                                <p className="text-[10px] uppercase tracking-wider text-blue-400 font-bold mb-1 flex items-center gap-1.5">
                                  <Lightbulb className="w-3 h-3" /> Better
                                  Approach
                                </p>
                                <p className="text-xs text-white/60 leading-relaxed">
                                  {r.alternativeApproach}
                                </p>
                              </div>
                            )}

                            {/* Key Takeaway */}
                            {r.keyTakeaway && (
                              <div className="p-3 rounded-xl bg-purple-500/8 border border-purple-500/20">
                                <p className="text-xs text-purple-200/70 flex items-start gap-2">
                                  <Sparkles className="w-3 h-3 mt-0.5 shrink-0 text-purple-400" />
                                  {r.keyTakeaway}
                                </p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* COMMUNICATION TAB */}
          {activeTab === "communication" && (
            <motion.div
              key="communication"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {/* Communication Score Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  {
                    title: "Verbal Fluency",
                    score: Math.max(0, 100 - parseFloat(fillerRate) * 10),
                    desc: `${totalFillers} filler words across ${totalQuestions} answers`,
                    color:
                      parseFloat(fillerRate) < 3
                        ? "emerald"
                        : parseFloat(fillerRate) < 7
                          ? "amber"
                          : "red",
                    icon: <Mic2 className="w-5 h-5" />,
                  },
                  {
                    title: "Technical Depth",
                    score: Math.min(100, jargonCount * 10),
                    desc: `${jargonCount} domain-specific terms used`,
                    color:
                      jargonCount >= 8
                        ? "emerald"
                        : jargonCount >= 4
                          ? "amber"
                          : "red",
                    icon: <Hash className="w-5 h-5" />,
                  },
                  {
                    title: "Response Quality",
                    score: Math.min(
                      100,
                      Math.round((avgWordsPerQuestion / 120) * 100),
                    ),
                    desc: `Avg ${avgWordsPerQuestion} words per answer`,
                    color:
                      avgWordsPerQuestion >= 80
                        ? "emerald"
                        : avgWordsPerQuestion >= 50
                          ? "amber"
                          : "red",
                    icon: <Activity className="w-5 h-5" />,
                  },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5"
                  >
                    <div className={`text-${m.color}-400 mb-3`}>{m.icon}</div>
                    <p className="font-bold text-white mb-1">{m.title}</p>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${m.score}%` }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: i * 0.1,
                        }}
                        className={`h-full rounded-full bg-${m.color}-400`}
                      />
                    </div>
                    <div className="flex justify-between">
                      <p className="text-xs text-white/40">{m.desc}</p>
                      <p className={`text-xs font-bold text-${m.color}-400`}>
                        {m.score}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Filler Word Analysis */}
              {Object.keys(fillerWordMap).length > 0 ? (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4 flex items-center gap-2">
                    <Mic2 className="w-3.5 h-3.5 text-orange-400" /> Filler
                    Words Breakdown
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {Object.entries(fillerWordMap)
                      .sort((a, b) => b[1] - a[1])
                      .map(([word, count]) => (
                        <div
                          key={word}
                          className={cn(
                            "px-3 py-1.5 rounded-full text-xs font-mono border flex items-center gap-2",
                            count > 5
                              ? "bg-red-500/10 border-red-500/20 text-red-400"
                              : count > 2
                                ? "bg-amber-500/10 border-amber-500/20 text-amber-400"
                                : "bg-white/5 border-white/10 text-white/60",
                          )}
                        >
                          <span className="font-bold">
                            &ldquo;{word}&rdquo;
                          </span>
                          <span className="text-[10px] opacity-70">
                            ×{count}
                          </span>
                        </div>
                      ))}
                  </div>
                  <p className="text-xs text-white/40">
                    💡 Tip: Replace filler words with a 1-second silent pause.
                    It sounds more confident and gives you thinking time.
                  </p>
                </div>
              ) : (
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-5 text-center">
                  <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <p className="font-bold text-emerald-400">
                    Excellent verbal control!
                  </p>
                  <p className="text-sm text-white/40 mt-1">
                    No significant filler words detected in your answers.
                  </p>
                </div>
              )}

              {/* Jargon / Tech Vocabulary */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4 flex items-center gap-2">
                  <Languages className="w-3.5 h-3.5 text-emerald-400" />{" "}
                  Technical Vocabulary Used
                </h3>
                {Object.keys(jargonMap).length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(jargonMap)
                      .sort((a, b) => b[1] - a[1])
                      .map(([term, count]) => (
                        <div
                          key={term}
                          className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-mono flex items-center gap-1.5"
                        >
                          <span>{term}</span>
                          {count > 1 && (
                            <span className="text-[9px] opacity-60">
                              ×{count}
                            </span>
                          )}
                        </div>
                      ))}
                  </div>
                ) : (
                  <p className="text-sm text-white/40">
                    No technical jargon detected. Try incorporating
                    domain-specific terminology to demonstrate expertise.
                  </p>
                )}
              </div>

              {/* Confidence Trend */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4 flex items-center gap-2">
                  <Gauge className="w-3.5 h-3.5 text-violet-400" /> Confidence
                  Trend (per question)
                </h3>
                <div className="flex items-end gap-3 h-20">
                  {realResults.map((r, i) => {
                    const conf = Math.min(
                      100,
                      (r.conceptClarity || r.confidenceScore || 5) * 10,
                    );
                    return (
                      <div
                        key={i}
                        className="flex-1 flex flex-col items-center gap-1"
                      >
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${conf}%` }}
                          transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                          className="w-full rounded-t-lg bg-gradient-to-t from-violet-600 to-violet-400 min-h-[4px]"
                        />
                        <span className="text-[9px] text-white/30 font-mono">
                          Q{i + 1}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <p className="text-xs text-white/30 mt-3">
                  {scoreTrend === "improving"
                    ? "📈 Your confidence improved as the interview progressed — great momentum!"
                    : scoreTrend === "declining"
                      ? "📉 Confidence dipped in later rounds. Practice high-round questions to build endurance."
                      : "➡️ Consistent confidence throughout the session."}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center pt-2 pb-8"
        >
          {onSave && (
            <button
              onClick={async () => {
                if (saveState === "saved") return;
                setSaveState("saving");
                try {
                  const ok = await onSave();
                  setSaveState(ok ? "saved" : "error");
                } catch {
                  setSaveState("error");
                }
              }}
              disabled={saveState === "saving"}
              className={`px-8 py-3 font-bold rounded-2xl flex items-center gap-2 justify-center transition-all ${
                saveState === "saved"
                  ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"
                  : saveState === "error"
                    ? "bg-red-500/20 border border-red-500/30 text-red-400"
                    : "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20"
              }`}
            >
              {saveState === "saving" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Saving...
                </>
              ) : saveState === "saved" ? (
                <>
                  <CheckCircle className="w-4 h-4" /> Saved to Dashboard
                </>
              ) : saveState === "error" ? (
                <>
                  <AlertTriangle className="w-4 h-4" /> Save Failed — Retry
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" /> Save to Dashboard
                </>
              )}
            </button>
          )}
          <button
            onClick={() => router.push("/interview/config")}
            className="px-8 py-3 bg-white text-black font-bold rounded-2xl hover:scale-105 active:scale-95 transition-transform"
          >
            Practice Again
          </button>
          <button
            onClick={() => router.push("/")}
            className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    </div>
  );
}

"use client";
// v6.0.0 - Enhanced Interview Client with Avatars & Metrics

import { useEffect, useRef, useState, useCallback } from "react";
import {
  setupDeepgramTranscription,
  streamAudioToDeepgram,
  closeDeepgram,
} from "@/lib/deepgram-service";
import { generateSpeech } from "@/lib/elevenlabs-service";
import {
  generateEnhancedQuestion,
  evaluateEnhancedResponse,
} from "@/lib/groq-enhanced";
import { audioManager } from "@/lib/audio-manager";
import { useRouter } from "next/navigation";
import { analyzeFace, loadFaceDetectionModel } from "@/lib/face-detection";
import { AudioVisualizer } from "./audio-visualizer";
import { InterviewHUD2 } from "@/components/interview/interview-hud-2";
import {
  Video,
  Mic,
  Users,
  User,
  Bot,
  Sparkles,
  AlertTriangle,
  Play,
  Wifi,
  Save,
  CheckCircle,
} from "lucide-react";
import { AuroraBackground } from "@/components/aurora-background";
import { GlitchText } from "@/components/ui/glitch-text";
import { CandidateReport } from "@/components/analytics/candidate-report";
import { motion, AnimatePresence } from "framer-motion";
import {
  INTERVIEWERS,
  SPECIFIC_COMPANIES,
  INTERVIEW_ROUNDS,
} from "../lib/constants";
import { supabase } from "@/lib/supabase";

type InterviewState =
  | "INITIALIZING"
  | "READY"
  | "INTRO"
  | "QUESTIONING"
  | "LISTENING"
  | "PROCESSING"
  | "COMPLETED";

// Round-specific theme colors
const ROUND_THEMES: Record<
  string,
  { bg: string; accent: string; glow: string; label: string }
> = {
  technical: {
    bg: "from-blue-950/40 via-cyan-950/30 to-slate-950",
    accent: "cyan-400",
    glow: "rgba(34,211,238,0.08)",
    label: "Technical Round",
  },
  hr: {
    bg: "from-rose-950/40 via-pink-950/30 to-slate-950",
    accent: "rose-400",
    glow: "rgba(251,113,133,0.08)",
    label: "HR Round",
  },
  gd: {
    bg: "from-violet-950/40 via-purple-950/30 to-slate-950",
    accent: "violet-400",
    glow: "rgba(167,139,250,0.08)",
    label: "Group Discussion",
  },
  f2f: {
    bg: "from-amber-950/40 via-yellow-950/30 to-slate-950",
    accent: "amber-400",
    glow: "rgba(251,191,36,0.08)",
    label: "Face-to-Face",
  },
  virtual: {
    bg: "from-emerald-950/40 via-teal-950/30 to-slate-950",
    accent: "emerald-400",
    glow: "rgba(52,211,153,0.08)",
    label: "Virtual Round",
  },
  managerial: {
    bg: "from-orange-950/40 via-amber-950/30 to-slate-950",
    accent: "orange-400",
    glow: "rgba(251,146,60,0.08)",
    label: "Managerial Round",
  },
  system_design: {
    bg: "from-slate-950/40 via-emerald-950/30 to-slate-950",
    accent: "emerald-400",
    glow: "rgba(16,185,129,0.08)",
    label: "System Design",
  },
  case_study: {
    bg: "from-indigo-950/40 via-sky-950/30 to-slate-950",
    accent: "indigo-400",
    glow: "rgba(129,140,248,0.08)",
    label: "Case Study",
  },
  aptitude: {
    bg: "from-yellow-950/40 via-amber-950/30 to-slate-950",
    accent: "yellow-400",
    glow: "rgba(250,204,21,0.08)",
    label: "Aptitude Test",
  },
  coding: {
    bg: "from-green-950/40 via-lime-950/30 to-slate-950",
    accent: "green-400",
    glow: "rgba(74,222,128,0.08)",
    label: "Coding Round",
  },
  pair_programming: {
    bg: "from-cyan-950/40 via-blue-950/30 to-slate-950",
    accent: "cyan-400",
    glow: "rgba(34,211,238,0.08)",
    label: "Pair Programming",
  },
  final: {
    bg: "from-amber-950/40 via-yellow-950/30 to-slate-950",
    accent: "amber-300",
    glow: "rgba(252,211,77,0.12)",
    label: "Final Round",
  },
};

function LiveInterviewContent() {
  const previewVideoRef = useRef<HTMLVideoElement>(null);
  const liveVideoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<InterviewState>("INITIALIZING");
  const router = useRouter();

  // Parse URL params once on mount
  const paramsRef = useRef<URLSearchParams | null>(null);
  const getParams = useCallback(() => {
    if (!paramsRef.current) {
      paramsRef.current = new URLSearchParams(window.location.search);
    }
    return paramsRef.current;
  }, []);

  const [data, setData] = useState<{
    role: string;
    level: string;
    interviewType: string;
    pace: string;
    difficulty: string;
    company: string;
    roundType: string;
    round: number;
    currentQuestion: string;
    isAISpeaking: boolean;
    subtitleText: string;
    transcript: string;
    allTranscripts: string[];
    results: any[];
    score: number[];
    latestFeedback: any;
    persona: string;
    voiceId: string;
    dominantEmotion: "neutral" | "happy" | "sad" | "angry" | "fear" | "surprise" | "disgust";
    confidenceScore: number;
    unprofessionalCount: number;
    error: string | null;
    isFaceDetected: boolean;
    tip: string | null;
    sessionStartTime: number;
    candidateName: string;
    totalRounds: number;
  }>({
    role: "",
    level: "",
    interviewType: "",
    pace: "normal",
    difficulty: "standard",
    company: "",
    roundType: "",
    round: 0,
    currentQuestion: "",
    isAISpeaking: false,
    subtitleText: "",
    transcript: "",
    allTranscripts: [],
    results: [],
    score: [],
    latestFeedback: null,
    persona: "alex",
    voiceId: "cgSgspJ2msm6clMCkdW9",
    dominantEmotion: "neutral",
    confidenceScore: 5,
    unprofessionalCount: 0,
    error: null,
    isFaceDetected: true,
    tip: null,
    sessionStartTime: Date.now(),
    candidateName: "",
    totalRounds: 5,
  });

  const [history, setHistory] = useState<any[]>([]);

  const deepgramRef = useRef<any>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const transcriptRef = useRef("");
  const faceCheckInterval = useRef<NodeJS.Timeout | null>(null);
  const silenceTimer = useRef<NodeJS.Timeout | null>(null);
  const hasStarted = useRef(false);
  const mediaStreamRef = useRef<MediaStream | null>(null); // Persist camera stream
  // CAMERA STREAM AS STATE — triggers React re-render when stream arrives
  // This is the KEY fix: callback refs on <video> elements run on mount and update,
  // guaranteeing the stream is attached reliably even in strict mode.
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  // Robust callback refs for ensuring stream binding
  const previewVideoCallback = useCallback((el: HTMLVideoElement | null) => {
    (previewVideoRef as any).current = el; // keeping the ref populated if needed
    if (el && cameraStream && el.srcObject !== cameraStream) {
      el.srcObject = cameraStream;
      el.muted = true;
      el.play().catch(e => console.log("Preview autoplay prevented", e));
    }
  }, [cameraStream]);

  const liveVideoCallback = useCallback((el: HTMLVideoElement | null) => {
    (liveVideoRef as any).current = el; // used by analyzeFace
    if (el && cameraStream && el.srcObject !== cameraStream) {
      el.srcObject = cameraStream;
      el.muted = true;
      el.play().catch(e => console.log("Live autoplay prevented", e));
    }
  }, [cameraStream]);

  // Pre-load browser voices on mount (they load async in Chrome)
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      if (v.length > 0) voicesRef.current = v;
    };

    loadVoices(); // Try immediately
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, []);

  // ---------------------------------------------------------
  // AUTO-INIT CAMERA ON MOUNT, show READY screen for user click
  // ---------------------------------------------------------
  useEffect(() => {
    if (!hasStarted.current) {
      hasStarted.current = true;
      initCamera();
    }
  }, []);

  // Initialize camera with RETRY logic (setup wizard may still hold the device)
  const initCamera = async () => {
    try {
      setStatus("INITIALIZING");

      // Wait briefly for setup wizard to fully release the camera
      await new Promise(r => setTimeout(r, 600));

      let stream: MediaStream | null = null;
      const MAX_RETRIES = 4;

      for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
        try {
          stream = await navigator.mediaDevices.getUserMedia({
            video: {
              width: { ideal: 1280 },
              height: { ideal: 720 },
              facingMode: "user",
            },
            audio: { echoCancellation: true, noiseSuppression: true },
          });
          break; // Success
        } catch (err: any) {
          console.warn(`Camera attempt ${attempt + 1}/${MAX_RETRIES} failed:`, err.message);
          if (attempt < MAX_RETRIES - 1) {
            // Wait progressively longer between retries
            await new Promise(r => setTimeout(r, 500 * (attempt + 1)));
          }
        }
      }

      // If HD failed on all retries, try basic video
      if (!stream) {
        try {
          console.warn("All HD attempts failed, trying basic video...");
          stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: { echoCancellation: true, noiseSuppression: true },
          });
        } catch (e2) {
          console.warn("Basic video failed, audio-only fallback");
          stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        }
      }

      // Load Face Model
      await loadFaceDetectionModel().catch(() =>
        console.warn("Face model failed to load"),
      );

      // Store stream — both ref (for non-render code) and state (triggers re-render)
      mediaStreamRef.current = stream;
      setCameraStream(stream);
      console.log("[Camera] Stream acquired, video tracks:", stream.getVideoTracks().length);

      // Show READY screen — React re-renders because cameraStream state changed
      setStatus("READY");
    } catch (e: any) {
      console.error("Init failed:", e);
      setData((prev) => ({ ...prev, error: e.message }));
    }
  };

  // Auto-start listening after AI finishes speaking
  useEffect(() => {
    if (
      !data.isAISpeaking &&
      status === "QUESTIONING" &&
      data.currentQuestion
    ) {
      setTimeout(() => {
        startRecording();
      }, 500);
    }
  }, [data.isAISpeaking, status, data.currentQuestion]);

  // Called when user clicks "Begin Interview" — user gesture unlocks speech/audio
  const startInterview = async () => {
    try {
      setStatus("INITIALIZING");

      // Force Audio Context Resume — needs user gesture
      audioManager.resume();

      // Unlock SpeechSynthesis with a silent utterance
      if (window.speechSynthesis) {
        const silentUtterance = new SpeechSynthesisUtterance("");
        silentUtterance.volume = 0;
        window.speechSynthesis.speak(silentUtterance);
      }

      startFaceAnalysis();

      audioManager.setpOnPlayStateChange((isPlaying: boolean) => {
        setData((prev) => ({ ...prev, isAISpeaking: isPlaying }));
      });

      // Read config from URL params
      const params = getParams();
      const hasParams = params.has("role") && params.has("level");
      if (!hasParams) {
        router.replace("/interview/config");
        return;
      }

      const role = params.get("role") || "Full Stack Engineer";
      const level = params.get("level") || "Junior";
      const interviewType = params.get("type") || "Technical";
      const personaId = params.get("persona") || "alex";
      const topic = params.get("topic") || "";
      const questionCount = parseInt(params.get("questions") || "5", 10);
      const companyId = params.get("company") || "";
      const roundType = params.get("round") || "";

      // Get full persona details
      const selectedInterviewer =
        INTERVIEWERS.find((i) => i.id === personaId) || INTERVIEWERS[1];
      const selectedCompany = companyId
        ? SPECIFIC_COMPANIES.find((c) => c.id === companyId)
        : null;
      const selectedRound = roundType
        ? INTERVIEW_ROUNDS.find((r) => r.id === roundType)
        : null;

      setData((prev) => ({
        ...prev,
        role,
        level,
        interviewType,
        persona: personaId,
        voiceId: selectedInterviewer.voiceId,
        totalRounds: questionCount,
        sessionStartTime: Date.now(),
        roundType,
        company: companyId,
      }));

      // Build smart intro with company/round context
      let introText = `Hello! I'm ${selectedInterviewer.name}, ${selectedInterviewer.role}.`;

      if (selectedCompany) {
        introText += ` Today I'll be interviewing you for a ${role} position at ${selectedCompany.name}.`;
      } else {
        introText += ` I'll be conducting your ${interviewType} interview for the ${role} position.`;
      }

      if (selectedRound) {
        introText += ` This is your ${selectedRound.label}.`;
      }

      introText += ` We have ${questionCount} questions. Let's begin \u2014 please introduce yourself briefly.`;

      // Show connecting state while fetching the first TTS audio
      setStatus("CONNECTING");
      setData((prev) => ({
        ...prev,
        currentQuestion:
          "Please introduce yourself and highlight your key skills.",
        round: 0,
        transcript: "",
      }));

      await speak(introText, selectedInterviewer.voiceId);
      setStatus("QUESTIONING");
    } catch (error: any) {
      console.error("Start Error:", error);
      setData((prev) => ({ ...prev, error: error.message || "CAMERA_DENIED" }));
    }
  };

  const startFaceAnalysis = () => {
    if (faceCheckInterval.current) clearInterval(faceCheckInterval.current);

    faceCheckInterval.current = setInterval(async () => {
      if (liveVideoRef.current && liveVideoRef.current.readyState === 4) {
        const result = await analyzeFace(liveVideoRef.current);

        setData((prev) => ({
          ...prev,
          isFaceDetected: result.isFaceDetected,
          dominantEmotion: result.dominantEmotion || prev.dominantEmotion,
          confidenceScore: result.confidenceScore || prev.confidenceScore,
        }));
      }
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (faceCheckInterval.current) clearInterval(faceCheckInterval.current);
      if (silenceTimer.current) clearTimeout(silenceTimer.current);
      audioManager.stop();
    };
  }, []);

  const nextRound = async (overrideHistory?: any[]) => {
    const nextR = data.round + 1;
    const currentHistory = overrideHistory || history;
    const params = getParams();
    const level = params.get("level") || "Junior";
    const topic = params.get("topic") || "";
    const pace = params.get("pace") || "normal";
    const difficulty = params.get("difficulty") || "standard";
    const company = params.get("company") || "";
    const roundType = params.get("round") || "";

    if (nextR > data.totalRounds) {
      finishInterview();
      return;
    }

    setStatus("PROCESSING");
    setData((prev) => ({ ...prev, transcript: "", subtitleText: "", isAISpeaking: false }));

    try {
      // Inject candidate name into history context for personalization
      const enrichedHistory = data.candidateName 
        ? [{ question: '__CANDIDATE_NAME__', answer: data.candidateName }, ...currentHistory]
        : currentHistory;

      const question = await generateEnhancedQuestion(
        data.role,
        level,
        nextR,
        data.interviewType + (topic ? ` — Focus: ${topic}` : ""),
        enrichedHistory,
        data.persona,
        data.interviewType,
        pace,
        difficulty,
        company,
        roundType,
      );

      if (!question) throw new Error("Question generation failed");

      setData((prev) => ({
        ...prev,
        round: nextR,
        currentQuestion: question,
        transcript: "",
      }));

      setStatus("QUESTIONING");
      await speak(question, data.voiceId);
    } catch (e: any) {
      console.error(e);
      setData((prev) => ({ ...prev, error: "Network Glitch. Retrying..." }));
      setTimeout(() => nextRound(currentHistory), 2000);
    }
  };

  const speak = async (text: string, _voiceId?: string) => {
    const vid = _voiceId || data.voiceId;
    // PRIMARY: Call /api/interview/speak and STREAM audio for low latency
    try {
      console.log("[TTS] Calling /api/interview/speak, voiceId:", vid, "text length:", text.length);
      audioManager.resume(); // Ensure AudioContext is running
      
      // NOW show subtitle — text is ready, audio stream starting
      setData((prev) => ({ ...prev, isAISpeaking: true, subtitleText: text }));

      const res = await fetch('/api/interview/speak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, voiceId: vid }),
      });
      
      console.log("[TTS] API response status:", res.status, res.statusText);
      
      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`ElevenLabs API error ${res.status}: ${errText}`);
      }

      // Try streaming first for lower latency, fall back to buffer
      if (res.body) {
        try {
          await audioManager.playStream(res.body);
          console.log("[TTS] ✅ ElevenLabs streaming playback complete");
          setData((prev) => ({ ...prev, isAISpeaking: false, subtitleText: "" }));
          return;
        } catch (streamErr) {
          console.warn("[TTS] Stream playback failed, trying buffer fallback:", streamErr);
        }
      }

      // Buffer fallback
      const audioBuffer = await res.arrayBuffer();
      console.log("[TTS] Audio buffer received, size:", audioBuffer.byteLength, "bytes");
      
      if (audioBuffer.byteLength > 0) {
        await audioManager.play(audioBuffer);
        console.log("[TTS] ✅ ElevenLabs buffer playback complete");
        setData((prev) => ({ ...prev, isAISpeaking: false, subtitleText: "" }));
        return;
      }
      throw new Error("Empty audio buffer returned");
    } catch (e: any) {
      console.error("[TTS] ❌ ElevenLabs failed:", e?.message || e);
    }

    // FALLBACK: Browser-native SpeechSynthesis
    if (typeof window !== "undefined" && window.speechSynthesis) {
      console.log("[TTS] Using browser SpeechSynthesis fallback");
      // Show subtitle NOW — browser TTS starts immediately
      setData((prev) => ({ ...prev, isAISpeaking: true, subtitleText: text }));
      const voices =
        voicesRef.current.length > 0
          ? voicesRef.current
          : window.speechSynthesis.getVoices();

      const preferred =
        voices.find(
          (v) => v.name.includes("Google") && v.lang.startsWith("en"),
        ) ||
        voices.find(
          (v) => v.name.includes("Microsoft") && v.lang.startsWith("en"),
        ) ||
        voices.find((v) => v.lang === "en-US") ||
        voices.find((v) => v.lang.startsWith("en")) ||
        voices[0];

      // Split into sentences to avoid Chrome's 15s cutoff bug
      const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];

      for (const sentence of sentences) {
        const trimmed = sentence.trim();
        if (!trimmed) continue;

        await new Promise<void>((resolve) => {
          const utterance = new SpeechSynthesisUtterance(trimmed);
          utterance.rate = 0.95;
          utterance.pitch = 1.0;
          utterance.volume = 1.0;
          if (preferred) utterance.voice = preferred;

          const timeout = setTimeout(() => {
            window.speechSynthesis.cancel();
            resolve();
          }, 20000);

          utterance.onend = () => {
            clearTimeout(timeout);
            resolve();
          };
          utterance.onerror = (e) => {
            console.warn("[TTS] SpeechSynthesis error:", e);
            clearTimeout(timeout);
            resolve();
          };

          window.speechSynthesis.speak(utterance);
        });
      }
    }

    setData((prev) => ({ ...prev, isAISpeaking: false, subtitleText: "" }));
  };

  // Tips removed — clean, distraction-free interview experience

  const startRecording = async () => {
    try {
      // Small pause if transition from TTS
      await new Promise(r => setTimeout(r, 300));
      
      audioManager.stop();
      setStatus("LISTENING");
      transcriptRef.current = "";

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      deepgramRef.current = await setupDeepgramTranscription(
        (text, isFinal) => {
          transcriptRef.current = text;
          setData((prev) => ({ ...prev, transcript: text }));

          if (silenceTimer.current) clearTimeout(silenceTimer.current);

          if (text.trim().length > 5) {
            silenceTimer.current = setTimeout(() => {
              submitAnswer();
            }, 2000);
          }
        },
        (err) => console.error(err),
      );

      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0 && deepgramRef.current) {
          streamAudioToDeepgram(deepgramRef.current, e.data);
        }
      };
      recorder.start(100);

      // Safety timeout — if no speech detected after 30s, prompt user
      setTimeout(() => {
        if (transcriptRef.current.trim().length < 3 && status === 'LISTENING') {
          console.warn('[Interview] No speech detected after 30s, prompting user');
          setData((prev) => ({ ...prev, transcript: '' }));
        }
      }, 30000);
    } catch (e: any) {
      setData((prev) => ({ ...prev, error: "Mic Error. Check Permissions." }));
    }
  };

  const submitAnswer = async () => {
    if (!mediaRecorderRef.current) return;

    if (mediaRecorderRef.current) mediaRecorderRef.current.stop();
    if (deepgramRef.current) closeDeepgram(deepgramRef.current);
    if (silenceTimer.current) clearTimeout(silenceTimer.current);

    const answerText = transcriptRef.current;
    console.log("Submitting:", answerText);

    // Store transcript for analytics
    setData((prev) => ({
      ...prev,
      allTranscripts: [...prev.allTranscripts, answerText],
    }));

    try {
      if (!answerText || answerText.length < 5) {
        await speak("I didn't catch that clearly. Could you please repeat?");
        setStatus("QUESTIONING");
        return;
      }

      const newHistory = [
        ...history,
        { question: data.currentQuestion, answer: answerText },
      ];
      setHistory(newHistory);

      setStatus("PROCESSING");
      // Clear subtitle immediately to prevent dual overlay
      setData((prev) => ({ ...prev, subtitleText: "", isAISpeaking: false }));

      let feedbackData: any = {};
      let roundScore = 0;
      let newUnprofessionalCount = data.unprofessionalCount;

      if (data.round === 0) {
        const response = await fetch("/api/interview/evaluate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            question: data.currentQuestion,
            answer: answerText,
            round: 0,
            persona: data.persona,
            interviewType: data.interviewType,
            dominantEmotion: data.dominantEmotion,
            confidenceLevel: data.confidenceScore,
          }),
        });
        feedbackData = await response.json();
        // Store extracted candidate name from intro for personalized follow-ups
        if (feedbackData.name && feedbackData.name !== 'Candidate') {
          setData((prev) => ({ ...prev, candidateName: feedbackData.name }));
          console.log("[Interview] Candidate name extracted:", feedbackData.name);
        }
        // Intro round — don't add a score (it's not a real question)
        roundScore = -1;
        // Check for unprofessional start
        if (feedbackData.isUnprofessional) newUnprofessionalCount++;
        // Use welcome message for the intro transition
        if (feedbackData.welcomeMessage) {
          feedbackData.overallAssessment = feedbackData.welcomeMessage;
        }
      } else {
        feedbackData = await evaluateEnhancedResponse(
          data.currentQuestion,
          answerText,
          data.round,
          data.interviewType,
          data.persona,
          data.dominantEmotion,
          data.confidenceScore,
        );
        // Ensure score is on 0-100 scale (confidenceScore is 0-10)
        const rawScore = feedbackData.confidenceScore || 5;
        roundScore = Math.min(100, Math.round(rawScore * 10));
        if (feedbackData.isUnprofessional) newUnprofessionalCount++;
      }

      const resultEntry = {
        round: data.round,
        question: data.currentQuestion,
        answer: answerText,
        wordCount: answerText.split(" ").length,
        fillerWords: (
          answerText.match(
            /\b(um|uh|like|you know|basically|actually|literally)\b/gi,
          ) || []
        ).length,
        roundScore, // Store the computed score directly in the result
        ...feedbackData,
      };

      setData((prev) => ({
        ...prev,
        unprofessionalCount: newUnprofessionalCount,
        latestFeedback: feedbackData,
        results: [...prev.results, resultEntry],
        // Only add score for real questions (not intro round)
        score: roundScore >= 0 ? [...prev.score, roundScore] : prev.score,
      }));

      // --- ABUSIVE BEHAVIOR TERMINATION CHECK ---
      if (newUnprofessionalCount >= 3) {
        const terminationMessage = "Your language and behavior during this interview have been consistently unprofessional and unacceptable. I am terminating this interview immediately.";
        await speak(terminationMessage);
        finishInterview(true); // pass true for forced termination
        return;
      }

      // Use spokenFeedback for TTS (natural, short) — fallback to overallAssessment
      const spokenText = feedbackData.spokenFeedback || feedbackData.overallAssessment || "";
      let transitionText = spokenText.trim();
      // Fallback to a short acknowledgment if somehow empty
      if (!transitionText) {
        transitionText = "Noted. Let me move to the next question.";
      }
      // Smooth transition — brief pause before speaking feedback
      await new Promise((r) => setTimeout(r, 500));
      await speak(transitionText);

      // Clear subtitles before generating the next question
      setData((prev) => ({ ...prev, subtitleText: "", isAISpeaking: false }));
      await new Promise((r) => setTimeout(r, 300));

      nextRound(newHistory);
    } catch (e: any) {
      console.error("Eval Error", e);
      await speak("Moving to the next question.");
      nextRound();
    }
  };

  const finishInterview = async (forced = false) => {
    setStatus("COMPLETED");
    // Use same avg calculation as report screen to avoid mismatch
    const scores = [...data.score];
    const avg = Math.round(
      scores.reduce((a, b) => a + b, 0) / Math.max(1, scores.length),
    );
    
    // Skip farewell if forcibly terminated due to unprofessional behavior
    if (!forced) {
      // Persona-voiced farewell with encouragement
      const persona = INTERVIEWERS.find(i => i.id === data.persona);
      const personaName = persona?.name || 'the interviewer';
      const farewell = avg >= 70
        ? `That wraps up our interview. You did really well today — your overall score is ${avg} percent. I've put together a detailed performance report for you. Best of luck with the next round!`
        : avg >= 40
        ? `That's all from my side. Your overall score is ${avg} percent. There are some areas to work on, but I can see potential. Check the detailed report I've prepared — it has specific pointers. Keep preparing and you'll get there!`
        : `We're done for today. Your score is ${avg} percent, which is below the bar. But don't be discouraged — every interview is a learning opportunity. Review the report carefully, work on the gaps, and come back stronger. Good luck!`;
      
      await speak(farewell);
    }
  };

  // ---------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------

  // INITIALIZING SCREEN (replaces old IDLE)
  if (status === "INITIALIZING") {
    return (
      <div className="h-screen w-full bg-black text-white flex flex-col items-center justify-center gap-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 flex flex-col items-center gap-6"
        >
          <div className="w-20 h-20 rounded-full border-4 border-white/10 border-t-cyan-500 animate-spin" />
          <div className="text-center space-y-2">
            <p className="text-white/80 font-mono text-sm tracking-widest uppercase animate-pulse">
              Initializing Interview Session
            </p>
            <p className="text-white/40 text-xs font-mono">
              Setting up camera • Loading AI models • Connecting services
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  // PERMISSION ERROR SCREEN
  if (data.error) {
    return (
      <div className="h-screen bg-black flex items-center justify-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-red-900/20" />
        <div className="relative z-10 text-center space-y-8 animate-in zoom-in duration-500 max-w-lg mx-auto p-8 bg-black/50 backdrop-blur-xl border border-red-500/30 rounded-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-red-400">
            System Error
          </h1>
          <p className="text-white/60">{data.error}</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Retry
            </button>
            <button
              onClick={() => router.push("/interview/config")}
              className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-colors"
            >
              Back to Setup
            </button>
          </div>
        </div>
      </div>
    );
  }

  // COMPLETED SCREEN -> CANDIDATE REPORT with Save
  if (status === "COMPLETED") {
    const avg = Math.round(
      data.score.reduce((a, b) => a + b, 0) / Math.max(1, data.score.length),
    );
    return (
      <CandidateReport
        score={avg}
        results={data.results}
        role={data.role}
        interviewType={data.interviewType}
        persona={data.persona}
        sessionDuration={Math.round(
          (Date.now() - data.sessionStartTime) / 1000,
        )}
        allTranscripts={data.allTranscripts}
        onSave={async () => {
          try {
            const sessionData = {
              role: data.role,
              interviewType: data.interviewType,
              persona: data.persona,
              score: avg,
              results: data.results,
              transcripts: data.allTranscripts,
              duration: Math.round((Date.now() - data.sessionStartTime) / 1000),
              totalQuestions: data.totalRounds,
              completedAt: new Date().toISOString(),
            };

            // Try Supabase first
            if (supabase) {
              const { data: userData } = await supabase.auth.getUser();
              if (userData?.user) {
                const { error } = await supabase
                  .from("interview_results")
                  .insert([{ 
                    "userId": userData.user.id, 
                    title: `${data.role} - ${data.interviewType}`,
                    score: avg,
                    feedback: data.latestFeedback?.overallAssessment || "Completed successfully.",
                    metadata: sessionData
                  }]);
                if (!error) return true;
                else console.error("Supabase Save Error:", error);
              }
            }

            // Fallback: localStorage
            const key = "flyeng_interview_history";
            const existing = JSON.parse(localStorage.getItem(key) || "[]");
            existing.unshift({ id: Date.now().toString(36), ...sessionData });
            localStorage.setItem(key, JSON.stringify(existing.slice(0, 50)));
            return true;
          } catch (e) {
            console.error("Save failed:", e);
            return false;
          }
        }}
      />
    );
  }

  const currentPersona =
    INTERVIEWERS.find((i) => i.id === data.persona) || INTERVIEWERS[1];

  // READY screen — premium camera preview + "Begin Interview" button
  if (status === "READY") {
    return (
      <div className="h-[100dvh] bg-black text-white flex flex-col items-center justify-center gap-6 font-sans relative overflow-hidden">
        {/* Rich ambient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center gap-8"
        >
          {/* Camera preview with animated ring */}
          <div className="relative">
            {/* Outer animated glow ring */}
            <motion.div 
              className="absolute -inset-4 rounded-full"
              style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.3), rgba(59,130,246,0.3), rgba(168,85,247,0.2))' }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Spinning accent border */}
            <motion.div 
              className="absolute -inset-1 rounded-full border-2 border-dashed border-cyan-400/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />
            <video
              ref={previewVideoCallback}
              autoPlay
              playsInline
              muted
              className="relative w-52 h-52 md:w-72 md:h-72 rounded-full object-cover border-2 border-white/20 transform scale-x-[-1] shadow-2xl shadow-cyan-500/10"
              style={{ filter: "brightness(1.15) contrast(1.05)" }}
            />
            {/* Live indicator */}
            <div className="absolute bottom-2 right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-green-500/30">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-green-400">Live</span>
            </div>
          </div>

          {/* Text */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">
              Ready to Begin
            </h2>
            <p className="text-sm md:text-base text-white/50 max-w-md">
              Your camera and microphone are connected. Click below to start your AI interview.
            </p>
          </div>

          {/* Start button with glow */}
          <motion.button
            onClick={startInterview}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl text-lg shadow-2xl shadow-cyan-500/30 overflow-hidden group"
          >
            {/* Button shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
              🎙️ Begin Interview
            </span>
          </motion.button>

          {/* Interviewer info */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-lg">{currentPersona.icon}</span>
            <div>
              <span className="text-xs font-bold text-white/80">{currentPersona.name}</span>
              <span className="text-[10px] text-white/40 block">{currentPersona.role}</span>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Get round theme
  const roundTheme = ROUND_THEMES[data.roundType] || ROUND_THEMES.technical;

  return (
    <div
      ref={containerRef}
      className="h-[100dvh] bg-black text-white overflow-hidden relative font-sans"
    >
      {/* LAYOUT: Stacked on mobile, side-by-side on desktop */}
      <div className="flex flex-col md:flex-row h-full relative z-0">
        {/* 1. AI INTERVIEWER FRAME — themed per round */}
        <div
          className={`relative h-[40dvh] md:h-full md:w-1/2 bg-gradient-to-b ${roundTheme.bg} border-b md:border-b-0 md:border-r border-white/5 flex flex-col items-center justify-center overflow-hidden shrink-0`}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at center, ${roundTheme.glow} 0%, transparent 70%)`,
            }}
          />

          {/* Avatar */}
          <div className="relative z-10 scale-[0.7] md:scale-100 -mt-6 md:mt-0">
            <AudioVisualizer
              status={status as any}
              isAISpeaking={data.isAISpeaking}
              audioManager={audioManager}
              emotion={data.dominantEmotion}
              confidence={data.confidenceScore}
              personaId={data.persona}
            />
          </div>

          {/* SINGLE TEXT ELEMENT — either subtitle (when speaking) or question (when not) */}
          <AnimatePresence mode="wait">
            {/* Show subtitle when AI is speaking */}
            {data.isAISpeaking && data.subtitleText && (
              <motion.div
                key={`sub-${data.subtitleText.slice(0, 20)}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="relative z-10 w-full px-3 md:px-8 mt-1 md:mt-4 text-center"
              >
                <div className="bg-black/60 backdrop-blur-lg border border-white/20 px-4 py-3 md:px-8 md:py-4 rounded-2xl max-w-2xl mx-auto shadow-2xl shadow-black/50">
                  <p className="text-sm md:text-base text-white font-medium leading-relaxed tracking-wide">
                    {data.subtitleText}
                  </p>
                </div>
              </motion.div>
            )}
            {/* Show static question when NOT speaking and purely WAITING/LISTENING */}
            {!data.isAISpeaking && status === "LISTENING" &&
              data.currentQuestion && (
                <motion.div
                  key={`q-${data.round}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="relative z-10 w-full px-3 md:px-8 mt-1 md:mt-4 text-center"
                >
                  <p className="text-sm md:text-xl font-medium text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-md pb-2">
                    {data.currentQuestion}
                  </p>
                  {status === "LISTENING" && (
                    <div className="mt-1 md:mt-2 flex items-center justify-center gap-1.5 text-emerald-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[8px] md:text-[9px] font-mono tracking-widest uppercase">
                        Listening
                      </span>
                    </div>
                  )}
                </motion.div>
              )}
          </AnimatePresence>

          {/* Processing and Connecting spinners */}
          {(status === "PROCESSING" || status === "CONNECTING") && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="relative z-10 mt-2 md:mt-3 flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-2xl bg-black/30 border border-white/5 backdrop-blur-sm"
            >
              <div className="w-3 h-3 md:w-3.5 md:h-3.5 border-2 border-white/10 border-t-cyan-400/60 rounded-full animate-spin" />
              <span className="text-[10px] md:text-xs font-light text-white/50 tracking-wide">
                {status === "CONNECTING" ? "Connecting..." : "Thinking..."}
              </span>
            </motion.div>
          )}

          {/* Persona Label */}
          <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-black/50 border border-white/10 backdrop-blur-md">
            <span className="text-xs md:text-sm">{currentPersona.icon}</span>
            <div className="flex flex-col">
              <span className="text-[9px] md:text-xs font-semibold text-white/90">
                {currentPersona.name}
              </span>
              <span className="text-[7px] md:text-[9px] font-mono tracking-wider text-white/40 uppercase">
                {currentPersona.role}
              </span>
            </div>
          </div>

          {/* Round Type Badge */}
          {data.roundType && ROUND_THEMES[data.roundType] && (
            <div className="absolute top-2 right-2 md:top-3 md:right-3">
              <div className={`px-2.5 py-1 rounded-lg bg-black/50 border border-white/10 backdrop-blur-md`}>
                <span className={`text-[8px] md:text-[9px] font-bold tracking-widest uppercase text-${roundTheme.accent}`}>
                  {roundTheme.label}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* 2. CANDIDATE FRAME — clean, unobstructed video */}
        <div className="relative flex-1 md:w-1/2 bg-black flex items-center justify-center overflow-hidden min-h-0">
          <video
            ref={liveVideoCallback}
            autoPlay
            playsInline
            muted
            onLoadedMetadata={(e) => {
              const v = e.currentTarget;
              v.play().catch(() => {});
            }}
            style={{
              minHeight: "100%",
              minWidth: "100%",
              filter: "brightness(1.15) contrast(1.05) saturate(1.1)",
            }}
            className="w-full h-full object-cover transform scale-x-[-1]"
          />

          {/* Subtle corner vignette for cinematic feel */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />
          {/* Bottom gradient for text readability */}
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-t from-black/60 to-transparent" />

          {/* Secure indicator — top left */}
          <div className="absolute top-2 left-2 md:top-4 md:left-4 flex items-center gap-1.5 text-green-400">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[8px] md:text-[10px] font-mono tracking-widest opacity-60 uppercase">
              Secure
            </span>
          </div>

          {/* FC Branding — top right */}
          <div className="absolute top-2 right-2 md:top-4 md:right-4 px-2.5 py-1 rounded-md bg-black/40 border border-white/5 backdrop-blur-md">
            <span className="text-[9px] md:text-[10px] font-black tracking-widest text-white/30">
              FC
            </span>
          </div>

          {/* Candidate profile — bottom right */}
          <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <User className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] md:text-xs font-semibold text-white/90">You</span>
              <span className="text-[7px] md:text-[8px] font-mono tracking-wider text-white/40 uppercase">
                Candidate
              </span>
            </div>
          </div>

          {/* Live transcript bubble — overlaid on candidate video */}
          <AnimatePresence>
            {status === "LISTENING" && data.transcript && !data.isAISpeaking && data.transcript.trim().length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-16 md:bottom-20 left-3 right-3 md:left-6 md:right-6 text-center z-10"
              >
                <div className="inline-block bg-black/70 backdrop-blur-xl border border-white/10 px-4 py-2 md:px-5 md:py-2.5 rounded-2xl shadow-2xl max-w-full">
                  <p className="text-xs md:text-sm text-white/90 font-medium">
                    "{data.transcript}"
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block ml-2 animate-pulse" />
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 3. HUD OVERLAY — minimal status bar only */}
      <InterviewHUD2
        status={status}
        role={data.role}
        round={data.round}
        totalRounds={data.totalRounds}
        transcript={data.transcript}
        emotion={data.dominantEmotion}
        confidence={data.confidenceScore}
        isAISpeaking={data.isAISpeaking}
        audioManager={audioManager}
        latestFeedback={data.latestFeedback}
        tip={null}
        hideMetrics={true}
        currentQuestion={data.currentQuestion}
      />
    </div>
  );
}

export default LiveInterviewContent;

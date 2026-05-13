"use client"

import { useState, useEffect, useRef } from "react"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, ChevronRight, Clock, Trophy, RefreshCw, CheckCircle, XCircle, Loader2, Sparkles, AlertCircle, ArrowLeft, Share2, Download, Zap, Heart, Shield } from 'lucide-react'
import confetti from 'canvas-confetti'
import Link from "next/link"

interface Question {
    question: string
    options: string[]
    correctIndex: number
    explanation: string
}

export default function QuizAppPage() {
    const [step, setStep] = useState<'setup' | 'loading' | 'quiz' | 'results'>('setup')

    // Setup State
    const [topic, setTopic] = useState("")
    const [difficulty, setDifficulty] = useState("Medium")
    const [questionCount, setQuestionCount] = useState(5)
    const [tone, setTone] = useState("Fun")
    const [type, setType] = useState("Multiple Choice")
    const [language, setLanguage] = useState("English")

    // Quiz State
    const [questions, setQuestions] = useState<Question[]>([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [score, setScore] = useState(0)
    const [showExplanation, setShowExplanation] = useState(false)
    const [error, setError] = useState("")
    const [startTime, setStartTime] = useState<number>(0)
    const [timeTaken, setTimeTaken] = useState<string>("00:00")

    // Game Mechanics
    const [timeLeft, setTimeLeft] = useState(15)
    const [streak, setStreak] = useState(0)
    const [lifelines, setLifelines] = useState({ fiftyFifty: true, timeFreeze: true })
    const [disabledOptions, setDisabledOptions] = useState<number[]>([])
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    // Timer Logic
    useEffect(() => {
        if (step === 'quiz' && !showExplanation && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => prev - 1)
            }, 1000)
        } else if (timeLeft === 0 && !showExplanation) {
            // Time ran out
            handleAnswer(-1) // -1 indicates timeout/wrong
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [step, showExplanation, timeLeft])

    const handleGenerate = async () => {
        if (!topic.trim()) return

        setStep('loading')
        setError("")

        // Enter Fullscreen
        try {
            if (document.documentElement.requestFullscreen) {
                await document.documentElement.requestFullscreen()
            }
        } catch (e) {
            console.error("Fullscreen failed:", e)
        }

        try {
            const response = await fetch('/api/quiz/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    topic,
                    difficulty,
                    count: questionCount,
                    tone,
                    type,
                    language
                })
            })

            const data = await response.json()

            if (data.error) throw new Error(data.error)

            setQuestions(data.questions)
            setStep('quiz')
            setCurrentQuestionIndex(0)
            setScore(0)
            setSelectedAnswer(null)
            setShowExplanation(false)
            setStartTime(Date.now())
            setTimeLeft(15)
            setStreak(0)
            setLifelines({ fiftyFifty: true, timeFreeze: true })
            setDisabledOptions([])
        } catch (err) {
            console.error(err)
            setError("Failed to generate quiz. Please try again.")
            setStep('setup')
            // Exit fullscreen if error
            if (document.fullscreenElement) {
                document.exitFullscreen().catch(console.error)
            }
        }
    }

    const handleAnswer = (index: number) => {
        if (selectedAnswer !== null) return

        setSelectedAnswer(index)
        setShowExplanation(true)
        if (timerRef.current) clearInterval(timerRef.current)

        if (index === questions[currentQuestionIndex].correctIndex) {
            setScore(prev => prev + 1)
            setStreak(prev => prev + 1)

            // Dynamic confetti based on streak
            const particleCount = Math.min(30 + (streak * 10), 100)
            confetti({
                particleCount: particleCount,
                spread: 50,
                origin: { y: 0.8 },
                colors: ['#22c55e', '#4ade80'],
                disableForReducedMotion: true
            })
        } else {
            setStreak(0)
        }
    }

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1)
            setSelectedAnswer(null)
            setShowExplanation(false)
            setTimeLeft(15)
            setDisabledOptions([])
        } else {
            const endTime = Date.now()
            const duration = endTime - startTime
            const minutes = Math.floor(duration / 60000)
            const seconds = Math.floor((duration % 60000) / 1000)
            setTimeTaken(`${minutes}:${seconds.toString().padStart(2, '0')}`)
            setStep('results')

            // Exit Fullscreen
            if (document.fullscreenElement) {
                document.exitFullscreen().catch(console.error)
            }

            if (score / questions.length > 0.7) {
                const end = Date.now() + 3 * 1000;
                const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1'];

                (function frame() {
                    confetti({
                        particleCount: 2,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0 },
                        colors: colors
                    });
                    confetti({
                        particleCount: 2,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1 },
                        colors: colors
                    });

                    if (Date.now() < end) {
                        requestAnimationFrame(frame);
                    }
                }());
            }
        }
    }

    const useFiftyFifty = () => {
        if (!lifelines.fiftyFifty || selectedAnswer !== null) return

        const correct = questions[currentQuestionIndex].correctIndex
        const wrongIndices = questions[currentQuestionIndex].options
            .map((_, idx) => idx)
            .filter(idx => idx !== correct)

        // Shuffle and take 2
        const toDisable = wrongIndices.sort(() => 0.5 - Math.random()).slice(0, 2)

        setDisabledOptions(toDisable)
        setLifelines(prev => ({ ...prev, fiftyFifty: false }))
    }

    const useTimeFreeze = () => {
        if (!lifelines.timeFreeze || selectedAnswer !== null) return
        setTimeLeft(30) // Add 15 seconds essentially
        setLifelines(prev => ({ ...prev, timeFreeze: false }))
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30 flex flex-col overflow-hidden relative">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyan-900/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

            <SiteHeader />

            <main className="flex-1 container mx-auto px-3 sm:px-4 py-8 sm:py-24 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] relative z-10">
                <AnimatePresence mode="wait">
                    {step === 'setup' && (
                        <motion.div
                            key="setup"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="w-full max-w-4xl"
                        >
                            <Link href="/ai-tools/quiz" className="inline-flex items-center text-white/40 hover:text-white mb-8 transition-colors">
                                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                            </Link>

                            <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-[2rem] p-4 sm:p-8 md:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
                                    <div>
                                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/10">
                                            <Brain className="w-8 h-8 text-cyan-400" />
                                        </div>
                                        <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">Quiz Setup</h1>
                                        <p className="text-white/60 text-lg mb-8">Customize every aspect of your quiz. Choose your topic, tone, and challenge level.</p>

                                        <div className="space-y-4">
                                            <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center gap-4">
                                                <Zap className="w-6 h-6 text-yellow-400" />
                                                <div>
                                                    <div className="font-bold text-white">Gamified Learning</div>
                                                    <div className="text-sm text-white/40">Earn streaks and use lifelines</div>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center gap-4">
                                                <Sparkles className="w-6 h-6 text-purple-400" />
                                                <div>
                                                    <div className="font-bold text-white">AI Powered</div>
                                                    <div className="text-sm text-white/40">Generated instantly by advanced AI</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {error && (
                                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400">
                                                <AlertCircle className="w-5 h-5" />
                                                <p className="text-sm">{error}</p>
                                            </div>
                                        )}

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-white/80 ml-1 uppercase tracking-wider">Topic</label>
                                            <input
                                                type="text"
                                                value={topic}
                                                onChange={(e) => setTopic(e.target.value)}
                                                placeholder="e.g., Quantum Physics, 90s Pop Music..."
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-white/80 ml-1 uppercase tracking-wider">Difficulty</label>
                                                <select
                                                    value={difficulty}
                                                    onChange={(e) => setDifficulty(e.target.value)}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-cyan-500/50 outline-none appearance-none cursor-pointer"
                                                >
                                                    <option>Easy</option>
                                                    <option>Medium</option>
                                                    <option>Hard</option>
                                                    <option>Expert</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-white/80 ml-1 uppercase tracking-wider">Questions</label>
                                                <select
                                                    value={questionCount}
                                                    onChange={(e) => setQuestionCount(Number(e.target.value))}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-cyan-500/50 outline-none appearance-none cursor-pointer"
                                                >
                                                    <option value={5}>5 Questions</option>
                                                    <option value={10}>10 Questions</option>
                                                    <option value={15}>15 Questions</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-white/80 ml-1 uppercase tracking-wider">Tone</label>
                                                <select
                                                    value={tone}
                                                    onChange={(e) => setTone(e.target.value)}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-cyan-500/50 outline-none appearance-none cursor-pointer"
                                                >
                                                    <option>Fun</option>
                                                    <option>Professional</option>
                                                    <option>Academic</option>
                                                    <option>Sarcastic</option>
                                                    <option>Enthusiastic</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-white/80 ml-1 uppercase tracking-wider">Language</label>
                                                <select
                                                    value={language}
                                                    onChange={(e) => setLanguage(e.target.value)}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-cyan-500/50 outline-none appearance-none cursor-pointer"
                                                >
                                                    <option>English</option>
                                                    <option>Spanish</option>
                                                    <option>French</option>
                                                    <option>German</option>
                                                    <option>Hindi</option>
                                                    <option>Japanese</option>
                                                </select>
                                            </div>
                                        </div>

                                        <Button
                                            onClick={handleGenerate}
                                            disabled={!topic.trim()}
                                            className="w-full h-14 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-cyan-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                                        >
                                            Generate Quiz <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 'loading' && (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center"
                        >
                            <div className="relative w-32 h-32 mx-auto mb-10">
                                <div className="absolute inset-0 border-4 border-white/5 rounded-full" />
                                <div className="absolute inset-0 border-4 border-cyan-500 rounded-full border-t-transparent animate-spin" />
                                <div className="absolute inset-0 border-4 border-purple-500 rounded-full border-b-transparent animate-spin-reverse opacity-50" />
                                <Brain className="absolute inset-0 m-auto w-12 h-12 text-cyan-500 animate-pulse" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">Crafting Your Quiz...</h2>
                            <p className="text-white/60 text-lg animate-pulse">Using AI to generate unique questions about "{topic}"</p>
                        </motion.div>
                    )}

                    {step === 'quiz' && questions.length > 0 && (
                        <motion.div
                            key="quiz"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="w-full max-w-4xl"
                        >
                            {/* Header Stats */}
                            <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm font-medium text-white/80">
                                        Q {currentQuestionIndex + 1} / {questions.length}
                                    </div>
                                    <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm font-medium text-cyan-400 flex items-center gap-2">
                                        <Trophy className="w-4 h-4" /> Score: {score}
                                    </div>
                                    <div className={`px-4 py-2 rounded-full border text-sm font-medium flex items-center gap-2 transition-colors ${streak > 2 ? 'bg-orange-500/20 border-orange-500/50 text-orange-400' : 'bg-white/5 border-white/10 text-white/60'}`}>
                                        <Zap className={`w-4 h-4 ${streak > 2 ? 'fill-orange-400' : ''}`} /> Streak: {streak}
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full border font-mono font-bold ${timeLeft < 5 ? 'bg-red-500/20 border-red-500 text-red-400 animate-pulse' : 'bg-white/5 border-white/10 text-white'}`}>
                                        <Clock className="w-4 h-4" /> {timeLeft}s
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-4 sm:gap-6">
                                {/* Question Card */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-8 md:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />

                                    <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-8 leading-relaxed">
                                        {questions[currentQuestionIndex].question}
                                    </h2>

                                    <div className="space-y-3">
                                        {questions[currentQuestionIndex].options.map((option, idx) => {
                                            const isSelected = selectedAnswer === idx
                                            const isCorrect = idx === questions[currentQuestionIndex].correctIndex
                                            const showResult = selectedAnswer !== null
                                            const isDisabled = disabledOptions.includes(idx)

                                            let buttonStyle = "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30"
                                            let icon = null

                                            if (showResult) {
                                                if (isCorrect) {
                                                    buttonStyle = "bg-green-500/20 border-green-500/50 text-green-100 shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                                                    icon = <CheckCircle className="w-6 h-6 text-green-400" />
                                                } else if (isSelected) {
                                                    buttonStyle = "bg-red-500/20 border-red-500/50 text-red-100"
                                                    icon = <XCircle className="w-6 h-6 text-red-400" />
                                                } else {
                                                    buttonStyle = "bg-white/5 border-white/10 opacity-40 blur-[1px]"
                                                }
                                            } else if (isDisabled) {
                                                buttonStyle = "bg-black/20 border-white/5 opacity-30 cursor-not-allowed"
                                            }

                                            return (
                                                <motion.button
                                                    key={idx}
                                                    onClick={() => !isDisabled && handleAnswer(idx)}
                                                    disabled={showResult || isDisabled}
                                                    whileHover={!showResult && !isDisabled ? { scale: 1.01, x: 4 } : {}}
                                                    whileTap={!showResult && !isDisabled ? { scale: 0.99 } : {}}
                                                    className={`w-full p-5 rounded-2xl border text-left transition-all flex items-center justify-between group ${buttonStyle}`}
                                                >
                                                    <span className="font-medium text-lg">{option}</span>
                                                    {icon}
                                                </motion.button>
                                            )
                                        })}
                                    </div>

                                    {/* Explanation */}
                                    <AnimatePresence>
                                        {showExplanation && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20, height: 0 }}
                                                animate={{ opacity: 1, y: 0, height: 'auto' }}
                                                className="mt-8 pt-8 border-t border-white/10"
                                            >
                                                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 mb-6">
                                                    <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                                                        <Brain className="w-4 h-4" /> AI Insight
                                                    </h4>
                                                    <p className="text-white/90 leading-relaxed text-lg">
                                                        {questions[currentQuestionIndex].explanation}
                                                    </p>
                                                </div>
                                                <Button
                                                    onClick={handleNext}
                                                    className="w-full h-14 bg-white text-black hover:bg-gray-200 font-bold text-lg rounded-xl shadow-lg transition-all"
                                                >
                                                    {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                                                    <ChevronRight className="w-5 h-5 ml-2" />
                                                </Button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Sidebar / Lifelines - Hidden on mobile, shown at bottom */}
                                <div className="space-y-4">
                                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                                        <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-4">Lifelines</h3>
                                        <div className="space-y-3">
                                            <button
                                                onClick={useFiftyFifty}
                                                disabled={!lifelines.fiftyFifty || selectedAnswer !== null}
                                                className={`w-full p-3 rounded-xl border flex items-center gap-3 transition-all ${lifelines.fiftyFifty && selectedAnswer === null ? 'bg-purple-500/20 border-purple-500/50 hover:bg-purple-500/30 text-white' : 'bg-white/5 border-white/5 text-white/20 cursor-not-allowed'}`}
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center font-bold text-xs">50:50</div>
                                                <span className="text-sm font-bold">Remove 2</span>
                                            </button>
                                            <button
                                                onClick={useTimeFreeze}
                                                disabled={!lifelines.timeFreeze || selectedAnswer !== null}
                                                className={`w-full p-3 rounded-xl border flex items-center gap-3 transition-all ${lifelines.timeFreeze && selectedAnswer === null ? 'bg-blue-500/20 border-blue-500/50 hover:bg-blue-500/30 text-white' : 'bg-white/5 border-white/5 text-white/20 cursor-not-allowed'}`}
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                                    <Clock className="w-4 h-4" />
                                                </div>
                                                <span className="text-sm font-bold">+15s Time</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                                        <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-4">Progress</h3>
                                        <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden mb-2">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                                                transition={{ duration: 0.5 }}
                                            />
                                        </div>
                                        <div className="text-right text-xs text-white/60">
                                            {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}% Complete
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 'results' && (
                        <motion.div
                            key="results"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full max-w-2xl text-center"
                        >
                            <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-[3rem] p-6 sm:p-12 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />

                                <div className="relative mb-10">
                                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(168,85,247,0.4)] animate-pulse">
                                        <Trophy className="w-16 h-16 text-white" />
                                    </div>
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black/80 border border-white/20 px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                                        {score / questions.length > 0.7 ? 'Excellent' : 'Completed'}
                                    </div>
                                </div>

                                <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Quiz Complete!</h2>
                                <p className="text-white/60 text-lg mb-10">You've mastered {topic}</p>

                                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-10">
                                    <div className="bg-black/40 rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/10">
                                        <div className="text-xl sm:text-3xl font-bold text-cyan-400 mb-1">{score}/{questions.length}</div>
                                        <div className="text-[10px] sm:text-xs text-white/40 uppercase font-bold tracking-wider">Score</div>
                                    </div>
                                    <div className="bg-black/40 rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/10">
                                        <div className="text-xl sm:text-3xl font-bold text-purple-400 mb-1">{Math.round((score / questions.length) * 100)}%</div>
                                        <div className="text-[10px] sm:text-xs text-white/40 uppercase font-bold tracking-wider">Accuracy</div>
                                    </div>
                                    <div className="bg-black/40 rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/10">
                                        <div className="text-xl sm:text-3xl font-bold text-pink-400 mb-1">{timeTaken}</div>
                                        <div className="text-[10px] sm:text-xs text-white/40 uppercase font-bold tracking-wider">Time</div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        onClick={() => setStep('setup')}
                                        className="flex-1 h-14 bg-white text-black hover:bg-gray-200 font-bold rounded-xl text-lg"
                                    >
                                        <RefreshCw className="w-5 h-5 mr-2" /> Play Again
                                    </Button>
                                    <Link href="/ai-tools/quiz" className="flex-1">
                                        <Button variant="outline" className="w-full h-14 border-white/10 hover:bg-white/5 text-white font-bold rounded-xl text-lg">
                                            Back to Home
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    )
}

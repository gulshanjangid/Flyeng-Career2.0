"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, ChevronRight, Clock, Trophy, RefreshCw, CheckCircle, XCircle, Loader2, Sparkles, AlertCircle } from 'lucide-react'
import confetti from 'canvas-confetti'

interface Question {
    question: string
    options: string[]
    correctIndex: number
    explanation: string
}

export default function QuizAppPage() {
    const [step, setStep] = useState<'setup' | 'loading' | 'quiz' | 'results'>('setup')
    const [topic, setTopic] = useState("")
    const [difficulty, setDifficulty] = useState("Medium")
    const [questionCount, setQuestionCount] = useState(5)

    const [questions, setQuestions] = useState<Question[]>([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [score, setScore] = useState(0)
    const [showExplanation, setShowExplanation] = useState(false)
    const [error, setError] = useState("")

    const handleGenerate = async () => {
        if (!topic.trim()) return

        setStep('loading')
        setError("")

        try {
            const response = await fetch('/api/quiz/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ topic, difficulty, count: questionCount })
            })

            const data = await response.json()

            if (data.error) throw new Error(data.error)

            setQuestions(data.questions)
            setStep('quiz')
            setCurrentQuestionIndex(0)
            setScore(0)
            setSelectedAnswer(null)
            setShowExplanation(false)
        } catch (err) {
            console.error(err)
            setError("Failed to generate quiz. Please try again.")
            setStep('setup')
        }
    }

    const handleAnswer = (index: number) => {
        if (selectedAnswer !== null) return // Prevent multiple answers

        setSelectedAnswer(index)
        setShowExplanation(true)

        if (index === questions[currentQuestionIndex].correctIndex) {
            setScore(prev => prev + 1)
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.7 },
                colors: ['#22c55e', '#4ade80']
            })
        }
    }

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1)
            setSelectedAnswer(null)
            setShowExplanation(false)
        } else {
            setStep('results')
            if (score / questions.length > 0.7) {
                confetti({
                    particleCount: 150,
                    spread: 100,
                    origin: { y: 0.6 }
                })
            }
        }
    }

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30 flex flex-col">
            <SiteHeader />

            <main className="flex-1 container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
                <AnimatePresence mode="wait">
                    {step === 'setup' && (
                        <motion.div
                            key="setup"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full max-w-xl"
                        >
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-cyan-400">
                                        <Brain className="w-8 h-8" />
                                    </div>
                                    <h1 className="text-3xl font-bold text-white mb-2">Create Your Quiz</h1>
                                    <p className="text-white/60">Enter a topic and let AI do the magic.</p>
                                </div>

                                {error && (
                                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400">
                                        <AlertCircle className="w-5 h-5" />
                                        <p className="text-sm">{error}</p>
                                    </div>
                                )}

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/80 ml-1">Topic</label>
                                        <input
                                            type="text"
                                            value={topic}
                                            onChange={(e) => setTopic(e.target.value)}
                                            placeholder="e.g., React Hooks, World History, Quantum Physics"
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/30 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-white/80 ml-1">Difficulty</label>
                                            <select
                                                value={difficulty}
                                                onChange={(e) => setDifficulty(e.target.value)}
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-cyan-500/50 outline-none appearance-none"
                                            >
                                                <option>Easy</option>
                                                <option>Medium</option>
                                                <option>Hard</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-white/80 ml-1">Questions</label>
                                            <select
                                                value={questionCount}
                                                onChange={(e) => setQuestionCount(Number(e.target.value))}
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-cyan-500/50 outline-none appearance-none"
                                            >
                                                <option value={5}>5 Questions</option>
                                                <option value={10}>10 Questions</option>
                                                <option value={15}>15 Questions</option>
                                            </select>
                                        </div>
                                    </div>

                                    <Button
                                        onClick={handleGenerate}
                                        disabled={!topic.trim()}
                                        className="w-full h-14 bg-cyan-500 hover:bg-cyan-600 text-black font-bold text-lg rounded-xl shadow-lg shadow-cyan-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Generate Quiz <Sparkles className="w-5 h-5 ml-2" />
                                    </Button>
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
                            <div className="relative w-24 h-24 mx-auto mb-8">
                                <div className="absolute inset-0 border-4 border-white/10 rounded-full" />
                                <div className="absolute inset-0 border-4 border-cyan-500 rounded-full border-t-transparent animate-spin" />
                                <Brain className="absolute inset-0 m-auto w-10 h-10 text-cyan-500 animate-pulse" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">Generating Questions...</h2>
                            <p className="text-white/60">Crafting the perfect quiz for you</p>
                        </motion.div>
                    )}

                    {step === 'quiz' && questions.length > 0 && (
                        <motion.div
                            key="quiz"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="w-full max-w-2xl"
                        >
                            {/* Progress Bar */}
                            <div className="mb-8">
                                <div className="flex justify-between text-sm font-medium text-white/60 mb-2">
                                    <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                                    <span>Score: {score}</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-cyan-500"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                                    />
                                </div>
                            </div>

                            {/* Question Card */}
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl mb-6">
                                <h2 className="text-2xl font-bold text-white mb-8 leading-relaxed">
                                    {questions[currentQuestionIndex].question}
                                </h2>

                                <div className="space-y-3">
                                    {questions[currentQuestionIndex].options.map((option, idx) => {
                                        const isSelected = selectedAnswer === idx
                                        const isCorrect = idx === questions[currentQuestionIndex].correctIndex
                                        const showResult = selectedAnswer !== null

                                        let buttonStyle = "bg-white/5 border-white/10 hover:bg-white/10"
                                        if (showResult) {
                                            if (isCorrect) buttonStyle = "bg-green-500/20 border-green-500 text-green-400"
                                            else if (isSelected) buttonStyle = "bg-red-500/20 border-red-500 text-red-400"
                                            else buttonStyle = "bg-white/5 border-white/10 opacity-50"
                                        }

                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => handleAnswer(idx)}
                                                disabled={showResult}
                                                className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between group ${buttonStyle}`}
                                            >
                                                <span className="font-medium">{option}</span>
                                                {showResult && isCorrect && <CheckCircle className="w-5 h-5 text-green-500" />}
                                                {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
                                            </button>
                                        )
                                    })}
                                </div>

                                {/* Explanation */}
                                <AnimatePresence>
                                    {showExplanation && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="mt-6 pt-6 border-t border-white/10"
                                        >
                                            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
                                                <h4 className="text-cyan-400 font-bold mb-1 flex items-center gap-2">
                                                    <Brain className="w-4 h-4" /> Explanation
                                                </h4>
                                                <p className="text-white/80 text-sm leading-relaxed">
                                                    {questions[currentQuestionIndex].explanation}
                                                </p>
                                            </div>
                                            <Button
                                                onClick={handleNext}
                                                className="w-full mt-4 bg-white text-black hover:bg-gray-200 font-bold py-6 rounded-xl"
                                            >
                                                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
                                                <ChevronRight className="w-5 h-5 ml-2" />
                                            </Button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    )}

                    {step === 'results' && (
                        <motion.div
                            key="results"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full max-w-xl text-center"
                        >
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500" />

                                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/30">
                                    <Trophy className="w-12 h-12 text-white" />
                                </div>

                                <h2 className="text-4xl font-bold text-white mb-2">Quiz Completed!</h2>
                                <p className="text-white/60 mb-8">Here's how you performed</p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-black/40 rounded-2xl p-4 border border-white/10">
                                        <div className="text-3xl font-bold text-cyan-400 mb-1">{score}/{questions.length}</div>
                                        <div className="text-xs text-white/40 uppercase font-bold tracking-wider">Score</div>
                                    </div>
                                    <div className="bg-black/40 rounded-2xl p-4 border border-white/10">
                                        <div className="text-3xl font-bold text-purple-400 mb-1">{Math.round((score / questions.length) * 100)}%</div>
                                        <div className="text-xs text-white/40 uppercase font-bold tracking-wider">Accuracy</div>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Button
                                        onClick={() => setStep('setup')}
                                        className="flex-1 bg-white text-black hover:bg-gray-200 font-bold py-6 rounded-xl"
                                    >
                                        <RefreshCw className="w-5 h-5 mr-2" /> Try Another
                                    </Button>
                                    <Link href="/ai-tools/quiz-generator" className="flex-1">
                                        <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-white font-bold py-6 rounded-xl">
                                            Home
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

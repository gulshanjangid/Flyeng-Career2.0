"use client"

import { SiteHeader } from "@/components/site-header"
import { APTITUDE_DATA } from "@/lib/aptitude-data"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Brain, CheckCircle2, ChevronRight, HelpCircle, Lightbulb, RefreshCw, XCircle } from "lucide-react"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { useState, useEffect, Suspense } from "react"
import dynamicImport from "next/dynamic"

const EnhancedFooter = dynamicImport(() => import("@/components/enhanced-footer").then(mod => mod.EnhancedFooter), { ssr: false })

function PracticeSessionContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const categoryId = searchParams.get('category')
  const topicId = searchParams.get('topic')
  
  const [topicName, setTopicName] = useState("Loading...")
  const [question, setQuestion] = useState("")
  const [options, setOptions] = useState<string[]>([])
  const [correctAnswer, setCorrectAnswer] = useState("")
  const [explanation, setExplanation] = useState("")
  const [shortcut, setShortcut] = useState("")
  
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isGenerating, setIsGenerating] = useState(true)
  const [score, setScore] = useState(0)
  const [questionsAttempted, setQuestionsAttempted] = useState(0)

  // Mock AI Generator
  const generateQuestion = () => {
    setIsGenerating(true)
    setIsSubmitted(false)
    setSelectedOption(null)
    
    // Simulate API delay
    setTimeout(() => {
      // In a real app, this calls an LLM endpoint.
      if (topicId === "time-and-distance") {
         setQuestion("A train 200 meters long is running at a speed of 72 km/hr. How long will it take to cross a platform 300 meters long?")
         setOptions(["15 seconds", "20 seconds", "25 seconds", "30 seconds"])
         setCorrectAnswer("25 seconds")
         setExplanation("Total distance = Length of train + Length of platform = 200 + 300 = 500m. Speed = 72 km/hr = 72 * (5/18) = 20 m/s. Time = Distance / Speed = 500 / 20 = 25 seconds.")
         setShortcut("Convert speed directly: 72 = 20m/s. Total distance = 500. 500/20 = 25s.")
      } else if (topicId === "percentages") {
         setQuestion("The price of a commodity increases by 25%. By what percentage must a consumer reduce their consumption so that the expenditure remains the same?")
         setOptions(["15%", "20%", "25%", "30%"])
         setCorrectAnswer("20%")
         setExplanation("Let initial price be 100. New price = 125. To keep expenditure 100, consumption must drop by 25 on 125. (25/125) * 100 = 20%.")
         setShortcut("Use formula: (R / (100 + R)) * 100 = (25 / 125) * 100 = 20%.")
      } else {
         const t = APTITUDE_DATA[categoryId || "quant"]?.topics?.find(x => x.id === topicId)
         setQuestion(`Which of the following logically follows the pattern generated for ${t?.title || topicId}?`)
         setOptions(["Option A", "Option B", "Option C", "Option D"])
         setCorrectAnswer("Option B")
         setExplanation("This is a mock implementation. Normally, the AI generates a specific, highly detailed explanation here.")
         setShortcut("Look at the alternating sequence and jump straight to the conclusion.")
      }
      setIsGenerating(false)
    }, 1500)
  }

  useEffect(() => {
    if (categoryId && topicId && APTITUDE_DATA[categoryId]) {
      const t = APTITUDE_DATA[categoryId].topics.find(x => x.id === topicId)
      if (t) {
         setTopicName(t.title)
         generateQuestion()
      } else {
         router.push('/aptitude-prep/practice')
      }
    } else {
      router.push('/aptitude-prep/practice')
    }
  }, [categoryId, topicId, router])

  const handleSubmit = () => {
    if (!selectedOption) return;
    setIsSubmitted(true);
    setQuestionsAttempted(prev => prev + 1);
    if (selectedOption === correctAnswer) {
      setScore(prev => prev + 1);
    }
  }

  return (
    <div className="container mx-auto px-4 max-w-5xl py-12 relative z-10">
      
      {/* Session Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
        <div>
          <div className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
            <Link href="/aptitude-prep/practice" className="hover:text-white transition-colors">Practice</Link>
            <ChevronRight className="h-4 w-4 text-zinc-600" />
            <span className="text-purple-400 capitalize">{categoryId}</span>
          </div>
          <h1 className="text-2xl font-bold flex flex-wrap items-center gap-3">
             {topicName} <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">AI Arena</span>
          </h1>
        </div>
        
        <div className="flex gap-6 items-center">
          <div className="text-center px-6 border-l border-white/10">
            <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-1">Score</p>
            <p className="text-3xl font-mono font-bold text-emerald-400">{score}<span className="text-zinc-500 text-xl font-normal">/{questionsAttempted}</span></p>
          </div>
        </div>
      </div>

      {/* Main Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Question Area */}
        <div className="lg:col-span-2 space-y-6">
          <AnimatePresence mode="wait">
            {isGenerating ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="h-[500px] flex flex-col items-center justify-center bg-zinc-950/80 rounded-[2rem] border border-white/5 shadow-2xl"
              >
                <div className="relative mb-8">
                   <div className="absolute inset-0 bg-purple-500 blur-xl opacity-20 rounded-full animate-pulse" />
                   <RefreshCw className="h-12 w-12 text-purple-400 animate-spin relative z-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 text-center">Engine Generating...</h3>
                <p className="text-zinc-400 text-center max-w-sm font-light">Analyzing your skill level to construct a unique, tailored aptitude question.</p>
              </motion.div>
            ) : (
              <motion.div 
                key="question"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                className="bg-zinc-950/80 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl"
              >
                <div className="p-8 md:p-10 bg-gradient-to-br from-zinc-900/80 to-transparent border-b border-white/5">
                  <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
                    <span className="text-sm font-bold uppercase tracking-widest text-purple-400">Question {questionsAttempted + 1}</span>
                    <span className="flex items-center text-xs font-semibold tracking-wider uppercase px-3 py-1.5 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-full">
                       <HelpCircle className="w-3 h-3 mr-1.5" /> Dynamic Gen
                    </span>
                  </div>
                  <p className="text-xl md:text-2xl leading-relaxed text-white font-medium">
                    {question}
                  </p>
                </div>
                
                <div className="p-8 md:p-10 space-y-4">
                  {options.map((opt, idx) => {
                    const isSelected = selectedOption === opt
                    const isCorrect = isSubmitted && opt === correctAnswer
                    const isWrong = isSubmitted && isSelected && opt !== correctAnswer
                    
                    let bgClasses = "bg-zinc-900 border-white/5 hover:border-purple-500/50 hover:bg-zinc-800"
                    if (isSelected) bgClasses = "bg-purple-500/20 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.15)] ring-1 ring-purple-500/20"
                    if (isCorrect) bgClasses = "bg-emerald-500/20 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20 text-emerald-100"
                    if (isWrong) bgClasses = "bg-red-500/20 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.15)] ring-1 ring-red-500/20 text-red-100"

                    return (
                      <button
                        key={idx}
                        disabled={isSubmitted}
                        onClick={() => setSelectedOption(opt)}
                        className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${bgClasses} ${isSubmitted ? 'cursor-default' : 'cursor-pointer hover:-translate-y-0.5'}`}
                      >
                        <div className="flex items-center gap-5">
                          <div className={`h-10 w-10 rounded-xl flex items-center justify-center font-bold text-base transition-colors
                            ${isSelected && !isSubmitted ? 'bg-purple-500 text-white' : 'bg-black/40 text-zinc-400'}`}>
                            {String.fromCharCode(65 + idx)}
                          </div>
                          <span className="text-lg">{opt}</span>
                        </div>
                        
                        {isCorrect && <CheckCircle2 className="h-6 w-6 text-emerald-400" />}
                        {isWrong && <XCircle className="h-6 w-6 text-red-400" />}
                      </button>
                    )
                  })}
                </div>
                
                {!isSubmitted ? (
                  <div className="p-8 border-t border-white/5 bg-black/40 text-right">
                    <button
                      onClick={handleSubmit}
                      disabled={!selectedOption}
                      className="inline-flex flex-wrap items-center justify-center px-10 py-5 rounded-full bg-white text-black font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-200 transition-colors shadow-xl w-full sm:w-auto hover:scale-105 transform duration-300"
                    >
                      Submit Answer <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                ) : (
                  <div className="p-8 border-t border-white/5 bg-black/40 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <span className={`font-bold text-2xl flex items-center gap-3 ${selectedOption === correctAnswer ? 'text-emerald-400' : 'text-red-400'}`}>
                      {selectedOption === correctAnswer ? <><CheckCircle2 className="h-8 w-8"/> Perfectly Solved!</> : <><XCircle className="h-8 w-8"/> Incorrect.</>}
                    </span>
                    <button
                      onClick={generateQuestion}
                      className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold hover:from-purple-500 hover:to-pink-500 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 duration-300"
                    >
                      Next AI Question <RefreshCw className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* AI Insight Panel */}
        <div className="lg:col-span-1">
          <AnimatePresence>
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="sticky top-24 space-y-6"
              >
                <div className="p-8 rounded-[2rem] bg-zinc-950 border border-white/10 shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="p-3 bg-emerald-500/20 rounded-xl border border-emerald-500/20">
                      <Brain className="h-6 w-6 text-emerald-400" />
                    </div>
                    <h3 className="font-bold text-2xl text-white">AI Analysis</h3>
                  </div>
                  <p className="text-zinc-300 leading-relaxed font-light relative z-10 text-lg">
                    {explanation}
                  </p>
                </div>

                <div className="p-8 rounded-[2rem] bg-gradient-to-br from-purple-900/40 to-pink-900/20 border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)] relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl -mt-10 -mr-10" />
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="p-3 bg-pink-500/20 rounded-xl border border-pink-500/20">
                      <Lightbulb className="h-6 w-6 text-pink-400" />
                    </div>
                    <h3 className="font-bold text-2xl text-pink-100">Pro Trick</h3>
                  </div>
                  <p className="text-pink-100/90 leading-relaxed font-medium relative z-10 text-lg">
                    {shortcut}
                  </p>
                </div>
              </motion.div>
            )}
            
            {!isSubmitted && !isGenerating && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full min-h-[400px] flex flex-col items-center justify-center p-8 text-center rounded-[2rem] border-2 border-white/5 border-dashed bg-zinc-900/20">
                <Brain className="h-16 w-16 text-zinc-700 mb-6" />
                <h4 className="text-xl font-bold text-zinc-500 mb-2">Awaiting Submission</h4>
                <p className="text-zinc-500 font-light max-w-xs">Submit your answer to reveal detailed AI insights, error analysis, and time-saving shortcuts.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  )
}

export default function PracticeSessionPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans">
      <SiteHeader />
      <div className="pt-24 pb-16 relative">
         <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />
        <Suspense fallback={<div className="text-center py-32 text-zinc-500 text-lg">Initializing Intelligence Engine...</div>}>
          <PracticeSessionContent />
        </Suspense>
      </div>
      <EnhancedFooter />
    </main>
  )
}

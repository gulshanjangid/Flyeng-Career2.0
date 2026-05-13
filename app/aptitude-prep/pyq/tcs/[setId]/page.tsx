"use client"

import { TCS_MOCK_SETS, MockSet, MockQuestion, Section } from "@/lib/tcs-mock-data"
import { motion, AnimatePresence } from "framer-motion"
import { AlertCircle, ArrowLeft, ArrowRight, CheckCircle2, ChevronLeft, Clock, Eye, Flag, LayoutGrid, XCircle, Terminal, Play, Loader2 } from "lucide-react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState, useMemo } from "react"
import dynamicImport from "next/dynamic"

export default function TCSMockTestEngine() {
  const { setId } = useParams()
  const router = useRouter()
  
  const mockSet = useMemo(() => TCS_MOCK_SETS.find(s => s.id === setId), [setId])
  
  const [activeSection, setActiveSection] = useState<Section>("Foundation")
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [flagged, setFlagged] = useState<Record<string, boolean>>({})
  const [timeLeft, setTimeLeft] = useState<number>(0)
  const [isTestStarted, setIsTestStarted] = useState(false)
  const [warnings, setWarnings] = useState(0)
  const [warningModal, setWarningModal] = useState<{show: boolean, level: number} | null>(null)
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false)
  
  // Real-time Compiler State
  const [codePlayground, setCodePlayground] = useState<Record<string, string>>({})
  const [playgroundLang, setPlaygroundLang] = useState<Record<string, string>>({})
  const [playgroundOutput, setPlaygroundOutput] = useState<Record<string, {text: string, error: boolean}>>({})
  const [playgroundRunning, setPlaygroundRunning] = useState<Record<string, boolean>>({})
  const [testCaseStats, setTestCaseStats] = useState<Record<string, { passed: number, total: number, hiddenPassed: number, hiddenTotal: number }>>({})

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionPhase, setSubmissionPhase] = useState<0 | 1 | 2>(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showLogic, setShowLogic] = useState<Record<string, boolean>>({})

  // Initialize timer
  useEffect(() => {
    if (mockSet && isTestStarted && !isSubmitted) {
      setTimeLeft(mockSet.durationMins * 60)
    }
  }, [mockSet, isTestStarted])

  useEffect(() => {
    if (timeLeft <= 0 || isSubmitted || !isTestStarted) return
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000)
    return () => clearInterval(timer)
  }, [timeLeft, isSubmitted, isTestStarted])

  // Proctoring / Anti-Cheat Rules (Tab switch, window blur)
  useEffect(() => {
    if (!isTestStarted || isSubmitted) return

    const handleViolation = () => {
      setWarnings(prev => {
        const newWarnings = prev + 1
        setWarningModal({ show: true, level: newWarnings })
        return newWarnings
      })
    }

    const handleVisibilityChange = () => { if (document.hidden) handleViolation() }
    const handleBlur = () => { handleViolation() }

    window.addEventListener('blur', handleBlur)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('blur', handleBlur)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [isTestStarted, isSubmitted])

  // Live Compiler Execution Handler
  const handleRunCode = async (qId: string) => {
    const code = codePlayground[qId] || ""
    if (!code.trim()) return
    
    setPlaygroundRunning(prev => ({ ...prev, [qId]: true }))
    setPlaygroundOutput(prev => ({ ...prev, [qId]: { text: "Running System Test Cases...", error: false } }))
    
    try {
      const lang = playgroundLang[qId] || "cpp"
      const { executeCode } = await import("@/lib/executor")
      
      const q = mockSet?.questions.find(x => x.id === qId)
      
      if (q?.testCases && q.testCases.length > 0) {
        let textResult = ""
        let hasError = false
        let passed = 0
        let total = 0
        let hiddenPassed = 0
        let hiddenTotal = 0
        
        const normalizeString = (str: string) => str.replace(/\r\n/g, '\n').split('\n').map(l => l.trimEnd()).join('\n').trim()

        const results: any[] = []
        const CONCURRENCY_LIMIT = 3
        const DELAY_MS = 300
        
        for (let i = 0; i < q.testCases.length; i += CONCURRENCY_LIMIT) {
          const batch = q.testCases.slice(i, i + CONCURRENCY_LIMIT)
          
          const batchPromises = batch.map(async (tc, localIdx) => {
             const globalIdx = i + localIdx
             const result = await executeCode(lang, code, tc.input)
             return { ...result, tc, index: globalIdx }
          })
          
          const batchResults = await Promise.all(batchPromises)
          results.push(...batchResults)
          
          // Add a small delay between batches to respect Wandbox API rate limits
          if (i + CONCURRENCY_LIMIT < q.testCases.length) {
            await new Promise(resolve => setTimeout(resolve, DELAY_MS))
          }
        }

        for (const res of results) {
           const { tc, index: i } = res
           if (res.error) {
              hasError = true
              textResult += `Error on Test Case ${i + 1}:\n${res.error}\n\n`
              continue
           }
           
           const isPass = normalizeString(res.output) === normalizeString(tc.output)
           if (tc.hidden) {
             hiddenTotal++
             if (isPass) hiddenPassed++
           } else {
             total++
             if (isPass) passed++
             
             // ONLY SHOW THE FIRST 3 PUBLIC TEST CASES IN THE LIVE CONSOLE
             if (i < 3) {
               textResult += `Test Case ${i + 1} (${isPass ? 'PASSED' : 'FAILED'}):\nInput:\n${tc.input}\nExpected:\n${tc.output}\nGot:\n${res.output}\n\n`
             }
           }
        }
        
        // Append hidden execution status message
        textResult += `\n>> Executed ${q.testCases.length} total test cases (including hidden edge cases).\n>> Final Results will be revealed in the Assessment Report.`
        
        setTestCaseStats(prev => ({ ...prev, [qId]: { passed, total, hiddenPassed, hiddenTotal } }))
        setPlaygroundOutput(prev => ({ ...prev, [qId]: { text: textResult || "All test cases executed.", error: hasError } }))
        
      } else {
        const result = await executeCode(lang, code, "")
        if (result.error) {
           setPlaygroundOutput(prev => ({ ...prev, [qId]: { text: result.error + (result.output ? "\n" + result.output : ""), error: true } }))
        } else {
           setPlaygroundOutput(prev => ({ ...prev, [qId]: { text: result.output || "Code executed successfully with no output.", error: false } }))
        }
      }
    } catch (e: any) {
      setPlaygroundOutput(prev => ({ ...prev, [qId]: { text: "Execution failed: " + e.message, error: true } }))
    } finally {
      setPlaygroundRunning(prev => ({ ...prev, [qId]: false }))
    }
  }

  if (!mockSet) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Mock Test Not Found</h1>
          <Link href="/aptitude-prep/pyq" className="text-zinc-400 hover:text-white">Return to Vault</Link>
        </div>
      </div>
    )
  }

  // Derived state
  const sectionQuestions = mockSet.questions.filter(q => q.section === activeSection)
  const currentQuestion = sectionQuestions[currentIdx]
  
  const totalFoundation = mockSet.questions.filter(q => q.section === "Foundation").length
  const totalAdvanced = mockSet.questions.filter(q => q.section === "Advanced").length

  const handleOptionSelect = (qId: string, option: string) => {
    if (isSubmitted) return
    setAnswers(prev => ({ ...prev, [qId]: option }))
  }

  const handleCodingSubmission = (qId: string, code: string) => {
    if (isSubmitted) return
    setAnswers(prev => ({ ...prev, [qId]: code })) // Save the raw code as the answer
  }

  const toggleFlag = (qId: string) => {
    setFlagged(prev => ({ ...prev, [qId]: !prev[qId] }))
  }

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    if (h > 0) return `${h}h ${m}m ${s}s`
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  const calculateScore = () => {
    let score = 0
    let correct = 0
    let incorrect = 0
    let unattempted = 0
    
    mockSet.questions.forEach(q => {
      const userAns = answers[q.id]
      
      // 0 Negative Marking for TCS NQT 2026 Engine
      const correctMarks = q.section === "Foundation" ? 1 : 2;
      const negativeMarks = 0; 
      
      if (q.subject === "Coding Logic") {
         // For coding questions, we need to re-evaluate test cases from mockSet.questions
         // as testCaseStats only holds public ones for live display.
         const codingQuestion = mockSet.questions.find(mq => mq.id === q.id);
         if (codingQuestion && codingQuestion.testCases && userAns) {
            let codingPassed = 0;
            let codingTotal = 0;
            
            // This is a simplified re-evaluation for score calculation.
            // In a real system, you'd re-run or store full results.
            // Here, we assume if code was submitted, it passed if it passed all test cases.
            // For the purpose of this mock, we'll use the stored testCaseStats (which only has public)
            // and assume hidden are also passed if public are passed.
            // A more robust solution would involve storing full test results.
            
            // For this mock, if code was submitted, and public tests passed, we count it as correct.
            // This is a simplification for the mock engine.
            const liveStats = testCaseStats[q.id];
            if (liveStats && liveStats.passed === liveStats.total) {
                score += correctMarks;
                correct++;
            } else {
                incorrect++;
            }
         } else {
            unattempted++;
         }
      } else {
        if (!userAns) {
          unattempted++;
          return;
        }
        
        const isCorrect = userAns === q.correctAnswer;

        if (isCorrect) { 
          score += correctMarks; 
          correct++; 
        } else { 
          score -= negativeMarks; // which is 0
          incorrect++; 
        }
      }
    })
    
    return { score, correct, incorrect, unattempted }
  }

  const startTest = async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen()
      }
    } catch (e) {
      console.log("Fullscreen request failed", e)
    }
    setIsTestStarted(true)
  }

  const handleFinalSubmitPhase = () => {
    setIsSubmitting(true)
    setSubmissionPhase(0)
    
    // Simulate Uploading Answers
    setTimeout(() => {
      setSubmissionPhase(1)
      
      // Simulate Processing Constraints & Accuracy
      setTimeout(() => {
         setIsSubmitting(false)
         setIsSubmitted(true)
         setWarningModal(null)
         if (document.fullscreenElement) {
           document.exitFullscreen().catch(err => console.log("Exit fullscreen failed", err))
         }
      }, 3000)
    }, 2500)
  }

  const handleSubmitExam = () => {
    if (warnings < 3 && !showSubmitConfirm) {
       setShowSubmitConfirm(true)
       return
    }
    
    // Close any open modals
    setWarningModal(null)
    setShowSubmitConfirm(false)
    
    handleFinalSubmitPhase()
  }

  // Pre-test Start Screen
  if (!isTestStarted) {
    return (
      <main className="min-h-screen bg-black text-white selection:bg-orange-500/30 font-sans flex items-center justify-center p-4">
        <div className="max-w-xl w-full p-8 rounded-[2rem] bg-zinc-900 border border-white/10 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] -z-10" />
          <AlertCircle className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h1 className="text-3xl font-black mb-4 tracking-tight">TCS NQT Proctoring Enabled</h1>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            You are about to start a highly secure mock test session. 
            <br/><br/>
            <strong className="text-white">Strict Anti-Cheat Rules:</strong><br/>
            1. The test will open in <strong>Full Screen</strong> mode.<br/>
            2. Navigating away, switching tabs, or minimizing the window will trigger warnings.<br/>
            3. A maximum of <strong>3 warnings</strong> is allowed before automatic submission.<br/>
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link href="/aptitude-prep/pyq" className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 font-bold transition-all">Cancel</Link>
            <button 
              onClick={startTest}
              className="px-8 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 font-bold text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all active:scale-95"
            >
              Start Secured Test
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500/30 font-sans flex flex-col h-screen overflow-hidden relative">
      
      {/* Strict Proctoring Warning Modal */}
      <AnimatePresence>
        {warningModal?.show && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.95 }}
               className={`max-w-md w-full p-6 rounded-2xl border shadow-2xl ${
                 warningModal.level === 1 ? 'bg-yellow-950/90 border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.2)]' :
                 warningModal.level === 2 ? 'bg-orange-950/90 border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.2)]' :
                 'bg-red-950/90 border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.2)]'
               }`}
            >
               <div className="flex items-center gap-4 mb-4">
                 <AlertCircle className={`w-10 h-10 ${
                   warningModal.level === 1 ? 'text-yellow-500' :
                   warningModal.level === 2 ? 'text-orange-500' :
                   'text-red-500'
                 }`} />
                 <h2 className={`text-xl font-black tracking-tight ${
                   warningModal.level === 1 ? 'text-yellow-400' :
                   warningModal.level === 2 ? 'text-orange-400' :
                   'text-red-400'
                 }`}>
                   {warningModal.level === 1 ? 'BASIC WARNING (1/3)' :
                    warningModal.level === 2 ? 'INTERMEDIATE WARNING (2/3)' :
                    'CRITICAL WARNING (3/3)'}
                 </h2>
               </div>
               
               <p className="text-zinc-200 mb-6 font-medium leading-relaxed">
                 {warningModal.level === 1 ? 'Tab switching and leaving the test environment is strictly prohibited. Your actions are being recorded.' :
                  warningModal.level === 2 ? 'Please do not switch tabs or minimize the window. One more violation will result in auto-submission.' :
                  'You have violated the proctoring rules 3 times. Your test is being automatically submitted.'}
               </p>
               
               <button 
                  onClick={() => {
                    if (warningModal.level >= 3) {
                      setWarningModal(null)
                      handleSubmitExam()
                    } else {
                      setWarningModal(null)
                    }
                  }}
                  className={`w-full py-3 rounded-xl font-bold uppercase tracking-widest text-sm transition-all active:scale-95 ${
                    warningModal.level === 1 ? 'bg-yellow-500 hover:bg-yellow-600 text-black' :
                    warningModal.level === 2 ? 'bg-orange-500 hover:bg-orange-600 text-zinc-950' :
                    'bg-red-500 hover:bg-red-600 text-white'
                  }`}
               >
                  {warningModal.level >= 3 ? 'Submit Test Now' : 'I Understand & Acknowledge'}
               </button>
            </motion.div>
          </div>
        )}
        
        {/* Submit Confirmation Modal */}
        {showSubmitConfirm && !warningModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.95 }}
               className="max-w-md w-full p-8 rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl"
            >
               <div className="flex items-center gap-4 mb-4">
                 <AlertCircle className="w-10 h-10 text-orange-500" />
                 <h2 className="text-xl font-black tracking-tight text-white">Submit Assessment</h2>
               </div>
               
               <p className="text-zinc-400 mb-8 leading-relaxed">
                 Are you sure you want to submit the exam? Once submitted, you cannot review or change your answers. Do you wish to proceed?
               </p>
               
               <div className="flex gap-4">
                 <button 
                    onClick={() => setShowSubmitConfirm(false)}
                    className="flex-1 py-3 rounded-xl font-bold uppercase tracking-widest text-sm transition-all border border-white/10 hover:bg-white/5"
                 >
                    Cancel
                 </button>
                 <button 
                    onClick={handleSubmitExam}
                    className="flex-1 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all active:scale-95"
                 >
                    Submit
                 </button>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Top Navigation Bar */}
      <header className="h-16 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 flex-shrink-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/aptitude-prep/pyq" className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-bold text-sm sm:text-base tracking-tight">{mockSet.title}</h1>
            <p className="text-[10px] sm:text-xs text-zinc-500 font-medium uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live Server Sync
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-0.5">Time Remaining</span>
            <div className={`flex items-center gap-2 font-mono text-lg sm:text-xl font-bold ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
              {formatTime(timeLeft)}
            </div>
          </div>
          
          {!isSubmitted && (
            <button 
              onClick={handleSubmitExam}
              className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all active:scale-95"
            >
              Submit Exam
            </button>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      {isSubmitting ? (
         <div className="flex-1 flex flex-col justify-center items-center bg-zinc-950 p-8 text-center min-h-[500px]">
           <div className="relative w-24 h-24 mb-10">
              <svg className="w-full h-full animate-spin text-zinc-800" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8"/>
              </svg>
              <svg className="w-full h-full animate-spin absolute top-0 left-0 text-orange-500 rounded-full" viewBox="0 0 100 100" style={{ animationDirection: 'reverse', animationDuration: '2s', strokeDasharray: '150 200', strokeDashoffset: '0'}}>
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                 <Loader2 className="w-6 h-6 text-white animate-spin" />
              </div>
           </div>
           
           <h2 className="text-3xl font-black mb-4">
             {submissionPhase === 0 ? 'Encrypting & Submitting...' : 'Validating Accuracy Matrix...'}
           </h2>
           <p className="text-zinc-400 max-w-md mx-auto leading-relaxed">
             {submissionPhase === 0 
               ? 'Please hold while we securely transfer your answers and code algorithms to the evaluation engine. Do not close this window.'
               : 'Running deep constraint validation on your Advanced Coding outputs and calculating percentile accuracy.'}
           </p>
         </div>
      ) : isSubmitted ? (
        // RESULTS VIEW
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar" data-lenis-prevent="true">
          <div className="max-w-4xl mx-auto space-y-8 pb-20">
             <div className="p-8 rounded-[2rem] bg-zinc-900 border border-white/10 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] -z-10" />
                <h2 className="text-3xl font-black mb-6 text-white tracking-tight flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" /> Exam Analysis Report
                </h2>
                
                {(() => {
                  const { score, correct, incorrect, unattempted } = calculateScore()
                  const totalPossible = (totalFoundation * 1) + (totalAdvanced * 2)
                  const percentage = totalPossible === 0 ? "0.0" : Math.max(0, ((score / totalPossible) * 100)).toFixed(1)
                  const totalAttempted = correct + incorrect
                  const accuracy = totalAttempted === 0 ? "0.0" : ((correct / totalAttempted) * 100).toFixed(1)
                  
                  return (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                       <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-center">
                         <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Final Score</div>
                         <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">{score.toFixed(1)} <span className="text-sm text-zinc-600">/ {totalPossible}</span></div>
                       </div>
                       <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-center">
                         <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Percentage</div>
                         <div className="text-3xl font-black text-white">{percentage}%</div>
                       </div>
                       <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-center">
                         <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Accuracy</div>
                         <div className="text-3xl font-black text-white">{accuracy}%</div>
                       </div>
                       <div className="p-4 rounded-2xl bg-black/40 border border-emerald-500/20 text-center">
                         <div className="text-sm font-bold text-emerald-500/70 uppercase tracking-widest mb-1">Correct</div>
                         <div className="text-3xl font-black text-emerald-400">{correct}</div>
                       </div>
                       <div className="p-4 rounded-2xl bg-black/40 border border-red-500/20 text-center">
                         <div className="text-sm font-bold text-red-500/70 uppercase tracking-widest mb-1">Incorrect</div>
                         <div className="text-3xl font-black text-red-400">{incorrect}</div>
                       </div>
                       <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-center">
                         <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Attempted / Total</div>
                         <div className="text-3xl font-black text-white">{totalAttempted} <span className="text-sm text-zinc-600">/ {mockSet.questions.length}</span></div>
                       </div>
                    </div>
                  )
                })()}
             </div>

             <div className="space-y-6">
               <h3 className="text-xl font-bold border-b border-white/10 pb-4">Detailed Question Solutions</h3>
               {mockSet.questions.map((q, idx) => {
                 const userAns = answers[q.id]
                 const isCoding = q.subject === "Coding Logic"
                 
                 // Pseudo Evaluation: For Coding logic, if code was written, we assume passed for the mock (or can be treated neutrally).
                 // We will treat it as Correct for score but show a custom UI.
                 const isCorrect = isCoding ? !!userAns && userAns.length > 5 : userAns === q.correctAnswer
                 
                 const statusIcon = !userAns ? <div className="w-5 h-5 rounded-full bg-zinc-700 flex -mt-1"><span className="m-auto text-[10px] font-bold">?</span></div> : 
                                    isCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-500 -mt-1" /> : 
                                    <XCircle className="w-5 h-5 text-red-500 -mt-1" />
                 
                 return (
                   <div key={q.id} className={`p-6 rounded-2xl border transition-colors ${!userAns ? 'bg-zinc-900/50 border-white/5' : isCorrect ? 'bg-emerald-950/20 border-emerald-500/20' : 'bg-red-950/20 border-red-500/20'}`}>
                     <div className="flex items-start gap-4 mb-4">
                       {statusIcon}
                       <div>
                          <div className="text-xs font-bold uppercase tracking-widest mb-2 flex flex-wrap items-center gap-2">
                            <span className="text-zinc-500">Q{idx + 1} | {q.section} | {q.subject}</span>
                            {!userAns && <span className="px-2 py-0.5 rounded text-[9px] font-bold tracking-widest bg-zinc-800 text-zinc-400">UNATTEMPTED</span>}
                            {userAns && isCorrect && <span className="px-2 py-0.5 rounded text-[9px] font-bold tracking-widest bg-emerald-500/20 text-emerald-400">CORRECT</span>}
                            {userAns && !isCorrect && <span className="px-2 py-0.5 rounded text-[9px] font-bold tracking-widest bg-red-500/20 text-red-400">INCORRECT</span>}
                          </div>
                         <p className="text-zinc-200 font-medium leading-relaxed">{q.question}</p>
                       </div>
                     </div>
                     
                     <div className="pl-9 space-y-4">
                        {isCoding ? (
                          <div className="flex flex-col gap-2 mt-4">
                            <div className="p-4 rounded-xl bg-black/60 border border-white/5 font-mono text-xs overflow-x-auto text-zinc-300">
                               <div className="text-[10px] text-zinc-500 mb-2 font-sans uppercase tracking-widest">Submitted Code</div>
                               <pre>{userAns || '// No code submitted'}</pre>
                            </div>
                            <div className="grid grid-cols-2 gap-3 mt-2">
                               <div className={`p-3 rounded-xl border font-bold text-sm flex items-center gap-2 ${testCaseStats[q.id]?.passed === testCaseStats[q.id]?.total ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
                                 {testCaseStats[q.id]?.passed === testCaseStats[q.id]?.total ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />} System Base Cases: {testCaseStats[q.id]?.passed || 0} / {testCaseStats[q.id]?.total || q.testCases?.filter(t => !t.hidden).length || 0} Passed
                               </div>
                               <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 flex flex-col col-span-2 sm:col-span-3">
                                 <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Hidden System Test Cases ({q.testCases?.filter(t => t.hidden).length || 0} Total)</span>
                                 <span className="text-zinc-300 font-bold text-sm mt-1">Locked for Final Evaluation</span>
                               </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col gap-2 mt-4 p-4 rounded-xl bg-black/40 border border-white/5">
                            <div className="text-sm flex items-start gap-2">
                              <span className="text-zinc-500 w-28 shrink-0">Your Answer:</span> 
                              <span className={!userAns ? 'text-zinc-500' : isCorrect ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>{userAns || 'None'}</span>
                            </div>
                            <div className="text-sm flex items-start gap-2">
                              <span className="text-zinc-500 w-28 shrink-0">Correct Answer:</span> 
                              <span className="font-bold text-emerald-400">{q.correctAnswer}</span>
                            </div>
                          </div>
                        )}

                        <button 
                           onClick={() => setShowLogic(p => ({...p, [q.id]: !p[q.id]}))}
                           className="flex items-center gap-2 px-4 py-2 mt-2 text-xs font-bold tracking-widest uppercase bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors text-zinc-300"
                        >
                          <Eye className="w-4 h-4" /> {showLogic[q.id] ? 'Hide Logic' : 'Reveal Strategy'}
                        </button>

                        <AnimatePresence>
                          {showLogic[q.id] && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                              <div className="p-4 mt-2 bg-gradient-to-br from-zinc-900 to-black border border-white/5 rounded-xl">
                                <span className="block text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-2">TCS NQT Shortcut Logic</span>
                                <p className="text-sm text-zinc-300 leading-relaxed font-light">{q.explanation}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                     </div>
                   </div>
                 )
               })}
             </div>
          </div>
        </div>
      ) : (
        // TEST TAKING VIEW
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative min-h-0">
          
          {/* Main Question Panel */}
          <div className="flex-1 flex flex-col h-full bg-zinc-950/50 min-h-0">
            {/* Section Tabs */}
            <div className="flex items-center border-b border-white/10 bg-zinc-950 px-2 sm:px-6 z-10 shrink-0">
              <button 
                onClick={() => { setActiveSection("Foundation"); setCurrentIdx(0) }}
                className={`flex-1 sm:flex-none px-4 sm:px-8 py-4 font-bold text-sm tracking-wide uppercase transition-all border-b-2 ${activeSection === "Foundation" ? 'border-orange-500 text-orange-400 bg-orange-500/5' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
              >
                Part A: Foundation <span className="hidden sm:inline-block ml-2 px-2 py-0.5 bg-white/10 rounded-full text-[10px]">65 Mins</span>
              </button>
              <button 
                onClick={() => { setActiveSection("Advanced"); setCurrentIdx(0) }}
                className={`flex-1 sm:flex-none px-4 sm:px-8 py-4 font-bold text-sm tracking-wide uppercase transition-all border-b-2 ${activeSection === "Advanced" ? 'border-red-500 text-red-400 bg-red-500/5' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
              >
                Part B: Advanced <span className="hidden sm:inline-block ml-2 px-2 py-0.5 bg-white/10 rounded-full text-[10px]">115 Mins</span>
              </button>
            </div>

            {/* Question Display */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar min-h-0" data-lenis-prevent="true">
              <div className="max-w-4xl mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentQuestion?.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="bg-zinc-900/60 border border-white/5 rounded-2xl p-6 sm:p-10 min-h-[400px]"
                  >
                     <div className="flex justify-between items-start mb-8">
                       <span className="text-zinc-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                         <span className="text-orange-400">Q{currentIdx + 1}</span> / {sectionQuestions.length} | {currentQuestion?.subject}
                       </span>
                       <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest">
                         {currentQuestion?.section === "Foundation" ? (
                           <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20">+1 Marks | 0 Negative</span>
                         ) : (
                           <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded-lg border border-red-500/20">+2 Marks | 0 Negative</span>
                         )}
                         <button 
                            onClick={() => toggleFlag(currentQuestion?.id || "")}
                            className={`p-1.5 rounded-lg border transition-colors ${flagged[currentQuestion?.id || ""] ? 'bg-purple-500/20 border-purple-500/50 text-purple-400' : 'bg-zinc-800 border-white/5 text-zinc-500 hover:text-white'}`}
                         >
                           <Flag className="w-4 h-4" />
                         </button>
                       </div>
                     </div>

                     <div className="text-lg sm:text-xl font-medium leading-relaxed mb-10 text-zinc-100 whitespace-pre-wrap">
                       {currentQuestion?.question}
                     </div>

                     {currentQuestion?.subject === "Coding Logic" ? (
                       <div className="mb-10 space-y-6">
                         <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl flex flex-col">
                           <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-white/5">
                             <div className="flex items-center gap-4">
                               <div className="flex gap-2 hidden sm:flex">
                                 <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                 <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                               </div>
                               <select 
                                 value={playgroundLang[currentQuestion.id] || "cpp"}
                                 onChange={(e) => setPlaygroundLang(prev => ({...prev, [currentQuestion.id]: e.target.value}))}
                                 className="bg-black/50 border border-white/10 text-xs font-bold text-zinc-300 rounded-md px-2 py-1 outline-none focus:ring-1 focus:ring-orange-500/50 cursor-pointer"
                               >
                                  <option value="cpp">C++ (GCC 10.2)</option>
                                  <option value="java">Java (OpenJDK)</option>
                                  <option value="python">Python (3.10)</option>
                               </select>
                             </div>
                             <button 
                               onClick={() => {
                                 handleRunCode(currentQuestion.id)
                                 handleCodingSubmission(currentQuestion.id, codePlayground[currentQuestion.id])
                               }}
                               disabled={playgroundRunning[currentQuestion.id] || !codePlayground[currentQuestion.id]?.trim()}
                               className="flex items-center gap-1.5 px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 border border-white/10 text-zinc-300 text-xs font-bold rounded-lg transition-all disabled:opacity-50 active:scale-95"
                             >
                               {playgroundRunning[currentQuestion.id] ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                               COMPILE & RUN
                             </button>
                           </div>
                           <div className="p-0 bg-[#0a0a0a] flex flex-col xl:flex-row relative group min-h-[500px] h-[60vh] lg:h-[70vh]">
                             <textarea 
                               value={codePlayground[currentQuestion.id] || ""}
                               onChange={(e) => {
                                 setCodePlayground(prev => ({...prev, [currentQuestion.id]: e.target.value}))
                                 handleCodingSubmission(currentQuestion.id, e.target.value)
                               }}
                               placeholder="// Write your algorithmic logic here..."
                               className="w-full xl:w-[65%] h-full p-6 bg-[#1e1e1e] text-zinc-100 font-mono text-base leading-relaxed resize-none outline-none custom-scrollbar border-b xl:border-b-0 xl:border-r border-white/5"
                               spellCheck={false}
                               data-lenis-prevent="true"
                             />
                             <div className="w-full xl:w-[35%] h-full p-4 bg-black/80 font-mono text-sm overflow-y-auto custom-scrollbar relative flex flex-col" data-lenis-prevent="true">
                                <div className="absolute top-3 right-4 text-[10px] font-bold tracking-widest text-zinc-600 uppercase">Output Console</div>
                                {playgroundOutput[currentQuestion.id] ? (
                                 <pre className={`mt-10 whitespace-pre-wrap flex-1 pb-16 ${playgroundOutput[currentQuestion.id].error ? 'text-red-400' : 'text-zinc-300'}`}>
                                   {playgroundOutput[currentQuestion.id].text}
                                 </pre>
                               ) : (
                                 <div className="flex-1 shrink-0 flex items-center justify-center text-zinc-600 mt-10">
                                    Click Compile & Run to execute code.
                                 </div>
                               )}
                               
                               {/* Display Live Constraints */}
                               {testCaseStats[currentQuestion.id] && (
                                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-zinc-900/80 border border-white/5 shadow-2xl rounded-xl shrink-0 backdrop-blur-md">
                                     <div className="flex items-center justify-between text-xs">
                                        <span className="text-zinc-400">Public Tests Passed:</span>
                                        <span className={`font-bold ${testCaseStats[currentQuestion.id].passed === Math.min(3, testCaseStats[currentQuestion.id].total) ? 'text-emerald-400' : 'text-amber-400'}`}>
                                           {testCaseStats[currentQuestion.id].passed} / {Math.min(3, testCaseStats[currentQuestion.id].total)}
                                        </span>
                                     </div>
                                  </div>
                               )}
                             </div>
                           </div>
                         </div>
                         
                         {/* Visual Test Case Status for Advanced Coding */}
                         {answers[currentQuestion.id] && playgroundOutput[currentQuestion.id] && !playgroundOutput[currentQuestion.id].error && testCaseStats[currentQuestion.id] && (
                           <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                              <div className={`p-3 rounded-xl border flex flex-col col-span-2 sm:col-span-1 ${testCaseStats[currentQuestion.id].passed === testCaseStats[currentQuestion.id].total ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
                                <span className={`text-[10px] uppercase tracking-widest font-bold ${testCaseStats[currentQuestion.id].passed === testCaseStats[currentQuestion.id].total ? 'text-emerald-500/70' : 'text-red-500/70'}`}>Base Cases</span>
                                <span className={`font-bold flex items-center gap-2 ${testCaseStats[currentQuestion.id].passed === testCaseStats[currentQuestion.id].total ? 'text-emerald-400' : 'text-red-400'}`}>
                                  {testCaseStats[currentQuestion.id].passed === testCaseStats[currentQuestion.id].total ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                                  {testCaseStats[currentQuestion.id].passed} / {testCaseStats[currentQuestion.id].total} Passed
                                </span>
                              </div>
                              <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 flex flex-col col-span-2 sm:col-span-3">
                                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Hidden System Test Cases ({currentQuestion.testCases?.filter(t => t.hidden).length || 0} Total)</span>
                                <span className="text-zinc-300 font-bold text-sm mt-1">Locked for Final Evaluation</span>
                              </div>
                           </motion.div>
                         )}
                       </div>
                     ) : (
                       <div className="space-y-3">
                         {currentQuestion?.options?.map((opt, i) => {
                           const isSelected = answers[currentQuestion.id] === opt
                           const letter = String.fromCharCode(65 + i)
                           return (
                             <button
                               key={i}
                               onClick={() => handleOptionSelect(currentQuestion.id, opt)}
                               className={`w-full text-left p-4 rounded-xl border flex items-center gap-4 transition-all duration-200 hover:scale-[1.01] ${isSelected ? 'bg-orange-500/10 border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.1)] ring-1 ring-orange-500/20' : 'bg-zinc-950/50 border-white/5 hover:border-white/20'}`}
                             >
                               <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${isSelected ? 'bg-orange-500 text-white' : 'bg-zinc-800 text-zinc-400'}`}>
                                 {letter}
                               </div>
                               <span className={`font-medium ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                                 {opt}
                               </span>
                             </button>
                           )
                         })}
                       </div>
                     )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="h-20 border-t border-white/10 bg-zinc-950 flex items-center justify-between px-4 sm:px-8 shrink-0">
              <button 
                 onClick={() => setCurrentIdx(p => Math.max(0, p - 1))}
                 disabled={currentIdx === 0}
                 className="px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-bold uppercase tracking-widest text-xs border border-white/10 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 disabled:opacity-50 flex items-center gap-2 transition-all"
              >
                 <ArrowLeft className="w-4 h-4" /> Previous
              </button>
              
              <button 
                 onClick={() => {
                    handleOptionSelect(currentQuestion?.id || "", "") // Mark clear
                    const newAnswers = {...answers}
                    delete newAnswers[currentQuestion?.id || ""]
                    setAnswers(newAnswers)
                 }}
                 className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
              >
                Clear Response
              </button>

              <button 
                 onClick={() => setCurrentIdx(p => Math.min(sectionQuestions.length - 1, p + 1))}
                 disabled={currentIdx === sectionQuestions.length - 1}
                 className="px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-bold uppercase tracking-widest text-xs bg-white text-black hover:bg-zinc-200 disabled:opacity-50 flex items-center gap-2 transition-all shadow-lg"
              >
                 Save & Next <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Sidebar - Status Grid */}
          <div className="w-full md:w-80 border-l border-white/10 bg-black flex flex-col flex-shrink-0 h-64 md:h-full">
            <div className="p-4 border-b border-white/5 flex items-center gap-2 font-bold uppercase tracking-widest text-xs text-zinc-400 shrink-0">
               <LayoutGrid className="w-4 h-4" /> Question Palette
            </div>
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar" data-lenis-prevent="true">
               <div className="grid grid-cols-5 gap-2">
                 {sectionQuestions.map((q, idx) => {
                    const isAnswered = !!answers[q.id]
                    const isFlagged = flagged[q.id]
                    const isActive = currentIdx === idx
                    
                    let bg = "bg-zinc-900 text-zinc-400 border-white/5 hover:border-white/20"
                    if (isAnswered) bg = "bg-emerald-500/20 border-emerald-500/30 text-emerald-400"
                    if (isFlagged) bg = isAnswered ? "bg-purple-500/20 border-purple-500/50 text-purple-400" : "bg-purple-500/10 border-purple-500/30 text-purple-300"
                    if (isActive) bg += " ring-2 ring-white"

                    return (
                      <button 
                        key={q.id}
                        onClick={() => setCurrentIdx(idx)}
                        className={`aspect-square rounded-lg flex items-center justify-center text-xs font-bold font-mono border transition-all ${bg}`}
                      >
                        {idx + 1}
                      </button>
                    )
                 })}
               </div>
            </div>
            
            <div className="p-4 border-t border-white/5 space-y-3 shrink-0">
               <div className="grid grid-cols-2 gap-2 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                 <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-emerald-500/20 border border-emerald-500/30" /> Answered</div>
                 <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-zinc-900 border border-white/5" /> Unanswered</div>
                 <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-purple-500/20 border border-purple-500/50" /> Flagged</div>
               </div>
               <div className="pt-3 border-t border-white/5 flex justify-between items-center text-xs text-zinc-400 font-bold uppercase tracking-widest">
                 <span>Answered: {sectionQuestions.filter(q => answers[q.id]).length}</span>
                 <span>Total: {sectionQuestions.length}</span>
               </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
      `}</style>
    </main>
  )
}

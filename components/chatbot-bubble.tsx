"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
import { 
  Send, X, Loader2, Sparkles, MessageCircle, ChevronDown, 
  Volume2, VolumeX, Maximize2, Minimize2, Bot, User, 
  Lightbulb, ArrowRight, RefreshCw, Settings, Zap, Wand2,
  BookOpen, Code, FileText, Target, Briefcase, GraduationCap,
  Rocket, Star, Heart, Coffee, Brain, Trophy, Flame, Gem, 
  Crown, Mic, BarChart3, Trash2, Database, History, Cpu, MessageSquare
} from 'lucide-react'
import { motion, AnimatePresence, useSpring } from "framer-motion"
import { getPageContext, getQuickActions, type QuickAction, type PageContext } from "@/lib/website-knowledge"

// import { courseData } from "@/lib/course-data" <-- REMOVED FOR PERFORMANCE

// ============= TYPES =============
interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  reactions?: string[]
}

interface UserMemory {
  id: string
  name?: string
  interests?: string[]
  careerGoal?: string
  skillLevel?: 'beginner' | 'intermediate' | 'advanced'
  visitedTools?: string[]
  lastVisit?: string
  totalMessages?: number
  preferences?: { aiMood?: 'helpful' | 'excited' | 'professional'; soundEnabled?: boolean }
}

interface DynamicTip {
  id: string
  icon: any
  title: string
  subtitle: string
  gradient: string
  category: string
}

// ============= UTILITIES =============
const generateId = () => Math.random().toString(36).substring(2, 9)

const getUserId = (): string => {
  if (typeof window === 'undefined') return 'server'
  let userId = localStorage.getItem('flyeng_user_id')
  if (!userId) {
    userId = `user_${generateId()}_${Date.now()}`
    localStorage.setItem('flyeng_user_id', userId)
  }
  return userId
}

interface ChatSession {
  id: string
  messages: Message[]
  startedAt: Date
  lastMessageAt: Date
  title: string
}

const MemoryManager = {
  getMemory: (): UserMemory => {
    if (typeof window === 'undefined') return { id: 'server' }
    const stored = localStorage.getItem('flyeng_user_memory')
    if (stored) try { return JSON.parse(stored) } catch (e) { return { id: getUserId() } }
    return { id: getUserId() }
  },
  saveMemory: (memory: UserMemory) => { if (typeof window !== 'undefined') localStorage.setItem('flyeng_user_memory', JSON.stringify(memory)) },
  updateMemory: (updates: Partial<UserMemory>) => {
    const current = MemoryManager.getMemory()
    const updated = { ...current, ...updates }
    MemoryManager.saveMemory(updated)
    return updated
  },
  getConversationHistory: (): Message[] => {
    if (typeof window === 'undefined') return []
    const stored = localStorage.getItem('flyeng_conversation_history')
    if (stored) try { return JSON.parse(stored).map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) })) } catch (e) { return [] }
    return []
  },
  saveConversationHistory: (messages: Message[]) => {
    if (typeof window !== 'undefined') localStorage.setItem('flyeng_conversation_history', JSON.stringify(messages.slice(-50)))
  },
  clearHistory: () => { if (typeof window !== 'undefined') localStorage.removeItem('flyeng_conversation_history') },
  // Session Management
  getAllSessions: (): ChatSession[] => {
    if (typeof window === 'undefined') return []
    const stored = localStorage.getItem('flyeng_chat_sessions')
    if (stored) try { 
      return JSON.parse(stored).map((s: any) => ({ 
        ...s, 
        startedAt: new Date(s.startedAt), 
        lastMessageAt: new Date(s.lastMessageAt),
        messages: s.messages.map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) }))
      })) 
    } catch (e) { return [] }
    return []
  },
  saveSession: (session: ChatSession) => {
    if (typeof window === 'undefined') return
    const sessions = MemoryManager.getAllSessions()
    const existingIndex = sessions.findIndex(s => s.id === session.id)
    if (existingIndex >= 0) {
      sessions[existingIndex] = session
    } else {
      sessions.unshift(session)
    }
    // Keep only last 20 sessions
    localStorage.setItem('flyeng_chat_sessions', JSON.stringify(sessions.slice(0, 20)))
  },
  deleteSession: (sessionId: string) => {
    if (typeof window === 'undefined') return
    const sessions = MemoryManager.getAllSessions().filter(s => s.id !== sessionId)
    localStorage.setItem('flyeng_chat_sessions', JSON.stringify(sessions))
  },
  createNewSession: (): ChatSession => {
    const id = `session_${generateId()}_${Date.now()}`
    return { id, messages: [], startedAt: new Date(), lastMessageAt: new Date(), title: 'New Chat' }
  },
  generateSessionTitle: (messages: Message[]): string => {
    if (messages.length === 0) return 'New Chat'
    const firstUserMsg = messages.find(m => m.role === 'user')
    if (firstUserMsg) {
      const title = firstUserMsg.content.slice(0, 30)
      return title.length < firstUserMsg.content.length ? title + '...' : title
    }
    return 'New Chat'
  },
  extractInsights: (messages: Message[]): Partial<UserMemory> => {
    const allContent = messages.map(m => m.content.toLowerCase()).join(' ')
    const interests: string[] = []
    if (allContent.includes('python') || allContent.includes('programming')) interests.push('Programming')
    if (allContent.includes('resume')) interests.push('Resume Building')
    if (allContent.includes('interview')) interests.push('Interview Prep')
    if (allContent.includes('dsa') || allContent.includes('algorithm')) interests.push('DSA')
    if (allContent.includes('frontend') || allContent.includes('react')) interests.push('Frontend')
    if (allContent.includes('backend')) interests.push('Backend')
    
    let skillLevel: 'beginner' | 'intermediate' | 'advanced' | undefined
    if (allContent.includes('beginner') || allContent.includes('new to')) skillLevel = 'beginner'
    else if (allContent.includes('experienced')) skillLevel = 'advanced'
    
    let careerGoal: string | undefined
    if (allContent.includes('software developer') || allContent.includes('sde')) careerGoal = 'Software Developer'
    else if (allContent.includes('frontend developer')) careerGoal = 'Frontend Developer'
    else if (allContent.includes('data scientist')) careerGoal = 'Data Scientist'
    
    return { interests: interests.length > 0 ? [...new Set(interests)] : undefined, skillLevel, careerGoal }
  }
}

// ============= COMPREHENSIVE TIPS FOR EVERY PAGE =============
const pageTipsDatabase: Record<string, DynamicTip[]> = {
  // ===== COURSES - LEARNING FOCUSED ONLY =====
  '/courses': [
    { id: 'c1', icon: BookOpen, title: "Stay consistent", subtitle: "1 lesson daily = mastery", gradient: "from-blue-500 to-cyan-600", category: "📚 Learning" },
    { id: 'c2', icon: Brain, title: "Take notes", subtitle: "Retention increases 50%", gradient: "from-purple-500 to-indigo-600", category: "🧠 Study" },
    { id: 'c3', icon: Target, title: "Practice along", subtitle: "Code while watching", gradient: "from-green-500 to-emerald-600", category: "🎯 Practice" },
    { id: 'c4', icon: Trophy, title: "Complete modules", subtitle: "Don't skip ahead", gradient: "from-yellow-500 to-orange-600", category: "🏆 Progress" },
    { id: 'c5', icon: Coffee, title: "Take breaks", subtitle: "Pomodoro technique", gradient: "from-amber-500 to-orange-600", category: "☕ Wellness" },
  ],
  
  // ===== HOMEPAGE =====
  '/': [
    { id: 'h1', icon: Rocket, title: "Start your journey!", subtitle: "12+ AI tools await", gradient: "from-cyan-500 to-blue-600", category: "🚀 Start" },
    { id: 'h2', icon: Trophy, title: "50,000+ students", subtitle: "landed dream jobs", gradient: "from-yellow-500 to-orange-600", category: "🏆 Success" },
    { id: 'h3', icon: Gem, title: "Pro at ₹99/month", subtitle: "Unlock everything", gradient: "from-purple-500 to-pink-600", category: "💎 Offer" },
    { id: 'h4', icon: Star, title: "4.9★ rated platform", subtitle: "by 10K+ users", gradient: "from-amber-500 to-orange-600", category: "⭐ Rating" },
    { id: 'h5', icon: Target, title: "Land dream job", subtitle: "in 90 days", gradient: "from-green-500 to-emerald-600", category: "🎯 Goal" },
    { id: 'h6', icon: Brain, title: "AI-powered tools", subtitle: "Smart career guidance", gradient: "from-purple-500 to-indigo-600", category: "🧠 AI" },
  ],
  
  // ===== AI TOOLS HUB =====
  '/ai-tools': [
    { id: 't1', icon: FileText, title: "Resume first", subtitle: "then interviews!", gradient: "from-cyan-500 to-blue-600", category: "📄 Strategy" },
    { id: 't2', icon: Mic, title: "Mock Interview", subtitle: "AI-powered practice", gradient: "from-rose-500 to-pink-600", category: "🎤 Featured" },
    { id: 't3', icon: Target, title: "Career Roadmap", subtitle: "Personalized path", gradient: "from-indigo-500 to-purple-600", category: "🗺️ Planning" },
    { id: 't4', icon: Brain, title: "DSA Visualizer", subtitle: "See algorithms work", gradient: "from-emerald-500 to-teal-600", category: "🧠 Learning" },
    { id: 't5', icon: Code, title: "Code Compiler", subtitle: "Write, run, explain", gradient: "from-orange-500 to-red-600", category: "💻 Coding" },
    { id: 't6', icon: BookOpen, title: "Notes Summarizer", subtitle: "AI study helper", gradient: "from-blue-500 to-cyan-600", category: "📚 Study" },
  ],
  
  // ===== RESUME BUILDER =====
  '/ai-tools/resume-builder': [
    { id: 'r1', icon: Target, title: "80%+ ATS score", subtitle: "before applying", gradient: "from-green-500 to-emerald-600", category: "🎯 ATS" },
    { id: 'r2', icon: FileText, title: "One page rule", subtitle: "for <5 years exp", gradient: "from-blue-500 to-cyan-600", category: "📄 Format" },
    { id: 'r3', icon: BarChart3, title: "Add numbers!", subtitle: "Quantify all impact", gradient: "from-orange-500 to-amber-600", category: "📊 Impact" },
    { id: 'r4', icon: Star, title: "Keywords matter", subtitle: "Match job description", gradient: "from-purple-500 to-pink-600", category: "🔑 Keywords" },
    { id: 'r5', icon: Code, title: "Add GitHub link", subtitle: "Worth 10 bullet points", gradient: "from-gray-600 to-zinc-700", category: "💻 Portfolio" },
    { id: 'r6', icon: Trophy, title: "Action verbs", subtitle: "Led, Built, Designed", gradient: "from-yellow-500 to-orange-600", category: "✍️ Writing" },
  ],
  
  // ===== MOCK INTERVIEW =====
  '/ai-tools/mock-interview': [
    { id: 'i1', icon: Mic, title: "Quiet environment", subtitle: "Better audio = feedback", gradient: "from-rose-500 to-pink-600", category: "🎤 Setup" },
    { id: 'i2', icon: Brain, title: "STAR method", subtitle: "Structure answers", gradient: "from-purple-500 to-indigo-600", category: "🧠 Technique" },
    { id: 'i3', icon: Target, title: "5-7 stories ready", subtitle: "Cover most questions", gradient: "from-cyan-500 to-blue-600", category: "🎯 Prep" },
    { id: 'i4', icon: Trophy, title: "Practice daily", subtitle: "Confidence builds up", gradient: "from-yellow-500 to-orange-600", category: "🏆 Habit" },
    { id: 'i5', icon: Coffee, title: "Pause before answer", subtitle: "Shows thoughtfulness", gradient: "from-amber-500 to-orange-600", category: "☕ Technique" },
    { id: 'i6', icon: Star, title: "Research company", subtitle: "Know their products", gradient: "from-blue-500 to-cyan-600", category: "📖 Research" },
  ],
  
  // ===== CAREER ROADMAP =====
  '/ai-tools/roadmap': [
    { id: 'rm1', icon: Target, title: "Pick one path", subtitle: "Focus beats scatter", gradient: "from-cyan-500 to-blue-600", category: "🎯 Focus" },
    { id: 'rm2', icon: BookOpen, title: "Follow the order", subtitle: "Build foundations first", gradient: "from-green-500 to-emerald-600", category: "📚 Method" },
    { id: 'rm3', icon: Flame, title: "Set deadlines", subtitle: "Accountability matters", gradient: "from-orange-500 to-red-600", category: "🔥 Discipline" },
    { id: 'rm4', icon: Trophy, title: "Track progress", subtitle: "Celebrate milestones", gradient: "from-yellow-500 to-amber-600", category: "🏆 Progress" },
    { id: 'rm5', icon: Brain, title: "Learn by doing", subtitle: "Build projects along", gradient: "from-purple-500 to-pink-600", category: "🧠 Practice" },
  ],
  
  // ===== COVER LETTER =====
  '/ai-tools/cover-letter': [
    { id: 'cl1', icon: FileText, title: "Customize each one", subtitle: "Generic = Ignored", gradient: "from-blue-500 to-cyan-600", category: "📄 Strategy" },
    { id: 'cl2', icon: Target, title: "Address pain points", subtitle: "Show you understand", gradient: "from-green-500 to-emerald-600", category: "🎯 Focus" },
    { id: 'cl3', icon: Star, title: "Show enthusiasm", subtitle: "Why THIS company?", gradient: "from-yellow-500 to-orange-600", category: "⭐ Passion" },
    { id: 'cl4', icon: Trophy, title: "Keep it brief", subtitle: "3-4 paragraphs max", gradient: "from-purple-500 to-pink-600", category: "✍️ Format" },
  ],
  
  // ===== CODE COMPILER =====
  '/ai-tools/compiler': [
    { id: 'cc1', icon: Code, title: "Test edge cases", subtitle: "Empty, null, large inputs", gradient: "from-orange-500 to-red-600", category: "💻 Testing" },
    { id: 'cc2', icon: Brain, title: "Read the error", subtitle: "It tells you what's wrong", gradient: "from-purple-500 to-indigo-600", category: "🧠 Debug" },
    { id: 'cc3', icon: BookOpen, title: "Comment your code", subtitle: "Future you will thank", gradient: "from-blue-500 to-cyan-600", category: "📝 Practice" },
    { id: 'cc4', icon: Target, title: "Break into functions", subtitle: "Smaller = Cleaner", gradient: "from-green-500 to-emerald-600", category: "🎯 Structure" },
  ],
  
  // ===== CODE EXPLAINER =====
  '/ai-tools/code-explainer': [
    { id: 'ce1', icon: Brain, title: "Understand first", subtitle: "Don't just copy-paste", gradient: "from-purple-500 to-indigo-600", category: "🧠 Learning" },
    { id: 'ce2', icon: BookOpen, title: "Learn patterns", subtitle: "Not just syntax", gradient: "from-blue-500 to-cyan-600", category: "📚 Growth" },
    { id: 'ce3', icon: Code, title: "Try to explain back", subtitle: "Best learning technique", gradient: "from-orange-500 to-red-600", category: "💻 Practice" },
  ],
  
  // ===== DSA VISUALIZER =====
  '/ai-tools/dsa-visualizer': [
    { id: 'dsa1', icon: Brain, title: "Visualize first", subtitle: "Then write code", gradient: "from-emerald-500 to-teal-600", category: "🧠 Method" },
    { id: 'dsa2', icon: Target, title: "Start with arrays", subtitle: "Foundation of DSA", gradient: "from-cyan-500 to-blue-600", category: "🎯 Start" },
    { id: 'dsa3', icon: Flame, title: "1 easy + 1 medium", subtitle: "Daily practice goal", gradient: "from-orange-500 to-red-600", category: "🔥 Routine" },
    { id: 'dsa4', icon: BookOpen, title: "Understand patterns", subtitle: "Sliding window, Two pointer", gradient: "from-purple-500 to-pink-600", category: "📚 Patterns" },
    { id: 'dsa5', icon: Trophy, title: "Time complexity", subtitle: "Always analyze it", gradient: "from-yellow-500 to-orange-600", category: "⏱️ Analysis" },
  ],
  
  // ===== QUIZ GENERATOR =====
  '/ai-tools/quiz-generator': [
    { id: 'qz1', icon: Brain, title: "Test yourself", subtitle: "Active recall works", gradient: "from-purple-500 to-indigo-600", category: "🧠 Method" },
    { id: 'qz2', icon: Target, title: "Focus on weak areas", subtitle: "Targeted improvement", gradient: "from-green-500 to-emerald-600", category: "🎯 Strategy" },
    { id: 'qz3', icon: Trophy, title: "Review mistakes", subtitle: "Learn from errors", gradient: "from-yellow-500 to-orange-600", category: "🏆 Growth" },
    { id: 'qz4', icon: Flame, title: "Quiz daily", subtitle: "Build long-term memory", gradient: "from-orange-500 to-red-600", category: "🔥 Habit" },
  ],
  
  // ===== NOTES SUMMARIZER =====
  '/ai-tools/summarizer': [
    { id: 'ns1', icon: BookOpen, title: "Read summary first", subtitle: "Get the big picture", gradient: "from-blue-500 to-cyan-600", category: "📚 Method" },
    { id: 'ns2', icon: Brain, title: "Then deep dive", subtitle: "Details make sense now", gradient: "from-purple-500 to-indigo-600", category: "🧠 Learning" },
    { id: 'ns3', icon: FileText, title: "Create flashcards", subtitle: "From key points", gradient: "from-green-500 to-emerald-600", category: "📝 Study" },
  ],
  
  // ===== PROJECT IDEAS =====
  '/ai-tools/project-ideas': [
    { id: 'pi1', icon: Rocket, title: "Start small", subtitle: "Then add features", gradient: "from-cyan-500 to-blue-600", category: "🚀 Start" },
    { id: 'pi2', icon: Target, title: "Solve real problems", subtitle: "Not just tutorials", gradient: "from-green-500 to-emerald-600", category: "🎯 Focus" },
    { id: 'pi3', icon: Trophy, title: "Deploy it!", subtitle: "Live projects impress", gradient: "from-yellow-500 to-orange-600", category: "🏆 Showcase" },
    { id: 'pi4', icon: Star, title: "Document well", subtitle: "README matters", gradient: "from-purple-500 to-pink-600", category: "📖 Polish" },
    { id: 'pi5', icon: Code, title: "3 quality projects", subtitle: "Beat 10 incomplete", gradient: "from-orange-500 to-red-600", category: "💻 Portfolio" },
  ],
  
  // ===== JOB MATCHER =====
  '/ai-tools/job-matcher': [
    { id: 'jm1', icon: Target, title: "Match skills first", subtitle: "Then apply", gradient: "from-green-500 to-emerald-600", category: "🎯 Strategy" },
    { id: 'jm2', icon: Star, title: "70% match = Apply", subtitle: "Don't wait for 100%", gradient: "from-yellow-500 to-orange-600", category: "⭐ Mindset" },
    { id: 'jm3', icon: FileText, title: "Tailor resume", subtitle: "For each application", gradient: "from-blue-500 to-cyan-600", category: "📄 Customize" },
  ],
  
  // ===== JOB MARKET =====
  '/ai-tools/job-market': [
    { id: 'jmk1', icon: BarChart3, title: "Track trends", subtitle: "Hot skills change", gradient: "from-cyan-500 to-blue-600", category: "📊 Insights" },
    { id: 'jmk2', icon: Target, title: "Focus on growth", subtitle: "In-demand skills", gradient: "from-green-500 to-emerald-600", category: "🎯 Strategy" },
    { id: 'jmk3', icon: Brain, title: "Upskill constantly", subtitle: "Stay relevant", gradient: "from-purple-500 to-pink-600", category: "🧠 Growth" },
  ],
  
  // ===== PRICING =====
  '/pricing': [
    { id: 'p1', icon: Gem, title: "Pro unlocks all", subtitle: "12+ AI tools", gradient: "from-purple-500 to-pink-600", category: "💎 Value" },
    { id: 'p2', icon: Trophy, title: "Premium = Mentor", subtitle: "1-on-1 guidance", gradient: "from-yellow-500 to-orange-600", category: "🏆 Premium" },
    { id: 'p3', icon: Star, title: "Try free first", subtitle: "Then upgrade", gradient: "from-blue-500 to-cyan-600", category: "⭐ Start" },
    { id: 'p4', icon: Target, title: "ROI = Dream job", subtitle: "Worth every rupee", gradient: "from-green-500 to-emerald-600", category: "🎯 Value" },
  ],
  
  // ===== ABOUT =====
  '/about': [
    { id: 'ab1', icon: Heart, title: "Built for students", subtitle: "By students", gradient: "from-pink-500 to-rose-600", category: "❤️ Mission" },
    { id: 'ab2', icon: Trophy, title: "50,000+ success", subtitle: "stories and counting", gradient: "from-yellow-500 to-orange-600", category: "🏆 Impact" },
    { id: 'ab3', icon: Rocket, title: "AI-first approach", subtitle: "Latest technology", gradient: "from-cyan-500 to-blue-600", category: "🚀 Tech" },
  ],
  
  // ===== CONTACT =====
  '/contact': [
    { id: 'ct1', icon: MessageSquare, title: "We reply fast", subtitle: "Usually within 24hrs", gradient: "from-blue-500 to-cyan-600", category: "💬 Support" },
    { id: 'ct2', icon: Heart, title: "Feedback welcome", subtitle: "We love suggestions", gradient: "from-pink-500 to-rose-600", category: "❤️ Community" },
  ],
  
  // ===== FAQ =====
  '/faq': [
    { id: 'fq1', icon: BookOpen, title: "Check FAQs first", subtitle: "Quick answers here", gradient: "from-blue-500 to-cyan-600", category: "📚 Help" },
    { id: 'fq2', icon: MessageSquare, title: "Still stuck?", subtitle: "Contact support", gradient: "from-purple-500 to-pink-600", category: "💬 Support" },
  ],
  
  // ===== DASHBOARD =====
  '/dashboard': [
    { id: 'db1', icon: Target, title: "Set daily goals", subtitle: "Track progress", gradient: "from-green-500 to-emerald-600", category: "🎯 Goals" },
    { id: 'db2', icon: Trophy, title: "Complete profile", subtitle: "100% = Better matches", gradient: "from-yellow-500 to-orange-600", category: "🏆 Profile" },
    { id: 'db3', icon: Flame, title: "Daily streak", subtitle: "Build consistency", gradient: "from-orange-500 to-red-600", category: "🔥 Habit" },
  ],
  
  // ===== DASHBOARD RESUME =====
  '/dashboard/resume': [
    { id: 'dr1', icon: FileText, title: "Multiple versions", subtitle: "For different roles", gradient: "from-blue-500 to-cyan-600", category: "📄 Strategy" },
    { id: 'dr2', icon: Target, title: "Update regularly", subtitle: "Add new achievements", gradient: "from-green-500 to-emerald-600", category: "🎯 Maintenance" },
  ],
  
  // ===== DASHBOARD INTERVIEW =====
  '/dashboard/interview': [
    { id: 'di1', icon: Mic, title: "Review recordings", subtitle: "Spot improvements", gradient: "from-rose-500 to-pink-600", category: "🎤 Review" },
    { id: 'di2', icon: BarChart3, title: "Track scores", subtitle: "Watch progress", gradient: "from-cyan-500 to-blue-600", category: "📊 Progress" },
  ],
  
  // ===== CHECKOUT =====
  '/checkout': [
    { id: 'co1', icon: Gem, title: "Great choice!", subtitle: "Invest in yourself", gradient: "from-purple-500 to-pink-600", category: "💎 Value" },
    { id: 'co2', icon: Star, title: "Secure payment", subtitle: "SSL protected", gradient: "from-green-500 to-emerald-600", category: "🔒 Security" },
  ],
  
  // ===== WEBSITE BUILDER =====
  '/ai-tools/website-builder': [
    { id: 'wb1', icon: Code, title: "AI Architect", subtitle: "Natural language to code", gradient: "from-purple-500 to-indigo-600", category: "🏗️ Build" },
    { id: 'wb2', icon: Target, title: "Visual Canvas", subtitle: "Drag and drop design", gradient: "from-cyan-500 to-blue-600", category: "🎨 Design" },
    { id: 'wb3', icon: Rocket, title: "Rapid prototyping", subtitle: "Ideas to reality fast", gradient: "from-orange-500 to-red-600", category: "🚀 Speed" },
    { id: 'wb4', icon: Star, title: "Production-ready", subtitle: "Export clean code", gradient: "from-green-500 to-emerald-600", category: "✨ Quality" },
    { id: 'wb5', icon: Brain, title: "AI style iteration", subtitle: "Refine with prompts", gradient: "from-pink-500 to-rose-600", category: "🧠 Iterate" },
  ],
  
  // ===== WEBSITE BUILDER AI =====
  '/ai-tools/website-builder/ai': [
    { id: 'wba1', icon: Code, title: "Describe clearly", subtitle: "Detailed prompts = better", gradient: "from-purple-500 to-indigo-600", category: "💬 Prompts" },
    { id: 'wba2', icon: Target, title: "Iterate step by step", subtitle: "Refine gradually", gradient: "from-cyan-500 to-blue-600", category: "🎯 Method" },
    { id: 'wba3', icon: Star, title: "Be specific", subtitle: "Colors, layout, style", gradient: "from-yellow-500 to-orange-600", category: "✨ Details" },
  ],
  
  // ===== WEBSITE BUILDER CANVAS =====
  '/ai-tools/website-builder/canvas': [
    { id: 'wbc1', icon: Target, title: "Drag & drop", subtitle: "Pixel perfect control", gradient: "from-cyan-500 to-blue-600", category: "🎯 Control" },
    { id: 'wbc2', icon: Star, title: "Fine-tune layouts", subtitle: "Adjust every detail", gradient: "from-purple-500 to-pink-600", category: "✨ Polish" },
    { id: 'wbc3', icon: Code, title: "Export code", subtitle: "Clean, usable output", gradient: "from-green-500 to-emerald-600", category: "💻 Export" },
  ],
  
  // ===== QUIZ =====
  '/ai-tools/quiz': [
    { id: 'qz1', icon: Brain, title: "Test yourself", subtitle: "Active recall works", gradient: "from-purple-500 to-indigo-600", category: "🧠 Method" },
    { id: 'qz2', icon: Target, title: "Focus weak areas", subtitle: "Targeted improvement", gradient: "from-green-500 to-emerald-600", category: "🎯 Strategy" },
    { id: 'qz3', icon: Trophy, title: "Review mistakes", subtitle: "Learn from errors", gradient: "from-yellow-500 to-orange-600", category: "🏆 Growth" },
  ],
  
  // ===== DSA PLAYGROUND =====
  '/ai-tools/dsa-visualizer/playground': [
    { id: 'dsap1', icon: Code, title: "Try examples first", subtitle: "Understand patterns", gradient: "from-emerald-500 to-teal-600", category: "💻 Start" },
    { id: 'dsap2', icon: Brain, title: "Step through slowly", subtitle: "Watch each operation", gradient: "from-purple-500 to-indigo-600", category: "🧠 Debug" },
    { id: 'dsap3', icon: Target, title: "Modify and test", subtitle: "Learn by doing", gradient: "from-cyan-500 to-blue-600", category: "🎯 Practice" },
  ],
  
  // ===== COMING SOON =====
  '/coming-soon': [
    { id: 'cs1', icon: Rocket, title: "Something amazing", subtitle: "Coming your way!", gradient: "from-purple-500 to-pink-600", category: "🚀 Excited" },
    { id: 'cs2', icon: Star, title: "Stay tuned", subtitle: "We are building", gradient: "from-cyan-500 to-blue-600", category: "⭐ Soon" },
  ],
  
  '/ai-tools/coming-soon': [
    { id: 'acs1', icon: Rocket, title: "New AI tool", subtitle: "Coming soon!", gradient: "from-purple-500 to-pink-600", category: "🚀 Excited" },
    { id: 'acs2', icon: Brain, title: "More AI power", subtitle: "Stay tuned", gradient: "from-cyan-500 to-blue-600", category: "🧠 Soon" },
  ],
  
  // ===== LOGIN/SIGNUP =====
  '/login': [
    { id: 'lg1', icon: Star, title: "Welcome back!", subtitle: "Continue your journey", gradient: "from-cyan-500 to-blue-600", category: "⭐ Welcome" },
    { id: 'lg2', icon: Target, title: "Pick up where left", subtitle: "Your progress is saved", gradient: "from-green-500 to-emerald-600", category: "🎯 Resume" },
  ],
  
  '/signup': [
    { id: 'su1', icon: Rocket, title: "Start free!", subtitle: "No credit card needed", gradient: "from-cyan-500 to-blue-600", category: "🚀 Free" },
    { id: 'su2', icon: Trophy, title: "Join 50,000+", subtitle: "students worldwide", gradient: "from-yellow-500 to-orange-600", category: "🏆 Community" },
    { id: 'su3', icon: Star, title: "12+ AI tools", subtitle: "at your fingertips", gradient: "from-purple-500 to-pink-600", category: "✨ Tools" },
  ],
  
  // ===== 3D VISUALIZATION =====
  '/3D-architecture-visualization-studio': [
    { id: '3d1', icon: Star, title: "3D visualization", subtitle: "See projects in 3D", gradient: "from-purple-500 to-indigo-600", category: "🎨 3D" },
    { id: '3d2', icon: Target, title: "Multiple angles", subtitle: "Explore every view", gradient: "from-cyan-500 to-blue-600", category: "🎯 Explore" },
  ],
  
  '/3d-product-rendering': [
    { id: '3dp1', icon: Star, title: "Product renders", subtitle: "High quality output", gradient: "from-orange-500 to-red-600", category: "✨ Quality" },
    { id: '3dp2', icon: Target, title: "Portfolio ready", subtitle: "Impress clients", gradient: "from-purple-500 to-pink-600", category: "🎯 Portfolio" },
  ],
  
  // ===== DASHBOARD PAGES =====
  '/dashboard/applications': [
    { id: 'da1', icon: Target, title: "Track all apps", subtitle: "Stay organized", gradient: "from-green-500 to-emerald-600", category: "🎯 Track" },
    { id: 'da2', icon: BarChart3, title: "Conversion rate", subtitle: "Analyze success", gradient: "from-cyan-500 to-blue-600", category: "📊 Analytics" },
    { id: 'da3', icon: Flame, title: "Follow up", subtitle: "Persistence pays", gradient: "from-orange-500 to-red-600", category: "🔥 Action" },
  ],
  
  '/dashboard/settings': [
    { id: 'ds1', icon: Star, title: "Customize profile", subtitle: "Stand out", gradient: "from-purple-500 to-pink-600", category: "⭐ Profile" },
    { id: 'ds2', icon: Target, title: "Notification prefs", subtitle: "Stay informed", gradient: "from-cyan-500 to-blue-600", category: "🔔 Alerts" },
  ],
  
  // ===== SKILL BOOSTER =====
  '/skill-booster': [
    { id: 'sb1', icon: Flame, title: "Level up skills", subtitle: "Targeted practice", gradient: "from-orange-500 to-red-600", category: "🔥 Boost" },
    { id: 'sb2', icon: Brain, title: "Identify gaps", subtitle: "Fill knowledge holes", gradient: "from-purple-500 to-indigo-600", category: "🧠 Gaps" },
    { id: 'sb3', icon: Trophy, title: "Track mastery", subtitle: "See your progress", gradient: "from-yellow-500 to-orange-600", category: "🏆 Progress" },
  ],
  
  // ===== TERMS & PRIVACY =====
  '/terms': [
    { id: 'tm1', icon: BookOpen, title: "Know your rights", subtitle: "Read the terms", gradient: "from-blue-500 to-cyan-600", category: "📖 Legal" },
  ],
  
  '/privacy': [
    { id: 'pv1', icon: Star, title: "Your data is safe", subtitle: "We value privacy", gradient: "from-green-500 to-emerald-600", category: "🔒 Privacy" },
  ],
  
  // ===== REFERRAL =====
  '/referral': [
    { id: 'rf1', icon: Trophy, title: "Refer & earn", subtitle: "Share with friends", gradient: "from-yellow-500 to-orange-600", category: "🏆 Rewards" },
    { id: 'rf2', icon: Heart, title: "Help friends", subtitle: "Get them hired too", gradient: "from-pink-500 to-rose-600", category: "❤️ Share" },
  ],
}

const generalTips: DynamicTip[] = [
  // === MOTIVATION & MINDSET ===
  { id: 'g1', icon: Flame, title: "Consistency wins", subtitle: "30 mins daily beats 5hr weekly", gradient: "from-orange-500 to-red-600", category: "🔥 Motivation" },
  { id: 'g2', icon: Rocket, title: "Start imperfectly", subtitle: "Done > Perfect", gradient: "from-cyan-500 to-blue-600", category: "🚀 Mindset" },
  { id: 'g3', icon: Star, title: "Celebrate small wins", subtitle: "Progress is progress", gradient: "from-yellow-500 to-amber-600", category: "⭐ Motivation" },
  { id: 'g4', icon: Heart, title: "Enjoy the journey", subtitle: "Not just the destination", gradient: "from-pink-500 to-rose-600", category: "❤️ Mindset" },
  { id: 'g19', icon: Flame, title: "Failure = Learning", subtitle: "Every expert was a beginner", gradient: "from-red-500 to-orange-600", category: "🔥 Mindset" },
  { id: 'g20', icon: Star, title: "Compare to past you", subtitle: "Not to others", gradient: "from-purple-500 to-pink-600", category: "⭐ Mindset" },
  { id: 'g26', icon: Star, title: "You've got this!", subtitle: "Believe in yourself", gradient: "from-yellow-400 to-orange-500", category: "⭐ Encouragement" },
  { id: 'g27', icon: Flame, title: "Today is the day", subtitle: "Start now, not tomorrow", gradient: "from-orange-500 to-red-600", category: "🔥 Action" },
  { id: 'g28', icon: Trophy, title: "Embrace discomfort", subtitle: "Growth zone ≠ Comfort zone", gradient: "from-indigo-500 to-purple-600", category: "🏆 Mindset" },
  { id: 'g29', icon: Rocket, title: "Imposter syndrome?", subtitle: "Everyone has it, keep going", gradient: "from-cyan-500 to-blue-600", category: "🚀 Mindset" },
  
  // === PORTFOLIO & PROJECTS ===
  { id: 'g5', icon: Crown, title: "Quality > Quantity", subtitle: "3 great projects", gradient: "from-yellow-500 to-amber-600", category: "👑 Portfolio" },
  { id: 'g6', icon: Briefcase, title: "Showcase your work", subtitle: "GitHub + Portfolio site", gradient: "from-slate-500 to-zinc-600", category: "💼 Portfolio" },
  { id: 'g7', icon: Code, title: "Open source helps", subtitle: "Contribute to projects", gradient: "from-emerald-500 to-teal-600", category: "💻 Portfolio" },
  { id: 'g30', icon: Target, title: "Deploy all projects", subtitle: "Live links impress recruiters", gradient: "from-green-500 to-emerald-600", category: "🎯 Portfolio" },
  { id: 'g31', icon: Star, title: "Add AI to projects", subtitle: "2026's must-have feature", gradient: "from-purple-500 to-pink-600", category: "✨ Portfolio" },
  { id: 'g32', icon: BookOpen, title: "README matters", subtitle: "Screenshots + demo + setup", gradient: "from-blue-500 to-cyan-600", category: "📖 Portfolio" },
  { id: 'g33', icon: Rocket, title: "Solve real problems", subtitle: "Not just tutorial clones", gradient: "from-orange-500 to-red-600", category: "🚀 Portfolio" },
  
  // === CAREER & JOB SEARCH ===
  { id: 'g8', icon: Target, title: "Apply while learning", subtitle: "Don't wait until 'ready'", gradient: "from-green-500 to-emerald-600", category: "🎯 Career" },
  { id: 'g9', icon: Star, title: "Network actively", subtitle: "80% jobs via referrals", gradient: "from-blue-500 to-cyan-600", category: "🌟 Career" },
  { id: 'g10', icon: GraduationCap, title: "Never stop learning", subtitle: "Tech evolves fast", gradient: "from-indigo-500 to-purple-600", category: "🎓 Growth" },
  { id: 'g34', icon: Target, title: "Referrals > Cold apply", subtitle: "10x success rate", gradient: "from-cyan-500 to-blue-600", category: "🎯 Career" },
  { id: 'g35', icon: Trophy, title: "Apply to 5 jobs/day", subtitle: "Consistency in job hunt", gradient: "from-yellow-500 to-orange-600", category: "🏆 Career" },
  { id: 'g36', icon: Crown, title: "Salary negotiation", subtitle: "Always counter-offer", gradient: "from-amber-500 to-orange-600", category: "👑 Career" },
  { id: 'g37', icon: Briefcase, title: "Track applications", subtitle: "Use a spreadsheet/Notion", gradient: "from-slate-500 to-zinc-600", category: "💼 Career" },
  
  // === INTERVIEW PREP ===
  { id: 'g11', icon: Mic, title: "Practice out loud", subtitle: "Speaking ≠ Thinking", gradient: "from-rose-500 to-pink-600", category: "🎤 Interview" },
  { id: 'g12', icon: Brain, title: "Research the company", subtitle: "Know products & news", gradient: "from-purple-500 to-indigo-600", category: "🧠 Interview" },
  { id: 'g13', icon: Trophy, title: "Ask great questions", subtitle: "Shows genuine interest", gradient: "from-yellow-500 to-orange-600", category: "🏆 Interview" },
  { id: 'g38', icon: Target, title: "STAR method", subtitle: "Structure every answer", gradient: "from-green-500 to-emerald-600", category: "🎯 Interview" },
  { id: 'g39', icon: Mic, title: "Record yourself", subtitle: "Watch and improve", gradient: "from-rose-500 to-pink-600", category: "🎤 Interview" },
  { id: 'g40', icon: Star, title: "Prepare 7 stories", subtitle: "Cover all question types", gradient: "from-blue-500 to-cyan-600", category: "⭐ Interview" },
  { id: 'g41', icon: Brain, title: "Explain your thinking", subtitle: "Process > Just answer", gradient: "from-purple-500 to-indigo-600", category: "🧠 Interview" },
  { id: 'g42', icon: Coffee, title: "Pause before answering", subtitle: "Collect your thoughts", gradient: "from-amber-500 to-orange-600", category: "☕ Interview" },
  
  // === PRODUCTIVITY ===
  { id: 'g14', icon: Coffee, title: "Morning = Deep work", subtitle: "Peak focus time", gradient: "from-amber-500 to-orange-600", category: "☕ Productivity" },
  { id: 'g15', icon: Target, title: "One task at a time", subtitle: "Multitasking is a myth", gradient: "from-cyan-500 to-blue-600", category: "🎯 Focus" },
  { id: 'g43', icon: Flame, title: "Pomodoro technique", subtitle: "25 min focus blocks", gradient: "from-orange-500 to-red-600", category: "🔥 Productivity" },
  { id: 'g44', icon: Trophy, title: "2-minute rule", subtitle: "If quick, do it now", gradient: "from-yellow-500 to-amber-600", category: "🏆 Productivity" },
  { id: 'g45', icon: Target, title: "Time block your day", subtitle: "Structure = Output", gradient: "from-green-500 to-emerald-600", category: "🎯 Productivity" },
  { id: 'g46', icon: Brain, title: "Deep work sessions", subtitle: "Phone in another room", gradient: "from-purple-500 to-indigo-600", category: "🧠 Focus" },
  
  // === DSA & CODING ===
  { id: 'g16', icon: Code, title: "Learn Git first", subtitle: "Version control is essential", gradient: "from-orange-500 to-red-600", category: "💻 Tech" },
  { id: 'g17', icon: Brain, title: "DSA daily", subtitle: "30 mins keeps skills sharp", gradient: "from-emerald-500 to-teal-600", category: "🧠 DSA" },
  { id: 'g18', icon: BookOpen, title: "Read documentation", subtitle: "Official docs are gold", gradient: "from-blue-500 to-indigo-600", category: "📖 Learning" },
  { id: 'g47', icon: Target, title: "Patterns > Problems", subtitle: "Learn the 15 core patterns", gradient: "from-cyan-500 to-blue-600", category: "🎯 DSA" },
  { id: 'g48', icon: Code, title: "1 easy + 1 medium", subtitle: "Daily DSA formula", gradient: "from-emerald-500 to-teal-600", category: "💻 DSA" },
  { id: 'g49', icon: Trophy, title: "Explain your solution", subtitle: "To rubber duck or friend", gradient: "from-yellow-500 to-orange-600", category: "🏆 DSA" },
  { id: 'g50', icon: Brain, title: "Time complexity first", subtitle: "Then write code", gradient: "from-purple-500 to-indigo-600", category: "🧠 DSA" },
  { id: 'g51', icon: Flame, title: "LeetCode 75", subtitle: "Must-do problem set", gradient: "from-orange-500 to-red-600", category: "🔥 DSA" },
  { id: 'g52', icon: BookOpen, title: "Striver's A2Z Sheet", subtitle: "450 curated problems", gradient: "from-blue-500 to-cyan-600", category: "📖 DSA" },
  
  // === AI/ML 2026 ===
  { id: 'g53', icon: Brain, title: "Learn prompt engineering", subtitle: "2026's hottest skill", gradient: "from-purple-500 to-pink-600", category: "🧠 AI" },
  { id: 'g54', icon: Rocket, title: "Build with LangChain", subtitle: "LLM app development", gradient: "from-cyan-500 to-blue-600", category: "🚀 AI" },
  { id: 'g55', icon: Code, title: "Add AI to everything", subtitle: "Every app needs AI now", gradient: "from-emerald-500 to-teal-600", category: "💻 AI" },
  { id: 'g56', icon: Star, title: "Vector databases", subtitle: "Learn Pinecone/Weaviate", gradient: "from-blue-500 to-indigo-600", category: "⭐ AI" },
  { id: 'g57', icon: Target, title: "RAG architecture", subtitle: "Retrieval + Generation", gradient: "from-green-500 to-emerald-600", category: "🎯 AI" },
  { id: 'g58', icon: Trophy, title: "Fine-tune models", subtitle: "Customize for your use", gradient: "from-yellow-500 to-orange-600", category: "🏆 AI" },
  
  // === NETWORKING ===
  { id: 'g22', icon: Rocket, title: "LinkedIn profile 100%", subtitle: "Recruiters notice", gradient: "from-blue-600 to-cyan-600", category: "🚀 Networking" },
  { id: 'g24', icon: Trophy, title: "Learn in public", subtitle: "Share your journey", gradient: "from-yellow-500 to-amber-600", category: "🏆 Networking" },
  { id: 'g59', icon: Heart, title: "Give before asking", subtitle: "Help others first", gradient: "from-pink-500 to-rose-600", category: "❤️ Networking" },
  { id: 'g60', icon: Star, title: "Coffee chats weekly", subtitle: "30 mins can change life", gradient: "from-amber-500 to-orange-600", category: "⭐ Networking" },
  { id: 'g61', icon: Target, title: "Connect with alumni", subtitle: "They'll help you", gradient: "from-green-500 to-emerald-600", category: "🎯 Networking" },
  { id: 'g62', icon: Briefcase, title: "Attend tech meetups", subtitle: "In-person connections", gradient: "from-slate-500 to-zinc-600", category: "💼 Networking" },
  
  // === HEALTH & WELLNESS ===
  { id: 'g21', icon: Heart, title: "Health first", subtitle: "Sleep, exercise, eat well", gradient: "from-pink-500 to-rose-600", category: "❤️ Wellness" },
  { id: 'g25', icon: Coffee, title: "Hydrate!", subtitle: "Brain needs water", gradient: "from-cyan-500 to-blue-600", category: "☕ Wellness" },
  { id: 'g63', icon: Heart, title: "7-8 hours sleep", subtitle: "Memory consolidation", gradient: "from-pink-500 to-rose-600", category: "❤️ Wellness" },
  { id: 'g64', icon: Target, title: "20-20-20 rule", subtitle: "Eyes need breaks", gradient: "from-green-500 to-emerald-600", category: "🎯 Wellness" },
  { id: 'g65', icon: Flame, title: "Move every hour", subtitle: "Stand, stretch, walk", gradient: "from-orange-500 to-red-600", category: "🔥 Wellness" },
  { id: 'g66', icon: Brain, title: "Burnout is real", subtitle: "Take breaks seriously", gradient: "from-purple-500 to-indigo-600", category: "🧠 Wellness" },
  
  // === LEARNING ===
  { id: 'g67', icon: BookOpen, title: "Active recall", subtitle: "Quiz yourself often", gradient: "from-blue-500 to-cyan-600", category: "📖 Learning" },
  { id: 'g68', icon: Brain, title: "Spaced repetition", subtitle: "Review at intervals", gradient: "from-purple-500 to-indigo-600", category: "🧠 Learning" },
  { id: 'g69', icon: Code, title: "Build to learn", subtitle: "Theory alone ≠ Skill", gradient: "from-orange-500 to-red-600", category: "💻 Learning" },
  { id: 'g70', icon: Trophy, title: "Teach someone", subtitle: "Best way to master", gradient: "from-yellow-500 to-orange-600", category: "🏆 Learning" },
  { id: 'g71', icon: Target, title: "80/20 rule", subtitle: "Focus on essentials first", gradient: "from-green-500 to-emerald-600", category: "🎯 Learning" },
  { id: 'g72', icon: Star, title: "YouTube for concepts", subtitle: "Docs for implementation", gradient: "from-red-500 to-pink-600", category: "⭐ Learning" },
  
  // === TECH STACK 2026 ===
  { id: 'g73', icon: Code, title: "TypeScript is default", subtitle: "Every JS job wants it", gradient: "from-blue-500 to-indigo-600", category: "💻 Tech" },
  { id: 'g74', icon: Rocket, title: "Next.js 15", subtitle: "React's best friend", gradient: "from-black to-gray-700", category: "🚀 Tech" },
  { id: 'g75', icon: Target, title: "Tailwind CSS 4.0", subtitle: "Utility-first dominance", gradient: "from-cyan-500 to-blue-600", category: "🎯 Tech" },
  { id: 'g76', icon: Brain, title: "Learn System Design", subtitle: "Even for SDE-1 now", gradient: "from-purple-500 to-indigo-600", category: "🧠 Tech" },
  { id: 'g77', icon: Star, title: "Supabase/Postgres", subtitle: "#1 database choice", gradient: "from-emerald-500 to-teal-600", category: "⭐ Tech" },
  { id: 'g78', icon: Flame, title: "Serverless is king", subtitle: "Vercel, AWS Lambda", gradient: "from-orange-500 to-red-600", category: "🔥 Tech" },
  
  // === RESUME TIPS ===
  { id: 'g79', icon: FileText, title: "One page resume", subtitle: "For < 5 years exp", gradient: "from-blue-500 to-cyan-600", category: "📄 Resume" },
  { id: 'g80', icon: BarChart3, title: "Quantify everything", subtitle: "Numbers stand out", gradient: "from-green-500 to-emerald-600", category: "📊 Resume" },
  { id: 'g81', icon: Target, title: "ATS keywords", subtitle: "Match job description", gradient: "from-cyan-500 to-blue-600", category: "🎯 Resume" },
  { id: 'g82', icon: Star, title: "Action verbs first", subtitle: "Led, Built, Designed", gradient: "from-yellow-500 to-orange-600", category: "⭐ Resume" },
  { id: 'g83', icon: Code, title: "GitHub link = 10x", subtitle: "Show, don't tell", gradient: "from-orange-500 to-red-600", category: "💻 Resume" },
  
  // === SALARY & NEGOTIATION ===
  { id: 'g84', icon: Crown, title: "Know your worth", subtitle: "Research market rates", gradient: "from-amber-500 to-orange-600", category: "👑 Salary" },
  { id: 'g85', icon: Trophy, title: "Never accept first offer", subtitle: "Always negotiate", gradient: "from-yellow-500 to-orange-600", category: "🏆 Salary" },
  { id: 'g86', icon: Target, title: "Competing offers help", subtitle: "Leverage is power", gradient: "from-green-500 to-emerald-600", category: "🎯 Salary" },
  { id: 'g87', icon: Star, title: "Total comp matters", subtitle: "RSU + Bonus + Benefits", gradient: "from-blue-500 to-cyan-600", category: "⭐ Salary" },
  
  // === REMOTE WORK ===
  { id: 'g88', icon: Briefcase, title: "Remote communication", subtitle: "Over-communicate always", gradient: "from-slate-500 to-zinc-600", category: "💼 Remote" },
  { id: 'g89', icon: Target, title: "Set work boundaries", subtitle: "Define start/end time", gradient: "from-green-500 to-emerald-600", category: "🎯 Remote" },
  { id: 'g90', icon: Star, title: "Async by default", subtitle: "Written > Meetings", gradient: "from-blue-500 to-cyan-600", category: "⭐ Remote" },
  
  // === STARTUP VS CORPORATE ===
  { id: 'g91', icon: Rocket, title: "Startups = Learning", subtitle: "Wear many hats", gradient: "from-cyan-500 to-blue-600", category: "🚀 Career" },
  { id: 'g92', icon: Briefcase, title: "Corporate = Stability", subtitle: "Structure + Benefits", gradient: "from-slate-500 to-zinc-600", category: "💼 Career" },
  { id: 'g93', icon: Trophy, title: "FAANG for brand", subtitle: "Opens all doors", gradient: "from-yellow-500 to-orange-600", category: "🏆 Career" },
  
  // === QUICK WINS ===
  { id: 'g23', icon: Target, title: "Set weekly goals", subtitle: "Small steps, big results", gradient: "from-green-500 to-emerald-600", category: "🎯 Goals" },
  { id: 'g94', icon: Star, title: "Complete 1 course", subtitle: "Fully, not 10 incomplete", gradient: "from-blue-500 to-cyan-600", category: "⭐ Learning" },
  { id: 'g95', icon: Code, title: "1 PR to open source", subtitle: "Instant credibility boost", gradient: "from-emerald-500 to-teal-600", category: "💻 Portfolio" },
  { id: 'g96', icon: Flame, title: "Green GitHub streak", subtitle: "Daily commits matter", gradient: "from-orange-500 to-red-600", category: "🔥 Portfolio" },
  
  // === WISDOM ===
  { id: 'g97', icon: Brain, title: "T-shaped expertise", subtitle: "Depth in 1, breadth in many", gradient: "from-purple-500 to-indigo-600", category: "🧠 Wisdom" },
  { id: 'g98', icon: Star, title: "Skills compound", subtitle: "Today's effort, future you thanks", gradient: "from-yellow-500 to-amber-600", category: "⭐ Wisdom" },
  { id: 'g99', icon: Heart, title: "Community matters", subtitle: "Find your tribe", gradient: "from-pink-500 to-rose-600", category: "❤️ Community" },
  { id: 'g100', icon: Rocket, title: "Your time will come", subtitle: "Keep building, keep learning", gradient: "from-cyan-500 to-blue-600", category: "🚀 Motivation" },
]

// ============= SMART REPLIES - FULLY CONTEXT-AWARE =============
const getSmartReplies = (messages: Message[], pathname: string, memory: UserMemory): string[] => {
  const lastMsg = messages[messages.length - 1]?.content?.toLowerCase() || ''
  
  // === COURSE PAGES - ONLY COURSE-RELEVANT OPTIONS ===
  if (pathname?.startsWith('/courses')) {
    if (lastMsg.includes('quiz') || lastMsg.includes('test')) {
      return ["Start quiz", "Easy questions", "Challenge me"]
    }
    if (lastMsg.includes('concept') || lastMsg.includes('explain')) {
      return ["More examples", "Simplify it", "Real-world use?"]
    }
    if (lastMsg.includes('lesson') || lastMsg.includes('module')) {
      return ["Next lesson", "Summary", "Key takeaways"]
    }
    // Default course replies
    return ["Explain this topic", "Quiz me", "Show syllabus"]
  }
  
  // === RESUME PAGES ===
  if (pathname?.includes('resume')) {
    if (lastMsg.includes('ats') || lastMsg.includes('score')) {
      return ["Improve my score", "Common mistakes", "Keywords to add"]
    }
    return ["Check ATS score", "Best template?", "Add more projects?"]
  }
  
  // === INTERVIEW PAGES ===
  if (pathname?.includes('interview')) {
    if (lastMsg.includes('behavioral') || lastMsg.includes('star')) {
      return ["Give example", "Practice Q", "Common mistakes"]
    }
    return ["Start practice", "STAR method", "Common questions"]
  }
  
  // === DSA / CODING PAGES ===
  if (pathname?.includes('dsa') || pathname?.includes('compiler') || pathname?.includes('code')) {
    return ["Explain approach", "Time complexity?", "Similar problems"]
  }
  
  // === TOOLS PAGES ===
  if (pathname?.includes('ai-tools')) {
    return ["Which tool for me?", "Show all tools", "Career advice"]
  }
  
  // === GENERIC FALLBACK (Non-specific pages) ===
  if (messages.length <= 2) {
    return ["What can you help with?", "Show AI tools", "Career advice"]
  }
  
  // Context from last message
  if (lastMsg.includes('resume')) return ["ATS tips", "Template help", "Mock interview?"]
  if (lastMsg.includes('interview')) return ["STAR method", "Practice behavioral", "Technical tips"]
  if (lastMsg.includes('job') || lastMsg.includes('career')) return ["Roadmap", "Skills to learn", "Salary info"]
  
  return ["Tell me more", "What's next?", "Thanks!"]
}

const getTimeGreeting = () => {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return { emoji: "☀️", text: "Good morning" }
  if (hour >= 12 && hour < 17) return { emoji: "🌤️", text: "Good afternoon" }
  if (hour >= 17 && hour < 21) return { emoji: "🌙", text: "Good evening" }
  return { emoji: "🌟", text: "Hello, night owl" }
}

// ============= MAIN COMPONENT =============
export function ChatbotBubble() {
  const pathname = usePathname()
  const router = useRouter()
  
  // Hide chatbot during interview, test sessions, and ALL dashboard pages
  if (pathname?.startsWith('/interview') || pathname?.startsWith('/aptitude-prep/pyq') || pathname?.startsWith('/dashboard')) return null
  
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [userMemory, setUserMemory] = useState<UserMemory>({ id: '' })
  const [hasLoadedHistory, setHasLoadedHistory] = useState(false)
  const [currentContext, setCurrentContext] = useState<PageContext | null>(null)
  const [quickActions, setQuickActions] = useState<QuickAction[]>([])
  const [visitedPages, setVisitedPages] = useState<string[]>([])
  const [showTip, setShowTip] = useState(false)
  const [currentTip, setCurrentTip] = useState<DynamicTip | null>(null)
  const [isSoundEnabled, setIsSoundEnabled] = useState(true)
  const [showSettings, setShowSettings] = useState(false)
  const [aiMood, setAiMood] = useState<'helpful' | 'excited' | 'professional'>('helpful')
  const [isMobile, setIsMobile] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  // Session History
  const [showSessionHistory, setShowSessionHistory] = useState(false)
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([])
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null)
  
  const [courseContextData, setCourseContextData] = useState<any>(null)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const prevPathnameRef = useRef(pathname)
  const tipTimerRef = useRef<NodeJS.Timeout | null>(null)
  const tipIndexRef = useRef(0)
  const bubbleScale = useSpring(1, { stiffness: 400, damping: 25 })
  const shouldScrollRef = useRef(false) // Track if we should scroll (only after user sends message)

  // Check mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Check fullscreen
  useEffect(() => {
    const checkFullscreen = () => {
      // Consider fullscreen if window height is at least 85% of screen height
      const isLargeWindow = typeof window !== 'undefined' ? window.innerHeight >= window.screen.availHeight * 0.85 : false
      setIsFullscreen(isLargeWindow)
    }
    checkFullscreen()
    window.addEventListener('resize', checkFullscreen)
    return () => window.removeEventListener('resize', checkFullscreen)
  }, [])

  // Memory initialization
  useEffect(() => {
    const memory = MemoryManager.getMemory()
    setUserMemory(memory)
    if (memory.preferences?.aiMood) setAiMood(memory.preferences.aiMood)
    if (memory.preferences?.soundEnabled !== undefined) setIsSoundEnabled(memory.preferences.soundEnabled)
    MemoryManager.updateMemory({ lastVisit: new Date().toISOString() })
  }, [])

  // Load history and sessions
  useEffect(() => {
    if (isOpen && !hasLoadedHistory) {
      // Load all sessions
      setChatSessions(MemoryManager.getAllSessions())
      
      const history = MemoryManager.getConversationHistory()
      if (history.length > 0) {
        setMessages(history)
        // Create session ID for current conversation
        if (!currentSessionId) {
          setCurrentSessionId(`session_${generateId()}_${Date.now()}`)
        }
      } else {
        const greeting = getTimeGreeting()
        let detectedGoal = userMemory.careerGoal
        
        // Try getting goal from the actual profile we just saved
        try {
            const storedUser = localStorage.getItem('flyeng_user')
            if (storedUser) {
                const parsed = JSON.parse(storedUser)
                if (parsed.goals && parsed.goals.length > 0) {
                    detectedGoal = parsed.goals[0]
                } else if (parsed.role) {
                    detectedGoal = parsed.role
                }
            }
        } catch(e) {}

        const content = detectedGoal 
          ? `${greeting.emoji} ${greeting.text}! Welcome back! I remember you're interested in becoming a **${detectedGoal}**. How can I help you achieve that today?`
          : `${greeting.emoji} ${greeting.text}! I'm **Flyeng AI**, your intelligent career co-pilot. I'll remember our conversations and help you land your dream job! What can I help with?`
        setMessages([{ id: generateId(), role: "assistant", content, timestamp: new Date() }])
        setCurrentSessionId(`session_${generateId()}_${Date.now()}`)
      }
      setHasLoadedHistory(true)
    }
  }, [isOpen, hasLoadedHistory, userMemory, currentContext, currentSessionId])

  // Save messages
  useEffect(() => {
    if (messages.length > 0 && hasLoadedHistory) {
      MemoryManager.saveConversationHistory(messages)
      if (messages.length % 5 === 0) {
        const insights = MemoryManager.extractInsights(messages)
        if (Object.keys(insights).length > 0) {
          const updated = MemoryManager.updateMemory({ ...insights, totalMessages: messages.length })
          setUserMemory(updated)
        }
      }
    }
  }, [messages, hasLoadedHistory])

  // Save preferences
  useEffect(() => {
    MemoryManager.updateMemory({ preferences: { aiMood, soundEnabled: isSoundEnabled } })
  }, [aiMood, isSoundEnabled])

  // Get tips - Smart URL pattern matching for better relevance
  const getPageTips = useCallback((): DynamicTip[] => {
    const currentPath = pathname || '/'
    
    // 1. Try exact match first
    let pageTips = pageTipsDatabase[currentPath] || []
    
    // 2. If no tips, try parent path matching (e.g., /ai-tools/anything → /ai-tools tips)
    if (pageTips.length === 0) {
      const pathParts = currentPath.split('/').filter(Boolean)
      for (let i = pathParts.length - 1; i >= 0; i--) {
        const parentPath = '/' + pathParts.slice(0, i + 1).join('/')
        if (pageTipsDatabase[parentPath]) {
          pageTips = pageTipsDatabase[parentPath]
          break
        }
      }
    }
    
    // 3. If still no tips, smart contextual fallback based on URL keywords
    if (pageTips.length === 0) {
      if (currentPath.includes('resume') || currentPath.includes('cv')) {
        pageTips = pageTipsDatabase['/ai-tools/resume-builder'] || []
      } else if (currentPath.includes('interview')) {
        pageTips = pageTipsDatabase['/ai-tools/mock-interview'] || []
      } else if (currentPath.startsWith('/courses/')) {
        // Dynamic Course Tips - Uses fetched context if available
        if (courseContextData) {
          pageTips = [
            { id: 'c-dyn-1', icon: BookOpen, title: `Learn ${courseContextData.title}`, subtitle: "Stay consistent!", gradient: "from-blue-500 to-cyan-600", category: "📚 Course" },
            { id: 'c-dyn-2', icon: Brain, title: "Take a Quiz", subtitle: "Test your knowledge", gradient: "from-purple-500 to-pink-600", category: "🧠 Practice" },
            { id: 'c-dyn-3', icon: Target, title: "Track Progress", subtitle: "Complete modules", gradient: "from-green-500 to-emerald-600", category: "🎯 Goal" },
            { id: 'c-dyn-4', icon: Coffee, title: "Ask about concepts", subtitle: "I can explain any topic", gradient: "from-amber-500 to-orange-600", category: "☕ Help" }
          ]
        } else {
           pageTips = pageTipsDatabase['/courses'] || []
        }
      } else if (currentPath.includes('course') || currentPath.includes('learn')) {
        pageTips = pageTipsDatabase['/courses'] || []
      } else if (currentPath.includes('code') || currentPath.includes('compiler')) {
        pageTips = pageTipsDatabase['/ai-tools/compiler'] || []
      } else if (currentPath.includes('dsa') || currentPath.includes('algorithm')) {
        pageTips = pageTipsDatabase['/ai-tools/dsa-visualizer'] || []
      } else if (currentPath.includes('project')) {
        pageTips = pageTipsDatabase['/ai-tools/project-ideas'] || []
      } else if (currentPath.includes('job') || currentPath.includes('career')) {
        pageTips = pageTipsDatabase['/ai-tools/roadmap'] || []
      } else if (currentPath.includes('ai-tools')) {
        pageTips = pageTipsDatabase['/ai-tools'] || []
      }
    }
    
    // 4. Add personalized tip if user has career goal
    if (pageTips.length > 0 && userMemory.careerGoal) {
      pageTips = [{ id: 'p1', icon: Target, title: `Your ${userMemory.careerGoal} journey`, subtitle: "Keep building momentum!", gradient: "from-cyan-500 to-purple-600", category: "🎯 For You" }, ...pageTips]
    }
    
    return pageTips
  }, [pathname, userMemory])

  // Get next tip - Prioritize specific tips on homepage to restore "original" feel
  const getNextTip = useCallback((): DynamicTip | null => {
    const pageTips = getPageTips()
    
    // If we found relevant page tips, use them
    if (pageTips.length > 0) {
      // FORCE "50,000+ students" tip if on homepage and it hasn't been shown recently (simple random usually works, but user wants this specific card)
      // For now, let's just bias the random selection if we are on the homepage to favor the 'h2' tip (50,000+ students)
      if (pathname === '/') {
          const successTip = pageTips.find(t => t.id === 'h2');
          // 40% chance to show the success tip if it exists
          if (successTip && Math.random() < 0.4) {
              return successTip;
          }
      }

      // True random selection instead of sequential
      const randomIndex = Math.floor(Math.random() * pageTips.length)
      return pageTips[randomIndex]
    }
    
    // STRICT: No tips on course pages at all (handled in the timer useEffect, but double-check)
    if (pathname?.startsWith('/courses')) {
        return null
    }
    
    // Fallback to general tips for non-course pages - RANDOM selection
    const randomIndex = Math.floor(Math.random() * generalTips.length)
    return generalTips[randomIndex]
  }, [getPageTips, pathname])

  // Sound
  const playSound = useCallback(() => {
    if (isSoundEnabled && typeof window !== 'undefined') {
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.frequency.value = 880
        osc.type = 'sine'
        gain.gain.setValueAtTime(0.03, ctx.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1)
        osc.start(ctx.currentTime)
        osc.stop(ctx.currentTime + 0.1)
      } catch (e) {}
    }
  }, [isSoundEnabled])

  // Rotate tips - HIDE on courses and crucial pages to avoid distractions
  useEffect(() => {
    // === HIDE TIPS ON THESE PAGES (no distractions during work) ===
    const hideTipPages = [
      '/courses',      // All course pages - users need to focus
      '/ai-tools',     // ALL AI tools - users are working
      '/admin',        // Admin pages
      '/checkout',     // Payment - don't distract
    ]
    
    const shouldHideTips = hideTipPages.some(page => pathname?.startsWith(page))
    
    if (shouldHideTips) {
        setShowTip(false)
        if (tipTimerRef.current) clearInterval(tipTimerRef.current)
        return
    }

    if (!isOpen && isVisible) {
      const t1 = setTimeout(() => { setCurrentTip(getNextTip()); setShowTip(true) }, 3000)
      // Increased interval to 10 seconds to reduce repetition
      tipTimerRef.current = setInterval(() => setCurrentTip(getNextTip()), 10000)
      return () => { clearTimeout(t1); if (tipTimerRef.current) clearInterval(tipTimerRef.current) }
    } else {
      setShowTip(false)
      if (tipTimerRef.current) clearInterval(tipTimerRef.current)
    }
  }, [isOpen, isVisible, getNextTip, pathname])

  // Track pages
  useEffect(() => {
    if (pathname && !visitedPages.includes(pathname)) setVisitedPages(prev => [...prev, pathname])
  }, [pathname, visitedPages])

  // Fetch Course Context asynchronously entirely on client side to avoid bundling huge data
  useEffect(() => {
    if (pathname?.startsWith('/courses/')) {
        const pathParts = pathname.split('/')
        // /courses/[courseId] -> parts ["", "courses", "courseId", "lessonId"?]
        if (pathParts.length >= 3) {
            const courseId = pathParts[2]
            const lessonId = pathParts.length > 3 ? pathParts[3] : undefined
            
            // Fetch relevant context
            fetch('/api/course-context', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ courseId, lessonId })
            })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setCourseContextData(null)
                } else {
                    setCourseContextData(data)
                }
            })
            .catch(err => {
                console.error("Failed to fetch course context", err)
                setCourseContextData(null)
            })
        }
    } else {
        setCourseContextData(null)
    }
  }, [pathname])

  // Update context with RANDOMIZED and PERSONALIZED quick actions
  useEffect(() => {
    setCurrentContext(getPageContext(pathname || "/"))
    
    // Get base quick actions and randomize them
    let actions = getQuickActions(pathname || "/")
    
    // Shuffle the actions for randomness
    const shuffled = [...actions].sort(() => Math.random() - 0.5)
    
    // Add personalized actions based on user memory
    const personalizedActions: QuickAction[] = []
    
    if (userMemory.careerGoal) {
      if (userMemory.careerGoal.toLowerCase().includes('developer')) {
        personalizedActions.push({ label: 'DSA Practice', action: 'navigate:/ai-tools/dsa-visualizer', icon: '🧠' })
      }
      if (userMemory.careerGoal.toLowerCase().includes('data')) {
        personalizedActions.push({ label: 'ML Roadmap', action: 'navigate:/ai-tools/roadmap', icon: '📊' })
      }
    }
    
    if (userMemory.interests?.includes('Interview Prep')) {
      personalizedActions.push({ label: 'Mock Interview', action: 'navigate:/ai-tools/mock-interview', icon: '🎤' })
    }
    
    if (userMemory.interests?.includes('Resume Building')) {
      personalizedActions.push({ label: 'Update Resume', action: 'navigate:/ai-tools/resume-builder', icon: '📄' })
    }
    
    // Add random AI suggestions
    const aiSuggestions: QuickAction[] = [
      { label: 'Career advice', action: 'trigger:Help me plan my career', icon: '✨' },
      { label: 'Salary info', action: 'trigger:What are current tech salaries?', icon: '💰' },
      { label: 'Interview tips', action: 'trigger:Top interview tips for freshers', icon: '🎯' },
      { label: 'Hot skills 2026', action: 'trigger:Most in-demand skills in 2026', icon: '🔥' },
      { label: 'Project ideas', action: 'trigger:Suggest portfolio projects', icon: '💡' },
    ]
    
    // Pick random AI suggestion
    const randomAI = aiSuggestions[Math.floor(Math.random() * aiSuggestions.length)]
    
    // Combine actions based on context
    let finalActions: QuickAction[] = []

    if (pathname?.startsWith('/courses/') && courseContextData) {
        // Course specific actions - NO RANDOM GUNK
        const courseId = pathname.split('/')[2]
        
        finalActions = [
            { label: 'Syllabus', action: 'trigger:Show me the course syllabus', icon: '📜' },
            { label: 'Course Overview', action: 'trigger:Give me a brief overview of this course', icon: 'ℹ️' },
            { label: 'Prerequisites', action: 'trigger:What are the prerequisites?', icon: '🔍' },
            { label: 'Next Lesson', action: `navigate:/courses/${courseId}/next`, icon: '▶️' } 
        ]
        
        // Add one personalized action if relevant
        if (personalizedActions.length > 0) {
            finalActions.push(personalizedActions[0])
        }
    } else {
        // Standard behavior for other pages
        finalActions = [
            ...shuffled.slice(0, 2),
            ...(personalizedActions.length > 0 ? [personalizedActions[Math.floor(Math.random() * personalizedActions.length)]] : []),
            randomAI
        ].slice(0, 4)
    }
    
    // Remove duplicates by label
    const seen = new Set<string>()
    const uniqueActions = finalActions.filter(a => {
      if (seen.has(a.label)) return false
      seen.add(a.label)
      return true
    })
    
    setQuickActions(uniqueActions)
    if (isOpen && pathname !== prevPathnameRef.current) {
      // Prevent spamming "You're on Courses" when navigating between course lessons
      const isCourseNav = pathname?.startsWith('/courses') && prevPathnameRef.current?.startsWith('/courses');
      
      const context = getPageContext(pathname || "/")
      if (context && !isCourseNav) {
        setMessages(prev => [...prev, { id: generateId(), role: "assistant", content: `📍 You're now on **${context.name}**! ${context.tagline}`, timestamp: new Date() }])
        playSound()
      }
    }
    prevPathnameRef.current = pathname
  }, [pathname, isOpen, playSound, userMemory, courseContextData])

  // Show after loader
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 3500)
    const h = () => { setIsVisible(true); clearTimeout(t) }
    window.addEventListener('flyeng-loader-complete', h)
    return () => { window.removeEventListener('flyeng-loader-complete', h); clearTimeout(t) }
  }, [])

  // Scroll - REMOVED auto-scroll, only manual scroll function exists
  const scrollToBottom = useCallback(() => {
    messagesContainerRef.current?.scrollTo({ top: messagesContainerRef.current.scrollHeight, behavior: 'smooth' })
  }, [])

  // Focus
  useEffect(() => { if (isOpen) setTimeout(() => inputRef.current?.focus(), 100) }, [isOpen])

  // Keyboard
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setIsOpen(p => !p) }
      if (e.key === 'Escape' && isOpen) setIsOpen(false)
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [isOpen])

  // Handle Expand/Collapse with Browser Fullscreen
  const toggleExpand = useCallback(() => {
    if (!isExpanded) {
      if (typeof document !== 'undefined' && document.documentElement) {
        document.documentElement.requestFullscreen().catch(e => console.error(e))
      }
      setIsExpanded(true)
    } else {
      if (typeof document !== 'undefined' && document.fullscreenElement) {
        document.exitFullscreen().catch(e => console.error(e))
      }
      setIsExpanded(false)
    }
  }, [isExpanded])

  // Sync state with native fullscreen changes (e.g. user presses Esc)
  useEffect(() => {
    const handleFullscreenChange = () => {
      // If we exited fullscreen and we were expanded, collapse.
      // But if we entered fullscreen (e.g. F11), we could optionally expand, but let's keep it manual for now unless triggered by button.
      if (!document.fullscreenElement && isExpanded) {
        setIsExpanded(false)
      }
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [isExpanded])

  if (pathname?.startsWith("/login") || pathname?.startsWith("/signup") || pathname?.startsWith("/admin")) return null
  if (!isVisible) return null

  // Handlers - Enhanced quick action with intelligent triggers
  const handleQuickAction = (action: QuickAction) => {
    if (action.action.startsWith("navigate:")) {
      router.push(action.action.replace("navigate:", ""))
    } else if (action.action.startsWith("scroll:")) {
      document.querySelector(action.action.replace("scroll:", ""))?.scrollIntoView({ behavior: "smooth" })
    } else if (action.action.startsWith("trigger:")) {
      // Send the trigger message directly to AI
      const triggerMessage = action.action.replace("trigger:", "")
      handleSendMessage(undefined, triggerMessage)
    }
  }

  const handleSendMessage = async (e?: React.FormEvent, forcedInput?: string) => {
    e?.preventDefault()
    const text = forcedInput || input.trim()
    if (!text) return

    const userMsg: Message = { id: generateId(), role: "user", content: text, timestamp: new Date() }
    setMessages(prev => [...prev, userMsg])
    setInput("")
    setIsLoading(true)
    setIsTyping(true)
    
    // Scroll to show user's message
    setTimeout(() => {
      messagesContainerRef.current?.scrollTo({ top: messagesContainerRef.current.scrollHeight, behavior: 'smooth' })
    }, 100)

    // Prepare context
    const currentContext = getPageContext(pathname || '/')
    
    // Check for Course Context
    let finalCourseContext = courseContextData;

    // If fetch hasn't happened yet (very fast interaction), try to fetch on the fly (blocking)
    if (!finalCourseContext && pathname?.startsWith('/courses/')) {
         const pathParts = pathname.split('/')
         if (pathParts.length >= 3) {
            const courseId = pathParts[2]
            const lessonId = pathParts.length > 3 ? pathParts[3] : undefined
            try {
                const res = await fetch('/api/course-context', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ courseId, lessonId })
                })
                const data = await res.json()
                if (!data.error) {
                    finalCourseContext = {
                        isCourseMode: true,
                        // flatten data for context object
                        courseId: data.courseId,
                        title: data.title,
                        instructor: data.instructor,
                        description: data.description,
                        syllabus: data.syllabus,
                        currentLessonId: data.currentLessonId,
                        activeLessonContent: data.activeLessonContent
                    }
                }
            } catch (e) {
                console.error("On-demand context fetch failed", e)
            }
         }
    } else if (finalCourseContext) {
        // Ensure structure matches
         finalCourseContext = {
            isCourseMode: true,
            courseId: finalCourseContext.courseId,
            title: finalCourseContext.title,
            instructor: finalCourseContext.instructor,
            description: finalCourseContext.description,
            syllabus: finalCourseContext.syllabus,
            currentLessonId: finalCourseContext.currentLessonId,
            activeLessonContent: finalCourseContext.activeLessonContent
        }
    }

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m: Message) => ({ role: m.role, content: m.content })),
          config: { 
            provider: 'groq',
            mode: pathname?.includes('resume') ? 'ats' : 'standard'
          },
          context: { 
            currentPage: pathname, 
            pageName: currentContext?.name, 
            pageDescription: currentContext?.description, 
            aiMood, 
            visitedPages,
            clientTime: new Date().toISOString(),
            userMemory: { careerGoal: userMemory.careerGoal, interests: userMemory.interests, skillLevel: userMemory.skillLevel, totalMessages: userMemory.totalMessages, isReturningUser: (userMemory.totalMessages || 0) > 5 },
            // Pass the course context if it exists
            courseContext: finalCourseContext
          }
        }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error)
      await new Promise(r => setTimeout(r, 150))
      setIsTyping(false)
      // Add AI message but DON'T auto-scroll - let user read from top
      setMessages(prev => [...prev, { id: generateId(), role: "assistant", content: data.content, timestamp: new Date() }])
      playSound()
    } catch {
      setIsTyping(false)
      setMessages(prev => [...prev, { id: generateId(), role: "assistant", content: "Oops! Something went wrong. Try again?", timestamp: new Date() }])
    } finally {
      setIsLoading(false)
    }
  }

  // Start new session (save current first)
  const handleNewSession = () => {
    // Save current session if it has messages
    if (messages.length > 0 && currentSessionId) {
      const session: ChatSession = {
        id: currentSessionId,
        messages,
        startedAt: new Date(messages[0]?.timestamp || Date.now()),
        lastMessageAt: new Date(messages[messages.length - 1]?.timestamp || Date.now()),
        title: MemoryManager.generateSessionTitle(messages)
      }
      MemoryManager.saveSession(session)
      setChatSessions(MemoryManager.getAllSessions())
    }
    
    // Create new session
    const newSession = MemoryManager.createNewSession()
    setCurrentSessionId(newSession.id)
    const greeting = getTimeGreeting()
    setMessages([{ 
      id: generateId(), 
      role: "assistant", 
      content: `${greeting.emoji} ${greeting.text}! Starting a fresh conversation. What can I help you with?`, 
      timestamp: new Date() 
    }])
    setShowSessionHistory(false)
    playSound()
  }

  // Load a past session
  const handleLoadSession = (session: ChatSession) => {
    // Save current session first
    if (messages.length > 0 && currentSessionId) {
      const currentSession: ChatSession = {
        id: currentSessionId,
        messages,
        startedAt: new Date(messages[0]?.timestamp || Date.now()),
        lastMessageAt: new Date(messages[messages.length - 1]?.timestamp || Date.now()),
        title: MemoryManager.generateSessionTitle(messages)
      }
      MemoryManager.saveSession(currentSession)
    }
    
    // Load selected session
    setCurrentSessionId(session.id)
    setMessages(session.messages)
    setShowSessionHistory(false)
    playSound()
  }

  // Delete a session
  const handleDeleteSession = (sessionId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    MemoryManager.deleteSession(sessionId)
    setChatSessions(MemoryManager.getAllSessions())
    playSound()
  }

  const handleReset = () => { handleNewSession() }
  const handleClearMemory = () => {
    MemoryManager.clearHistory()
    const greeting = getTimeGreeting()
    setMessages([{ id: generateId(), role: "assistant", content: `${greeting.emoji} Memory cleared! Let's start fresh. What can I help with?`, timestamp: new Date() }])
    setHasLoadedHistory(true)
  }

  const addReaction = (msgId: string, emoji: string) => {
    setMessages(prev => prev.map(m => m.id === msgId ? { ...m, reactions: (m.reactions || []).includes(emoji) ? m.reactions?.filter(r => r !== emoji) : [...(m.reactions || []), emoji] } : m))
    if (emoji === '🚀') setAiMood('excited')
    else if (emoji === '👔') setAiMood('professional')
    else setAiMood('helpful')
    playSound()
  }

  // Format message with navigation link support
  const formatMessage = (content: string) => {
    return content
      // Parse navigation links: [[Button Text|/path]] → clickable button
      .replace(/\[\[(.*?)\|(.*?)\]\]/g, '<button onclick="window.location.href=\'$2\'" class="inline-flex items-center gap-1 mt-2 mb-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-medium hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400/50 transition-all cursor-pointer">$1 <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></button>')
      // Bold text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>')
      // Italic text
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Code blocks
      .replace(/`(.*?)`/g, '<code class="bg-cyan-500/20 px-1.5 py-0.5 rounded text-cyan-300 text-xs font-mono">$1</code>')
      // Bullet points
      .replace(/^• (.*?)$/gm, '<div class="flex items-start gap-2 mt-1"><span class="text-cyan-400 mt-0.5">•</span><span>$1</span></div>')
      // Line breaks
      .replace(/\n/g, '<br/>')
  }

  const tip = currentTip
  const TipIcon = tip?.icon || Lightbulb





  // Responsive sizing - Optimized for desktop and mobile
  const chatWidth = isMobile 
    ? "w-[calc(100vw-24px)]" 
    : isExpanded 
      ? (isFullscreen ? "w-[440px]" : "w-[400px]") // Expanded: Good readable width
      : (isFullscreen ? "w-[360px]" : "w-[340px]") // Compact: Clean default

  const chatHeight = isMobile 
    ? "h-[65vh]" 
    : isExpanded 
      ? (isFullscreen ? "h-[650px]" : "h-[550px]") // Expanded: Tall for max content
      : (isFullscreen ? "h-[500px]" : "h-[450px]") // Compact: Comfortable reading
  const chatPosition = isMobile ? "bottom-20 left-3 right-3" : "bottom-24 right-6"

  return (
    <>
      {/* === TIP POPUP - Polished === */}
      <AnimatePresence>
        {showTip && !isOpen && tip && !isMobile && (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-28 right-6 z-[9997] max-w-[290px] cursor-pointer print:hidden"
            onClick={() => setIsOpen(true)}
          >
            <div 
              className="rounded-xl p-4 backdrop-blur-xl transition-all duration-200 hover:scale-[1.02]"
              style={{ 
                background: 'linear-gradient(160deg, #0f0f18 0%, #0d0816 100%)',
                border: '1px solid rgba(139,92,246,0.2)',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.6), 0 0 60px -20px rgba(139,92,246,0.3)'
              }}
            >
              <div className="flex items-start gap-3">
                <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${tip.gradient} flex items-center justify-center flex-shrink-0`} style={{ boxShadow: '0 4px 15px rgba(139,92,246,0.3)' }}>
                  <TipIcon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-medium text-purple-400 uppercase tracking-wide">{tip.category}</span>
                  <p className="text-white font-semibold text-sm leading-tight">{tip.title}</p>
                  <p className="text-white/50 text-xs mt-0.5">{tip.subtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-purple-400 text-xs mt-3 font-medium">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === CHAT BUBBLE === */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => bubbleScale.set(1.1)}
        onMouseLeave={() => bubbleScale.set(1)}
        onMouseDown={() => bubbleScale.set(0.95)}
        onMouseUp={() => bubbleScale.set(1.1)}
        style={{ scale: bubbleScale }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className={`fixed z-[9999] rounded-full bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-2xl print:hidden transition-all duration-300 ${isMobile ? 'bottom-4 right-4 w-14 h-14' : 'bottom-6 right-6 w-16 h-16'} ${isOpen ? 'opacity-80' : ''}`}
      >
        <motion.span className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-500" animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }} transition={{ duration: 2.5, repeat: Infinity }} />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0, rotate: -180 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 180 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="relative z-10">
              <ChevronDown className={`text-white ${isMobile ? 'w-6 h-6' : 'w-7 h-7'}`} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ type: "spring", stiffness: 500, damping: 25 }} className="relative z-10">
              <MessageCircle className={`text-white ${isMobile ? 'w-6 h-6' : 'w-7 h-7'}`} />
              <motion.span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1, repeat: Infinity }} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* === CHAT PANEL - POLISHED & ATTRACTIVE === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`fixed ${chatPosition} z-[9998] ${chatWidth} ${chatHeight} rounded-2xl flex flex-col overflow-hidden`}
            style={{ 
              background: 'linear-gradient(160deg, #0f0f18 0%, #0a0a12 40%, #0d0816 100%)',
              boxShadow: '0 25px 60px -12px rgba(0,0,0,0.9), 0 0 0 1px rgba(139,92,246,0.15), 0 0 80px -20px rgba(139,92,246,0.2)'
            }}
          >
            {/* Background glow effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-cyan-500/8 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500/8 rounded-full blur-3xl" />
              <div className="absolute top-1/3 right-0 w-40 h-40 bg-pink-500/5 rounded-full blur-3xl" />
              <div className="absolute inset-0 rounded-2xl border border-white/[0.08]" />
            </div>
            
            {/* Header - Compact & Clear */}
            <div className="relative flex items-center justify-between px-3 py-2.5 flex-shrink-0 bg-gradient-to-b from-purple-900/20 to-transparent border-b border-white/10">
              {/* Left - Avatar & Title */}
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <Cpu className="w-4 h-4 text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#0a0a12]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-[13px]">Flyeng AI</h3>
                  <p className="text-[10px] text-white/50">{currentContext?.name || "Online"}</p>
                </div>
              </div>
              
              {/* Right - Actions */}
              <div className="flex items-center gap-1">
                {/* New */}
                <button 
                  onClick={handleNewSession} 
                  className="p-1.5 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-all"
                  title="New chat"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                
                {/* History */}
                <button 
                  onClick={() => { setChatSessions(MemoryManager.getAllSessions()); setShowSessionHistory(!showSessionHistory); setShowSettings(false) }}
                  className={`p-1.5 rounded-lg transition-all ${showSessionHistory ? 'text-purple-300 bg-purple-500/20' : 'text-white/50 hover:text-white hover:bg-white/10'}`}
                  title="History"
                >
                  <History className="w-4 h-4" />
                </button>
                
                {/* Settings & Expand (Desktop) */}
                {!isMobile && (
                  <>
                    <button 
                      onClick={() => { setShowSettings(!showSettings); setShowSessionHistory(false) }} 
                      className={`p-1.5 rounded-lg transition-all ${showSettings ? 'text-purple-300 bg-purple-500/20' : 'text-white/50 hover:text-white hover:bg-white/10'}`}
                      title="Settings"
                    >
                      <Settings className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={toggleExpand} 
                      className={`p-1.5 rounded-lg transition-all ${isExpanded ? 'text-cyan-300 bg-cyan-500/20' : 'text-white/50 hover:text-white hover:bg-white/10'}`}
                      title={isExpanded ? "Exit Fullscreen" : "Fullscreen Mode"}
                    >
                      {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    </button>
                  </>
                )}
                
                {/* Close - Always Visible */}
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-1.5 ml-1 text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-all border border-red-500/20"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Settings */}
            <AnimatePresence>
              {showSettings && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-b border-white/[0.04] bg-white/[0.02] overflow-hidden flex-shrink-0">
                  <div className="p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/50">Sound</span>
                      <motion.button whileTap={{ scale: 0.9 }} onClick={() => setIsSoundEnabled(!isSoundEnabled)} aria-label={isSoundEnabled ? 'Mute sound' : 'Enable sound'} className={`p-1.5 rounded-lg ${isSoundEnabled ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-white/30'}`}>{isSoundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}</motion.button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/50">Mood</span>
                      <div className="flex gap-1">{(['helpful', 'excited', 'professional'] as const).map(m => (<motion.button key={m} whileTap={{ scale: 0.9 }} onClick={() => setAiMood(m)} aria-label={`Set AI mood to ${m}`} className={`px-2 py-1 text-xs rounded-lg ${aiMood === m ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-white/30'}`}>{m === 'helpful' ? '😊' : m === 'excited' ? '🚀' : '👔'}</motion.button>))}</div>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-white/5">
                      <span className="text-xs text-white/50 flex items-center gap-1"><Database className="w-3 h-3" /> Clear Memory</span>
                      <motion.button whileTap={{ scale: 0.9 }} onClick={handleClearMemory} aria-label="Clear chat memory" className="px-2 py-1 text-xs rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 flex items-center gap-1"><Trash2 className="w-3 h-3" /></motion.button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Session History Panel */}
            <AnimatePresence>
              {showSessionHistory && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: 'auto', opacity: 1 }} 
                  exit={{ height: 0, opacity: 0 }} 
                  className="border-b border-white/[0.04] bg-gradient-to-b from-purple-500/5 to-transparent overflow-hidden flex-shrink-0"
                >
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[10px] text-white/40 uppercase tracking-wider flex items-center gap-1">
                        <History className="w-3 h-3" /> Past Conversations
                      </p>
                      <span className="text-[10px] text-white/30">{chatSessions.length} saved</span>
                    </div>
                    
                    {chatSessions.length === 0 ? (
                      <div className="text-center py-4">
                        <MessageSquare className="w-8 h-8 text-white/20 mx-auto mb-2" />
                        <p className="text-xs text-white/40">No past conversations yet</p>
                        <p className="text-[10px] text-white/30 mt-1">Start chatting to build history!</p>
                      </div>
                    ) : (
                      <div className="space-y-1.5 max-h-[200px] overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(168,85,247,0.3) transparent' }}>
                        {chatSessions.slice(0, 10).map((session, i) => (
                          <motion.div
                            key={session.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.03 }}
                            onClick={() => handleLoadSession(session)}
                            className="group flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.04] hover:border-purple-500/30 cursor-pointer transition-all"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                              <MessageCircle className="w-4 h-4 text-purple-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white/80 text-xs font-medium truncate">{session.title}</p>
                              <p className="text-white/30 text-[10px] flex items-center gap-1">
                                <span>{session.messages.length} messages</span>
                                <span>•</span>
                                <span>{new Date(session.lastMessageAt).toLocaleDateString()}</span>
                              </p>
                            </div>
                            <motion.button
                              onClick={(e) => handleDeleteSession(session.id, e)}
                              className="p-1.5 rounded-lg opacity-0 group-hover:opacity-100 bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash2 className="w-3 h-3" />
                            </motion.button>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Actions - Polished Pills */}
            {quickActions.length > 0 && messages.length <= 2 && !showSettings && !showSessionHistory && (
              <div className="px-4 py-3 flex-shrink-0">
                <p className="text-[10px] text-purple-300/60 mb-2.5 flex items-center gap-1.5 uppercase tracking-widest font-medium">
                  <Zap className="w-3 h-3 text-yellow-400" />
                  Quick Actions
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickActions.slice(0, isMobile ? 3 : 4).map((a, i) => (
                    <button 
                      key={i} 
                      onClick={() => handleQuickAction(a)} 
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[11px] text-white/80 hover:text-white font-medium transition-all hover:scale-[1.02]"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                        border: '1px solid rgba(139,92,246,0.2)'
                      }}
                    >
                      <span className="text-sm">{a.icon}</span>
                      <span>{a.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages - Polished Design */}
            <div ref={messagesContainerRef} className="relative flex-1 min-h-0 px-4 py-4 space-y-4 overflow-y-auto overflow-x-hidden" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(139,92,246,0.3) transparent' }} onWheel={(e) => e.stopPropagation()}>
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div 
                    key={msg.id} 
                    initial={{ opacity: 0, y: 8 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.2 }} 
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex items-end gap-2.5 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                      {/* Avatar with glow */}
                      <div 
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${msg.role === "user" ? "bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400" : "bg-gradient-to-br from-purple-500 via-pink-500 to-rose-400"}`}
                        style={{ boxShadow: msg.role === "user" ? '0 4px 15px rgba(6,182,212,0.3)' : '0 4px 15px rgba(168,85,247,0.3)' }}
                      >
                        {msg.role === "user" ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                      </div>
                      
                      {/* Message Bubble */}
                      <div className="group">
                        <div 
                          className={`rounded-2xl px-4 py-3 text-[13px] leading-relaxed ${
                            msg.role === "user" 
                              ? "bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 text-white rounded-br-md" 
                              : "text-white/95 rounded-bl-md"
                          }`}
                          style={msg.role === "assistant" ? { 
                            background: 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(255,255,255,0.05) 100%)',
                            border: '1px solid rgba(139,92,246,0.15)'
                          } : { boxShadow: '0 4px 20px rgba(6,182,212,0.25)' }}
                        >
                          <div dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }} />
                          <span className={`text-[9px] mt-2 block ${msg.role === "user" ? "text-white/50" : "text-white/35"}`}>
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        {msg.role === 'assistant' && (
                          <div className="flex gap-0.5 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {['👍', '🚀', '👔', '❤️'].map(e => (
                              <motion.button key={e} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} onClick={() => addReaction(msg.id, e)} className={`p-1 rounded text-xs hover:bg-white/5 ${msg.reactions?.includes(e) ? 'bg-white/10' : ''}`}>{e}</motion.button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="flex items-end gap-2">
                    <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"><Bot className="w-3.5 h-3.5 text-white" /></div>
                    <div className="bg-white/[0.06] rounded-2xl rounded-bl-lg px-4 py-3 border border-white/[0.04]">
                      <div className="flex gap-1">
                        {[0, 1, 2].map(i => (<motion.span key={i} className="w-1.5 h-1.5 bg-cyan-400 rounded-full" animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }} />))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} className="h-1" />
            </div>

            {/* Smart Replies - Polished */}
            {messages.length >= 2 && messages.length < 8 && !isLoading && (
              <div className="px-4 py-2 flex-shrink-0">
                <div className="flex flex-wrap gap-2">
                  {getSmartReplies(messages, pathname || '/', userMemory).slice(0, isMobile ? 2 : 3).map((r, i) => (
                    <button 
                      key={`${r}-${i}`} 
                      onClick={() => handleSendMessage(undefined, r)} 
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] text-white/70 hover:text-white font-medium transition-all hover:scale-[1.02]"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(255,255,255,0.03) 100%)',
                        border: '1px solid rgba(139,92,246,0.15)'
                      }}
                    >
                      <Wand2 className="w-3 h-3 text-purple-400" />{r}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input - Polished Design */}
            <form onSubmit={handleSendMessage} className="relative p-4 flex-shrink-0">
              {/* Top gradient border */}
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
              
              <div className="flex gap-2.5">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={isMobile ? "Ask anything..." : "Ask me anything... (Ctrl+K)"}
                  className="flex-1 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none transition-all"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(255,255,255,0.03) 100%)',
                    border: '1px solid rgba(139,92,246,0.2)'
                  }}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  aria-label="Send message"
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white rounded-xl px-5 py-3 disabled:opacity-40 hover:opacity-90 transition-all active:scale-95"
                  style={{ boxShadow: '0 4px 20px rgba(139,92,246,0.4)' }}
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </button>
              </div>
              {!isMobile && (
                <p className="text-[9px] text-purple-300/40 text-center mt-3 flex items-center justify-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Flyeng AI • Remembers your conversations
                </p>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
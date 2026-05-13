"use client"

import dynamic from 'next/dynamic'
import { GlobalLoader } from "@/components/global-loader"

const QuizContent = dynamic(() => import('./quiz-content'), {
  ssr: false,
  loading: () => <GlobalLoader />
})

export default function QuizPage() {
  return <QuizContent />
}

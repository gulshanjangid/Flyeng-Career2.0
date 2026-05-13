"use client"

import { useState } from "react"
import { ChevronDown } from 'lucide-react'
import { Card } from "@/components/ui/card"

import { AnimatePresence, motion } from "framer-motion"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Is Flyeng Career really free?",
      answer: "Yes! Our free plan includes AI Resume Builder, Career Roadmap, Mock Interviews, and more. Premium features unlock with our Pro and Premium plans."
    },
    {
      question: "How does the AI Interview work?",
      answer: "Our AI conducts real-time mock interviews simulating actual recruiter behavior. You get instant feedback on technical accuracy, communication, and confidence."
    },
    {
      question: "Can I upload my existing resume?",
      answer: "Absolutely! You can upload your current resume (PDF/Word), and our AI will analyze it, giving you a score and actionable suggestions for improvement."
    },
    {
      question: "Is the AI interviewer realistic?",
      answer: "It's designed to be hyper-realistic. It adapts to your answers, asks follow-up questions, and even simulates stress-test scenarios to prepare you for tough interviews."
    },
    {
      question: "Can I get placement guarantees?",
      answer: "Our Premium plan includes guarantee support with 1-on-1 mentor calls, profile reviews, and application strategies from industry experts."
    },
    {
      question: "Do you support freshers?",
      answer: "100%. Our platform is specifically tailored for students and fresh graduates to help them land their first high-paying job in tech."
    },
    {
      question: "How long before I get my first job offer?",
      answer: "On average, students get their first offer in 30-60 days using our daily job matching and interview prep features."
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Frequently Asked <span className="text-blue-500">Questions</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          Everything you need to know about accelerating your career with AI.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <Card
            key={i}
            className={`group border transition-all duration-300 cursor-pointer overflow-hidden
              ${openIndex === i
                ? "bg-white/10 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
              }
            `}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className={`font-semibold text-lg transition-colors ${openIndex === i ? "text-purple-300" : "text-white"}`}>
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-white/60 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-purple-400" : "group-hover:text-white"
                    }`}
                />
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-white/80 text-base leading-relaxed pb-2">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

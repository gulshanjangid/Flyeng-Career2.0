'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Clock, ChevronRight, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { QuizQuestion, QuizResult } from '@/types/quiz';

interface QuizEngineProps {
    questions: QuizQuestion[];
    onComplete: (result: QuizResult) => void;
    title: string;
}

export function QuizEngine({ questions, onComplete, title }: QuizEngineProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [startTime] = useState(Date.now());
    const [answers, setAnswers] = useState<{ questionId: string, selected: number, correct: boolean }[]>([]);

    // Sound effects could go here

    const handleOptionSelect = (index: number) => {
        if (isAnswered) return;
        setSelectedOption(index);
    };

    const handleSubmit = () => {
        if (selectedOption === null) return;

        const currentQuestion = questions[currentIndex];
        const isCorrect = selectedOption === currentQuestion.correctAnswer;

        setIsAnswered(true);
        if (isCorrect) {
            setScore(prev => prev + 1);
        }

        setAnswers(prev => [...prev, {
            questionId: currentQuestion.id,
            selected: selectedOption,
            correct: isCorrect
        }]);
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            finishQuiz();
        }
    };

    const finishQuiz = () => {
        const timeTaken = Math.floor((Date.now() - startTime) / 1000);
        const percentage = Math.round((score / questions.length) * 100);
        const passed = percentage >= 60; // Configurable passing score

        onComplete({
            score,
            totalQuestions: questions.length,
            percentage,
            passed,
            timeTakenSeconds: timeTaken,
            answers
        });
    };

    const currentQuestion = questions[currentIndex];
    const progress = ((currentIndex + 1) / questions.length) * 100;

    return (
        <div className="w-full max-w-3xl mx-auto p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
                    <p className="text-white/40 text-sm">Question {currentIndex + 1} of {questions.length}</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-white font-mono">
                        {/* Timer could go here */}
                        Live
                    </span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="h-1 w-full bg-white/10 rounded-full mb-8 overflow-hidden">
                <motion.div
                    className="h-full bg-cyan-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <Card className="bg-[#0a0a0a] border-white/10 p-8 shadow-xl">
                        <h3 className="text-xl md:text-2xl font-medium text-white mb-8 leading-relaxed">
                            {currentQuestion.question}
                        </h3>

                        <div className="space-y-3">
                            {currentQuestion.options.map((option, index) => {
                                const isSelected = selectedOption === index;
                                const isCorrect = index === currentQuestion.correctAnswer;

                                let borderColor = "border-white/10";
                                let bgColor = "bg-white/5";
                                let textColor = "text-white/70";

                                if (isAnswered) {
                                    if (isCorrect) {
                                        borderColor = "border-green-500";
                                        bgColor = "bg-green-500/10";
                                        textColor = "text-green-400";
                                    } else if (isSelected) {
                                        borderColor = "border-red-500";
                                        bgColor = "bg-red-500/10";
                                        textColor = "text-red-400";
                                    } else if (index === currentQuestion.correctAnswer) {
                                        // Show correct answer if wrong was selected
                                        borderColor = "border-green-500/50";
                                        textColor = "text-green-400";
                                    }
                                } else if (isSelected) {
                                    borderColor = "border-cyan-500";
                                    bgColor = "bg-cyan-500/10";
                                    textColor = "text-white";
                                }

                                return (
                                    <motion.button
                                        key={index}
                                        whileHover={!isAnswered ? { scale: 1.01 } : {}}
                                        whileTap={!isAnswered ? { scale: 0.99 } : {}}
                                        onClick={() => handleOptionSelect(index)}
                                        disabled={isAnswered}
                                        className={`w-full text-left p-5 rounded-xl border ${borderColor} ${bgColor} ${textColor} transition-all flex items-center justify-between group`}
                                    >
                                        <span className="font-medium text-lg">{option}</span>
                                        {isAnswered && isCorrect && <CheckCircle className="w-6 h-6 text-green-500" />}
                                        {isAnswered && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-500" />}
                                    </motion.button>
                                );
                            })}
                        </div>
                    </Card>
                </motion.div>
            </AnimatePresence>

            {/* Footer / Feedback */}
            <div className="mt-8 flex items-center justify-between">
                <div className="flex-1">
                    {isAnswered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white/80"
                        >
                            <p className="font-bold mb-1 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4 text-cyan-400" /> Explanation
                            </p>
                            <p className="text-white/60 text-sm leading-relaxed max-w-xl">
                                {currentQuestion.explanation}
                            </p>
                        </motion.div>
                    )}
                </div>

                <div className="flex items-center gap-4">
                    {!isAnswered ? (
                        <Button
                            onClick={handleSubmit}
                            disabled={selectedOption === null}
                            className="bg-white text-black hover:bg-white/90 font-bold px-8 h-12 rounded-full text-lg"
                        >
                            Submit Answer
                        </Button>
                    ) : (
                        <Button
                            onClick={handleNext}
                            className="bg-cyan-500 text-black hover:bg-cyan-400 font-bold px-8 h-12 rounded-full text-lg flex items-center gap-2"
                        >
                            {currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'} <ChevronRight className="w-5 h-5" />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

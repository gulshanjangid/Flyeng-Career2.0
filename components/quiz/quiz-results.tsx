'use client'

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { QuizResult } from '@/types/quiz';
import { Award, RefreshCcw, ArrowRight, Share2, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizResultsInProps {
    result: QuizResult;
    onRetake: () => void;
    onGenerateCertificate: () => void;
}

export function QuizResults({ result, onRetake, onGenerateCertificate }: QuizResultsInProps) {
    const { score, totalQuestions, percentage, passed } = result;

    useEffect(() => {
        if (passed) {
            const duration = 3 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

            const interval: any = setInterval(function () {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);

                confetti({
                    ...defaults,
                    particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
                });
                confetti({
                    ...defaults,
                    particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
                });
            }, 250);

            return () => clearInterval(interval);
        }
    }, [passed]);

    return (
        <div className="w-full max-w-2xl mx-auto p-8 text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 20 }}
                className="mb-8"
            >
                <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-6 shadow-2xl ${passed ? 'bg-green-500/20 border-2 border-green-500 text-green-500' : 'bg-red-500/20 border-2 border-red-500 text-red-500'}`}>
                    {passed ? <Award className="w-16 h-16" /> : <RefreshCcw className="w-16 h-16" />}
                </div>

                <h2 className="text-4xl font-bold text-white mb-2">
                    {passed ? "Assessment Passed!" : "Needs Improvement"}
                </h2>
                <p className="text-white/60 text-lg">
                    {passed ? "You've demonstrated potential. Claim your credentials." : "Don't worry, mastery takes practice."}
                </p>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-3 gap-4 mb-12"
            >
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <p className="text-white/40 text-sm uppercase tracking-wider mb-1">Score</p>
                    <p className="text-3xl font-bold text-white">{score}/{totalQuestions}</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <p className="text-white/40 text-sm uppercase tracking-wider mb-1">Accuracy</p>
                    <p className={`text-3xl font-bold ${passed ? 'text-green-400' : 'text-red-400'}`}>{percentage}%</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <p className="text-white/40 text-sm uppercase tracking-wider mb-1">Time</p>
                    <p className="text-3xl font-bold text-white">{Math.floor(result.timeTakenSeconds / 60)}m</p>
                </div>
            </motion.div>

            <div className="flex flex-col gap-4">
                {passed ? (
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button
                            onClick={onGenerateCertificate}
                            className="w-full h-16 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xl rounded-xl shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-3"
                        >
                            <Award className="w-6 h-6" /> Generate Certificate
                        </Button>
                    </motion.div>
                ) : (
                    <Button
                        onClick={onRetake}
                        className="w-full h-14 bg-white text-black hover:bg-gray-200 font-bold text-lg rounded-xl"
                    >
                        Retake Assessment
                    </Button>
                )}

                <div className="flex gap-4">
                    <Button variant="outline" className="flex-1 bg-transparent border-white/10 text-white hover:bg-white/5 h-12">
                        <Share2 className="w-4 h-4 mr-2" /> Share Result
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent border-white/10 text-white hover:bg-white/5 h-12" onClick={() => window.location.href = '/dashboard'}>
                        Dashboard <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SiteHeader } from "@/components/site-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { Card } from "@/components/ui/card"
import { AuroraBackground } from "@/components/aurora-background"
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger-container"
import { Mail, MapPin, Phone, Send, Twitter, Linkedin, Instagram, Github, MessageSquare, Rocket, CheckCircle2 } from 'lucide-react'
import confetti from 'canvas-confetti'
import { BackgroundBeams } from "@/components/background-beams"
import { GlowingInput, GlowingTextarea } from "@/components/ui/glowing-input"

export default function ContactPage() {
    const [isSent, setIsSent] = useState(false)
    const [isSending, setIsSending] = useState(false)

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSending(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSending(false)
        setIsSent(true)

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        })
    }

    return (
        <AuroraBackground>
            <BackgroundBeams />
            <div className="relative min-h-screen text-white selection:bg-purple-500/30 flex flex-col w-full">
                <SiteHeader />

                <main className="relative z-10 flex-1 pt-32 pb-20">
                    <div className="container mx-auto px-4">
                        <StaggerContainer className="text-center mb-16">
                            <StaggerItem>
                                <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                                    24/7 Support
                                </span>
                            </StaggerItem>
                            <StaggerItem>
                                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-400">
                                    Get in Touch
                                </h1>
                            </StaggerItem>
                            <StaggerItem>
                                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                    We'd love to hear from you. Our friendly team is always here to chat.
                                </p>
                            </StaggerItem>
                        </StaggerContainer>

                        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Contact Info */}
                            <div className="lg:col-span-1 space-y-6">
                                <StaggerContainer>
                                    {[
                                        { icon: MessageSquare, title: "Chat with us", desc: "Our friendly team is here to help.", action: "Start live chat", color: "text-blue-400" },
                                        { icon: Mail, title: "Email us", desc: "We'll get back to you within 24h.", action: "hello@flyeng.com", color: "text-purple-400" },
                                        { icon: Phone, title: "Call us", desc: "Mon-Fri from 8am to 5pm.", action: "+1 (555) 000-0000", color: "text-pink-400" },
                                        { icon: MapPin, title: "Visit us", desc: "Come say hello at our office HQ.", action: "100 Smith Street, Melbourne", color: "text-cyan-400" },
                                    ].map((item, i) => (
                                        <StaggerItem key={i}>
                                            <Card className="bg-black/40 border-white/10 backdrop-blur-md p-6 hover:bg-white/5 transition-colors cursor-pointer mb-4">
                                                <div className="flex gap-4">
                                                    <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center ${item.color}`}>
                                                        <item.icon className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-white mb-1">{item.title}</h3>
                                                        <p className="text-sm text-gray-400 mb-2">{item.desc}</p>
                                                        <span className={`text-sm font-medium ${item.color} group-hover:underline`}>{item.action}</span>
                                                    </div>
                                                </div>
                                            </Card>
                                        </StaggerItem>
                                    ))}
                                </StaggerContainer>
                            </div>

                            {/* Contact Form */}
                            <motion.div
                                className="lg:col-span-2"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Card className="bg-black/40 border-white/10 p-8 md:p-12 relative overflow-hidden backdrop-blur-xl">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />

                                    <AnimatePresence mode="wait">
                                        {!isSent ? (
                                            <motion.form
                                                key="form"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                className="space-y-6 relative z-10"
                                                onSubmit={handleSend}
                                            >
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium text-gray-400">First name</label>
                                                        <GlowingInput type="text" required placeholder="John" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium text-gray-400">Last name</label>
                                                        <GlowingInput type="text" required placeholder="Doe" />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium text-gray-400">Email</label>
                                                    <GlowingInput type="email" required placeholder="john@example.com" />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium text-gray-400">Message</label>
                                                    <GlowingTextarea rows={5} required placeholder="Tell us about your project..." />
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={isSending}
                                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 disabled:opacity-70"
                                                >
                                                    {isSending ? (
                                                        <Rocket className="w-5 h-5 animate-spin" />
                                                    ) : (
                                                        <>
                                                            Send Message <Send className="w-5 h-5" />
                                                        </>
                                                    )}
                                                </button>
                                            </motion.form>
                                        ) : (
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="text-center py-12"
                                            >
                                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                                                </div>
                                                <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                                                <p className="text-gray-400 mb-8">We'll get back to you shortly.</p>
                                                <button
                                                    onClick={() => setIsSent(false)}
                                                    className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-medium transition-colors"
                                                >
                                                    Send Another
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Card>
                            </motion.div>
                        </div>
                    </div>

                    {/* FAQ Section (New) */}
                    <section className="py-20 max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-400">Can't find the answer you're looking for? Chat with our friendly team.</p>
                        </div>
                        <div className="grid gap-6">
                            {[
                                { q: "How fast is the response time?", a: "We typically reply within 2 hours during business hours (9AM - 6PM EST)." },
                                { q: "Do you offer technical support?", a: "Yes! Our engineering team is available 24/7 for critical platform issues." },
                                { q: "Can I get a custom enterprise plan?", a: "Absolutely. Contact our sales team using the form above for volume licensing." },
                            ].map((faq, i) => (
                                <Card key={i} className="bg-black/40 border-white/10 p-6 hover:bg-white/5 transition-colors">
                                    <h3 className="font-bold text-lg text-white mb-2">{faq.q}</h3>
                                    <p className="text-gray-400">{faq.a}</p>
                                </Card>
                            ))}
                        </div>
                    </section>
                </main>

                <EnhancedFooter />
            </div>
        </AuroraBackground>
    )
}

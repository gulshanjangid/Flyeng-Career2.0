"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

interface SuccessStoriesProps {
    isOpen: boolean
    onClose: () => void
}

const testimonials = [
    {
        name: "Aarav Patel",
        role: "SDE-1 at Amazon",
        image: "https://i.pravatar.cc/150?u=aarav",
        quote: "Flyeng Career's AI mock interviews were a game changer. The feedback was so precise that my actual Amazon interview felt easier than the practice sessions!",
        company: "Amazon"
    },
    {
        name: "Sneha Gupta",
        role: "Frontend Dev at Swiggy",
        image: "https://i.pravatar.cc/150?u=sneha",
        quote: "I was struggling with my resume getting shortlisted. The AI Resume Builder fixed formatting errors I didn't even know existed. Got 3 interview calls in a week!",
        company: "Swiggy"
    },
    {
        name: "Rohan Sharma",
        role: "Data Analyst at Cred",
        image: "https://i.pravatar.cc/150?u=rohan",
        quote: "The career roadmap feature gave me a clear path from zero to hired. It stopped me from wasting time on outdated tutorials.",
        company: "Cred"
    },
    {
        name: "Priya Singh",
        role: "Product Intern at Microsoft",
        image: "https://i.pravatar.cc/150?u=priya",
        quote: "As a fresher, I had no idea what to expect. The 'Real Interview' simulation prepared me for the pressure. Highly recommended!",
        company: "Microsoft"
    },
    {
        name: "Vikram Malhotra",
        role: "Backend Engineer at Zomato",
        image: "https://i.pravatar.cc/150?u=vikram",
        quote: "The job matcher is actually smart. It didn't just show me random jobs, but ones that actually fit my skill set perfectly.",
        company: "Zomato"
    },
    {
        name: "Ananya Das",
        role: "Full Stack Dev at Flipkart",
        image: "https://i.pravatar.cc/150?u=ananya",
        quote: "I used to get rejected in the first round. After using Flyeng, I cracked 3 companies in a month.",
        company: "Flipkart"
    },
    {
        name: "Rahul Verma",
        role: "SDE Intern at Google",
        image: "https://i.pravatar.cc/150?u=rahul",
        quote: "The coding challenges are very similar to what is asked in actual OA rounds. Helped me a lot.",
        company: "Google"
    },
    {
        name: "Meera Iyer",
        role: "Product Designer at Razorpay",
        image: "https://i.pravatar.cc/150?u=meera",
        quote: "Not just for devs! The resume builder helped me highlight my design projects perfectly.",
        company: "Razorpay"
    },
    {
        name: "Karthik R",
        role: "DevOps Engineer at Zerodha",
        image: "https://i.pravatar.cc/150?u=karthik",
        quote: "The system design resources are top notch. Cleared my doubts on scalability and load balancing.",
        company: "Zerodha"
    },
]

const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
    <div className="bg-[#111] border border-white/10 p-6 rounded-2xl mb-4 hover:border-white/20 transition-all group hover:bg-neutral-900">
        <p className="text-white/80 text-sm leading-relaxed mb-4 group-hover:text-white transition-colors">
            "{testimonial.quote}"
        </p>
        <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div>
                <p className="text-white font-medium text-sm">{testimonial.name}</p>
                <p className="text-white/40 text-xs">{testimonial.role}</p>
            </div>
        </div>
    </div>
)

export function SuccessStoriesDialog({ isOpen, onClose }: SuccessStoriesProps) {
    // Split testimonials into columns
    const column1 = testimonials.slice(0, 3)
    const column2 = testimonials.slice(3, 6)
    const column3 = testimonials.slice(6, 9)

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-[95vw] md:w-[95vw] sm:max-w-[95vw] !max-w-[95vw] h-[90vh] bg-[#050505] border-white/10 p-0 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col rounded-3xl outline-none will-change-transform translate-z-0">

                <DialogHeader className="p-8 border-b border-white/5 bg-black/50 backdrop-blur-xl z-20 flex flex-row items-center justify-between">
                    <div>
                        <DialogTitle className="text-4xl font-black text-white tracking-tighter mb-2">Wall of Love</DialogTitle>
                        <p className="text-white/40">Join 10,000+ students accelerating their careers.</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </DialogHeader>

                {/* Marquee Container */}
                <div className="flex-1 overflow-hidden relative pt-10 px-4 md:px-8 bg-black">
                    {/* Gradients */}
                    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full max-w-7xl mx-auto">
                        <div className="relative h-full overflow-hidden">
                            <MarqueeColumn items={column1} duration={20} />
                        </div>
                        <div className="relative h-full overflow-hidden hidden md:block">
                            <MarqueeColumn items={column2} duration={25} reverse />
                        </div>
                        <div className="relative h-full overflow-hidden hidden md:block">
                            <MarqueeColumn items={column3} duration={22} />
                        </div>
                    </div>
                </div>

            </DialogContent>
        </Dialog>
    )
}

function MarqueeColumn({ items, duration, reverse }: { items: any[], duration: number, reverse?: boolean }) {
    return (
        <motion.div
            animate={{ y: reverse ? [-1000, 0] : [0, -1000] }}
            transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
            className={`absolute ${reverse ? 'top-[-1000px]' : 'top-0'} left-0 w-full`}
        >
            {[...items, ...items, ...items, ...items].map((t, i) => (
                <TestimonialCard key={i} testimonial={t} />
            ))}
        </motion.div>
    )
}

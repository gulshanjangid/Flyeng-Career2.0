'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

const testimonials = [
  {
    name: "Priya Sharma",
    role: "SDE at Google",
    company: "Google",
    image: "👩‍💼",
    rating: 5,
    text: "Flyeng Career transformed my placement journey. Got an offer in 45 days!",
    startYear: 2023,
  },
  {
    name: "Arjun Patel",
    role: "Product Manager at Amazon",
    company: "Amazon",
    image: "👨‍💼",
    rating: 5,
    text: "The AI resume builder alone saved me weeks. Best investment for my career.",
    startYear: 2023,
  },
  {
    name: "Neha Gupta",
    role: "Data Scientist at Microsoft",
    company: "Microsoft",
    image: "👩‍🔬",
    rating: 5,
    text: "Interview prep with mock interviews was incredibly realistic. Highly recommend!",
    startYear: 2024,
  },
  {
    name: "Rahul Kumar",
    role: "DevOps Engineer at Netflix",
    company: "Netflix",
    image: "👨‍💻",
    rating: 5,
    text: "Got placed at my dream company. The career roadmap feature was game-changing.",
    startYear: 2024,
  },
  {
    name: "Anjali Singh",
    role: "UX Designer at Figma",
    company: "Figma",
    image: "👩‍🎨",
    rating: 5,
    text: "The personalized job matches connected me with the perfect opportunities.",
    startYear: 2024,
  },
]

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Success Stories from <span className="text-cyan-400">Our Community</span>
        </h2>
        <p className="text-white/70 text-lg">Join 25,000+ students who've transformed their careers</p>
      </div>

      {/* Carousel Container */}
      <div className="relative h-72 mb-8 overflow-hidden">
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeIndex
          const isPrev = index === (activeIndex - 1 + testimonials.length) % testimonials.length
          const isNext = index === (activeIndex + 1) % testimonials.length

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive
                  ? 'opacity-100 translate-y-0 scale-100 z-20'
                  : isPrev
                  ? 'opacity-0 -translate-y-12 scale-95 -z-10'
                  : isNext
                  ? 'opacity-0 translate-y-12 scale-95 -z-10'
                  : 'opacity-0 translate-y-24 scale-90 -z-20'
              }`}
            >
              <Card className="liquid-glass border border-white/20 h-full flex flex-col justify-between p-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/80 text-lg italic">"{testimonial.text}"</p>
                </div>
              </Card>
            </div>
          )
        })}
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-cyan-400 w-8' : 'bg-white/30 w-2 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

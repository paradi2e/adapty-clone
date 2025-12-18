import { useState, useEffect, useRef, useCallback } from 'react'
import { Container } from '@/components/ui/Container'
import { ChevronLeftIcon } from '@/components/icons'
import { testimonials } from '@/data'

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  // Auto-rotation every 10 seconds
  useEffect(() => {
    intervalRef.current = setInterval(goToNext, 10000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [goToNext])

  // Reset timer when manually changing slide
  const handleManualChange = (action: () => void) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    action()
    intervalRef.current = setInterval(goToNext, 10000)
  }

  const currentTestimonial = testimonials[activeIndex]

  return (
    <section className="bg-[#1a1a1a] py-16 md:py-24">
      <Container>
        <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-white text-center mb-8 leading-tight">
          Developer from all kind of apps move to Adapty to grow their revenue
        </h2>

        <div className="w-full h-px bg-gray-700 mb-12" />

        <div className="flex items-center gap-4 md:gap-8">
          <button
            onClick={() => handleManualChange(goToPrev)}
            className="text-white/60 hover:text-[#6720FF] transition-colors p-2 flex-shrink-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon />
          </button>

          <div className="flex-1 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <img
                src={currentTestimonial.photo}
                alt={currentTestimonial.name}
                className="w-[220px] h-[280px] md:w-[280px] md:h-[340px] object-cover rounded-2xl"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                "{currentTestimonial.quote}"
              </p>

              <h3 className="text-white font-semibold text-xl mb-1">
                {currentTestimonial.name}
              </h3>
              <p className="text-white/60 text-sm mb-4">
                {currentTestimonial.role}
              </p>

              <img
                src={currentTestimonial.logo}
                alt={currentTestimonial.logoAlt}
                className="h-8 object-contain mx-auto md:mx-0 brightness-0 invert"
              />
            </div>
          </div>

          <button
            onClick={() => handleManualChange(goToNext)}
            className="text-white/60 hover:text-[#6720FF] transition-colors p-2 flex-shrink-0"
            aria-label="Next testimonial"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleManualChange(() => goToSlide(index))}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === activeIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

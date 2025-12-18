import { useState } from 'react'
import { cn } from '@/utils'
import { Container } from '@/components/ui/Container'

const testimonials = [
  {
    quote: "Adapty SDK made integrating in-app purchases a walk in the park. With just a few lines of code, I was able to implement subscriptions seamlessly for both iOS and Android.",
    author: "Magnús Ólafsson",
    role: "Chief Technology Officer at Smitten",
    initials: "MO",
    bgColor: "from-blue-400 to-blue-600",
  },
  {
    quote: "Whether it's A/B testing paywalls, predicting LTV, or analyzing subscription metrics, Adapty is the ultimate toolkit for app success.",
    author: "Ilgar Tali",
    role: "Founder & Chief Vision Officer",
    company: "Fotorama",
    category: "Photo and video",
    initials: "IT",
    bgColor: "from-purple-400 to-purple-600",
  },
  {
    quote: "I never thought that doing something about refunds could make such a difference. We just flipped the switch, set it up, and suddenly, it felt like we stopped letting money slip away.",
    author: "Berk Çağatay Albayrak",
    role: "Sr. Product Manager",
    company: "Moonly",
    category: "Moon calendar app",
    initials: "BA",
    bgColor: "from-green-400 to-green-600",
  },
]

const featuredTestimonial = {
  quote: "We've tested more than three hundred paywalls in the space of four months. Adapty allows testing basically any element of the paywall, and we took advantage of that. We've tested them all: products, title text, CTA buttons, images, videos etc. With Adapty's A/B testing, we managed to double our monthly revenue. I wasn't sure if one instrument could make such an impact, but I witnessed it myself.",
  author: "Roi Mulia",
  role: "Founder & CEO, SocialKit",
  initials: "RM",
  bgColor: "from-primary to-purple-600",
}

const bottomTestimonials = [
  {
    quote: "Adapty's analytics provides invaluable insights into our app's performance. With detailed real-time metrics like revenue, ARPU, and churn rate, we make informed decisions to optimize our monetization strategy.",
    author: "Nikolay Chebotarev",
    role: "Head of UA at Moonly.app",
    company: "Moodworks Inc",
    category: "Mental health apps",
    initials: "NC",
    bgColor: "from-indigo-400 to-indigo-600",
  },
  {
    quote: "Adapty's Paywall Builder and A/B testing tools paired together are a game changer for anyone trying to do high-velocity testing and find quick wins.",
    author: "Mike McSweeney",
    role: "Chief Product Officer",
    initials: "MM",
    bgColor: "from-pink-400 to-pink-600",
  },
  {
    quote: "They have a great external API that makes it easy to pass related events to other analytics tools such as Amplitude and Mixpanel.",
    author: "Chris Bick",
    role: "Founder and CEO",
    initials: "CB",
    bgColor: "from-teal-400 to-teal-600",
  },
]

// Carousel Arrow component
function CarouselArrow({ direction, onClick, disabled }: { direction: 'left' | 'right', onClick: () => void, disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'w-10 h-10 rounded-full border flex items-center justify-center transition-all',
        disabled
          ? 'border-gray-200 text-gray-300 cursor-not-allowed'
          : 'border-gray-300 text-gray-600 hover:border-primary hover:text-primary hover:bg-primary/5'
      )}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={direction === 'left' ? 'rotate-180' : ''}>
        <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

// Avatar component with gradient background
function Avatar({ initials, bgColor, size = 'md' }: { initials: string, bgColor: string, size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
  }

  return (
    <div className={cn(
      'rounded-full flex items-center justify-center text-white font-semibold bg-gradient-to-br shadow-md',
      bgColor,
      sizeClasses[size]
    )}>
      {initials}
    </div>
  )
}

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company?: string
  category?: string
  initials: string
  bgColor?: string
  small?: boolean
}

function TestimonialCard({ quote, author, role, company, category, initials, bgColor = 'from-primary to-purple-600', small }: TestimonialCardProps) {
  return (
    <div className={cn(
      'bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow',
      small ? 'p-4' : 'p-5'
    )}>
      <p className={cn(
        'text-gray-600 mb-4 leading-relaxed',
        small ? 'text-sm' : 'text-sm'
      )}>
        "{quote}"
      </p>
      <div className="flex items-center gap-3">
        <Avatar initials={initials} bgColor={bgColor} size={small ? 'sm' : 'md'} />
        <div>
          <p className="font-medium text-gray-900 text-sm">{author}</p>
          <p className="text-xs text-gray-500">{role}</p>
          {company && (
            <p className="text-xs text-gray-400">
              {company} {category && `• ${category}`}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 4

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1))
  }

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <Container>
        {/* Section header with arrows */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex-1">
            <p className="text-gray-600">
              Developer from all kind of apps move to Adapty to grow their revenue
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <CarouselArrow direction="left" onClick={handlePrev} disabled={currentSlide === 0} />
            <CarouselArrow direction="right" onClick={handleNext} disabled={currentSlide === totalSlides - 1} />
          </div>
        </div>

        {/* Top row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>

        {/* Featured testimonial - full width */}
        <div className="bg-gray-900 rounded-xl p-6 md:p-8 mb-4">
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
            "{featuredTestimonial.quote}"
          </p>
          <div className="flex items-center gap-3">
            <Avatar initials={featuredTestimonial.initials} bgColor={featuredTestimonial.bgColor} size="lg" />
            <div>
              <p className="font-medium text-white">{featuredTestimonial.author}</p>
              <p className="text-sm text-white/60">{featuredTestimonial.role}</p>
            </div>
          </div>
        </div>

        {/* Bottom row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bottomTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} small />
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center items-center gap-4 mt-8">
          {/* Mobile arrows */}
          <div className="md:hidden">
            <CarouselArrow direction="left" onClick={handlePrev} disabled={currentSlide === 0} />
          </div>

          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all',
                  currentSlide === index
                    ? 'bg-gray-900 w-4'
                    : 'bg-gray-300 hover:bg-gray-400'
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile arrows */}
          <div className="md:hidden">
            <CarouselArrow direction="right" onClick={handleNext} disabled={currentSlide === totalSlides - 1} />
          </div>
        </div>
      </Container>
    </section>
  )
}

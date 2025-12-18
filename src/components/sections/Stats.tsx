import { useState, useEffect, useRef } from 'react'
import { Container } from '@/components/ui/Container'

interface StatItem {
  prefix?: string
  value: number
  suffix?: string
  decimals?: number
  label: string
}

const stats: StatItem[] = [
  { prefix: '$', value: 2, suffix: 'B', label: 'tracked revenue' },
  { value: 99.99, suffix: '%', decimals: 2, label: 'historical uptime' },
  { value: 2.5, suffix: 'B', decimals: 1, label: 'users served' },
  { value: 60, suffix: 'B', label: 'API calls / month' },
]

function AnimatedCounter({
  prefix = '',
  value,
  suffix = '',
  decimals = 0,
  isVisible
}: StatItem & { isVisible: boolean }) {
  const [count, setCount] = useState(0)
  const duration = 2000 // 2 seconds animation

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      setCount(easeOutQuart * value)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, value])

  const displayValue = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toString()

  return (
    <span>
      {prefix}{displayValue}{suffix}
    </span>
  )
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-[#f7f5f2]">
      <Container>
        {/* Section header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-gray-900" style={{ lineHeight: '110%' }}>
            Adapty processes subscription revenue
            <br />
            with the industry's highest SLA Rate
          </h2>
        </div>

        {/* Stats grid - always horizontal */}
        <div className="flex justify-center items-start gap-8 md:gap-16 lg:gap-24 flex-nowrap overflow-x-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center flex-shrink-0">
              <div className="text-[36px] md:text-[44px] lg:text-[48px] font-bold text-gray-900 whitespace-nowrap" style={{ lineHeight: '112%' }}>
                <AnimatedCounter {...stat} isVisible={isVisible} />
              </div>
              <div className="text-gray-500 text-[14px] md:text-[16px] lg:text-[18px] font-medium" style={{ lineHeight: '140%' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

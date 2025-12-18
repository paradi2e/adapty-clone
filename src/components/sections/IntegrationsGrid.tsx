import { useState, useEffect, useRef } from 'react'
import { integrations } from '@/data'

interface IntegrationCardProps {
  name: string
  logo: string
  isActive: boolean
}

function IntegrationCard({ name, logo, isActive }: IntegrationCardProps) {
  return (
    <div
      className={`group relative bg-white rounded-[4px] px-4 py-2 flex items-center justify-center h-[56px] transition-all duration-200 cursor-pointer overflow-hidden ${
        isActive ? 'grayscale-0' : 'grayscale hover:grayscale-0'
      }`}
    >
      <div
        className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,180,0.15)_0%,_rgba(59,130,180,0.3)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-[4px] ${
          isActive ? 'opacity-100' : ''
        }`}
      />
      <img
        src={logo}
        alt={name}
        className={`h-[48px] w-full object-contain relative z-10 transition-all duration-200 scale-[1.3] group-hover:scale-[1.35] ${
          isActive ? 'scale-[1.35]' : ''
        }`}
      />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
        Read more about integration with {name}
      </div>
    </div>
  )
}

export function IntegrationsGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let count = 0
          const maxCount = 9
          const interval = setInterval(() => {
            if (count >= maxCount) {
              clearInterval(interval)
              setActiveIndex(null)
              return
            }
            const randomIndex = Math.floor(Math.random() * integrations.length)
            setActiveIndex(randomIndex)
            count++
          }, 333)
        }
      },
      { threshold: 0.5 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const mainGridItems = integrations.slice(0, 20)
  const bottomRowItems = integrations.slice(20, 22)

  return (
    <div ref={containerRef} className="grid grid-cols-4 gap-[3px]">
      {mainGridItems.map((item, index) => (
        <IntegrationCard
          key={item.name}
          name={item.name}
          logo={item.logo}
          isActive={activeIndex === index}
        />
      ))}

      {/* Bottom row - centered */}
      <div className="col-span-4 flex justify-center gap-[3px] mt-0">
        {bottomRowItems.map((item, index) => (
          <div key={item.name} className="w-[calc(25%-2px)]">
            <IntegrationCard
              name={item.name}
              logo={item.logo}
              isActive={activeIndex === 20 + index}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

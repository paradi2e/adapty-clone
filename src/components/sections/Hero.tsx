import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

// Arrow icon component
const ArrowRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform duration-200 group-hover:translate-x-1"
  >
    <path
      d="M3 8H13M13 8L8 3M13 8L8 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export function Hero() {
  const [email, setEmail] = useState('')

  return (
    <section className="relative pt-6 pb-4 md:pt-10 md:pb-6 overflow-hidden bg-[#f7f5f2]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-start">
          {/* Left column - Text */}
          <div className="max-w-xl pt-4">
            {/* Ebook banner - aligned left with white background */}
            <a
              href="#"
              className="group inline-flex items-center gap-2 pl-1 pr-3 py-1 bg-white hover:bg-gray-50 rounded-full text-sm font-medium transition-colors mb-8 shadow-sm"
            >
              <span className="bg-[#e8e0fa] text-xs font-semibold px-2.5 py-1 rounded-full"><span className="text-gradient-animated">Ebook</span></span>
              <span className="text-gradient-animated">$100K playbook | download</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5 text-primary">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.08] mb-6 text-gradient-animated">
              Revenue
              <br />
              management
              <br />
              for in-app
              <br />
              purchases
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Save months on integrating subscriptions and double your app revenue with paywall management.
            </p>

            {/* Email form with button inside */}
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-[400px]">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-14 pl-5 pr-40 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
                <Button
                  size="md"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 shadow-lg shadow-primary/25 whitespace-nowrap h-11 px-4"
                >
                  Start for free
                  <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
              <a href="#" className="group inline-flex items-center gap-1.5 text-primary font-semibold hover:text-primary/80 transition-colors whitespace-nowrap">
                Book a demo
                <ArrowRight />
              </a>
            </div>
          </div>

          {/* Right column - Hero Images */}
          <div className="relative h-[520px] lg:h-[580px] pointer-events-none">
            {/* Dashboard overview - from real image (behind phone) */}
            <div className="absolute left-[120px] lg:left-[160px] top-0 z-10 w-[500px] lg:w-[560px]">
              <img
                src="/images/overview-dashboard.webp"
                alt="Adapty dashboard overview"
                className="w-full h-auto drop-shadow-xl"
              />
            </div>

            {/* iPhone paywall mockup - from real image (in front) */}
            <div className="absolute left-0 top-16 z-20 w-[180px] lg:w-[200px]">
              <img
                src="/images/paywall-demo.webp"
                alt="Adapty paywall demo"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

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
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            The best solution to grow mobile{' '}
            <span className="text-gradient-animated">in-app purchases</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Adapty helps you maximize mobile app revenue with powerful paywall builder,
            real-time analytics, and A/B testing tools.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              iconRight={<ArrowRight />}
              className="group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
            >
              Start for Free
            </Button>
            <Button
              variant="outline"
              size="lg"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Trust badge */}
          <p className="mt-8 text-sm text-gray-500">
            No credit card required • Free trial • Cancel anytime
          </p>
        </div>
      </Container>
    </section>
  )
}

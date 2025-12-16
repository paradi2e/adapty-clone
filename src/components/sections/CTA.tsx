import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

// Arrow icon
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

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-primary-hover relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to grow your subscription revenue?
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Start your free trial today and see why thousands of apps trust Adapty
            to power their subscription business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              iconRight={<ArrowRight />}
              className="group bg-white text-primary hover:bg-gray-100 shadow-xl"
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Schedule Demo
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/60">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </Container>
    </section>
  )
}

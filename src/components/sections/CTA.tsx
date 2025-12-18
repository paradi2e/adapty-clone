import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function CTA() {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Text */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
              Get started today or schedule a demo
            </h2>
            <p className="text-gray-600 text-sm">
              for your personal onboarding
            </p>
          </div>

          {/* Right - Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="shadow-lg shadow-primary/25 uppercase text-sm font-semibold tracking-wide"
            >
              Start for free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="uppercase text-sm font-semibold tracking-wide"
            >
              Schedule a demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

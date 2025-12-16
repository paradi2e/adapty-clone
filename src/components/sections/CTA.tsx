import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function CTA() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-100">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Get started today or schedule a demo
            </h2>
            <p className="text-gray-600">
              for your personal onboarding
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="shadow-lg shadow-primary/25">
              START FOR FREE
            </Button>
            <Button variant="outline" size="lg">
              SCHEDULE A DEMO
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

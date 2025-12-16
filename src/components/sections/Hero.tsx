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
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Ebook banner */}
      <Container>
        <div className="flex justify-center mb-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors"
          >
            <span className="text-primary">Ebook</span>
            <span>$100K playbook | download</span>
            <ArrowRight />
          </a>
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-primary">Revenue</span>
              <br />
              <span className="text-primary">management</span>
              <br />
              for in-app
              <br />
              purchases
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Save months on integrating subscriptions and double your app revenue with paywall management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group shadow-lg shadow-primary/25"
              >
                Book a demo
              </Button>
            </div>
          </div>

          {/* Right column - Hero Images */}
          <div className="relative">
            {/* Main dashboard image */}
            <img
              src="/images/hero/adapty-overview.webp"
              alt="Adapty Dashboard Overview"
              className="rounded-2xl shadow-2xl w-full"
            />
            {/* Floating paywall preview */}
            <img
              src="/images/hero/paywall-demo.webp"
              alt="Paywall Demo"
              className="absolute -bottom-8 -left-8 w-48 rounded-xl shadow-xl border-4 border-white hidden md:block"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

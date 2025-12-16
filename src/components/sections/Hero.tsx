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

          {/* Right column - Hero Image placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 aspect-square flex items-center justify-center">
              {/* Phone mockup placeholder */}
              <div className="relative w-48 h-96 bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-primary/20 to-primary/40 rounded-[2.5rem] flex items-center justify-center">
                  <span className="text-white/60 text-sm">App Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

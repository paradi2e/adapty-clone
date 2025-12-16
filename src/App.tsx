import { Button, Container, Section, Card } from '@/components/ui'
import { Header, Footer } from '@/components/layout'

// Arrow icon for button demo
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* Hero-like Section */}
      <Section background="white" padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 text-gray-800">
              The Best Solution to Grow Mobile
              <span className="text-gradient-animated"> In-App Purchases</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Build, test, and optimize your subscription monetization with powerful tools and real-time analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" iconRight={<ArrowRight />}>
                Get Started Free
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Cards */}
      <Section background="light" padding="xl">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Everything you need to grow revenue
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="default" hoverable padding="lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">Paywall Builder</h3>
              <p className="text-gray-600 mb-4">
                Create beautiful paywalls without code. A/B test different designs.
              </p>
              <Button variant="ghost" size="sm" iconRight={<ArrowRight />}>
                Learn More
              </Button>
            </Card>

            <Card variant="default" hoverable padding="lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Real-time Analytics</h3>
              <p className="text-gray-600 mb-4">
                Track revenue, subscriptions, and user behavior in real-time.
              </p>
              <Button variant="ghost" size="sm" iconRight={<ArrowRight />}>
                Learn More
              </Button>
            </Card>

            <Card variant="default" hoverable padding="lg">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-bold mb-2">A/B Testing</h3>
              <p className="text-gray-600 mb-4">
                Run experiments to optimize your monetization strategy.
              </p>
              <Button variant="ghost" size="sm" iconRight={<ArrowRight />}>
                Learn More
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Integrations Section */}
      <Section background="aqua" padding="lg">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Integrates with your favorite tools
            </h2>
            <p className="text-gray-600 mb-8">
              Connect Adapty with analytics, attribution, and marketing platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {['Stripe', 'Firebase', 'Mixpanel', 'Amplitude', 'AppsFlyer', 'Branch'].map((name) => (
                <div key={name} className="text-gray-600 font-semibold">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Dark Section */}
      <Section background="dark" padding="xl">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Trusted by leading mobile apps
            </h2>
            <p className="text-gray-400 mb-8">
              Join thousands of developers who use Adapty to grow their subscription revenue.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">$1B+</div>
                <div className="text-gray-400 text-sm">Revenue tracked</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">10K+</div>
                <div className="text-gray-400 text-sm">Apps powered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">200M+</div>
                <div className="text-gray-400 text-sm">Transactions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Status Section */}
      <Section background="white" padding="lg">
        <Container>
          <Card variant="default" className="bg-green-50 border-green-200">
            <h2 className="text-2xl font-bold text-green-800 mb-2">✅ Phase 3 Complete!</h2>
            <p className="text-green-700 mb-4">
              Layout components are ready.
            </p>
            <ul className="text-green-700 list-disc list-inside space-y-1">
              <li>Header (logo, nav, dropdown, mobile menu) ✓</li>
              <li>Footer (CTA, nav grid, socials) ✓</li>
              <li>Logo (color & white variants) ✓</li>
            </ul>
          </Card>
        </Container>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App

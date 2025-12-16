import { Button, Container, Section, Card } from '@/components/ui'

// Arrow icon for button demo
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-primary text-white py-4 sticky top-0 z-50">
        <Container>
          <h1 className="text-2xl font-bold">Adapty Clone - UI Kit Test (Phase 2)</h1>
        </Container>
      </header>

      {/* Button Section */}
      <Section background="white" padding="lg">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">1. Button Component</h2>

          {/* Variants */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-600">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-600">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* With Icons */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-600">With Icons</h3>
            <div className="flex flex-wrap gap-4">
              <Button iconRight={<ArrowRight />}>Get Started</Button>
              <Button variant="outline" iconRight={<ArrowRight />}>Learn More</Button>
              <Button variant="secondary" iconLeft={<ArrowRight />}>Back</Button>
            </div>
          </div>

          {/* States */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-600">States</h3>
            <div className="flex flex-wrap gap-4">
              <Button disabled>Disabled</Button>
              <Button isLoading>Loading</Button>
              <Button fullWidth>Full Width Button</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Container Section */}
      <Section background="light" padding="lg">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">2. Container Component</h2>

          <div className="space-y-6">
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Default Container (max-w: 1100px)</p>
              <div className="bg-primary h-4 rounded"></div>
            </div>
          </div>

          <div className="mt-8">
            <Container size="sm" className="bg-aqua-600 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Small Container (max-w: 800px)</p>
            </Container>
          </div>
        </Container>
      </Section>

      {/* Section Component */}
      <Section background="white" padding="md">
        <Container>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">3. Section Component</h2>
          <p className="text-gray-600">This is a white section with medium padding</p>
        </Container>
      </Section>

      <Section background="aqua" padding="md">
        <Container>
          <p className="text-gray-800 font-semibold">Aqua background section</p>
        </Container>
      </Section>

      <Section background="dark" padding="md">
        <Container>
          <p className="text-white font-semibold">Dark background section</p>
        </Container>
      </Section>

      {/* Card Section */}
      <Section background="light" padding="lg">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">4. Card Component</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="default">
              <h3 className="font-semibold mb-2">Default Card</h3>
              <p className="text-gray-600 text-sm">With border and white background</p>
            </Card>

            <Card variant="outline">
              <h3 className="font-semibold mb-2">Outline Card</h3>
              <p className="text-gray-600 text-sm">Transparent with border</p>
            </Card>

            <Card variant="elevated">
              <h3 className="font-semibold mb-2">Elevated Card</h3>
              <p className="text-gray-600 text-sm">With shadow, no border</p>
            </Card>

            <Card variant="default" hoverable>
              <h3 className="font-semibold mb-2">Hoverable Card</h3>
              <p className="text-gray-600 text-sm">Hover me for effect!</p>
            </Card>
          </div>

          {/* Card sizes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card padding="sm" rounded="sm">
              <p className="text-sm">Small padding, small rounded</p>
            </Card>
            <Card padding="md" rounded="md">
              <p className="text-sm">Medium padding, medium rounded</p>
            </Card>
            <Card padding="lg" rounded="lg">
              <p className="text-sm">Large padding, large rounded</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Combined Example */}
      <Section background="white" padding="xl">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">5. Combined Example</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card variant="default" hoverable padding="lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Quick Setup</h3>
              <p className="text-gray-600 mb-4">
                Get started in minutes with our simple SDK integration.
              </p>
              <Button variant="primary" size="sm" iconRight={<ArrowRight />}>
                Learn More
              </Button>
            </Card>

            <Card variant="default" hoverable padding="lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Analytics</h3>
              <p className="text-gray-600 mb-4">
                Track your revenue and subscription metrics in real-time.
              </p>
              <Button variant="outline" size="sm" iconRight={<ArrowRight />}>
                View Demo
              </Button>
            </Card>

            <Card variant="default" hoverable padding="lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Secure</h3>
              <p className="text-gray-600 mb-4">
                Enterprise-grade security for your subscription data.
              </p>
              <Button variant="ghost" size="sm" iconRight={<ArrowRight />}>
                Read More
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Status Section */}
      <Section background="white" padding="lg">
        <Container>
          <Card variant="default" className="bg-green-50 border-green-200">
            <h2 className="text-2xl font-bold text-green-800 mb-2">✅ Phase 2 Complete!</h2>
            <p className="text-green-700 mb-4">
              UI Kit components are ready for use.
            </p>
            <ul className="text-green-700 list-disc list-inside space-y-1">
              <li>Button (4 variants, 3 sizes, icons, states) ✓</li>
              <li>Container (5 sizes, responsive padding) ✓</li>
              <li>Section (5 backgrounds, 5 paddings) ✓</li>
              <li>Card (4 variants, 3 paddings, 3 rounded, hoverable) ✓</li>
            </ul>
          </Card>
        </Container>
      </Section>
    </div>
  )
}

export default App

import { Header, Footer } from '@/components/layout'
import {
  Hero,
  TrustedBy,
  Features,
  Stats,
  Integrations,
  Pricing,
  CTA,
} from '@/components/sections'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* Page Sections */}
      <Hero />
      <TrustedBy />
      <Features />
      <Stats />
      <Integrations />
      <Pricing />
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App

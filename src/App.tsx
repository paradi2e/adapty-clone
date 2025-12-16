import { Header, Footer } from '@/components/layout'
import {
  Hero,
  TrustedBy,
  HelpTeam,
  Stats,
  Features,
  Testimonials,
  Enterprise,
  Cases,
  CTA,
} from '@/components/sections'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* Page Sections - matching adapty.io order */}
      <Hero />
      <TrustedBy />
      <HelpTeam />
      <Stats />
      <Features />
      <Testimonials />
      <Enterprise />
      <Cases />
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App

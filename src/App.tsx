import { Header, Footer } from '@/components/layout'
import {
  Hero,
  TrustedBy,
  HelpTeam,
  Stats,
  CodeSection,
  Features,
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
      <CodeSection />
      <Features />

      {/* Footer (includes CTA section) */}
      <Footer />
    </div>
  )
}

export default App

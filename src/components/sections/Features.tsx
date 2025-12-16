import { cn } from '@/utils'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

// Arrow icon
const ArrowRight = () => (
  <svg
    width="14"
    height="14"
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

// SDK platforms
const platforms = [
  { name: 'Swift', color: 'bg-orange-100 text-orange-600' },
  { name: 'Kotlin', color: 'bg-purple-100 text-purple-600' },
  { name: 'React Native', color: 'bg-blue-100 text-blue-600' },
  { name: 'Flutter', color: 'bg-cyan-100 text-cyan-600' },
  { name: 'Unity', color: 'bg-gray-100 text-gray-600' },
]

interface FeatureSectionProps {
  title: string
  description: string
  cta: string
  ctaLink?: string
  imagePosition?: 'left' | 'right'
  badge?: string
  children?: React.ReactNode
  bgColor?: string
}

function FeatureSection({
  title,
  description,
  cta,
  imagePosition = 'right',
  badge,
  children,
  bgColor = 'bg-white',
}: FeatureSectionProps) {
  return (
    <section className={cn('py-16 md:py-24', bgColor)}>
      <Container>
        <div className={cn(
          'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
          imagePosition === 'left' && 'lg:grid-flow-dense'
        )}>
          {/* Text content */}
          <div className={imagePosition === 'left' ? 'lg:col-start-2' : ''}>
            {badge && (
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                {badge}
              </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {description}
            </p>
            <Button variant="ghost" iconRight={<ArrowRight />} className="group -ml-3">
              {cta}
            </Button>
          </div>

          {/* Image/Visual placeholder */}
          <div className={cn(
            'relative',
            imagePosition === 'left' && 'lg:col-start-1'
          )}>
            {children || (
              <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center">
                <span className="text-gray-400">Feature Image</span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export function Features() {
  return (
    <>
      {/* SDK Integration */}
      <FeatureSection
        title="Integrate in-app purchases with a few lines of code"
        description="Integrate IAPs within a few hours without server coding. Adapty handles the correct subscription state, taking everything under the hood, from free trials to refunds, in a simple, developer-friendly SDK."
        cta="Make subscriptions easy"
        imagePosition="right"
      >
        <div className="bg-gray-900 rounded-2xl p-6 text-white font-mono text-sm overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <pre className="text-green-400 overflow-x-auto">
{`// Your app's code
import Adapty

do {
  try await Adapty.activate("PUBLIC_SDK_KEY")

  // Make a purchase, Adapty handles the rest
  let purchaseResult = try await Adapty.makePurchase(product)
  // successful purchase
} catch {
  // handle the error
}`}
          </pre>
        </div>
      </FeatureSection>

      {/* SDK Platforms */}
      <section className="py-8 bg-gray-50">
        <Container>
          <p className="text-center text-gray-600 mb-6">Get the SDK for your platform</p>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <span
                key={platform.name}
                className={cn(
                  'px-4 py-2 rounded-lg font-medium text-sm cursor-pointer hover:scale-105 transition-transform',
                  platform.color
                )}
              >
                {platform.name}
              </span>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <span className="text-sm text-gray-500">100% Open Source</span>
            <a href="#" className="text-sm text-primary hover:underline">Go to GitHub</a>
          </div>
        </Container>
      </section>

      {/* Increase Revenue */}
      <FeatureSection
        title="Increase subscription revenue without app releases"
        description="Manage, target, localize and personalize paywalls without leaving your browser."
        cta="Increase app revenue"
        imagePosition="left"
      >
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 aspect-video flex items-center justify-center">
          <div className="w-32 h-56 bg-white rounded-2xl shadow-xl flex items-center justify-center">
            <span className="text-gray-400 text-sm">Paywall</span>
          </div>
        </div>
      </FeatureSection>

      {/* Refund Saver */}
      <FeatureSection
        title="Cut refund rate by 40%"
        description="Stop losing revenue on refunds – Adapty automatically shares user activity data with Apple for refund requests and reduces it."
        cta="Set up Refund Saver"
        imagePosition="right"
      >
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="h-40 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
            <svg className="w-32 h-20 text-gray-300" viewBox="0 0 100 50">
              <path d="M0 40 Q25 20, 50 30 T100 20" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </FeatureSection>

      {/* Analytics */}
      <FeatureSection
        title="Know your subscription numbers at any moment"
        description="Measure your in-app economy from trials to refunds with a ready-to-go, real-time subscription BI."
        cta="See subscription BI"
        imagePosition="left"
        bgColor="bg-gray-50"
      >
        <div className="bg-primary/10 rounded-2xl p-8 aspect-video flex items-center justify-center">
          <span className="text-primary/60">Analytics Dashboard</span>
        </div>
      </FeatureSection>

      {/* No-code Paywall Builder */}
      <FeatureSection
        title="No-code paywall builder"
        description="Build beautiful native paywalls for iOS, Android, Flutter, and React Native without a dev team."
        cta="Create paywalls within minutes"
        imagePosition="right"
      >
        <div className="flex gap-4 justify-center">
          <div className="w-28 h-48 bg-white border border-gray-200 rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-gray-400 text-xs">iOS</span>
          </div>
          <div className="w-28 h-48 bg-white border border-gray-200 rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-gray-400 text-xs">Android</span>
          </div>
        </div>
      </FeatureSection>

      {/* Web Funnels */}
      <FeatureSection
        title="Boost app revenue fast with web funnels"
        description="Build and launch web-to-app funnels, integrate payments, optimize with A/B testing and scale globally — all in one platform, no coding needed."
        cta="Explore FunnelFox"
        imagePosition="left"
        bgColor="bg-gray-50"
      >
        <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl p-8 aspect-video flex items-center justify-center">
          <span className="text-orange-600/60">FunnelFox Preview</span>
        </div>
      </FeatureSection>

      {/* Integrations */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
                In-app-purchase events
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sync purchase data with other services
              </h2>
              <p className="text-lg text-white/80 mb-6">
                Forward subscription events to analytics and attribution services without coding.
              </p>
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 -ml-3"
                iconRight={<ArrowRight />}
              >
                Explore integrations
              </Button>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 aspect-video flex items-center justify-center">
              <span className="text-white/40">Integration Diagram</span>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

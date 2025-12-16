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

// Feature data
const features = [
  {
    id: 'paywall',
    title: 'No-code Paywall Builder',
    description: 'Create stunning paywalls in minutes without writing a single line of code. Design, test, and deploy directly from the dashboard.',
    color: 'bg-purple-50',
    iconColor: 'text-primary',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 12H28" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 18H22" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 22H18" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: 'analytics',
    title: 'Real-time Analytics',
    description: 'Get instant insights into your subscription metrics. Track MRR, churn, LTV, and more with beautiful dashboards.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 24V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 24V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 24V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 24V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'ab-testing',
    title: 'A/B Testing',
    description: 'Run experiments to optimize pricing, paywalls, and offers. Make data-driven decisions with statistical significance.',
    color: 'bg-green-50',
    iconColor: 'text-green-600',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="16" r="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="22" cy="16" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 13V19M22 13V19" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: 'integrations',
    title: '30+ Integrations',
    description: 'Connect with analytics, attribution, and marketing tools. Send data to AppsFlyer, Amplitude, Mixpanel, and more.',
    color: 'bg-orange-50',
    iconColor: 'text-orange-600',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 4V8M16 24V28M4 16H8M24 16H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7.5 7.5L10.3 10.3M21.7 21.7L24.5 24.5M7.5 24.5L10.3 21.7M21.7 10.3L24.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'remote-config',
    title: 'Remote Config',
    description: 'Update your app behavior without releasing new versions. Change pricing, features, and content on the fly.',
    color: 'bg-pink-50',
    iconColor: 'text-pink-600',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 14H22M10 18H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="8" r="4" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'webhooks',
    title: 'Webhooks & API',
    description: 'Build custom integrations with our powerful API. Get real-time notifications for subscription events.',
    color: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12L4 16L8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 12L28 16L24 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 8L14 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

interface FeatureCardProps {
  title: string
  description: string
  color: string
  iconColor: string
  icon: React.ReactNode
}

function FeatureCard({ title, description, color, iconColor, icon }: FeatureCardProps) {
  return (
    <div
      className={cn(
        'group relative p-6 rounded-2xl transition-all duration-300',
        'border border-gray-200 bg-white',
        'hover:border-gray-100 hover:shadow-xl hover:-translate-y-1'
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          'w-14 h-14 rounded-xl flex items-center justify-center mb-4',
          color,
          iconColor
        )}
      >
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

      {/* Learn more link */}
      <Button variant="ghost" size="sm" iconRight={<ArrowRight />} className="group -ml-3">
        Learn more
      </Button>
    </div>
  )
}

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Everything you need to grow revenue
          </h2>
          <p className="text-lg text-gray-600">
            Powerful tools to build, test, and optimize your subscription monetization strategy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              iconColor={feature.iconColor}
              icon={feature.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

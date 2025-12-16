import { cn } from '@/utils'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

// Integration categories
const integrationCategories = [
  {
    title: 'Analytics',
    integrations: ['Amplitude', 'Mixpanel', 'Firebase', 'Segment'],
  },
  {
    title: 'Attribution',
    integrations: ['AppsFlyer', 'Adjust', 'Branch', 'Singular'],
  },
  {
    title: 'Marketing',
    integrations: ['OneSignal', 'Braze', 'CleverTap', 'Iterable'],
  },
  {
    title: 'CRM',
    integrations: ['Salesforce', 'HubSpot', 'Intercom', 'Zendesk'],
  },
]

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

export function Integrations() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Integrates with your stack
          </h2>
          <p className="text-lg text-gray-600">
            Connect Adapty with 30+ analytics, attribution, and marketing tools you already use.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {integrationCategories.map((category) => (
            <div
              key={category.title}
              className={cn(
                'p-6 rounded-2xl bg-white',
                'border border-gray-200',
                'hover:border-primary/20 hover:shadow-lg transition-all duration-300'
              )}
            >
              <h3 className="font-semibold text-gray-800 mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.integrations.map((integration) => (
                  <li
                    key={integration}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary/60" />
                    {integration}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" iconRight={<ArrowRight />} className="group">
            View all integrations
          </Button>
        </div>
      </Container>
    </section>
  )
}

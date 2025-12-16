import { Container } from '@/components/ui/Container'

const features = [
  {
    icon: '👨‍💻',
    title: 'For developers',
    items: ['Subscriptions SDK', 'Refund Saver', 'Remote config', 'Fallback paywalls'],
  },
  {
    icon: '📊',
    title: 'For app owners',
    items: ['Revenue analytics', 'LTV analytics', 'AI LTV and revenue predictions'],
  },
  {
    icon: '📈',
    title: 'For marketers',
    items: ['A/B testing', 'No-code Builder', 'Localizations', 'Targeting'],
  },
]

export function HelpTeam() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Help your team run the mobile subscription business.
          </h2>
          <p className="text-xl text-gray-600">
            Faster and cheaper.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <ul className="space-y-2">
                {feature.items.map((item) => (
                  <li key={item} className="text-gray-600 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

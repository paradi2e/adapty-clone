import { Container } from '@/components/ui/Container'

const securityFeatures = [
  {
    title: 'Secure',
    items: ['SOC2 verified', 'Encrypted', '24/7 global fraud monitoring'],
  },
  {
    title: 'Reliable',
    items: ['99.99% SLA', 'Over $500M/year of in-app purchases processed'],
  },
  {
    title: 'Responsive',
    items: ['Dedicated customer success manager', 'Direct communication via Slack', 'Live chat on the website', 'Four ways to reach us'],
  },
]

export function Enterprise() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Enterprise-grade platform
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature) => (
            <div key={feature.title} className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <ul className="space-y-2">
                {feature.items.map((item) => (
                  <li key={item} className="text-gray-600 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Trusted for usability and customer service</p>
          <p className="text-sm text-gray-500">Based on 500+ reviews</p>
        </div>
      </Container>
    </section>
  )
}

import { Container } from '@/components/ui/Container'

const enterpriseFeatures = [
  {
    title: 'Secure',
    items: ['SOC2 verified', 'Encrypted', '24/7 global fraud monitoring']
  },
  {
    title: 'Reliable',
    items: [
      { text: '99.99% SLA', link: '#' },
      { text: 'Over $500M/year of in-app purchases processed' }
    ]
  },
  {
    title: 'Responsive',
    items: [
      'Dedicated customer success manager',
      'Direct communication via Slack',
      'Live chat on the website',
      'Four ways to reach us'
    ]
  }
]

export function EnterpriseSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-gray-900 text-center mb-16">
          Enterprise-grade platform
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {enterpriseFeatures.map((feature) => (
            <div key={feature.title} className="border-l-2 border-[#6720FF] pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{feature.title}</h3>
              <ul className="space-y-3 text-gray-900 font-medium">
                {feature.items.map((item, index) => (
                  <li key={index}>
                    {typeof item === 'string' ? (
                      item
                    ) : item.link ? (
                      <a href={item.link} className="underline hover:text-[#6720FF] transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      item.text
                    )}
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

import { Container } from '@/components/ui/Container'

const stats = [
  { value: '$1B+', label: 'Revenue tracked' },
  { value: '10K+', label: 'Apps powered' },
  { value: '200M+', label: 'Transactions processed' },
  { value: '99.9%', label: 'Uptime guarantee' },
]

export function Stats() {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by thousands of apps worldwide
          </h2>
          <p className="text-gray-400 text-lg">
            Join leading mobile apps that trust Adapty to power their subscription business.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

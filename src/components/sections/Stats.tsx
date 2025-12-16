import { Container } from '@/components/ui/Container'

const stats = [
  { value: '$0B', label: 'tracked revenue' },
  { value: '0.0%', label: 'historical uptime' },
  { value: '0.0B', label: 'users served' },
  { value: '0B', label: 'API calls / month' },
]

export function Stats() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-2">
            Adapty processes subscription revenue
          </p>
          <p className="text-gray-600">
            with the industry's highest SLA Rate
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

import { Container } from '@/components/ui/Container'

const cards = [
  {
    image: '/images/features/card-sdk-install.webp',
    title: 'For developers',
    tags: ['Subscriptions SDK', 'Refund Saver', 'Remote config', 'Fallback paywalls'],
  },
  {
    image: '/images/features/card-charts.webp',
    title: 'For app owners',
    tags: ['Revenue analytics', 'LTV analytics', 'AI LTV and revenue predictions'],
  },
  {
    image: '/images/features/card-paywalls.webp',
    title: 'For marketers',
    tags: ['A/B testing', 'No-code Builder', 'Localizations', 'Targeting'],
  },
]

export function HelpTeam() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-[38px] font-bold text-gray-900 leading-tight whitespace-nowrap">
            Help your team run the mobile subscription business.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-900 font-bold mt-2">
            Faster and cheaper.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-50 p-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 text-center">
                {/* Title link */}
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-1.5 text-lg font-bold text-gray-900 group-hover:text-primary transition-colors"
                >
                  {card.title}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path
                      d="M7.5 5L12.5 10L7.5 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

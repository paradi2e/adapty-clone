import { Container } from '@/components/ui/Container'
import { StarIcon } from '@/components/icons'

const badges = [
  { src: '/images/badges/g2-best-results.svg', alt: 'G2 Best Results Winter 2025' },
  { src: '/images/badges/g2-high-performer.svg', alt: 'G2 High Performer Winter 2025' },
  { src: '/images/badges/g2-best-usability.svg', alt: 'G2 Best Usability Winter 2025' },
  { src: '/images/badges/g2-best-relationship.svg', alt: 'G2 Best Relationship Winter 2025' },
  { src: '/images/badges/g2-most-implementable.svg', alt: 'G2 Most Implementable Winter 2025' },
]

export function G2BadgesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f9f7f4]">
      <Container>
        <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-gray-900 text-center mb-6">
          Trusted for usability and customer service
        </h2>

        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-5 h-5 text-gray-400" />
            ))}
          </div>
          <span className="text-gray-500 text-sm">Based on 500+ reviews</span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {badges.map((badge) => (
            <img
              key={badge.alt}
              src={badge.src}
              alt={badge.alt}
              className="h-24 md:h-28"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

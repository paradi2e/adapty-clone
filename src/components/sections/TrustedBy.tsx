import { Container } from '@/components/ui/Container'

// Company logos with actual images
const companies = [
  { name: 'Feeld', logo: '/images/logos/feeld.svg' },
  { name: 'Bumble', logo: '/images/logos/bumble.svg' },
  { name: 'Weewoo', logo: '/images/logos/weewoo.svg' },
  { name: 'AppNation', logo: '/images/logos/appnation.webp' },
  { name: 'Almus', logo: '/images/logos/almus.svg' },
  { name: 'Impala Studios', logo: '/images/logos/impala-studios.svg' },
  { name: 'HUBX', logo: '/images/logos/hubx.svg' },
]

export function TrustedBy() {
  return (
    <section className="py-8 border-b border-gray-100">
      <Container>
        <p className="text-center text-sm text-gray-500 mb-6">
          Trusted by 15,000+ apps and the world's largest app publishers
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company) => (
            <img
              key={company.name}
              src={company.logo}
              alt={company.name}
              className="h-6 md:h-8 w-auto grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all cursor-pointer"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

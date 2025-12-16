import { Container } from '@/components/ui/Container'

// Company logos - using text placeholders that will be replaced with actual logos
const companies = [
  { name: 'JEFIT', href: '#' },
  { name: 'Mimo', href: '#' },
  { name: 'Lifesum', href: '#' },
  { name: 'VSCO', href: '#' },
  { name: 'Babbel', href: '#' },
  { name: 'Mojo', href: '#' },
  { name: 'Rootd', href: '#' },
  { name: 'Soulver', href: '#' },
]

export function TrustedBy() {
  return (
    <section className="py-12 md:py-16 border-y border-gray-100">
      <Container>
        <p className="text-center text-sm text-gray-500 mb-8">
          Trusted by leading mobile apps worldwide
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.href}
              className="text-gray-400 hover:text-gray-600 transition-colors font-semibold text-lg grayscale hover:grayscale-0"
            >
              {company.name}
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

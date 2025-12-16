import { Container } from '@/components/ui/Container'

// Company logos - text placeholders matching original
const companies = [
  'FEELD',
  'Buildship',
  'WHATNOT',
  'Babbel',
  'JustAI',
  'myposter.de',
  'HUBX',
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
            <span
              key={company}
              className="text-gray-400 hover:text-gray-600 transition-colors font-semibold text-lg grayscale hover:grayscale-0 cursor-pointer"
            >
              {company}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}

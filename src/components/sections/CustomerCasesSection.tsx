import { Container } from '@/components/ui/Container'
import { CaseCard } from '@/components/ui/CaseCard'
import { ChevronRightIcon } from '@/components/icons'
import { customerCases } from '@/data'

export function CustomerCasesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f9f9fb]">
      <Container>
        <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-gray-900 text-center mb-12">
          Read the real cases of our customers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customerCases.map((caseData) => (
            <CaseCard key={caseData.id} case={caseData} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-[#6720FF] transition-colors"
          >
            Read all cases
            <ChevronRightIcon />
          </a>
        </div>
      </Container>
    </section>
  )
}

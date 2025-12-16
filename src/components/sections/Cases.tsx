import { cn } from '@/utils'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

const cases = [
  {
    company: 'Productivity app',
    category: 'Productivity',
    result: '+50% in total revenue',
    title: "How pricing tests unlocked app's potential",
  },
  {
    company: 'Text on Pic',
    category: 'Photo & Video',
    result: 'Over 30% MRR growth',
    title: 'How to boost revenue with the right experiments',
  },
  {
    company: 'Trip planning',
    category: 'Travel',
    result: '+102% ARPU growth',
    title: 'New onboarding and pricing strategy doubled revenue per user',
  },
  {
    company: 'Going Merry',
    category: 'App publisher',
    result: '5x MRR growth',
    title: 'How to scale subscription revenue with Paywall Builder',
  },
  {
    company: 'Shmoody',
    category: 'Mental health',
    result: 'ARR scaled from $0 to $2M',
    title: 'How to grow from a free app to $2M ARR with Adapty',
  },
  {
    company: 'Lively',
    category: 'Health & Fitness',
    result: 'Refund rate dropped by 83%',
    title: 'Saved 82% of potentially lost revenue',
  },
  {
    company: 'Glam AI',
    category: 'Makeup & Beauty',
    result: 'ROAS from Adapty – 108%',
    title: 'How to scale to $1.2M ARR in 3 months',
  },
  {
    company: 'Pepapp',
    category: 'Health & Fitness',
    result: '400% ROI on Adapty',
    title: 'How to make Adapty free with Refund Saver',
  },
  {
    company: 'Fotorama',
    category: 'Photo & Video',
    result: 'Refund rate dropped 40%',
    title: 'How to decrease the refund rate with Adapty',
  },
]

interface CaseCardProps {
  company: string
  category: string
  result: string
  title: string
}

function CaseCard({ company, category, result, title }: CaseCardProps) {
  return (
    <a
      href="#"
      className={cn(
        'block bg-white rounded-2xl p-6 border border-gray-200',
        'hover:border-primary/20 hover:shadow-lg transition-all group'
      )}
    >
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-900">{company}</p>
        <p className="text-xs text-gray-500">{category}</p>
      </div>
      <p className="text-primary font-semibold mb-2">{result}</p>
      <p className="text-gray-600 text-sm group-hover:text-gray-900 transition-colors">
        {title}
      </p>
      <p className="text-primary text-sm mt-4 group-hover:underline">Read more</p>
    </a>
  )
}

export function Cases() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Read the real cases of our customers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem) => (
            <CaseCard key={caseItem.company} {...caseItem} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline">
            Read all cases
          </Button>
        </div>
      </Container>
    </section>
  )
}

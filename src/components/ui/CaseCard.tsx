import { ChevronRightIcon } from '@/components/icons'
import type { CustomerCase } from '@/data/types'

interface CaseCardProps {
  case: CustomerCase
}

export function CaseCard({ case: caseData }: CaseCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-6 border border-gray-200 transition-shadow duration-200 hover:shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={caseData.icon}
          alt={caseData.name}
          className="w-12 h-12 rounded-xl"
        />
        <div>
          <div className="font-semibold text-gray-900">{caseData.name}</div>
          <div className="text-sm text-gray-500">{caseData.category}</div>
        </div>
      </div>
      <div
        className="font-semibold mb-2"
        style={{ color: caseData.metricColor }}
      >
        {caseData.metric}
      </div>
      <p className="text-gray-600 text-sm mb-4">{caseData.description}</p>
      <button className="w-full py-2.5 px-4 border border-gray-200 rounded-[6px] text-sm font-medium text-gray-700 flex items-center justify-center gap-2 transition-all duration-200 group-hover:border-[#6720FF] group-hover:text-[#6720FF]">
        Read more
        <ChevronRightIcon />
      </button>
    </div>
  )
}

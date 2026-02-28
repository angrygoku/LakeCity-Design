import { EvidenceConfidence } from '@/lib/service-evidence'

const toneMap: Record<EvidenceConfidence, string> = {
  Measured: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  Estimated: 'bg-amber-100 text-amber-700 border-amber-200',
  'Client-reported': 'bg-sky-100 text-sky-700 border-sky-200',
}

export function ProofBadge({ confidence }: { confidence: EvidenceConfidence }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${toneMap[confidence]}`}>
      {confidence}
    </span>
  )
}

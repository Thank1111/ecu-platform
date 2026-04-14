import type { TranslationOutput } from '@/lib/types'

const REC_STYLE: Record<string, string> = {
  lead: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  partner: 'bg-blue-50 text-blue-700 border-blue-200',
  observe: 'bg-slate-100 text-slate-500 border-slate-200',
}

export default function ScorecardCard({ data }: { data: TranslationOutput }) {
  return (
    <div className="space-y-4">
      {data.scorecard.map((uni) => (
        <div key={uni.university} className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-slate-900">{uni.university}</span>
                <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${REC_STYLE[uni.recommendation]}`}>
                  {uni.recommendation}
                </span>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-blue-500 transition-all"
                    style={{ width: `${uni.readiness_score}%` }}
                  />
                </div>
                <span className="w-10 text-right text-sm font-semibold text-slate-900">
                  {uni.readiness_score}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold text-emerald-600">จุดแข็ง</p>
              <ul className="space-y-1">
                {uni.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-1.5 text-xs text-slate-600">
                    <span className="mt-1 text-emerald-500">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold text-red-500">ช่องว่าง</p>
              <ul className="space-y-1">
                {uni.gaps.map((g) => (
                  <li key={g} className="flex items-start gap-1.5 text-xs text-slate-600">
                    <span className="mt-1 text-red-400">!</span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

import type { TranslationOutput } from '@/lib/types'

const TYPE_COLOR: Record<string, string> = {
  'ปริญญาตรี': 'bg-violet-50 text-violet-700',
  'อนุปริญญา': 'bg-blue-50 text-blue-700',
  'ประกาศนียบัตร': 'bg-sky-50 text-sky-700',
  'HE Sandbox': 'bg-amber-50 text-amber-700',
  'Micro-credential': 'bg-emerald-50 text-emerald-700',
}

export default function PathwayCard({ data }: { data: TranslationOutput }) {
  return (
    <div className="space-y-4">
      {data.pathway.options.map((opt) => {
        const isRecommended = opt.track === data.pathway.recommended_track
        return (
          <div
            key={opt.track}
            className={`rounded-2xl border p-6 ${isRecommended ? 'border-blue-300 bg-blue-50/40' : 'border-slate-200 bg-white'}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold text-slate-900">{opt.track}</h3>
                  {isRecommended && (
                    <span className="rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-bold text-white">
                      แนะนำ
                    </span>
                  )}
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${TYPE_COLOR[opt.program_type] ?? 'bg-slate-100 text-slate-600'}`}>
                    {opt.program_type}
                  </span>
                  <span className="text-xs text-slate-500">{opt.duration_months} เดือน</span>
                </div>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {opt.institutions.map((inst) => (
                <span key={inst} className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">
                  {inst}
                </span>
              ))}
            </div>

            <p className="mt-3 text-xs leading-relaxed text-slate-500">{opt.notes}</p>
          </div>
        )
      })}
    </div>
  )
}

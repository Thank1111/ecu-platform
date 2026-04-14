import type { TranslationOutput } from '@/lib/types'

const FORMAT_STYLE: Record<string, string> = {
  online: 'bg-blue-50 text-blue-700',
  onsite: 'bg-slate-100 text-slate-600',
  hybrid: 'bg-violet-50 text-violet-700',
  weekend: 'bg-emerald-50 text-emerald-700',
}

const FORMAT_LABEL: Record<string, string> = {
  online: 'Online',
  onsite: 'Onsite',
  hybrid: 'Hybrid',
  weekend: 'Weekend',
}

export default function UpskillCard({ data }: { data: TranslationOutput }) {
  const { upskill } = data
  return (
    <div className="space-y-6">
      {/* Target group */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-xs font-semibold text-slate-500">กลุ่มเป้าหมาย (คนทำงาน)</p>
        <p className="mt-1 text-sm text-slate-800">{upskill.target}</p>
      </div>

      {/* Modules */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="mb-4 text-sm font-semibold text-slate-700">โมดูล Upskill</h3>
        <div className="space-y-2">
          {upskill.modules.map((m) => (
            <div key={m.module_name} className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3">
              <span className={`mt-0.5 shrink-0 rounded-md px-2 py-0.5 text-[10px] font-semibold ${FORMAT_STYLE[m.format] ?? 'bg-slate-100 text-slate-500'}`}>
                {FORMAT_LABEL[m.format]}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-800">{m.module_name}</p>
                <p className="mt-0.5 text-xs text-slate-500">{m.description}</p>
              </div>
              <span className="shrink-0 text-xs text-slate-400">{m.duration_weeks} สัปดาห์</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pathway options */}
      <div className="space-y-4">
        {upskill.options.map((opt) => {
          const isRecommended = opt.track === upskill.recommended_track
          return (
            <div
              key={opt.track}
              className={`rounded-2xl border p-6 ${isRecommended ? 'border-emerald-300 bg-emerald-50/40' : 'border-slate-200 bg-white'}`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-semibold text-slate-900">{opt.track}</h3>
                {isRecommended && (
                  <span className="rounded-full bg-emerald-600 px-2.5 py-0.5 text-[10px] font-bold text-white">
                    แนะนำ
                  </span>
                )}
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${FORMAT_STYLE[opt.format] ?? 'bg-slate-100 text-slate-600'}`}>
                  {FORMAT_LABEL[opt.format]}
                </span>
                <span className="text-xs text-slate-500">{opt.duration_months} เดือน</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {opt.institutions.map((inst) => (
                  <span key={inst} className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">
                    {inst}
                  </span>
                ))}
              </div>
              <div className="mt-3 rounded-xl bg-white/70 px-3 py-2">
                <p className="text-[10px] font-semibold text-slate-400">แหล่งทุน</p>
                <p className="text-xs text-slate-700">{opt.funding}</p>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{opt.notes}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

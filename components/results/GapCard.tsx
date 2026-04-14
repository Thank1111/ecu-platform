import type { TranslationOutput } from '@/lib/types'

const SEVERITY_STYLE: Record<string, { bar: string; badge: string; label: string }> = {
  critical: { bar: 'bg-red-500', badge: 'bg-red-50 text-red-700 border-red-200', label: 'วิกฤต' },
  moderate: { bar: 'bg-orange-400', badge: 'bg-orange-50 text-orange-700 border-orange-200', label: 'ปานกลาง' },
  minor: { bar: 'bg-yellow-400', badge: 'bg-yellow-50 text-yellow-700 border-yellow-200', label: 'น้อย' },
}

const LEVEL_ORDER = ['none', 'basic', 'intermediate', 'advanced', 'expert']

export default function GapCard({ data }: { data: TranslationOutput }) {
  if (!data.skill_gap) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <p className="text-sm text-slate-500">ไม่มีข้อมูลทักษะพนักงานปัจจุบัน</p>
        <p className="mt-1 text-xs text-slate-400">กลับไปกรอก "ทักษะพนักงานปัจจุบัน" ในหน้าแรกเพื่อดู Gap Analysis</p>
      </div>
    )
  }

  const { skill_gap } = data

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-xs font-semibold text-slate-500">สรุป Gap</p>
        <p className="mt-1 text-sm leading-relaxed text-slate-800">{skill_gap.summary}</p>
      </div>

      {/* Strengths */}
      {skill_gap.strengths.length > 0 && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6">
          <p className="mb-3 text-xs font-semibold text-emerald-600">ทักษะที่มีอยู่แล้ว ✓</p>
          <div className="flex flex-wrap gap-2">
            {skill_gap.strengths.map((s) => (
              <span key={s} className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Gaps */}
      <div className="space-y-3">
        <p className="text-sm font-semibold text-slate-700">ทักษะที่ต้องพัฒนา</p>
        {skill_gap.gaps.map((gap) => {
          const style = SEVERITY_STYLE[gap.gap_severity] ?? SEVERITY_STYLE.minor
          const currentIdx = LEVEL_ORDER.indexOf(gap.current_level)
          const requiredIdx = LEVEL_ORDER.indexOf(gap.required_level)
          const progress = (currentIdx / (LEVEL_ORDER.length - 1)) * 100
          const target = (requiredIdx / (LEVEL_ORDER.length - 1)) * 100

          return (
            <div key={gap.skill_name} className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold text-slate-900">{gap.skill_name}</p>
                <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${style.badge}`}>
                  {style.label}
                </span>
              </div>

              {/* Progress bar */}
              <div className="mt-3">
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  {/* Target marker */}
                  <div
                    className="absolute top-0 h-full w-0.5 bg-slate-400"
                    style={{ left: `${target}%` }}
                  />
                  {/* Current level */}
                  <div
                    className={`h-full rounded-full ${style.bar}`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="mt-1 flex justify-between text-[10px] text-slate-400">
                  <span>ปัจจุบัน: {gap.current_level}</span>
                  <span>เป้าหมาย: {gap.required_level}</span>
                </div>
              </div>

              <p className="mt-2 text-xs text-slate-500">{gap.recommended_action}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

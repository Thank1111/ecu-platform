import type { TranslationOutput } from '@/lib/types'

const LEVEL_STYLE: Record<string, { bg: string; badge: string; label: string }> = {
  urgent: { bg: 'border-red-200 bg-red-50/40', badge: 'bg-red-600 text-white', label: 'เร่งด่วน' },
  high: { bg: 'border-orange-200 bg-orange-50/40', badge: 'bg-orange-500 text-white', label: 'สูง' },
  medium: { bg: 'border-yellow-200 bg-yellow-50/30', badge: 'bg-yellow-500 text-white', label: 'กลาง' },
  low: { bg: 'border-slate-200 bg-white', badge: 'bg-slate-400 text-white', label: 'ต่ำ' },
}

export default function PriorityCard({ data }: { data: TranslationOutput }) {
  return (
    <div className="space-y-4">
      {data.priority.map((item, i) => {
        const style = LEVEL_STYLE[item.level] ?? LEVEL_STYLE.low
        return (
          <div key={i} className={`rounded-2xl border p-6 ${style.bg}`}>
            <div className="flex items-center gap-2">
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${style.badge}`}>
                {style.label}
              </span>
            </div>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-xs font-semibold text-slate-500">เหตุผล</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-800">{item.reason}</p>
              </div>
              <div className="rounded-xl bg-white/70 p-4">
                <p className="text-xs font-semibold text-blue-600">การดำเนินการที่แนะนำ</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-800">{item.action}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

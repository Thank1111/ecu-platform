'use client'

const TABS = [
  { id: 'brief', label: 'ภาพรวม' },
  { id: 'gap', label: 'Gap Analysis' },
  { id: 'scorecard', label: 'Scorecard' },
  { id: 'pathway', label: 'Pathway' },
  { id: 'upskill', label: 'Upskill' },
  { id: 'priority', label: 'Priority' },
] as const

export type TabId = (typeof TABS)[number]['id']

interface TabsProps {
  active: TabId
  onChange: (id: TabId) => void
}

export default function Tabs({ active, onChange }: TabsProps) {
  return (
    <div className="flex gap-1 rounded-xl bg-slate-100 p-1">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
            active === tab.id
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

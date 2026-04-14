import type { TranslationOutput } from '@/lib/types'

const LEVEL_COLORS: Record<string, string> = {
  basic: 'bg-slate-100 text-slate-600',
  intermediate: 'bg-blue-50 text-blue-700',
  advanced: 'bg-violet-50 text-violet-700',
  expert: 'bg-amber-50 text-amber-700',
}

export default function BriefCard({ data }: { data: TranslationOutput }) {
  return (
    <div className="space-y-6">
      {/* Role header */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-slate-900">{data.role_title}</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
          <Stat label="ความต้องการ/ปี" value={`${data.demand_count.toLocaleString()} คน`} color="text-blue-600" />
          <Stat label="ผลิตได้ใน" value={`${data.timeline_months} เดือน`} color="text-emerald-600" />
          <Stat label="โมดูลหลัก" value={`${data.curriculum_modules.required.length} วิชา`} color="text-violet-600" />
        </div>
      </div>

      {/* Core skills */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="mb-4 text-sm font-semibold text-slate-700">ทักษะที่ต้องการ</h3>
        <div className="flex flex-wrap gap-2">
          {data.core_skills.map((skill) => (
            <span
              key={skill.name}
              className={`rounded-full px-3 py-1 text-xs font-medium ${LEVEL_COLORS[skill.level] ?? 'bg-slate-100 text-slate-600'}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
        <div className="mt-3 flex gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-slate-300" />basic</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-blue-400" />intermediate</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-violet-400" />advanced</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-amber-400" />expert</span>
        </div>
      </div>

      {/* Curriculum */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="mb-4 text-sm font-semibold text-slate-700">โมดูลหลักสูตร</h3>
        <div className="space-y-2">
          {data.curriculum_modules.required.map((m) => (
            <ModuleRow key={m.module_name} m={m} />
          ))}
          {data.curriculum_modules.lab.map((m) => (
            <ModuleRow key={m.module_name} m={m} />
          ))}
          {data.curriculum_modules.internship.map((m) => (
            <ModuleRow key={m.module_name} m={m} />
          ))}
          {data.curriculum_modules.elective.map((m) => (
            <ModuleRow key={m.module_name} m={m} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div>
      <p className="text-xs text-slate-500">{label}</p>
      <p className={`mt-0.5 text-lg font-bold ${color}`}>{value}</p>
    </div>
  )
}

function ModuleRow({ m }: { m: { module_name: string; credits: number; type: string; description: string } }) {
  const typeColor: Record<string, string> = {
    required: 'bg-blue-50 text-blue-600',
    lab: 'bg-emerald-50 text-emerald-600',
    internship: 'bg-orange-50 text-orange-600',
    elective: 'bg-slate-100 text-slate-500',
  }
  return (
    <div className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3">
      <span className={`mt-0.5 shrink-0 rounded-md px-2 py-0.5 text-[10px] font-semibold ${typeColor[m.type] ?? 'bg-slate-100 text-slate-500'}`}>
        {m.type}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-slate-800">{m.module_name}</p>
        <p className="mt-0.5 text-xs text-slate-500">{m.description}</p>
      </div>
      <span className="shrink-0 text-xs text-slate-400">{m.credits} หน่วย</span>
    </div>
  )
}

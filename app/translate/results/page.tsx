'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Tabs, { type TabId } from '@/components/Tabs'
import BriefCard from '@/components/results/BriefCard'
import ScorecardCard from '@/components/results/ScorecardCard'
import PathwayCard from '@/components/results/PathwayCard'
import PriorityCard from '@/components/results/PriorityCard'
import UpskillCard from '@/components/results/UpskillCard'
import type { TranslationOutput } from '@/lib/types'

export default function ResultsPage() {
  const router = useRouter()
  const [data, setData] = useState<TranslationOutput | null>(null)
  const [fallback, setFallback] = useState(false)
  const [activeTab, setActiveTab] = useState<TabId>('brief')

  useEffect(() => {
    const raw = sessionStorage.getItem('ecu_result')
    const fb = sessionStorage.getItem('ecu_fallback')
    if (!raw) {
      router.replace('/translate')
      return
    }
    setData(JSON.parse(raw))
    setFallback(fb === 'true')
  }, [router])

  if (!data) return null

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-8">
        {/* Back + fallback banner */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => router.push('/translate')}
            className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800"
          >
            ← วิเคราะห์ใหม่
          </button>
          {fallback && (
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs text-amber-600 border border-amber-200">
              ข้อมูลตัวอย่าง (demo)
            </span>
          )}
        </div>

        {/* Role title */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-slate-900">{data.role_title}</h1>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <Tabs active={activeTab} onChange={setActiveTab} />
        </div>

        {/* Tab content */}
        {activeTab === 'brief' && <BriefCard data={data} />}
        {activeTab === 'scorecard' && <ScorecardCard data={data} />}
        {activeTab === 'pathway' && <PathwayCard data={data} />}
        {activeTab === 'upskill' && <UpskillCard data={data} />}
        {activeTab === 'priority' && <PriorityCard data={data} />}
      </main>
    </div>
  )
}

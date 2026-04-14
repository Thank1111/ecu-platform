'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SECTORS = [
  'Aviation / Aerospace',
  'Agriculture / AgriTech',
  'Logistics / Supply Chain',
  'Digital / E-Commerce',
  'Healthcare / Medical Tech',
  'Advanced Manufacturing',
  'Energy / Clean Tech',
  'Tourism / Hospitality',
]

const EXAMPLES = [
  {
    sector: 'Aviation / Aerospace',
    input: 'Thai Airways และ Bangkok Airways ต้องการ Aircraft Maintenance Engineer จำนวน 500 คน/ปี เนื่องจากการขยายฝูงบิน ต้องการผู้ที่มีใบอนุญาต CAAT Part-66 Category B1/B2',
  },
  {
    sector: 'Agriculture / AgriTech',
    input: 'กรมส่งเสริมการเกษตรและ DJI Thailand ต้องการ Drone Technician สำหรับโดรนเกษตร จำนวน 300 คน/ปี รองรับนโยบาย Smart Farmer ครอบคลุม 5 ล้านไร่',
  },
  {
    sector: 'Logistics / Supply Chain',
    input: 'DHL, Kerry Express และ Flash Express ต้องการ Warehouse Automation Technician จำนวน 800 คน/ปี สำหรับคลังสินค้าอัตโนมัติในเขต EEC ต้องการทักษะ PLC และ AS/RS',
  },
]

export default function InputForm() {
  const router = useRouter()
  const [sector, setSector] = useState('')
  const [input, setInput] = useState('')
  const [currentSkills, setCurrentSkills] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleExample = (ex: (typeof EXAMPLES)[0]) => {
    setSector(ex.sector)
    setInput(ex.input)
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!sector || !input.trim()) {
      setError('กรุณาเลือก Sector และกรอกข้อมูล')
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sector, input, current_skills: currentSkills }),
      })

      const json = await res.json()

      if (!json.success) throw new Error(json.error)

      sessionStorage.setItem('ecu_result', JSON.stringify(json.data))
      sessionStorage.setItem('ecu_fallback', String(json.fallback))
      router.push('/translate/results')
    } catch {
      setError('เกิดข้อผิดพลาด กรุณาลองใหม่')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Sector */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">Sector / อุตสาหกรรม</label>
        <select
          value={sector}
          onChange={(e) => setSector(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
        >
          <option value="">เลือก Sector...</option>
          {SECTORS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">ข้อมูลความต้องการ</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="วาง JD, ประกาศรับสมัครงาน หรือข้อมูลความต้องการจากภาคอุตสาหกรรม..."
          rows={6}
          className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Current Skills */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">
          ทักษะพนักงานปัจจุบัน
          <span className="ml-1 text-xs font-normal text-slate-400">(ไม่บังคับ — ใส่เพื่อวิเคราะห์ Gap)</span>
        </label>
        <textarea
          value={currentSkills}
          onChange={(e) => setCurrentSkills(e.target.value)}
          placeholder="เช่น พนักงานมี Python basic, Excel intermediate แต่ยังไม่มี SQL และ Machine Learning..."
          rows={3}
          className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Examples */}
      <div className="space-y-2">
        <p className="text-xs text-slate-500">ตัวอย่าง:</p>
        <div className="flex flex-wrap gap-2">
          {EXAMPLES.map((ex) => (
            <button
              key={ex.sector}
              type="button"
              onClick={() => handleExample(ex)}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
            >
              {ex.sector.split(' / ')[0]}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            AI สุดโหดเเละเก่ง กำลังวิเคราะห์อยู่... อย่ารีบ
          </>
        ) : (
          'แปลงเป็นหลักสูตร →'
        )}
      </button>
    </form>
  )
}

import Header from '@/components/Header'
import InputForm from '@/components/InputForm'

export default function TranslatePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Demand Translation Engine</h1>
          <p className="mt-2 text-sm text-slate-500">
            ใส่ข้อมูลความต้องการจากภาคอุตสาหกรรม → Claude จะแปลงเป็นคำแนะนำหลักสูตรสำหรับมหาวิทยาลัยไทย
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <InputForm />
        </div>
      </main>
    </div>
  )
}

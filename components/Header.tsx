export default function Header() {
  return (
    <header className="border-b bg-white px-6 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div>
            <p className="text-[13px] font-semibold leading-none text-slate-900">ECU Platform</p>
            <p className="mt-0.5 text-[11px] text-slate-500">กระทรวง อว. — Demand Translation Engine</p>
          </div>
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">Beta</span>
      </div>
    </header>
  )
}

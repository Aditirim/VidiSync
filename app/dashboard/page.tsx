export default async function DashboardPage() {
  // Sync logic has been extracted to `lib/user-sync.ts` and is handled in `layout.tsx`
  
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">My Series</h1>
        <p className="text-gray-500 text-lg">
          Manage your AI-generated shorts and auto-posting schedules.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder for Dashboard Cards */}
        <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col items-center justify-center text-center group cursor-pointer hover:border-indigo-300 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </div>
          <h3 className="font-semibold text-lg text-gray-900 mb-1">Create New Series</h3>
          <p className="text-sm text-gray-500">Set up a new automated posting schedule</p>
        </div>

      </div>
    </div>
  )
}

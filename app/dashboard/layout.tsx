import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { syncUserWithSupabase } from "@/lib/user-sync"
import { ForceLightMode } from "@/components/dashboard/force-light-mode"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Global check: Syncs user into Supabase table on dashboard visit securely
  await syncUserWithSupabase()

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex font-sans">
      <ForceLightMode />
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex flex-col bg-gray-50 w-full min-w-0">
          <DashboardHeader />
          <main className="flex-1 overflow-x-hidden p-6 lg:p-10 w-full">
            <div className="mx-auto w-full max-w-7xl">
              {children}
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}

import { auth, currentUser } from '@clerk/nextjs/server'
import { createAdminClient } from '@/utils/supabase/admin'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  const user = await currentUser()

  if (user) {
    const supabase = createAdminClient()

    // Check if the user already exists in the Supabase Database
    const { data: existingUser } = await supabase
      .from('users')
      .select('user_id')
      .eq('user_id', userId)
      .single()

    // If no user exists, insert the sync record
    if (!existingUser) {
      const email = user.emailAddresses[0]?.emailAddress ?? ''
      const name = `${user.firstName || ''} ${user.lastName || ''}`.trim()

      const { error } = await supabase
        .from('users')
        .insert({
          user_id: userId,
          email: email,
          name: name,
        })

      if (error) {
        console.error('Error syncing Clerk user to Supabase:', error)
      }
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-24 bg-background">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        <div className="p-8 border border-border/40 rounded-xl bg-card">
          <h2 className="text-xl font-semibold mb-4">Welcome back!</h2>
          <p className="text-muted-foreground mb-4">
            Your account ({user?.emailAddresses[0]?.emailAddress}) is authenticated and synced.
          </p>
          <p className="text-muted-foreground">
            This is the protected dashboard where you will manage your generated videos and scheduling calendar.
          </p>
        </div>
      </div>
    </div>
  )
}

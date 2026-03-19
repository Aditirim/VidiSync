import { auth, currentUser } from '@clerk/nextjs/server'
import { createAdminClient } from '@/utils/supabase/admin'
import { redirect } from 'next/navigation'

/**
 * Ensures the currently authenticated Clerk user exists in the Supabase 'users' table.
 * If they do not exist, it inserts them using the Supabase Admin client.
 * 
 * Redirects to `/sign-in` if the user is not authenticated.
 * 
 * @returns The authenticated Clerk user object.
 */
export async function syncUserWithSupabase() {
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

  return user;
}

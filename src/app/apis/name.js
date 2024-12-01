import { createClient } from '../utils/supabase/server'

export default async function handler(req, res) {
  const supabase = createClient()

  // Get authenticated user's session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session?.user) {
    const { data, error } = await supabase
      .from('users')
      .select('name')
      .eq('id', session.user.id)
      .single()

    if (!error && data) {
      return res.status(200).json({ name: data.name })
    }
  }

  return res.status(401).json({ error: 'User not authenticated' })
}

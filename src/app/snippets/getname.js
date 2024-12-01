import { createClient } from '@supabase/supabase-js'

export default async function Dashboard() {
    // Create a single supabase client for interacting with your database
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    const { data, error } = await supabase
        .schema('public')
        .from('users')
        .select('name')

    console.log(data)
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {data ? <p>Hello, {data['name']}!</p> : <p>You need to be logged in to view your data.</p>}
    </div>
  )
}

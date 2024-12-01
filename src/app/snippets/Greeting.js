import { createClient } from '../utils/supabase/server';

export default async function Greeting() {
  const supabase = await createClient();
  const { data: user } = await supabase.from("users").select();

  return <div>
    <pre>{JSON.stringify(user.name, null)}</pre>
    <pre>{JSON.stringify(user, null, 2)}</pre>
  </div>
}
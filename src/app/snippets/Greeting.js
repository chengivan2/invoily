import { createClient } from '../utils/supabase/server';

export default async function Greeting() {
  const supabase = await createClient();
  const { data: user } = await supabase.from("users").select("name");

  return <div>
    <p>{JSON.stringify(user, null)}</p>
    <p>{JSON.stringify(user)}</p>
  </div>
}
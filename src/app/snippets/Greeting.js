import { createClient } from '../utils/supabase/server';

export default async function Greeting() {
  const supabase = await createClient();
  const { data: user } = await supabase.from("users").select("name");

  return <div>
    <p>{JSON.stringify(user[0].name, null)}</p>
  </div>
}
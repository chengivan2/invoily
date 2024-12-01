import { createClient } from '../utils/supabase/server';

export default async function Greeting() {
  const supabase = await createClient();
  const { data: user } = await supabase.from("users").select();
  console.log(data)

  return <pre>{JSON.stringify(user["name"], null, 2)}</pre>
}
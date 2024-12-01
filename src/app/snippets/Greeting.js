import { createClient } from '../utils/supabase/server';

export default async function Greeting() {
  const supabase = await createClient();
  const { data: name } = await supabase.from("users").select();

  return <pre>{JSON.stringify(name, null, 2)}</pre>
}
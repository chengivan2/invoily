"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export async function signup(formData) {
  const supabase = await createClient();

  // Extract email and password from formData
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    options: {
        data: {
          name: formData.get("name"),
        },
      },
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error"); // Redirect to error page on failure
  }

  // Revalidate and redirect to the home page
  revalidatePath("/", "layout");
  redirect("/");
}

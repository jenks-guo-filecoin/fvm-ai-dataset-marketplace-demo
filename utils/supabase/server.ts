import { createBrowserClient } from '@supabase/ssr'
import "dotenv";

export function createClient() {
  // Create a supabase client on the browser with project's credentials
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    // process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY!
  )
}
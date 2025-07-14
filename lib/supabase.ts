import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uauqeycevtiqxveolrlw.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhdXFleWNldnRpcXh2ZW9scmx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0NzY1MzYsImV4cCI6MjA2ODA1MjUzNn0.bYzTm04F57x3VuANdEB05jnvD0B__7KUHSXAxpyLFl8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

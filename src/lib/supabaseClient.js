import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://oxnqajdkpqrdizgywkjv.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94bnFhamRrcHFyZGl6Z3l3a2p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMyNjcxOTIsImV4cCI6MjA5ODg0MzE5Mn0.MD5zBeYLlWpcdHMC5hi1QWok7if9K-vSqP5pygK8OAE";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

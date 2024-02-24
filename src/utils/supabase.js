import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

const supabaseUrl = "https://sebcseumqpgzryssaawf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlYmNzZXVtcXBnenJ5c3NhYXdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1NzU3NTQsImV4cCI6MjAxOTE1MTc1NH0.vYcEroknozjxVTvoAXpdYXdleuMhV2RQ8lwWrJZCqcY";

export const supabase = createClient(supabaseUrl, supabaseKey);

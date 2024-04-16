import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://emxooxydkyucmqykmcgr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVteG9veHlka3l1Y21xeWttY2dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNDkzMTgsImV4cCI6MjAyMzkyNTMxOH0.Yxga3S17zxy3GffM5dGfhV85MEjfXkY6d1lvGAV-JYQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

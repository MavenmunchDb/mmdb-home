
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tyroqcahbwqjbmqsocwt.supabase.co'
//const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5cm9xY2FoYndxamJtcXNvY3d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0MjgyNTcsImV4cCI6MjA3MTAwNDI1N30.U3KScg-N5zTFpKRrfjWWVcMIXN9SmZWFxsQ1xL09n1E'

export const supabase = createClient(supabaseUrl, supabaseKey)
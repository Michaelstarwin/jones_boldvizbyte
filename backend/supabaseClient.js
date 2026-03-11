import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Service role key needed for admin actions without RLS

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase environment variables are missing.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

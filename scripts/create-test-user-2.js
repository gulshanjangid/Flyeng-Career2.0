import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// The role key might be needed if creating a user bypassing email confirmation
// const supabaseRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase credentials not found in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function createDemoUser() {
    console.log("Creating test user in Supabase Auth...");
    const { data, error } = await supabase.auth.signUp({
        email: 'demo@flyeng.com',
        password: 'Password123!',
        options: {
             data: {
                  full_name: 'Demo User'
             }
        }
    });

    if (error) {
         console.error("Error creating user in Auth:", error.message);
    } else {
         console.log("Successfully created test user in Supabase Auth:", data.user?.email);
    }
}

createDemoUser();
// app/api/setup-db/route.ts
import { db } from '@/lib/db';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(req: Request) {
    try {
        const schemaPath = path.join(process.cwd(), 'db', 'schema.sql');
        const schemaSql = await fs.readFile(schemaPath, 'utf8');

        // Split by semicolons to run statements individually if needed, 
        // or passed as a block if the driver supports it.
        // Vercel Postgres/pg driver usually supports multiple statements in one query.
        await db.query(schemaSql);

        // Seed Demo User
        const demoUserId = '00000000-0000-0000-0000-000000000000';
        const userCheck = await db.query('SELECT id FROM users WHERE id = $1', [demoUserId]);

        if (userCheck.rows.length === 0) {
            await db.query(`
            INSERT INTO users (id, email, password_hash, full_name, subscription_plan) 
            VALUES ($1, 'demo@flyeng.com', 'hashed_secret', 'Demo User', 'pro')
        `, [demoUserId]);
            return new Response('Database setup complete. Schema applied and Demo User created.', { status: 200 });
        }

        return new Response('Database setup complete. Schema applied (User already existed).', { status: 200 });

    } catch (error: any) {
        console.error('Setup Error:', error);
        return new Response(`Setup failed: ${error.message}`, { status: 500 });
    }
}

// app/api/projects/route.ts
import { db } from '@/lib/db';

export async function GET(req: Request) {
    // Mock User
    const userId = '00000000-0000-0000-0000-000000000000';

    try {
        const res = await db.query(
            'SELECT * FROM projects WHERE user_id = $1 ORDER BY updated_at DESC',
            [userId]
        );
        return new Response(JSON.stringify(res.rows), { status: 200 });
    } catch (error: any) {
        console.warn("DB Error, returning mock projects:", error.message);
        // Return mock data for Demo Mode
        return new Response(JSON.stringify([
            { id: 'demo-1', name: 'Demo Portfolio', description: 'A local demo project', updated_at: new Date().toISOString() }
        ]), { status: 200 });
    }
}

export async function POST(req: Request) {
    const userId = '00000000-0000-0000-0000-000000000000';

    try {
        const { name, description } = await req.json();
        const res = await db.query(
            'INSERT INTO projects (user_id, name, description) VALUES ($1, $2, $3) RETURNING *',
            [userId, name, description]
        );
        return new Response(JSON.stringify(res.rows[0]), { status: 201 });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

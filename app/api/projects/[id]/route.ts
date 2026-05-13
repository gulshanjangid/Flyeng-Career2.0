// app/api/projects/[id]/route.ts
import { db } from '@/lib/db';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const userId = '00000000-0000-0000-0000-000000000000';

    try {
        const data = await req.json();
        const res = await db.query(
            'UPDATE projects SET updated_at = NOW(), html_content = $1, css_content = $2, js_content = $3 WHERE id = $4 AND user_id = $5 RETURNING *',
            [data.html, data.css, data.js, params.id, userId]
        );
        return new Response(JSON.stringify(res.rows[0]), { status: 200 });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const userId = '00000000-0000-0000-0000-000000000000';

    try {
        await db.query('DELETE FROM projects WHERE id = $1 AND user_id = $2', [params.id, userId]);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

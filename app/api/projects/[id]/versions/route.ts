// app/api/projects/[id]/versions/route.ts
import { db } from '@/lib/db';

export async function POST(req: Request, { params }: { params: { id: string } }) {
    const userId = '00000000-0000-0000-0000-000000000000';

    try {
        const { summary, html, css, js } = await req.json();

        const res = await db.query(
            `INSERT INTO project_versions 
      (project_id, version_number, html_content, css_content, js_content, change_summary, created_by) 
      VALUES ($1, (SELECT COALESCE(MAX(version_number), 0) + 1 FROM project_versions WHERE project_id = $1), $2, $3, $4, $5, $6) 
      RETURNING *`,
            [params.id, html, css, js, summary, userId]
        );

        return new Response(JSON.stringify(res.rows[0]), { status: 201 });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const res = await db.query(
            'SELECT * FROM project_versions WHERE project_id = $1 ORDER BY version_number DESC',
            [params.id]
        );
        return new Response(JSON.stringify(res.rows), { status: 200 });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

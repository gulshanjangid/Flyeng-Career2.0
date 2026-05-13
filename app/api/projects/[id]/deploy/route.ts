// app/api/projects/[id]/deploy/route.ts
import { db } from '@/lib/db';

export async function POST(req: Request, { params }: { params: { id: string } }) {
    const userId = '00000000-0000-0000-0000-000000000000';

    try {
        const { platform = 'vercel' } = await req.json();

        // Mock deployment logic
        const deploymentId = 'deploy_' + Math.random().toString(36).substring(7);
        const deploymentUrl = `https://flyeng-site-${params.id.substring(0, 8)}.vercel.app`;

        await db.query(
            'INSERT INTO deployments (project_id, platform, platform_id, deployment_url, status, deployed_by, deployed_at) VALUES ($1, $2, $3, $4, $5, $6, NOW())',
            [params.id, platform, deploymentId, deploymentUrl, 'success', userId]
        );

        return new Response(JSON.stringify({
            id: deploymentId,
            url: deploymentUrl,
            status: 'success'
        }), { status: 201 });

    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

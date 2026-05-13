// app/api/components/route.ts
import { db } from '@/lib/db';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');

    let query = 'SELECT * FROM components';
    let params: any[] = [];
    let filters: string[] = [];

    if (category) {
        params.push(category);
        filters.push(`category = $${params.length}`);
    }

    if (search) {
        params.push(`%${search}%`);
        filters.push(`(name ILIKE $${params.length} OR description ILIKE $${params.length})`);
    }

    if (filters.length > 0) {
        query += ' WHERE ' + filters.join(' AND ');
    }

    query += ` ORDER BY download_count DESC LIMIT ${limit} OFFSET ${offset}`;

    // Note: Parameterized usage for Limit/Offset with $N is safer but direct injection of integers is okay for this simple logic if validated.
    // Ideally, use fully parameterized query:
    // query += ` ORDER BY download_count DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
    // params.push(limit, offset);

    try {
        const res = await db.query(query, params);
        return new Response(JSON.stringify(res.rows), { status: 200 });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

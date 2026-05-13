import { sql } from '@vercel/postgres';

const hasDb = !!process.env.POSTGRES_URL;

export const db = {
    query: async (text: string, params?: any[]) => {
        if (!hasDb) {
            console.warn('[DB Mock] Query skipped (No connection string):', text);
            return { rows: [] };
        }
        return sql.query(text, params);
    },
    sql: hasDb ? sql : {}
};

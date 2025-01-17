import { NextResponse } from 'next/server'
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { event } from '@/db/schema';

const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle({ client });

export async function GET() {
    const events = await db.select().from(event);

    return NextResponse.json({ events }, { status: 200 })
}

export async function POST(req: Request) {
    const body = await req.json();

    const { name, start_date, end_date, category_id } = body;
    if (!name || !start_date || !end_date || !category_id) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const insertedData = await db.insert(event).values({
        name,
        start_date,
        end_date,
        category_id,
    }).returning();

    return NextResponse.json({ message: 'Event item added', newEvent: insertedData[0] }, { status: 201 });
}

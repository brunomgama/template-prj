import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import {users, categories, tasks, foodElements} from './db/schema';

async function main() {
    const connectionString = process.env.DATABASE_URL!;
    const client = postgres(connectionString, { prepare: false });
    const db = drizzle(client);

    const insertedUsers = await db.insert(users).values({
        name: 'Bruno Gama',
        email: 'bmogama@gmail.com',
    }).returning();

    const insertedCategories = await db.insert(categories).values({
        name: 'Errands',
    }).returning();

    const frigorificoCategory = await db.insert(categories).values({
        name: 'Frigorifico',
    }).returning();

    await db.insert(tasks).values({
        title: 'Compras',
        dueDate: '2025-01-01',
        userId: insertedUsers[0].id,
        categoryId: insertedCategories[0].id,
    });

    await db.insert(foodElements).values({
        name: 'Iogurtes',
        quantity: 12,
        categoryId: frigorificoCategory[0].id,
    });

    const allTasks = await db.select().from(tasks);
    console.log('All tasks:', allTasks);

    await client.end();
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});

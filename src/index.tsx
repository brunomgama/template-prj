import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import {tasks, users} from './db/schema';

async function main() {
    const connectionString = process.env.DATABASE_URL!;
    const client = postgres(connectionString, { prepare: false });
    const db = drizzle(client);

    // Insert a row
    await db.insert(users).values({
        fullName: 'Bruno_Gama',
        email: 'bmogama@gmail.com',
    });

    await db.insert(tasks).values({
        title: 'compras',
        userId: 1,
    });

    // Fetch rows just to confirm
    const allUsers = await db.select().from(users);
    console.log(allUsers);

    await client.end();
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
import { usersTable } from '../db/schema';
import { eq } from 'drizzle-orm';

const sqlite = new Database(process.env.DB_FILE_NAME!);
const db = drizzle(sqlite);

async function main() {
  // Insert a new user
  await db.insert(usersTable).values({
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
  });

  // Retrieve all users
  const users = await db.select().from(usersTable);
  console.log('Users:', users);

  // Update a user's age
  await db
    .update(usersTable)
    .set({ age: 31 })
    .where(eq(usersTable.email, 'john.doe@example.com'));

  // Delete a user
  await db.delete(usersTable).where(eq(usersTable.email, 'john.doe@example.com'));
}

main().catch(console.error);
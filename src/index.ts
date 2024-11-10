import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sqlite';
console.log("Hello via Bun!");

const db = drizzle(process.env.DB_FILE_NAME!);
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { todos } from './schema'
import { drizzle } from 'drizzle-orm/postgres-js';

// for migrations
const migrationClient = postgres("postgresql://postgres:drizzle-first-look@db.nduymdgmkeormoebjcul.supabase.co:5432/postgres", { max: 1 });
//@ts-ignore
migrate(migrationClient, todos)

// for query purposes
const queryClient = postgres("postgresql://postgres:drizzle-first-look@db.nduymdgmkeormoebjcul.supabase.co:5432/postgres");
const db = drizzle(queryClient);


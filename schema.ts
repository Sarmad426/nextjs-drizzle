import { text, pgTable, serial, boolean } from "drizzle-orm/pg-core";

export const todos = pgTable('todos', {
    id: serial('id').primaryKey(),
    name: text('name'),
    done: boolean('done').default(false),
});
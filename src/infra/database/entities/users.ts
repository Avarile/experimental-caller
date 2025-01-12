import {pgTable, serial, text, uniqueIndex, varchar, pgSchema, jsonb} from "drizzle-orm/pg-core";
import {lower, timestampsBase, publicSchema} from "./base";

export const users = publicSchema.table(
    'users',
    {
        id: serial('id').primaryKey(),
        firstname: varchar('name').notNull(),
        lastname: varchar('lastname'),
        mobile: varchar('mobile').notNull(),
        email: varchar('email').notNull(),
        ...timestampsBase,
    },
    (table) => ({
        emailUniqueIndex: uniqueIndex('emailUniqueIndex').on(lower(table.email)),
    })
)
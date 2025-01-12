import {pgTable, serial, text, uniqueIndex, varchar, pgSchema, jsonb} from "drizzle-orm/pg-core";
import {lower, timestampsBase, publicSchema} from "./base";
import {z} from '@hono/zod-openapi'

export const clients = publicSchema.table(
    'clients',
    {
        id: serial('id').primaryKey(),
        firstname: varchar('name').notNull(),
        lastname: varchar('lastname'),
        mobile: varchar('mobile').notNull(),
        email: varchar('email').notNull(),
        test_background_info: jsonb(),
        ...timestampsBase,
    },
    (table) => ({
        emailUniqueIndex: uniqueIndex('emailUniqueIndex').on(lower(table.email)),
    })
)

export const ClientSchema = z.object({
    id: z.number(),
    firstname: z.string(),
    lastname: z.string().nullable(),
    mobile: z.string(),
    email: z.string(),
    test_background_info: z.object({
        content: z.string(),
    }).nullable(),
    created_at: z.string(),
    updated_at: z.string(),
    deleted_at: z.string().nullable(),
})
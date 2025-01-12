import {integer, varchar, pgTable, timestamp, serial, AnyPgColumn, pgSchema} from "drizzle-orm/pg-core";
import {sql, SQL} from "drizzle-orm";

export const timestampsBase = {
    created_at: timestamp('created_at').defaultNow().notNull(),
    updated_at: timestamp('updated_at').defaultNow().notNull(),
    deleted_at: timestamp("deleted_at")
}

// use this to cast all email string to lower case
export function lower(email: AnyPgColumn): SQL {
    return sql`lower(${email})`;
}

// public schema
export const publicSchema = pgSchema("public")

// an example use of the timestamps as base entity
// export const baseEntity = publicSchema.table("user", {
//     id: serial('id').primaryKey(),
//     ...timestamps
// })
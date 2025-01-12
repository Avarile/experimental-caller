import {drizzle} from "drizzle-orm/node-postgres";
import configuration from "../configuration";

export const db_main = drizzle({
    connection: {
        connectionString: `postgres://${configuration.DATABASE_MAIN_USERNAME}:${configuration.DATABASE_MAIN_PASSWORD}@${configuration.DATABASE_MAIN_HOST}:${configuration.DATABASE_MAIN_PORT}/${configuration.DATABASE_MAIN_DATABASE}`,
        ssl: false
    }
})

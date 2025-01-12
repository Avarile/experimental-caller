import {defineConfig} from 'drizzle-kit';
import configuration from "./src/infra/configuration";

const databaseUrl = `postgres://${configuration.DATABASE_MAIN_USERNAME}:${configuration.DATABASE_MAIN_PASSWORD}@${configuration.DATABASE_MAIN_HOST}:${configuration.DATABASE_MAIN_PORT}/${configuration.DATABASE_MAIN_DATABASE}`;


export default defineConfig({
    out: './src/infra/database/migrations',// Path to the migration directory
    schema: './src/infra/database/entities',// Path to the schema directory
    dialect: 'postgresql',
    dbCredentials: {
        url: databaseUrl,
    },
    migrations: {
        schema: "public"
    },
    verbose: true, // Log all SQL queries
});

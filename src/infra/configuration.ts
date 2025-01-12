import { z } from 'zod'

// Define the schema as an object with all of the env
// variables and their types
const envSchema = z.object({
    HOST: z.string().min(1),
    PORT: z.coerce.number().min(1000).max(65535),
    DATABASE_MAIN_HOST: z.string().min(1),
    DATABASE_MAIN_PORT: z.coerce.number().min(1000).max(65535),
    DATABASE_MAIN_USERNAME: z.string().min(1),
    DATABASE_MAIN_PASSWORD: z.string().min(1),
    DATABASE_MAIN_DATABASE: z.string().min(1),
    ENV: z
        .union([
            z.literal('development'),
            z.literal('testing'),
            z.literal('production'),
        ])
        .default('development'),


    OPENAI_API_KEY: z.string().min(1),
    BLAND_AI_API_KEY: z.string().min(1),
    BLAND_AI_WEBHOOK_SECRET: z.string().min(1),
    TAVILY_API_KEY: z.string().min(1),

    SENDGRID_API_KEY: z.string().min(1),
    SENDGRID_AUTHENTICATED_SENDER: z.string().min(1),
})

// Validate `process.env` against our schema
// and return the result
const configuration = envSchema.parse(process.env)

// Export the result so we can use it in the project
export default configuration
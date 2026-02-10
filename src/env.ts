import { z } from 'zod'

const envSchema = z.object({
    CLIENT_URL_DEV: z.url(),
    CLIENT_URL_PROD: z.url(),
    DATABASE_URL: z.url(),
    CLOUDINARY_URL: z.url(),
    NODE_ENV: z.enum(['dev', 'production']),
    PORT: z.string().optional(),
    JWT_SECRET: z.string(),
    JWT_EXPIRES_IN: z.string(),
    DELIVERY_FEE: z.coerce.number().int().positive()
})

export const env = envSchema.parse(process.env)
export const isDev = env.NODE_ENV === 'dev'

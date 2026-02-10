import { env, isDev } from '../env'

const parseOrigins = (value: string) => value.split(',').map((o) => o.trim())

export const allowedOrigins = parseOrigins(
    isDev ? env.CLIENT_URLS_DEV : env.CLIENT_URLS_PROD
)

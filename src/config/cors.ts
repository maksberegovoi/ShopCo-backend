import { env, isDev } from '../env'
import { z } from 'zod'

const parseOrigins = (value: string): string[] =>
    value.split(',').map((url) => {
        const origin = url.trim()
        z.url().parse(origin)
        return origin
    })

export const allowedOrigins = parseOrigins(
    isDev ? env.CLIENT_URLS_DEV : env.CLIENT_URLS_PROD
)

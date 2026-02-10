import cors from 'cors'
import { allowedOrigins } from '../../../config/cors'

export const corsMiddleware = cors({
    origin(origin, callback) {
        if (!origin) return callback(null, true)

        if (allowedOrigins.includes(origin)) {
            return callback(null, true)
        }

        callback(new Error('Not allowed by CORS'))
    },
    credentials: true
})

// shared/auth/jwt.ts
import jwt, { SignOptions } from 'jsonwebtoken'
import { env } from '../../../env'

export function signAccessToken(payload: { userId: number; role: string }) {
    const options: SignOptions = {
        expiresIn: env.JWT_EXPIRES_IN as SignOptions['expiresIn']
    }

    return jwt.sign(payload, env.JWT_SECRET, options)
}

import jwt from 'jsonwebtoken'
import { env } from '../../../env'
import ApiError from '../errors/api-error'
import { Request, Response, NextFunction } from 'express'

export function authMiddleware(
    req: Request,
    _res: Response,
    next: NextFunction
) {
    const header = req.headers.authorization

    if (!header?.startsWith('Bearer ')) {
        throw ApiError.unauthorized('Unauthorized')
    }

    const token = header.split(' ')[1]

    try {
        const payload = jwt.verify(token, env.JWT_SECRET) as {
            userId: number
            role: string
        }

        req.user = payload
        next()
    } catch {
        throw ApiError.unauthorized('Invalid token')
    }
}

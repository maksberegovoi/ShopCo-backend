import jwt from 'jsonwebtoken'
import { env } from '../../../env'
import ApiError from '../errors/api-error'
import { Request, Response, NextFunction } from 'express'
import { Role } from '@prisma/client'

export const authMiddleware = (
    req: Request,
    _res: Response,
    next: NextFunction
) => {
    try {
        const token = req.cookies.accessToken

        if (!token) {
            throw ApiError.unauthorized('Not authorized')
        }

        const decoded = jwt.verify(token, env.JWT_SECRET) as {
            userId: number
            role: Role
        }

        req.user = {
            userId: decoded.userId,
            role: decoded.role
        }

        next()
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            throw ApiError.unauthorized('Invalid token')
        }
        if (error instanceof jwt.TokenExpiredError) {
            throw ApiError.unauthorized('Token expired')
        }
        throw error
    }
}

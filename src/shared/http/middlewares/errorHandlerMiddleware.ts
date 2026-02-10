import { ErrorRequestHandler } from 'express'
import ApiError from '../errors/api-error'
import { ZodError } from 'zod'
import logger from './httpLoggerMiddleware'

const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, _next) => {
    if (err instanceof ApiError) {
        logger.warn(
            {
                status: err.status,
                message: err.message,
                method: req.method,
                url: req.originalUrl,
                userId: req.user?.userId
            },
            'ApiError'
        )
        return res.status(err.status).json({ message: err.message })
    }
    if (err instanceof ZodError) {
        logger.warn(
            {
                issues: err.issues,
                method: req.method,
                url: req.originalUrl
            },
            'Zod validation error'
        )

        return res.status(400).json({
            message: err.issues.map((issue) => ({
                path: issue.path.join('.'),
                message: issue.message
            }))
        })
    }

    logger.error({
        method: req.method,
        url: req.originalUrl
    })

    return res.status(500).json({
        message: 'Unexpected error'
    })
}

export default errorHandlerMiddleware

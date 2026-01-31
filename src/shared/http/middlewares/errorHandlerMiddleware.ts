import { ErrorRequestHandler } from 'express'
import ApiError from '../errors/api-error'
import { ZodError } from 'zod'

const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, _next) => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message })
    }
    if (err instanceof ZodError) {
        return res.status(400).json({
            message: err.issues[0]?.message ?? 'Validation error'
        })
    }

    console.error(err)

    return res.status(500).json({
        message: 'Unexpected error'
    })
}

export default errorHandlerMiddleware

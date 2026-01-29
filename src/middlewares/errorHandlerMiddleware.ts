import { ErrorRequestHandler } from 'express'
import ApiError from '../errors/api-error'

const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, _next) => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message })
    }

    console.error(err)

    return res.status(500).json({
        message: 'Unexpected error'
    })
}

export default errorHandlerMiddleware

import { z } from 'zod'
import { positiveNumber } from './primitives/positive-number'

export const idParamSchema = z.object({
    id: positiveNumber('product id')
})

export const limitParamSchema = z.object({
    limit: positiveNumber('query: limit').optional()
})

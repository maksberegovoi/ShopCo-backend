import { z } from 'zod'
import { positiveNumber } from '../../../../../shared/http/schemas/primitives/positive-number'

export const allProductsQuerySchema = z.object({
    limit: positiveNumber('Invalid limit').optional(),
    page: positiveNumber('Invalid page').optional()
})

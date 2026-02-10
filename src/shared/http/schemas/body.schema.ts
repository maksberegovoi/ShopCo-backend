import { z } from 'zod'
import { positiveNumber } from './primitives/positive-number'

export const quantityBodySchema = z.object({
    quantity: positiveNumber('product quantity')
})

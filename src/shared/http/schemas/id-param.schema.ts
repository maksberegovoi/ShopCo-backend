import { z } from 'zod'

export const idParamSchema = z.object({
    id: z.coerce
        .number('Invalid product id')
        .int('Invalid product id')
        .positive('Invalid product id')
})

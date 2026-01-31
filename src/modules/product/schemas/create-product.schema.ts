import { z } from 'zod'

export const createProductSchema = z.object({
    name: z.string().min(1),
    description: z.string(),
    basePrice: z.number().positive(),
    discount: z.number().min(0).max(100),
    gender: z.enum(['MALE', 'FEMALE', 'UNISEX']),
    brandId: z.number().int().positive(),
    typeId: z.number().int().positive()
})

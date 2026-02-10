import { z } from 'zod'
export const addItemSchema = z.object({
    productVariantId: z.number().int().positive(),
    quantity: z.number().int().positive()
})

export type AddCartItemDto = z.infer<typeof addItemSchema>

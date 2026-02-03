import { z } from 'zod'
import { Gender } from '@prisma/client'

export const createProductSchema = z.object({
    name: z.string().min(1).max(50),
    basePrice: z.number().int().positive(),
    discount: z.number().int().positive().optional(),
    description: z.string(),
    gender: z.enum(Gender),

    styleId: z.number().int().positive(),
    brandId: z.number().int().positive(),
    typeId: z.number().int().positive(),

    attributeValues: z.array(
        z.object({
            attributeId: z.number().int().positive(),
            value: z.string().min(1)
        })
    ),
    categories: z.array(z.number().int().positive()).optional(),
    variants: z.array(
        z.object({
            stock: z.number().int().min(0),
            colorName: z.string().min(1),
            colorHex: z.string().min(1),
            sizeId: z.number().int()
        })
    ),
    images: z
        .array(
            z.object({
                url: z.url(),
                isMain: z.boolean().optional()
            })
        )
        .refine(
            (images) =>
                images.filter((img) => img.isMain === true).length === 1,
            {
                message: 'Only one image can be main image'
            }
        )
})

export type CreateProductInput = z.infer<typeof createProductSchema>

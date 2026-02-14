import { Prisma } from '@prisma/client'

export type PrismaProductCardPayload = Prisma.ProductGetPayload<{
    select: {
        id: true
        name: true
        basePrice: true
        price: true
        discount: true
        averageRating: true
        images: {
            where: { isMain: true }
            select: {
                url: true
            }
        }
        variants: {
            select: {
                colorName: true
                colorHex: true
                stock: true
            }
        }
    }
}>

import { Prisma } from '@prisma/client'

export type PrismaDetailsPayload = Prisma.ProductGetPayload<{
    select: {
        id: true
        name: true
        description: true
        basePrice: true
        discount: true
        images: {
            select: {
                url: true
                isMain: true
            }
        }
        variants: {
            select: {
                id: true
                colorName: true
                colorHex: true
                stock: true
                size: {
                    select: {
                        name: true
                    }
                }
            }
        }
    }
}>

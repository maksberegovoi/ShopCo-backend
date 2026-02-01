import { Prisma } from '@prisma/client'

export type PrismaProductReviewPayload = Prisma.ReviewGetPayload<{
    select: {
        rating: true
        text: true
        createdAt: true
        user: {
            select: {
                name: true
            }
        }
    }
}>

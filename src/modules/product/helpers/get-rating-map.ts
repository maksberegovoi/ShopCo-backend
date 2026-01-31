import { PrismaClient } from '@prisma/client'

export const getRatingMap = async (prisma: PrismaClient): Promise<Map<number, number>> => {
    const ratings = await prisma.review.groupBy({
        by: ['productId'],
        _avg: { rating: true }
    })

    return new Map(ratings.map((r) => [r.productId, Math.round(r._avg.rating ?? 0)]))
}

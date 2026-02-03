import prisma from '../../../../prisma'
import { mapProductReviewDto } from './mapper/product-review.mapper'

export async function getProductReviews(productId: number) {
    const reviews = await prisma.review.findMany({
        where: {
            productId
        },
        select: {
            rating: true,
            text: true,
            createdAt: true,
            user: {
                select: {
                    name: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return reviews.map(mapProductReviewDto)
}

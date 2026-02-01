import { PrismaProductReviewPayload } from '../payload/product-review.payload'
import { ProductReviewDto } from '../dto/product-review.dto'

export const mapProductReviewDto = (review: PrismaProductReviewPayload): ProductReviewDto => ({
    author: review.user.name,
    comment: review.text,
    rating: review.rating,
    createdAt: review.createdAt // ISO 8601
})

import { Prisma } from '@prisma/client'
import { getProductsParamsType } from '../schemas/query-filters.schema'

export const productSortingUtil = (params: getProductsParamsType) => {
    let orderBy: Prisma.ProductOrderByWithRelationInput = { id: 'asc' }

    if (!params.sortBy) {
        orderBy = { id: 'asc' }
    } else {
        switch (params.sortBy) {
            case 'price_asc':
                orderBy = { price: 'asc' }
                break
            case 'price_desc':
                orderBy = { price: 'desc' }
                break
            case 'discount':
                orderBy = { discount: 'desc' }
                break
            case 'popular':
                orderBy = { createdAt: 'desc' }
                break
            case 'rating':
                orderBy = { averageRating: 'desc' }
                break
            default: {
                // eslint-disable-next-line
                const exhaustiveCheck: never = params.sortBy
            }
        }
    }

    return orderBy
}

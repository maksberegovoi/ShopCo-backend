import prisma from '../../../../prisma'
import { mapProductCardDto } from './mapper/product-card.mapper'
import { GetAllProductsDto } from './dto/get-all-products.dto'
import { getProductsParamsType } from './schemas/query-filters.schema'
import { productSortingUtil } from './utils/product-sorting.util'
import { productOrderingUtil } from './utils/product-ordering.util'

export async function getAllProducts(
    params: getProductsParamsType
): Promise<GetAllProductsDto> {
    const page = params?.page ?? 1
    const limit = params?.limit ?? 9
    const skip = (page - 1) * limit

    const where = productOrderingUtil(params)
    const orderBy = productSortingUtil(params)

    const [products, total] = await prisma.$transaction([
        prisma.product.findMany({
            where,
            orderBy,
            skip,
            take: limit,
            select: {
                id: true,
                name: true,
                basePrice: true,
                discount: true,
                price: true,
                averageRating: true,
                images: {
                    where: { isMain: true },
                    select: { url: true }
                },
                variants: {
                    select: {
                        colorName: true,
                        colorHex: true,
                        stock: true
                    }
                }
            }
        }),
        prisma.product.count({ where })
    ])

    const items = products.map(mapProductCardDto)

    return {
        items,
        limit,
        page,
        total
    }
}

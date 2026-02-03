import ApiError from '../../../../shared/http/errors/api-error'
import prisma from '../../../../prisma'
import { calculatePrice, getRatingMap } from '../../helpers'
import { mapProductDetailsDto } from './mapper/product-details.mapper'

export async function getProductById(id: number) {
    const product = await prisma.product.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            description: true,
            basePrice: true,
            discount: true,
            images: {
                select: {
                    url: true,
                    isMain: true
                }
            },
            variants: {
                select: {
                    colorName: true,
                    colorHex: true,
                    stock: true,
                    size: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        }
    })

    if (!product) {
        throw ApiError.notFound('Product does not exist!')
    }

    const ratingMap = await getRatingMap(prisma)
    const rating = ratingMap.get(product.id) ?? 0

    return mapProductDetailsDto({
        ...product,
        rating,
        price: calculatePrice(product.basePrice, product.discount)
    })
}

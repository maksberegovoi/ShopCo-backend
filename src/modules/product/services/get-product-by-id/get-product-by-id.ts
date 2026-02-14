import ApiError from '../../../../shared/http/errors/api-error'
import prisma from '../../../../prisma'
import { mapProductDetailsDto } from './mapper/product-details.mapper'

export async function getProductById(id: number) {
    const product = await prisma.product.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            description: true,
            basePrice: true,
            price: true,
            discount: true,
            averageRating: true,
            images: {
                select: {
                    url: true,
                    isMain: true
                }
            },
            variants: {
                select: {
                    id: true,
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
    return mapProductDetailsDto(product)
}

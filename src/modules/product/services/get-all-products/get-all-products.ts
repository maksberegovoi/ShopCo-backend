import prisma from '../../../../prisma'
import { calculatePrice, getRatingMap } from '../../helpers'
import { ProductCardDto } from './dto/product-card.dto'
import { mapProductCardDto } from './mapper/product-card.mapper'

export async function getAllProducts(): Promise<ProductCardDto[]> {
    const products = await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            basePrice: true,
            discount: true,
            images: {
                where: { isMain: true },
                select: {
                    url: true
                }
            },
            variants: {
                select: {
                    colorName: true,
                    colorHex: true,
                    stock: true
                }
            }
        }
    })

    const ratingMap = await getRatingMap(prisma)

    return products.map((p) =>
        mapProductCardDto({
            ...p,
            rating: ratingMap.get(p.id) ?? 0,
            price: calculatePrice(p.basePrice, p.discount)
        })
    )
}

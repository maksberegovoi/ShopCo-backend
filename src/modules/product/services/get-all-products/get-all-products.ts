import prisma from '../../../../prisma'
import { mapProductListItemDto } from './mapper/product-list-item.mapper'
import { calculatePrice, getRatingMap } from '../../helpers'

export async function getAllProducts() {
    const productList = await prisma.product.findMany({
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

    return productList.map((p) =>
        mapProductListItemDto({
            ...p,
            rating: ratingMap.get(p.id) ?? 0,
            price: calculatePrice(p.basePrice, p.discount)
        })
    )
}

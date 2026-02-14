import { PreviewItemsSchema } from './schemas/previewItemsIds.schema'
import prisma from '../../../../prisma'
import { CartItemPreviewDto } from './dto/items-preview.dto'
import { mapItemPreview } from './mapper/items-preview.mapper'
import { quantityMap } from '../../helpers/quantity-map'

export const getItemsPreviewQuery = async (
    data: PreviewItemsSchema
): Promise<CartItemPreviewDto[]> => {
    const ids = data.items.map((item) => item.productVariantId)
    const items = await prisma.productVariant.findMany({
        where: {
            id: {
                in: ids
            }
        },
        select: {
            id: true,
            stock: true,
            colorName: true,
            size: {
                select: {
                    name: true
                }
            },
            product: {
                select: {
                    id: true,
                    name: true,
                    basePrice: true,
                    discount: true,
                    price: true,
                    images: {
                        where: {
                            isMain: true
                        },
                        select: {
                            url: true
                        }
                    }
                }
            }
        }
    })

    if (!items) return []

    const quantitiesMap = quantityMap(data.items)

    return items.map((item) => {
        const quantity = quantitiesMap.get(item.id) ?? 0

        return mapItemPreview({
            ...item,
            quantity: Math.min(quantity, item.stock)
        })
    })
}

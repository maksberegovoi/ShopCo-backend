import { ProductListItemDto } from '../dto/product-list-item.dto'
import { PrismaProductListItemPayload } from '../payload/product-list-item.payload'
import buildColors from '../../../utils/buildColors/buildColors'

export const mapProductListItemDto = (
    product: PrismaProductListItemPayload & { price: number; rating: number }
): ProductListItemDto => ({
    id: product.id,
    name: product.name,
    price: product.price,
    basePrice: product.basePrice,
    discount: product.discount,
    rating: product.rating,
    avatar: product.images[0]?.url ?? '',
    colors: buildColors(product.variants)
})

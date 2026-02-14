import buildColors from '../../../utils/buildColors/buildColors'
import { ProductCardDto } from '../dto/product-card.dto'
import { PrismaProductCardPayload } from '../payload/product-card.payload'

export const mapProductCardDto = (
    product: PrismaProductCardPayload
): ProductCardDto => ({
    id: product.id,
    name: product.name,
    price: product.price,
    basePrice: product.basePrice,
    discount: product.discount,
    rating: product.averageRating,
    avatar: product.images[0]?.url ?? '',
    colors: buildColors(product.variants)
})

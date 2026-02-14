import { CartItemDto } from '../dto/cart-item.dto'
import { PrismaCartItemPayload } from '../payload/cart-item.payload'

export const cartItemsMapper = (item: PrismaCartItemPayload): CartItemDto => ({
    productId: item.productVariant.product.id,
    cartItemId: item.id,
    productVariantId: item.productVariant.id,
    name: item.productVariant.product.name,
    price: item.productVariant.product.price,
    basePrice: item.productVariant.product.basePrice,
    discount: item.productVariant.product.discount,
    quantity: item.quantity,
    stock: item.productVariant.stock,
    size: item.productVariant.size.name,
    color: item.productVariant.colorName,
    avatar: item.productVariant.product.images[0]?.url ?? ''
})

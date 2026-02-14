import { ItemPreviewPayload } from '../payload/get-items-preview.payload'
import { CartItemPreviewDto } from '../dto/items-preview.dto'

export const mapItemPreview = (
    item: ItemPreviewPayload
): CartItemPreviewDto => ({
    productId: item.product.id,
    name: item.product.name,
    basePrice: item.product.basePrice,
    price: item.product.price,
    discount: item.product.discount,
    size: item.size.name,
    stock: item.stock,
    avatar: item.product.images[0]?.url ?? '',
    color: item.colorName,
    productVariantId: item.id,
    quantity: item.quantity
})

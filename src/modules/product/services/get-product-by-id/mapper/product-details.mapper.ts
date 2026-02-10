import { ProductDetailsDto } from '../dto/product-details.dto'
import { PrismaDetailsPayload } from '../payload/product-details.payload'

export const mapProductDetailsDto = (
    product: PrismaDetailsPayload & { price: number; rating: number }
): ProductDetailsDto => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    basePrice: product.basePrice,
    discount: product.discount,
    rating: product.rating,
    gallery: product.images,
    variants: product.variants.map((v) => ({
        id: v.id,
        colorName: v.colorName,
        colorHex: v.colorHex,
        stock: v.stock,
        size: v.size.name
    }))
})

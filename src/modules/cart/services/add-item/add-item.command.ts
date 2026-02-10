import { AddCartItemDto } from './schemas/add-item.schema'
import prisma from '../../../../prisma'
import ApiError from '../../../../shared/http/errors/api-error'

export async function AddItemCommand(userId: number, item: AddCartItemDto) {
    return prisma.$transaction(async (tx) => {
        const productVariant = await tx.productVariant.findUnique({
            where: { id: item.productVariantId },
            select: {
                id: true,
                stock: true,
                colorName: true,
                size: { select: { name: true } },
                product: { select: { name: true } }
            }
        })

        if (!productVariant) {
            throw ApiError.notFound('Product variant not found')
        }
        if (item.quantity > productVariant.stock) {
            throw ApiError.conflict(
                `${productVariant.product.name} in quantity ${item.quantity} with size ${productVariant.size.name} and color ${productVariant.colorName} is not available.`
            )
        }

        const userCart = await tx.cart.findUnique({
            where: { userId },
            select: {
                id: true,
                cartItems: true
            }
        })

        if (!userCart) {
            throw ApiError.internal('Cart not found')
        }

        const existing = userCart.cartItems.find(
            (cartItem) => cartItem.productVariantId === item.productVariantId
        )

        if (!existing) {
            await tx.cartItem.create({
                data: {
                    cartId: userCart.id,
                    productVariantId: item.productVariantId,
                    quantity: item.quantity
                }
            })
        } else {
            const newQuantity = existing.quantity + item.quantity

            if (newQuantity > productVariant.stock) {
                throw ApiError.conflict(
                    `${productVariant.product.name} in quantity ${newQuantity} with size ${productVariant.size.name} and color ${productVariant.colorName} is not available.`
                )
            }

            await tx.cartItem.update({
                where: { id: existing.id },
                data: { quantity: newQuantity }
            })
        }
    })
}

import prisma from '../../../../prisma'
import ApiError from '../../../../shared/http/errors/api-error'

export const UpdateItemQuantityCommand = async (
    userId: number,
    cartItemId: number,
    quantity: number
): Promise<void> => {
    await prisma.$transaction(async (tx) => {
        const userCart = await tx.cart.findUnique({
            where: { userId },
            select: {
                id: true
            }
        })
        if (!userCart) {
            throw ApiError.notFound('Cart not found')
        }
        const cartItem = await tx.cartItem.findFirst({
            where: {
                id: cartItemId,
                cartId: userCart.id
            },
            select: {
                cartId: true,
                productVariant: {
                    select: {
                        stock: true
                    }
                }
            }
        })
        if (!cartItem) {
            throw ApiError.notFound('Cart item not found')
        }
        if (quantity > cartItem.productVariant.stock) {
            throw ApiError.badRequest(
                'Requested quantity exceeds available stock'
            )
        }

        await tx.cartItem.update({
            where: { id: cartItemId },
            data: {
                quantity: quantity
            }
        })
    })
}

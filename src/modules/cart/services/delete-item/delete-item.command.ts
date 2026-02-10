import prisma from '../../../../prisma'
import ApiError from '../../../../shared/http/errors/api-error'

export const DeleteItemCommand = async (
    userId: number,
    cartItemId: number
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
            where: { id: cartItemId, cartId: userCart.id }
        })
        if (!cartItem) {
            throw ApiError.notFound('Cart item not found')
        }
        await tx.cartItem.delete({
            where: { id: cartItemId }
        })
    })
}

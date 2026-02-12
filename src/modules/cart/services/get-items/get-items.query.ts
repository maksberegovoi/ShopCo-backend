import prisma from '../../../../prisma'
import { cartItemsMapper } from './mapper/cart-items.mapper'
import { calculatePrice } from '../../../product/helpers'
import { CartItemDto } from './dto/cart-item.dto'

export async function getItemsQuery(userId: number): Promise<CartItemDto[]> {
    const items = await prisma.cart.findUnique({
        where: { userId },
        select: {
            cartItems: {
                orderBy: {
                    createdAt: 'asc'
                },
                select: {
                    quantity: true,
                    id: true,
                    productVariant: {
                        select: {
                            id: true,
                            colorName: true,
                            stock: true,
                            size: {
                                select: {
                                    name: true
                                }
                            },
                            product: {
                                select: {
                                    id: true,
                                    name: true,
                                    discount: true,
                                    basePrice: true,
                                    images: {
                                        where: {
                                            isMain: true
                                        },
                                        take: 1,
                                        select: {
                                            url: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })

    if (!items) return []

    return items.cartItems.map((item) => {
        const { product } = item.productVariant

        return cartItemsMapper({
            ...item,
            price: calculatePrice(product.basePrice, product.discount)
        })
    })
}

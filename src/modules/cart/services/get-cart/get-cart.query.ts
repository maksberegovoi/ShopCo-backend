import prisma from '../../../../prisma'
import { getItemsMapper } from './mapper/get-items.mapper'
import { calculatePrice } from '../../../product/helpers'
import { GetCartDto } from './dto/get-cart.dto'
import { CartItemDto } from './dto/cart-item.dto'
import { calculateCartSummary } from '../../utils/calculateCartSummary/calculateCartSummary'
import { CartSummaryDto } from './dto/cart-summary.dto'

export async function getCartQuery(userId: number): Promise<GetCartDto> {
    const items = await prisma.cart.findUnique({
        where: { userId },
        select: {
            cartItems: {
                select: {
                    quantity: true,
                    productVariant: {
                        select: {
                            colorName: true,
                            size: {
                                select: {
                                    name: true
                                }
                            },
                            product: {
                                select: {
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
    if (!items) {
        return {
            items: [],
            summary: {
                subTotal: 0,
                totalDiscount: 0,
                deliveryFee: 0,
                total: 0
            }
        }
    }

    const itemsDto: CartItemDto[] = items.cartItems.map((item) => {
        const { product } = item.productVariant

        return getItemsMapper({
            ...item,
            price: calculatePrice(product.basePrice, product.discount)
        })
    })

    const summary: CartSummaryDto = calculateCartSummary(itemsDto)

    return {
        items: itemsDto,
        summary: summary
    }
}

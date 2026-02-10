import { CartSummaryDto } from '../../services/get-items/dto/cart-summary.dto'
import { CartItemDto } from '../../services/get-items/dto/cart-item.dto'
import { env } from '../../../../env'

export function calculateCartSummary(items: CartItemDto[]): CartSummaryDto {
    const deliveryFee = env.DELIVERY_FEE
    let totalBasePrice = 0
    let totalPrice = 0

    for (const item of items) {
        totalBasePrice += item.basePrice * item.quantity
        totalPrice += item.price * item.quantity
    }
    const totalDiscount = totalBasePrice - totalPrice
    const total = deliveryFee + totalPrice

    return {
        subTotal: totalBasePrice,
        total,
        totalDiscount,
        deliveryFee
    }
}

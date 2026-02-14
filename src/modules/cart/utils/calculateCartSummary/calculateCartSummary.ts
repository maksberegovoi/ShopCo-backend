import { env } from '../../../../env'

type SummaryCalculableItem = {
    basePrice: number
    price: number
    quantity: number
}

export function calculateCartSummary<T extends SummaryCalculableItem>(
    items: T[]
) {
    const deliveryFee = items.length ? env.DELIVERY_FEE : 0
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

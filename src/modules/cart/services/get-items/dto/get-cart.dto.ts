import { CartItemDto } from './cart-item.dto'
import { CartSummaryDto } from './cart-summary.dto'

export interface GetCartDto {
    items: CartItemDto[]
    summary: CartSummaryDto
}

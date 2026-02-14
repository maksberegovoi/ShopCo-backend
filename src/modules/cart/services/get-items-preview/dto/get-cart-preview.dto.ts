import { CartItemPreviewDto } from './items-preview.dto'
import { CartSummaryDto } from '../../get-items/dto/cart-summary.dto'

export interface GetCartPreviewDto {
    items: CartItemPreviewDto[]
    summary: CartSummaryDto
}

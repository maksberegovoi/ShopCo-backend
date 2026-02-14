import { GetCartDto } from './get-items/dto/get-cart.dto'
import { getItemsQuery } from './get-items/get-items.query'
import { AddItemCommand } from './add-item/add-item.command'
import { AddCartItemDto } from './add-item/schemas/add-item.schema'
import { calculateCartSummary } from '../utils/calculateCartSummary/calculateCartSummary'
import { DeleteItemCommand } from './delete-item/delete-item.command'
import { UpdateItemQuantityCommand } from './update-item-quantity/update-item-quantity.command'
import { getItemsPreviewQuery } from './get-items-preview/get-items-preview.query'
import { PreviewItemsSchema } from './get-items-preview/schemas/previewItemsIds.schema'
import { GetCartPreviewDto } from './get-items-preview/dto/get-cart-preview.dto'

class CartService {
    async getCart(userId: number): Promise<GetCartDto> {
        const items = await getItemsQuery(userId)

        return {
            items,
            summary: calculateCartSummary(items)
        }
    }

    async addItem(userId: number, item: AddCartItemDto): Promise<void> {
        return AddItemCommand(userId, item)
    }
    async deleteItem(userId: number, cartItemId: number): Promise<void> {
        return DeleteItemCommand(userId, cartItemId)
    }
    async updateItemQuantity(
        userId: number,
        cartItemId: number,
        quantity: number
    ): Promise<void> {
        return UpdateItemQuantityCommand(userId, cartItemId, quantity)
    }
    async getCartPreview(data: PreviewItemsSchema): Promise<GetCartPreviewDto> {
        if (!data.items.length) {
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

        const items = await getItemsPreviewQuery(data)

        return {
            items,
            summary: calculateCartSummary(items)
        }
    }
}

export default CartService

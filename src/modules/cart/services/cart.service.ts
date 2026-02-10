import { GetCartDto } from './get-items/dto/get-cart.dto'
import { getItemsQuery } from './get-items/get-items.query'
import { AddItemCommand } from './add-item/add-item.command'
import { AddCartItemDto } from './add-item/schemas/add-item.schema'
import { CartSummaryDto } from './get-items/dto/cart-summary.dto'
import { calculateCartSummary } from '../utils/calculateCartSummary/calculateCartSummary'
import { DeleteItemCommand } from './delete-item/delete-item.command'
import { UpdateItemQuantityCommand } from './update-item-quantity/update-item-quantity.command'

class CartService {
    async getCart(userId: number): Promise<GetCartDto> {
        const items = await getItemsQuery(userId)
        if (!items || items.length === 0) {
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
        const summary: CartSummaryDto = calculateCartSummary(items)

        return {
            items,
            summary
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
}

export default CartService

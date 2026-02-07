import { getItemsQuery } from './get-items/get-items.query'
import { CartItemDto } from './get-items/dto/get-items.dto'

class CartService {
    async getItems(): Promise<CartItemDto[]> {
        return getItemsQuery()
    }
}

export default CartService

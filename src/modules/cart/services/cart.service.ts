import { GetCartDto } from './get-cart/dto/get-cart.dto'
import { getCartQuery } from './get-cart/get-cart.query'

class CartService {
    async getCart(userId: number): Promise<GetCartDto> {
        return getCartQuery(userId)
    }
}

export default CartService

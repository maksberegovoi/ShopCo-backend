import { PrismaGetItemsPayload } from '../payload/get-items.payload'
import { CartItemDto } from '../dto/cart-item.dto'


export const getItemsMapper(items: PrismaGetItemsPayload): CartItemDto => ({
    name: items.cartItems.
})
import { CartItemDto } from './dto/get-items.dto'
import prisma from '../../../../prisma'

export async function getItemsQuery(): Promise<CartItemDto[]> {
    const items = await prisma.cart.findMany({})

    return items
}

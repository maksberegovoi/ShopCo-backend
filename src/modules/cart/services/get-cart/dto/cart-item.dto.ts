import { Size } from '@prisma/client'

export interface CartItemDto {
    name: string
    size: Size
    color: string
    avatar: string
    discount: number
    price: number
    quantity: number
}

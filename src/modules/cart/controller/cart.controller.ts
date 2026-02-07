import { ApiResponse } from '../../../shared/http/api-response'
import { Request, Response } from 'express'
import { CartItemDto } from '../services/get-items/dto/get-items.dto'
import CartService from '../services/cart.service'

class CartController {
    constructor(private readonly cartService: CartService) {}

    getItems = async (
        req: Request,
        res: Response<ApiResponse<CartItemDto[]>>
    ): Promise<void> => {
        const items = await this.cartService.getItems()

        res.json({ data: items })
    }
    // addItem = async (req: Request, res: Response<ApiResponse<unknown>>) => {}
    // removeItem = async (req: Request, res: Response<ApiResponse<unknown>>) => {}
}

export const cartController = new CartController(new CartService())

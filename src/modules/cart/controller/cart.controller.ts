import { ApiResponse } from '../../../shared/http/api-response'
import { Request, Response } from 'express'
import CartService from '../services/cart.service'
import { GetCartDto } from '../services/get-cart/dto/get-cart.dto'

class CartController {
    constructor(private readonly cartService: CartService) {}

    getCart = async (
        req: Request,
        res: Response<ApiResponse<GetCartDto>>
    ): Promise<void> => {
        const userId = req.user!.userId

        const items = await this.cartService.getCart(userId)

        res.json({ data: items })
    }
    // addItem = async (req: Request, res: Response<ApiResponse<unknown>>) => {}
    // removeItem = async (req: Request, res: Response<ApiResponse<unknown>>) => {}
}

export const cartController = new CartController(new CartService())

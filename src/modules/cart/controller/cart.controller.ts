import { ApiResponse } from '../../../shared/http/api-response'
import { Request, Response } from 'express'
import CartService from '../services/cart.service'
import { GetCartDto } from '../services/get-items/dto/get-cart.dto'
import { addItemSchema } from '../services/add-item/schemas/add-item.schema'
import { idParamSchema } from '../../../shared/http/schemas/params.schema'
import { quantityBodySchema } from '../../../shared/http/schemas/body.schema'

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
    addItem = async (req: Request, res: Response) => {
        const userId = req.user!.userId
        const item = addItemSchema.parse(req.body)

        await this.cartService.addItem(userId, item)

        res.sendStatus(204)
    }
    deleteItem = async (req: Request, res: Response) => {
        const userId = req.user!.userId
        const { id: cartItemId } = idParamSchema.parse(req.params)

        await this.cartService.deleteItem(userId, cartItemId)

        res.sendStatus(204)
    }
    updateItemQuantity = async (req: Request, res: Response) => {
        const userId = req.user!.userId
        const { id: cartItemId } = idParamSchema.parse(req.params)
        const { quantity } = quantityBodySchema.parse(req.body)

        await this.cartService.updateItemQuantity(userId, cartItemId, quantity)

        res.sendStatus(204)
    }
}

export const cartController = new CartController(new CartService())

import { Router } from 'express'
import { cartController } from '../controller/cart.controller'
import { authMiddleware } from '../../../shared/http/middlewares/authMiddleware'

const cartRouter = Router()

cartRouter.get('/', authMiddleware, cartController.getCart)
cartRouter.post('/preview', cartController.getCartPreview)
cartRouter.post('/items', authMiddleware, cartController.addItem)
cartRouter.delete('/items/:id', authMiddleware, cartController.deleteItem)
cartRouter.patch(
    '/items/:id',
    authMiddleware,
    cartController.updateItemQuantity
)

export default cartRouter

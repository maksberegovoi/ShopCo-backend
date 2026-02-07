import { Router } from 'express'
import { cartController } from '../controller/cart.controller'
import { authMiddleware } from '../../../shared/http/middlewares/authMiddleware'

const cartRouter = Router()

cartRouter.get('/', authMiddleware, cartController.getCart)
// cartRouter.post('/', authMiddleware, cartController.addItem)
// cartRouter.delete('/', authMiddleware, cartController.removeItem)

export default cartRouter

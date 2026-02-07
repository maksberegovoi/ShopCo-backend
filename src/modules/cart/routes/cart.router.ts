import { Router } from 'express'
import { cartController } from '../controller/cart.controller'

const cartRouter = Router()

cartRouter.get('/cart', cartController.getItems)
cartRouter.post('/cart', cartController.addItem)
cartRouter.delete('/cart', cartController.removeItem)

export default cartRouter

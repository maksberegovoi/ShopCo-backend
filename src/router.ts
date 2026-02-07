import express from 'express'
import productRouter from './modules/product/routes/product.router'
import homeRouter from './modules/home/routes/home.router'
import cartRouter from './modules/cart/routes/cart.router'
import userRouter from './modules/user/routes/user.router'

const router = express.Router()

router.use('/products', productRouter)
router.use('/home', homeRouter)
router.use('/cart', cartRouter)
router.use('/user', userRouter)

export default router

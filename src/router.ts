import express from 'express'
import productRouter from './modules/product/routes/product.router'
import homeRouter from './modules/home/routes/home.router'

const router = express.Router()

router.use('/products', productRouter)
router.use('/home', homeRouter)

export default router

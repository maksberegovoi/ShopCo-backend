import express from 'express'
import { productController } from '../controllers/product.controller'

const productRouter = express.Router()

productRouter.get('/', productController.getAll)
productRouter.get('/filters', productController.getFilters)
productRouter.get('/:id', productController.getById)
productRouter.get('/:id/reviews', productController.getReviews)
productRouter.get('/:id/attributes', productController.getAttributes)

productRouter.post('/', productController.create) // checkRoleMiddleware('ADMIN')
productRouter.delete('/:id', productController.delete) // checkRoleMiddleware('ADMIN')

export default productRouter

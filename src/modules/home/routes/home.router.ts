import express from 'express'
import { homeController } from '../controllers/home.controller'

const homeRouter = express.Router()

homeRouter.get('/categories', homeController.getCategoriesProducts)

export default homeRouter

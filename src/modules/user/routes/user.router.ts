import { Router } from 'express'
import { userController } from '../controllers/user.controller'
import { authMiddleware } from '../../../shared/http/middlewares/authMiddleware'

const userRouter = Router()

userRouter.post('/login', userController.login)
userRouter.post('/registration', userController.create)
userRouter.post('/logout', userController.logout)
userRouter.get('/me', authMiddleware, userController.checkAuth)

export default userRouter

import UserService from '../services/user.service'
import { Request, Response } from 'express'
import { createUserSchema } from '../services/create-user/schemas/create-user.schema'
import { ApiResponse } from '../../../shared/http/api-response'
import { CreateUserDto } from '../services/create-user/dto/create-user.dto'
import { loginSchema } from '../services/login-user/schemas/login.schema'
import { LoginResponseDto } from '../services/login-user/dto/login-response.dto'
import { UserDto } from '../services/check-auth/user.dto'

class UserController {
    constructor(private readonly userService: UserService) {}

    create = async (
        req: Request,
        res: Response<ApiResponse<CreateUserDto>>
    ): Promise<void> => {
        const data = createUserSchema.parse(req.body)

        const user = await this.userService.create(data)

        res.json({ data: user })
    }

    login = async (
        req: Request,
        res: Response<ApiResponse<Omit<LoginResponseDto, 'token'>>>
    ): Promise<void> => {
        const data = loginSchema.parse(req.body)

        const { token, ...user } = await this.userService.login(data)

        res.cookie('accessToken', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 7 * 24 * 60 * 60 * 1000,
            path: '/'
        })
        res.json({ data: user })
    }

    checkAuth = async (req: Request, res: Response<ApiResponse<UserDto>>) => {
        const userId = req.user!.userId

        const user = await this.userService.checkAuth(userId)

        res.json({ data: user })
    }
    logout = async (req: Request, res: Response) => {
        res.clearCookie('accessToken', {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            path: '/'
        })

        res.json({ data: null })
    }
}

export const userController = new UserController(new UserService())

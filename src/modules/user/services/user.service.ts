import { createUser } from './create-user/create-user'
import { CreateUserDto } from './create-user/dto/create-user.dto'
import { CreateUserSchema } from './create-user/schemas/create-user.schema'
import { loginQuery } from './login-user/login.query'
import { LoginDto } from './login-user/schemas/login.schema'
import { LoginResponseDto } from './login-user/dto/login-response.dto'
import { checkAuthQuery } from './check-auth/check-auth.query'
import { UserDto } from './check-auth/user.dto'

class UserService {
    async create(data: CreateUserSchema): Promise<CreateUserDto> {
        return createUser(data)
    }
    async login(data: LoginDto): Promise<LoginResponseDto> {
        return loginQuery(data)
    }

    async checkAuth(userId: number): Promise<UserDto> {
        return checkAuthQuery(userId)
    }
}

export default UserService

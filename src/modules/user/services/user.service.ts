import { createUser } from './create-user/create-user'
import { CreateUserDto } from './create-user/dto/create-user.dto'
import { CreateUserSchema } from './create-user/schemas/create-user.schema'
import { loginQuery } from './login-user/login.query'
import { LoginDto } from './login-user/schemas/login.schema'
import { LoginResponseDto } from './login-user/dto/login-response.dto'

class UserService {
    async create(data: CreateUserSchema): Promise<CreateUserDto> {
        return createUser(data)
    }
    async login(data: LoginDto): Promise<LoginResponseDto> {
        return loginQuery(data)
    }
}

export default UserService

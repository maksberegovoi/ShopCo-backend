import { LoginDto } from './schemas/login.schema'
import prisma from '../../../../prisma'
import ApiError from '../../../../shared/http/errors/api-error'
import bcrypt from 'bcrypt'
import { LoginResponseDto } from './dto/login-response.dto'
import { signAccessToken } from '../../../../shared/http/jwt/signAccessToken'

export async function loginQuery(data: LoginDto): Promise<LoginResponseDto> {
    const user = await prisma.user.findUnique({
        where: { email: data.email }
    })

    if (!user) {
        throw ApiError.badRequest('Wrong password or email')
    }

    const isValid = await bcrypt.compare(data.password, user.password)

    if (!isValid) {
        throw ApiError.badRequest('Wrong password or email')
    }

    const token = signAccessToken({ userId: user.id, role: user.role })

    return {
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    }
}

import prisma from '../../../../prisma'
import ApiError from '../../../../shared/http/errors/api-error'
import { hashPassword } from '../../utils/hashPassword'
import { CreateUserSchema } from './schemas/create-user.schema'
import { CreateUserDto } from './dto/create-user.dto'

export async function createUser(
    data: CreateUserSchema
): Promise<CreateUserDto> {
    const userExist = await prisma.user.findFirst({
        where: { email: data.email }
    })
    if (userExist)
        throw ApiError.conflict('User with this email has already exist')

    const hashedPassword = await hashPassword(data.password)
    const user = await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashedPassword,
            cart: {
                create: {}
            }
        }
    })

    return { id: user.id }
}

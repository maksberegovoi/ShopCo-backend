import prisma from '../../../../prisma'
import ApiError from '../../../../shared/http/errors/api-error'
import { UserDto } from './user.dto'

export const checkAuthQuery = async (userId: number): Promise<UserDto> => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            name: true,
            email: true,
            role: true
        }
    })

    if (!user) {
        throw ApiError.notFound('User not found')
    }

    return user
}

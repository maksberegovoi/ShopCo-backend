import { CreateUserDto } from '../dto/user.dto'
import prisma from "../prisma";

export const createUser = async (dto: CreateUserDto) => {
    return prisma.user.create({
        data: {
            email: dto.email,
        },
    })
}

export const getUsers = async () => {
    return prisma.user.findMany()
}

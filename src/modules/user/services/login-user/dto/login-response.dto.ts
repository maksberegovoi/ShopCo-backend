import { Role } from '@prisma/client'

export interface LoginResponseDto {
    token: string
    user: {
        id: number
        name: string
        email: string
        role: Role
    }
}

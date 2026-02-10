import bcrypt from 'bcrypt'

export const hashPassword = (password: string, salt: number = 10) => {
    return bcrypt.hash(password, salt)
}

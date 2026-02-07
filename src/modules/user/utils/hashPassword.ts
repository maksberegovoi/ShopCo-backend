import bcrypt from 'bcrypt'
import { isDev } from '../../../env'

// TODO: use variable
const defaultSalt = isDev ? 5 : 10

export const hashPassword = (password: string, salt: number = defaultSalt) => {
    return bcrypt.hash(password, salt)
}

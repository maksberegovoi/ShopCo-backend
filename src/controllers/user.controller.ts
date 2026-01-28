import { Request, Response } from 'express'
import * as userService from '../services/user.service'

export const createUser = async (req: Request, res: Response) => {
    const user = await userService.createUser(req.body)
    res.json(user)
}

export const getUsers = async (_: Request, res: Response) => {
    const users = await userService.getUsers()
    res.json(users)
}

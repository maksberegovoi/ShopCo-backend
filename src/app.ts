import 'dotenv/config'
import express from 'express'
import { logger } from './middleware/logger.middleware'
import { userRouter } from './routes/user.routes'

const app = express()
app.use(express.json())
app.use(logger)

app.use('/users', userRouter)

const start = async () => {
    try {
        app.listen(process.env.PORT, () => {
            console.log('SERVER WAS STARTED')
        })
    } catch (e) {
        console.log(e)
    }
}

start()

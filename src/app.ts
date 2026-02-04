import 'dotenv/config'
import 'express-async-errors'
import cors from 'cors'
import express from 'express'
import router from './router'
import errorHandlerMiddleware from './shared/http/middlewares/errorHandlerMiddleware'
import { httpLoggerMiddleware } from './shared/http/middlewares/httpLoggerMiddleware'

const app = express()

app.use(httpLoggerMiddleware)

app.use(cors())
app.use(express.json())
app.use('/api', router)

// must be the last one
app.use(errorHandlerMiddleware)

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

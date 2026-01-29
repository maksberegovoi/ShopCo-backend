import 'dotenv/config'
import express from 'express'

const app = express()
app.use(express.json())

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

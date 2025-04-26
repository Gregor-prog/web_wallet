import express from "express"
import dotenv from 'dotenv'
import pool from "./db"
import userRouter from "./routes/user.route"
dotenv.config()

const app = express()
const port = 4500
app.use(express.json())
// app.use()
pool.connect()
.then(client => {
    console.log('postgresql connected succesfully')
    client.release()
}).catch(error => {
    console.log("couldn't connect to postgres")
    console.log(error)
    process.exit(1)
})

app.use('/user',userRouter)


app.listen(port,() => {
    console.log(`server running on localhost:${port}`)
})
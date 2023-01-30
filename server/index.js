import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './src/routes/userRoutes.js'
import postRoutes from './src/routes/postRoutes.js'
import db from './src/config/db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config()
const app = express()

db()

app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? 'https://social-e04vercel-client.vercel.app/' : 'http://localhost:3000',
    credentials: true
}))

app.use(cookieParser())
app.use(express.json())
app.use('/users', userRoutes)
app.use('/posts', postRoutes)

const port = process.env.PORT || 4001
app.listen(port, () => console.log('Server is up and running at port', port))
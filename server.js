import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const router = express.Router()
app.use(
  '/api/token',
  router.get('/', (req, res) => {
    res.json({ token: process.env.ACCESS_TOKEN })
  })
)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server listening on port ${PORT} `))

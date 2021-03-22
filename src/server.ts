import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { errors } from 'celebrate'

import routes from './routes'

const server = express()
const port = process.env.PORT || 3333

server.use(cors())
server.use(express.json())
server.use(routes)
server.use(errors())

server.get('/', (_req, res) => {
  res.json({ status: 'server running' })
})

server.listen(port, () => {
  console.log(`listening on http://localhost:${port} 🚀`)
})

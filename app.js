import express from 'express'
import cors from 'cors'
import router from './router/index.js'
import init from './init.js'

const port = 3000
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') res.send(200)
  else {
    next()
  }
})

app.use(router)
app.listen(port, () => {
  console.log(`app running on port ${port}!`)
})

// init()

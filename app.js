import express from 'express'
import cors from 'cors'
import router from './router/index.js'
import init from './init.js'

const port = 3000
const app = express()

app.use(router)
app.listen(port, () => {
  console.log(`app running on port ${port}!`)
})

// init()

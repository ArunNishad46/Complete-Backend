const path = require('path')

const express = require('express')
const userRouter = require('./routes/userRouter')
const hostRouter = require('./routes/hostRouter')
const rootDir = require('./utils/pathUtil')

const app = express()

app.use(express.urlencoded())
app.use(userRouter)
app.use("/host", hostRouter)

app.use(express.static(path.join(rootDir, 'public')))

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

const port = 3000
app.listen(port, () => {
  console.log(`Server running on address http://127.0.0.1:${port}`)
})


const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000

const {morganMiddleware} = require('./Middlewares/morgan')

const {
  notRouteNotFoundMiddleware,
  catchErrorMiddleware,
} = require('./Middlewares/errorHandling')

app.set('port', PORT)
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use(morganMiddleware)

app.use('/', require('./Routes/example.js'))

app.use(notRouteNotFoundMiddleware, catchErrorMiddleware)

module.exports = app

const debug = require('debug')('server')
const morgan = require('morgan')

morgan.token('host', function (req, res) {
  return req.hostname
})

const morganMiddleware = morgan(
  ':method :host :url :status :response-time ms',
  {
    stream: {
      write: function (msg) {
        debug(msg)
      },
    },
  },
)

module.exports = {morganMiddleware}

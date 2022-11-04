const debug = require('debug')('backend:server:error')

const notRouteNotFoundMiddleware = (req, res, next) => {
  const err = new Error('Not Found')
  err.statusCode = 404
  next(err)
}

const catchErrorMiddleware = (err, req, res, next) => {
  const errStatus = err.statusCode || 500
  const ErrorDebug = err.debug ? err.debug : debug
  delete err.debug
  if (errStatus < 500) delete err.stack
  ErrorDebug(err)
  const errMsg = err.message || 'Something went wrong'
  const response = {
    success: false,
    status: errStatus,
    message: errMsg,
  }
  res.status(errStatus).json(response)
}

module.exports = {notRouteNotFoundMiddleware, catchErrorMiddleware}

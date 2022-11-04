const debug = require('debug')('backend:server')
const app = require('./server')

app.listen(app.get('port'), () => {
  debug('server on port: ', app.get('port'))
})

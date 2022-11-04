const helloWorld = (req, res) => {
  res.send('Template works')
}

module.exports = {helloWorld}

/*

For async/await controllers you can use the 'express-debug-async-wrap' 
wrapper to catch the errors in your async/await methods and the async 
errors inside of that methods.

Example:

const debug = require('debug')('backend:server:error')
const wrapper = require('express-debug-async-wrap')(debug)
const axios = require('axios')
const helloWorld = wrapper(async (req, res) => {
  const response = await axios('exampleErrorUrl')
  res.send(response)
})

Console output:

backend:server:error TypeError [ERR_INVALID_URL]: Invalid URL: exampleErrorUrl

Http response:

{
	"success": false,
	"status": 500,
	"message": "Invalid URL: exampleErrorUrl"
}

*/

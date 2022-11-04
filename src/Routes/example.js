const express = require('express')
const router = express.Router()
const {helloWorld} = require('../Services/example')

router.get('/', helloWorld)

module.exports = router

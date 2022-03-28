const express = require('express')
const router = express.Router()
const customerController = require('../app/controllers/CustomerController')

router.use('/profile', customerController.profile)
router.use('/', customerController.home)

module.exports = router
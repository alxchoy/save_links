const express = require('express')

const { authRouter } = require('../components/auth')
const { userRouter } = require('../components/user')

const router = express.Router()

router.use('', authRouter)
router.use('/user', userRouter)

module.exports = router

const express = require('express')
const { getUserByUID } = require('../controllers/users.controller')
const { Error405 } = require('../errors/errors')

const usersRouter = express.Router()

usersRouter.route('/:userID')
.get(getUserByUID)
.all(Error405)

module.exports = usersRouter
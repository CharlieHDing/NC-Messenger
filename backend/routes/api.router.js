const express = require('express')
const usersRouter = require('./users.router')
const { Error405 } = require('../errors/errors')
const listEndpoints = require('express-list-endpoints')


const apiRouter = express.Router()

apiRouter.use('/users', usersRouter)

apiRouter.route('/')
.get((req, res, next) => {
        const endpoints = listEndpoints(apiRouter)
        res.status(200).send({endpoints})
})
.all(Error405)

module.exports = apiRouter
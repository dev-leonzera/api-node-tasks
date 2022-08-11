const express = require('express')
const TaskController = require('./controller')

const taskRoutes = express.Router()

taskRoutes.get('/', TaskController.index)
taskRoutes.get('/show/:id', TaskController.show)
taskRoutes.post('/create', TaskController.store)

module.exports = taskRoutes
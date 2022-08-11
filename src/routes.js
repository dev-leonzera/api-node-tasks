const express = require('express')
const taskRoutes = require('./modules/tasks/api')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.status(200).json({message: 'Success'})
})

routes.use('/tasks', taskRoutes)

module.exports = routes
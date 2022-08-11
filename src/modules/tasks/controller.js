const TaskService = require('./service')

module.exports = {
    index(req, res){
        const tasks = TaskService.listTasks()
        return res.status(200).json(tasks)
    },

    show(req, res){
        const id = Number.parseInt(req.params.id)
        const task = TaskService.getTask(id)
        return res.status(200).json(task)
    },

    store(req, res){
        const newTask = {
            id: 3,
            title: 'Boring task',
            complete: false
        }
        const tasks = TaskService.createTask(newTask)
        return res.status(201).json(tasks)
    }
}
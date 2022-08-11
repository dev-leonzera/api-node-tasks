const TaskRepository = require('./repository')

module.exports = {
    listTasks(){
        const tasks = TaskRepository.listTasks()
        return tasks
    },

    getTask(id){
        const task = TaskRepository.getTask(id)
        return task
    },

    createTask(data){
        const newTask = TaskRepository.createTask(data)
        return newTask
    }
}
const tasks = require('./tasks')

module.exports = {
    listTasks(){
        return tasks
    },

    getTask(id){
        const task = tasks.find(t => t.id === id)
        return task
    },

    createTask(data){
        tasks.push(data);
        return tasks
    }
}
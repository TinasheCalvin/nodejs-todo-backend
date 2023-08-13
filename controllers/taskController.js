const { default: Api404Error } = require('../errors/404Error')
const Task = require('../models/task')

async function addTask(req,res) {
    let task = new Task(req.body)
    try {
        let newTask = await task.save()
        return res.status(200).send(newTask)
    }
    catch {
        return res.status(400).send({
            message: 'Failed to create new task'
        })
    }
}

async function getAllTasks(req,res) {
    try {
        let tasks = await Task.find()
        res.status(200).send({ tasks: tasks })
    }
    catch(err) {
        res.status(500).send({ message: 'Unable to fetch tasks' })
    }
}

async function getTaskById(req,res) {
    try {
        let task = await Task.findById(req.params.id)
        if (task === null) {
            throw new Api404Error(`Task with id ${req.params.id} does not exist`)
        }
        res.status(200).send(task)
    }
    catch(err) {
        if (err instanceof Api404Error) {
            res.status(404).send({ message: err.message })
        }
        res.status(404).send({ message: 'Task not found' })
    }
}

async function updateTask(req,res) {
    let { id } = req.params
    let updatedTask = req.body
    try {
        let newTask = await Task.findByIdAndUpdate(id, updatedTask, { new: true })
        if (newTask === null) {
            throw new Api404Error(`Task with id ${req.params.id} does not exist`)
        }

        return res.status(200).send(newTask)
    }
    catch(err) {
        return res.status(404).send({ message: err.message })
    }
}

async function deleteTask(req,res) {
    let { id } = req.params
    try {
        let deletedTask = await Task.findByIdAndDelete(id)
        if(!deletedTask) {
            throw new Api404Error(`Task with id ${req.params.id} does not exist`)
        }
        return res.status(200).send(deletedTask)
    }
    catch(err) {
        return res.send({ status: res.statusCode, message: 'Failed to delete task' })
    }
}

module.exports = { addTask, getAllTasks, getTaskById, updateTask, deleteTask }
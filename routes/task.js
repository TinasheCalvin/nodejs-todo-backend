const express = require('express')
const {addTask,getAllTasks,getTaskById,updateTask,deleteTask} = require('../controllers/taskController')

let router = express.Router()

router.post('/', addTask)

router.get('/', getAllTasks)

router.get('/:id', getTaskById)

router.put('/:id', updateTask)

router.delete('/:id', deleteTask)

module.exports = router

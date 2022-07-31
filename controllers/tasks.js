const Task = require('../Models/Task');

const getAllTasks = (req, res) => {
    res.send('Get All Tasks From File')
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
    // res.send(req.body)
}

const getTask = (req, res) => {
    // res.send('Get task')
    res.json({ id: req.params.id })
}

const updateTask = (req, res) => {
    res.send('Update task')
}

const deleteTask = (req, res) => {
    res.send('Delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
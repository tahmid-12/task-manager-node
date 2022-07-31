const Task = require('../Models/Task');

const getAllTasks = async (req, res) => {
    try{
        const task = await Task.find({});
        res.status(201).json({ task })
    }catch(err){
        res.status(500).json({ message: err })
    }
    // res.send('Get All Tasks From File')
}

const createTask = async (req, res) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    }catch(err){
        res.status(500).json({ message: err })
    }
    // res.send(req.body)
}

const getTask = async (req, res) => {
    try{
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID })

        if(!task){
            return res.status(404).json({ message: `Task Not Avaialble with ${taskID}`})
        }

        res.status(200).json({ task })
    }catch(error){
        res.status(500).json({ message: error })
    }
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
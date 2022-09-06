const pool = require('../db-local');

const getAllTasks = async (req, res) => {
    res.send('Retrieving a list of tasks');
};

const getTask = async (req, res) => {
    res.send('Retrieving a single task');
};

const createTask = async (req, res) => {
    //const task = req.body; // 'req.body' permite conocer la información que envía las aplicaciones cliente

    const {title, description} = req.body; // 'req.body' permite conocer la información que envía las aplicaciones cliente

    const result = await pool.query("INSERT INTO task (title, description) VALUES($1,$2)",[
        title,
        description
    ]);
    
    console.log(result);
    //console.log(title, description);
    //console.log(task);
    res.send('Creating a task');
};

const deleteTask = (req, res) => {
    res.send('Deleting a task');
};

const updateTask = (req, res) => {
    res.send('Updating a task');
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
};
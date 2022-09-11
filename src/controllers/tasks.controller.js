const pool = require('../db-local');
//const { all } = require('../routes/tasks.routes');

/*const getAllTasks = async (req, res) => {
    res.send('Retrieving a list of tasks');
};*/
const getAllTasks = async (req, res) => {
    try {
        const allTask = await pool.query('SELECT * FROM task');
        //console.log(allTask);
        //res.send('tareas');
        res.json(allTask.rows);
    } catch (error) {
        console.log(error.message);
    }
};

/*const getTask = async (req, res) => {
    res.send('Retrieving a single task');
};*/
const getTask = async (req, res) => {
    try {
        //console.log(req.params.id); // Recibe el parametro que venga despues del '/' final en la ruta y lo imprime
        const {id} = req.params; // Recibe el parametro que venga despues del '/' final en la ruta y lo guarda en 'id'

        const result = await pool.query('SELECT * FROM task WHERE id = $1', [id]);
        //console.log(result);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'Task not found'
            });

        //res.send('Retrieving a single task');
        return res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};


const createTask = async (req, res) => {
    //const task = req.body; // 'req.body' permite conocer la información que envía las aplicaciones cliente

    const {title, description} = req.body; // 'req.body' permite conocer la información que envía las aplicaciones cliente

    try {
        const result = await pool.query("INSERT INTO task (title, description) VALUES($1,$2) RETURNING *",[ // El 'RETURNING *' devuelve info de lo insertado
            title,
            description
        ]);
    
        console.log(result);
        //console.log(title, description);
        //console.log(task);
        //res.send('Creating a task');
        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
        res.json({ error: error.message });
    }
};

const deleteTask = async (req, res) => {
    const {id} = req.params

    //const result = await pool.query('DELETE FROM task WHERE id = $1 RETURNING *', [id]);
    const result = await pool.query('DELETE FROM task WHERE id = $1', [id]);

    console.log(result)

    if (result.rowCount === 0)
        return res.status(404).json({
            message: 'Task not found'
        });

    //res.send('Deleting a task');
    return res.sendStatus(204);
};

const updateTask = async (req, res) => {

    const {id} = req.params;
    const {title, description} = req.body;

    //console.log(id, title, description);

    const result = await pool.query(
        //'UPDATE task SET title = $1, description = $2 WHERE id = $3',
        'UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *',
        [title, description,id
    ]);

    if (result.rowCount === 0)
        return res.status(404).json({
            message: "Task not found"
        });

    console.log(result);

    //res.send('Updating a task');
    return res.json(result.rows[0]);
    //res.json(result.rows[0]);
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
};
const { Router } = require('express'); // Se importa la función Router
const client = require('../db-elephantsql'); // Conectandose a ElephantSQL
//const pool = require('../db-local');
const { getAllTasks, getTask, createTask, deleteTask, updateTask } = require('../controllers/tasks.controller')

const router = Router(); // Se ejecuta la función Router. El objeto 'router' permite crear nuevas URLs

/*
// Ejemplo básico de uso
router.get('/', (req, res) => { // Cuando se visita la página inicial, se responde hacia el Front con 'Hello world'
    res.send('Hello world');    // se puede comprobar desde el navegador en el localHost en el respectivo puerto
});
*/

/*
// Rutas iniciales
 router.get('/tasks', (req, res) => {
    res.send('Retrieving a list of tasks');
});

router.get('/tasks/10', (req, res) => {
    res.send('Retrieving a single task');
});

router.post('/tasks', (req, res) => {
    res.send('Creating a task');
});

router.delete('/tasks', (req, res) => {
    res.send('Deleting a task');
});

router.put('/tasks', (req, res) => {
    res.send('Updating a task');
});
 */
/*
// Probando las conexiones a las bases de datos
router.get('/pgelephant', async (req, res) => {
    const result = await client.query('SELECT NOW()')
    console.log(result);
    res.json('executed')
});

router.get('/pglocal', async (req, res) => {
    const result = await pool.query('SELECT NOW()')
    console.log(result);
    //res.json('executed')
    res.json(result.rows[0].now)
});
*/

router.get('/tasks', getAllTasks);

//router.get('/tasks/10', getTask);
router.get('/tasks/:id', getTask); // El ':id' es para esperar una variable

router.post('/tasks', createTask);

//router.delete('/tasks', deleteTask);
router.delete('/tasks/:id', deleteTask);

//router.put('/tasks', updateTask);
router.put('/tasks/:id', updateTask);

module.exports = router; // Se exporta este router
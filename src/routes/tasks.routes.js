const { Router } = require('express'); // Se importa la función Router
const client = require('../db-elephantsql');

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

router.get('/tasks', async (req, res) => {
    const result = await client.query('SELECT NOW()')
    console.log(result);
    res.json('executed')
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

module.exports = router; // Se exporta este router
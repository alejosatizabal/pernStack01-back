const { Router } = require('express'); // Se importa la función Router

const router = Router(); // Se ejecuta la función Router. El objeto 'router' permite crear nuevas URLs

router.get('/', (req, res) => { // Cuando se visita la página inicial, se responde hacia el Front con 'Hello world'
    res.send('Hello world');    // se puede comprobar desde el navegador en el localHost en el respectivo puerto
});

module.exports = router; // Se exporta este router
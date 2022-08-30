const express = require('express'); // Se requiere a Express
const morgan = require('morgan') // se requiere a Morgan

const app = express(); // Ejecutar Express y se guarda en una constante

app.use(morgan('dev')); // Para que se vea por consola todas las peticiones que van llegando

app.listen(3000); // Escuchar a Express en el puerto 3000
console.log("Servidor en el puerto 3000");
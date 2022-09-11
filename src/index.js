const express = require('express'); // Se requiere a Express
const morgan = require('morgan') // se requiere a Morgan

const taskRoutes = require('./routes/tasks.routes'); // Se importa el módulo taskRoutes 

const app = express(); // Ejecutar Express y se guarda en una constante

app.use(morgan('dev')); // Para que se vea por consola todas las peticiones que van llegando
app.use(express.json()); // Para que el servidor Express pueda entender el 'body' de las peticiones POST

app.use(taskRoutes); // Se hace uso de taskRoutes

// Manejo de errores
app.use((err, req, res, next) =>{ // El 'next' hace que pase a la siguiente función, en este caso a 'err'
    return res.json({
        message: 'Error!!!'
    })
})

app.listen(3000); // Escuchar a Express en el puerto 3000
console.log("Servidor en el puerto 3000");
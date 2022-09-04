const {Pool} = require('pg'); // Requiero al módulo 'pg' para la conexión a PostgreSQL

new Pool({
    user: 'postgres',
    password: 'contrasena',
    host: 'localhost',
    port: 5432
})
// Se requiere así
//require('dotenv').config();
// o así
//const {config} = require('dotenv');
//config();


const {Pool} = require('pg'); // Requiero al módulo 'pg' para la conexión a PostgreSQL

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'tasksdb'
});

module.exports = pool;
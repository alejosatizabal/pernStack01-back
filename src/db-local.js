// Se requiere así
//require('dotenv').config();
// o así
// const {config} = require('dotenv');
// config();

const { Pool } = require('pg'); // Requiero al módulo 'pg' para la conexión a PostgreSQL

// console.log(process.env.HELLO)

//require('./config');
const { db } = require('./config');

/* const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'tasksdb'
}); */
const pool = new Pool({
    user: db.user,
    password: db.password,
    host: db.localhost,
    port: db.port,
    database: db.database
});

module.exports = pool;
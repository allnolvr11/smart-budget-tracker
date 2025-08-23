const { Pool } = require('pg');
require('dotenv').config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool ({
    host: PGHOST, 
    database: PGDATABASE, 
    user: PGUSER,
    password: PGPASSWORD,
    ssl: {
        rejectUnauthorized: false
    }
});

pool.connect ((err, client, release) => {
    if (err) {
        return console.error('Error Connecting in Database', err.stack)
    }
    console.log('Connected to PostgreSQL!');

    release();
});

module.exports = pool;
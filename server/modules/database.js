const pg = require('pg');

const Pool = pg.Pool;
const pool = new Pool({
    database: 'listings',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', () => {
    console.log('postgresql connected');
});

pool.on('error', (error) => {
    console.log(`error with postgres pool: ${error}`);
});

module.exports = pool;
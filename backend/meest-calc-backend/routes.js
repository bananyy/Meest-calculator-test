const express = require('express')
const router = express.Router()
const pool = require('./db_connection');

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    pool.getConnection((err, connection) => {
        connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
            console.log('The solution is: ', rows[0].solution);
            connection.release();

            res.send('1 page');
        });
    });

})

router.get('/2', (req, res) => {
    res.send('2 page')
})

module.exports = router

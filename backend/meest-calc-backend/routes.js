const express = require('express')
const router = express.Router()
const pool = require('./db_connection');
const ShoeSizes = require('./Sequalize')
// const { Sequelize, DataTypes } = require('sequelize');



router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

// router.get('/', (req, res) => {
    // pool.getConnection((err, connection) => {
    //     connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    //         console.log('The solution is: ', rows[0].solution);
    //         connection.release();

    //         res.send('1 page');
    //     });
    // });

// })

router.get('/2', (req, res) => {
    res.send('2 page')
})


router.get('/shoe/:brand', async (req, res) => {
    const brand = req.params.brand;
    try {
        const shoeSizes = await ShoeSizes.findAll({
            where: {
                Brand: brand
            }
        });
        res.json(shoeSizes);
    } catch (error) {
        console.error('Error getting shoe sizes by brand: ', error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router

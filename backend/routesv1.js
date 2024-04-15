const express = require('express')
const router = express.Router()
const pool = require('./db_connection');
const { Brand, ClothingType, BodyParameter, clothingTypeDetails, ClothingBodyRequirement, SizeMatching, Measurement } = require('./models');

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/all-brands', async (req, res) => {
    try {
        const brands = await Brand.findAll();
        res.json(brands);
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).send('Internal Server Error');
    }
});


router.get('/body-parameters', async (req, res) => {
  const transformData = (data) => {
    return data.reduce((acc, { gender, clothingType, bodyParameters }) => {
        if (!acc[gender]) {
            acc[gender] = {};
        }


        if (!acc[gender][clothingType]) {
            acc[gender][clothingType] = [];
        }


        acc[gender][clothingType].push(bodyParameters);

       return acc;
    }, {});
}; 

  try {
    const query = `
      SELECT
        ct.gender_category AS gender,
        ct.name AS clothingType,
        bp.name AS bodyParameters
      FROM
        clothing_types ct
      JOIN clothing_body_requirements cbr ON
        ct.type_id = cbr.clothing_type_id
      JOIN body_parameters bp ON
        cbr.parameter_id = bp.parameter_id
    `;

    const [results, metadata] = await pool.query(query);
    const transformedData = transformData(results);
    res.json(transformedData);
  } catch (err) {
    console.error('Query failed: ', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// res.json(clothingTypeDetails);

module.exports = router

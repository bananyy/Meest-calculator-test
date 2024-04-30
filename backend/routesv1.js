const express = require('express')
const router = express.Router()
const pool = require('./db_connection');
// const { Brand, ClothingType, BodyParameter, clothingTypeDetails, ClothingBodyRequirement, SizeMatching, Measurement } = require('./models');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./db_connection');

var initModels = require("./models/init-models");
var models = initModels(sequelize);

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/all-brands', async (req, res) => {
  try {
    const brands = await models.brands.findAll();
    res.json(brands);
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/time', async (req, res) => {
  try {
    res.json(Date.now());
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).send('Internal Server Error');
  }
});


router.get('/parameters/gender/:gender/brand/:brandname/type/:typeofclothing', async (req, res) => {
  const { gender, brandname, typeofclothing } = req.params;
  console.log(brandname)
  const transformData = (data) => {

    const result = {};

    data.forEach(({ type_id, gender, gender_name, clothingType, type_name, bodyParameters, part_name, brand, brand_id, brand_name }) => {

      if (!result[gender]) {
        result[gender] = {
          gender: gender,
          gender_name: gender_name,
          brands_data: []
        };
      }

      let brandData = result[gender].brands_data.find(b => b.brand === brand);
      if (!brandData) {
        brandData = {
          brand: brand,
          brand_name: brand_name,
          clothing_types: []
        };
        result[gender].brands_data.push(brandData);
      }

      let clothingTypeData = brandData.clothing_types.find(c => c.type === clothingType);
      if (!clothingTypeData) {
        clothingTypeData = {
          type: type_id,
          type_name: clothingType,
          body_parts: []
        };
        brandData.clothing_types.push(clothingTypeData);
      }

      clothingTypeData.body_parts.push({
        part: bodyParameters,
        part_name: part_name
      });
    });

    return Object.values(result);
  };


  try {
    const query = `
          SELECT
          g.gender_category AS gender,
          g.gender_name AS gender_name,
          ct.name AS clothingType,
          ct.type_name AS type_name,
          ct.type_id AS type_id,
          bp.name AS bodyParameters,
          bp.part_name AS part_name,
          b.brand_id AS brand,
          b.name AS brand_name
          FROM
            clothing_types ct
          JOIN clothing_body_requirements cbr ON ct.type_id = cbr.clothing_type_id
          JOIN body_parameters bp ON cbr.parameter_id = bp.parameter_id
          JOIN size_matching sm ON sm.type_id = ct.type_id
          JOIN brands b ON sm.brand_id = b.brand_id
          JOIN genders g ON ct.gender_id = g.gender_id
          WHERE
          g.gender_category = "${gender}" AND b.name = "${brandname}" AND ct.name = "${typeofclothing}"
    `;

    const [results, metadata] = await pool.query(query);
    const transformedData = transformData(results);
    res.json(transformedData);
  } catch (err) {
    console.error('Query failed: ', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});



router.get('/all-parameters', async (req, res) => {
  const transformData = (data) => {

    const result = {};

    data.forEach(({ type_id, gender, gender_name, clothingType, type_name, bodyParameters, part_name, brand, brand_id, brand_name }) => {

      if (!result[gender]) {
        result[gender] = {
          gender: gender,
          gender_name: gender_name,
          brands_data: []
        };
      }

      let brandData = result[gender].brands_data.find(b => b.brand === brand);
      if (!brandData) {
        brandData = {
          brand: brand,
          brand_name: brand_name,
          clothing_types: []
        };
        result[gender].brands_data.push(brandData);
      }

      let clothingTypeData = brandData.clothing_types.find(c => c.type === type_id);
      if (!clothingTypeData) {
          clothingTypeData = {
              type: type_id,
              type_name: type_name || clothingType, // Prefer `type_name` if available
              body_parts: []
          };
          brandData.clothing_types.push(clothingTypeData);
      }

      // Add body part entry
      clothingTypeData.body_parts.push({
          part: bodyParameters,
          part_name: part_name
      });
      // let clothingTypeData = brandData.clothing_types.find(c => c.type === clothingType);
      // if (!clothingTypeData) {
      //   clothingTypeData = {
      //     type: type_id,
      //     type_name: clothingType,
      //     body_parts: []
      //   };
      //   brandData.clothing_types.push(clothingTypeData);
      // }

      // clothingTypeData.body_parts.push({
      //   part: bodyParameters,
      //   part_name: part_name
      // });
    });

    return Object.values(result);
  };


  try {
    const query = `
          SELECT
          g.gender_category AS gender,
          g.gender_name AS gender_name,
          ct.name AS clothingType,
          ct.type_name AS type_name,
          ct.type_id AS type_id,
          bp.name AS bodyParameters,
          bp.part_name AS part_name,
          b.brand_id AS brand,
          b.name AS brand_name
          FROM
            clothing_types ct
          JOIN clothing_body_requirements cbr ON ct.type_id = cbr.clothing_type_id
          JOIN body_parameters bp ON cbr.parameter_id = bp.parameter_id
          JOIN size_matching sm ON sm.type_id = ct.type_id
          JOIN brands b ON sm.brand_id = b.brand_id
          JOIN genders g ON ct.gender_id = g.gender_id;
    `;

    const [results, metadata] = await pool.query(query);
    const transformedData = transformData(results);
    res.json(transformedData);
  } catch (err) {
    console.error('Query failed: ', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router

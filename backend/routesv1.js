const express = require('express')
const router = express.Router()
const pool = require('./db_connection');

const sequelize = require('./db_connection');
var initModels = require("./models/init-models");
var models = initModels(sequelize);

const cors = require('cors');
router.use(cors());

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));



router.get('/all-brands', async (req, res) => {
  try {
    const brands = await models.brands.findAll();
    const transformedBrands = brands.map(brand => ({
      id: brand.brand_id,
      key: brand.brand_key,
      brand_name: brand.brand_name,
      img_url: brand.brand_img_url
    }));
      res.json(transformedBrands);
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/brands', async (req, res) => {
  const { gender } = req.body;
  try {

    const genderInfo = await models.genders.findOne({
      where: { gender_name: gender }
    });

    if (!genderInfo) {
      return res.status(400).json({ error: 'Invalid gender' });
    }


    const brandsData = await models.clothesData.findAll({
      where: { gender_id: genderInfo.gender_id },
      attributes: ['brand_id'],
      group: ['brand_id']
    });

    const brandIds = brandsData.map(item => item.brand_id);


    const brandsInfo = await models.brands.findAll({
      where: { brand_id: brandIds },
      attributes: ['brand_id', 'brand_key', 'brand_name']
    });

    res.json(brandsInfo);
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).send('Internal Server Error');
  }
});


router.post('/clothes', async (req, res) => {
  const { gender, brand } = req.body;

  try { 

      const genderInfo = await models.genders.findOne({
      where: { gender_key: gender }
    });

    if (!genderInfo) {
      return res.status(400).json({ error: 'Invalid gender key' });
    }

    const brandInfo = await models.brands.findOne({
      where: { brand_key: brand }
    });

    if (!brandInfo) {
      return res.status(400).json({ error: 'Invalid brand key' });
    }

    const clothesData = await models.clothesData.findAll({
      where: { gender_id: genderInfo.gender_id, brand_id: brandInfo.brand_id },
      attributes: ['uniq_cloth_id', 'cloth_id']
    });
    
    const clothesResponse = [];
    for (const cloth of clothesData) {
      const conversion = await models.conversions.findOne({
        where: { uniq_cloth_id: cloth.uniq_cloth_id }
      });
    
      const bodyParts = [];
      const bodyParameters = ['height', 'head_length', 'chest_length', 'waist_length', 'hip_length', 'foot_length', 'pants_length'];
      for (const parameter of bodyParameters) {
        if (conversion && conversion[parameter] !== null) {
          bodyParts.push(parameter);
        }
      }
    
      const clothDefinition = await models.clothesDefinition.findOne({
        where: { cloth_id: cloth.cloth_id }
      });

      if (clothDefinition) {
        clothesResponse.push({
          cloth_key: clothDefinition.cloth_key,
          cloth_name: clothDefinition.cloth_name,
          cloth_name_UA: clothDefinition.cloth_name_UA,
          body_parts: bodyParts
        });
      }
    }

    res.json(clothesResponse);
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router

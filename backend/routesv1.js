const express = require('express');
require('express-async-errors');
const router = express.Router();
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/error_handler');
const allBrandsHandler = require('./handlers/all_brands');
const brandsHandler = require('./handlers/brands');
const clothesHandler = require('./handlers/clothes');

const cors = require('cors');
router.use(cors());

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/all-brands', allBrandsHandler);
router.get('/brands', brandsHandler);
router.get('/clothes', clothesHandler);

router.use(errorHandler);

module.exports = router;

const sequelize = require('../db_connection');
var initModels = require("../models/init-models");
var models = initModels(sequelize);

module.exports = async (req, res) => {
    const brands = await models.brands.findAll();
    const transformedBrands = brands.map(brand => ({
        id: brand.id,
        key: brand.key,
        name: brand.name,
        img_url: brand.img_url 
    }));
    res.json(transformedBrands);
}
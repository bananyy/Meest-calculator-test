var DataTypes = require("sequelize").DataTypes;
var Brands = require("./Brands");
var ClothesData = require("./ClothesData");
var ClothesDefinition = require("./ClothesDefinition");
var Conversions = require("./Conversions");
var Genders = require("./Genders");
var SizeCountries = require("./SizeCountries");

function initModels(sequelize) {
  var brands = Brands(sequelize);
  var clothesData = ClothesData(sequelize);
  var clothesDefinition = ClothesDefinition(sequelize);
  var conversions = Conversions(sequelize);
  var genders = Genders(sequelize);
  var sizeCountries = SizeCountries(sequelize);


  return {
    brands,
    clothesData,
    clothesDefinition,
    conversions,
    genders,
    sizeCountries,
  };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

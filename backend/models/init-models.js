const sequelize = require('./../db_connection');

const Brands = require("./Brands");
const ClothesData = require("./ClothesData");
const Clothes = require("./Clothes");
const Conversions = require("./Conversions");
const Genders = require("./Genders");
const SizeTypes = require("./SizeTypes");

function initModels(sequelize) {
  const brands = Brands(sequelize);
  const clothesData = ClothesData(sequelize);
  const clothes = Clothes(sequelize);
  const conversions = Conversions(sequelize);
  const genders = Genders(sequelize);
  const sizeTypes = SizeTypes(sequelize);

  return {
    brands,
    clothesData,
    clothes,
    conversions,
    genders,
    sizeTypes,
  };
}

const models = initModels(sequelize);

module.exports = models;

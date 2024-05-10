var DataTypes = require("sequelize").DataTypes;
var _brands = require("./brands");
var _clothes = require("./clothes");
var _clothes_data = require("./clothes_data");
var _conversions = require("./conversions");
var _genders = require("./genders");
var _size_types = require("./size_types");

function initModels(sequelize) {
  var brands = _brands(sequelize, DataTypes);
  var clothes = _clothes(sequelize, DataTypes);
  var clothes_data = _clothes_data(sequelize, DataTypes);
  var conversions = _conversions(sequelize, DataTypes);
  var genders = _genders(sequelize, DataTypes);
  var size_types = _size_types(sequelize, DataTypes);

  clothes_data.belongsTo(brands, { as: "brand", foreignKey: "brand_id"});
  brands.hasMany(clothes_data, { as: "clothes_data", foreignKey: "brand_id"});
  clothes_data.belongsTo(clothes, { as: "cloth", foreignKey: "cloth_id"});
  clothes.hasMany(clothes_data, { as: "clothes_data", foreignKey: "cloth_id"});
  conversions.belongsTo(clothes_data, { as: "uniq_cloth", foreignKey: "uniq_cloth_id"});
  clothes_data.hasMany(conversions, { as: "conversions", foreignKey: "uniq_cloth_id"});
  clothes_data.belongsTo(genders, { as: "gender", foreignKey: "gender_id"});
  genders.hasMany(clothes_data, { as: "clothes_data", foreignKey: "gender_id"});
  conversions.belongsTo(size_types, { as: "size_type", foreignKey: "size_type_id"});
  size_types.hasMany(conversions, { as: "conversions", foreignKey: "size_type_id"});

  return {
    brands,
    clothes,
    clothes_data,
    conversions,
    genders,
    size_types,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

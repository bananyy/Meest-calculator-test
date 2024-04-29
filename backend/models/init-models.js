var DataTypes = require("sequelize").DataTypes;
var _body_parameters = require("./body_parameters");
var _brands = require("./brands");
var _clothing_body_requirements = require("./clothing_body_requirements");
var _clothing_types = require("./clothing_types");
var _genders = require("./genders");
var _measurements = require("./measurements");
var _size_conversions = require("./size_conversions");
var _size_matching = require("./size_matching");
var _sizes = require("./sizes");
var _users = require("./users");

function initModels(sequelize) {
  var body_parameters = _body_parameters(sequelize, DataTypes);
  var brands = _brands(sequelize, DataTypes);
  var clothing_body_requirements = _clothing_body_requirements(sequelize, DataTypes);
  var clothing_types = _clothing_types(sequelize, DataTypes);
  var genders = _genders(sequelize, DataTypes);
  var measurements = _measurements(sequelize, DataTypes);
  var size_conversions = _size_conversions(sequelize, DataTypes);
  var size_matching = _size_matching(sequelize, DataTypes);
  var sizes = _sizes(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  clothing_body_requirements.belongsTo(body_parameters, { as: "parameter", foreignKey: "parameter_id"});
  body_parameters.hasMany(clothing_body_requirements, { as: "clothing_body_requirements", foreignKey: "parameter_id"});
  size_matching.belongsTo(brands, { as: "brand", foreignKey: "brand_id"});
  brands.hasMany(size_matching, { as: "size_matchings", foreignKey: "brand_id"});
  clothing_body_requirements.belongsTo(clothing_types, { as: "clothing_type", foreignKey: "clothing_type_id"});
  clothing_types.hasMany(clothing_body_requirements, { as: "clothing_body_requirements", foreignKey: "clothing_type_id"});
  size_matching.belongsTo(clothing_types, { as: "type", foreignKey: "type_id"});
  clothing_types.hasMany(size_matching, { as: "size_matchings", foreignKey: "type_id"});
  clothing_types.belongsTo(genders, { as: "gender", foreignKey: "gender_id"});
  genders.hasMany(clothing_types, { as: "clothing_types", foreignKey: "gender_id"});
  size_matching.belongsTo(measurements, { as: "measurement", foreignKey: "measurement_id"});
  measurements.hasMany(size_matching, { as: "size_matchings", foreignKey: "measurement_id"});
  size_conversions.belongsTo(sizes, { as: "size", foreignKey: "size_id"});
  sizes.hasMany(size_conversions, { as: "size_conversions", foreignKey: "size_id"});
  size_matching.belongsTo(sizes, { as: "size", foreignKey: "size_id"});
  sizes.hasMany(size_matching, { as: "size_matchings", foreignKey: "size_id"});

  return {
    body_parameters,
    brands,
    clothing_body_requirements,
    clothing_types,
    genders,
    measurements,
    size_conversions,
    size_matching,
    sizes,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

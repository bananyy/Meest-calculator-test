const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const Brand = sequelize.define('Brand', {
    brand_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    brand_key: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    brand_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    brand_img_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'brands',
    timestamps: false
  });

  return Brand;
};

const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const Brand = sequelize.define('Brand', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    key: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    img_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'brands',
    timestamps: false
  });

  return Brand;
};

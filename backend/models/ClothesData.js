const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const ClothesData = sequelize.define('ClothesData', {
    uniq_cloth_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cloth_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'clothes_data',
    timestamps: false
  });

  return ClothesData;
};
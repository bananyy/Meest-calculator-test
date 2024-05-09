const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const ClothesDefinition = sequelize.define('ClothesDefinition', {
    cloth_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cloth_key: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cloth_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cloth_name_UA: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'clothes_definition',
    timestamps: false
  });

  return ClothesDefinition;
};

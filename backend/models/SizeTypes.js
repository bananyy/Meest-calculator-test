const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const SizeTypes = sequelize.define('Sizetypes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    country_key: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true
    },
    country_name_UA: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true
    }
  }, {
    tableName: 'size_countries',
    timestamps: false
  });

  return SizeTypes;
};

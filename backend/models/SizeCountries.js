const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const SizeCountries = sequelize.define('SizeCountries', {
    size_country_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    country_key: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    country_name_UA: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'size_countries',
    timestamps: false
  });

  return SizeCountries;
};

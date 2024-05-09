const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const Genders = sequelize.define('Genders', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    key: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name_UA: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'genders',
    timestamps: false
  });

  return Genders;
};

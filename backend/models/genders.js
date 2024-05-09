const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const Genders = sequelize.define('Genders', {
    gender_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gender_key: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    gender_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    gender_name_UA: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'genders',
    timestamps: false
  });

  return Genders;
};

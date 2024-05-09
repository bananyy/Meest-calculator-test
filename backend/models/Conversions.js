const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const Conversions = sequelize.define('Conversions', {
    conversation_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uniq_cloth_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    head_length: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    chest_length: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    waist_length: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    hip_length: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    foot_length: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pants_length: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    size_country_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    size_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'conversions',
    timestamps: false
  });

  return Conversions;
};

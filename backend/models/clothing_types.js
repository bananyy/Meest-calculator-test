const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clothing_types', {
    type_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gender_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'genders',
        key: 'gender_id'
      }
    }
  }, {
    sequelize,
    tableName: 'clothing_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "type_id" },
        ]
      },
      {
        name: "gender_id",
        using: "BTREE",
        fields: [
          { name: "gender_id" },
        ]
      },
    ]
  });
};

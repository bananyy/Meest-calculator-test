const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clothing_body_requirements', {
    requirement_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clothing_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'clothing_types',
        key: 'type_id'
      }
    },
    parameter_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'body_parameters',
        key: 'parameter_id'
      }
    }
  }, {
    sequelize,
    tableName: 'clothing_body_requirements',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "requirement_id" },
        ]
      },
      {
        name: "clothing_type_id",
        using: "BTREE",
        fields: [
          { name: "clothing_type_id" },
        ]
      },
      {
        name: "parameter_id",
        using: "BTREE",
        fields: [
          { name: "parameter_id" },
        ]
      },
    ]
  });
};

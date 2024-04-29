const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('size_matching', {
    match_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'brands',
        key: 'brand_id'
      }
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'clothing_types',
        key: 'type_id'
      }
    },
    size_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sizes',
        key: 'size_id'
      }
    },
    measurement_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'measurements',
        key: 'measurement_id'
      }
    },
    min_value: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    max_value: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'size_matching',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "match_id" },
        ]
      },
      {
        name: "brand_id",
        using: "BTREE",
        fields: [
          { name: "brand_id" },
        ]
      },
      {
        name: "type_id",
        using: "BTREE",
        fields: [
          { name: "type_id" },
        ]
      },
      {
        name: "size_id",
        using: "BTREE",
        fields: [
          { name: "size_id" },
        ]
      },
      {
        name: "measurement_id",
        using: "BTREE",
        fields: [
          { name: "measurement_id" },
        ]
      },
    ]
  });
};

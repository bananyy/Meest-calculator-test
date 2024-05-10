const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('conversions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uniq_cloth_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'clothes_data',
        key: 'uniq_cloth_id'
      }
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
    size_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'size_types',
        key: 'id'
      }
    },
    size_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'conversions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "conversions_size_types_id_fk",
        using: "BTREE",
        fields: [
          { name: "size_type_id" },
        ]
      },
      {
        name: "conversions_clothes_data_uniq_cloth_id_fk",
        using: "BTREE",
        fields: [
          { name: "uniq_cloth_id" },
        ]
      },
    ]
  });
};

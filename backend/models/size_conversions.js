const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('size_conversions', {
    conversion_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    size_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sizes',
        key: 'size_id'
      }
    },
    size_system: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    size_value: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'size_conversions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "conversion_id" },
        ]
      },
      {
        name: "size_id",
        using: "BTREE",
        fields: [
          { name: "size_id" },
        ]
      },
    ]
  });
};

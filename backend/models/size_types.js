const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('size_types', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    country_key: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "country_key"
    },
    country_name_UA: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "country_name_UA"
    }
  }, {
    sequelize,
    tableName: 'size_types',
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
        name: "country_key",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "country_key" },
        ]
      },
      {
        name: "country_name_UA",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "country_name_UA" },
        ]
      },
    ]
  });
};

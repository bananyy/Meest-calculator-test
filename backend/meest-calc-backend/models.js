const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./db_connection');

// const ShoeSizes = sequelize.define('Shoe_Sizes', {
//     Gender: DataTypes.STRING,
//     Brand: DataTypes.STRING,
//     European_Size: DataTypes.INTEGER,
//     American_Size: DataTypes.INTEGER,
//     UK_Size: DataTypes.INTEGER,
//     Foot_Length: DataTypes.FLOAT
// }, {
//     timestamps: false
// });

const Brand = sequelize.define('Brand', {
    brand_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    }
  }, {
    // Don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
  
    // If your table name is different from the model name in plural
    // and not using the default behavior which Sequelize pluralizes table names
    // then you can explicitly define the table name via `tableName` attribute
    tableName: 'Brands'
  });


  const ClothingType = sequelize.define('ClothingType', {
    type_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    tableName: 'ClothingTypes'  // Adjust if your table name is different
});


const SizeMatching = sequelize.define('SizeMatching', {
  match_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  brand_id: {
      type: Sequelize.INTEGER,
      references: {
          model: 'Brands',
          key: 'brand_id'
      }
  },
  type_id: {
      type: Sequelize.INTEGER,
      references: {
          model: 'ClothingTypes',
          key: 'type_id'
      }
  }
  // Include other fields as necessary
}, {
  timestamps: false,
  tableName: 'SizeMatching'  // Adjust if your table name is different
});


Brand.hasMany(SizeMatching, { foreignKey: 'brand_id' });
SizeMatching.belongsTo(Brand, { foreignKey: 'brand_id' });

ClothingType.hasMany(SizeMatching, { foreignKey: 'type_id' });
SizeMatching.belongsTo(ClothingType, { foreignKey: 'type_id' });

  
module.exports = { Brand, ClothingType, SizeMatching };

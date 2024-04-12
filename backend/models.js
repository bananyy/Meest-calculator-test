  const { Sequelize, DataTypes } = require('sequelize');
  const sequelize = require('./db_connection');

//   // const Brand = sequelize.define('Brand', {
//   //     brand_id: {
//   //       type: Sequelize.INTEGER,
//   //       primaryKey: true,
//   //       autoIncrement: true
//   //     },
//   //     name: {
//   //       type: Sequelize.STRING
//   //     }
//   //   }, {
//   //     timestamps: false,
//   //     tableName: 'Brands'
//   //   });


//   //   const ClothingType = sequelize.define('ClothingType', {
//   //     type_id: {
//   //         type: Sequelize.INTEGER,
//   //         primaryKey: true,
//   //         autoIncrement: true
//   //     },
//   //     name: {
//   //         type: Sequelize.STRING
//   //     }
//   // }, {
//   //     timestamps: false,
//   //     tableName: 'ClothingTypes'
//   // });


//   // const SizeMatching = sequelize.define('SizeMatching', {
//   //   match_id: {
//   //       type: Sequelize.INTEGER,
//   //       primaryKey: true,
//   //       autoIncrement: true
//   //   },
//   //   brand_id: {
//   //       type: Sequelize.INTEGER,
//   //       references: {
//   //           model: 'Brands',
//   //           key: 'brand_id'
//   //       }
//   //   },
//   //   type_id: {
//   //       type: Sequelize.INTEGER,
//   //       references: {
//   //           model: 'ClothingTypes',
//   //           key: 'type_id'
//   //       }
//   //   }
//   // }, {
//   //   timestamps: false,
//   //   tableName: 'SizeMatching'
//   // });


//   // Brand.hasMany(SizeMatching, { foreignKey: 'brand_id' });
//   // SizeMatching.belongsTo(Brand, { foreignKey: 'brand_id' });

//   // ClothingType.hasMany(SizeMatching, { foreignKey: 'type_id' });
//   // SizeMatching.belongsTo(ClothingType, { foreignKey: 'type_id' });

    
//   // module.exports = { Brand, ClothingType, SizeMatching };

//   // Define the Brand model
//   class Brand extends Sequelize.Model {}
//   Brand.init({
//     brand_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   }, { sequelize, tableName: 'brands', timestamps: false });

//   // Define the Measurement model
//   class Measurement extends Sequelize.Model {}
//   Measurement.init({
//     measurement_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     unit: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   }, { sequelize, modelName: 'measurement', tableName: 'measurements', timestamps: false });

//   // Define the ClothingType model
//   class ClothingType extends Sequelize.Model {}
//   ClothingType.init({
//     type_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     gender_category: {
//       type: DataTypes.ENUM('Men', 'Women', 'Children'),
//       allowNull: false
//     }
//   }, { sequelize, tableName: 'clothing_types', timestamps: false });

//   // Define the Size model
//   class Size extends Sequelize.Model {}
//   Size.init({
//     size_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     size_label: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   }, { sequelize, tableName: 'sizes', timestamps: false });

//   // Define the SizeConversion model
//   class SizeConversion extends Sequelize.Model {}
//   SizeConversion.init({
//     conversion_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     size_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: Size,
//         key: 'size_id'
//       }
//     },
//     size_system: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     size_value: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   }, { sequelize, tableName: 'size_conversion', timestamps: false });

//   // Define the SizeMatching model
//   class SizeMatching extends Sequelize.Model {}
//   SizeMatching.init({
//     match_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     brand_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: Brand,
//         key: 'brand_id'
//       }
//     },
//     type_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: ClothingType,
//         key: 'type_id'
//       }
//     },
//     size_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: Size,
//         key: 'size_id'
//       }
//     },
//     measurement_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: Measurement,
//         key: 'measurement_id'
//       }
//     },
//     min_value: {
//       type: DataTypes.DECIMAL(10, 2),
//       allowNull: false
//     },
//     max_value: {
//       type: DataTypes.DECIMAL(10, 2),
//       allowNull: false
//     }
//   }, { sequelize, tableName: 'size_matching', timestamps: false });

//   // Define the User model
//   class User extends Sequelize.Model {}
//   User.init({
//     user_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true
//     },
//     password_hash: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     account_created: {
//       type: DataTypes.DATE,
//       allowNull: false
//     },
//     last_login: {
//       type: DataTypes.DATE
//     }
//   }, { sequelize, tableName: 'user', timestamps: false });

//   class BodyParameter extends Sequelize.Model {}
// BodyParameter.init({
//   parameter_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// }, { sequelize, tableName: 'body_parameters', timestamps: false });

// class ClothingBodyRequirement extends Sequelize.Model {}
// ClothingBodyRequirement.init({
//   clothing_type_id: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: 'clothing_types',
//       key: 'type_id'
//     }
//   },
//   parameter_id: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: 'body_parameters',
//       key: 'parameter_id'
//     }
//   }
// }, { sequelize, tableName: 'clothing_body_requirements', timestamps: false });


//   // Define relationships
//   Brand.hasMany(SizeMatching, { foreignKey: 'brand_id' });
//   SizeMatching.belongsTo(Brand, { foreignKey: 'brand_id' });

//   ClothingType.hasMany(SizeMatching, { foreignKey: 'type_id' });
//   SizeMatching.belongsTo(ClothingType, { foreignKey: 'type_id' });

//   Size.hasMany(SizeMatching, { foreignKey: 'size_id' });
//   SizeMatching.belongsTo(Size, { foreignKey: 'size_id' });
//   Size.hasMany(SizeConversion, { foreignKey: 'size_id' });
//   SizeConversion.belongsTo(Size, { foreignKey: 'size_id' });

//   Measurement.hasMany(SizeMatching, { foreignKey: 'measurement_id' });
//   SizeMatching.belongsTo(Measurement, { foreignKey: 'measurement_id' });


//   ClothingType.hasMany(ClothingBodyRequirement, { foreignKey: 'clothing_type_id' });
// ClothingBodyRequirement.belongsTo(ClothingType, { foreignKey: 'clothing_type_id' });

// BodyParameter.hasMany(ClothingBodyRequirement, { foreignKey: 'parameter_id' });
// ClothingBodyRequirement.belongsTo(BodyParameter, { foreignKey: 'parameter_id' });

// Measurement.hasMany(BodyParameter, { foreignKey: 'measurement_id' });
// BodyParameter.belongsTo(Measurement, { foreignKey: 'measurement_id' });

//   // Export the models for use in other parts of the application
//   module.exports = {
//     Brand,
//     Measurement,
//     ClothingType,
//     Size,
//     SizeConversion,
//     SizeMatching,
//     User,
//     BodyParameter,
//     ClothingBodyRequirement
//   };



class BodyParameter extends Sequelize.Model {}
BodyParameter.init({
  parameter_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, tableName: 'body_parameters', timestamps: false });

class Brand extends Sequelize.Model {}
Brand.init({
  brand_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, tableName: 'brands', timestamps: false });

class ClothingType extends Sequelize.Model {}
ClothingType.init({
  type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender_category: {
    type: DataTypes.ENUM('Men', 'Women', 'Children'),
    allowNull: false
  }
}, { sequelize, tableName: 'clothing_types', timestamps: false });

class Measurement extends Sequelize.Model {}
Measurement.init({
  measurement_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, tableName: 'measurements', timestamps: false });

class Size extends Sequelize.Model {}
Size.init({
  size_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  size_label: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, tableName: 'sizes', timestamps: false });

class SizeConversion extends Sequelize.Model {}
SizeConversion.init({
  conversion_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  size_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Size,
      key: 'size_id'
    }
  },
  size_system: {
    type: DataTypes.STRING,
    allowNull: false
  },
  size_value: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, tableName: 'size_conversions', timestamps: false });

class SizeMatching extends Sequelize.Model {}
SizeMatching.init({
  match_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  brand_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Brand,
      key: 'brand_id'
    }
  },
  type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ClothingType,
      key: 'type_id'
    }
  },
  size_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Size,
      key: 'size_id'
    }
  },
  measurement_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Measurement,
      key: 'measurement_id'
    }
  },
  min_value: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  max_value: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, { sequelize, tableName: 'size_matching', timestamps: false });

class User extends Sequelize.Model {}
User.init({
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false
  },
  account_created: {
    type: DataTypes.DATE,
    allowNull: false
  },
  last_login: {
    type: DataTypes.DATE
  }
}, { sequelize, tableName: 'users', timestamps: false });

class ClothingBodyRequirement extends Sequelize.Model {}
ClothingBodyRequirement.init({
  clothing_type_id: {
    type: DataTypes.INTEGER,
    references: {
      model: ClothingType,
      key: 'type_id'
    }
  },
  parameter_id: {
    type: DataTypes.INTEGER,
    references: {
      model: BodyParameter,
      key: 'parameter_id'
    }
  }
}, { sequelize, tableName: 'clothing_body_requirements', timestamps: false });

ClothingType.hasMany(ClothingBodyRequirement, { foreignKey: 'clothing_type_id' });
ClothingBodyRequirement.belongsTo(ClothingType, { foreignKey: 'clothing_type_id' });

BodyParameter.hasMany(ClothingBodyRequirement, { foreignKey: 'parameter_id', as: 'Requirements' });
ClothingBodyRequirement.belongsTo(BodyParameter, { foreignKey: 'parameter_id', as: 'ParameterDetails' });



Brand.hasMany(SizeMatching, { foreignKey: 'brand_id' });

SizeMatching.belongsTo(Brand, { foreignKey: 'brand_id' });

ClothingType.hasMany(SizeMatching, { foreignKey: 'type_id' });

SizeMatching.belongsTo(ClothingType, { foreignKey: 'type_id' });

Size.hasMany(SizeMatching, { foreignKey: 'size_id' });

SizeMatching.belongsTo(Size, { foreignKey: 'size_id' });

Size.hasMany(SizeConversion, { foreignKey: 'size_id' });

SizeConversion.belongsTo(Size, { foreignKey: 'size_id' });

Measurement.hasMany(SizeMatching, { foreignKey: 'measurement_id' });

SizeMatching.belongsTo(Measurement, { foreignKey: 'measurement_id' });

ClothingType.hasMany(ClothingBodyRequirement, { foreignKey: 'clothing_type_id' });

ClothingBodyRequirement.belongsTo(ClothingType, { foreignKey: 'clothing_type_id' });

BodyParameter.hasMany(ClothingBodyRequirement, { foreignKey: 'parameter_id' });

ClothingBodyRequirement.belongsTo(BodyParameter, { foreignKey: 'parameter_id' });

ClothingBodyRequirement.belongsTo(BodyParameter, { foreignKey: 'parameter_id' });

SizeMatching.belongsTo(ClothingBodyRequirement, { foreignKey: 'clothing_type_id' });

module.exports = {
  Brand,
  Measurement,
  ClothingType,
  Size,
  SizeConversion,
  SizeMatching,
  User,
  BodyParameter,
  ClothingBodyRequirement
};

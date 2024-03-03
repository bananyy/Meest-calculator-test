const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./db_connection');

const ShoeSizes = sequelize.define('Shoe_Sizes', {
    Gender: DataTypes.STRING,
    Brand: DataTypes.STRING,
    European_Size: DataTypes.INTEGER,
    American_Size: DataTypes.INTEGER,
    UK_Size: DataTypes.INTEGER,
    Foot_Length: DataTypes.FLOAT
}, {
    timestamps: false
});

module.exports = ShoeSizes;
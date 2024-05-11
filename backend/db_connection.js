const config = require("./config");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DEVELOPMENT_DATABASE_NAME,
  process.env.DEVELOPMENT_DATABASE_USER,
  process.env.DEVELOPMENT_DATABASE_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.DEVELOPMENT_DATABASE_HOST,
    port: process.env.DEVELOPMENT_DATABASE_PORT,
    waitForConnections:
      process.env.DEVELOPMENT_DATABASE_WAITFORCONNECTIONS === "true", // Перетворення рядка в логічне значення
    connectionLimit: parseInt(process.env.DEVELOPMENT_DATABASE_CONNECTIONLIMIT),
    queueLimit: parseInt(process.env.DEVELOPMENT_DATABASE_QUEUELIMIT),
  }
);

module.exports = sequelize;

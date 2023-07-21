const { Sequelize } = require("sequelize");
require("dotenv").config();

// Connection parameters
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres", // Replace "YOUR_DATABASE_DIALECT" with your database's actual dialect (e.g., "mysql", "postgres", "sqlite", etc.)
    host: process.env.DATABASE_HOST, // Add host if required
    port: process.env.DATABASE_PORT, // Add port if required
  }
);

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sq: sequelize, testDbConnection };

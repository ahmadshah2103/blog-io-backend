const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "12345678",
  database: process.env.DB_NAME || "blog",
  dialect: "postgres",
};

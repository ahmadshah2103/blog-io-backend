const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: "7d",
};

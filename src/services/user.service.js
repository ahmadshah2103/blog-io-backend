const { User} = require("../models");

const getUserByUsername = async (username) => {
  const user = await User.findOne({where: { username }});
  return user;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({where: { email }});
  return user;
};

module.exports = {getUserByUsername, getUserByEmail};

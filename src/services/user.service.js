const { UserExistsError } = require("../errors/error-classes");
const { User } = require("../models");

const getUserByEmail = async (email) => {
  const user = await User.scope("withPassword").findOne({ where: { email } });
  return user;
};

const createUser = async (userData) => {
  const existingUser = await User.findOne({ where: { email: userData.email } });

  if (existingUser) throw new UserExistsError();

  const user = await User.create(userData);
  return user;
};

module.exports = { getUserByEmail, createUser };

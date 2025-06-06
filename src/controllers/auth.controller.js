const { ValidationError, NotFoundError, UnauthorizedError } = require("../errors/error-classes");
const { loginSchema } = require("../schemas/auth.schema");
const userService = require("../services/user.service");
const { generateToken } = require("../utils/jwt.util");
const { comparePassword } = require("../utils/password.util");

const login = async (req, res, next) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) {
      throw new ValidationError(error.message);
    }
    const { username, password } = req.body;
    const user =
      await userService.getUserByUsername(username);
    if (!user) {
      throw new NotFoundError("User");
    }

    const isPasswordValid = await comparePassword(
      password,
      user.password
    );
    if (!isPasswordValid) {
      throw new UnauthorizedError("Invalid password");
    }

    user.password = undefined;
    const userDetails = user.toJSON();

    res.status(200).json({
      user: {userDetails},
      token: generateToken(user),
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { login };

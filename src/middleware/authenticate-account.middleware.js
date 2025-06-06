const { UnauthorizedError } = require("../errors/error-classes");
const { verifyToken } = require("../utils/jwt.util");

const authenticateUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new UnauthorizedError("No token provided");
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
      throw new UnauthorizedError("Invalid token format");
    }

    const decodedToken = verifyToken(token);

    // const account = await instituteAccountService.(
    //   decodedToken.username
    // );
    // if (!account) {
    //   throw new UnauthorizedError("Account not found");
    // }

    // req.account = account;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authenticateUser,
};

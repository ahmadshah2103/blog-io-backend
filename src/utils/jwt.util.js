const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpiresIn } = require("../config/jwt.config");
const { UnauthorizedError } = require("../errors/error-classes");

const makePayload = (user) => {
  return {
    user_id: user.user_id,
    username: user.username,
    email_address: user.email_address,
    created_at: user.created_at,
    updated_at: user.updated_at,
    deleted_at: user.deleted_at,
  };
};

const generateToken = (user) => {
  const payload = makePayload(user);
  return jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiresIn });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, jwtSecret);
  } catch {
    throw new UnauthorizedError("Invalid or expired token!");
  }
};

module.exports = { generateToken, verifyToken };

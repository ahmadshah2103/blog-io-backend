const Joi = require("joi");

const userIdSchema = Joi.object({
  user_id: Joi.number().integer().positive().required(),
});

const updateUserSchema = Joi.object({
  name: Joi.string().min(3).max(100).optional(),
  email: Joi.string().email().optional(),
  bio: Joi.string().optional(),
  avatar_url: Joi.string().uri().optional(),
}).min(1);

module.exports = {
  userIdSchema,
  updateUserSchema,
};

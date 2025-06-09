const Joi = require("joi");

const postIdSchema = Joi.object({
  post_id: Joi.string().uuid().required(),
});

const createPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

const updatePostSchema = Joi.object({
  title: Joi.string().optional(),
  content: Joi.string().optional(),
}).min(1);

module.exports = {
  postIdSchema,
  createPostSchema,
  updatePostSchema,
};

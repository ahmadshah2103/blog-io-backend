const Joi = require("joi");

const postIdSchema = Joi.object({
  post_id: Joi.string().uuid().required(),
});

module.exports = {
  postIdSchema,
};

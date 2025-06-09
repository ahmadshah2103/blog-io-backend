const { NotFoundError } = require("../errors/error-classes");
const { Comment } = require("../models");

const create = async (commentData) => {
  const comment = await Comment.create(commentData);
  return comment;
};

const getAll = async ({ limit, offset }) => {
  return await Comment.findAndCountAll({
    limit,
    offset,
    order: [["created_at", "DESC"]],
  });
};

const update = async (id, commentData) => {
  const comment = await Comment.findByPk(id);
  if (!comment) throw new NotFoundError("Comment");

  await comment.update(commentData);
  return comment;
};

const remove = async (id) => {
  const comment = await Comment.findByPk(id);
  if (!comment) throw new NotFoundError("Comment");

  await comment.destroy();
  return comment;
};

module.exports = {
  create,
  getAll,
  update,
  remove,
};

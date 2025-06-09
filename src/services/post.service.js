const { NotFoundError } = require("../errors/error-classes");
const { Post } = require("../models");

const create = async (postData) => {
  const post = await Post.create(postData);
  return post;
};

const getAll = async ({ limit, offset }) => {
  return await Post.findAndCountAll({
    limit,
    offset,
    order: [["created_at", "DESC"]],
  });
};

const getById = async (id) => {
  const post = await Post.findByPk(id, {
    include: [
      {
        association: "author",
        attributes: ["user_id", "name", "email"],
      },
      {
        association: "comments",
        attributes: ["comment_id", "content", "created_at"],
        include: [
          {
            association: "author",
            attributes: ["user_id", "name", "email"],
          },
        ],
      },
    ],
  });

  if (!post) throw new NotFoundError("Post");
  return post;
};

const update = async (id, postData) => {
  const post = await Post.findByPk(id);
  if (!post) throw new NotFoundError("Post");

  await post.update(postData);
  return post;
};

const remove = async (id) => {
  const post = await Post.findByPk(id);
  if (!post) throw new NotFoundError("Post");

  await post.destroy();
  return post;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};

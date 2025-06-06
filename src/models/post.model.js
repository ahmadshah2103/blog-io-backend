module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      post_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id'
        },
        onDelete: 'CASCADE'
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "posts",
      createdAt: "created_at",
      updatedAt: "updated_at",
      paranoid: false,
    }
  );

  Post.associate = (models) => {
    Post.belongsTo(models.User, { foreignKey: 'user_id', as: 'author' });
    Post.hasMany(models.Like, { foreignKey: 'post_id', as: 'likes' });
    Post.hasMany(models.Comment, { foreignKey: 'post_id', as: 'comments' });
    Post.belongsToMany(models.Tag, {
      through: models.PostTag,
      foreignKey: 'post_id',
      otherKey: 'tag_id',
      as: 'tags'
    });
    Post.belongsToMany(models.Category, {
      through: models.PostCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
      as: 'categories'
    });
  };

  return Post;
};

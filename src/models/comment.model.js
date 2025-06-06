module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      comment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'posts',
          key: 'post_id'
        },
        onDelete: 'CASCADE'
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
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "comments",
      createdAt: "created_at",
      updatedAt: false,
      paranoid: false,
    }
  );

  Comment.associate = (models) => {
    Comment.belongsTo(models.Post, { foreignKey: 'post_id', as: 'post' });
    Comment.belongsTo(models.User, { foreignKey: 'user_id', as: 'author' });
  };

  return Comment;
};

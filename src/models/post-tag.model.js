module.exports = (sequelize, DataTypes) => {
  const PostTag = sequelize.define(
    "PostTag",
    {
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'posts',
          key: 'post_id'
        },
        onDelete: 'CASCADE'
      },
      tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'tags',
          key: 'tag_id'
        },
        onDelete: 'CASCADE'
      },
    },
    {
      tableName: "post_tags",
      timestamps: false,
      paranoid: false,
    }
  );

  return PostTag;
};

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    "PostCategory",
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
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'categories',
          key: 'category_id'
        },
        onDelete: 'CASCADE'
      },
    },
    {
      tableName: "post_categories",
      timestamps: false,
      paranoid: false,
    }
  );

  return PostCategory;
};

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      category_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: "categories",
      timestamps: false,
      paranoid: false,
    }
  );

  Category.associate = (models) => {
    Category.belongsToMany(models.Post, {
      through: models.PostCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
      as: 'posts'
    });
  };

  return Category;
};

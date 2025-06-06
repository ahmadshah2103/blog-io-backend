module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
    "Like",
    {
      like_id: {
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
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'posts',
          key: 'post_id'
        },
        onDelete: 'CASCADE'
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "likes",
      createdAt: "created_at",
      updatedAt: false,
      paranoid: false,
      indexes: [
        {
          unique: true,
          fields: ['user_id', 'post_id']
        }
      ]
    }
  );

  Like.associate = (models) => {
    Like.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    Like.belongsTo(models.Post, { foreignKey: 'post_id', as: 'post' });
  };

  return Like;
};

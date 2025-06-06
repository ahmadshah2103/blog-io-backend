module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define(
    "Follow",
    {
      follower_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'user_id'
        },
        onDelete: 'CASCADE'
      },
      followed_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'user_id'
        },
        onDelete: 'CASCADE'
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "follows",
      createdAt: "created_at",
      updatedAt: false,
      paranoid: false,
    }
  );

  Follow.associate = (models) => {
    Follow.belongsTo(models.User, { foreignKey: 'follower_id', as: 'follower' });
    Follow.belongsTo(models.User, { foreignKey: 'followed_id', as: 'followed' });
  };

  return Follow;
};

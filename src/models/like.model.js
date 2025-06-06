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
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      tableName: "likes",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      indexes: [
        {
          unique: true,
          fields: ["user_id", "post_id"],
        },
      ],
    }
  );

  Like.associate = (models) => {
    Like.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
      onDelete: "CASCADE",
    });
    Like.belongsTo(models.Post, {
      foreignKey: "post_id",
      as: "post",
      onDelete: "CASCADE",
    });
  };

  return Like;
};

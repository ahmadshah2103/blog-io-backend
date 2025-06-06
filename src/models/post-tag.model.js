module.exports = (sequelize, DataTypes) => {
  const PostTag = sequelize.define(
    "PostTag",
    {
      post_tag_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tag_id: {
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
      tableName: "post_tags",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      indexes: [
        {
          unique: true,
          fields: ["post_id", "tag_id"],
        },
        {
          fields: ["post_id"],
        },
        {
          fields: ["tag_id"],
        },
      ],
    }
  );

  return PostTag;
};

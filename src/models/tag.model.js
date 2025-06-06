module.exports = (sequelize, DataTypes) => {
	const Tag = sequelize.define(
		"Tag",
		{
			tag_id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING(50),
				allowNull: false,
				unique: true,
			},
		},
		{
			tableName: "tags",
			timestamps: false,
			paranoid: false,
		}
	);

	Tag.associate = (models) => {
		Tag.belongsToMany(models.Post, {
			through: models.PostTag,
			foreignKey: 'tag_id',
			otherKey: 'post_id',
			as: 'posts'
		});
	};

	return Tag;
};

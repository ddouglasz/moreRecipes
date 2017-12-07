module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('recipes', {
    title: DataTypes.STRING,
    ingredients: DataTypes.TEXT,
    details: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  Recipe.associate = (models) => {
    Recipe.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Recipe;
};

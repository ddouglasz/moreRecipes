'use strict';

module.exports = function (sequelize, DataTypes) {
  var favorites = sequelize.define('favorites', {
    flag: DataTypes.BOOLEAN
  });
  favorites.associate = function (models) {
    favorites.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    favorites.belongsTo(models.recipes, {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE'
    });
  };
  return favorites;
};
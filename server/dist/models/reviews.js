'use strict';

module.exports = function (sequelize, DataTypes) {
  var reviews = sequelize.define('reviews', {
    review: DataTypes.STRING
  });
  reviews.associate = function (models) {
    reviews.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    reviews.belongsTo(models.recipes, {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE'
    });
  };
  return reviews;
};
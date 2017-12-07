'use strict';

module.exports = function (sequelize, DataTypes) {
  var Recipe = sequelize.define('recipes', {
    title: DataTypes.STRING,
    // ingredients: DataTypes.TEXT,
    // details: DataTypes.TEXT,
    description: {
      type: DataTypes.STRING
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });
  Recipe.associate = function (models) {
    Recipe.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return Recipe;
};
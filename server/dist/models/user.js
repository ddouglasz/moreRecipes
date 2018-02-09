'use strict';

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    hashPassword: DataTypes.STRING
  });
  User.associate = function (models) {
    User.hasMany(models.recipes, {
      foreignKey: 'userId',
      as: 'recipes'
    });
  };
  return User;
};
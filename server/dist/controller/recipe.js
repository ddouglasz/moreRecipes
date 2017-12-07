'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RecipeModel = _index2.default.recipes;
var ReviewsModel = _index2.default.reviews;
var FavoritesModel = _index2.default.favorites;
/**
 * @class Recipe
 */

var Recipe = function () {
  function Recipe() {
    _classCallCheck(this, Recipe);
  }

  _createClass(Recipe, null, [{
    key: 'getRecipe',

    /**
     * @returns {Object} recipes
     * @param {req} req
     * @param {res} res
     */
    value: function getRecipe(req, res) {
      return RecipeModel.all().then(function (recipe) {
        return res.status(200).json({ status: 'success', data: recipe });
      }).catch(function (error) {
        console.log(error);
        return res.status(400).send(error);
      });
    }

    /**
     * @returns {Object} createRecipe
     * @param {req} req
     * @param {res} res
     */

  }, {
    key: 'createRecipes',
    value: function createRecipes(req, res) {
      RecipeModel.create({
        title: req.body.title,
        details: req.body.details,
        ingredients: req.body.ingredients,
        userId: req.decoded.id
      }).then(function (recipe) {
        return res.status(201).send(recipe);
      }).catch(function (error) {
        return res.status(400).send(error);
      });
    }

    /**
     * @returns {Object} updateRecipes
     * @param {req} req
     * @param {res} res
     */

  }, {
    key: 'updateRecipes',
    value: function updateRecipes(req, res) {
      RecipeModel.findOne({
        where: {
          id: req.params.recipeId
        }
      }).then(function (recipe) {
        if (!recipe) {
          return res.status(404).send({
            message: 'Recipe Not Found'
          });
        }

        if (req.decoded.id !== recipe.userId) {
          return res.status(403).send({
            message: 'You are not authorised to edit this recipe !'
          });
        }

        recipe.updateAttributes({
          title: req.body.title || recipe.title,
          ingredients: req.body.ingredients || recipe.ingredients,
          details: req.body.details || recipe.details
        }).then(function () {
          return res.status(200).send(recipe);
        }).catch(function (error) {
          return res.status(400).send(error);
        });
      }).catch(function (error) {
        return res.status(400).send(error);
      });
    }
    /**
     * @returns {Object} deleteRecipes
     * @param {req} req
     * @param {res} res
     */

  }, {
    key: 'deleteRecipes',
    value: function deleteRecipes(req, res) {
      RecipeModel.findOne({
        where: {
          id: req.params.recipeId
        }
      }).then(function (recipe) {
        if (!recipe) {
          return res.status(404).send({
            message: 'Recipe Not Found'
          });
        }
        if (req.decoded.id !== recipe.userId) {
          return res.status(403).send({
            message: 'You are not authorised to delete this recipe !'
          });
        }
        RecipeModel.destroy({
          where: {
            id: req.params.recipeId
          }
        }).then(function () {
          res.status(204).send('content deleted successfully');
        }).catch(function (error) {
          return res.status(400).send(error);
        });
      }).catch(function (error) {
        return res.status(400).send(error);
      });
    }
    /**
     * @returns {Object} retrieveRecipes
     * @param {req} req
     * @param {res} res
     */

  }, {
    key: 'retrieveRecipes',
    value: function retrieveRecipes(req, res) {
      RecipeModel.findOne({
        where: {
          id: req.params.recipeId
        }
      }).then(function (recipe) {
        if (!recipe) {
          return res.status(404).send({
            message: 'Recipe Not Found'
          });
        }
        return res.status(200).send(recipe);
      }).catch(function (error) {
        return res.status(400).send(error);
      });
    }

    /**
     * @returns {Object} postReview
     * @param {req} req
     * @param {res} res
     */

  }, {
    key: 'postReview',
    value: function postReview(req, res) {
      ReviewsModel.create({
        review: req.body.review,
        userId: req.decoded.id,
        recipeId: req.params.recipeId
      }).then(function () {
        res.status(201).send('Review added successfully');
      }).catch(function (error) {
        return res.status(400).send(error);
      });
    }

    /**
     * @returns {Object} favoriteRecipe
     * @param {req} req
     * @param {res} res
     */

  }, {
    key: 'favoriteRecipe',
    value: function favoriteRecipe(req, res) {
      FavoritesModel.create({
        flag: true,
        userId: req.decoded.id,
        recipeId: req.params.recipeId
      }).then(function () {
        res.status(201).send('Favorite added successfully');
      }).catch(function (error) {
        return res.status(400).send(error);
      });
    }
  }]);

  return Recipe;
}();

exports.default = Recipe;
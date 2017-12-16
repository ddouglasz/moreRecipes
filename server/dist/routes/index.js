'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recipe = require('../controller/recipe');

var _recipe2 = _interopRequireDefault(_recipe);

var _users = require('../controller/users');

var _users2 = _interopRequireDefault(_users);

var _auth = require('../middlewares/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  app.post('/api/v1/recipes/:recipeId/reviews', _auth2.default, _recipe2.default.postReview);
  app.post('/api/v1/recipes', _auth2.default, _recipe2.default.createRecipes);
  app.get('/api/v1/recipes', _recipe2.default.getRecipe);
  app.put('/api/v1/recipes/:recipeId', _auth2.default, _recipe2.default.updateRecipes);
  app.delete('/api/v1/recipes/:recipeId', _auth2.default, _recipe2.default.deleteRecipes);
  app.get('/api/v1/recipes/:recipeId', _recipe2.default.retrieveRecipes);
  app.get('/api/v1/users/:userId/recipes', _auth2.default, _users2.default.getFavorites);
  app.post('/api/v1/recipes/:recipeId/favorites', _auth2.default, _recipe2.default.favoriteRecipe);
  app.post('/api/v1/users/signup', _users2.default.signUp);
  app.post('/api/v1/users/signin', _users2.default.signIn);
};
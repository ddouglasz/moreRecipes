import Recipes from '../controller/recipe';
import recipes from '../model/recipe';
// var recipes = require ('../model/recipe');

// export default (app) => {
//   app.get('/api/v1/recipes', Recipes.getRecipe);
//   app.post('/api/v1/recipes', Recipes.createRecipes);
//   app.put('/api/v1/recipes/:recipeId', Recipes.updateRecipes);
//   app.delete('/api/v1/recipes/:recipeId', Recipes.removeRecipes);
//   app.get('/api/v1/recipes/:recipeId', Recipes.retrieveRecipes);
//   app.post('api/v1/recipes/:recipeId', Recipes.upVoteRecipes);
//   app.post('api/v1/recipes/:recipeId', Recipes.downVoteRecipes); 
//   app.post('/api/v1/recipes/:recipeId', Recipes.reviewRecipes);
// };


export default (app) => {
  app.get('/api/recipes', Recipes.getRecipe);
  app.post('/api/recipes', Recipes.createRecipes);
  app.put('/api/recipes/:recipeId', Recipes.updateRecipes);
  app.delete('/api/recipes/:recipeId', Recipes.removeRecipes);
  app.get('/api/recipes/:recipeId', Recipes.retrieveRecipes);
  // app.post('api/recipes/:recipeId', Recipes.upVoteRecipes);
  // app.post('api/recipes/:recipeId', Recipes.downVoteRecipes);
  // app.post('/api/recipes/:recipeId', Recipes.reviewRecipes);
};

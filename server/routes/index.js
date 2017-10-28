import Recipes from '../controller/recipe';
import recipes from '../model/recipe';

export default (app) => {
  app.get('/api/v1/recipes', Recipes.getRecipe);
  app.post('/api/v1/recipes', Recipes.createRecipes);
  app.put('/api/v1/recipes/:recipeId', Recipes.updateRecipes);
  app.delete('/api/v1/recipes/:recipeId', Recipes.removeRecipes);
  app.get('/api/v1/recipes/:recipeId', Recipes.retrieveRecipes);
  app.post('/api/v1/recipes/:recipeId', Recipes.reviewRecipes);
};

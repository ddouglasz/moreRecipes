import Recipes from '../controller/recipesController';
import recipes from '../model/dummyDb';

const recipes = MoreRecipes.recipesController;
// const recipeController = new Recipe();
// const reviewController = new Review();
const recipes=new Recipes();  

// const router = express.Router();
// router.post('/api/recipes', recipes.add)
// router.put('/api/recipes/:recipeId', recipes.update);   
// router.get('/api/recipes', recipes.getRecipe);
// router.put('/api/recipes/:recipeId', recipes.update);
// router.delete('/api/recipes/:recipeId', recipes.delete);
 
// export default router;


import Recipes from '../controller/recipeController';
import recipes from '../models/dummyDb';

export default (app) => {
  app.get('/api/recipes', Recipes.getRecipe);
  app.post('/api/recipes', Recipes.createRecipes);
  app.put('/api/recipes/:recipeId', Recipes.updateRecipes);
  app.delete('/api/recipes/:recipeId', Recipes.removeRecipes);
  app.get('/api/recipes/:recipeId', Recipes.retrieveRecipes);
  app.post('/api/recipes/:recipeId/reviews', (req, res) => {
    for (let i = 0; i < recipes.length; i += 1) {
      if (recipes[i].id === parseInt(req.params.recipeId, 10)) {
        console.log(recipes);
        recipes[i].reviews.push(req.body.reviews);
        return res.json({
          recipes,
          message: 'success',
          error: false
        });
      }
      return res.status(404).json({
        message: 'recipe not found',
        error: true
  app.
      });
    }
  });
};

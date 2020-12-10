import * as modelAPI from '../../../rest-api/model';
import * as modelVM from './viewModel';

const mapRecipeApiToVM = (recipe: modelAPI.Recipe): modelVM.RecipeVM => ({
    ...recipe,
})

export const mapRecipeListApiToVM = (recipes: modelAPI.Recipe[]): modelVM.RecipeVM[] => recipes.map(mapRecipeApiToVM);
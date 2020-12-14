import * as modelAPI from '../../../rest-api/model';
import * as modelVM from './viewModel';

export const mapRecipeApiToVM = (recipe: modelAPI.Recipe): modelVM.RecipeVM => ({
    ...recipe,
});

export const mapRecipeVMToApi = (recipe: modelVM.RecipeVM): modelAPI.Recipe => ({
    ...recipe,
});
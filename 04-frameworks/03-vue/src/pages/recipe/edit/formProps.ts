import { PropOptions } from 'vue';
import { RecipeError, RecipeVM } from './viewModel';

export interface FormProps {
    recipe: PropOptions<RecipeVM>;
    recipeError: PropOptions<RecipeError>;
    onUpdateRecipe: PropOptions<(field: string, value: string) => void>;
    onSave: PropOptions<() => void>;
    onAddIngredient: PropOptions<(ingredient: string) => void>;
    onRemoveIngredient: PropOptions<(ingredient: string) => void>;
};
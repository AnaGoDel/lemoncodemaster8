import { ValidationResult, createDefaultValidationResult } from "@lemoncode/fonk";

export interface RecipeVM {
    id: number;
    name: string;
    description: string;
    ingredients: string[];
};

export const createEmptyRecipe = (): RecipeVM => ({
    id: 0,
    name: "",
    description: "",
    ingredients: [],
});

export type ResultRecipeError = Record<keyof RecipeError, boolean | string>;

export interface RecipeError {
    name: ValidationResult;
    description: ValidationResult;
    ingredients: ValidationResult;
    ingredient: ValidationResult;
}

export const createEmptyRecipeError = (): RecipeError => ({
    name: createDefaultValidationResult(),
    description: createDefaultValidationResult(),
    ingredients: createDefaultValidationResult(),
    ingredient: createDefaultValidationResult(),
});



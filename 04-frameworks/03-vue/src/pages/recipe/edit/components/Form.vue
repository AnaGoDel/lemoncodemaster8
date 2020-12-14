<template>
  <v-form>
    <v-text-field
      filled
      label="Name"
      :value="recipe.name"
      :rules="[resultRecipeError.name]"
      @input="(name) => onUpdateRecipe('name', name)"
    />
    <v-text-field
      filled
      label="Ingredients"
      placeholder="Add ingredient"
      append-icon="add"
      v-model="ingredient"
      @click:append="onAddIngredient(ingredient)"
    />

    <snackbar-component
      v-if="!recipeError.ingredient.succeeded"
      :show-snackbar="!recipeError.ingredient.succeeded"
      :text="recipeError.ingredient.message"
    />

    <v-alert
      :value="!recipeError.ingredients.succeeded"
      color="error"
      outlined
      >{{ recipeError.ingredients.message }}</v-alert
    >
    <ingredients-list
      :ingredients="recipe.ingredients"
      :onRemoveIngredient="onRemoveIngredient"
    />
    <v-textarea
      label="Description"
      filled
      placeholder="Description...."
      rows="10"
      :value="recipe.description"
      :no-resize="true"
      :rules="[resultRecipeError.description]"
      @input="(value) => onUpdateRecipe('description', value)"
    ></v-textarea>
    <v-btn type="button" color="success" @click.prevent="onSave">Save</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { FormProps } from "../formProps";
import { ResultRecipeError } from "../viewModel";
import IngredientsList from "./IngredientsList.vue";
import SnackbarComponent from "../../../../common/components/Snackbar.vue";

export default Vue.extend({
  name: "FormComponent",
  components: { IngredientsList, SnackbarComponent },
  props: {
    recipe: { required: true },
    recipeError: { required: true },
    onUpdateRecipe: { required: true },
    onSave: { required: true },
    onAddIngredient: { required: true },
    onRemoveIngredient: { required: true },
  } as FormProps,
  data() {
    return {
      ingredient: "",
      snackbar: true,
    };
  },
  computed: {
    resultRecipeError(): ResultRecipeError {
      return Object.keys(this.recipeError).reduce(
        (acc, item) => ({
          ...acc,
          [item]:
            this.recipeError[item as keyof ResultRecipeError].succeeded ||
            this.recipeError[item as keyof ResultRecipeError].message,
        }),
        {} as ResultRecipeError
      );
    },
  },
});
</script>

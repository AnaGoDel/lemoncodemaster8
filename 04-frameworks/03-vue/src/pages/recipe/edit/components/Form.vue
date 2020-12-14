<template>
  <v-form ref="form" v-model="valid">
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
import Vue, { VueConstructor } from "vue";
import { FormProps } from "../formProps";
import { ResultRecipeError } from "../viewModel";
import IngredientsList from "./IngredientsList.vue";

interface Refs {
  $refs: {
    form: HTMLFormElement;
  };
}

export default (Vue as VueConstructor<Vue & Refs>).extend({
  name: "FormComponent",
  components: { IngredientsList },
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
      valid: true,
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
  methods: {
    handleOnClick() {
      this.$refs.form.validate();
      this.onSave();
    },
  },
});
</script>

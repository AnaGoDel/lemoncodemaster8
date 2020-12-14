<template>
  <app-layout>
    <form-component v-bind="$props" />
  </app-layout>
</template>

<script lang="ts">
import Vue from "vue";
import { AppLayout } from "../../../common/layouts";
import { FormComponent } from "./components";
import { FormProps } from "./formProps";

export default Vue.extend({
  name: "RecipeEditPage",
  components: { AppLayout, FormComponent },
  props: {
    recipe: { required: true },
    recipeError: { required: true },
    onUpdateRecipe: { required: true },
    onSave: { required: true },
    onAddIngredient: { required: true },
    onRemoveIngredient: { required: true },
  } as FormProps,
});
</script>

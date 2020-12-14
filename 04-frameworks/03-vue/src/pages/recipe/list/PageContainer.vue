<template>
  <recipe-list-page
    :recipes="filteredRecipe"
    :search-text="searchText"
    :on-search="onSearch"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { RecipeVM } from "./viewModel";
import RecipeListPage from "./Page.vue";
import { fetchRecipes } from "../../../rest-api/api/recipe";
import { mapRecipeListApiToVM } from "./mapper";
import { filterRecipesByCommaSeparatedText } from "./business/filterRecipeBusiness";

export default Vue.extend({
  name: "RecipeListPageContainer",
  components: { RecipeListPage },
  data() {
    return {
      recipes: [] as RecipeVM[],
      searchText: "",
    };
  },
  computed: {
    filteredRecipe(): RecipeVM[] {
      return filterRecipesByCommaSeparatedText(this.recipes, this.searchText);
    },
  },
  created() {
    fetchRecipes()
      .then((recipes) => {
        this.recipes = mapRecipeListApiToVM(recipes);
      })
      .catch((error) => console.log(error));
  },
  methods: {
    onSearch(value: string) {
      this.searchText = value;
    },
  },
});
</script>

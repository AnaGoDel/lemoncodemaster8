<template>
  <table class="table">
    <header-component />
    <tbody>
      <row-component
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe="recipe"
      />
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { RecipeVM } from "../viewModel";
import HeaderComponent from "./Header.vue";
import RowComponent from "./Row.vue";

export default Vue.extend({
  name: "TableComponent",
  components: { HeaderComponent, RowComponent },
  props: {
    recipes: { required: true } as PropOptions<RecipeVM[]>,
  },
});
</script>

<style scoped>
.table {
  border-collapse: collapse;
  width: 100%;
}

.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>

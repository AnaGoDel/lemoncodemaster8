<template>
  <tr>
    <td class="name">
      <span>{{ recipe.name }}</span>
    </td>
    <td :class="$style.description">
      <span>{{ recipe.description }}</span>
    </td>
    <td class="edit-button">
      <v-btn text icon :to="routeEdit">
        <v-icon> edit </v-icon>
      </v-btn>
    </td>
  </tr>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { RecipeVM } from "../viewModel";
import { baseRoutes } from "../../../../router";

export default Vue.extend({
  name: "RowComponent",
  props: {
    recipe: { required: true } as PropOptions<RecipeVM>,
  },
  computed: {
    routeEdit(): string {
      return `${baseRoutes.recipe}/${this.recipe.id}`;
    },
  },
});
</script>

<style>
.name {
  width: 25%;
}
</style>

<style module>
.description {
  max-width: 177px;
}
.description span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 100%;
}
</style>

<style scoped>
.edit-button {
  text-align: end;
}
</style>

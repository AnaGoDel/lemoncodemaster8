<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>

    <v-snackbar
      v-for="(snackbar, index) in snackbars.filter((s) => s.showing)"
      :key="snackbar.text + Math.random()"
      v-model="snackbar.showing"
      :timeout="6000"
      :top="true"
      :color="snackbar.color"
      :style="`top: ${index * 60 + 8}px`"
    >
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.showing = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "App",
  computed: {
    ...mapState(["snackbars"]),
  },
});
</script>

<style>
html.js-focus-visible {
  overflow-y: auto;
}
</style>

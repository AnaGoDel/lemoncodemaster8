<template>
  <v-snackbar v-model="snackbar" :timeout="2500">
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SnackbarComponent",
  props: {
    showSnackbar: Boolean,
    text: String,
  },
  data() {
    return {
      snackbar: false,
    };
  },
  created() {
    console.log("Snackbar.vue : I'm mounted");
    if (this.showSnackbar) {
      this.snackbar = true;
    } else {
      this.snackbar = false;
    }
  },
});
</script>

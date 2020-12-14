<template>
  <login-page v-bind="{ login, loginError, updateLogin, loginRequest }" />
</template>

<script lang="ts">
import Vue from "vue";
import { loginRequest } from "../../rest-api/api/login";
import { baseRoutes } from "../../router";
import LoginPage from "./Page.vue";
import {
  createEmptyLoginVM,
  LoginVM,
  createEmptyLoginError,
} from "./viewModel";
import { mapLoginVMToApiModel } from "./mapper";
import { validation } from "./validations";

export default Vue.extend({
  name: "PageLoginContainer",
  components: { LoginPage },
  data() {
    return {
      login: createEmptyLoginVM(),
      loginError: createEmptyLoginError(),
    };
  },
  methods: {
    updateLogin(field: string, value: string) {
      this.login = {
        ...this.login,
        [field]: value,
      };

      validation.validateField(field, value).then((result) => {
        this.loginError = {
          ...this.loginError,
          [field]: result,
        };
      });
    },
    loginRequest() {
      validation.validateForm(this.login).then((result) => {
        if (result.succeeded) {
          const loginApiModel = mapLoginVMToApiModel(this.login);
          loginRequest(loginApiModel)
            .then(() => {
              this.$store.dispatch("setSnackbar", {
                text: `Welcome to our Recipe list web, ${this.login.name}!`,
              });
              this.$router.push(baseRoutes.recipe);
            })
            .catch((error) =>
              this.$store.dispatch("setSnackbar", {
                color: "error",
                text: "Invalid user",
              })
            );
        } else {
          this.loginError = {
            ...this.loginError,
            ...result.fieldErrors,
          };
          this.$store.dispatch("setSnackbar", {
            color: "error",
            text: "Please, enter name and password to log in",
          });
        }
      });
    },
  },
});
</script>

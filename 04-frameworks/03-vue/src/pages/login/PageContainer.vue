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
              this.$router.push(baseRoutes.recipe);
            })
            .catch((error) =>
              alert(
                `Este mensaje debes implementarlo con el componente Snackbar de Vuetify  ;) => ${error}`
              )
            );
        } else {
          console.log("PageContainer.vue: Aqui viene el error");
          console.log({ result });
          this.loginError = {
            ...this.loginError,
            ...result.fieldErrors,
          };
        }
      });
    },
  },
});
</script>

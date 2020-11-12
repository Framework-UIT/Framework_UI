<template>
  <div>
    <v-container fill-height fluid>
      <v-row justify="center" align-content="center">
        <v-col md="4" class="mx-auto my-auto">
          <v-alert dense outlined v-if="alert.message" :type="alert.type">
            {{ alert.message }}
          </v-alert>
          <v-container>
            <v-card class="mx-auto" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <h1>Login</h1>
                  <v-text-field
                    :class="{ 'is-invalid': submitted && !username }"
                    v-model="username"
                    :rules="[rules.required]"
                    label="Username"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required]"
                    :type="showPassword ? 'text' : 'password'"
                    name="input-10-1"
                    label="Normal with hint text"
                    hint="At least 8 characters"
                    counter
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </v-list-item-content>
              </v-list-item>

              <v-card-actions>
                <v-btn
                  :disabled="getStatus.loggingIn"
                  text
                  color="teal accent-4"
                  @click="handleSubmit"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import { mapState, mapActions } from "vuex";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("Account");
const { mapState } = createNamespacedHelpers("Alert");
export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
      showPassword: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  computed: {
    ...mapGetters(["getStatus"]),
    ...mapState({ alert: (state) => state }),
  },
  mounted() {
    // if (!localStorage.getItem("user")) this.logout();
    // else this.$router.push("/home");
  },
  methods: {
    ...mapActions(["login", "logout", { clearAlert: "clear" }]),
    handleSubmit() {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        this.login({ username, password });
      }
      // else this.alert.message = "Vui lòng nhập thông tin";
    },
  },
};
</script>

<style scoped>
input {
  /* border: transparent; */
}
.row {
  min-height: 80vh;
}
.jumbotron {
  background-color: #fff;
}
h1 {
  font-size: 25pt;
  color: #0bd577;
  font-weight: bold;
}
/* button {
  color: #fff;
  font-size: 15pt;
  background-color: #0bd577;
  margin: auto;
  min-width: 100%;
} */
</style>

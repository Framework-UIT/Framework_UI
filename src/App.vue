<template>
  <v-app class="ma-0 pa-0">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn class="dashboard" text>
        <router-link class="white--text" to="/admin"> Dashboard</router-link>
      </v-btn>
      <router-link to="/">
        <v-btn target="_blank" text>
          <span class="mr-2">Latest Release</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    // Dashboard,
  },

  data: () => ({
    //
  }),
  methods: {
    toggleSideBar() {
      this.$refs.sidebar.toggleSideBarStatus();
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,700;1,400&display=swap");

html,
body {
  font-family: "Open Sans", sans-serif;
}

#app {
  color: white;
  background-color: #19123e;
  font-family: "Open Sans", sans-serif;
}
</style>

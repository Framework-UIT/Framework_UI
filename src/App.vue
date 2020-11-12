<template>
  <v-app class="ma-0 pa-0">
    <v-app-bar app hide-on-scroll color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title class="mr-2"> eFlashcard </v-toolbar-title>
        <router-link to="/create" class="white--text"
          ><v-btn text> Create</v-btn></router-link
        >
      </div>

      <v-spacer></v-spacer>

      <v-btn class="dashboard" text>
        <router-link class="white--text" to="/admin"> Dashboard</router-link>
      </v-btn>
      <router-link to="/home">
        <v-btn target="_blank" text>
          <span class="mr-2">Home</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/topics">
        <v-btn text>
          <span class="mr-2">Topics</span>
          <v-icon>mdi-checkbox-multiple-blank-outline</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/user">
        <v-btn text>
          <span class="mr-2">Huân Cao</span>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
    <v-main>
      <router-view id="main"></router-view>
    </v-main>
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
  /* background-color: #19123e; */
  font-family: "Open Sans", sans-serif;
}
</style>

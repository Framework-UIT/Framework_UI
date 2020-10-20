<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      permanent
      class="deep-purple accent-4"
      dark
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Data",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Data", icon: "mdi-view-dashboard", route: "/admin/data" },
        { title: "About", icon: "mdi-account-box", route: "/admin/about" },
      ],
    };
  },
  methods: {
    toggleSideBarStatus() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style></style>

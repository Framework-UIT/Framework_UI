<template>
  <div>
    <v-navigation-drawer app class="deep-purple accent-4" dark>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.route">
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
          <v-btn block @click="Logout">
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main class="pa-8">
      <v-container class="mr-2">
        <section>
          <v-row class="mx-0 blue ">
            <v-col md="2">
              <v-avatar color="primary" size="120"></v-avatar>
            </v-col>
            <v-col>
              <h1>rito_alpha</h1>
            </v-col>
          </v-row>
        </section>
        <section>
          <v-row justify="space-between">
            <h1>Your sets</h1>
            <h3 class="mr-2 my-auto">view more</h3>
          </v-row>
          <v-row class="mx-0 blue lighten-2" justify="start" dense>
            <v-col md="1"> </v-col>
            <v-row>
              <v-col
                v-for="set in sets"
                :key="set.id"
                class="d-flex child-flex"
                cols="4"
              >
                <Set :set="set"> </Set>
              </v-col>
            </v-row>
            <v-col>
              <Set v-bind:quantity="26"></Set>
            </v-col>
          </v-row>
        </section>
        <section class="pt-16">
          <h1>Your cards</h1>
          <v-row>
            <v-col
              v-for="card in cards.slice(0, 12)"
              :key="card.cardId"
              class="d-flex child-flex"
              sm="4"
            >
              <CardImage
                :imgUrl="
                  `https://picsum.photos/500/300?image=${card.cardId * 5 + 10}`
                "
                :card="card"
              >
              </CardImage>
            </v-col>
          </v-row>
        </section>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Set from "../components/Set";
import CardImage from "../components/CardImg";
import { createNamespacedHelpers } from "vuex";
import { getUser } from "../api/AccountAPIServices";
const { mapActions } = createNamespacedHelpers("Account");
import router from "../router";
export default {
  name: "User",
  components: {
    Set,
    CardImage,
  },
  created() {
    getUser().then((res) => {
      this.cards = res.data.card;
      this.sets = res.data.set;
      // console.log(res);
    });
  },
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home", route: "#" },
        { title: "Set", icon: "mdi-folder-star-multiple-outline", route: "#" },
        {
          title: "Collection",
          icon: "mdi-checkbox-multiple-blank",
          route: "/#",
        },
      ],
      cards: [],
      sets: [],
    };
  },
  methods: {
    ...mapActions(["logout"]),
    Logout() {
      this.logout();
      router.push("/login");
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 31pt;
}
</style>

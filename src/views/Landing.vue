<template>
  <v-container fluid class="mx-0">
    <section>
      <v-parallax
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        height="600"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1
              class="white--text mb-2 display-1 text-xs-center"
              style="font-weight: 900; text-shadow: 3px 2px #000000"
            >
              The social network for epic content
            </h1>
          </v-col>
        </v-row>
      </v-parallax>
    </section>
    <section>
      <v-row wrap class="my-5">
        <v-col xs12 sm4 class=" text-center my-3">
          <div>
            <h2 class="headline">The best way to share your amazing stuff</h2>
            <span class="subheading">
              No more restrictions, no more limits
            </span>
          </div>
        </v-col>
      </v-row>
      <v-row xs12>
        <v-container lg>
          <v-row align-content="center">
            <v-col class="text-center">
              <v-card class="elevation-0 transparent white--text">
                <v-card-text class="text-xs-center ">
                  <v-icon class="white--text">mdi-earth</v-icon>
                </v-card-text>
                <!-- title and actions are flex components. hence the
                  justify -->
                <v-card-title class="justify-center">
                  <div>Reach Your Friends</div>
                </v-card-title>
                <v-card-text class="white--text">
                  Show you study to everyone in the world
                </v-card-text>
              </v-card>
            </v-col>
            <v-col class="text-center">
              <v-card class="elevation-0 transparent white--text">
                <v-card-text class="text-xs-center ">
                  <v-icon class="white--text">mdi-earth</v-icon>
                </v-card-text>
                <!-- title and actions are flex components. hence the
                  justify -->
                <v-card-title class="justify-center">
                  <div>Reach Your Friends</div>
                </v-card-title>
                <v-card-text class="white--text">
                  Show you study to everyone in the world
                </v-card-text>
              </v-card>
            </v-col>
            <v-col class="text-center">
              <v-card class="elevation-0 transparent white--text">
                <v-card-text class="text-xs-center ">
                  <v-icon class="white--text">mdi-earth</v-icon>
                </v-card-text>
                <!-- title and actions are flex components. hence the
                  justify -->
                <v-card-title class="justify-center">
                  <div>Reach Your Friends</div>
                </v-card-title>
                <v-card-text class="white--text">
                  Show you study to everyone in the world
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </section>
    <v-spacer></v-spacer>
    <section>
      <v-row no-gutters>
        <v-container>
          <v-row dense>
            <v-col class="mx-5" cols="12">
              <LandingCard class="mb-16" rtl></LandingCard>
              <LandingCard class="mb-16"></LandingCard>
              <LandingCard rtl></LandingCard>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </section>
  </v-container>
</template>

<script>
// @ is an alias to /src

import { getAllCardsFromDb } from "@/api/apiServices";
import LandingCard from "../components/Card";
export default {
  name: "Home",
  components: {
    LandingCard,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    getAllCardsFromDb().then((res) => {
      // console.log(res);
      this.items = res.data;
    });
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,700;1,400&display=swap");
</style>

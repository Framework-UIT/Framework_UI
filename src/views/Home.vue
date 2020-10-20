<template>
  <div>
    <v-parallax
      dark
      height="300"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">
            Vuetify
          </h1>
          <h4 class="subheading">
            Build your application today!
          </h4>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row>
      <v-col class="mx-auto">
        <h1>Popular cards</h1>
      </v-col>
    </v-row>
    <v-row>
      <AweSwiper :item-list="items"></AweSwiper>
      <!-- <v-layout wrap justify-start>
        <v-card class="mx-auto mb-5 mt-5" max-width="250">
            <v-img
              class="white--text align-end"
              src="https://picsum.photos/300"
            >
              <v-card-title>{{ item.name }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              {{ item.imgurl }}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ item.description }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                Share
              </v-btn>

              <v-btn color="orange" text>
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
      </v-layout> -->
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

import { getAllCardsFromDb } from "@/api/apiServices";
import AweSwiper from "../components/Swiper";
export default {
  name: "Home",
  components: {
    AweSwiper,
    // HelloWorld,
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
</style>

<template>
  <v-container>
    <section>
      <v-row>
        <v-col align-self="start" md="4">
          <h1>{{ set.name }}</h1>
        </v-col>
      </v-row>
    </section>
    <section class="mt-4">
      <v-row>
        <v-col cols="3">
          <v-list>
            <v-list-item>
              Test
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <CardSwiper v-if="dataLoaded" :slides="card_array"> </CardSwiper>
        </v-col>
      </v-row>
    </section>
    <section class="pt-16">
      <v-row>
        <v-col
          v-for="cardSet in set.cardSet"
          :key="cardSet.cardSetId"
          class="d-flex child-flex"
          cols="4"
        >
          <CardImage :card="cardSet.card" no_username> </CardImage>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import { getAllCardsFromDb } from "@/api/apiServices";
// import { VueperSlides, VueperSlide } from "vueperslides";
import CardImage from "../components/CardImg";
import "vueperslides/dist/vueperslides.css";
import { getSetById } from "@/api/SetServices.js";
import CardSwiper from "../components/CardSwiper";
export default {
  name: "TopicDetails",
  components: {
    CardImage,
    CardSwiper,
  },
  async created() {
    let res = await getSetById(this.$route.params.id);
    this.set = res.data;
    this.dataLoaded = true;
  },
  data() {
    return {
      set: {},
      dataLoaded: false,
      alignments: ["start", "center", "end"],
      hover: false,
      overlay: false,
      pauseOnHover: true,
      autoPlaying: true,
      internalAutoPlaying: true,
      slides: [
        {
          title: "Slide #1",
          content: "Slide content.",
        },
        {
          title: "Slide #2",
          content: "Slide content.",
        },
        {
          id: "slide-1",
          title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
          content:
            'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
        },
      ],
    };
  },
  computed: {
    card_array: function() {
      console.log(this.set);
      let cs = this.set.cardSet;
      let mapped = cs.map(function(cs) {
        return cs.card;
      });
      return mapped;
    },
  },
};
</script>
<style scoped>
h1 {
  font-size: 50pt;
}

.v-card {
  background-color: #cc435e;
}

.v-image {
  border-radius: 5px;
}
</style>

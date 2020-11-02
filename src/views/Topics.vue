<template>
  <v-container>
    <section>
      <v-row align-content="center" justify="center">
        <v-col class="grey lighten-3 text-center" align-self="center" md="4">
          <h1>Set's content here</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-row justify="center" class="blue lighten-3">
          <span class="subtitle pt-6 grey--text" md="4"
            >Set's description here Set's description here Set's description
            here Set's description here Set's description here
          </span>
        </v-row>
      </v-row>
    </section>
    <section class="pt-16">
      <v-row>
        <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
          <CardImage
            :imgUrl="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          >
          </CardImage>
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

export default {
  name: "Topics",
  components: {
    CardImage,
  },
  data() {
    return {
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

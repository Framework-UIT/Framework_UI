<template>
  <vueper-slides class="no-shadow" :visible-slides="1" arrows :bullets="false">
    <template v-slot:arrow-left>
      <v-icon large>mdi-less-than </v-icon>
    </template>

    <template v-slot:arrow-right>
      <v-icon large>mdi-greater-than</v-icon>
    </template>
    <vueper-slide v-for="(slide, i) in slides.slice(0, 5)" :key="i">
      <template v-slot:content>
        <div>
          <Flashcard :card="slide"></Flashcard>
          <!-- <CardImg :card="slide"></CardImg> -->
        </div>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
// import CardImg from "../components/CardImg";
import Flashcard from "../components/FlashCard";
export default {
  name: "CardSwiper",
  components: {
    VueperSlides,
    VueperSlide,
    // CardImg,
    Flashcard,
  },
  props: ["slides"],
  data() {
    return {
      // slides: [
      //   {
      //     title: "Slide #1",
      //     content: "Slide content.",
      //   },
      //   {
      //     title: "Slide #2",
      //     content: "Slide content.",
      //   },
      //   {
      //     id: "slide-1",
      //     title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
      //     content:
      //       'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
      //   },
      // ],
    };
  },
};
</script>

<style></style>

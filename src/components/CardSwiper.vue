<template>
  <vueper-slides
    class="no-shadow"
    :visible-slides="3"
    arrows
    :slide-ratio="1 / 3"
    :gap="3"
    :dragging-distance="70"
  >
    <template v-slot:arrow-left>
      <v-icon large>mdi-less-than </v-icon>
    </template>

    <template v-slot:arrow-right>
      <v-icon large>mdi-greater-than</v-icon>
    </template>
    <vueper-slide v-for="(slide, i) in slides.slice(0, 3)" :key="i">
      <template v-slot:content>
        <div>
          <CardImg
            :title="slide.name"
            :user="slide.userId"
            :imgUrl="`https://picsum.photos/500/300?image=${i * 5 + 10}`"
          ></CardImg>
        </div>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import CardImg from "../components/CardImg";
export default {
  name: "CardSwiper",
  components: {
    VueperSlides,
    VueperSlide,
    CardImg,
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

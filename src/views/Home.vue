<template>
  <v-container fluid>
    <v-container>
      <section>
        Science flashcards, diagrams and study guides Explore popular Science
        study sets on Quizlet. Study Science topics like Biology, Medicine and
        Earth Science. Learn what you need to get good grades in Science
        classes. Memorize important Science terms, definitions, formulas and
        concepts. Prepare for Science homework and exams with free online
        flashcards, diagrams, study guides and practice tests.
      </section>
      <section>
        <v-row no-gutters justify="center">
          <v-col md="4">
            <v-list dense flat>
              <v-list-item-group v-for="(n, index) in list" :key="index">
                <v-list-item>
                  {{ n }}
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col md="8">
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
              <vueper-slide
                v-for="i in 6"
                :key="i"
                :title="i.toString()"
                :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]"
              />
            </vueper-slides>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import { getAllCardsFromDb } from "@/api/apiServices";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Home",
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      pauseOnHover: true,
      autoPlaying: true,
      internalAutoPlaying: true,
      list: [
        "Biology",
        "Chemistry",
        "Computer Science",
        "Earth Science",
        "Engineering",
        "Medicine",
        "Physics",
        "Space Science",
      ],
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
<style scoped></style>

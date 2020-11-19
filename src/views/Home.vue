<template>
  <v-container fluid class="ml-8">
    <h1>Science flashcards, diagrams and study guide</h1>
    <div class="mt-4">
      Science flashcards, diagrams and study guides Explore popular Science
      study sets on Quizlet. Study Science topics like Biology, Medicine and
      Earth Science. Learn what you need to get good grades in Science classes.
      Memorize important Science terms, definitions, formulas and concepts.
      Prepare for Science homework and exams with free online flashcards,
      diagrams, study guides and practice tests.
    </div>
    <section>
      <v-row no-gutters justify="start">
        <v-col md="2">
          <v-list dense flat>
            <v-list-item-group v-for="(n, index) in cat_details" :key="index">
              <v-list-item>
                {{ n.name }}
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col align-self="start" md="8">
          <div v-for="cat in cat_details.slice(0, 10)" :key="cat.categoryId">
            <h1>{{ cat.name }}</h1>
            <CardSwiper :slides="cat.card"></CardSwiper>
          </div>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { getAllCategoriesWithCards } from "@/api/CategoryApiServices";
// import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
// import CardImg from "../components/CardImg";
import CardSwiper from "../components/CardSwiper";
export default {
  name: "Home",
  components: {
    CardSwiper,
  },
  data() {
    return {
      pauseOnHover: true,
      autoPlaying: true,
      internalAutoPlaying: true,
      cat_details: [],
    };
  },
  mounted() {
    getAllCategoriesWithCards().then((res) => {
      let name = res.data;
      this.cat_details = name;
    });
    console.log(this.getCatCards(1));
  },
  methods: {
    getCatCards(cat_id) {
      return this.cat_details.find((cat) => cat.categoryId == cat_id);
    },
  },
  computed: {
    categories: function() {
      return this.cat_details.map((cat) => cat.name);
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,700;1,400&display=swap");
div,
h1 {
  font-family: "Open Sans", sans-serif;
}
</style>

<template>
  <v-container fluid class="ml-8">
    <section>
      <h1 class="text-capitalize">{{ category_details.name }}</h1>
      <h4>{{ category_details.description }}</h4>
    </section>
    <section class="pt-16">
      <v-row class="mx-16">
        <v-col
          v-for="(card, index) in category_details.card"
          :key="index"
          class="mx-0"
          cols="3"
        >
          <CardImage :card="card"> </CardImage>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
import { getCategoryById } from "../api/CategoryApiServices";
import CardImage from "../components/CardImg";
export default {
  name: "CategoryView",
  components: {
    CardImage,
  },
  data() {
    return {
      category_details: [],
    };
  },
  mounted() {
    getCategoryById(this.$route.params.id).then((res) => {
      if (res.data) this.category_details = res.data;
    });
  },
};
</script>

<style></style>

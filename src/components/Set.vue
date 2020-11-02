<template>
  <v-card id="#card" color="#CC435E" dark class=".rounded-lg">
    <div class="d-flex flex-no-wrap">
      <v-avatar class="ma-3" size="120" tile>
        <v-img src="https://picsum.photos/250"></v-img>
      </v-avatar>
      <div>
        <v-card-title class="card_title">{{ title }} </v-card-title>
        <v-card-subtitle class="mt-0"
          >{{ quantity }}<span>&nbsp;cards</span></v-card-subtitle
        >
        <v-card-text class="mb-0">{{ body }}</v-card-text>

        <v-card-actions> </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Set",
  props: {
    title: String,
    body: String,
    quantity: Number,
  },
};
</script>

<style scoped>
.card_title {
  font-size: 31pt;
  color: #fbc02d;
  font-family: "Open Sans", sans-serif;
}

.v-image {
  border-radius: 10px;
}

.v-sheet.v-card {
  border-radius: 10px;
}
</style>

<template>
  <v-card id="#card" color="#CC435E" dark class=".rounded-lg">
    <div class="d-flex flex-no-wrap justify-space-between">
      <v-avatar v-if="rtl" class="ma-3" size="250" tile>
        <v-img src="https://picsum.photos/250"></v-img>
      </v-avatar>
      <div>
        <v-card-title class="card_title mb-4">The First Card</v-card-title>

        <v-card-subtitle
          >Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.</v-card-subtitle
        >
        <v-card-actions>
          <v-btn class="ml-2 mt-3" fab icon height="40px" right width="40px">
            <v-icon>mdi-play</v-icon>
          </v-btn>
        </v-card-actions>
      </div>
      <v-avatar v-if="!rtl" class="ma-3" size="250" tile>
        <v-img src="https://picsum.photos/250"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "LandingCard",
  props: {
    title: String,
    body: String,
    img: String,
    rtl: Boolean,
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

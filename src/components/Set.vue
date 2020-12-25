<template>
  <v-card
    @click="goToSetPage"
    id="#card"
    color="#CC435E"
    dark
    class=".rounded-sm"
    max-width="500px"
    max-height="300px"
  >
    <div class="d-flex flex-no-wrap">
      <v-avatar class="ma-3" size="120" tile>
        <v-img src="https://picsum.photos/250"></v-img>
      </v-avatar>
      <div>
        <v-card-title class="card_title">{{ set.name }} </v-card-title>
        <v-card-subtitle
          >{{ set.quantity }}<span>&nbsp;cards</span></v-card-subtitle
        >
        <!-- <v-card-text class="mb-0">{{ body.slice(0, 50) }}</v-card-text> -->
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Set",
  props: ["set"],
  methods: {
    goToSetPage() {
      this.$router.push(`/topics/${this.set.setId}`);
    },
  },
};
</script>

<style scoped>
.card_title {
  font-size: 21pt;
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

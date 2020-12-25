<template>
  <v-card
    class=" rounded-lg mx-auto my-auto text-center"
    rounded
    center
    min-height="300px"
  >
    <v-card-text class="py-16">
      <p class="display-1 text-h1">
        {{ card.name }}
      </p>
    </v-card-text>
    <v-row justify="end" align="center">
      <v-card-actions class="mr-4">
        <v-btn text color="teal accent-4 mx-auto" @click="reveal = true">
          View Definition
        </v-btn>
      </v-card-actions>
    </v-row>
    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out  v-card--reveal teal accent-4"
        style="height: 100%;"
      >
        <v-card-text class="pb-0 py-16 ">
          <p class="display-1 text-h1 white--text">
            {{ card.description }}
          </p>
        </v-card-text>
        <v-row align="center" justify="end">
          <v-card-actions class="pt-16 mr-10 text-center">
            <v-btn
              text
              color="white"
              class="text-center"
              @click="reveal = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  name: "Flascard",
  props: ["card"],
  data() {
    return {
      reveal: false,
    };
  },
};
</script>
<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>

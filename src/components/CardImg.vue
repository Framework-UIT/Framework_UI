<template>
  <div>
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card
          @click="dialog = true"
          class="mx-auto"
          max-width="300"
          elevation="0"
        >
          <v-img
            src="https://picsum.photos/500/300?image=100"
            :lazy-src="`https://picsum.photos/10/6`"
            aspect-ratio="1"
            class="grey lighten-2 white--text "
          >
            <v-fade-transition>
              <v-overlay
                class="pa-2 ma-0 align-end align-self-start justify-start"
                v-if="hover"
                absolute
                color="#036358"
              >
                <h2>{{ card.name }}</h2>
                <div>
                  <!-- <span class="text-caption">26 cards</span> -->
                  <!-- &middot; <span class="text-caption">{{ card.userId }}</span> -->
                </div>
              </v-overlay>
            </v-fade-transition>
          </v-img>
          <v-row v-if="no_username">
            <v-col sm="2">
              <v-avatar size="56">
                <img class="rounded" src="https://picsum.photos/500/300" />
              </v-avatar>
            </v-col>
            <v-col>
              <v-card-text>Username here</v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </template>
    </v-hover>
    <!-- Dialog -->
    <v-dialog v-model="dialog" width="1000px">
      <v-card color="#cc435e" class="pa-6">
        <div class=" card_wrapper d-flex flex-no-wrap justify-space-between ">
          <div class="">
            <v-card-title
              class="headline text-capitalize"
              :v-text="card.name"
            ></v-card-title>

            <v-card-subtitle v-text="card.description"></v-card-subtitle>

            <v-card-actions>
              <v-btn
                class="ml-2 mt-3"
                fab
                icon
                height="40px"
                right
                width="40px"
              >
                <v-icon>mdi-play</v-icon>
              </v-btn>
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" size="125" tile>
            <img src="https://picsum.photos/500/300" />
          </v-avatar>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "CardImage",
  props: { card: {}, no_username: Boolean },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
.card_wrapper {
  background-color: white;
}
</style>

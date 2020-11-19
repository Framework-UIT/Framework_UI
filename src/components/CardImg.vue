<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="mx-auto" max-width="344">
        <v-img
          :src="imgUrl"
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
              <h2>{{ title }}</h2>
              <div>
                <span class="text-caption">26 cards</span>
                &middot; <span class="text-caption">{{ user }}</span>
              </div>
            </v-overlay>
          </v-fade-transition>
        </v-img>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  name: "CardImage",
  props: {
    title: String,
    user: String,
    qty: Number,
    imgUrl: String,
  },
};
</script>

<style></style>

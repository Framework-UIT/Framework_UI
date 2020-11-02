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
              <h2>Card's name</h2>
              <span class=" ma-0 pa-0 white--text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
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
    imgUrl: String,
  },
};
</script>

<style></style>

<template>
  <v-container>
    <!-- <v-app-bar app fixed color="white">
      <v-toolbar-title class="m-16">Create a new study set</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="white--text" color="blue lighten-2">
        Create
      </v-btn>
    </v-app-bar> -->

    <section>
      <v-row justify="center" align-content="center">
        <v-col class=" text-center" align-self="center" md="6">
          <v-text-field
            label="Title"
            class="input"
            single-line
            full-widthlabel="Title"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center" align-content="center">
        <v-col md="10">
          <v-textarea
            label="Description"
            class="grey--text textarea"
            auto-grow
            rows="1"
            row-height="15"
          >
          </v-textarea>
        </v-col>
      </v-row>
    </section>

    <h1 id="title-textfield" class="text-center mt-3">
      Now let's create some cards
    </h1>
    <section v-for="i in current_cards" :key="i">
      <CardInput v-model="cardItems" :order="i"></CardInput>
    </section>
    <v-row justify="end">
      <v-btn @click="current_cards += 1" class="mt-4" large color="success"
        >Create</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
import CardInput from "../components/CardInput";
export default {
  name: "Create",
  components: { CardInput },
  data() {
    return {
      cardItems: [],
      slots: [],
      current_cards: 2,
    };
  },
};
</script>

<style lang="scss">
textarea {
  color: gray !important;
  font-style: normal !important;
}
.input {
  & input {
    text-align: center;
    padding: 0;
    font-size: 76px;
    font-family: inherit;
    padding: 0.25em 0.5em;
    background-color: #fff;
    border-radius: 4px;
    min-height: 70px;
  }
}
</style>

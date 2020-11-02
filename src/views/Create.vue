<template>
  <v-container>
    <v-app-bar class="px-16" fixed absolute color="white" elevate-on-scroll>
      <v-toolbar-title class="m-16">Create a new study set</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="white--text" color="blue lighten-2">
        Create
      </v-btn>
    </v-app-bar>
    <v-main>
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
      <section>
        <CardInput></CardInput>
      </section>
    </v-main>
  </v-container>
</template>

<script>
import CardInput from "../components/CardInput";
export default {
  name: "Create",
  components: { CardInput },
  data() {
    return {
      slots: [],
    };
  },
};
</script>

<style>
textarea {
  color: gray !important;
  font-style: normal !important;
}
.v-input input {
  text-align: center;
  padding: 0;
  font-size: 76px;
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border-radius: 4px;
  min-height: 70px;
}
</style>

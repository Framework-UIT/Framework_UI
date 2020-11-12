<template>
  <v-card class="mb-8">
    <v-list-item three-line>
      <v-list-item-content>
        <!-- <v-row> -->
        <div class=" mb-0">
          {{ order }}
        </div>
        <v-divider></v-divider>
        <v-list-item three-line>
          <v-list-item-content>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="term"
                  label="Term"
                  class="normal_input"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Defintion"></v-text-field>
              </v-col>
            </v-row>
            <v-select
              v-model="chosen_cats"
              :items="CatNames"
              label="Category"
              hint="Choose some categories"
              persistent-hint
            >
              <template v-slot:prepend-item>
                <v-list-item ripple>
                  <v-list-item-content>
                    <v-text-field
                      v-model="new_cat"
                      label="Create new Category"
                      @keyup.enter="addCat"
                    >
                    </v-text-field>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-select>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CardInput",
  props: ["order"],
  data() {
    return {
      term: "",
      new_cat: "",
      chosen_cats: [],
    };
  },
  mounted() {
    this.fetchAllCategories();
  },
  methods: {
    ...mapActions(["fetchAllCategories", "addNewCategory"]),
    addCat() {
      this.addNewCategory({ name: this.new_cat, description: "" });
      this.chosen_cats.push(this.new_cat);
      this.new_cat = "";
    },
  },
  computed: {
    ...mapGetters(["AllCategories"]),
    CatNames: function() {
      let cat_names = this.AllCategories.map((cat) => cat.name);
      return cat_names;
    },
  },
};
</script>

<style lang="scss"></style>

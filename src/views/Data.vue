<template>
  <v-container>
    <h1 class=" grey--text">Data</h1>
    <v-form @submit.prevent>
      <v-text-field
        v-model="searchVal"
        full-width
        placeholder="Give some vocabs"
      >
      </v-text-field>
      <v-btn @click="getWord">Search</v-btn>
    </v-form>
    <v-row align="center" justify="center">
      <v-data-table
        :sort-by.sync="sortBy"
        :sort-desc="sortDesc"
        :headers="headers"
        :items="items"
        class="elevation-1"
      ></v-data-table>
    </v-row>
  </v-container>
</template>

<script>
import { getCardData, getAllCardsFromDb } from "../api/apiServices";
export default {
  name: "Data",
  data() {
    return {
      sortBy: "id",
      sortDesc: true,
      pagination: { sortBy: "id", descending: false, rowsPerPage: -1 },
      searchVal: "",
      headers: [
        {
          text: "id",
          align: "start",
          sortable: true,
          value: "id",
          class: "success--text subtitle-1 font-weight-medium",
        },
        { text: "name", value: "name" },
        { text: "description", value: "description" },
      ],
      items: [],
    };
  },
  created() {
    getAllCardsFromDb().then((res) => {
      // console.log(res);
      this.items = res.data;
    });
  },
  methods: {
    getWord() {
      getCardData(this.searchVal).then((res) => {
        let result = res.data;
        result.forEach((element) => {
          let formatted_word = {
            name: element.meta.id,
            description: "shortdef" in element ? element.shortdef[0] : "",
            prs:
              "hwi" in element && "prs" in element.hwi
                ? element.hwi.prs[0].mw
                : " ",
          };
          console.log(formatted_word);
          this.items.push(formatted_word);
        });
      });
    },
  },
};
</script>

<style scoped>
.header-default {
  color: blue;
}
</style>

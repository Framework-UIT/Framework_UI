<template>
  <div>
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
    <v-row align="center" class="mt-8" justify="center">
      <v-data-table
        v-model="selected"
        show-select
        :single-select="canSingleSelect"
        :sort-by.sync="sortBy"
        :sort-desc="sortDesc"
        :headers="headers"
        :items="table_data"
        ref="table"
        class="elevation-1"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn depressed small>{{
            item.isDownloaded ? "Downloaded" : "Add to Db"
          }}</v-btn>
        </template>
      </v-data-table>
    </v-row>
  </div>
</template>

<script>
import { getCardData, createCard } from "../api/CardApiServices";
import json_data from "../assets/Data.json";
export default {
  name: "Data",
  data() {
    return {
      selected: [],
      canSingleSelect: false,
      sortBy: "id",
      sortDesc: true,
      pagination: { sortBy: "Order", descending: false, rowsPerPage: -1 },
      searchVal: "",
      headers: [
        { text: "Word", value: "Word" },
        { text: "Category", value: "Category" },
        { text: "Link API", value: "Link API" },
        { text: "Meaning", value: "Meaning" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      items: [],
    };
  },
  methods: {
    checkDownloadedItem(item) {
      return item.isDownloaded ? "error" : "primary";
    },
    addToDatabase(item) {
      createCard(item).then((res) => console.log(res));
      this.setItemDownloaded(item);
    },
    getWord() {
      if (!this.checkSearchExist())
        getCardData(this.searchVal).then((res) => {
          console.log(res);
        });
    },
  },
  computed: {
    table_data: () => {
      let json_arr = json_data["Sheet1"];
      json_arr.forEach((element) => {
        element["isDownloaded"] = false;
      });
      return json_arr;
    },
  },
};
</script>

<style scoped>
.header-default {
  color: blue;
}
</style>

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
    <v-row align="center" justify="center">
      <v-data-table
        :sort-by.sync="sortBy"
        :sort-desc="sortDesc"
        :headers="headers"
        :items="items"
        class="elevation-1"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn
            depressed
            :color="checkDownloadedItem(item)"
            small
            @click="addToDB(item)"
            >Add to DB</v-btn
          >
        </template>
      </v-data-table>
    </v-row>
  </div>
</template>

<script>
import { getCardData } from "../api/apiServices";
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
        { text: "Actions", value: "actions", sortable: false },
      ],
      items: [],
    };
  },
  created() {
    if (!localStorage.getItem("search_data")) {
      localStorage.setItem("search_data", JSON.stringify([]));
    } else {
      let copy_data = JSON.parse(localStorage.getItem("search_data"));
      copy_data.forEach((search) => {
        if (localStorage.getItem(search)) {
          let searchResults = JSON.parse(localStorage.getItem(search));
          this.items = this.items.concat(searchResults);
        }
      });
    }
    // getAllCardsFromDb().then(
    //   (res) => {
    //     // console.log(res);
    //     this.items = res.data;
    //   },
    //   (err) => console.log(err)
    // );
  },
  methods: {
    checkDownloadedItem(item) {
      return item.isDownloaded ? "error" : "primary";
    },
    addSearchToLocalStorage() {
      let copy_ls_data = JSON.parse(localStorage.getItem("search_data"));
      copy_ls_data.push(this.searchVal);
      localStorage.setItem("search_data", JSON.stringify(copy_ls_data));
    },
    addDataToLocalStorage(items) {
      localStorage.setItem(this.searchVal, JSON.stringify(items));
    },
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
            isDownloaded: false,
          };
          this.items.push(formatted_word);
        });
        this.addSearchToLocalStorage();
        this.addDataToLocalStorage(this.items);
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
